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
  private data: any;
  private myElement;
  // private dataArr: object;
  private viewer: any;
  private selectEntity: any=null;
  private material: any;
  // private _Colorbar: any[];
  // private texts: any[];
  // private _Cattexts: any[];
  // private _CatNumtexts: any[];
  private pickupArrs: any[];
  // private mode: string;
  // private _index: number;
  // private _ShowColorBar: boolean;
  // private _ColorKey: string;
  // private _ExtrudeKey: string;

  constructor(injector: Injector, myElement: ElementRef) {
    super(injector);
    this.myElement = myElement;
  }

  public ngOnInit() {
    // //pass mode to dataService
    // this.mode = this.dataService.getmode();
    if(this.dataService.getViewer() === undefined){
      this.CreateViewer();
    }
    // //pass data to dataService
    this.data = this.dataService.getGsModel();
    // //load data
    this.LoadData(this.data);
  }

  public notify(message: string): void {
    if(message === "model_update" ) {
      this.data = this.dataService.getGsModel();
      try {
        if(this.dataService.getViewer() === undefined){
          this.CreateViewer();
        }
        this.LoadData(this.data);
      }
      catch(ex) {
        console.log(ex);
      }
    }
  }
  //create cesium viewer and change home button funciton
  public CreateViewer(){
    const viewer = new Cesium.Viewer("cesiumContainer" , {
      infoBox: false,
      showRenderLoopErrors: false,
      orderIndependentTranslucency: false,
      baseLayerPicker: false,
      fullscreenButton:false,
      automaticallyTrackDataSourceClocks:false,
      animation:false,
      shadows:true,
      scene3DOnly:true,
      selectionIndicator : false,
      geocoder: false,
      //terrainShadows: Cesium.ShadowMode.ENABLED
    });
    viewer.scene.imageryLayers.removeAll();
    viewer.scene.globe.baseColor = Cesium.Color.GRAY;
    // viewer.scene.contextOptions = {webgl: {antialias: false}};
    document.getElementsByClassName("cesium-viewer-bottom")[0].remove();
    const self = this;
    viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function(e) {
        e.cancel = true;
        viewer.zoomTo(self.dataService.getcesiumpromise());
    });
    this.dataService.setViewer(viewer);
  }
  //Cesium geoJson to load data and check mode
  public LoadData(data: JSON) {
    if(this.data !== undefined) {
      // console.log("Gen geom");
      /////// INITIALISING VIEWER ////////
      const viewer = this.dataService.getViewer();
      viewer.dataSources.removeAll({destroy:true});
      /////// OBTAINING DATA ////////
      const context = this;
      let promise = context.cityJSONService.genGeom(data);
      if (promise === undefined) {
        promise = context.cityGMLService.genGeom(data);
      }

      promise.then((datasource) => {
        // console.log(context.cityGMLService.getCount());
        context.cesiumGeomService.clearDataSource();
        context.data = null;
        viewer.dataSources.add(datasource);
        console.log("Done");
      });

      this.dataService.setcesiumpromise(promise);
      let promise2 = viewer.zoomTo(promise);
      promise2.then(()=>{
        document.getElementById("overlay").style.display = "none";
        document.getElementById("loader").style.display = "none";
        promise2 = null;
      })
      
      const _HeightKey: any[] = [];

      /////// THIS IS FOR THE ZOOM TO HOME BUTTON ///////
      viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function(e) {
        e.cancel = true;
        // document.getElementById("overlay").style.display = "block";
        // document.getElementById("loader").style.display = "block";
        // console.log("block")
        promise2 = viewer.zoomTo(promise);
        // console.log("zoom")
        // promise2.then(()=>{
        //   document.getElementById("overlay").style.display = "none";
        //   document.getElementById("loader").style.display = "none";
        //   console.log("none")
        //   promise2 = null;
        // })
      });

      // if(this.mode === "editor") {
      //   this._ShowColorBar = false;
      //   this._index = 1;
      // }
      // if(this.mode === "viewer") {
      //   // this.dataService.LoadJSONData();
      //   // this.dataArr = this.dataService.get_PuData();
      //   this._index = 3;
      // }
      // if(this.mode === "cityjson") {
      //   this._ShowColorBar = false;
      //   this._index = 1;
      // }

      // this.Colortext();
    }
  }
  //create color bar and text at bottom of viewer
  // public Colortext() {
  //   if(this.dataArr !== undefined) {
  //     if(this._index !== this.dataService.get_index()) {
  //       this._index = this.dataService.get_index();
  //       // if(this._index === 1) {this.dataArr = this.dataService.get_ViData();
  //       // } else if(this._index === 3) {this.dataArr = this.dataService.get_PuData();}
  //     }
  //     const propertyname = this.dataArr["ColorKey"];
  //     const texts = this.dataArr["ColorText"].sort();
  //     const _Max: number = this.dataArr["ColorMax"];
  //     const _Min: number = this.dataArr["ColorMin"];
  //     if(this.mode === "viewer") {
  //       this._ColorKey = this.dataArr["ColorKey"];
  //       this._ExtrudeKey = this.dataArr["ExtrudeKey"];
  //     }
  //     this.texts = undefined;
  //     this._Cattexts = [];
  //     this._CatNumtexts = [];
  //     let _ColorKey: any;
  //     let _ChromaScale = chroma.scale("SPECTRAL");
  //     if(this.dataArr["ColorInvert"] === true) {_ChromaScale = chroma.scale("SPECTRAL").domain([1,0]);}
  //     this._Colorbar = [];
  //     for(let i = 79;i>-1;i--) {
  //       this._Colorbar.push(_ChromaScale(i/80));
  //     }
  //     if(typeof(texts[0]) === "number") {
  //       this.texts = [Number(_Min.toFixed(2))];
  //       for(let i = 1;i<10;i++) {
  //         this.texts.push(Number((_Min+(_Max-_Min)*(i/10)).toFixed(2)));
  //       }
  //       this.texts.push(Number(_Max.toFixed(2)));
  //       for(let i = 0;i<this.texts.length;i++) {
  //         if(this.texts[i]/1000000000>1) {
  //           this.texts[i] = String(Number((this.texts[i]/1000000000).toFixed(3))).concat("B");
  //         } else if(this.texts[i]/1000000>1) {
  //           this.texts[i] = String(Number((this.texts[i]/1000000).toFixed(3))).concat("M");
  //         } else if(this.texts[i]/1000>1) {
  //           this.texts[i] = String(Number(((this.texts[i]/1000)).toFixed(3))).concat("K");
  //         }
  //       }
  //     }
  //     if(typeof(texts[0]) === "string") {
  //       if(texts.length<=12) {
  //         for(let j = 0;j<texts.length;j++) {
  //           _ColorKey = [];
  //           _ColorKey.text = texts[j];
  //           _ColorKey.color = _ChromaScale (1 - (j / texts.length));//_ChromaScale(j/texts.length);
  //           this._Cattexts.push(_ColorKey);
  //         }
  //       } else {
  //         for(let j = 0;j<this._Colorbar.length;j++) {
  //           _ColorKey = [];
  //           if(j === 0) {_ColorKey.text = texts[j];} else if(j === this._Colorbar.length-1) {
  //             if(texts[texts.length-1] !== null) {_ColorKey.text = texts[texts.length-1];
  //             } else {_ColorKey.text = texts[texts.length-2];}
  //           } else { _ColorKey.text = null;}
  //           _ColorKey.color = this._Colorbar[j];
  //           this._CatNumtexts.push(_ColorKey);
  //         }
  //       }
  //     }
  //   }
  //   if(this._ShowColorBar === false) {
  //     this._Cattexts = undefined;
  //     this._Colorbar = undefined;
  //   }
  // }
  //click building to select and  pass whole entity to dataService
  public select() {
    event.stopPropagation();
    const viewer = this.dataService.getViewer();//this.viewer;
    if(this.selectEntity !== undefined&&this.selectEntity !== null) {
      this.selectEntity._children[0].polygon.material.color.intervals.get(0).data = this.material;
    }

    if(viewer.selectedEntity !== undefined&&viewer.selectedEntity.polygon !== null) {
      this.dataService.set_SelectedEntity(viewer.selectedEntity._parent);
      this.selectEntity = viewer.selectedEntity._parent;
      this.material = this.selectEntity._children[0].polygon.material.color.intervals.get(0).data;
      this.selectEntity._children[0].polygon.material.color.intervals.get(0).data = Cesium.Color.BLUE.withAlpha(this.material.alpha);
      //get properties
    } else {
      this.dataService.set_SelectedEntity(undefined);
      this.selectEntity = undefined;
      this.material = undefined;
    }
  }

  // public showAttribs(event) {
  //   const viewer = this.dataService.getViewer();
  //   if(this.data !== undefined) {
  //     if(this.data["cesium"] !== undefined) {
  //       if(this.data["cesium"].select !== undefined) {
  //         if(viewer.selectedEntity !== undefined) {
  //           const pickup = viewer.scene.pick(new Cesium.Cartesian2(event.clientX,event.clientY));
  //           this.pickupArrs = [];
  //           this.pickupArrs.push({name:"ID",data:pickup.id.id});
  //           for(const _propertyName of this.data["cesium"].select) {
  //             this.pickupArrs.push({name:_propertyName,data:
  //                                   this.dataService.get_SelectedEntity().properties[_propertyName]._value});
  //           }
  //           const nameOverlay = document.getElementById("cesium-infoBox-defaultTable");
  //           viewer.container.appendChild(nameOverlay);
  //           nameOverlay.style.bottom = viewer.canvas.clientHeight - event.clientY + "px";
  //           nameOverlay.style.left = event.clientX + "px";
  //           nameOverlay.style.display= "block";
  //         } else {
  //           document.getElementById("cesium-infoBox-defaultTable").style.display= "none";
  //         }
  //       }
  //     }
  //   }
  // }
}
