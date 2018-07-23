import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import {Subject} from "rxjs/Subject";
import * as chroma from "chroma-js";
import proj4 from "proj4";
import * as earcut from "earcut";

@Injectable()
export class GenModelService {
  private subject = new Subject<any>();
  private file: JSON;
  private epsg: string;
  private dataSource: any;
  private vertices: any;
  private materials: any;
  private templates: any;
  private template_vertices: any;
  private srftype_ids: any;
  private scale: number[];
  private translate: number[];
  // private cart_matrix: any;
 
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

  public initialiseSrftypeIds(): void {
    this.srftype_ids = {RoofSurface: [],
                        GroundSurface: [],
                        WallSurface: [],
                        ClosureSurface: [],
                        OuterCeilingSurface: [],
                        OuterFloorSurface: [],
                        Window: [],
                        Door: [],
                        WaterSurface: [],
                        WaterGroundSurface: [],
                        WaterClosureSurface: [],
                        TrafficArea: [],
                        AuxiliaryTrafficArea: [],
                        None: []};
  }

  public setSrftypeIds(type: string, id: string): void {
    // console.log(this.srftype_ids,type,id);
    if (type === undefined) {
      this.srftype_ids["None"].push(id);
    } else {
      this.srftype_ids[type].push(id);
    }
  }

  public getSrftypeIds(): any {
    return this.srftype_ids;
  }

  public setEPSG(file): void {
    if (file["metadata"]["crs"] === undefined || file["metadata"]["crs"]["epsg"] === undefined) {
      // this.epsg = "+proj=tmerc +lat_0=1.344564 +lon_0=103.858189 +k=1 +x_0=-1500 +y_0=-1500 +ellps=WGS84 +units=m +no_defs";
      this.epsg = "+proj=tmerc +lat_0=1.366666666666667 +lon_0=103.8333333333333 +k=1 +x_0=28001.642 +y_0=38744.572 +ellps=WGS84 +units=m +no_defs"
      // this.epsg = "+proj=tmerc +lat_0=0 +lon_0=0 +k=1 +ellps=WGS84 +units=m +no_defs";
      // this.epsg = undefined;
      // this.setCartMatrix(90,Cesium.Cartesian3.fromDegrees(103.775765,1.302975));
      // console.log("set cart_matrix", this.cart_matrix);
    } else {
    // TODO: Initialise epsg projector (proj4js) link to Spatial References
    const epsg = {
      31467 : "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=bessel +datum=potsdam +units=m +no_defs",
      // 31467 : "+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=4500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs",
      // 28992 : "+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.9999079 +x_0=155000 +y_0=463000 +ellps=bessel +units=m +no_defs",
      // Rotterdam: actually EPSG:7415!
      28992 : "+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.9999079 +x_0=155000 +y_0=463000 +ellps=bessel +towgs84=565.4171,50.3319,465.5524,-0.398957,0.343988,-1.87740,4.0725 +units=m +no_defs",
      3414 : "+proj=tmerc +lat_0=1.366666666666667 +lon_0=103.8333333333333 +k=1 +x_0=28001.642 +y_0=38744.572 +ellps=WGS84 +units=m +no_defs",
    };
    this.epsg = epsg[file["metadata"]["crs"]["epsg"]];
    }
    if (this.epsg === undefined) {
      this.epsg = "WGS84";
    }
  }

  public setDataSource(dataSource: any): void {
    this.dataSource = dataSource;
  }

  public getDataSource(): any {
    return this.dataSource;
  }

  public setVertices(file: any): void {
    if (file["vertices"] !== undefined) {
      this.vertices = file["vertices"];
    }
  }

  public setMaterials(file: any): void {
    const materials = [];
    if (file["appearance"] === undefined || file["appearance"]["materials"] == undefined) {
       this.materials = undefined;
    } else {
        file["appearance"]["materials"].forEach((mat) => {
        const color = mat["diffuseColor"];
        color.push(mat["transparency"]);
        materials.push(new Cesium.Color(...color));
      });
      this.materials = materials;
    }
  }

  public setTemplates(file: any): void {
    // Pull out array of template boundaries and vertices
    if (file["geometry-templates"] === undefined) {
      this.templates = undefined
    } else {
      const templates = [];
      if (file["geometry-templates"]["templates"] !== undefined) {
        file["geometry-templates"]["templates"].forEach((temp) => {
          if (temp.lod < 3) {
            templates.push(undefined);
          } else {
            templates.push(temp.boundaries);
          }
        });
      }
      if (file["geometry-templates"]["vertices-templates"] !== undefined) {
        this.template_vertices = file["geometry-templates"]["vertices-templates"];
      }
      this.templates = templates;
    }
    
  }

