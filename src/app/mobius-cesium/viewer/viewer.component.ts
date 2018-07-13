import { Component, OnInit, Injector, ElementRef } from "@angular/core";
import {DataSubscriber} from "../data/DataSubscriber";
import {SettingComponent} from "../setting/setting.component";
// import * as d3 from "d3-array";
import * as chroma from "chroma-js";

@Component({
  selector: "cesium-viewer",
  templateUrl: "./viewer.component.html",
  styleUrls: ["./viewer.component.css"],
})
export class ViewerComponent extends DataSubscriber {
  private data: JSON;
  private myElement;
  private dataArr: object;
  private viewer: any;
  private selectEntity: any=null;
  private material: object[];
  private _Colorbar: any[];
  private texts: any[];
  private _Cattexts: any[];
  private _CatNumtexts: any[];
  private pickupArrs: any[];
  private mode: string;
  private _index: number;
  private _ShowColorBar: boolean;
  private _ColorKey: string;
  private _ExtrudeKey: string;

  constructor(injector: Injector, myElement: ElementRef) {
    super(injector);
    this.myElement = myElement;
    this.dataService.set_imageryViewModels();
  }

  public ngOnInit() {
    this.mode = this.dataService.getmode();
    if(this.mode === "editor") {
      this.dataService.getValue(this.data);
      this.dataService.LoadJSONData();
      this.dataArr = this.dataService.get_ViData();
      this._index = 0;
    }
    if(this.mode === "viewer") {
      this.dataService.LoadJSONData();
      this.dataArr = this.dataService.get_PuData();
      this._index = 2;
    }
    const imageryViewModels = this.dataService.get_imageryViewModels();
    const viewer = new Cesium.Viewer("cesiumContainer" , {
      infoBox: false,
      showRenderLoopErrors: false,
      orderIndependentTranslucency: false,
      imageryProviderViewModels : imageryViewModels,
      selectedImageryProviderViewModel : imageryViewModels[0],
      timeline: false,
      fullscreenButton:false,
      automaticallyTrackDataSourceClocks:false,
      animation:false
    });
    document.getElementsByClassName("cesium-viewer-bottom")[0].remove();
    this.dataService.setViewer(viewer);
  }

  public notify(message: string): void {
    if(message === "model_update" ) {

      this.data = this.dataService.getGsModel();
      try {
        this.LoadData(this.data);
      }
      catch(ex) {
        console.log(ex);
      }
    }
  }

