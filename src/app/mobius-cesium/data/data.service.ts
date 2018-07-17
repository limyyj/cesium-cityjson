import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import {Subject} from "rxjs/Subject";
import * as chroma from "chroma-js";
import proj4 from "proj4";
import * as earcut from "earcut";

@Injectable()
export class DataService {
  private _jsonModel: JSON;
  private subject = new Subject<any>();
  private viewer: any;
  private _SelectedEntity: any;
  private cesiumpromise: any;
  private hideElementArr: any[];
  private _HideNum: any[];
  private mode: string;
  private _ViData: object;
  private _PuData: object;
  private _index: number;
  private _Filter: any[];
  private _imageryViewModels: any[] = [];
  // private _indexArr: number[] = [];

  public sendMessage(message?: string) {
    this.subject.next({text: message});
  }
  public clearMessage() {
    this.subject.next();
  }

  public getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  public getGsModel(): any {
    return this._jsonModel;
  }
  public setMode(mode: string) {
    this.mode = mode;
  }

  public setGsModel(model: JSON) {
    delete this._jsonModel;
    const json = this._jsonModel;
    this._jsonModel = model;
    if(this._jsonModel !== undefined){this.clearAll();}
    this.sendMessage("model_update");
    
  }
  public clearAll(){
    delete this.hideElementArr;
    delete this._HideNum;
    delete this._ViData;
    delete this._PuData;
    delete this._index;
    delete this._Filter;

  }
  public getViewer(): any {
    return this.viewer;
  }
  public setViewer(_viewer): void {
    this.viewer = _viewer;
  }
  public get_SelectedEntity(): any {
    return this._SelectedEntity;
  }
  public set_SelectedEntity(_SelectedEntity): void {
    this._SelectedEntity = _SelectedEntity;
  }
  public getcesiumpromise(): any {
    return this.cesiumpromise;
  }
  public setcesiumpromise(cesiumpromise): void {
    delete this.cesiumpromise;
    this.cesiumpromise = cesiumpromise;
  }
  public gethideElementArr(): any {
    return this.hideElementArr;
  }
  public get_HideNum(): any[] {
    return this._HideNum;
  }
  public getmode(): string {
    return this.mode;
  }
  public get_index(): number {
    return this._index;
  }
  public set_index(_index): void {
    this._index = _index;
  }
  public set_imageryViewModels() :void{
    this._imageryViewModels.push(new Cesium.ProviderViewModel({
     name : "Stamen Toner",
     iconUrl : Cesium.buildModuleUrl("Widgets/Images/ImageryProviders/stamenToner.png"),
     tooltip : "A high contrast black and white map.\nhttp://www.maps.stamen.com/",
     creationFunction : function() {
         return Cesium.createOpenStreetMapImageryProvider({
             url : "https://stamen-tiles.a.ssl.fastly.net/toner/",
         });
     },
    }));
    this._imageryViewModels.push(new Cesium.ProviderViewModel({
     name : "Stamen Toner(Lite)",
     iconUrl : Cesium.buildModuleUrl("Widgets/Images/ImageryProviders/stamenToner.png"),
     tooltip : "A high contrast black and white map(Lite).\nhttp://www.maps.stamen.com/",
     creationFunction : function() {
         return Cesium.createOpenStreetMapImageryProvider({
             url : "https://stamen-tiles.a.ssl.fastly.net/toner-lite/",
         });
     },
    }));
    this._imageryViewModels.push(new Cesium.ProviderViewModel({
     name : "Terrain(Standard)",
     iconUrl : Cesium.buildModuleUrl("Widgets/Images/TerrainProviders/CesiumWorldTerrain.png"),
     tooltip : "A high contrast black and white map(Standard).\nhttp://www.maps.stamen.com/",
     creationFunction : function() {
         return Cesium.createOpenStreetMapImageryProvider({
             url : "https://stamen-tiles.a.ssl.fastly.net/terrain/",
         });
     },
    }));
    this._imageryViewModels.push(new Cesium.ProviderViewModel({
     name : "Terrain(Background)",
     iconUrl : Cesium.buildModuleUrl("Widgets/Images/TerrainProviders/CesiumWorldTerrain.png"),
     tooltip : "A high contrast black and white map(Background).\nhttp://www.maps.stamen.com/",
     creationFunction : function() {
         return Cesium.createOpenStreetMapImageryProvider({
             url : "https://stamen-tiles.a.ssl.fastly.net/terrain-background/",
         });
     },
    }));
    this._imageryViewModels.push(new Cesium.ProviderViewModel({
     name : "Open\u00adStreet\u00adMap",
     iconUrl : Cesium.buildModuleUrl("Widgets/Images/ImageryProviders/openStreetMap.png"),
     tooltip : "OpenStreetMap (OSM) is a collaborative project to create a free editable \
             map of the world.\nhttp://www.openstreetmap.org",
     creationFunction : function() {
         return Cesium.createOpenStreetMapImageryProvider({
             url : "https://a.tile.openstreetmap.org/",
         });
     },
    }));

    this._imageryViewModels.push(new Cesium.ProviderViewModel({
     name : "Earth at Night",
     iconUrl : Cesium.buildModuleUrl("Widgets/Images/ImageryProviders/earthAtNight.png"),
     tooltip : "The lights of cities and villages trace the outlines of civilization \
                 in this global view of the Earth at night as seen by NASA/NOAA\'s Suomi NPP satellite.",
     creationFunction : function() {
         return new Cesium.IonImageryProvider({ assetId: 3812 });
     },
    }));

    this._imageryViewModels.push(new Cesium.ProviderViewModel({
     name : "Natural Earth\u00a0II",
     iconUrl : Cesium.buildModuleUrl("Widgets/Images/ImageryProviders/naturalEarthII.png"),
     tooltip : "Natural Earth II, darkened for contrast.\nhttp://www.naturalearthdata.com/",
     creationFunction : function() {
         return Cesium.createTileMapServiceImageryProvider({
             url : Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII"),
         });
     },
    }));

    this._imageryViewModels.push(new Cesium.ProviderViewModel({
     name : "Blue Marble",
     iconUrl : Cesium.buildModuleUrl("Widgets/Images/ImageryProviders/blueMarble.png"),
     tooltip : "Blue Marble Next Generation July, 2004 imagery from NASA.",
     creationFunction : function() {
         return new Cesium.IonImageryProvider({ assetId: 3845 });
     },
    }));
  }
  public get_imageryViewModels(): any[] {
    return this._imageryViewModels;
  }

