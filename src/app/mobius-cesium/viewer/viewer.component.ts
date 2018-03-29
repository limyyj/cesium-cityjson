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
  fullscreenContainer: HTMLCollectionOf<Element>;
  tileset= new Cesium.Cesium3DTileset({});
  cesiumviewer:any;
  cesiumpromise:any;

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
    var viewer = new Cesium.Viewer('cesiumContainer');
    document.getElementsByClassName('cesium-viewer-bottom')[0].remove();
    document.getElementsByClassName('cesium-viewer-animationContainer')[0].remove();
    document.getElementsByClassName('cesium-viewer-timelineContainer')[0].remove();
    this.data=data;
    var promise = Cesium.GeoJsonDataSource.load(this.data);
    promise.then(function(dataSource) {
      viewer.dataSources.add(dataSource);
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];                               
		entity.polygon.outline = false;
      }
    });
    viewer.zoomTo(promise);
	this.colorByStatus_Cat(promise,viewer);
	this.HeightByHB_LIMIT(promise,viewer);
	this.cesiumviewer=viewer;
	this.cesiumpromise=promise;
  }

  onChangeColor(ColorValue){
  	if(ColorValue==="Status_Cat"){
  	  this.colorByStatus_Cat(this.cesiumpromise,this.cesiumviewer);
  	}else if(ColorValue==="DIST_EWL"){
	  this.colorByDIST_EWL(this.cesiumpromise,this.cesiumviewer);
  	}else if(ColorValue==="DIST_FEED"){
	  this.colorByDIST_FEED(this.cesiumpromise,this.cesiumviewer);
  	}else if(ColorValue==="DIST_TRUNK"){
	  this.colorByDIST_TRUNK(this.cesiumpromise,this.cesiumviewer);
  	}else if(ColorValue==="AVAILABLE"){
	  this.colorByAVAILABLE(this.cesiumpromise,this.cesiumviewer);
  	}else if(ColorValue==="AGG_POT"){
	  this.colorByAGG_POT(this.cesiumpromise,this.cesiumviewer);
  	}else if(ColorValue==="GPR"){
	  this.colorByGPR(this.cesiumpromise,this.cesiumviewer);
  	}else if(ColorValue==="HB_LIMIT"){
  	  this.colorByHB_LIMIT(this.cesiumpromise,this.cesiumviewer);
  	}

  }

  colorByStatus_Cat(promise,viewer) {
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties.Status_Cat!==undefined){
		  if(entity.properties.Status_Cat._value==="Available") entity.polygon.material=Cesium.Color.LIGHTCORAL.withAlpha(1);
		  else if(entity.properties.Status_Cat._value==="Prime") entity.polygon.material=Cesium.Color.RED.withAlpha(1);
		  else if(entity.properties.Status_Cat._value==="Remnant") entity.polygon.material=Cesium.Color.CORAL.withAlpha(1);
          else if(entity.properties.Status_Cat._value==="Estate under active master / infra planning") entity.polygon.material=Cesium.Color.CRIMSON.withAlpha(1);
		  else entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
		}else{entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
      }
    });
  }

  colorByDIST_FEED(promise,viewer) {
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties.DIST_FEED!==undefined){
	      if(entity.properties.DIST_FEED>=239) entity.polygon.material=Cesium.Color.DARKCYAN .withAlpha(1);
	      else if(entity.properties.DIST_FEED>=151) entity.polygon.material=Cesium.Color.MEDIUMTURQUOISE.withAlpha(1);
	      else if(entity.properties.DIST_FEED>=96) entity.polygon.material=Cesium.Color.KHAKI.withAlpha(1);
	      else if(entity.properties.DIST_FEED>=61) entity.polygon.material=Cesium.Color.GOLD.withAlpha(1);
	      else entity.polygon.material=Cesium.Color.CORAL.withAlpha(1);
	  	}else{entity.polygon.material=Cesium.Color.CORAL.withAlpha(1);}
      }
    });
  }

  colorByDIST_TRUNK(promise,viewer) {
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties.DIST_FEED!==undefined){
	      if(entity.properties.DIST_TRUNK>=239) entity.polygon.material=Cesium.Color.DARKCYAN .withAlpha(1);
	      else if(entity.properties.DIST_TRUNK>=151) entity.polygon.material=Cesium.Color.MEDIUMTURQUOISE.withAlpha(1);
	      else if(entity.properties.DIST_TRUNK>=96) entity.polygon.material=Cesium.Color.KHAKI.withAlpha(1);
	      else if(entity.properties.DIST_TRUNK>=61) entity.polygon.material=Cesium.Color.GOLD.withAlpha(1);
	      else entity.polygon.material=Cesium.Color.CORAL.withAlpha(1);
	  	}else{entity.polygon.material=Cesium.Color.CORAL.withAlpha(1);}
      }
    });
  }

  colorByDIST_EWL(promise,viewer) {
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties.DIST_FEED!==undefined){
	      if(entity.properties.DIST_EWL>=715) entity.polygon.material=Cesium.Color.DARKCYAN .withAlpha(1);
	      else if(entity.properties.DIST_EWL>=451) entity.polygon.material=Cesium.Color.MEDIUMTURQUOISE.withAlpha(1);
	      else if(entity.properties.DIST_EWL>=286) entity.polygon.material=Cesium.Color.KHAKI.withAlpha(1);
	      else if(entity.properties.DIST_EWL>=181) entity.polygon.material=Cesium.Color.GOLD.withAlpha(1);
	      else entity.polygon.material=Cesium.Color.CORAL.withAlpha(1);
	  	}else{entity.polygon.material=Cesium.Color.CORAL.withAlpha(1);}
      }
    });
  }

  colorByAVAILABLE(promise,viewer) {
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties.AVAILABLE!==undefined){
	      if(entity.properties.AVAILABLE._value==="AVAILABLE") entity.polygon.material=Cesium.Color.LIGHTCORAL.withAlpha(1);
		  else if(entity.properties.AVAILABLE._value==="COMMITTED") entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
		}else{entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
      }
    });
  }

  colorByAGG_POT(promise,viewer) {
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties.AGG_POT!==undefined){
	      if(entity.properties.AGG_POT>=0.79) entity.polygon.material=Cesium.Color.CORAL .withAlpha(1);
	      else if(entity.properties.AGG_POT>=0.67) entity.polygon.material=Cesium.Color.GOLD.withAlpha(1);
	      else if(entity.properties.AGG_POT>=0.56) entity.polygon.material=Cesium.Color.KHAKI.withAlpha(1);
	      else if(entity.properties.AGG_POT>=0.38) entity.polygon.material=Cesium.Color.MEDIUMTURQUOISE.withAlpha(1);
	      else entity.polygon.material=Cesium.Color.DARKCYAN.withAlpha(1);
	  	}else{entity.polygon.material=Cesium.Color.DARKCYAN.withAlpha(1);}
      }
    });
  }

  colorByGPR(promise,viewer) {
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties.GPR!==undefined){
		  if(entity.properties.GPR._value==="1.0"||entity.properties.GPR._value===1.0) entity.polygon.material=Cesium.Color.ORANGERED.withAlpha(1);
		  else if(entity.properties.GPR._value==="1.4"||entity.properties.GPR._value===1.4) entity.polygon.material=Cesium.Color.DARKORANGE.withAlpha(1);
		  else if(entity.properties.GPR._value==="2.0"||entity.properties.GPR._value===2.0) entity.polygon.material=Cesium.Color.YELLOW.withAlpha(1);
		  else if(entity.properties.GPR._value==="2.5"||entity.properties.GPR._value===2.5) entity.polygon.material=Cesium.Color.LIGHTYELLOW.withAlpha(1);
		  else {entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
		}else{entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
      }
    });
  }

  colorByHB_LIMIT(promise,viewer) {
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties.HB_LIMIT!==undefined){
	      if(entity.properties.HB_LIMIT>=93) entity.polygon.material=Cesium.Color.ORANGERED.withAlpha(1);
	      else if(entity.properties.HB_LIMIT>=86) entity.polygon.material=Cesium.Color.DARKORANGE.withAlpha(1);
	      else if(entity.properties.HB_LIMIT>=77) entity.polygon.material=Cesium.Color.YELLOW.withAlpha(1);
	      else if(entity.properties.HB_LIMIT>=63) entity.polygon.material=Cesium.Color.LIGHTYELLOW.withAlpha(1);
	      else entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
	  	}else{entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
      }
    });
  }

  onChangeHeight(HeightValue){
  	if(HeightValue==="HB_LIMIT"){
  	  this.HeightByHB_LIMIT(this.cesiumpromise,this.cesiumviewer);
  	}else if(HeightValue==="GPR"){
	  this.HeightByGPR(this.cesiumpromise,this.cesiumviewer);
  	}
  }

  HeightByHB_LIMIT(promise,viewer) {
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties.HB_LIMIT!==undefined){
	      entity.polygon.extrudedHeight = entity.properties.HB_LIMIT*5;
		}else{entity.polygon.extrudedHeight =0;}
      }
    });
  }

  HeightByGPR(promise,viewer) {
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties.GPR!==undefined){
	      if(entity.properties.GPR._value==="1.0") entity.polygon.extrudedHeight = 10;
	      else if(entity.properties.GPR._value==="1.4") entity.polygon.extrudedHeight = 15;
	      else if(entity.properties.GPR._value==="2.0") entity.polygon.extrudedHeight = 60;
	      else if(entity.properties.GPR._value==="2.5") entity.polygon.extrudedHeight = 90;
	  	}else{entity.polygon.extrudedHeight = 0;}
      }
    });
  }


}