import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class DataService {
  private _jsonModel: JSON;
  private subject = new Subject<any>();
  ColorValue:string;
  HeightValue:string;
  CheckHide:boolean;
  CheckOpp:boolean;
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
  ScaleValue:number=1000;
  CheckScale:boolean=true;

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

  }

  getGsModel(): any{
    return this._jsonModel; 
  }

  setGsModel(model: JSON){
    this._jsonModel = model;
    if(this._jsonModel===undefined){
      var viewer = new Cesium.Viewer(document.createElement("div"));
    }
    this.sendMessage("model_update");
  }

  getColorValue(ColorValue):void{
    this.ColorValue=ColorValue;
  }
  getHeightValue(HeightValue):void{
    this.HeightValue=HeightValue;
  }

}
