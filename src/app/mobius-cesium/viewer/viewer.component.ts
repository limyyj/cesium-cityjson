import { Component, OnInit, Injector, ElementRef } from '@angular/core';
import {DataSubscriber} from "../data/DataSubscriber";


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


  constructor(injector: Injector, myElement: ElementRef) { 
    super(injector);
    this.myElement = myElement;
  }

  ngOnInit() {
  }

  notify(message: string): void{
    if(message == "model_update" ){
      this.data = this.dataService.getGsModel(); 
      try{
        this.LoadData(this.data);
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
    var viewer = new Cesium.Viewer('cesiumContainer' , {
      infoBox:false,
      imageryProvider : Cesium.createOpenStreetMapImageryProvider({ 
       url : 'https://stamen-tiles.a.ssl.fastly.net/toner/'
      }), 
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
        var poly_center:any=[];
        var entity = entities[i];                               
        entity.polygon.outline = false;
        var center =  Cesium.BoundingSphere.fromPoints(entity.polygon.hierarchy.getValue().positions).center;
        var radius=Math.round(Cesium.BoundingSphere.fromPoints(entity.polygon.hierarchy.getValue().positions).radius/100);
        var longitudeString = Cesium.Math.toDegrees(Cesium.Ellipsoid.WGS84.cartesianToCartographic(center).longitude).toFixed(10); 
        var latitudeString = Cesium.Math.toDegrees(Cesium.Ellipsoid.WGS84.cartesianToCartographic(center).latitude).toFixed(10); 
        poly_center=[longitudeString,latitudeString,radius];
        self.poly_center.push(poly_center);
      }
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
      this.HeightValue=HeightKey.sort()[0];;
      this.dataService.HeightValue=this.HeightValue;
    }else if(HeightKey.indexOf(this.dataService.HeightValue)===-1){
      this.HeightValue=HeightKey.sort()[0];;
      this.dataService.HeightValue=this.HeightValue;
    }else{
      this.HeightValue=this.dataService.HeightValue;
    }

    /*if(this.dataService.ColorValue!==undefined){
      this.ColorValue=this.dataService.ColorValue;
    }else{
      this.ColorValue=this.propertyNames.sort()[0];
      this.dataService.ColorValue=this.ColorValue;
    }
    if(this.dataService.HeightValue!==undefined){
      this.HeightValue=this.dataService.HeightValue;
    }else{
      this.HeightValue=HeightKey.sort()[0];
      this.dataService.HeightValue=this.HeightValue;
    }*/
    // this.ColorValue=this.propertyNames.sort()[0];
    // this.HeightValue=HeightKey.sort()[0]
    // this.dataService.ColorValue=this.ColorValue;
    // this.dataService.HeightValue=this.HeightValue;
    viewer.zoomTo(promise);
  }

  select(){
    var viewer=this.viewer;
    if(this.selectEntity!==undefined&&this.selectEntity!==null) {this.ColorSelect(this.selectEntity);}
    if(viewer.selectedEntity!==undefined&&viewer.selectedEntity.polygon!==null) {
      this.dataService.SelectedEntity=viewer.selectedEntity;
      const material=viewer.selectedEntity.polygon.material;
      viewer.selectedEntity.polygon.material=Cesium.Color.WHITE;
      this.selectEntity=viewer.selectedEntity;
      this.material=material;
    }else{
      this.dataService.SelectedEntity=undefined;
      this.selectEntity=undefined;
      this.material=undefined;
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
          for(var j=1;j<range;j++){
            if(entity.properties[this.ColorValue]._value>=(min+(j/range)*(max-min)).toFixed(2)){
            var rgb=ColorKey[range-j].color._rgb;
            entity.polygon.material=Cesium.Color.fromBytes(rgb[0],rgb[1],rgb[2]);
            }else if(entity.properties[this.ColorValue]._value<(min+(1/range)*(max-min)).toFixed(2)){
              var rgb=ColorKey[range-1].color._rgb;
              entity.polygon.material=Cesium.Color.fromBytes(rgb[0],rgb[1],rgb[2]);
            }
          }
        }else{
          var ChromaScale=this.ChromaScale;
          var Colortexts=this.dataService.Colortexts;
          var initial:boolean=false;
          for(var j=0;j<Colortexts.length;j++){
            if(entity.properties[this.ColorValue]._value===Colortexts[j].text) {
              var rgb=ChromaScale((j/Colortexts.length).toFixed(2));
              entity.polygon.material=entity.polygon.material=Cesium.Color.fromBytes(rgb._rgb[0],rgb._rgb[1],rgb._rgb[2]);
              initial=true;
            }
          }
          if(initial===false){
            entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
          }
        }
      }
    }
  }
}
