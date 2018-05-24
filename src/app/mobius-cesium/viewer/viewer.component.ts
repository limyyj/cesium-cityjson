import { Component, OnInit, Injector, ElementRef } from "@angular/core";
import {DataSubscriber} from "../data/DataSubscriber";
import * as chroma from "chroma-js";

@Component({
  selector: "cesium-viewer",
  templateUrl: "./viewer.component.html",
  styleUrls: ["./viewer.component.css"],
})
export class ViewerComponent extends DataSubscriber {
  private data: JSON;
  private myElement;
  private _ColorValue: string;
  private _HeightValue: string;
  private _ChromaScale: any;
  private propertyNames: any[];
  private viewer: any;
  private selectEntity: any=null;
  private material: object;
  private poly_center: any[];
  private _Colorbar: any[];
  private _Max: number;
  private _Min: number;
  private texts: any[];
  private _Cattexts: any[];
  private _CatNumtexts: any[];
  private pickupArrs: any[];
  private _ShowColorBar: boolean=false;
  private darkStyleEsri: any;
  private _CheckInvert: boolean;
  private mode: string;

  constructor(injector: Injector, myElement: ElementRef) {
    super(injector);
    this.myElement = myElement;
    this._Colorbar=[];
    this._CheckInvert=this.dataService._CheckInvert;
    this._ChromaScale=chroma.scale("SPECTRAL");
    for(let i=79;i>-1;i--) {
        this._Colorbar.push(this._ChromaScale(i/80));
    }
  }

  public ngDoCheck() {
    if(this._ColorValue!==this.dataService._ColorValue) {
      this._ColorValue=this.dataService._ColorValue;
      this._ChromaScale=this.dataService._ChromaScale;
      this._Colorbar=[];
      for(let i=79;i>-1;i--) {
        this._Colorbar.push(this._ChromaScale(i/80));
      }

      this.Colortext();
    }
    if(this._Max!==this.dataService._MaxColor) {
      this._Max=this.dataService._MaxColor;
      this.Colortext();

    }
    if(this._Min!==this.dataService._MinColor) {
      this._Min=this.dataService._MinColor;
      this.Colortext();
    }
  }

  public ngOnInit() {
    this.mode=this.dataService.mode;
  }

