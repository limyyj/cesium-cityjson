import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import {Subject} from "rxjs/Subject";
import * as chroma from "chroma-js";
import proj4 from "proj4";
import * as earcut from "earcut";
import { CesiumGeomService } from "./cesiumGeom.service";

@Injectable()
export class CityGMLService {
  private subject = new Subject<any>();
  private epsg: any;
  private currProps: object;
  private objCount: object;

  constructor(private cesiumGeomService: CesiumGeomService) {}
 
  public sendMessage(message?: string) {
    this.subject.next({text: message});
  }
  public clearMessage() {
    this.subject.next();
  }
  public getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  /* Reads and sets EPSG value for Proj4 projection
     - looks up epsg.io if EPSG code is found
     - defaults to EPSG:3414 if undefined

     ** TODO: read crs from file, currently always recieves undefined */
  public setEPSG(crs): void {
    this.epsg = new Promise(function(resolve) {
      let val = "";
      if (crs === undefined) {
      // if undefined, default is EPSG 3414 sweats (WGS84 causes our models to go crazy, with EPSG 3414 they at least show up)
        val = "+proj=tmerc +lat_0=1.366666666666667 +lon_0=103.8333333333333 +k=1 +x_0=28001.642 +y_0=38744.572 +ellps=WGS84 +units=m +no_defs";
        resolve(val);
      } else {
        // search EPSG.io
        const url = "https://epsg.io/"+crs+".proj4";

        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
          if (xhttp.readyState === 4 && xhttp.status === 200) {
            val = xhttp.responseText;
            if (val === undefined) {
              val = "+proj=tmerc +lat_0=1.366666666666667 +lon_0=103.8333333333333 +k=1 +x_0=28001.642 +y_0=38744.572 +ellps=WGS84 +units=m +no_defs";
            }
            resolve(val);
          }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
      }
    });
  }

  public clearEPSG(): void {
    this.epsg = undefined;
  }

  /* Projects input point to WGS84
     Params: Array of coordinates for 1 point as obtained from file
     Returns: Array of coordinates for point in WGS84 + height

     ** TODO: SG's height datum? */
  public projectPtsToWGS84(coords): number[] {
    const projcoords = proj4(this.epsg,"WGS84",[coords[0],coords[1]]);
    const newcoords = [(projcoords[0]),(projcoords[1]),(coords[2])];
    if (this.epsg === "+proj=tmerc +lat_0=1.366666666666667 +lon_0=103.8333333333333 +k=1 +x_0=28001.642 +y_0=38744.572 +ellps=WGS84 +units=m +no_defs") {
      // newcoords[2] -= 104;
    }
    return newcoords;
  }

  /* Generates surfaces from an element as a group
     - Obtains coordinates and properties for all "Triangle" and "Polygon" surfaces in the element
     - Calls cesiumGeomService to generate entities
     Params: XML node for an element that contains surfaces to generate (eg. WallSurface / Room)
             Name of node (to be used as surface type for properties)
     Uses: - nextElement
           - getCoords
           - cesiumGeomService.genSolidGrouped */
  public genPoly(srf,props,srf_type): void {
    // const props = Object.assign({Surface_Type: surface_type}, this.currProps);
    const solid = [];
    // loop through all surfaces in element
    while (srf !== null) {
      // get first Triangle or Polygon (depends on what the CityGML is using)
      let firstSrf = srf;
      while ((firstSrf.nodeName.split(":")[1] !== "Triangle") && (firstSrf.nodeName.split(":")[1] !== "Polygon"))  {
        firstSrf = this.nextElement(firstSrf.firstChild);
      }
      // if Triangle, step into first child (exterior linear ring) and get coords
      // loop through all other triangles in surface
      if (firstSrf.nodeName.split(":")[1] === "Triangle") {
        while (firstSrf !== null) {
          const poly = this.nextElement(firstSrf.firstChild);
          solid.push(this.getCoords(poly));
          firstSrf = this.nextElement(firstSrf.nextSibling);
        }
      }
      // if Polygon, step into first child (exterior linear ring) and get coords
      else if (firstSrf.nodeName.split(":")[1] === "Polygon") {
        firstSrf = this.nextElement(firstSrf.firstChild);
        solid.push(this.getCoords(firstSrf));
      }
      // extract and convert all coordinates for surface and push to solid
      srf = this.nextElement(srf.nextSibling);
    }
    this.cesiumGeomService.genSolidGrouped(solid,undefined,props,srf_type);
  }