  public setTransform(file: any): void {
    if (file["transform"] !== undefined) {
      this.scale = file["transform"].scale;
      this.translate = file["transform"].translate;
    } else {
      this.scale = undefined;
      this.translate = undefined;
    }
    // console.log(this.scale);
  }

  public projectPtsToWGS84(coords): number[] {
    // console.log(coords);
    const projcoords = proj4(this.epsg,"WGS84",[coords[0],coords[1]]);
    const newcoords = [projcoords[0],projcoords[1],coords[2]];
    return newcoords;
  }

  public maxDiff(values): number {
    let maxval = values[0];
    let minval = values[0];
    for (let i = 1 ; i < values.length ; i++) {
      if (values[i] > maxval) {
        maxval = values[i];
      }
      if (values[i] < minval) {
        minval = values[i];
      }
    }
    return (maxval - minval);
  }

  public determineAxis(points): number {
    // split coords and determine plane
    const x = [];
    const y = [];
    points.forEach((index) => {
      const coords = this.vertices[index];
      x.push(coords[0]);
      y.push(coords[1]);
    });

    if (this.maxDiff(x) > this.maxDiff(y)) {
      // x axis seems to be wider, use xz axis
      return 0;
    } else {
      // y axis seems to be wider, use yz axis
      return 1;
    }
  }

  public transformTemplate(coord,transform): number[] {
    const pt = Cesium.Cartesian3.fromArray(coord);
    const t = Cesium.Matrix4.multiplyByPoint(transform.temp_matrix,pt,new Cesium.Cartesian3());
    const coord2 = [(t["x"]+transform.refpt[0]),(t["y"]+transform.refpt[1]),(t["z"]+transform.refpt[2])];
    // console.log(coord,transform,coord2);
    return coord2;
  }

  public transformCityJSON(coord): number[] {
    const pt = [undefined,undefined,undefined];
    pt[0] = (coord[0] * this.scale[0]) + this.translate[0];
    pt[1] = (coord[1] * this.scale[1]) + this.translate[1];
    pt[2] = (coord[2] * this.scale[2]) + this.translate[2];
    return pt;
  }

  public triangulatePoly(boundaries,vertex_arr,transform,color): any {
    let vertices = this.vertices;
    if (vertex_arr === 1) {
      vertices = this.template_vertices;
    }
    // parent entity to contain triangulated polygons
    const temp_parent = this.dataSource.entities.add(new Cesium.Entity());

    // determine axis
    const axis = this.determineAxis(boundaries[0]);
    let other_axis = 0;
    if (axis === 0) {
      other_axis = 1;
    }

    // get points and put into earcut format
    const poly_vertices = [];
    const holes = [];
    const other_coords = [];
    let count = 0;
    for (let i = 0 ; i < boundaries.length ; i++) {
      boundaries[i].forEach((index) => {
        const coords = vertices[index];
        // console.log(coords);
        poly_vertices.push(coords[axis],coords[2]);
        other_coords.push(coords[other_axis]);
        count++;
      });
      if (i !== (boundaries.length - 1)) {
        holes.push(count);
      }
    }
    // console.log(poly_vertices,holes);

    // throw into earcut
    const tri_index = earcut(poly_vertices,holes);
    // console.log(tri_index);

    // convert to cesium format
    for (let p = 0 ; p < tri_index.length ; p = p + 3) {
      const points = [];

      //get coordinates for each point
      [tri_index[p], tri_index[p+1], tri_index[p+2]].forEach((j) => {
        let coord = [undefined,undefined,undefined];
        coord[other_axis] = other_coords[j];
        coord[axis] = poly_vertices[j*2];
        coord[2] = poly_vertices[(j*2) + 1];
        // console.log(coord);

        // if object is a geometry instance, multiply by transformation matrix and add reference point
        if (transform.refpt !== undefined) {
          coord = this.transformTemplate(coord,transform);
        }
        // transform coordinates if transform specification exists in file
        if (this.scale !== undefined) {
          coord = this.transformCityJSON(coord);
          // console.log(coord);
        }
        // project to wgs84

        coord = this.projectPtsToWGS84(coord);
        // console.log(coord);

        points.push(...coord);
      });
      // console.log(points);
      // create and add polygon
      const poly = this.dataSource.entities.add({
        parent : temp_parent,
        // name : name,
        polygon : {
          hierarchy : new Cesium.PolygonHierarchy(Cesium.Cartesian3.fromDegreesArrayHeights(points)),
          perPositionHeight : true,
          material : color,
          outline : false,
          // shadows: Cesium.ShadowMode.ENABLED
          // outlineColor : Cesium.Color.BLACK,
        },
      });
      // console.log(poly);
    }
    return temp_parent;
  }

