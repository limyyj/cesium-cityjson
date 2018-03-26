import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class DataService {
  private _jsonModel: any;
  private subject = new Subject<any>();

  sendMessage(message?: string) {
      this.subject.next({ text: message });
  }
 
  clearMessage() {
      this.subject.next();
  }

  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }

  constructor() { }

  getGsModel(): any{
    return this._jsonModel; 
  }

  setGsModel(model: any){
    this._jsonModel = model;
    /*if(this._jsonModel!==undefined){
      //this.generateSceneMaps();
    }
    else{
      // remove all children from the scene
      for(var i=0;i<this._scene.children.length;i++){
        if(this._scene.children[i].type==="Scene"){
          this._scene.remove(this._scene.children[i]);
        }
      }
    }*/
    this.sendMessage("model_update");
  }

}
