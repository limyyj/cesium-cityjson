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
  // private count = 0;

  constructor(private cesiumGeomService: CesiumGeomService) {};

  // public setCount(): void {
  //   this.count = 0;
  // }

  // public getCount(): number {
  //   return this.count;
  // }
 
  public sendMessage(message?: string) {
    this.subject.next({text: message});
  }
  public clearMessage() {
    this.subject.next();
  }
  public getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  public clearData(): void {
  }

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

  public projectPtsToWGS84(coords): number[] {
    const projcoords = proj4(this.epsg,"WGS84",[coords[0],coords[1]]);
    const newcoords = [projcoords[0],projcoords[1],coords[2]];
    return newcoords;
  }

  // Generates surfaces from an element as a group
  public genPoly(srf,surface_type): void {
    const props = {Surface_Type: surface_type,
                     LOD: 4
                    };
    const solid = [];
    while (srf !== null) {
      solid.push(...this.genTriangles(srf,props));
      srf = this.nextElement(srf.nextSibling);
    }
    this.cesiumGeomService.genSolidGrouped(solid,undefined,props);
  }

  // Generates polygons from a triangulated surface
  public genTriangles(node,props): any {
    // Get first triangle
    while ((node.nodeName.split(":")[1] !== "Triangle"))  {
      node = this.nextElement(node.firstChild);
    }
    const solid = [];
    // Loop through Triangles
    while (node !== null) {
      // get coordinates
      let coords = this.nextElement(node.firstChild);
      while ((coords.nodeName.split(":")[1] !== "posList"))  {
        coords = this.nextElement(coords.firstChild);
      }
      const dimension = coords.attributes[0].value;
      coords = coords.textContent;
      // split coordinates by " ", convert to number from string and project to wgs84
      coords = coords.split(" ");
      const coord_arr = [];
      if (dimension === "3") {
        for (let i = 0 ; i < coords.length ; i = i + 3) {
          const arr = this.projectPtsToWGS84([(Number(coords[i])/1000),(Number(coords[i+1])/1000),(Number(coords[i+2])/1000)]);
          coord_arr.push(arr);
        }
      }
      solid.push([coord_arr]);
      // this.count ++;
      node = this.nextElement(node.nextSibling);
    }
    // console.log(solid)
    return solid;
  }


  // Returns the next sibling node that is an element.
  // If no such node is found, returns null.
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

  // Checks the type of element a node is and does the required steps to extract info to generate geom
  // *TODO: convert to iterative.
  public checkElement(node) {
    // break if node is null
    if (node === null) {
      return;
    }
    const name = node.nodeName.split(":")[1];
    // If wall, extract polygons and check for openings
    if (name === "WallSurface") {
      const srf = this.getFirstSrf(node);
      this.genPoly(srf,name);

      // check for openings
      let child = this.nextElement(this.nextElement(node.firstChild).nextSibling);
      while (child !== null) {
        this.checkElement(child);
        child = this.nextElement(child.nextSibling);
      }
    }
    // Else, check for these nodes and extract polygons
    else if (name === "FloorSurface" ||
             name === "interiorRoom" ||
             name === "RoofSurface" ||
             name === "Window" ||
             name === "Door") {
      const srf = this.getFirstSrf(node);
      this.genPoly(srf,name);
    }
    // Else, loop through children
    else {
      let child = this.nextElement(node.firstChild);
      while (child !== null) {
        this.checkElement(child);
        child = this.nextElement(child.nextSibling);
      }
    }
  }

  // Returns first surface members of given node
  // Returns null if node is null or no surface members are found
  public getFirstSrf(node): any {
    while (node !== null && node.nodeName.split(":")[1] !== "surfaceMember") {
      node = this.nextElement(node.firstChild);
    }
    return node;
  }

  public readFile(file): void {
    // cityObjectMember or featureMember
    let member = this.nextElement(file.firstChild.firstChild);
    while (member !== null) {
      this.checkElement(member);
      member = this.nextElement(member.nextSibling);
    }
  }

  // Main function called to read cityGML and generate geometry
  public genGeom(file): any {
    let data = undefined;
    if (file !== undefined) {
      // Initialise dataSource and surface type ID arrays
      this.cesiumGeomService.setDataSource(new Cesium.CustomDataSource());
      this.cesiumGeomService.suspendDataSource();
      this.cesiumGeomService.initialiseSrftypeIds();

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