  public getValue(model: JSON) {
    if(model !== undefined) {
      const propertyName = Object.keys(model["features"][0].properties);
      propertyName.sort();
      propertyName.unshift("None");
      const propertyNames = propertyName.filter(function(value) { 
        return value != 'TYPE'&& value != 'COLOR'&& value != 'HEIGHT'&&value != 'EXTRUHEIGHT'
      });
      const _ColorValue = propertyNames[0];

      const feature_instance = model["features"][0];
      const _HeightKey = propertyNames.filter(function(prop_name) {
        const value =  feature_instance.properties[prop_name];
        return (typeof(value) === "number");
      });

      _HeightKey.sort();
      _HeightKey.unshift("None");
      const _HeightValue = _HeightKey[0];

      const promise = this.cesiumpromise;
      const _Heighttexts: any[] = [];
      const _Colortexts: any[] = [];
      const _indexArr: number[] = [];
      const self = this;
      promise.then(function(dataSource) {
        const entities = dataSource.entities.values;
        for (const entity of entities) {
          if(entity.properties["TYPE"] === undefined||entity.properties["TYPE"]._value !== "STATIC"){
            if(entity.properties[_HeightValue] !== undefined) {
              if(entity.properties[_HeightValue]._value !== " ") {
                if(_Heighttexts.length === 0) {_Heighttexts[0]=entity.properties[_HeightValue]._value;
                } else { if(_Heighttexts.indexOf(entity.properties[_HeightValue]._value) === -1) {
                 _Heighttexts.push(entity.properties[_HeightValue]._value);}
                }
              }
            }
            if(entity.properties[_ColorValue] !== undefined) {
              if(entity.properties[_ColorValue]._value !== " ") {
                if(_Colortexts.length === 0) {_Colortexts[0] = entity.properties[_ColorValue]._value;
                } else { if(_Colortexts.indexOf(entity.properties[_ColorValue]._value) === -1) {
                  _Colortexts.push(entity.properties[_ColorValue]._value);}
                }
              }
            }
            _indexArr.push(entities.indexOf(entity));
          } else {
            entity.polygon.height =  entity.properties["HEIGHT"];
            entity.polygon.extrudedHeight = entity.properties["EXTRUHEIGHT"];
            const ColorValue = entity.properties["COLOR"]._value;
            entity.polygon.material = Cesium.Color.fromBytes(ColorValue[0], ColorValue[1], ColorValue[2], ColorValue[3]);
          }
          if(entity.polygon !== undefined) {
              entity.polygon.outlineColor = Cesium.Color.Black;
            }
          if(entity.billboard !== undefined) {
            entity.billboard = undefined;
            entity.point = new Cesium.PointGraphics({
              color: Cesium.Color.BLUE,
              pixelSize: 10,
            });
          }
        }
      });
      const _MinColor = Math.min.apply(Math, _Colortexts);
      const _MaxColor = Math.max.apply(Math, _Colortexts);
      const _MinHeight = Math.min.apply(Math, _Heighttexts);
      const _MaxHeight = Math.max.apply(Math, _Heighttexts);
      const _Filter: any[] = [];
      const _HideNum: any[] = [];
      this.getViData(propertyNames,_Colortexts.sort(),_ColorValue,_MinColor,_MaxColor,false,
                     _HeightKey,_Heighttexts.sort(),_HeightValue,_MinHeight,_MaxHeight,1,
                     false,false,_Filter,_HideNum,_indexArr);
    }
  }
  public get_ViData(): object {
    return this._ViData;
  }
  public set_ViData(_ViData): void {
    this._ViData=_ViData;
  }

