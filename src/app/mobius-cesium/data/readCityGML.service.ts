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

  /* Projects input point to WGS84
     Params: Array of coordinates for 1 point as obtained from file
     Returns: Array of coordinates for point in WGS84 + height

     ** TODO: SG's height datum? */
  public projectPtsToWGS84(coords): number[] {
    const projcoords = proj4(this.epsg,"WGS84",[coords[0],coords[1]]);
    const newcoords = [(projcoords[0]),(projcoords[1]),(coords[2])];
    if (this.epsg === "+proj=tmerc +lat_0=1.366666666666667 +lon_0=103.8333333333333 +k=1 +x_0=28001.642 +y_0=38744.572 +ellps=WGS84 +units=m +no_defs") {
      newcoords[2] -= 104;
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
  public genPoly(srf,surface_type): void {
    const props = Object.assign({Surface_Type: surface_type}, this.currProps);
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
    // console.log(solid);
    this.cesiumGeomService.genSolidGrouped(solid,undefined,props);
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
    let coord_arr: number[][] = [];
    let arr: number[] = [];
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
        // split coordinates by " ", convert to number from string and project to wgs84
        coordsplit = coordinates.split(" ");
        coord_arr.length = 0;
        if (dimension === "3") {
          for (let i = 0 ; i < coordsplit.length ; i = i + 3) {
            arr = this.projectPtsToWGS84([(Number(coordsplit[i])),(Number(coordsplit[i+1])),(Number(coordsplit[i+2]))]);
            coord_arr.push(arr);
          }
        }
        polygon.push(coord_arr);
        // if positions are in pos, loop through, split and project each one to wgs84, then push to polygon
      } else if (coords.nodeName.split(":")[1] === "pos") {
        coord_arr.length = 0;
        while (coords !== null) {
          coordinates = coords.textContent;
          // split coordinates by " ", convert to number from string and project to wgs84
          coordsplit = coordinates.split(" ");
          arr = this.projectPtsToWGS84([(Number(coordsplit[0])),(Number(coordsplit[1])),(Number(coordsplit[2]))]);
          coord_arr.push(arr);
          coords = this.nextElement(coords.nextSibling);
        }
        polygon.push(coord_arr);
      }
      node = this.nextElement(node.nextSibling);
    }
    // console.log(polygon);
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

  /* Checks the type of element a node is and does the required steps to extract info to generate geom
     - keeps track of current cityObjectMember/featureMember/Building/BuildingPart number for properties
     Params: XML node to check
     Uses: - nextElement
           - getFirstSrf
           - genPoly

     ** TODO: convert to iterative */
  public checkElement(node): void {
    // break if node is null
    if (node === null) {
      return;
    }
    // Keep track of obj number for props
    const name = node.nodeName.split(":")[1];
    if (name === "cityObjectMember" ||
        name === "featureMember" ||
        name === "Building" ||
        name === "BuildingPart") {
      this.addObjCount(name);
      this.currProps[name] = this.objCount[name];
      // Loop through children
      let child = this.nextElement(node.firstChild);
      while (child !== null) {
        this.checkElement(child);
        child = this.nextElement(child.nextSibling);
      }
    }
    // If wall, extract polygons and check for openings
    else if (name === "WallSurface") {
      if (node.firstChild !== null) {
        const srf = this.getFirstSrf(node);
        this.genPoly(srf,name);
        // openings
        let child = this.nextElement(this.nextElement(node.firstChild).nextSibling);
        while (child !== null) {
          this.checkElement(child);
          child = this.nextElement(child.nextSibling);
        }
      }
    }
    // Else, check for these nodes and extract polygons
    else if (name === "FloorSurface" ||
             name === "Room" ||
             name === "RoofSurface" ||
             name === "Window" ||
             name === "Door") {
      if (node.firstChild !== null) {
        const srf = this.getFirstSrf(node);
        this.genPoly(srf,name);
      }
    }
    // Else, just loop through children
    else {
      let child = this.nextElement(node.firstChild);
      while (child !== null) {
        this.checkElement(child);
        child = this.nextElement(child.nextSibling);
      }
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

  /* Reads file and loops through each cityObjectMember or featureMember
     - Calls checkElement to process elements and generate geometry
     Params: XML node to check
     Returns: XML node of first surface member, null if not found
     Uses: - nextElement */
  public readFile(file): void {
    // cityObjectMember or featureMember
    let member = this.nextElement(file.firstChild);
    while (member !== null) {
      this.currProps = {};
      this.objCount = {};
      this.checkElement(member);
      member = this.nextElement(member.nextSibling);
    }
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
      // TODO proper crs, for now default
      this.setEPSG(undefined);
      const context = this;
      data = this.epsg.then((epsg) => {
        context.epsg = epsg;
        context.readFile(file);
        context.cesiumGeomService.resumeDataSource();
        return context.cesiumGeomService.getDataSource();
      });
    }
    return data;
  }
}
