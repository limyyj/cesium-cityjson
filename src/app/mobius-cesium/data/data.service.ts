import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';
import * as chroma from "chroma-js";

@Injectable()
export class DataService {
  private _jsonModel: JSON;
  private subject = new Subject<any>();
  ColorValue:string;
  HeightValue:string;
  CheckHide:boolean;
  CheckOpp:boolean=false;
  CheckCom:boolean;
  CheckOcc:boolean;
  viewer:any;
  SelectedEntity:any;
  cesiumpromise:any;
  propertyNames:Array<any>;
  HeightKey:Array<any>;
  selectEntity:object;
  Colortexts:Array<any>;
  MinColor:number;
  MaxColor:number;
  MinHeight:number;
  MaxHeight:number;
  ScaleValue:number=1;
  CheckScale:boolean=true;
  CheckExtrude:boolean=false;
  hideElementArr:Array<any>;
  HideNum:Array<any>;
  poly_center:Array<any>;
  ChromaScale:any;
  ceisumData:Array<any>;
  InitialTool:boolean;
  InitialPub:boolean;
  mode:string;
  CheckInvert:boolean=false;


  sendMessage(message?: string) {
    this.subject.next({text: message});
  }
 
  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  constructor() {
    this.ChromaScale=chroma.scale("SPECTRAL");
  }

  getGsModel(): any{
    return this._jsonModel; 
  }
  setMode(mode:string){
    this.mode=mode;
  }

  setGsModel(model: JSON){
    this._jsonModel = model;
    if(this._jsonModel===undefined){
      var viewer = new Cesium.Viewer(document.createElement("div"));
    }/*else{
      if(this._jsonModel["cesium"]!==undefined) {this.mode="viewer";}else{this.mode="editor";}
    }*/
    //if()
    this.sendMessage("model_update");
  }

  getColorValue(ColorValue):void{
    this.ColorValue=ColorValue;
  }
  getHeightValue(HeightValue):void{
    this.HeightValue=HeightValue;
  }

}
