import { Component, OnInit, Injector, ElementRef ,NgModule} from "@angular/core";
import {DataSubscriber} from "../data/DataSubscriber";
import { DataService } from "../data/data.service";
import {ViewerComponent} from "../viewer/viewer.component";
import * as chroma from "chroma-js";

@Component({
  selector: "app-select",
  templateUrl: "./attributes.component.html",
  styleUrls: ["./attributes.component.css"],
})
export class SelectComponent extends DataSubscriber implements OnInit {
  private myElement;
  private data: JSON;
  private mode: string;
  private viewer: object;
  private dataArr: object;
  private ID: any;
  private _Properties: any[];

  constructor(injector: Injector, myElement: ElementRef) {
  super(injector);
  }
  public ngOnInit() {
    this.data = this.dataService.getGsModel();
    this.mode = this.dataService.getmode();
    this.viewer = this.dataService.getViewer();
    this.dataArr = this.dataService.get_ViData();
  }
  public  notify(message: string): void {
    if(message === "model_update" ) {
      this.data = this.dataService.getGsModel();
      this.mode = this.dataService.getmode();
      this.dataArr = this.dataService.get_ViData();
    }
  }

  //check whether ID is changed or not and show in  Select tab
  public ngDoCheck() {
    if(this.viewer !== undefined&&this.dataService.get_SelectedEntity() !== undefined&&this.mode === "editor") {
      const selected = this.dataService.get_SelectedEntity();
      if(this.ID !== selected._id) {
        let _Property: any;
        this.ID = selected._id;
        this._Properties = [];
        // const prop_names = selected.properties.propertyNames;
        // for(const name of prop_names) {
        //   if(name !== "None") {
        //     _Property = [];
            
        //     _Property.Name = name;
        //     _Property.Value = selected.properties[name]._value;

        //     // _Property.Name = _ColorPro;
        //     // if(this.dataService.get_SelectedEntity().properties[_Property.Name]!==undefined){
        //     //   _Property.Value = this.dataService.get_SelectedEntity().properties[_Property.Name]._value;
        //     // }else {_Property.Value = ' ';}

        //     this._Properties.push(_Property);
        //   }
        // }
      }
    } else if (this.viewer !== undefined&&this.dataService.get_SelectedEntity() === undefined) {
      this.ID = undefined;
      this._Properties = [];
    }
  }
}