  public cesiumPoly(boundaries,vertex_arr,transform,colour): any {
    let vertices = this.vertices;
    if (vertex_arr === 1) {
      vertices = this.template_vertices;
    }

    const temp_parent = this.dataSource.entities.add(new Cesium.Entity());

    const extRing = boundaries[0];
    const extRing_points = [];

    extRing.forEach((pt_index) => {
      let coord = vertices[pt_index];

      // if object is a geometry instance, multiply by transformation matrix and add reference point
      if (transform.refpt !== undefined) {
        coord = this.transformTemplate(coord,transform);
      }
      // transform coordinates if transform specification exists in file
      if (this.scale !== undefined) {
        coord = this.transformCityJSON(coord);
      }
      // project to wgs84
      const pt3 = this.projectPtsToWGS84(coord);
      // console.log (coord,pt3)
      extRing_points.push(...pt3);
    });

    // console.log(extRing_points);
    const ext_cartesian3 = Cesium.Cartesian3.fromDegreesArrayHeights(extRing_points);
    let p_hierarchy = new Cesium.PolygonHierarchy(ext_cartesian3);

    // If boundaries contain inner rings for holes, create p_hierarchy with holes
    const int_cartesian3 = [];
    if (boundaries.length > 0) {
      // Create p_hierarchy for each hole and push to int_cartesian3
      for (let ring_index = 1 ; ring_index < boundaries.length ; ring_index++) {
        const temp_pts = [];
        boundaries[ring_index].forEach((pt_index) => {
          let coord = vertices[pt_index];
          
          // if object is a geometry instance, multiply by transformation matrix and add reference point
          if (transform.refpt !== undefined) {
            coord = this.transformTemplate(coord,transform);
          }
          // transform coordinates if transform specification exists in file
          if (this.scale !== undefined) {
            coord = this.transformCityJSON(coord);
          }
          // project to wgs84
          const pt3 = this.projectPtsToWGS84(coord);
          temp_pts.push(...pt3);
        });
        // console.log(temp_pts);
        int_cartesian3.push(new Cesium.PolygonHierarchy(Cesium.Cartesian3.fromDegreesArrayHeights(temp_pts)));
      }
      // Create p_hierarchy with holes (as array of p_hierarchies)
      p_hierarchy = new Cesium.PolygonHierarchy(ext_cartesian3, int_cartesian3);
    }
    // console.log(p_hierarchy);
    // Create polygon
    const poly = this.dataSource.entities.add({
      parent : temp_parent,
      // name : city_object_keys[obj_index],
      polygon : {
        hierarchy : p_hierarchy,
        perPositionHeight : true,
        material : colour,
        outline : false,
        // shadows: Cesium.ShadowMode.ENABLED
        //outlineColor : Cesium.Color.BLACK,
      },
    });
    // console.log(poly);
    return temp_parent;
  }

