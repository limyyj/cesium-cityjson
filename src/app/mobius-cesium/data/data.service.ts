import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import {Subject} from "rxjs/Subject";
import * as chroma from "chroma-js";

@Injectable()
export class DataService {
  private _jsonModel: JSON;
  private subject = new Subject<any>();
  public _ColorValue: string;
  public viewer: any;
  public _SelectedEntity: any;
  public cesiumpromise: any;
  public propertyNames: any[];
  public selectEntity: object;
  public _Colortexts: any[];
  public _MinColor: number;
  public _MaxColor: number;
  public hideElementArr: any[];
  public _HideNum: any[];
  public poly_center: any[];
  public _ChromaScale: any;
  public ceisumData: any[];
  public mode: string;
  public _CheckInvert: boolean=false;
  public _ViData: object;
  public _PuData: object;
  public _index: number;

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
    this.mode=mode;
  }

  public setGsModel(model: JSON) {
    this._jsonModel = model;

    if(this._jsonModel===undefined) {
      const viewer = new Cesium.Viewer(document.createElement("div"));
    }
    this.sendMessage("model_update");
  }

  public getValue(model: JSON) {
    const propertyNames = Object.keys(model["features"][0].properties);
    const _ColorValue = propertyNames[0];
    propertyNames.sort();
    propertyNames.unshift("None");

    const feature_instance = model["features"][0];
    const _HeightKey = propertyNames.filter(function(prop_name) {
      const value =  feature_instance.properties[prop_name];
      return (typeof(value) === "number");
    });
    const _HeightValue = _HeightKey[0];
    _HeightKey.sort();
    _HeightKey.unshift("None");

    const promise=this.cesiumpromise;
    const _Heighttexts: any[]=[];
    const _Colortexts: any[]=[];
    promise.then(function(dataSource) {
      const entities = dataSource.entities.values;
      for (const entity of entities) {
        if(entity.properties[_HeightValue]!==undefined) {
          if(entity.properties[_HeightValue]._value!==" ") {
            if(_Heighttexts.length===0) {_Heighttexts[0]=entity.properties[_HeightValue]._value;
            } else { if(_Heighttexts.indexOf(entity.properties[_HeightValue]._value)===-1) {
             _Heighttexts.push(entity.properties[_HeightValue]._value);}
            }
          }
        }
        if(entity.properties[_ColorValue]!==undefined) {
          if(entity.properties[_ColorValue]._value!==" ") {
            if(_Colortexts.length===0) {_Colortexts[0]=entity.properties[_ColorValue]._value;
            } else { if(_Colortexts.indexOf(entity.properties[_ColorValue]._value)===-1) {
              _Colortexts.push(entity.properties[_ColorValue]._value);}
            }
          }
        }
      }
    });
    const _MinColor=Math.min.apply(Math, _Colortexts);
    const _MaxColor=Math.max.apply(Math, _Colortexts);
    const _MinHeight=Math.min.apply(Math, _Heighttexts);
    const _MaxHeight=Math.max.apply(Math, _Heighttexts);
    const _Filter: any[]=[];
    const _HideNum: any[]=[];
    this.getViData(propertyNames,_Colortexts.sort(),_ColorValue,_MinColor,_MaxColor,false,
                   _HeightKey,_Heighttexts.sort(),_HeightValue,_MinHeight,_MaxHeight,1,
                   false,false,_Filter,_HideNum);
  }

  public LoadJSONData() {
    if(this._jsonModel["cesium"]!==undefined) {
      const cesiumData=this._jsonModel["cesium"];
      let _ColorDescr: string;
      let _ColorValue: string;
      let _MinColor: number;
      let _MaxColor: number;
      let _ColorInvert: boolean;
      let _HeightDescr: string;
      const _HeightKey: any[]=[];
      let _HeightValue: string;
      let _MinHeight: number;
      let _MaxHeight: number;
      let _HeightInvert: boolean;
      let _HeightScale: number;
      let _HeightLine: boolean;
      let _filters: any[];
      const _ceisumData: any[]=[];
      const _propertyNames: any[]=[];
      const _HideNum: any[]=[];
      if(cesiumData["colour"]!==undefined) {
        if(cesiumData["colour"]["descr"]!==undefined) {
          _ColorDescr=cesiumData["colour"]["descr"];
        }
        if(cesiumData["colour"]["attribs"]!==undefined) {
          for(const data of cesiumData["colour"]["attribs"]) {
            _propertyNames.push(data["name"]);
          }
          _ColorValue=_propertyNames[0];
          _MinColor=cesiumData["colour"]["attribs"][0]["min"];
          _MaxColor=cesiumData["colour"]["attribs"][0]["max"];
          if(cesiumData["colour"]["attribs"][0]["invert"]===true) {_ColorInvert=true;} else {_ColorInvert=false;}
        }

      }
      if(cesiumData["extrude"]!==undefined) {
        if(cesiumData["extrude"]["descr"]!==undefined) {
          _HeightDescr=cesiumData["extrude"]["descr"];
        }
        if(cesiumData["extrude"]["attribs"]!==undefined) {
          for(const data of cesiumData["extrude"]["attribs"]) {
            _HeightKey.push(data["name"]);
          }
          _HeightValue=_HeightKey[0];
          _MinHeight=cesiumData["extrude"]["attribs"][0]["min"];
          _MaxHeight=cesiumData["extrude"]["attribs"][0]["max"];
          if(cesiumData["extrude"]["attribs"][0]["invert"]===true) {_HeightInvert=true;} else {_HeightInvert=false;}
          if(cesiumData["extrude"]["attribs"][0]["line"]===true) {_HeightLine=true;} else {_HeightLine=false;}
          if(cesiumData["extrude"]["attribs"][0]["scale"]!==undefined) {
            _HeightScale=cesiumData["extrude"]["attribs"][0]["scale"];
          } else {_HeightScale=1;}
        }
      }
      if(cesiumData["filters"]!==undefined) {
        _filters=cesiumData["filters"];
      }
      const promise=this.cesiumpromise;
      const _Heighttexts=[];
      const _Colortexts=[];
      promise.then(function(dataSource) {
        const entities = dataSource.entities.values;
        for (const entity of entities) {
          if(entity.properties[_HeightValue]!==undefined) {
            if(entity.properties[_HeightValue]._value!==" ") {
              if(_Heighttexts.length===0) {_Heighttexts[0]=entity.properties[_HeightValue]._value;
              } else { if(_Heighttexts.indexOf(entity.properties[_HeightValue]._value)===-1) {
                _Heighttexts.push(entity.properties[_HeightValue]._value);}
              }
            }
          }
          if(entity.properties[_ColorValue]!==undefined) {
            if(entity.properties[_ColorValue]._value!==" ") {
              if(_Colortexts.length===0) {_Colortexts[0]=entity.properties[_ColorValue]._value;
              } else { if(_Colortexts.indexOf(entity.properties[_ColorValue]._value)===-1) {
                _Colortexts.push(entity.properties[_ColorValue]._value);}
              }
            }
          }
        }
      });
      this.getPuData(_ColorDescr,_propertyNames,_Colortexts.sort(),_ColorValue,_MinColor,_MaxColor,_ColorInvert,
                        _HeightDescr,_HeightKey,_Heighttexts.sort(),_HeightValue,_MinHeight,_MaxHeight,
                        _HeightScale,_HeightInvert,_HeightLine,_filters,_HideNum);

    }
  }

  /*public getPropertyNames() {
    return this.propertyNames;
  }

  public getColorValue(_ColorValue: string): void {
    this.ColorValue=_ColorValue;
  }
  public getHeightValue(_HeightValue: string): void {
    this.HeightValue=_HeightValue;
  }*/

  public getViData(_ColorProperty: any[],_ColorText: any[],_ColorKey: string,
                   _ColorMin: number,_ColorMax: number,_ColorInvert: boolean,
                   _ExtrudeProperty: any[],_ExtrudeText: any[],_ExturdeValue: string,
                   _ExtrudeMin: number,_ExtrudeMax: number,_Scale: number,_Invert: boolean,
                   _HeightChart: boolean,_Filter: any[],_HideNum: number[]) {
    this._ViData= {ColorProperty:_ColorProperty,ColorText:_ColorText,ColorKey:_ColorKey,
                   ColorMin:_ColorMin,ColorMax:_ColorMax,ColorInvert:_ColorInvert,
                   ExtrudeProperty:_ExtrudeProperty,ExtrudeText:_ExtrudeText,ExtrudeKey:_ExturdeValue,
                   ExtrudeMin:_ExtrudeMin,ExtrudeMax:_ExtrudeMax,Scale:_Scale,Invert:_Invert,
                   HeightChart:_HeightChart,Filter:_Filter,HideNum:_HideNum};
  }

  public getPuData(_ColorDescr: string,_ColorProperty: any[],_ColorText: any[],_ColorKey: string,
                   _ColorMin: number,_ColorMax: number,_ColorInvert: boolean,
                   _ExtrudeDescr: string,_ExtrudeProperty: any[],_ExtrudeText: any[],
                   _ExturdeValue: string,_ExtrudeMin: number,_ExtrudeMax: number,_Scale: number,_Invert: boolean,
                   _HeightChart: boolean,_Filter: any[],_HideNum: number[]) {
    this._PuData= {ColorDescr:_ColorDescr,ColorProperty:_ColorProperty,ColorText:_ColorText,
                   ColorKey:_ColorKey,ColorMin:_ColorMin,ColorMax:_ColorMax,ColorInvert:_ColorInvert,
                   ExtrudeDescr:_ExtrudeDescr,ExtrudeProperty:_ExtrudeProperty,ExtrudeText:_ExtrudeText,
                   ExtrudeKey:_ExturdeValue,ExtrudeMin:_ExtrudeMin,ExtrudeMax:_ExtrudeMax,
                   Scale:_Scale,Invert:_Invert,HeightChart:_HeightChart,Filter:_Filter,HideNum:_HideNum};
  }

}
