import { Component, OnInit, Injector, ElementRef ,NgModule} from "@angular/core";
import {DataSubscriber} from "../data/DataSubscriber";
import { DataService } from "../data/data.service";
import {ViewerComponent} from "../viewer/viewer.component";
import * as chroma from "chroma-js";

@Component({
  selector: "app-cityjson",
  templateUrl: "./cityjson.component.html",
  styleUrls: ["./cityjson.component.css"],
})
export class CityJSONComponent extends DataSubscriber implements OnInit {
  private myElement;
  private srftype_ids: any;
  private srftype_keys: any;
  private _CheckDisable: boolean = true;

  constructor(injector: Injector, myElement: ElementRef) {
  super(injector);
  }
  public ngOnInit() {
    this.srftype_ids = this.cityJSONService.getSrftypeIds();
    this.setSrftype_keys();
    // if(this.dataArr !== undefined) {this.LoadData();}
  }
  public notify(message: string): void {
    if(message === "model_update" ) {
      try {
        this.srftype_ids = this.cityJSONService.getSrftypeIds();
        this.setSrftype_keys();
        // if(this.dataArr !== undefined) {this.LoadData();}
      }
      catch(ex) {
        console.log(ex);
      }
    }
  }

  public setSrftype_keys() {
    const keys = [];
    for (let key in this.srftype_ids) {
      if (this.srftype_ids[key] !== undefined) {
        keys.push(key);
      }
    }
    this.srftype_keys = keys;
  }

  public Show(event) {
    const eventCheckbox = document.getElementById(event+"_check");
    const ids = this.srftype_ids[event];
    const entities = this.cityJSONService.getDataSource().entities;
    if (eventCheckbox["checked"] === false) {
      ids.forEach((id) => {
        entities.getById(id).show = false;
      });
    } else {
      ids.forEach((id) => {
        entities.getById(id).show = true;
      });
    }
  }

  // public Show(event) {
  //   const index = this._HideNum.indexOf(event);
  //   const divid = String("addHide".concat(String(event)));
  //   const addHide = document.getElementById(divid);
  //   // if(this._Filter[index].Disabletext === null) {this._CheckDisable = false;} else {this._CheckDisable = true;}
  //   if(this._CheckDisable === false) {
  //     if(this._Filter[index].type === "number") {
  //       const textHide = this._Filter[index].textHide;
  //       this._Filter[index].Disabletext = Number(textHide);
  //       if(this._Filter[index].RelaHide === "0"||this._Filter[index].RelaHide === 0) {
  //         this._Filter[index].textHide = this._Filter[index].HideMin;
  //       }
  //       if(this._Filter[index].RelaHide === "1"||this._Filter[index].RelaHide === 1) {
  //         this._Filter[index].textHide = this._Filter[index].HideMax;
  //       }
  //     } else if(this._Filter[index].type === "category") {
  //       const textHide = this._Filter[index].RelaHide;
  //       this._Filter[index].Disabletext = Number(textHide);
  //       this._Filter[index].RelaHide = 0;
  //     }
  //   } else {
  //     if(this._Filter[index].type === "number") {
  //       this._Filter[index].textHide = this._Filter[index].Disabletext;
  //       this._Filter[index].Disabletext = null;
  //     } else if(this._Filter[index].type === "category") {
  //       this._Filter[index].RelaHide = this._Filter[index].Disabletext;
  //       this._Filter[index].Disabletext = null;
  //     }
  //   }
  //   this.dataArr["Filter"] = this._Filter;
  //   this.dataArr["HideNum"] = this._HideNum;
  //   this.dataService.set_ViData(this.dataArr);
  // }

  // public  Initial(_HideValue: string): any[] {
  //   const texts = [];
  //   const promise = this.dataService.getcesiumpromise();
  //   const self = this;
  //   promise.then(function(dataSource) {
  //     const entities = dataSource.entities.values;
  //     for (const entity of entities) {
  //       if(entity.properties[_HideValue] !== undefined) {
  //         if(entity.properties[_HideValue]._value !== " ") {
  //           if(texts.length === 0) {texts[0] = entity.properties[_HideValue]._value;
  //           } else { if(texts.indexOf(entity.properties[_HideValue]._value) === -1) {
  //             texts.push(entity.properties[_HideValue]._value);}
  //           }
  //         }
  //       }
  //     }
  //   });
  //   return texts;
  // }
}
