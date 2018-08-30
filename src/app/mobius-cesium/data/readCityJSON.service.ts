import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import {Subject} from "rxjs/Subject";
import * as chroma from "chroma-js";
import proj4 from "proj4";
import * as earcut from "earcut";
import { CesiumGeomService } from "./cesiumGeom.service";

@Injectable()
export class CityJSONService {
  private subject = new Subject<any>();
  private file: JSON;
  private epsg: any;
  private vertices: any;
  private materials: any;
  private templates: any;
  private template_vertices: any;
  private scale: number[];
  private translate: number[];

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
    this.file = undefined;
    this.epsg = undefined;
    this.vertices = undefined;
    this.materials = undefined;
    this.templates = undefined;
    this.template_vertices = undefined;
    this.scale = undefined;
    this.translate = undefined;
  }

  public setEPSG(): void {
    const meta = this.file["metadata"];
    this.epsg = new Promise(function(resolve) {
      let val = "";
      if (meta["crs"] === undefined || meta["crs"]["epsg"] === undefined) {
      // if undefined, default is EPSG 3414 sweats (WGS84 causes our models to go crazy, with EPSG 3414 they at least show up)
        val = "+proj=tmerc +lat_0=1.366666666666667 +lon_0=103.8333333333333 +k=1 +x_0=28001.642 +y_0=38744.572 +ellps=WGS84 +units=m +no_defs";
        resolve(val);
      } else {
        // search EPSG.io
        const url = "https://epsg.io/"+meta["crs"]["epsg"]+".proj4";

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

  public setVertices(): void {
    if (this.file["vertices"] !== undefined) {
      this.vertices = this.file["vertices"];
    }
  }

  public setMaterials(): void {
    const materials = [];
    if (this.file["appearance"] === undefined || this.file["appearance"]["materials"] == undefined) {
      this.materials = undefined;
    } else {
      this.file["appearance"]["materials"].forEach((mat) => {
      const color = mat["diffuseColor"];
      color.push(mat["transparency"]);
      materials.push(new Cesium.Color(...color));
    });
    this.materials = materials;
    }
  }

  public setTemplates(): void {
    // Pull out array of template boundaries and vertices
    if (this.file["geometry-templates"] === undefined) {
      this.templates = undefined;
    } else {
      const templates = [];
      if (this.file["geometry-templates"]["templates"] !== undefined) {
        this.file["geometry-templates"]["templates"].forEach((temp) => {
          if (temp.lod < 3) {
            templates.push(undefined);
          } else {
            templates.push(temp);
          }
        });
      }
      if (this.file["geometry-templates"]["vertices-templates"] !== undefined) {
        this.template_vertices = this.file["geometry-templates"]["vertices-templates"];
      }
      this.templates = templates;
    }
    
  }

  public setTransform(): void {
    if (this.file["transform"] !== undefined) {
      this.scale = this.file["transform"].scale;
      this.translate = this.file["transform"].translate;
    } else {
      this.scale = undefined;
      this.translate = undefined;
    }
  }

  public projectPtsToWGS84(coords): number[] {
    const projcoords = proj4(this.epsg,"WGS84",[coords[0],coords[1]]);
    const newcoords = [projcoords[0],projcoords[1],coords[2]];
    return newcoords;
  }


  public transformTemplate(coord,transform): number[] {
    const pt = Cesium.Cartesian3.fromArray(coord);
    const t = Cesium.Matrix4.multiplyByPoint(transform.temp_matrix,pt,new Cesium.Cartesian3());
    const coord2 = [(t["x"]+transform.refpt[0]),(t["y"]+transform.refpt[1]),(t["z"]+transform.refpt[2])];
    return coord2;
  }

  public transformCityJSON(coord): number[] {
    const pt = [undefined,undefined,undefined];
    pt[0] = (coord[0] * this.scale[0]) + this.translate[0];
    pt[1] = (coord[1] * this.scale[1]) + this.translate[1];
    pt[2] = (coord[2] * this.scale[2]) + this.translate[2];
    return pt;
  }

  public genGeom(file: JSON): any {
    let data = undefined;
    if (file !== undefined) {
      this.file = file;
      file = null;
      if (this.file["metadata"] !== undefined) {
        this.setEPSG();
        this.setVertices();
        this.setMaterials();
        this.setTemplates();
        this.setTransform();

        // Initialise dataSource and surface type ID arrays
        this.cesiumGeomService.setDataSource(new Cesium.CustomDataSource());
        this.cesiumGeomService.suspendDataSource();
        this.cesiumGeomService.initialiseSrftypeIds();

        const context = this;
        data = this.epsg.then((epsg) => {
          context.epsg = epsg;
          context.readFile();
          context.clearData();
          context.cesiumGeomService.resumeDataSource();
          return context.cesiumGeomService.getDataSource();
        });
      }
    }
    return data;
  }

  public readFile(): void {
    // Loop through CityObjects
    const city_object_keys = Object.keys(this.file["CityObjects"]);
    const city_object = this.file["CityObjects"];
    this.file = undefined;
    for (let obj_index = city_object_keys.length - 1 ; obj_index >= 0  ; obj_index --) {
      const obj =  city_object[city_object_keys[obj_index]];

      // Get object type if type is BuildingPart or BuildingInstallation, skip because we'll reference it from a building.
      const cityobj_type = obj.type;
      if (cityobj_type === "BuildingPart" || cityobj_type === "BuildingInstallation") {
        continue;
      }

      // Get object attributes
      const cityobj_attrib = obj.attributes;

      // Get object parts & installations
      const cityobj_parts_ID = [];
      if (obj.Parts !== undefined) {
        cityobj_parts_ID.push(...obj.Parts);
      }
      if (obj.Installations !== undefined) {
        cityobj_parts_ID.push(...obj.Installations);
      }
      const cityobj_parts_geom = [];
      const cityobj_parts_attrib = [];
      const cityobj_parts_type = [];
      if (cityobj_parts_ID !== undefined) {
        cityobj_parts_ID.forEach((ID) => {
          cityobj_parts_geom.push(...city_object[ID].geometry);
          cityobj_parts_attrib.push(city_object[ID].attributes);
          cityobj_parts_type.push(city_object[ID].type);
        });
      }

      const all_geom = obj.geometry.concat(cityobj_parts_geom);

      let parts_start = obj.geometry.length;
      let parts_index = 0;

      // Loop through geometry (typically used for different LOD but not necessarily, may contain multiple)
      for (let geom_index = all_geom.length - 1 ; geom_index >= 0  ; geom_index--) {
        const geom = all_geom[geom_index];
        if (geom == undefined) {
          continue;
        }

        // Check LOD
        let lod = geom.lod;
        // if (lod !== undefined && lod < 3) {
        //   continue;
        // }

        // Set values to use for polygon generation
        // vertex_arr: array of vertices in the file to refer to (vertices or template_vertices)
        // boundaries: array of vertex position indexes to refer to (boundaries from geometry or template)
        // transfrom: object containing transformation matrix (temp_matrix) and reference point (refpt) of the geometry instance
        let vertex_arr = this.vertices;
        let boundaries = geom.boundaries;
        let transform = {temp_matrix:undefined, refpt:undefined};

        // Check geometry type
        let geom_type = geom.type;
        if (geom_type === "GeometryInstance") {
          if (this.templates[geom.template] !== undefined) {
            vertex_arr = this.template_vertices;
            boundaries = this.templates[geom.template].boundaries;
            geom_type = this.templates[geom.template].type;
            lod = this.templates[geom.template].lod;
            transform.temp_matrix = Cesium.Matrix4.fromArray(geom.transformationMatrix);
            transform.refpt = this.vertices[geom.boundaries[0]];
          }
        }

        if (boundaries === undefined) {
          continue;
        }

        // Pull out array of semantics values & surfaces
        let values: any;
        let surfaces: any;
        if (geom["semantics"] !== undefined) {
          values = geom["semantics"]["values"];
          surfaces = geom["semantics"]["surfaces"];
        }

        // Pull out materials values
        let mats: any;
        if (geom["material"] !== undefined) {
          mats = geom["material"][""]["values"];
        }

        // // Loop through surfaces
        for (let srf_index = 0 ; srf_index < boundaries.length ; srf_index ++) {
          if (boundaries[srf_index][0] === undefined) {
            continue;
          }

          // Extract surface type and materials
          let surface_type = ["None"];
          const colour = [];
          if (geom_type === "MultiSurface") {
            if (values !== undefined && values[srf_index] !== null && values[srf_index] !== undefined) {
              surface_type = [(surfaces[values[srf_index]]["type"])];
            }
            if (mats !== undefined) {
              colour.push(this.materials[mats[srf_index]]);
            }
          } else if (geom_type === "Solid") {
            surface_type = [];
            if (values !== undefined && values[srf_index] !== null && values[srf_index] !== undefined) {
              values[srf_index].forEach((value) => {
                surface_type.push(surfaces[value]["type"]);
              });
            }
            if (mats !== undefined) {
              mats[srf_index].forEach((value) => {
                colour.push(this.materials[value]);
              });
            }
          }

          // Create property bag (with parent information if obj is building part)
          const props = {Object_ID: city_object_keys[obj_index],
                         Object_Type: cityobj_type,
                         Geom_Type: geom_type,
                         Surface_Type: surface_type[0],
                         LOD: lod,
                         Parent_ID: "None",
                         Parent_Type: "None"
                        };
          if (geom_index >= parts_start) {
            props.Object_ID = cityobj_parts_ID[parts_index];
            props.Object_Type = cityobj_parts_type[parts_index];
            props.Parent_ID = city_object_keys[obj_index];
            props.Parent_Type = cityobj_type;
          }
          if (props.Surface_Type === undefined) {
            props.Surface_Type = "None"
          }

          // Add attributes from parent to properties
          if (cityobj_attrib !== undefined) {
            Object.keys(cityobj_attrib).forEach((name) => {
              props[name] = cityobj_attrib[name];
            });
          }

          // Add attributes from parent to properties
          if (cityobj_parts_attrib[parts_index] !== undefined) {
            Object.keys(cityobj_parts_attrib[parts_index]).forEach((name) => {
              props[name] = cityobj_parts_attrib[parts_index][name];
            });
          }

          // MULTISURFACE
          if (geom_type === "MultiSurface") {
            // polygon: nested array of coordinates that make up a polygon.
            // polygon[0] contains the points for the outer ring.
            // polygon[1]... contain the points for the holes.
            const polygon = [];
            boundaries[srf_index].forEach((ring) => {
              const ringpts = [];
              ring.forEach((ID) => {
                let coord = vertex_arr[ID];
                // if object is a geometry instance, multiply by transformation matrix and add reference point
                if (transform.refpt !== undefined) {
                  coord = this.transformTemplate(coord,transform);
                }
                // transform coordinates if transform specification exists in file
                if (this.scale !== undefined) {
                  coord = this.transformCityJSON(coord);
                }
                // project to wgs84
                coord = this.projectPtsToWGS84(coord);
                ringpts.push(coord);
              });
              polygon.push(ringpts);
            });
            // create polygon in Cesium
            this.cesiumGeomService.genMultiPoly(polygon,colour[0],props);
            // i++ 
          } 
          // SOLIDS
          else if (geom_type === "Solid") {
            const solid = [];
            boundaries[srf_index].forEach((shell) => {
              const polygon = [];
              shell.forEach((ring) => {
                const ringpts = [];
                ring.forEach((ID) => {
                  let coord = vertex_arr[ID];
                  // if object is a geometry instance, multiply by transformation matrix and add reference point
                  if (transform.refpt !== undefined) {
                    coord = this.transformTemplate(coord,transform);
                  }
                  // transform coordinates if transform specification exists in file
                  if (this.scale !== undefined) {
                    coord = this.transformCityJSON(coord);
                  }
                  // project to wgs84
                  coord = this.projectPtsToWGS84(coord);
                  ringpts.push(coord);
                });
                polygon.push(ringpts);
              });
              solid.push(polygon);
            });
            // create solid in cesium
            this.cesiumGeomService.genSolid(solid,colour,surface_type,props);
          }
        }
      }
      if (parts_index >= parts_start) {
        parts_index++;
      }
    }
  }
}
