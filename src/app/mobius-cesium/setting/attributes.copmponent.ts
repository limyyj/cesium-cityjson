import { Component, OnInit, Injector, ElementRef ,NgModule} from "@angular/core";
import {DataSubscriber} from "../data/DataSubscriber";
import { DataService } from "../data/data.service";
import {ViewerComponent} from "../viewer/viewer.component";
import * as chroma from "chroma-js";

@Component({
  selector: "app-attributes",
  templateUrl: "./attributes.component.html",
  styleUrls: ["./attributes.component.css"],
})
export class AttributesComponent extends DataSubscriber implements OnInit {
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
    this.mode=this.dataService.mode;
    this.viewer=this.dataService.viewer;
    this.dataArr=this.dataService._ViData;
  }
  public  notify(message: string): void {
    if(message === "model_update" ) {
      this.data = this.dataService.getGsModel();
      this.mode=this.dataService.mode;
      this.viewer=this.dataService.viewer;
      this.dataArr=this.dataService._ViData;
    }
  }

  public ngDoCheck() {
    if(this.viewer!==undefined&&this.dataService._SelectedEntity!==undefined&&this.mode==="editor") {
      if(this.ID!==this.dataService._SelectedEntity._id) {
        let _Property: any;
        this.ID=this.dataService._SelectedEntity._id;
        this._Properties=[];
        for(const _ColorPro of this.dataArr["ColorProperty"]) {
          if(_ColorPro!=="None") {
            _Property=[];
            _Property.Name=_ColorPro;
            _Property.Value=this.dataService._SelectedEntity.properties[_Property.Name]._value;
            this._Properties.push(_Property);
          }
        }
      }
    }
  }
}