  public genCityJSONGeom(file: JSON): object {
    // Initialise dataSource and surface type ID arrays
    this.setDataSource(new Cesium.CustomDataSource());
    this.initialiseSrftypeIds();
    const dataSource = this.dataSource;

    if (file !== undefined) {
      this.setEPSG(file);
      this.setVertices(file);
      this.setMaterials(file);
      this.setTemplates(file);
      this.setTransform(file);

      // Loop through CityObjects
      const city_object_keys = Object.keys(file["CityObjects"]);
      // for (let obj_index = 1 ; obj_index < 2 ; obj_index ++) {
      for (let obj_index = 0 ; obj_index < city_object_keys.length ; obj_index ++) {
        const obj =  file["CityObjects"][city_object_keys[obj_index]];
        // console.log(city_object_keys[obj_index]);
        
        // Get object type (21 types)
        const cityobj_type = obj.type;
        if (cityobj_type === "BuildingPart") {
          continue;
        }

        // Get object attributes
        const cityobj_attrib = obj.attributes;
        // if (cityobj_attrib === undefined) {
        //   continue;
        // }
        // console.log(cityobj_attrib);
        // console.log(Object.keys(cityobj_attrib))

        // Get object parts (TODO: Installations)
        const cityobj_parts_ID = obj.Parts;
        // console.log(cityobj_parts_ID);
        const cityobj_parts_geom = [];
        const cityobj_parts_attrib = [];
        const cityobj_parts_type = [];
        if (cityobj_parts_ID !== undefined) {
          cityobj_parts_ID.forEach((ID) => {
            cityobj_parts_geom.push(...file["CityObjects"][ID].geometry);
            cityobj_parts_attrib.push(file["CityObjects"][ID].attributes);
            cityobj_parts_type.push(file["CityObjects"][ID].type);
          });
        }

        // console.log(obj.geometry);
        const all_geom = obj.geometry.concat(cityobj_parts_geom);
        // console.log(all_geom);

        let parts_start = obj.geometry.length;
        let parts_index = 0;

        // Loop through geometry (typically used for different LOD but not necessarily, may contain multiple)
        for (let geom_index = 0 ; geom_index < all_geom.length ; geom_index ++) {
          const geom = all_geom[geom_index];
          // console.log(geom);
          if (geom == undefined) {
            continue;
          }

          // Check LOD
          const lod = geom.lod;
          // if (lod !== undefined && lod < 3) {
          //   continue;
          // }

          // Set values to use for polygon generation
          // poly_vertices: array of vertices in the file to refer to (0 for vertices or 1 for template_vertices)
          // boundaries: array of vertex position indexes to refer to (boundaries from geometry or template)
          // transfrom: object containing transformation matrix (temp_matrix) and reference point (refpt) of the geometry instance
          let vertex_arr = 0;
          let boundaries = geom.boundaries;
          let transform = {temp_matrix:undefined, refpt:undefined};

          // Check geometry type
          const geom_type = geom.type;
          if (geom_type === "GeometryInstance") {
            // console.log("GeometryInstance")
            vertex_arr = 1;
            boundaries = this.templates[geom.template];
            transform.temp_matrix = Cesium.Matrix4.fromArray(geom.transformationMatrix);
            transform.refpt = this.vertices[geom.boundaries[0]];
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

            // Extract surface type
            let surface_type = "None";
            if (values !== undefined && surfaces[values[srf_index]] !== undefined) {
              surface_type = surfaces[values[srf_index]]["type"];
            }

            // Extract materials
            let colour = Cesium.Color.WHITE;
            if (mats !== undefined && mats[srf_index] !== null) {
              colour = this.materials[mats[srf_index]];
            } else if (surface_type === "WallSurface") {
              colour = Cesium.Color.SILVER;
            } else if (surface_type === "RoofSurface") {
              colour = Cesium.Color.RED;
            } else if (surface_type === "Window") {
              colour = Cesium.Color.LIGHTBLUE.withAlpha(0.5);
            } else if (surface_type === "Door") {
              colour = Cesium.Color.TAN;
            } else if (obj.type === "SolitaryVegetationObject" || obj.type === "PlantCover") {
              colour = Cesium.Color.YELLOWGREEN;
            }

            // Create property bag (with parent information if obj is building part)
            // (TO-DO: building installation)
            const props = {Object_ID: city_object_keys[obj_index],
                           Object_Type: cityobj_type,
                           Geom_Type: geom_type,
                           Surface_Type: surface_type,
                           LOD: lod,
                           Color: colour,
                           Parent_ID: "None",
                           Parent_Type: "None"
                          };
            if (geom_index >= parts_start) {
              props.Object_ID = cityobj_parts_ID[parts_index];
              props.Object_Type = cityobj_parts_type[parts_index];
              props.Parent_ID = city_object_keys[obj_index];
              props.Parent_Type = cityobj_type;
            }

            // Add attributes from parent to properties
            if (cityobj_attrib !== undefined) {
              Object.keys(cityobj_attrib).forEach((name) => {
                props[name] = cityobj_attrib[name];
              });
            }
            // console.log(props);

            // Add attributes from parent to properties
            if (cityobj_parts_attrib[parts_index] !== undefined) {
              Object.keys(cityobj_parts_attrib[parts_index]).forEach((name) => {
                props[name] = cityobj_parts_attrib[parts_index][name];
              });
              // console.log(props);
            }
            const property_bag = new Cesium.PropertyBag(props);

            // Check horizontal or not
            const z = [];
            if (vertex_arr === 0) {
              boundaries[srf_index][0].forEach((coords) => {
                z.push(this.vertices[coords][2]);
              });
            } else {
              boundaries[srf_index][0].forEach((coords) => {
                z.push(this.template_vertices[coords][2]);
              });
            }
            
            if (this.maxDiff(z) === 0) {
              // // horizontal, use Cesium's stuff
              // console.log("Horizontal")
              const poly = this.cesiumPoly(boundaries[srf_index],vertex_arr,transform,colour);
              poly.properties = property_bag;
              // poly.show = false;
              this.setSrftypeIds(surface_type,poly.id);
            } else {
              const poly = this.triangulatePoly(boundaries[srf_index],vertex_arr,transform,colour);
              poly.properties = property_bag;
              // poly.show = false;
              this.setSrftypeIds(surface_type,poly.id);
            }
          }
        }
        if (parts_index >= parts_start) {
          parts_index++;
        }
      }

    }
    // console.log (this.srftype_ids);
    this.clearData();
    return dataSource;
  }

}
