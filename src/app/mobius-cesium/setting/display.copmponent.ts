import { Component, OnInit, Injector, ElementRef ,NgModule} from "@angular/core";
import {DataSubscriber} from "../data/DataSubscriber";
import { DataService } from "../data/data.service";
import {ViewerComponent} from "../viewer/viewer.component";
import * as chroma from "chroma-js";

@Component({
  selector: "app-display",
  templateUrl: "./display.copmponent.html",
  styleUrls: ["./display.copmponent.css"],
})
export class DisplayComponent extends DataSubscriber implements OnInit {
  private myElement;
  private data: JSON;
  private mode: string;
  private _ImageryList: any[];
  private _Imagery: string;

  constructor(injector: Injector, myElement: ElementRef) {
  super(injector);
  }
  public ngOnInit() {
    this.data = this.dataService.getGsModel();
    this._ImageryList = ["Display","Stamen Toner","Stamen Toner(Lite)","Terrain(Standard)","Terrain(Background)",
                         "OpenStreetMap","Earth at Night","Natural Earth\u00a0II","Blue Marble"];
    if(this._Imagery === undefined){
      this._Imagery = this._ImageryList[0];
    }else {this._Imagery =this.dataService.get_Imagery();}
    
  }
  public  notify(message: string): void {
  }
  public onChangeImagery(_Imagery): void{
    this._Imagery = _Imagery;
    this.dataService.set_Imagery(_Imagery);
    const layers = this.dataService.getViewer().scene.imageryLayers;
    if(_Imagery === this._ImageryList[0]) {
      layers.removeAll();
      this.dataService.getViewer().scene.globe.baseColor = Cesium.Color.GRAY;
    }else if(_Imagery === this._ImageryList[1]){
      layers.removeAll();
      var blackMarble = layers.addImageryProvider(Cesium.createOpenStreetMapImageryProvider({
        url : "https://stamen-tiles.a.ssl.fastly.net/toner/"
      }));
    }else if(_Imagery === this._ImageryList[2]){
      layers.removeAll();
      var blackMarble = layers.addImageryProvider(Cesium.createOpenStreetMapImageryProvider({
        url : "https://stamen-tiles.a.ssl.fastly.net/toner-lite/"
      }));
    }else if(_Imagery === this._ImageryList[3]){
      layers.removeAll();
      var blackMarble = layers.addImageryProvider(Cesium.createOpenStreetMapImageryProvider({
        url : "https://stamen-tiles.a.ssl.fastly.net/terrain/"
      }));
    }else if(_Imagery === this._ImageryList[4]){
      layers.removeAll();
      var blackMarble = layers.addImageryProvider(Cesium.createOpenStreetMapImageryProvider({
        url : "https://stamen-tiles.a.ssl.fastly.net/terrain-background/"
      }));
    }else if(_Imagery === this._ImageryList[5]){
      layers.removeAll();
      var blackMarble = layers.addImageryProvider(Cesium.createOpenStreetMapImageryProvider({
        url : "https://a.tile.openstreetmap.org/"
      }));
    }else if(_Imagery === this._ImageryList[6]){
      layers.removeAll();
      var blackMarble = layers.addImageryProvider(new Cesium.IonImageryProvider({ assetId: 3812 }));
      //blackMarble.alpha = 0.5; 
    }else if(_Imagery === this._ImageryList[7]){
      layers.removeAll();
      var blackMarble = layers.addImageryProvider(Cesium.createTileMapServiceImageryProvider({
             url : Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII"),
      }));
    }else if(_Imagery === this._ImageryList[8]){
      layers.removeAll();
      var blackMarble = layers.addImageryProvider(new Cesium.IonImageryProvider({ assetId: 3845 }));
    }
  }

}
