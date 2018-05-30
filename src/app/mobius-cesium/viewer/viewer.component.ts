import { Component, OnInit, Injector, ElementRef } from "@angular/core";
import {DataSubscriber} from "../data/DataSubscriber";
import {SettingComponent} from "../setting/setting.component";
import * as d3 from "d3-array";
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
  private material: object;
  private poly_center: any[];
  private _Colorbar: any[];
  private texts: any[];
  private _Cattexts: any[];
  private _CatNumtexts: any[];
  private pickupArrs: any[];
  private mode: string;
  private _index: number;
  private _ShowColorBar: boolean;

  constructor(injector: Injector, myElement: ElementRef) {
    super(injector);
    this.myElement = myElement;
  }

  public ngOnInit() {
    this.mode=this.dataService.getmode();
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
    if(document.getElementsByClassName("cesium-viewer").length!==0) {
      document.getElementsByClassName("cesium-viewer")[0].remove();
    }
    const imageryViewModels = [];
    imageryViewModels.push(new Cesium.ProviderViewModel({
     name : "Stamen Toner",
     iconUrl : Cesium.buildModuleUrl("Widgets/Images/ImageryProviders/stamenToner.png"),
     tooltip : "A high contrast black and white map.\nhttp://www.maps.stamen.com/",
     creationFunction : function() {
         return Cesium.createOpenStreetMapImageryProvider({
             url : "https://stamen-tiles.a.ssl.fastly.net/toner/",
         });
     },
    }));
    imageryViewModels.push(new Cesium.ProviderViewModel({
     name : "Stamen Toner(Lite)",
     iconUrl : Cesium.buildModuleUrl("Widgets/Images/ImageryProviders/stamenToner.png"),
     tooltip : "A high contrast black and white map(Lite).\nhttp://www.maps.stamen.com/",
     creationFunction : function() {
         return Cesium.createOpenStreetMapImageryProvider({
             url : "https://stamen-tiles.a.ssl.fastly.net/toner-lite/",
         });
     },
    }));
    imageryViewModels.push(new Cesium.ProviderViewModel({
     name : "Terrain(Standard)",
     iconUrl : Cesium.buildModuleUrl("Widgets/Images/TerrainProviders/CesiumWorldTerrain.png"),
     tooltip : "A high contrast black and white map(Standard).\nhttp://www.maps.stamen.com/",
     creationFunction : function() {
         return Cesium.createOpenStreetMapImageryProvider({
             url : "https://stamen-tiles.a.ssl.fastly.net/terrain/",
         });
     },
    }));
    imageryViewModels.push(new Cesium.ProviderViewModel({
     name : "Terrain(Background)",
     iconUrl : Cesium.buildModuleUrl("Widgets/Images/TerrainProviders/CesiumWorldTerrain.png"),
     tooltip : "A high contrast black and white map(Background).\nhttp://www.maps.stamen.com/",
     creationFunction : function() {
         return Cesium.createOpenStreetMapImageryProvider({
             url : "https://stamen-tiles.a.ssl.fastly.net/terrain-background/",
         });
     },
    }));
    imageryViewModels.push(new Cesium.ProviderViewModel({
     name : "Open\u00adStreet\u00adMap",
     iconUrl : Cesium.buildModuleUrl("Widgets/Images/ImageryProviders/openStreetMap.png"),
     tooltip : "OpenStreetMap (OSM) is a collaborative project to create a free editable \
             map of the world.\nhttp://www.openstreetmap.org",
     creationFunction : function() {
         return Cesium.createOpenStreetMapImageryProvider({
             url : "https://a.tile.openstreetmap.org/",
         });
     },
    }));

    imageryViewModels.push(new Cesium.ProviderViewModel({
     name : "Earth at Night",
     iconUrl : Cesium.buildModuleUrl("Widgets/Images/ImageryProviders/earthAtNight.png"),
     tooltip : "The lights of cities and villages trace the outlines of civilization \
                 in this global view of the Earth at night as seen by NASA/NOAA\'s Suomi NPP satellite.",
     creationFunction : function() {
         return new Cesium.IonImageryProvider({ assetId: 3812 });
     },
    }));

    imageryViewModels.push(new Cesium.ProviderViewModel({
     name : "Natural Earth\u00a0II",
     iconUrl : Cesium.buildModuleUrl("Widgets/Images/ImageryProviders/naturalEarthII.png"),
     tooltip : "Natural Earth II, darkened for contrast.\nhttp://www.naturalearthdata.com/",
     creationFunction : function() {
         return Cesium.createTileMapServiceImageryProvider({
             url : Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII"),
         });
     },
    }));

    imageryViewModels.push(new Cesium.ProviderViewModel({
     name : "Blue Marble",
     iconUrl : Cesium.buildModuleUrl("Widgets/Images/ImageryProviders/blueMarble.png"),
     tooltip : "Blue Marble Next Generation July, 2004 imagery from NASA.",
     creationFunction : function() {
         return new Cesium.IonImageryProvider({ assetId: 3845 });
     },
    }));

    const viewer = new Cesium.Viewer("cesiumContainer" , {
      infoBox:false,
      imageryProviderViewModels : imageryViewModels,
      selectedImageryProviderViewModel : imageryViewModels[0],
      timeline: false,
      fullscreenButton:false,
      automaticallyTrackDataSourceClocks:false,
      animation:false,
    });
    document.getElementsByClassName("cesium-viewer-bottom")[0].remove();   
    if(this.data!==undefined) {
      this.viewer=viewer;
      this.dataService.setViewer(this.viewer);
      this.data=data;
      this.poly_center=[];
      const promise = Cesium.GeoJsonDataSource.load(this.data);
      const self= this;
      const _HeightKey: any[]=[];

      promise.then(function(dataSource) {
        viewer.dataSources.add(dataSource);
        const entities = dataSource.entities.values;
        for (const entity of entities) {
          let poly_center=[];
          if(entity.polygon!==undefined) {
            entity.polygon.outlineColor = Cesium.Color.Black;
            const center =  Cesium.BoundingSphere.fromPoints(entity.polygon.hierarchy.getValue().positions).center;
            const radius=Math.min(Math.round(Cesium.BoundingSphere.fromPoints
                                  (entity.polygon.hierarchy.getValue().positions).radius/100),10);
            const longitudeString = Cesium.Math.toDegrees(Cesium.Ellipsoid.WGS84.
                                    cartesianToCartographic(center).longitude).toFixed(10);
            const latitudeString = Cesium.Math.toDegrees(Cesium.Ellipsoid.WGS84.cartesianToCartographic(center).
                                    latitude).toFixed(10);
            poly_center=[longitudeString,latitudeString,radius];
            self.poly_center.push(poly_center);
          }
          if(entity.billboard!==undefined) {
            entity.billboard = undefined;
            entity.point = new Cesium.PointGraphics({
              color: Cesium.Color.BLUE,
              pixelSize: 10,
            });
          }
        }
        if(entities[0].polygon!==undefined) {self._ShowColorBar=true;} else {self._ShowColorBar=false;}
        self.dataService.setpoly_center(self.poly_center);
      });

      this.dataService.setcesiumpromise(promise);
      if(this.mode==="editor") {
        this.dataService.getValue(this.data);
        this.dataService.LoadJSONData();
        this.dataArr=this.dataService.get_ViData();
        this._index= 0;
      }
      if(this.mode==="viewer") {
        this._index= 2;
      }
      viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function(e) {
        e.cancel = true;
        viewer.zoomTo(promise);
      });
      viewer.zoomTo(promise);
      this.Colortext();
    }
  }

  public Colortext() {
    if(this.dataArr!==undefined) {
      if(this._index!==this.dataService.get_index()) {
        this._index=this.dataService.get_index();
        if(this._index===0) {this.dataArr=this.dataService.get_ViData();
        } else if(this._index===2) {this.dataArr=this.dataService.get_PuData();}
      }
      const propertyname=this.dataArr["ColorKey"];
      const texts= this.dataArr["ColorText"].sort();
      const _Max: number=this.dataArr["ColorMax"];
      const _Min: number=this.dataArr["ColorMin"];
      this.texts=undefined;
      this._Cattexts=[];
      this._CatNumtexts=[];
      let _ColorKey: any;
      let _ChromaScale=chroma.scale("SPECTRAL");
      if(this.dataArr["ColorInvert"]===true) {_ChromaScale=chroma.scale("SPECTRAL").domain([1,0]);}
      this._Colorbar=[];
      for(let i=79;i>-1;i--) {
        this._Colorbar.push(_ChromaScale(i/80));
      }
      if(typeof(texts[0])==="number") {
        this.texts=[Number(_Min.toFixed(2))];
        for(let i=1;i<10;i++) {
          this.texts.push(Number((_Min+(_Max-_Min)*(i/10)).toFixed(2)));
        }
        this.texts.push(Number(_Max.toFixed(2)));
        for(let i=0;i<this.texts.length;i++) {
          if(this.texts[i]/1000000000>1) {
            this.texts[i]=String(Number((this.texts[i]/1000000000).toFixed(3))).concat("B");
          } else if(this.texts[i]/1000000>1) {
            this.texts[i]=String(Number((this.texts[i]/1000000).toFixed(3))).concat("M");
          } else if(this.texts[i]/1000>1) {this.texts[i]=String(Number(((this.texts[i]/1000)).toFixed(3))).concat("K");}
        }
      }
      if(typeof(texts[0])==="string") {
        if(texts.length<=12) {
          for(let j=0;j<texts.length;j++) {
            _ColorKey=[];
            _ColorKey.text=texts[j];
            _ColorKey.color=_ChromaScale(j/texts.length);
            this._Cattexts.push(_ColorKey);
          }
        } else {
          for(let j=0;j<this._Colorbar.length;j++) {
            _ColorKey=[];
            if(j===0) {_ColorKey.text=texts[j];} else if(j===this._Colorbar.length-1) {
              if(texts[texts.length-1]!==null) {_ColorKey.text=texts[texts.length-1];
              } else {_ColorKey.text=texts[texts.length-2];}
            } else { _ColorKey.text=null;}
            _ColorKey.color=this._Colorbar[j];
            this._CatNumtexts.push(_ColorKey);
          }
        }
      }
    }
    if(this._ShowColorBar===false) {
      this._Cattexts=undefined;
      this._Colorbar=undefined;
    }
  }

  public select() {
    event.stopPropagation();
    const viewer=this.viewer;
    if(this.dataArr!==undefined) {
      if(this.selectEntity!==undefined&&this.selectEntity!==null) {this.ColorSelect(this.selectEntity);}
      if(viewer.selectedEntity!==undefined&&viewer.selectedEntity.polygon!==null) {
        this.dataService.set_SelectedEntity(viewer.selectedEntity);
        let material;
        if(viewer.selectedEntity.polygon!==undefined) {
          material=viewer.selectedEntity.polygon.material;
          viewer.selectedEntity.polygon.material=Cesium.Color.WHITE;
        }
        if(viewer.selectedEntity.polyline!==undefined) {
          material=viewer.selectedEntity.polyline.material;
          viewer.selectedEntity.polyline.material=Cesium.Color.WHITE;
        }
        this.selectEntity=viewer.selectedEntity;
        this.material=material;
      } else {
        this.dataService.set_SelectedEntity(undefined);
        this.selectEntity=undefined;
        this.material=undefined;
      }
    }
  }

  public ColorSelect(entity) {
    const promise=this.dataService.getcesiumpromise();
    const _ColorKey: string=this.dataArr["ColorKey"];
    const _ColorMax: number=this.dataArr["ColorMax"];
    const _ColorMin: number=this.dataArr["ColorMin"];
    const _ColorText: any[]=this.dataArr["ColorText"];
    const _ColorInvert: boolean=this.dataArr["ColorInvert"];
    const _ExtrudeKey: string=this.dataArr["ExtrudeKey"];
    const _ExtrudeMax: number=this.dataArr["ExtrudeMax"];
    const _ExtrudeMin: number=this.dataArr["ExtrudeMin"];
    const _HeightChart: boolean=this.dataArr["HeightChart"];
    const _Invert: boolean=this.dataArr["Invert"];
    const _Scale: number=this.dataArr["Scale"];
    const _Filter: any[]=this.dataArr["Filter"];
    let _ChromaScale=chroma.scale("SPECTRAL");
    if(_ColorInvert===true) {_ChromaScale=chroma.scale("SPECTRAL").domain([1,0]);}
    let _CheckHide: boolean;
    if(_Filter.length!==0) {
      _CheckHide=this.Hide(_Filter,entity,_HeightChart);
      if(_CheckHide===true) {
        if(entity.polygon!==undefined) {
          entity.polygon.extrudedHeight = 0;
          entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
          if(_HeightChart===true) {
            if(entity.polyline!==undefined) {entity.polyline.show=false;}
          }
        }
        if(entity.polyline!==undefined)  {entity.polyline.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
      }
    }
    if(_Filter.length===0||_CheckHide===false) {
      if(typeof(_ColorText[0])==="number") {
        this.colorByNum(entity,_ColorMax,_ColorMin,_ColorKey,_ChromaScale);
      } else {this.colorByCat(entity,_ColorText,_ColorKey,_ChromaScale);}
    }
  }

  public Hide(_Filter: any[],entity,_HeightChart: boolean): boolean {
    let _CheckHide: boolean=false;
    for(const filter of _Filter) {
      const value = entity.properties[filter.HeightHide]._value;
      if(value !== undefined) {
        if(typeof(value)==="number") {
          if (this._compare(value, Number(filter.textHide), Number(filter.RelaHide))) {
            _CheckHide=true;
          }
        } else if(typeof(value)==="string") {
          if (this._compareCat(value,filter.textHide, Number(filter.RelaHide))) {
            _CheckHide=true;
          }
        }
      }
    }
    return _CheckHide;
  }

  public _compare(value: number, slider: number, relation: number): boolean {
    switch (relation) {
      case 0:
        return value < slider;
      case 1:
        return value > slider;
      case 2:
        return value === slider;
    }
  }

  public _compareCat(value: string, _Categary: string,relation: number): boolean {
    switch (relation) {
      case 0:
        return value ===  undefined;
      case 1:
        return value !== _Categary;
      case 2:
        return value === _Categary;
    }
  }
  public colorByNum(entity,max: number,min: number,_ColorKey: string,_ChromaScale: any) {
    if(entity.properties[_ColorKey]!==undefined) {
      const texts=entity.properties[_ColorKey]._value;
      const rgb=_ChromaScale(Number(((max-texts)/(max-min)).toFixed(2)))._rgb;
      if(entity.polygon!==undefined) {entity.polygon.material=Cesium.Color.fromBytes(rgb[0],rgb[1],rgb[2]);}
      if(entity.polyline!==undefined) {entity.polyline.material=Cesium.Color.fromBytes(rgb[0],rgb[1],rgb[2]);}
    }
  }

  public  colorByCat(entity,_ColorText: any[],_ColorKey: string,_ChromaScale: any) {
    if(entity.properties[_ColorKey]!==undefined) {
      let initial: boolean=false;
      for(let j=0;j<_ColorText.length; j++) {
        if(entity.properties[_ColorKey]._value===_ColorText[j]) {
          const rgb=_ChromaScale((j/_ColorText.length).toFixed(2));
          entity.polygon.material=entity.polygon.material=Cesium.Color.fromBytes(rgb._rgb[0],rgb._rgb[1],rgb._rgb[2]);
          initial=true;
        }
      }
      if(initial===false) {
        entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
      }
    }
  }

  public showAttribs(event) {
    if(this.data!==undefined&&this.mode==="viewer") {
      if(this.data["cesium"]!==undefined) {
        if(this.data["cesium"].select!==undefined) {
          if(this.viewer.selectedEntity!==undefined) {
            const pickup=this.viewer.scene.pick(new Cesium.Cartesian2(event.clientX,event.clientY));
            this.pickupArrs=[];
            this.pickupArrs.push({name:"ID",data:pickup.id.id});
            for(let i=0;i<this.data["cesium"].select.length;i++) {
              const propertyName: string=this.data["cesium"].select[i];
              this.pickupArrs.push({name:propertyName,data:
                                    this.dataService.get_SelectedEntity().properties[propertyName]._value});
            }
            const nameOverlay = document.getElementById("cesium-infoBox-defaultTable");
            this.viewer.container.appendChild(nameOverlay);
            nameOverlay.style.bottom = this.viewer.canvas.clientHeight - event.clientY + "px";
            nameOverlay.style.left = event.clientX + "px";
            nameOverlay.style.display= "block";
          } else {
            document.getElementById("cesium-infoBox-defaultTable").style.display= "none";
          }
        }
      }
    }
  }
}
