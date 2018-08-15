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

  constructor(private cesiumGeomService: CesiumGeomService) {};
 
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

  public genPoly(polygons,surface_type): void {
    const props = {Surface_Type: surface_type,
                     LOD: 4
                    };
    const solid = [];
    for (let poly_id = polygons.length - 1 ; poly_id >= 0 ; poly_id--) {
      solid.push(...this.genTriangles(polygons[poly_id],props));
    }
    this.cesiumGeomService.genSolidGrouped(solid,undefined,props);
  }

  public genTriangles(html,props): any {
    const triangles = html.getElementsByTagName("gml:TriangulatedSurface")[0].getElementsByTagName("gml:trianglePatches")[0].getElementsByTagName("gml:Triangle")
    const solid = [];
    for (let tri_id = triangles.length - 1 ; tri_id >= 0 ; tri_id--) {
      // get coordinates
      let coords = triangles[tri_id].getElementsByTagName("gml:exterior")[0].getElementsByTagName("gml:LinearRing")[0].getElementsByTagName("gml:posList")[0];
      const dimension = coords.attributes[0].value;
      coords = coords.textContent;
      // split coordinates by " ", convert to number from string and project to wgs84
      coords = coords.split(" ");
      const coord_arr = [];
      if (dimension === "3") {
        for (let i = 0 ; i < coords.length ; i = i + 3) {
          const arr = this.projectPtsToWGS84([Number(coords[i]),Number(coords[i+1]),Number(coords[i+2])]);
          coord_arr.push(arr);
        }
      }
      solid.push([coord_arr]);
    }
    return solid;
  }

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

  public readFile(file): void{
    // cityObjectMember
    const objs = file.getElementsByTagName("cityObjectMember");
    file = null;
    
    // buildings
    for (let obj_id = objs.length - 1 ; obj_id >= 0 ; obj_id--) {
      const buildings = objs[obj_id].getElementsByTagName("bldg:Building");
      for (let bldg_id = buildings.length - 1 ; bldg_id >= 0 ; bldg_id--) {
        
        // buildingParts
        const parts = buildings[bldg_id].getElementsByTagName("bldg:consistsOfBuildingPart");
        for (let part_id = parts.length - 1 ; part_id >= 0 ; part_id--) {
       
          // boundedBy
          let bounds = parts[part_id].getElementsByTagName("bldg:BuildingPart")[0].getElementsByTagName("bldg:boundedBy");
          for (let bound_id = bounds.length - 1 ; bound_id >= 0 ; bound_id--) {
            
            // wall polygons
            let walls = bounds[bound_id].getElementsByTagName("bldg:WallSurface");
            for (let wall_id = walls.length - 1 ; wall_id >= 0 ; wall_id--) {
              const polygons = walls[wall_id].getElementsByTagName("bldg:lod4MultiSurface")[0].getElementsByTagName("gml:MultiSurface")[0].getElementsByTagName("gml:surfaceMember");
              this.genPoly(polygons,"WallSurface");
              //openings
              const openings = walls[wall_id].getElementsByTagName("bldg:opening");
              for (let open_id = openings.length - 1 ; open_id >= 0 ; open_id--) {
                try {
                  const polygons = openings[open_id].getElementsByTagName("bldg:Door")[0].getElementsByTagName("bldg:lod4MultiSurface")[0].getElementsByTagName("gml:MultiSurface")[0].getElementsByTagName("gml:surfaceMember");
                  this.genPoly(polygons,"Door");
                } catch {
                  const polygons = openings[open_id].getElementsByTagName("bldg:Window")[0].getElementsByTagName("bldg:lod4MultiSurface")[0].getElementsByTagName("gml:MultiSurface")[0].getElementsByTagName("gml:surfaceMember");
                  this.genPoly(polygons,"Window");
                }
              }
            }
            walls = null;
            
            // floor polygons
            let floors = bounds[bound_id].getElementsByTagName("bldg:FloorSurface");
            for (let flr_id = floors.length - 1 ; flr_id >= 0 ; flr_id--) {
              const polygons = floors[flr_id].getElementsByTagName("bldg:lod4MultiSurface")[0].getElementsByTagName("gml:MultiSurface")[0].getElementsByTagName("gml:surfaceMember");
              this.genPoly(polygons,"OuterFloorSurface");
            }
            floors = null;

            // roof polygons
            let roof = bounds[bound_id].getElementsByTagName("bldg:RoofSurface");
            for (let roof_id = roof.length - 1 ; roof_id >= 0 ; roof_id--) {
              const polygons = roof[roof_id].getElementsByTagName("bldg:lod4MultiSurface")[0].getElementsByTagName("gml:MultiSurface")[0].getElementsByTagName("gml:surfaceMember");
              this.genPoly(polygons,"RoofSurface");
            }
            roof = null;
          }
          bounds = null;
          
          // room polygons
          let rooms = parts[part_id].getElementsByTagName("bldg:BuildingPart")[0].getElementsByTagName("bldg:interiorRoom");
          for (let room_id = rooms.length - 1 ; room_id >= 0 ; room_id--) {
            const polygons = rooms[room_id].getElementsByTagName("bldg:Room")[0].getElementsByTagName("bldg:lod4MultiSurface")[0].getElementsByTagName("gml:MultiSurface")[0].getElementsByTagName("gml:surfaceMember");
            this.genPoly(polygons,"ClosureSurface");
          }
          rooms = null;
        }
      }
    }
  }
}