  public LoadData(data: JSON) {
    if(this.data !== undefined) {
      /////// INITIALISING VIEWER ////////
      const viewer = this.dataService.getViewer();
      viewer.dataSources.removeAll();
      viewer.scene.primitives.remove(this.dataService.getcesiumpromise());
      const new_viewer = new Cesium.Viewer("cesiumContainer");
      
      /////// LOADING DATA ///////
      this.data = data;
      const dataSource = this.dataService.genCityJSONGeom(this.data);
      // const promise = Cesium.GeoJsonDataSource.load(this.data);
      viewer.dataSources.add(dataSource);
      const _HeightKey: any[] = [];

      this._ShowColorBar = false;

      /////// THIS IS FOR THE ZOOM TO HOME BUTTON ///////
      viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function(e) {
        e.cancel = true;
        viewer.zoomTo(dataSource);
      });
      viewer.zoomTo(dataSource);
      this.Colortext();
    }
  }

  public Colortext() {
    if(this.dataArr !== undefined) {
      if(this._index !== this.dataService.get_index()) {
        this._index = this.dataService.get_index();
        if(this._index === 0) {this.dataArr = this.dataService.get_ViData();
        } else if(this._index === 2) {this.dataArr = this.dataService.get_PuData();}
      }
      const propertyname = this.dataArr["ColorKey"];
      const texts = this.dataArr["ColorText"].sort();
      const _Max: number = this.dataArr["ColorMax"];
      const _Min: number = this.dataArr["ColorMin"];
      if(this.mode === "viewer") {
        this._ColorKey = this.dataArr["ColorKey"];
        this._ExtrudeKey = this.dataArr["ExtrudeKey"];
      }
      this.texts = undefined;
      this._Cattexts = [];
      this._CatNumtexts = [];
      let _ColorKey: any;
      let _ChromaScale = chroma.scale("SPECTRAL");
      if(this.dataArr["ColorInvert"] === true) {_ChromaScale = chroma.scale("SPECTRAL").domain([1,0]);}
      this._Colorbar = [];
      for(let i = 79;i>-1;i--) {
        this._Colorbar.push(_ChromaScale(i/80));
      }
      if(typeof(texts[0]) === "number") {
        this.texts = [Number(_Min.toFixed(2))];
        for(let i = 1;i<10;i++) {
          this.texts.push(Number((_Min+(_Max-_Min)*(i/10)).toFixed(2)));
        }
        this.texts.push(Number(_Max.toFixed(2)));
        for(let i = 0;i<this.texts.length;i++) {
          if(this.texts[i]/1000000000>1) {
            this.texts[i] = String(Number((this.texts[i]/1000000000).toFixed(3))).concat("B");
          } else if(this.texts[i]/1000000>1) {
            this.texts[i] = String(Number((this.texts[i]/1000000).toFixed(3))).concat("M");
          } else if(this.texts[i]/1000>1) {
            this.texts[i] = String(Number(((this.texts[i]/1000)).toFixed(3))).concat("K");
          }
        }
      }
      if(typeof(texts[0]) === "string") {
        if(texts.length<=12) {
          for(let j = 0;j<texts.length;j++) {
            _ColorKey = [];
            _ColorKey.text = texts[j];
            _ColorKey.color = _ChromaScale (1 - (j / texts.length));//_ChromaScale(j/texts.length);
            this._Cattexts.push(_ColorKey);
          }
        } else {
          for(let j = 0;j<this._Colorbar.length;j++) {
            _ColorKey = [];
            if(j === 0) {_ColorKey.text = texts[j];} else if(j === this._Colorbar.length-1) {
              if(texts[texts.length-1] !== null) {_ColorKey.text = texts[texts.length-1];
              } else {_ColorKey.text = texts[texts.length-2];}
            } else { _ColorKey.text = null;}
            _ColorKey.color = this._Colorbar[j];
            this._CatNumtexts.push(_ColorKey);
          }
        }
      }
    }
    if(this._ShowColorBar === false) {
      this._Cattexts = undefined;
      this._Colorbar = undefined;
    }
  }

  public select() {
    event.stopPropagation();
    const viewer = this.dataService.getViewer();//this.viewer;
    // console.log("Triggered select");
    if(this.selectEntity !== undefined&&this.selectEntity !== null) {
      for (let i = 0 ; i < this.selectEntity._children.length ; i++) {
        this.selectEntity._children[i].polygon.material = this.material[i];
      }
      // this.selectEntity.polygon.material = this.material;
      // console.log("Triggered revert colour", this.selectEntity.polygon.material);
    }
    if(viewer.selectedEntity !== undefined&&viewer.selectedEntity.polygon !== null) {
      console.log(viewer.selectedEntity);
      this.dataService.set_SelectedEntity(viewer.selectedEntity._parent);
      this.selectEntity = viewer.selectedEntity._parent;
      this.material = [];
      // console.log("Stored material", this.material);
      this.selectEntity._children.forEach((child) => {
        this.material.push(child.polygon.material);
        child.polygon.material = Cesium.Color.BLUE;
      })
      // viewer.selectedEntity.polygon.material = Cesium.Color.BLUE;
      // console.log("Triggered change colour", viewer.selectedEntity.polygon.material);

      //get properties
    } else {
      this.dataService.set_SelectedEntity(undefined);
      this.selectEntity = undefined;
      this.material = undefined;
      // console.log("Triggered set everything to undefined");
    }

  }

  public showAttribs(event) {
    const viewer = this.dataService.getViewer();
    if(this.data !== undefined && this.mode === "viewer") {
      if(this.data["cesium"] !== undefined) {
        if(this.data["cesium"].select !== undefined) {
          if(viewer.selectedEntity !== undefined) {
            const pickup = viewer.scene.pick(new Cesium.Cartesian2(event.clientX,event.clientY));
            this.pickupArrs = [];
            this.pickupArrs.push({name:"ID",data:pickup.id.id});
            for(const _propertyName of this.data["cesium"].select) {
              this.pickupArrs.push({name:_propertyName,data:
                                    this.dataService.get_SelectedEntity().properties[_propertyName]._value});
            }
            const nameOverlay = document.getElementById("cesium-infoBox-defaultTable");
            viewer.container.appendChild(nameOverlay);
            nameOverlay.style.bottom = viewer.canvas.clientHeight - event.clientY + "px";
            nameOverlay.style.left = event.clientX + "px";
            nameOverlay.style.display= "block";
          } else {
            document.getElementById("cesium-infoBox-defaultTable").style.display= "none";
          }
        }
      }
    }
  }
    // save the geojson
  save_geojson(): void{
    let fileString = JSON.stringify(this.data);
    let blob = new Blob([fileString], {type: 'application/json'});
    FileUtils.downloadContent(blob, "output.geojson");
  }
}


abstract class FileUtils{
  public static downloadContent(blob, filename) {
    if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        const a = document.createElement('a');
        document.body.appendChild(a);
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = filename;
        a.click();
        setTimeout(() => {
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
        }, 0)
    }
  }
}