  public  notify(message: string): void {
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
      /*imageryProvider : Cesium.createOpenStreetMapImageryProvider({
       url : 'https://stamen-tiles.a.ssl.fastly.net/toner/'
      }), */
      imageryProviderViewModels : imageryViewModels,
      selectedImageryProviderViewModel : imageryViewModels[0],
      timeline: false,
      fullscreenButton:false,
      automaticallyTrackDataSourceClocks:false,
      animation:false,
    });
    viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function(e) {
      e.cancel = true;
      viewer.zoomTo(this.dataService.cesiumpromise);
    });
    document.getElementsByClassName("cesium-viewer-bottom")[0].remove();

    if(this.data!==undefined) {
      this.viewer=viewer;
      this.dataService.viewer=this.viewer;
      this.data=data;
      this.poly_center=[];
      const promise = Cesium.GeoJsonDataSource.load(this.data);
      const self= this;
      const _HeightKey: any[]=[];

      // self.propertyNames = self.dataService.getPropertyNames();
      // console.log("propertynames from dataservice: ",
      // self.propertyNames.length, self.dataService.getPropertyNames().length);

      promise.then(function(dataSource) {
        viewer.dataSources.add(dataSource);
        const entities = dataSource.entities.values;
        for (const entity of entities) {
          // let texts: any[];
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
        self.dataService.poly_center=self.poly_center;
        // console.log("prop names from ds", self.dataService.propertyNames);
        // console.log(self.propertyNames, Object.keys(self.data.features[0].properties));
        // for(var i=0;i<self.propertyNames.length;i++){
        //   if(self.propertyNames[i].indexOf("ID")!==-1||self.propertyNames[i].indexOf("id")!==-1){
        //     self.propertyNames.splice(i,1);
        //     i=i-1;
        //   }else{
        //     if(typeof(entity.properties[self.propertyNames[i]]._value)==="number"){
        //       HeightKey.push(self.propertyNames[i]);
        //     }
        //   }
        // }
      });

      this.dataService.cesiumpromise=promise;
      if(this.mode==="editor") {
        this.dataService.getValue(this.data);
      }
      if(this.mode==="viewer"||this.mode==="editor") {
        this.dataService.LoadJSONData();
      }
      // this.dataService.propertyNames=this.propertyNames;
      // this.dataService.HeightKey=HeightKey;

      /*if(this.dataService.ColorValue===undefined){
        this.ColorValue=this.propertyNames.sort()[0];
        this.dataService.ColorValue=this.ColorValue;
      }else if(this.propertyNames.indexOf(this.dataService.ColorValue)===-1){
        this.ColorValue=this.propertyNames.sort()[0];
        this.dataService.ColorValue=this.ColorValue;
      }else{
        this.ColorValue=this.dataService.ColorValue;
      }*/

      // if(this.dataService.HeightValue===undefined){
      //   this.HeightValue=HeightKey.sort()[0];
      //   this.dataService.HeightValue=this.HeightValue;
      // }else if(HeightKey.indexOf(this.dataService.HeightValue)===-1){
      //   this.HeightValue=HeightKey.sort()[0];
      //   this.dataService.HeightValue=this.HeightValue;
      // }else{

      //   this.HeightValue=this.dataService.HeightValue;
      // }
      viewer.zoomTo(promise);
      this.Colortext();
    }
  }

  public Colortext() {
    this.texts=undefined;
    // this.Cattexts=undefined;
    this._Cattexts=[];
    this._CatNumtexts=[];
    const propertyname=this._ColorValue;
    let texts=[];
    const promise=this.dataService.cesiumpromise;
    const self= this;
    promise.then( function(dataSource) {
      const entities = dataSource.entities.values;
      for (const entity of entities) {
        if(entity.properties[propertyname]!==undefined) {
        if(entity.properties[propertyname]._value!==" "&&typeof(entity.properties[propertyname]._value)==="number") {
          if(texts.length===0) {texts[0]=entity.properties[propertyname]._value;
          } else { if(texts.indexOf(entity.properties[propertyname]._value)===-1) {
            texts.push(entity.properties[propertyname]._value);}
            }
          } else if(entity.properties[propertyname]._value!==" "&&
            typeof(entity.properties[propertyname]._value)==="string") {
          if(texts.length===0) {texts[0]=entity.properties[propertyname]._value;
          } else { if(texts.indexOf(entity.properties[propertyname]._value)===-1) {
            texts.push(entity.properties[propertyname]._value);}
            }
          }
        }
      }
    });
    let _Max: number;
    let _Min: number;
    if(typeof(texts[0])==="number") {
      this._ChromaScale=chroma.scale("SPECTRAL");
      if(this.dataService._MaxColor===undefined) {
        this._Max=Math.max.apply(Math, texts);
        this._Min=Math.min.apply(Math, texts);
        _Max=this._Max;
        _Min=this._Min;
      } else {
        _Max=this.dataService._MaxColor;
        _Min=this.dataService._MinColor;
      }
      _Min=Number(_Min);
      _Max=Number(_Max);

      /*let letter_map = ["", "K", "M", "B"];
      function getLetter(number){
        let power = 0;
        while(number > 0){
          number = number / Math.pow(10, power);
          power = power + 1;
        }

        return letter_map[power];
      }
      function rangeMap(Min, Max){
        let range_values = [Min]
        for(var i=1;i<10;i++){
           range_values.push((Min+((Max-Min)/10)*(i)));
        }
        range_values.push(Max)

        let texts = range_values.map(function(value){

          let number_of_digits = numOfDigits(value)
          let letter = letter_map[number_of_digits];
          if(number_of_digits < 4){
            // do nothing
          }
          else if(number_of_digits > 3 && number_of_digits < 6){
            scale_factor = Math.pow(10, 3);
          }
          else if(number_of_digits > 6)
          let scaled_value = value / Math.pow(10, number_of_digits);
          return value.toFixed(0).concat(letter);
        });

        return texts;
      }

      function formatNumber(num){
        let letter_map = ["K", "M", "B"];
        let max_scale = Math.floor(num/1000);
        if(max_scale == 0){
          return num.toFixed(2);
        }

        let scaled_down_number = num / (10000*max_scale);
        return scaled_down_number + letter_map[max_scale];
      }*/
      let num: string;
      if(_Max<=1) {
        this.texts=[_Min];
        for(let i=1;i<10;i++) {
          this.texts.push((_Min+(_Max-_Min)*(i/10)).toFixed(3));
        }
        this.texts.push(_Max);
      } else if(_Max>1000) {
        num=String((_Min/1000).toFixed(2)).concat("K");
        this.texts=[num];
        for(let i=1;i<10;i++) {
          num=String(((_Min+(_Max-_Min)*(i/10))/1000).toFixed(2)).concat("K");
          this.texts.push(num);
        }
        num=String((_Max/1000).toFixed(2)).concat("K");
        this.texts.push(num);
      } else if(_Max>1000000) {
        num=String((_Min/1000000).toFixed(2)).concat("M");
        this.texts=[num];
        for(let i=1;i<10;i++) {
          num=String(((_Min+(_Max-_Min)*(i/10))/1000000).toFixed(2)).concat("M");
          this.texts.push(num);
        }
        num=String((_Max/1000000).toFixed(2)).concat("M");
        this.texts.push(num);
      } else if(_Max>1000000000) {
        num=String((_Min/1000000000).toFixed(2)).concat("B");
        this.texts=[num];
        for(let i=1;i<10;i++) {
          num=String(((_Min+(_Max-_Min)*(i/10))/1000000000).toFixed(2)).concat("B");
          this.texts.push(num);
        }
        num=String((_Max/1000000000).toFixed(2)).concat("B");
        this.texts.push(num);
      } else if(_Max>=1&&_Max<=1000) {
        this.texts=[Number(_Min).toFixed(3)];
        for(let i=1;i<10;i++) {
          this.texts.push(Number(_Min+(_Max-_Min)*(i/10)).toFixed(3));
        }
        this.texts.push(Number(_Max).toFixed(3));
      }
    }
    if(typeof(texts[0])==="string") {
      if(texts.length<=12) {
        for(let j=0;j<texts.length;j++) {
          let ColorKey: any=[];
          ColorKey.text=texts[j];
          this._ChromaScale=chroma.scale("SPECTRAL");
          ColorKey.color=this._ChromaScale((j/texts.length).toFixed(2));
          this._Cattexts.push(ColorKey);
        }
      } else {
        texts=texts.sort();
        for(let j=0;j<this._Colorbar.length;j++) {
          let ColorKey: any=[];
          if(j===0) {ColorKey.text=texts[j];} else if(j===this._Colorbar.length-1) {ColorKey.text=texts[texts.length-1];
          } else { ColorKey.text=null;}
          ColorKey.color=this._Colorbar[j];
          this._CatNumtexts.push(ColorKey);
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
    if(this.data!==undefined) {
      if(this.selectEntity!==undefined&&this.selectEntity!==null) {this.ColorSelect(this.selectEntity);}
      if(viewer.selectedEntity!==undefined&&viewer.selectedEntity.polygon!==null) {
        this.dataService._SelectedEntity=viewer.selectedEntity;
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
        this.dataService._SelectedEntity=undefined;
        this.selectEntity=undefined;
        this.material=undefined;
      }
    }
  }

  public ColorSelect(entity) {
    this._ColorValue=this.dataService._ColorValue;
    const _ColorKey=this.dataService._Colortexts;
    this.propertyNames=this.dataService.propertyNames;
    const range=_ColorKey.length;
    for(const propertyName of this.propertyNames) {
      if(this._ColorValue===propertyName) {
        if(typeof(entity.properties[this._ColorValue]._value)==="number") {
          const max=this.dataService._MaxColor;
          const min=this.dataService._MinColor;
          const _ChromaScale=this._ChromaScale;
          const _texts=entity.properties[this._ColorValue]._value;
          const rgbAr=this._ChromaScale(Number(((max-_texts)/(max-min)).toFixed(2)))._rgb;
          if(entity.polygon!==undefined) {entity.polygon.material=Cesium.Color.fromBytes(rgbAr[0],rgbAr[1],rgbAr[2]);}
          if(entity.polyline!==undefined) {entity.polyline.material=Cesium.Color.fromBytes(rgbAr[0],rgbAr[1],rgbAr[2]);}
        } else {
          let _ChromaScale;
          const _Colortexts=this.dataService._Colortexts;
          if(_Colortexts.length>12) { _ChromaScale=this._ChromaScale.domain([1,0]);
          } else {_ChromaScale=this._ChromaScale;}
          let initial: boolean=false;
          for(let j=0;j<_Colortexts.length;j++) {
            if(entity.properties[this._ColorValue]._value===_Colortexts[j].text) {
              const rgbAr=_ChromaScale((j/_Colortexts.length).toFixed(2));
              if(entity.polygon!==undefined)  {entity.polygon.material=Cesium.Color.fromBytes(
                                                      rgbAr._rgb[0],rgbAr._rgb[1],rgbAr._rgb[2]);}
              if(entity.polyline!==undefined) {entity.polyline.material=Cesium.Color.fromBytes(
                                                    rgbAr._rgb[0],rgbAr._rgb[1],rgbAr._rgb[2]);}
              initial=true;
            }
          }
          if(initial===false) {
            if(entity.polygon!==undefined)  {entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
            if(entity.polyline!==undefined) {entity.polyline.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
          }
        }
      }
    }
    if(this.dataService.hideElementArr!==undefined&&this.dataService.hideElementArr.length!==0) {
      const propertyname: any[]=[];
      const relation: any[]=[];
      const text: any[]=[];
      for(const filter of this.dataService.hideElementArr) {
        if(filter!==undefined) {
          propertyname.push(filter.HeightHide);
          relation.push(Number(filter.RelaHide));
          if(filter.type==="number") {
            text.push(Number(filter.textHide));
          } else if(filter.type==="category") {
            text.push(String(filter.CategaryHide));
          }
        }
      }
      for (let j = 0; j < propertyname.length; j++) {
        const value = entity.properties[propertyname[j]]._value;
        if(value !== undefined) {
          if(typeof(value)==="number") {
            if (this._compare(value, text[j], relation[j])) {
              if(entity.polygon!==undefined)  {entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
              if(entity.polyline!==undefined) {entity.polyline.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
            }
          } else if(typeof(value)==="string") {
            if(text[j]!=="None") {
              if (this._compareCat(value, text[j], relation[j])) {
                if(entity.polygon!==undefined)  {entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
                if(entity.polyline!==undefined) {entity.polyline.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
              }
            }
          }
        }
      }
    }
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

  public showAttribs(event) {
    if(this.data!==undefined) {
      // if(this.data["cesium"]!==undefined){
        if(this.data["cesium"]!==undefined) {
        if(this.data["cesium"].select!==undefined) {
          if(this.viewer.selectedEntity!==undefined) {
            const pickup=this.viewer.scene.pick(new Cesium.Cartesian2(event.clientX,event.clientY));
            this.pickupArrs=[];
            this.pickupArrs.push({name:"ID",data:pickup.id.id});
            for(let i=0;i<this.data["cesium"].select.length;i++){
              const propertyName: string=this.data["cesium"].select[i];
              this.pickupArrs.push({name:propertyName,data:
                                    this.dataService._SelectedEntity.properties[propertyName]._value});
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