  public LoadJSONData() {
    if(this._jsonModel !== undefined&&this._jsonModel["cesium"] !== undefined) {
      const cesiumData=this._jsonModel["cesium"];
      let _ColorDescr: string;
      let _ColorValue: string;
      let _MinColor: number;
      let _MaxColor: number;
      let _ColorInvert: boolean;
      let _HeightDescr: string;
      const _HeightKey: any[] = [];
      let _HeightValue: string;
      let _MinHeight: number;
      let _MaxHeight: number;
      let _HeightInvert: boolean;
      let _HeightScale: number;
      let _HeightLine: boolean;
      let _filters: any[];
      const _ceisumData: any[] = [];
      const _propertyNames: any[] = [];
      const _HideNum: any[] = [];
      const _indexArr: number[] = [];
      if(cesiumData["colour"] !== undefined) {
        if(cesiumData["colour"]["descr"] !== undefined) {
          _ColorDescr = cesiumData["colour"]["descr"];
        }
        if(cesiumData["colour"]["attribs"] !== undefined) {
          for(const data of cesiumData["colour"]["attribs"]) {
            _propertyNames.push(data["name"]);
          }
          _ColorValue = _propertyNames[0];
          _MinColor = cesiumData["colour"]["attribs"][0]["min"];
          _MaxColor = cesiumData["colour"]["attribs"][0]["max"];
          if(cesiumData["colour"]["attribs"][0]["invert"] === true) {_ColorInvert = true;} else {_ColorInvert = false;}
        }

      }
      if(cesiumData["extrude"] !== undefined) {
        if(cesiumData["extrude"]["descr"] !== undefined) {
          _HeightDescr = cesiumData["extrude"]["descr"];
        }
        if(cesiumData["extrude"]["attribs"] !== undefined) {
          for(const data of cesiumData["extrude"]["attribs"]) {
            _HeightKey.push(data["name"]);
          }
          _HeightValue = _HeightKey[0];
          _MinHeight = cesiumData["extrude"]["attribs"][0]["min"];
          _MaxHeight = cesiumData["extrude"]["attribs"][0]["max"];
          if(cesiumData["extrude"]["attribs"][0]["invert"] === true) {
            _HeightInvert = true;} else {_HeightInvert = false;}
          if(cesiumData["extrude"]["attribs"][0]["line"] === true) {_HeightLine = true;} else {_HeightLine = false;}
          if(cesiumData["extrude"]["attribs"][0]["scale"] !== undefined) {
            _HeightScale = cesiumData["extrude"]["attribs"][0]["scale"];
          } else {_HeightScale = 1;}
        }
      }
      const promise = this.cesiumpromise;
      const _Heighttexts = [];
      const _Colortexts = [];
      const self = this;
      promise.then(function(dataSource) {
        const entities = dataSource.entities.values;
        for (const entity of entities) {
          if(entity.properties[_HeightValue] !== undefined) {
            if(entity.properties[_HeightValue]._value !== " ") {
              if(_Heighttexts.length === 0) {_Heighttexts[0] = entity.properties[_HeightValue]._value;
              } else { if(_Heighttexts.indexOf(entity.properties[_HeightValue]._value) === -1) {
                _Heighttexts.push(entity.properties[_HeightValue]._value);}
              }
            }
          }
          if(entity.properties[_ColorValue] !== undefined) {
            if(entity.properties[_ColorValue]._value !== " ") {
              if(_Colortexts.length === 0) {_Colortexts[0] = entity.properties[_ColorValue]._value;
              } else { if(_Colortexts.indexOf(entity.properties[_ColorValue]._value) === -1) {
                _Colortexts.push(entity.properties[_ColorValue]._value);}
              }
            }
          }
          if(entity.polygon !== undefined) {
            entity.polygon.outlineColor = Cesium.Color.Black;
          }
          if(entity.billboard !== undefined) {
            entity.billboard = undefined;
            entity.point = new Cesium.PointGraphics({
              color: Cesium.Color.BLUE,
              pixelSize: 10,
            });
          }
          _indexArr.push(entities.indexOf(entity));
        }
      });
      if(cesiumData["filters"] !== undefined) {
        _filters = cesiumData["filters"];
        let lastnumber: string;
        this._Filter = [];
        this._HideNum = [];
        if(_filters !== undefined&&_filters.length !== 0) {
          for(const _filter of _filters) {
            if(this._HideNum.length === 0) {
              this._HideNum[0] = "0";
              lastnumber = this._HideNum[0];
            } else {
              for(let j = 0;j < this._HideNum.length + 1;j++) {
                if(this._HideNum.indexOf(String(j)) === -1) {
                  this._HideNum.push(String(j));
                  lastnumber = String(j);
                  break;
                }
              }
            }
            if(_filter["name"] !== undefined) {
              const _propertyname = _filter["name"];
              const _relation = Number(_filter["relation"]);
              const _text = _filter["value"];
              const _descr = _filter["descr"];
              let _HideType: string;
              let _texts: any[];
              if(typeof(_text) === "number") {
                _HideType = "number";
                _texts = this.Initial(_propertyname);
              } else if(typeof(_text) === "string") {
                _HideType = "category";
                _texts = this.Initial(_propertyname);
                _texts = ["None"].concat(_texts);
              }
              this._Filter.push({ divid:String("addHide".concat(String(lastnumber))),id: lastnumber,
                                  HeightHide:_propertyname,type:_HideType,Category:_texts,
                                  CategaryHide:_text,descr:_descr,RelaHide:_relation,
                                  textHide: _text,HideMax:Math.ceil(Math.max.apply(Math, _texts)),
                                  HideMin:Math.floor(Math.min.apply(Math, _texts)*100)/100,Disabletext:null});
            }
          }
        }
      } else {this._Filter = [];this._HideNum = [];}
      this.getPuData(_ColorDescr,_propertyNames,_Colortexts.sort(),_ColorValue,_MinColor,_MaxColor,_ColorInvert,
                        _HeightDescr,_HeightKey,_Heighttexts.sort(),_HeightValue,_MinHeight,_MaxHeight,
                        _HeightScale,_HeightInvert,_HeightLine,this._Filter,this._HideNum,_indexArr);

    }

  }

