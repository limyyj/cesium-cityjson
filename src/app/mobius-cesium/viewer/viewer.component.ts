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
  Colors:Array<string>;
  texts:Array<string>;
  Maximum:Number;
  Minimum:Number;


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
        this.HeightValue = "Status_Cat";
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
    var viewer = new Cesium.Viewer('cesiumContainer');//http://localhost:4200/assets/cesium/Widgets/Images/ImageryProviders/stamenToner.png
    /*var providerViewModels = [];
  providerViewModels.push(new Cesium.ProviderViewModel({
    name : 'Stamen Toner',
    iconUrl : Cesium.buildModuleUrl('Widgets/Images/ImageryProviders/stamenToner.png'),
    tooltip : 'A high contrast black and white map \nhttp://maps.stamen.com',//'Bing Maps aerial imagery \nhttp://www.bing.com/maps',
    creationFunction : function() {
        return new Cesium.BingMapsImageryProvider({
            url : '//dev.virtualearth.net',
            mapStyle : Cesium.BingMapsStyle.AERIAL_WITH_LABELS
        });
    }
  }));

  providerViewModels.push(new Cesium.ProviderViewModel({
    name : 'Bing Maps Aerial with Labels',
    iconUrl : Cesium.buildModuleUrl('Widgets/Images/ImageryProviders/bingAerialLabels.png'),
    tooltip : 'Bing Maps aerial imagery with label overlays \nhttp://www.bing.com/maps',
    creationFunction : function() {
        return new Cesium.BingMapsImageryProvider({
            url : '//dev.virtualearth.net',
            mapStyle : Cesium.BingMapsStyle.AERIAL_WITH_LABELS
        });
    }
  }));
    var viewer = new Cesium.Viewer('cesiumContainer', {
	  imageryProviderViewModels : providerViewModels,
	  selectedImageryProviderViewModel : providerViewModels[0]
	});*/
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
  	this.Colors=["lightcoral","red","coral","crimson","ROYALBLUE","lightslategray"];
    this.texts=["Available","Prime","Remnant","Estate under active master / infra planning","Others","0 OR NULL"];
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
			else if(entity.properties.Status_Cat._value==="0"||null) entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
			else {entity.polygon.material=Cesium.Color.ROYALBLUE.withAlpha(1);}
		  }
		}else{
		  entity.polygon.material=Cesium.Color.GREY.withAlpha(1);
		}
      }
    });
    
  }

  colorByDIST_TRUNK(promise,viewer) {
  	this.Colors=["DARKCYAN","MEDIUMTURQUOISE","KHAKI","GOLD","CORAL","LIGHTSLATEGRAY"];
    this.texts=[">=239","238-151","150-96","95-61","<=60","0 OR NULL"];
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
		    else if(entity.properties.DIST_TRUNK===0||null) entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
		    else entity.polygon.material=Cesium.Color.CORAL.withAlpha(1);
		  }
		}else{
		  entity.polygon.material=Cesium.Color.GREY.withAlpha(1);
		}    
      }
    });
  }

  colorByDIST_EWL(promise,viewer) {
  	this.Colors=["DARKCYAN","MEDIUMTURQUOISE","KHAKI","GOLD","CORAL","LIGHTSLATEGRAY"];
    this.texts=[">=715","714-451","450-286","285-181","<=180","0 OR NULL"];
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
		    else if(entity.properties.DIST_EWL===0||null) entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
		    else entity.polygon.material=Cesium.Color.CORAL.withAlpha(1);
		  }
		}else{
		  entity.polygon.material=Cesium.Color.GREY.withAlpha(1);
		}  
      }
    });
  }

  colorByAVAILABLE(promise,viewer) {
  	this.Colors=["RED","ROYALBLUE","LIGHTSLATEGRAY"];
    this.texts=["AVAILABLE","COMMITTED","0 OR NULL"];
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties.TRANSPAREN._value===1){
	      if(entity.properties.AVAILABLE!==undefined){
		    if(entity.properties.AVAILABLE._value==="AVAILABLE") entity.polygon.material=Cesium.Color.RED.withAlpha(1);
			else if(entity.properties.AVAILABLE._value==="COMMITTED") entity.polygon.material=Cesium.Color.ROYALBLUE.withAlpha(1);
			else{entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
		  }
		}else{
		  entity.polygon.material=Cesium.Color.GREY.withAlpha(1);
		}  
      }
    });
  }

  colorByAGG_POT(promise,viewer) {
  	this.Colors=["CORAL","GOLD","KHAKI","MEDIUMTURQUOISE","DARKCYAN","LIGHTSLATEGRAY"];
    this.texts=[">=0.79","0.789-0.67","0.669-0.56","0.559-0.38","<=0.379","0 OR NULL"];
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
		    else if(entity.properties.AGG_POT===0||null) entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
		    else entity.polygon.material=Cesium.Color.DARKCYAN.withAlpha(1);
		  }
		}else{
		  entity.polygon.material=Cesium.Color.GREY.withAlpha(1);
		}   
      }
    });
  }

  colorByGPR(promise,viewer) {
  	this.Colors=["LIGHTSLATEGRAY","YELLOW","DARKORANGE","RED","LIGHTSLATEGRAY"];
    this.texts=["0 OR NULL","0.9,1.0,1.4,1.7","2.0,2.1,2.3,2.5,2.8","23.0,3.2,3.5","Others"];
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties.TRANSPAREN._value===1){
	      if(entity.properties.GPR!==undefined){
	      	if(entity.properties.GPR._value==="0.0"||entity.properties.GPR._value===0.0||entity.properties.GPR._value===null) entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
			else if(entity.properties.GPR._value==="0.9"||entity.properties.GPR._value===0.9||entity.properties.GPR._value==="1.0"||entity.properties.GPR._value===1.0
				||entity.properties.GPR._value==="1.4"||entity.properties.GPR._value===1.4||entity.properties.GPR._value==="1.7"||entity.properties.GPR._value===1.7) 
				entity.polygon.material=Cesium.Color.YELLOW.withAlpha(1);
			else if(entity.properties.GPR._value==="2.0"||entity.properties.GPR._value===2.0||entity.properties.GPR._value==="2.1"||entity.properties.GPR._value===2.1||
				entity.properties.GPR._value==="2.3"||entity.properties.GPR._value===2.3||entity.properties.GPR._value==="2.5"||entity.properties.GPR._value===2.5||
				entity.properties.GPR._value==="2.8"||entity.properties.GPR._value===2.8) entity.polygon.material=Cesium.Color.DARKORANGE.withAlpha(1);
			else if(entity.properties.GPR._value==="3.0"||entity.properties.GPR._value===3.0||entity.properties.GPR._value==="3.2"||entity.properties.GPR._value===3.2||
				entity.properties.GPR._value==="3.5"||entity.properties.GPR._value===3.5) entity.polygon.material=Cesium.Color.RED.withAlpha(1);
			else {entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
		  }
		}else{
		  entity.polygon.material=Cesium.Color.GREY.withAlpha(1);
		}
      }
    });
  }

  colorByHB_LIMIT(promise,viewer) {
  	this.Colors=["RED","ORANGERED","DARKORANGE","YELLOW","LIGHTSLATEGRAY"];
    this.texts=[">=93","92-86","85-77","76-63","<=62"];
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties.TRANSPAREN._value===1){
	      if(entity.properties.HB_LIMIT!==undefined){
		    if(entity.properties.HB_LIMIT>=93) entity.polygon.material=Cesium.Color.RED.withAlpha(1);
		    else if(entity.properties.HB_LIMIT>=86) entity.polygon.material=Cesium.Color.ORANGERED.withAlpha(1);
		    else if(entity.properties.HB_LIMIT>=77) entity.polygon.material=Cesium.Color.DARKORANGE.withAlpha(1);
		    else if(entity.properties.HB_LIMIT>=63) entity.polygon.material=Cesium.Color.YELLOW.withAlpha(1);
		    else if(entity.properties.HB_LIMIT===0||null) entity.polygon.material=Cesium.Color.WHITE.withAlpha(1);
		    else entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
		  }
		}else{
		  entity.polygon.material=Cesium.Color.GREY.withAlpha(1);
		}
      }
    });
  }

  onChangeHeight(HeightValue){
  	this.HeightValue=HeightValue;
  	if(this.HeightValue==="Status_Cat"){
  	  this.HeightByStatus_Cat(this.cesiumpromise,this.cesiumviewer);
  	}else if(this.HeightValue==="DIST_EWL"){
  	  this.HeightByDIST_EWL(this.cesiumpromise,this.cesiumviewer);
  	}else if(this.HeightValue==="DIST_TRUNK"){
  	  this.HeightByDIST_TRUNK(this.cesiumpromise,this.cesiumviewer);
  	}else if(this.HeightValue==="AVAILABLE"){
  	  this.HeightByAVAILABLE(this.cesiumpromise,this.cesiumviewer);
  	}else if(this.HeightValue==="AGG_POT"){
  	  this.HeightByAGG_POT(this.cesiumpromise,this.cesiumviewer);
  	}else if(this.HeightValue==="GPR"){
  	  this.HeightByGPR(this.cesiumpromise,this.cesiumviewer);
  	}else if(this.HeightValue==="HB_LIMIT"){
	  this.HeightByHB_LIMIT(this.cesiumpromise,this.cesiumviewer);
  	}
  	this.dataService.getHeightValue(this.HeightValue);
  }

  HeightByStatus_Cat(promise,viewer) {
  	this.Maximum=100;
  	this.Minimum=5;
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties.TRANSPAREN._value===1){
	      if(entity.properties.Status_Cat!==undefined){
	      	if(entity.properties.Status_Cat._value==="Available") entity.polygon.extrudedHeight = 100;
			else if(entity.properties.Status_Cat._value==="Prime") entity.polygon.extrudedHeight = 100;
			else if(entity.properties.Status_Cat._value==="Remnant") entity.polygon.extrudedHeight = 100;
	        else if(entity.properties.Status_Cat._value==="Estate under active master / infra planning") entity.polygon.extrudedHeight = 100;
			else if(entity.properties.Status_Cat._value==="0"||null) entity.polygon.extrudedHeight = 5;
			else{entity.polygon.extrudedHeight = 50;}
		  }
		}else{
		  entity.polygon.extrudedHeight = 5;
		}  
      }
    });
  }

  HeightByDIST_EWL(promise,viewer) {
  	this.Maximum=120;
  	this.Minimum=5;
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties.TRANSPAREN._value===1){
	      if(entity.properties.DIST_FEED!==undefined){
		    if(entity.properties.DIST_EWL>=715) entity.polygon.extrudedHeight = 5;
		    else if(entity.properties.DIST_EWL>=451) entity.polygon.extrudedHeight = 120;
		    else if(entity.properties.DIST_EWL>=286) entity.polygon.extrudedHeight = 50;
		    else if(entity.properties.DIST_EWL>=181) entity.polygon.extrudedHeight = 80;
		    else if(entity.properties.DIST_EWL===0||null) entity.polygon.extrudedHeight = 5;
		    else entity.polygon.extrudedHeight = 100;
		  }
		}else{
		  entity.polygon.extrudedHeight = 5;
		}  
      }
    });
  }

  HeightByDIST_TRUNK(promise,viewer) {
  	this.Maximum=100;
  	this.Minimum=5;
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties.TRANSPAREN._value===1){
	      if(entity.properties.DIST_FEED!==undefined){
		    if(entity.properties.DIST_TRUNK>=239) entity.polygon.extrudedHeight = 5;
		    else if(entity.properties.DIST_TRUNK>=151) entity.polygon.extrudedHeight = 20;
		    else if(entity.properties.DIST_TRUNK>=96) entity.polygon.extrudedHeight = 50;
		    else if(entity.properties.DIST_TRUNK>=61) entity.polygon.extrudedHeight = 80;
		    else if(entity.properties.DIST_TRUNK===0||null) entity.polygon.extrudedHeight = 5;
		    else entity.polygon.extrudedHeight = 100;
		  }
		}else{
		  entity.polygon.extrudedHeight = 5;
		}    
      }
    });
  }

  HeightByAVAILABLE(promise,viewer) {
  	this.Maximum=100;
  	this.Minimum=5;
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties.TRANSPAREN._value===1){
	      if(entity.properties.AVAILABLE!==undefined){
		    if(entity.properties.AVAILABLE._value==="AVAILABLE") entity.polygon.extrudedHeight = 100;
			else if(entity.properties.AVAILABLE._value==="COMMITTED") entity.polygon.extrudedHeight = 50;
			else{entity.polygon.extrudedHeight = 5;}
		  }
		}else{
		  entity.polygon.extrudedHeight = 5;
		}  
      }
    });
  }

  HeightByAGG_POT(promise,viewer) {
  	this.Maximum=100;
  	this.Minimum=5;
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties.TRANSPAREN._value===1){
	      if(entity.properties.AGG_POT!==undefined){
		    if(entity.properties.AGG_POT>=0.79) entity.polygon.extrudedHeight = 100;
		    else if(entity.properties.AGG_POT>=0.67) entity.polygon.extrudedHeight = 80;
		    else if(entity.properties.AGG_POT>=0.56) entity.polygon.extrudedHeight = 50;
		    else if(entity.properties.AGG_POT>=0.38) entity.polygon.extrudedHeight = 20;
		    else if(entity.properties.AGG_POT===0||null) entity.polygon.extrudedHeight = 5;
		    else {entity.polygon.extrudedHeight = 5;}
		  }
		}else{
		  entity.polygon.extrudedHeight = 5;
		}   
      }
    });
  }

  HeightByGPR(promise,viewer) {
  	this.Maximum=120;
  	this.Minimum=5;
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties.TRANSPAREN._value===1){
	      if(entity.properties.GPR!==undefined){
	      	if(entity.properties.GPR._value==="0.0"||null) entity.polygon.extrudedHeight = 5;
	      	else if(entity.properties.GPR._value==="0.9") entity.polygon.extrudedHeight = 9;
		    else if(entity.properties.GPR._value==="1.0") entity.polygon.extrudedHeight = 10;
		    else if(entity.properties.GPR._value==="1.4") entity.polygon.extrudedHeight = 15;
		    else if(entity.properties.GPR._value==="1.7") entity.polygon.extrudedHeight = 30;
		    else if(entity.properties.GPR._value==="2.0") entity.polygon.extrudedHeight = 60;
		    else if(entity.properties.GPR._value==="2.1") entity.polygon.extrudedHeight = 70;
		    else if(entity.properties.GPR._value==="2.3") entity.polygon.extrudedHeight = 85;
		    else if(entity.properties.GPR._value==="2.5") entity.polygon.extrudedHeight = 90;
		    else if(entity.properties.GPR._value==="2.8") entity.polygon.extrudedHeight = 95;
		    else if(entity.properties.GPR._value==="3.0") entity.polygon.extrudedHeight = 105;
		    else if(entity.properties.GPR._value==="3.2") entity.polygon.extrudedHeight = 110;
		    else if(entity.properties.GPR._value==="3.5") entity.polygon.extrudedHeight = 120;
		    else{entity.polygon.extrudedHeight = 30;}
		  }else{entity.polygon.extrudedHeight = 5;}
		}else{
		  entity.polygon.extrudedHeight = 5;
		}
      }
    });
  }  


  /*HeightByHB_LIMIT(promise,viewer) {
  	this.Maximum=0;
  	this.Minimum=0;
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties.TRANSPAREN._value===1){
	      if(entity.properties.HB_LIMIT!==undefined){
		    entity.polygon.extrudedHeight = entity.properties.HB_LIMIT*5;
		    console.log(entity.properties.HB_LIMIT._value);
		    if(entity.polygon.extrudedHeight>this.Maximum) {console.log(entity.properties.HB_LIMIT);this.Maximum=entity.properties.HB_LIMIT._value;}
		  }else{entity.polygon.extrudedHeight =0;}
		}else{
		  entity.polygon.extrudedHeight = 0;
		}  
      }
    });
  }*/
  HeightByHB_LIMIT(promise,viewer) {
  	var height:Array<any>=[];
  	this.Maximum=0;
  	this.Minimum=0;
  	var max:number=0;
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties.TRANSPAREN._value===1){
	      if(entity.properties.HB_LIMIT!==undefined){
		    entity.polygon.extrudedHeight = entity.properties.HB_LIMIT;
		    height.push(Number(entity.properties.HB_LIMIT._value));
		  }else{entity.polygon.extrudedHeight =0;}
		}else{
		  entity.polygon.extrudedHeight = 0;
		}  
      }
    });
    this.Maximum=Math.max(...height);
  }



}