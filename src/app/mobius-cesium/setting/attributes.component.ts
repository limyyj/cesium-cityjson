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
  // private data: JSON;
  // private mode: string;
  private viewer: object;
  // private dataArr: object;
  private ID: any;
  private keys: string[];
  private _Properties: any;

  constructor(injector: Injector, myElement: ElementRef) {
  super(injector);
  }
  public ngOnInit() {
    // this.data = this.dataService.getGsModel();
    // this.mode = this.dataService.getmode();
    this.viewer = this.dataService.getViewer();
    // this.dataArr = this.dataService.get_ViData();
  }
  public  notify(message: string): void {
    if(message === "model_update" ) {
      // this.data = this.dataService.getGsModel();
      // this.mode = this.dataService.getmode();
      // this.dataArr = this.dataService.get_ViData();
    }
  }

  //check whether ID is changed or not and show in  Select tab
  public ngDoCheck() {
    if(this.viewer !== undefined&&this.dataService.get_SelectedEntity() !== undefined) {
      const selected = this.dataService.get_SelectedEntity();
      if(this.ID !== selected._id) {
        let _Property: any;
        this.keys = [];
        this.ID = selected._id;
        this._Properties = {};
        const categories = selected.properties.propertyNames;
        for(const categoryname of categories) {
          if(categoryname !== "None") {
            const propnames = Object.keys(selected.properties[categoryname]._value);
            const categoryprops = [];
            for (const propname of propnames) {
              _Property = {};
              _Property.Name = propname;
              _Property.Value = selected.properties[categoryname]._value[propname];
              categoryprops.push(_Property);
            }
            if (categoryprops.length > 0) {
              this.keys.push(categoryname);
              this._Properties[categoryname] = categoryprops;
            }
          }
        }
        // console.log(this._Properties);
      }
    } else if (this.viewer !== undefined&&this.dataService.get_SelectedEntity() === undefined) {
      this.ID = undefined;
      this.keys = [];
      this._Properties = [];
    }
  }
}