  /* Obtains and prepares coordinates from the linear rings that make up ONE Triangle or Polygon
     - Also handles holes in polygons
     - First linear ring is exterior ring, subsequent are holes
     - Coordinates should be in "pos" or "posList" with dimension "3"
     Params: XML node for an element that contains coordinates
     Returns: Array of linear rings (eg. [ [[0,0,0],[0,0,1],[0,1,1],[0,0,0]] , [[0,0.2,0.2],[0,0.2,0.8],[0,0.8,0.8],[0,0.2,0.2]])
     Uses: - nextElement
           - projectPtsToWGS84 */
  public getCoords(node): any {
    const polygon = [];
    let dimension: string;
    let coordinates: string;
    let coordsplit: string[];
    // Loop through Linear rings
    while (node !== null) {
      // get coordinates
      let coords = this.nextElement(node.firstChild);
      while ((coords.nodeName.split(":")[1] !== "LinearRing"))  {
        coords = this.nextElement(coords.firstChild);
      }
      coords = this.nextElement(coords.firstChild);
      // if positions are in posList, split and project to wgs84 in threes, then push to polygon
      if (coords.nodeName.split(":")[1] === "posList") {
        dimension = coords.attributes[0].value;
        coordinates = coords.textContent;
        // replace linebreaks with spaces if any
        coordinates = coordinates.replace(/\n/g, " ");
        // split coordinates by " ", convert to number from string and project to wgs84
        coordsplit = coordinates.split(" ");
        const coord_arr: number[][] = [];
        if (dimension === "3") {
          for (let i = 0 ; i < coordsplit.length ; i = i + 3) {
            const arr = this.projectPtsToWGS84([(Number(coordsplit[i])),(Number(coordsplit[i+1])),(Number(coordsplit[i+2]))]);
            coord_arr.push(arr);
          }
        }
        polygon.push(coord_arr);
        // if positions are in pos, loop through, split and project each one to wgs84, then push to polygon
      } else if (coords.nodeName.split(":")[1] === "pos") {
        const coord_arr: number[][] = [];
        while (coords !== null) {
          coordinates = coords.textContent;
          // split coordinates by " ", convert to number from string and project to wgs84
          coordsplit = coordinates.split(" ");
          const arr = this.projectPtsToWGS84([(Number(coordsplit[0])),(Number(coordsplit[1])),(Number(coordsplit[2]))]);
          coord_arr.push(arr);
          coords = this.nextElement(coords.nextSibling);
        }
        polygon.push(coord_arr);
      }
      node = this.nextElement(node.nextSibling);
    }
    return polygon;
  }

  /* Finds the next sibling node that is an element
     Params: XML node to check
     Returns: XML node for next element if found, null if not found */
  public nextElement(node): any {
    // if node is null, return null.
    if (node === null) {
      return null;
    }
    // Loops through siblings untill an element is found
    // If siblings end up returning null, return null.
    while (node.nodeType !== 1) {
      node = node.nextSibling;
      if (node === null) {
        return null;
      }
    }
    return node;
  }

  public getName(node): string {
    const split = node.nodeName.split(":");
    const nodename = split[split.length - 1];
    return nodename;
  }

  public checkCityModel(node): any {
    const nodes = [];
    const citymodel_props = {};
    const citymodel_ade = {};
    while (node !== null) {
      const nodename = this.getName(node);
      // extract name
      if (nodename === "name") {
        const name = node.textContent;
        citymodel_props[nodename] = name;
      }
      // extract envelope
      else if (nodename === "boundedBy") {
        // extract crs
        const envelope = this.nextElement(node.firstChild);
        if (envelope != null) {
          citymodel_props["srsName"] = envelope.getAttribute("srsName");
          let srs : String[];
          srs = (envelope.getAttribute("srsName")).split(",");
          srs = srs[1].split(":");
          const epsg = srs[srs.length-1];
          this.setEPSG(epsg);
        }
        // extract pos - TODO
      }
      // extract list of cityobjectmember and featuremember
      else if (nodename === "cityObjectMember" ||
                 nodename === "featureMember") {
        nodes.push(node);
      }
      // skip appearanceMember
      else if (nodename === "appearanceMember"){}
      // extract everything else
      else {
        this.checkADE(node,citymodel_ade);
      }
      node = this.nextElement(node.nextSibling);
    }
    // console.log(nodes,citymodel_props,citymodel_ade);
    return [nodes, {"citymodel_props":citymodel_props, "citymodel_ade":citymodel_ade}] ;
  }

