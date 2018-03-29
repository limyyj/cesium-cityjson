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
  ColorValue:string;
  HeightValue:string;

  constructor(injector: Injector, myElement: ElementRef) { 
  	super(injector);
    this.myElement = myElement;
  }

  ngOnInit() {
  	//this.ColorValue="Status_Cat";
  	//this.HeightValue="HB_LIMIT";
  	if(this.ColorValue == undefined) {
        this.ColorValue = "Status_Cat";
    } else {
      this.ColorValue=this.dataService.ColorValue;
    }
    if(this.HeightValue == undefined) {
        this.HeightValue = "HB_LIMIT";
    } else {
      this.HeightValue=this.dataService.HeightValue;
    }

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
    this.cesiumviewer=viewer;
	this.cesiumpromise=promise;
    this.onChangeColor(this.ColorValue);
    this.onChangeHeight(this.HeightValue);
  }

  onChangeColor(ColorValue){
  	this.ColorValue=ColorValue;
  	if(this.ColorValue==="Status_Cat"||undefined){
  	  this.colorByStatus_Cat(this.cesiumpromise,this.cesiumviewer);
  	}else if(this.ColorValue==="DIST_EWL"){
	  this.colorByDIST_EWL(this.cesiumpromise,this.cesiumviewer);
  	}else if(this.ColorValue==="DIST_TRUNK"){
	  this.colorByDIST_TRUNK(this.cesiumpromise,this.cesiumviewer);
  	}else if(this.ColorValue==="AVAILABLE"){
	  this.colorByAVAILABLE(this.cesiumpromise,this.cesiumviewer);
  	}else if(this.ColorValue==="AGG_POT"){
	  this.colorByAGG_POT(this.cesiumpromise,this.cesiumviewer);
  	}else if(this.ColorValue==="GPR"){
	  this.colorByGPR(this.cesiumpromise,this.cesiumviewer);
  	}else if(this.ColorValue==="HB_LIMIT"){
  	  this.colorByHB_LIMIT(this.cesiumpromise,this.cesiumviewer);
  	}
  	this.dataService.getColorValue(this.ColorValue);
  }

  colorByStatus_Cat(promise,viewer) {
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties.TRANSPAREN._value===1){
	      if(entity.properties.Status_Cat!==undefined){
			if(entity.properties.Status_Cat._value==="Available") entity.polygon.material=Cesium.Color.LIGHTCORAL.withAlpha(1);
			else if(entity.properties.Status_Cat._value==="Prime") entity.polygon.material=Cesium.Color.RED.withAlpha(1);
			else if(entity.properties.Status_Cat._value==="Remnant") entity.polygon.material=Cesium.Color.CORAL.withAlpha(1);
	        else if(entity.properties.Status_Cat._value==="Estate under active master / infra planning") entity.polygon.material=Cesium.Color.CRIMSON.withAlpha(1);
			else entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
		  }else{entity.polygon.material=Cesium.Color.WHITE.withAlpha(0.3);}
		}else{
		  entity.polygon.material=Cesium.Color.GREY.withAlpha(1);
		}
      }
    });
  }

  colorByDIST_TRUNK(promise,viewer) {
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties.TRANSPAREN._value===1){
	      if(entity.properties.DIST_FEED!==undefined){
		    if(entity.properties.DIST_TRUNK>=239) entity.polygon.material=Cesium.Color.DARKCYAN .withAlpha(1);
		    else if(entity.properties.DIST_TRUNK>=151) entity.polygon.material=Cesium.Color.MEDIUMTURQUOISE.withAlpha(1);
		    else if(entity.properties.DIST_TRUNK>=96) entity.polygon.material=Cesium.Color.KHAKI.withAlpha(1);
		    else if(entity.properties.DIST_TRUNK>=61) entity.polygon.material=Cesium.Color.GOLD.withAlpha(1);
		    else entity.polygon.material=Cesium.Color.CORAL.withAlpha(1);
		  }else{entity.polygon.material=Cesium.Color.white.withAlpha(0.3);}
		}else{
		  entity.polygon.material=Cesium.Color.GREY.withAlpha(1);
		}    
      }
    });
  }

  colorByDIST_EWL(promise,viewer) {
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties.TRANSPAREN._value===1){
	      if(entity.properties.DIST_FEED!==undefined){
		    if(entity.properties.DIST_EWL>=715) entity.polygon.material=Cesium.Color.DARKCYAN .withAlpha(1);
		    else if(entity.properties.DIST_EWL>=451) entity.polygon.material=Cesium.Color.MEDIUMTURQUOISE.withAlpha(1);
		    else if(entity.properties.DIST_EWL>=286) entity.polygon.material=Cesium.Color.KHAKI.withAlpha(1);
		    else if(entity.properties.DIST_EWL>=181) entity.polygon.material=Cesium.Color.GOLD.withAlpha(1);
		    else entity.polygon.material=Cesium.Color.CORAL.withAlpha(1);
		  }else{entity.polygon.material=Cesium.Color.white.withAlpha(0.3);}
		}else{
		  entity.polygon.material=Cesium.Color.GREY.withAlpha(1);
		}  
      }
    });
  }

  colorByAVAILABLE(promise,viewer) {
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties.TRANSPAREN._value===1){
	      if(entity.properties.AVAILABLE!==undefined){
		    if(entity.properties.AVAILABLE._value==="AVAILABLE") entity.polygon.material=Cesium.Color.LIGHTCORAL.withAlpha(1);
			else if(entity.properties.AVAILABLE._value==="COMMITTED") entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
		  }else{entity.polygon.material=Cesium.Color.white.withAlpha(0.3);}
		}else{
		  entity.polygon.material=Cesium.Color.GREY.withAlpha(1);
		}  
      }
    });
  }

  colorByAGG_POT(promise,viewer) {
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties.TRANSPAREN._value===1){
	      if(entity.properties.AGG_POT!==undefined){
		    if(entity.properties.AGG_POT>=0.79) entity.polygon.material=Cesium.Color.CORAL .withAlpha(1);
		    else if(entity.properties.AGG_POT>=0.67) entity.polygon.material=Cesium.Color.GOLD.withAlpha(1);
		    else if(entity.properties.AGG_POT>=0.56) entity.polygon.material=Cesium.Color.KHAKI.withAlpha(1);
		    else if(entity.properties.AGG_POT>=0.38) entity.polygon.material=Cesium.Color.MEDIUMTURQUOISE.withAlpha(1);
		    else entity.polygon.material=Cesium.Color.DARKCYAN.withAlpha(1);
		  }else{entity.polygon.material=Cesium.Color.white.withAlpha(0.3);}
		}else{
		  entity.polygon.material=Cesium.Color.GREY.withAlpha(1);
		}   
      }
    });
  }

  colorByGPR(promise,viewer) {
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties.TRANSPAREN._value===1){
	      if(entity.properties.GPR!==undefined){
			if(entity.properties.GPR._value==="1.0"||entity.properties.GPR._value===1.0) entity.polygon.material=Cesium.Color.ORANGERED.withAlpha(1);
			else if(entity.properties.GPR._value==="1.4"||entity.properties.GPR._value===1.4) entity.polygon.material=Cesium.Color.DARKORANGE.withAlpha(1);
			else if(entity.properties.GPR._value==="2.0"||entity.properties.GPR._value===2.0) entity.polygon.material=Cesium.Color.YELLOW.withAlpha(1);
			else if(entity.properties.GPR._value==="2.5"||entity.properties.GPR._value===2.5) entity.polygon.material=Cesium.Color.LIGHTYELLOW.withAlpha(1);
			else {entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
		  }else{entity.polygon.material=Cesium.Color.white.withAlpha(0.3);}
		}else{
		  entity.polygon.material=Cesium.Color.GREY.withAlpha(1);
		}
      }
    });
  }

  colorByHB_LIMIT(promise,viewer) {
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties.TRANSPAREN._value===1){
	      if(entity.properties.HB_LIMIT!==undefined){
		    if(entity.properties.HB_LIMIT>=93) entity.polygon.material=Cesium.Color.ORANGERED.withAlpha(1);
		    else if(entity.properties.HB_LIMIT>=86) entity.polygon.material=Cesium.Color.DARKORANGE.withAlpha(1);
		    else if(entity.properties.HB_LIMIT>=77) entity.polygon.material=Cesium.Color.YELLOW.withAlpha(1);
		    else if(entity.properties.HB_LIMIT>=63) entity.polygon.material=Cesium.Color.LIGHTYELLOW.withAlpha(1);
		    else entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
		  }else{entity.polygon.material=Cesium.Color.white.withAlpha(0.3);}
		}else{
		  entity.polygon.material=Cesium.Color.GREY.withAlpha(1);
		}
      }
    });
  }

  onChangeHeight(HeightValue){
  	this.HeightValue=HeightValue;
  	if(this.HeightValue==="HB_LIMIT"){
  	  this.HeightByHB_LIMIT(this.cesiumpromise,this.cesiumviewer);
  	}else if(this.HeightValue==="GPR"){
	  this.HeightByGPR(this.cesiumpromise,this.cesiumviewer);
  	}else if(this.HeightValue==="DEFAULT"){
	  this.HeightByDEFAULT(this.cesiumpromise,this.cesiumviewer);
  	}
  	this.dataService.getHeightValue(this.HeightValue);
  }

  HeightByHB_LIMIT(promise,viewer) {
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties.TRANSPAREN._value===1){
	      if(entity.properties.HB_LIMIT!==undefined){
		    entity.polygon.extrudedHeight = entity.properties.HB_LIMIT*5;
		  }else{entity.polygon.extrudedHeight =0;}
		}else{
		  entity.polygon.extrudedHeight = 0;
		}  
      }
    });
  }

  HeightByGPR(promise,viewer) {
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        //if(entity.properties.TRANSPAREN._value===1){
	      if(entity.properties.GPR!==undefined){
	      	if(entity.properties.GPR._value==="0.0") entity.polygon.extrudedHeight = 0;
	      	else if(entity.properties.GPR._value==="0.9") entity.polygon.extrudedHeight = 9;
		    else if(entity.properties.GPR._value==="1.0") entity.polygon.extrudedHeight = 10;
		    else if(entity.properties.GPR._value==="1.4") entity.polygon.extrudedHeight = 15;
		    else if(entity.properties.GPR._value==="1.7") entity.polygon.extrudedHeight = 30;
		    else if(entity.properties.GPR._value==="2.0") entity.polygon.extrudedHeight = 60;
		    else if(entity.properties.GPR._value==="2.3") entity.polygon.extrudedHeight = 85;
		    else if(entity.properties.GPR._value==="2.5") entity.polygon.extrudedHeight = 90;
		    else if(entity.properties.GPR._value==="2.8") entity.polygon.extrudedHeight = 95;
		    else if(entity.properties.GPR._value==="3.0") entity.polygon.extrudedHeight = 105;
		    else if(entity.properties.GPR._value==="3.2") entity.polygon.extrudedHeight = 110;
		    else if(entity.properties.GPR._value==="3.5") entity.polygon.extrudedHeight = 120;
		    else{entity.polygon.extrudedHeight = 0;}
		  }else{entity.polygon.extrudedHeight = 0;}
		/*}else if(entity.properties.TRANSPAREN._value===0.3){
		  entity.polygon.extrudedHeight = 30;
		} */
      }
    });
  }

  HeightByDEFAULT(promise,viewer) {
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties.TRANSPAREN._value===1){
	      entity.polygon.extrudedHeight = 0;
		}else {
		  entity.polygon.extrudedHeight = 30;
		}
      }
    });
  }


}