  public projectPtsToWGS84(coords, proj_epsg): number[] {
    const projcoords = proj_epsg([coords[0],coords[1]]);
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

  public determineAxis(points,all_vertices): number {
    // split coords and determine plane
    const x = [];
    const y = [];
    points.forEach((index) => {
      const coords = all_vertices[index];
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
    return coord2;
  }

  public triangulatePoly(boundaries,all_vertices,epsg,transform,dataSource,color): object {
    // console.log(boundaries);
    // parent entity to contain triangulated polygons
    const temp_parent = dataSource.entities.add(new Cesium.Entity());

    // determine axis
    const axis = this.determineAxis(boundaries[0],all_vertices);
    let other_axis = 0;
    if (axis === 0) {
      other_axis = 1;
    }
    
    // console.log(axis,other_axis);

    // get points and put into earcut format
    const vertices = [];
    const holes = [];
    const other_coords = [];
    let count = 0;
    for (let i = 0 ; i < boundaries.length ; i++) {
      boundaries[i].forEach((index) => {
        const coords = all_vertices[index];
        // console.log(coords);
        vertices.push(coords[axis],coords[2]);
        other_coords.push(coords[other_axis]);
        count++;
      });
      if (i !== (boundaries.length - 1)) {
        holes.push(count);
      }
    }
    // console.log(vertices,holes);

    // throw into earcut
    const tri_index = earcut(vertices,holes);
    // console.log(tri_index);

    // convert to cesium format
    for (let p = 0 ; p < tri_index.length ; p = p + 3) {
      const points = [];

      //get coordinates for each point
      [tri_index[p], tri_index[p+1], tri_index[p+2]].forEach((j) => {
        let coord = [undefined,undefined,undefined];
        coord[other_axis] = other_coords[j];
        coord[axis] = vertices[j*2];
        coord[2] = vertices[(j*2) + 1];

        // if object is a geometry instance, multiply by transformation matrix and add reference point
        if (transform.refpt !== undefined) {
          coord = this.transformTemplate(coord,transform)      
        }

        // project to wgs84
        const pt3 = this.projectPtsToWGS84(coord,epsg);
        points.push(...pt3);
      });
      // console.log(points);
      // create and add polygon
      const poly = dataSource.entities.add({
        parent : temp_parent,
        // name : name,
        polygon : {
          hierarchy : new Cesium.PolygonHierarchy(Cesium.Cartesian3.fromDegreesArrayHeights(points)),
          perPositionHeight : true,
          material : color,
          outline : false,
          // outlineColor : Cesium.Color.BLACK,
        },
      });
      // console.log(poly);
    }
    return temp_parent;
  }

  public cesiumPoly(boundaries,vertices,epsg,transform,dataSource,colour): object {
    const temp_parent = dataSource.entities.add(new Cesium.Entity());

    const extRing = boundaries[0];
    const extRing_points = [];

    extRing.forEach((pt_index) => {
      let coord = vertices[pt_index];

      // if object is a geometry instance, multiply by transformation matrix and add reference point
      if (transform.refpt !== undefined) {
        coord = this.transformTemplate(coord,transform);
      }
      // project to wgs84
      const pt3 = this.projectPtsToWGS84(coord,epsg);
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

          // project to wgs84
          const pt3 = this.projectPtsToWGS84(coord,epsg);
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
    const poly = dataSource.entities.add({
      parent : temp_parent,
      // name : city_object_keys[obj_index],
      polygon : {
        hierarchy : p_hierarchy,
        perPositionHeight : true,
        material : colour,
        outline : false,
        //outlineColor : Cesium.Color.BLACK,
      },
    });
    // console.log(poly);
    return temp_parent;
  }

  // public templatePoly(geom,templates,vertices,dataSource,proj_epsg) {
  //   const boundaries = templates[geom.template];
  //   // const refpt = vertices[geom.boundaries[0]];
  //   const matrix = Cesium.Matrix4.fromArray(geom.transformationMatrix);

  //   console.log(boundaries);

  //   for (let srf_index = 0 ; srf_index < 1; srf_index ++) {
  //   // for (let srf_index = 0 ; srf_index < boundaries.length ; srf_index ++) {
  //   //   const points = [];
  //   //   boundaries[srf_index].forEach((pt_index) => {
  //   //     const p = new Cesium.Cartesian3(temp_vertices[pt_index]);
  //   //     const coords = Cesium.Matrix4.multiplyByPoint(matrix,p,new Cesium.Cartesian3());
  //   //     console.log(p,coords);
  //   //   });
  //   }
  // }

  public genCityJSONGeom(file: JSON): object {
    // Initialise arrays to contain primitives to display in viewer
    const inst_Filled = [];
    const inst_Outline = [];
    const dataSource = new Cesium.CustomDataSource();

    if (file !== undefined) {
      // TODO: Initialise epsg projector (proj4js) link to Spatial References
      const epsg = {
        31467 : "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=bessel +datum=potsdam +units=m +no_defs",
        28992 : "+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.9999079 +x_0=155000 +y_0=463000 +ellps=bessel +units=m +no_defs",
        3414 : "+proj=tmerc +lat_0=1.366666666666667 +lon_0=103.8333333333333 +k=1 +x_0=28001.642 +y_0=38744.572 +ellps=WGS84 +units=m +no_defs",
      };

      // Check file metadata for epsg code
      // console.log(file["metadata"]["crs"]["epsg"]);
      // console.log(epsg[file["metadata"]["crs"]["epsg"]]);
      const proj_epsg = proj4(epsg[file["metadata"]["crs"]["epsg"]],"WGS84").forward;

      // Pull out array of vertices and project to WGS84
      const vertices = file["vertices"];
      // file["vertices"].forEach((point) => {
      //   const coords = this.projectPtsToWGS84(point,proj_epsg);
      //   vertices.push(coords);
      // });


      // Pull out array of material definitions and create cesium materials
      const materials = [];
      if (file["appearance"]["materials"] !== undefined) {
        file["appearance"]["materials"].forEach((mat) => {
          const color = mat["diffuseColor"];
          color.push(mat["transparency"]);
          materials.push(new Cesium.Color(...color));
        });
      }

      // Pull out array of template boundaries and vertices
      const templates = [];
      let temp_vertices = [];
      if ( file["geometry-templates"] !== undefined) {
        if (file["geometry-templates"]["templates"] !== undefined) {
          file["geometry-templates"]["templates"].forEach((temp) => {
            templates.push(temp.boundaries);
          });
        }
        if (file["geometry-templates"]["vertices-templates"] !== undefined) {
          // file["geometry-templates"]["vertices-templates"].forEach((point) => {
          //   const coords = this.projectPtsToWGS84(point,proj_epsg);
          //   temp_vertices.push(coords);
          // });
          temp_vertices = file["geometry-templates"]["vertices-templates"];
        }
      }

      // Loop through CityObjects and search for type "Building"
      const city_object_keys = Object.keys(file["CityObjects"]);
      // for (let obj_index = 1 ; obj_index < 2 ; obj_index ++) {
      for (let obj_index = 0 ; obj_index < city_object_keys.length ; obj_index ++) {
        const obj =  file["CityObjects"][city_object_keys[obj_index]];

        // Get opbject type
        const cityobj_type = obj.type;

        // if (obj.type === "Building") {
        if (1) {

          // Loop through geometry
          // for (let geom_index = 1 ; geom_index < 2 ; geom_index++) {
          for (let geom_index = 0 ; geom_index < obj["geometry"].length ; geom_index ++) {
            const geom = obj["geometry"][geom_index];

            if (geom == undefined) {
              continue;
            }

            // Set values for poly generation
            let poly_vertices = vertices;
            let boundaries = geom["boundaries"];
            let transform = {temp_matrix:undefined, refpt:undefined, epsg:undefined};

            // Check geometry type
            const geom_type = geom.type;
            if (geom_type === "GeometryInstance") {
              // console.log(obj_index,geom_index,"Instance!");
              poly_vertices = temp_vertices;
              boundaries = templates[geom.template];
              transform.temp_matrix = Cesium.Matrix4.fromArray(geom.transformationMatrix);
              transform.refpt = vertices[geom.boundaries[0]];
              transform.epsg = proj_epsg;
              // console.log(transform);
              // this.templatePoly(geom,templates,temp_vertices,dataSource,proj_epsg);
            }

            // Pull out array of semantics values & surfaces
            let values = undefined;
            let surfaces = undefined;
            if (geom["semantics"] !== undefined) {
              values = geom["semantics"]["values"];
              surfaces = geom["semantics"]["surfaces"];
            }

            // Pull out materials values
            let mats = undefined;
            if (geom["material"] !== undefined) {
              mats = geom["material"][""]["values"];
            }

            // // Extract vertices
            // const boundaries = geom["boundaries"];
            // if (boundaries === undefined) {
            //   continue;
            // }
            for (let srf_index = 0 ; srf_index < boundaries.length ; srf_index ++) {
            // for (let srf_index = 52 ; srf_index < 53 ; srf_index ++) {

              // Obtain coordinates for each vertice and create p_hierarchy for outer ring
              if (boundaries[srf_index][0] === undefined) {
                continue;
              }

              // Extract surface type
              let surface_type = undefined;
              if (values !== undefined) {
                surface_type = surfaces[values[srf_index]]["type"];
              }

              // Extract materials
              let colour = Cesium.Color.WHITE;
              if (mats !== undefined && mats[srf_index] !== null) {
                colour = materials[mats[srf_index]];
              } else if (surface_type === "RoofSurface") {
                colour = Cesium.Color.CRIMSON;
              }

              // // Set colour based on surface_type
              // let colour = Cesium.Color.WHITE;
              // if (surface_type === "Window") {
              //   colour = Cesium.Color.LIGHTBLUE;
              // }
              // if (surface_type === "RoofSurface") {
              //   colour = Cesium.Color.CRIMSON;
              // }

              // Create property bag
              const property_bag = new Cesium.PropertyBag();
              property_bag.addProperty("Name", city_object_keys[obj_index]);
              property_bag.addProperty("Surface Type", surface_type);
              property_bag.addProperty("srf_index", srf_index);

              const z = [];
              boundaries[srf_index][0].forEach((coords) => {
                z.push(vertices[coords][2]);
              });

              if (this.maxDiff(z) === 0) {
                // console.log("Horizontal!");
                // horizontal, use Cesium's stuff
                const poly = this.cesiumPoly(boundaries[srf_index],poly_vertices,proj_epsg,transform,dataSource,colour);
                poly["properties"] = property_bag;
                // console.log(srf_index,poly);
              } else {
                const poly = this.triangulatePoly(boundaries[srf_index],poly_vertices,proj_epsg,transform,dataSource,colour);
                poly["properties"] = property_bag;
                // console.log(srf_index,poly);
              }

              
            }
          }
        }
      }

    }
    return dataSource;
  }

  public  Initial(_HideValue: string): any[] {
    const texts=[];
    const promise = this.getcesiumpromise();
    const self = this;
    promise.then(function(dataSource) {
      const entities = dataSource.entities.values;
      for (const entity of entities) {
        if(entity.properties[_HideValue] !== undefined) {
          if(entity.properties[_HideValue]._value !== " ") {
            if(texts.length === 0) {texts[0] = entity.properties[_HideValue]._value;
            } else { if(texts.indexOf(entity.properties[_HideValue]._value) === -1) {
              texts.push(entity.properties[_HideValue]._value);}
            }
          }
        }
      }
    });
    return texts;
  }

  public get_PuData(): object {
    return this._PuData;
  }
  public set_PuData(_PuData): void {
    this._PuData = _PuData;
  }
  public getViData(_ColorProperty: any[],_ColorText: any[],_ColorKey: string,
                   _ColorMin: number,_ColorMax: number,_ColorInvert: boolean,
                   _ExtrudeProperty: any[],_ExtrudeText: any[],_ExturdeValue: string,
                   _ExtrudeMin: number,_ExtrudeMax: number,_Scale: number,_Invert: boolean,
                   _HeightChart: boolean,_Filter: any[],_HideNum: number[],_indexArr: number[]) {
    this._ViData = {ColorProperty:_ColorProperty,ColorText:_ColorText,ColorKey:_ColorKey,
                    ColorMin:_ColorMin,ColorMax:_ColorMax,ColorInvert:_ColorInvert,
                    ExtrudeProperty:_ExtrudeProperty,ExtrudeText:_ExtrudeText,ExtrudeKey:_ExturdeValue,
                    ExtrudeMin:_ExtrudeMin,ExtrudeMax:_ExtrudeMax,Scale:_Scale,Invert:_Invert,
                    HeightChart:_HeightChart,Filter:_Filter,HideNum:_HideNum,indexArr:_indexArr};
  }

  public getPuData(_ColorDescr: string,_ColorProperty: any[],_ColorText: any[],_ColorKey: string,
                   _ColorMin: number,_ColorMax: number,_ColorInvert: boolean,
                   _ExtrudeDescr: string,_ExtrudeProperty: any[],_ExtrudeText: any[],
                   _ExturdeValue: string,_ExtrudeMin: number,_ExtrudeMax: number,_Scale: number,_Invert: boolean,
                   _HeightChart: boolean,_Filter: any[],_HideNum: number[],_indexArr: number[]) {
    this._PuData = {ColorDescr:_ColorDescr,ColorProperty:_ColorProperty,ColorText:_ColorText,
                    ColorKey:_ColorKey,ColorMin:_ColorMin,ColorMax:_ColorMax,ColorInvert:_ColorInvert,
                    ExtrudeDescr:_ExtrudeDescr,ExtrudeProperty:_ExtrudeProperty,ExtrudeText:_ExtrudeText,
                    ExtrudeKey:_ExturdeValue,ExtrudeMin:_ExtrudeMin,ExtrudeMax:_ExtrudeMax,
                    Scale:_Scale,Invert:_Invert,HeightChart:_HeightChart,Filter:_Filter,HideNum:_HideNum,indexArr:_indexArr};
  }

}