  public checkFeatures(nodes, props): void {
    // cityObjectMember or featureMember
    for (let node of nodes) {
      const featurenodes = [];
      const feature_props = {};
      const feature_ade = {};
      const membername = this.getName(node);
      this.addObjCount(membername);
      feature_props[membername] = this.objCount[membername];

      node = this.nextElement(node.firstChild);
      while (node !== null) {
        const featurename = this.getName(node);
        // extract list of buildings
        if (featurename === "Building") {
          featurenodes.push(node);
        }
        // skip other stuff 
        else if (featurename === "Bridge" ||
                 featurename === "Building" ||
                 featurename === "SolitaryVegetationObject" ||
                 featurename === "CityFurniture" ||
                 featurename === "Road" ||
                 featurename === "ReliefFeature" ||
                 featurename === "LandUse") {}
        // else ADE
        else {
          this.checkADE(node,feature_ade);
        }
        node = this.nextElement(node.nextSibling);
      }
      // console.log(featurenodes,feature_props,feature_ade);
      if (featurenodes.length > 0) {
        let props2 = Object.assign({}, props);
        props2 = Object.assign(props2,{"feature_props":feature_props, "feature_ade":feature_ade});
        this.checkBuildings(featurenodes, props2);
      }
    }
  }

  public checkBuildings(nodes, props): void {
    // Building
    for (let node of nodes) {
      const bldgnodes = [];
      const partnodes = [];
      const elemnodes = [];
      const bldg_props = {};
      const bldg_ade = {};
      const bldgname = this.getName(node);
      this.addObjCount(bldgname);
      bldg_props[bldgname] = this.objCount[bldgname];

      node = this.nextElement(node.firstChild);
      while (node !== null) {
        const featurename = this.getName(node);
        // extract list of buildings
        if (featurename === "consistsOfBuildingPart" ||
            featurename === "buildingSubdivision" ) {
          bldgnodes.push(this.nextElement(node.firstChild));
        }
        // jump to checking elem
        else if (featurename === "outerBuildingInstallation" ||
                 featurename === "boundedBy") {
          const part = this.nextElement(node.firstChild);
          if (part !== null) {
            partnodes.push(part);
          }  
        }
        // jump to gen poly??
        else if (featurename.includes("lod")) {
          const part = this.nextElement(node.firstChild);
          if (part !== null) {
            elemnodes.push(part);
          }  
        }
        // else properties
        else if (featurename === "name" ||
                 featurename === "creationDate" ||
                 featurename === "externalReference" ||
                 featurename === "function" ||
                 featurename === "measuredHeight" ||
                 featurename === "address") {
          this.checkADE(node,bldg_props);
        }
      // else ADE
        else {
          this.checkADE(node,bldg_ade);
        }
        node = this.nextElement(node.nextSibling);
      }
      // console.log(bldgnodes,bldg_props,bldg_ade);
      let props2 = Object.assign({}, props);
      props2 = Object.assign(props2,{"bldg_props":bldg_props, "bldg_ade":bldg_ade});
      if (bldgnodes.length > 0) {
        this.checkParts(bldgnodes, props2);
      }
      if (partnodes.length > 0) {
        this.checkElements(partnodes, props2);
      }
      if (elemnodes.length > 0) {
        for (let srf of elemnodes) {
          srf = this.getFirstSrf(this.nextElement(srf.firstChild));
          this.genPoly(srf,props2,bldgname);
        }
      }
    }
  }

  public checkParts(nodes, props): void {
    // Building
    for (let node of nodes) {
      const partnodes = [];
      const part_props = {};
      const part_ade = {};
      const partname = this.getName(node);
      this.addObjCount(partname);
      part_props[partname] = this.objCount[partname];

      node = this.nextElement(node.firstChild);
      while (node !== null) {
        const featurename = this.getName(node);
        // extract list of buildings
        if (featurename === "boundedBy" ||
            featurename === "boundary" ||
            featurename === "interiorRoom") {
          const part = this.nextElement(node.firstChild);
          if (part !== null) {
            partnodes.push(part);
          }   
        }
      // else ADE
        else {
          this.checkADE(node,part_ade);
        }
        node = this.nextElement(node.nextSibling);
      }
      // console.log(partnodes,part_props,part_ade);
      if (partnodes.length > 0) {
        let props2 = Object.assign({}, props);
        props2 = Object.assign(props2,{"part_props":part_props, "part_ade":part_ade});
        this.checkElements(partnodes, props2);
      }
    }
  }

