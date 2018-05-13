import { Component, OnInit, Injector, ElementRef } from '@angular/core';
import {DataSubscriber} from "../data/DataSubscriber";
import * as chroma from "chroma-js";
/*import * as  L from 'leaflet';
import * as  esri from 'esri-leaflet';*/
//import {CoordinateConvert} from 'coordinate-convert';


@Component({
  selector: 'cesium-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent extends DataSubscriber {
  data:JSON;
  myElement;
  ColorValue:string;
  HeightValue:string;
  ChromaScale:any;
  propertyNames:Array<any>;
  viewer:any;
  selectEntity:any=null;
  material:object;
  poly_center:Array<any>;
  Colorbar:Array<any>;
  Max:number;
  Min:number;
  texts:Array<any>;
  Cattexts:Array<any>;
  CatNumtexts:Array<any>;
  pickupArrs:Array<any>;
  ShowColorBar:boolean=false;
  darkStyleEsri:any;
  CheckInvert:boolean;


  constructor(injector: Injector, myElement: ElementRef) { 
    super(injector);
    this.myElement = myElement;
    this.Colorbar=[];
    this.CheckInvert=this.dataService.CheckInvert;
    /*if(this.dataService.CheckInvert!==true) {this.ChromaScale=chroma.scale("SPECTRAL");}
    else{this.ChromaScale=chroma.scale("SPECTRAL").domain([1,0]);}*/
    this.ChromaScale=chroma.scale("SPECTRAL");
    for(var i=79;i>-1;i--){
        this.Colorbar.push(this.ChromaScale(i/80));
    }
  }
  ngDoCheck(){
    if(this.ColorValue!==this.dataService.ColorValue){
      this.ColorValue=this.dataService.ColorValue;
      this.ChromaScale=this.dataService.ChromaScale;
      this.Colorbar=[];
      for(var i=79;i>-1;i--){
        this.Colorbar.push(this.ChromaScale(i/80));
      }

      this.Colortext();
    }
    if(this.Max!==this.dataService.MaxColor){
      this.Max=this.dataService.MaxColor;
      this.Colortext();

    }
    if(this.Min!==this.dataService.MinColor){
      this.Min=this.dataService.MinColor;
      this.Colortext();
    }
    /*if(this.CheckInvert!==this.dataService.CheckInvert){
      this.CheckInvert=this.dataService.CheckInvert;
      if(this.dataService.CheckInvert!==true) {this.ChromaScale=chroma.scale("SPECTRAL");}
      else{this.ChromaScale=chroma.scale("SPECTRAL").domain([1,0]);}
      this.Colortext();
    }*/
  }

  ngOnInit() {
  }

  notify(message: string): void{
    if(message == "model_update" ){
      this.data = this.dataService.getGsModel(); 
      /*if(this.data!==undefined){
        for(var i=0;i<this.data["features"].length;i++){
          for(var j=0;j<this.data["features"][i]["geometry"].coordinates[0].length;j++){
            console.log(this.data["features"][i]["geometry"].coordinates[0][j])
          }
        }
      }*/
      try{
        //if(this.data!==undefined){
          this.LoadData(this.data);
        //}
      }
      catch(ex){
        console.log(ex);
      }
    }
  }

  LoadData(data:JSON){
    if(document.getElementsByClassName('cesium-viewer').length!==0){
      document.getElementsByClassName('cesium-viewer')[0].remove();
    }
    var imageryViewModels = [];
    imageryViewModels.push(new Cesium.ProviderViewModel({
     name : 'Stamen Toner',
     iconUrl : Cesium.buildModuleUrl('Widgets/Images/ImageryProviders/stamenToner.png'),
     tooltip : 'A high contrast black and white map.\nhttp://www.maps.stamen.com/',
     creationFunction : function() {
         return Cesium.createOpenStreetMapImageryProvider({
             url : 'https://stamen-tiles.a.ssl.fastly.net/toner/'
         });
     }
    }));
    imageryViewModels.push(new Cesium.ProviderViewModel({
     name : 'Stamen Toner(Lite)',
     iconUrl : Cesium.buildModuleUrl('Widgets/Images/ImageryProviders/stamenToner.png'),
     tooltip : 'A high contrast black and white map(Lite).\nhttp://www.maps.stamen.com/',
     creationFunction : function() {
         return Cesium.createOpenStreetMapImageryProvider({
             url : 'https://stamen-tiles.a.ssl.fastly.net/toner-lite/'
         });
     }
    }));
    imageryViewModels.push(new Cesium.ProviderViewModel({
     name : 'Terrain(Standard)',
     iconUrl : Cesium.buildModuleUrl('Widgets/Images/TerrainProviders/CesiumWorldTerrain.png'),
     tooltip : 'A high contrast black and white map(Standard).\nhttp://www.maps.stamen.com/',
     creationFunction : function() {
         return Cesium.createOpenStreetMapImageryProvider({
             url : 'https://stamen-tiles.a.ssl.fastly.net/terrain/'
         });
     }
    }));
    imageryViewModels.push(new Cesium.ProviderViewModel({
     name : 'Terrain(Background)',
     iconUrl : Cesium.buildModuleUrl('Widgets/Images/TerrainProviders/CesiumWorldTerrain.png'),
     tooltip : 'A high contrast black and white map(Background).\nhttp://www.maps.stamen.com/',
     creationFunction : function() {
         return Cesium.createOpenStreetMapImageryProvider({
             url : 'https://stamen-tiles.a.ssl.fastly.net/terrain-background/'
         });
     }
    })); 
    imageryViewModels.push(new Cesium.ProviderViewModel({
     name : 'Open\u00adStreet\u00adMap',
     iconUrl : Cesium.buildModuleUrl('Widgets/Images/ImageryProviders/openStreetMap.png'),
     tooltip : 'OpenStreetMap (OSM) is a collaborative project to create a free editable \
        map of the world.\nhttp://www.openstreetmap.org',
     creationFunction : function() {
         return Cesium.createOpenStreetMapImageryProvider({
             url : 'https://a.tile.openstreetmap.org/'
         });
     }
    }));

    imageryViewModels.push(new Cesium.ProviderViewModel({
     name : 'Earth at Night',
     iconUrl : Cesium.buildModuleUrl('Widgets/Images/ImageryProviders/earthAtNight.png'),
     tooltip : 'The lights of cities and villages trace the outlines of civilization \
            in this global view of the Earth at night as seen by NASA/NOAA\'s Suomi NPP satellite.',
     creationFunction : function() {
         return new Cesium.IonImageryProvider({ assetId: 3812 });
     }
    }));

    imageryViewModels.push(new Cesium.ProviderViewModel({
     name : 'Natural Earth\u00a0II',
     iconUrl : Cesium.buildModuleUrl('Widgets/Images/ImageryProviders/naturalEarthII.png'),
     tooltip : 'Natural Earth II, darkened for contrast.\nhttp://www.naturalearthdata.com/',
     creationFunction : function() {
         return Cesium.createTileMapServiceImageryProvider({
             url : Cesium.buildModuleUrl('Assets/Textures/NaturalEarthII')
         });
     }
    }));

    imageryViewModels.push(new Cesium.ProviderViewModel({
     name : 'Blue Marble',
     iconUrl : Cesium.buildModuleUrl('Widgets/Images/ImageryProviders/blueMarble.png'),
     tooltip : 'Blue Marble Next Generation July, 2004 imagery from NASA.',
     creationFunction : function() {
         return new Cesium.IonImageryProvider({ assetId: 3845 });
     }
    }));

    var viewer = new Cesium.Viewer('cesiumContainer' , {
      infoBox:false,
      /*imageryProvider : Cesium.createOpenStreetMapImageryProvider({ 
       url : 'https://stamen-tiles.a.ssl.fastly.net/toner/'
      }), */
      imageryProviderViewModels : imageryViewModels,
      selectedImageryProviderViewModel : imageryViewModels[0],
      timeline: false,
      fullscreenButton:false,
      automaticallyTrackDataSourceClocks:false,
      animation:false
    });
    viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function (e) {
      e.cancel = true;
      viewer.zoomTo(promise);
    });
    document.getElementsByClassName('cesium-viewer-bottom')[0].remove();
    if(this.data!==undefined){
      this.viewer=viewer;
      this.dataService.viewer=this.viewer;
      this.data=data;
      this.poly_center=[];
      var promise = Cesium.GeoJsonDataSource.load(this.data);
      var self= this;
      var HeightKey:any=[];
      promise.then(function(dataSource) {
        viewer.dataSources.add(dataSource);
        var entities = dataSource.entities.values;
        for (var i = 0; i < entities.length; i++) {
          var texts=[];
          var poly_center:any=[];
          var entity = entities[i];
          if(entity.polygon!==undefined) {
            entity.polygon.outlineColor = Cesium.Color.Black;                            
            var center =  Cesium.BoundingSphere.fromPoints(entity.polygon.hierarchy.getValue().positions).center;
            var radius=Math.min(Math.round(Cesium.BoundingSphere.fromPoints(entity.polygon.hierarchy.getValue().positions).radius/100),10);
            var longitudeString = Cesium.Math.toDegrees(Cesium.Ellipsoid.WGS84.cartesianToCartographic(center).longitude).toFixed(10); 
            var latitudeString = Cesium.Math.toDegrees(Cesium.Ellipsoid.WGS84.cartesianToCartographic(center).latitude).toFixed(10); 
            poly_center=[longitudeString,latitudeString,radius];
            self.poly_center.push(poly_center);
            
          }
          if(entity.billboard!==undefined){
            entity.billboard = undefined;
            entity.point = new Cesium.PointGraphics({
              color: Cesium.Color.BLUE,
              pixelSize: 10
            });
          }
        }
        if(entities[0].polygon!==undefined) {self.ShowColorBar=true;}else{self.ShowColorBar=false;}
        self.dataService.poly_center=self.poly_center;
        self.propertyNames=entities[0].properties.propertyNames;
        for(var i=0;i<self.propertyNames.length;i++){
          if(self.propertyNames[i].indexOf("ID")!==-1||self.propertyNames[i].indexOf("id")!==-1){
            self.propertyNames.splice(i,1);
            i=i-1;
          }else{
            if(typeof(entity.properties[self.propertyNames[i]]._value)==="number"){
              HeightKey.push(self.propertyNames[i]);
            }
          }
        }
      });
      
      this.dataService.cesiumpromise=promise;
      this.dataService.propertyNames=this.propertyNames;
      this.dataService.HeightKey=HeightKey;
      if(this.dataService.ColorValue===undefined){
        this.ColorValue=this.propertyNames.sort()[0];
        this.dataService.ColorValue=this.ColorValue;
        
      }else if(this.propertyNames.indexOf(this.dataService.ColorValue)===-1){
        this.ColorValue=this.propertyNames.sort()[0];
        this.dataService.ColorValue=this.ColorValue;
      }else{
        this.ColorValue=this.dataService.ColorValue;
      }

      if(this.dataService.HeightValue===undefined){
        this.HeightValue=HeightKey.sort()[0];
        this.dataService.HeightValue=this.HeightValue;
      }else if(HeightKey.indexOf(this.dataService.HeightValue)===-1){
        this.HeightValue=HeightKey.sort()[0];
        this.dataService.HeightValue=this.HeightValue;
      }else{
        this.HeightValue=this.dataService.HeightValue;
      }
      viewer.zoomTo(promise);
      this.Colortext();
    }
    
  }

  Colortext(){
    this.texts=undefined;
    //this.Cattexts=undefined;
    this.Cattexts=[];
    this.CatNumtexts=[];
    var propertyname=this.ColorValue;
    var texts=[];
    var promise=this.dataService.cesiumpromise;
    var self= this;
      promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties[propertyname]!==undefined){
        if(entity.properties[propertyname]._value!==" "&&typeof(entity.properties[propertyname]._value)==="number"){
          if(texts.length===0) {texts[0]=entity.properties[propertyname]._value;}
          else{if(texts.indexOf(entity.properties[propertyname]._value)===-1) texts.push(entity.properties[propertyname]._value);}
          }else if(entity.properties[propertyname]._value!==" "&&typeof(entity.properties[propertyname]._value)==="string"){
          if(texts.length===0) {texts[0]=entity.properties[propertyname]._value;}
          else{if(texts.indexOf(entity.properties[propertyname]._value)===-1) texts.push(entity.properties[propertyname]._value);}
          }
        }
      }
    });
    if(typeof(texts[0])==="number"){
      this.ChromaScale=chroma.scale("SPECTRAL");
      if(this.dataService.MaxColor===undefined){
        this.Max=Math.max.apply(Math, texts);
        this.Min=Math.min.apply(Math, texts);
        var Max=this.Max;
        var Min=this.Min;
      }else{
        var Max=this.dataService.MaxColor;//this.Max;
        var Min=this.dataService.MinColor;//this.Min;
      }
      Min=Number(Min);
      Max=Number(Max);
      if(Max<=1){
        this.texts=[Min];
        for(var i=1;i<10;i++){
          this.texts.push((Min+(Max-Min)*(i/10)).toFixed(3));
        }
        this.texts.push(Max);
      }else if(Max>1000){
        var number=String((Min/1000).toFixed(2)).concat("K");
        this.texts=[number];
        for(var i=1;i<10;i++){
          var number=String(((Min+(Max-Min)*(i/10))/1000).toFixed(2)).concat("K");
          this.texts.push(number);
        }
        var number=String((Max/1000).toFixed(2)).concat("K");
        this.texts.push(number);
      }else if(Max>1000000){
        var number=String((Min/1000000).toFixed(2)).concat("M");
        this.texts=[number];
        for(var i=1;i<10;i++){
          var number=String(((Min+(Max-Min)*(i/10))/1000000).toFixed(2)).concat("M");
          this.texts.push(number);
        }
        var number=String((Max/1000000).toFixed(2)).concat("M");
        this.texts.push(number);
      }else if(Max>1000000000){
        var number=String((Min/1000000000).toFixed(2)).concat("B");
        this.texts=[number];
        for(var i=1;i<10;i++){
          var number=String(((Min+(Max-Min)*(i/10))/1000000000).toFixed(2)).concat("B");
          this.texts.push(number);
        }
        var number=String((Max/1000000000).toFixed(2)).concat("B");
        this.texts.push(number);
      }else if(Max>=1&&Max<=1000){
        this.texts=[Number(Min).toFixed(3)];
        for(var i=1;i<10;i++){
          this.texts.push(Number(Min+(Max-Min)*(i/10)).toFixed(3));
        }
        this.texts.push(Number(Max).toFixed(3));
      }
    }
    if(typeof(texts[0])==="string"){
      if(texts.length<=12){
        for(var j=0;j<texts.length;j++){
          var ColorKey:any=[];
          ColorKey.text=texts[j];
          this.ChromaScale=chroma.scale("SPECTRAL");
          ColorKey.color=this.ChromaScale((j/texts.length).toFixed(2));
          this.Cattexts.push(ColorKey);
        }
      }else{
        texts=texts.sort();
        for(var j=0;j<this.Colorbar.length;j++){
          var ColorKey:any=[];
          if(j===0){ColorKey.text=texts[j];}else if(j===this.Colorbar.length-1) {ColorKey.text=texts[texts.length-1];}
          else{ColorKey.text=null;}
          //ColorKey.text=texts[j];
          //this.ChromaScale=chroma.scale("SPECTRAL");
          ColorKey.color=this.Colorbar[j]//this.ChromaScale((j/texts.length).toFixed(2));
          this.CatNumtexts.push(ColorKey);
        }
      }
    }
    if(this.ShowColorBar===false){
      this.Cattexts=undefined;
      this.Colorbar=undefined;
    }
  }

  select(){
    event.stopPropagation();
    var viewer=this.viewer;
    if(this.data!==undefined){
      if(this.selectEntity!==undefined&&this.selectEntity!==null) {this.ColorSelect(this.selectEntity);}
      if(viewer.selectedEntity!==undefined&&viewer.selectedEntity.polygon!==null) {
        this.dataService.SelectedEntity=viewer.selectedEntity;
        var material;
        if(viewer.selectedEntity.polygon!==undefined){
          material=viewer.selectedEntity.polygon.material;
          viewer.selectedEntity.polygon.material=Cesium.Color.WHITE;
        }
        if(viewer.selectedEntity.polyline!==undefined){
          material=viewer.selectedEntity.polyline.material;
          viewer.selectedEntity.polyline.material=Cesium.Color.WHITE;
        }
        this.selectEntity=viewer.selectedEntity;
        this.material=material;
      }else{
        this.dataService.SelectedEntity=undefined;
        this.selectEntity=undefined;
        this.material=undefined;
      }
    }
  }

  ColorSelect(entity){
    this.ColorValue=this.dataService.ColorValue;
    var ColorKey=this.dataService.Colortexts;
    var range=ColorKey.length;
    for(var i=0;i<this.propertyNames.length;i++){
      if(this.ColorValue===this.propertyNames[i]){
        if(typeof(entity.properties[this.ColorValue]._value)==="number"){
          var max=this.dataService.MaxColor;
          var min=this.dataService.MinColor;

          var ChromaScale=this.ChromaScale;
          var texts=entity.properties[this.ColorValue]._value;
          var rgb=this.ChromaScale(Number(((max-texts)/(max-min)).toFixed(2)))._rgb;
          if(entity.polygon!==undefined) entity.polygon.material=Cesium.Color.fromBytes(rgb[0],rgb[1],rgb[2]);
          if(entity.polyline!==undefined) entity.polyline.material=Cesium.Color.fromBytes(rgb[0],rgb[1],rgb[2]);
          /*for(var j=1;j<range;j++){
            if(entity.properties[this.ColorValue]._value>=(min+(j/range)*(max-min)).toFixed(2)){
            var rgb=ColorKey[range-j].color._rgb;
            if(entity.polygon!==undefined) entity.polygon.material=Cesium.Color.fromBytes(rgb[0],rgb[1],rgb[2]);
            if(entity.polyline!==undefined) entity.polyline.material=Cesium.Color.fromBytes(rgb[0],rgb[1],rgb[2]);
            }else if(entity.properties[this.ColorValue]._value<(min+(1/range)*(max-min)).toFixed(2)){
              var rgb=ColorKey[range-1].color._rgb;
              if(entity.polygon!==undefined)  entity.polygon.material=Cesium.Color.fromBytes(rgb[0],rgb[1],rgb[2]);
              if(entity.polyline!==undefined) entity.polyline.material=Cesium.Color.fromBytes(rgb[0],rgb[1],rgb[2]);
            }
          }*/
        }else{
          var ChromaScale;
          var Colortexts=this.dataService.Colortexts;
          if(Colortexts.length>12){ChromaScale=this.ChromaScale.domain([1,0]);}else{ChromaScale=this.ChromaScale;}
          var initial:boolean=false;
          for(var j=0;j<Colortexts.length;j++){
            if(entity.properties[this.ColorValue]._value===Colortexts[j].text) {
              var rgb=ChromaScale((j/Colortexts.length).toFixed(2));
              if(entity.polygon!==undefined)  entity.polygon.material=Cesium.Color.fromBytes(rgb._rgb[0],rgb._rgb[1],rgb._rgb[2]);
              if(entity.polyline!==undefined) entity.polyline.material=Cesium.Color.fromBytes(rgb._rgb[0],rgb._rgb[1],rgb._rgb[2]);
              initial=true;
            }
          }
          if(initial===false){
            if(entity.polygon!==undefined)  entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
            if(entity.polyline!==undefined) entity.polyline.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
          }
        }
      }
    }
    if(this.dataService.hideElementArr!==undefined&&this.dataService.hideElementArr.length!==0){
      var propertyname:any=[];
      var relation:any=[];
      var text:any=[];
      for(var j=0;j<this.dataService.hideElementArr.length;j++){
        if(this.dataService.hideElementArr[j]!==undefined){
          propertyname.push(this.dataService.hideElementArr[j].HeightHide);
          relation.push(Number(this.dataService.hideElementArr[j].RelaHide));
          if(this.dataService.hideElementArr[j].type==="number"){
            text.push(Number(this.dataService.hideElementArr[j].textHide));
          }else if(this.dataService.hideElementArr[j].type==="category"){
            text.push(String(this.dataService.hideElementArr[j].CategaryHide));
          }
        }
      }
      for (let j = 0; j < propertyname.length; j++) {
        const value = entity.properties[propertyname[j]]._value;
        if(value !== undefined){
          if(typeof(value)==="number"){
            if (this._compare(value, text[j], relation[j])) {
              if(entity.polygon!==undefined)  entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
              if(entity.polyline!==undefined) entity.polyline.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
            }
          }else if(typeof(value)==="string"){
            if(text[j]!=="None"){
              if (this._compareCat(value, text[j], relation[j])) {
                if(entity.polygon!==undefined)  entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                if(entity.polyline!==undefined) entity.polyline.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
              }
            }
          }
        }
      }
    }
  }

   _compare(value: number, slider: number, relation: number): boolean {
    switch (relation) {
      case 0:
        return value < slider;
      case 1:
        return value > slider;
      case 2:
        return value === slider;
    }
  }
  _compareCat(value: string, Categary:string,relation: number): boolean {
      switch (relation) {
      case 0:
        return value ===  undefined;
      case 1:
        return value !== Categary;
      case 2:
        return value === Categary;
    }
  }

  showAttribs(event){
    if(this.data!==undefined){
      //if(this.data["cesium"]!==undefined){
        if(this.data["cesium"]!==undefined){
        if(this.data["cesium"].select!==undefined){
          if(this.viewer.selectedEntity!==undefined){
            var pickup=this.viewer.scene.pick(new Cesium.Cartesian2(event.clientX,event.clientY));
            this.pickupArrs=[];
            this.pickupArrs.push({name:"ID",data:pickup.id.id});
            for(var i=0;i<this.data["cesium"].select.length;i++){
              var propertyName:string=this.data["cesium"].select[i];
              this.pickupArrs.push({name:propertyName,data:this.dataService.SelectedEntity.properties[propertyName]._value})
            }
            var nameOverlay = document.getElementById("cesium-infoBox-defaultTable");
            this.viewer.container.appendChild(nameOverlay);
            nameOverlay.style.bottom = this.viewer.canvas.clientHeight - event.clientY + 'px';
            nameOverlay.style.left = event.clientX + 'px';
            nameOverlay.style.display= 'block';
          }else{
            document.getElementById("cesium-infoBox-defaultTable").style.display= 'none';
          }
        }
      }
    }
  }
}