  public checkElements(nodes, props): void {
    for (let node of nodes) {
      const elemnodes = [];
      const openings = [];
      const elem_props = {};
      const elem_ade = {};
      const elemname = this.getName(node);

      // skip envelope?
      if (elemname === "Envelope") {
        break;
      }
      // this.addObjCount(elemname);
      elem_props["Surface_Type"] = elemname;

      node = this.nextElement(node.firstChild);
      while (node !== null) {
        const featurename = this.getName(node);
        // extract srf
        if (featurename.includes("lod")) {
          const part = this.nextElement(node.firstChild);
          if (part !== null) {
            elemnodes.push(part);
          }   
        }
        // extract openings
        else if (featurename === "opening") {
          const part = this.nextElement(node.firstChild);
          if (part !== null) {
            openings.push(part);
          }   
        }
      // else ADE
        else {
          this.checkADE(node,elem_ade);
        }
        node = this.nextElement(node.nextSibling);
      }
      // console.log(elemnodes,elem_props,elem_ade);
      let props2 = Object.assign({}, props);
      props2 = Object.assign(props2,{"elem_props":elem_props, "elem_ade":elem_ade});
      if (elemnodes.length > 0) {
        for (let srf of elemnodes) {
          srf = this.getFirstSrf(this.nextElement(srf.firstChild));
          this.genPoly(srf,props2,elemname);
        }
      }
      if (openings.length > 0) {
        this.checkOpenings(openings,props2);
      }
    }
  }

  public checkOpenings(nodes, props) {
    for (let node of nodes) {
      const openings = [];
      const opening_props = {};
      const opening_ade = {};
      const openingname = this.getName(node);
      // this.addObjCount(elemname);
      opening_props["Surface_Type"] = openingname;

      node = this.nextElement(node.firstChild);
      while (node !== null) {
        const featurename = this.getName(node);
        // extract srf
        if (featurename.includes("MultiSurface")) {
          const part = this.nextElement(node.firstChild);
          if (part !== null) {
            openings.push(part);
          }
        }
      // else ADE
        else {
          this.checkADE(node,opening_ade);
        }
        node = this.nextElement(node.nextSibling);
      }
      // console.log(elemnodes,elem_props,elem_ade);
      if (openings.length > 0) {
        let props2 = Object.assign({}, props);
        props2 = Object.assign(props2,{"opening_props":opening_props, "opening_ade":opening_ade});
        for (let srf of openings) {
          srf = this.getFirstSrf(this.nextElement(srf.firstChild));
          this.genPoly(srf,props2,openingname);
        }
      }
    }
  }

  public checkADE(node,ade): void {
    if (node === null) {
      return;
    }
    const name = this.getName(node);
    if (node.innerHTML === node.textContent) {
      ade[name] = node.textContent;
    }
    let child = this.nextElement(node.firstChild);
    while (child !== null) {
      this.checkADE(child,ade);
      child = this.nextElement(child.nextSibling);
    }
  }

  /* Updates counter for cityObjectMember/featureMember/Building/BuildingPart
     - adds new counter if not already present
     Params: name of counter to update (cityObjectMember/featureMember/Building/BuildingPart)*/
  private addObjCount(prop): void {
    // if prop doesn't exist, add it
    if (this.objCount[prop] === undefined) {
      this.objCount[prop] = 0;
    }
    // if it already exists then ++
    else {
      this.objCount[prop]++;
    }
  }

  /* Finds next node that is a "surfaceMember"
     Params: XML node to check
     Returns: XML node of first surface member, null if not found
     Uses: - nextElement */
  public getFirstSrf(node): any {
    while (node !== null && node.nodeName.split(":")[1] !== "surfaceMember") {
      node = this.nextElement(node.firstChild);
    }
    return node;
  }

  /* Main function to read file and return datasource containing generated entities
     - Initialises, retrieves and clears data from cesiumGeomService
     Called in viewer.component LoadData
     Params: CityGML file
     Returns: Cesium datasource containing entities generated from input file */
  public genGeom(file): any {
    let data = undefined;
    if (file !== undefined) {
      // Initialise dataSource and surface type ID arrays
      this.cesiumGeomService.initialiseCesium();
      this.objCount = {};
      this.currProps = {};

      // Get properties of CityModel
      const member = this.nextElement(this.nextElement(file.firstChild).firstChild);
      const nodes = this.checkCityModel(member);

      if (this.epsg === undefined) {
        this.setEPSG(undefined);
      }
      const context = this;
      data = this.epsg.then((epsg) => {
        context.epsg = epsg;
        context.checkFeatures(nodes[0],nodes[1]);
        context.cesiumGeomService.resumeDataSource();
        context.clearEPSG();
        return context.cesiumGeomService.getDataSource();
      });
    }
    return data;
  }
}
