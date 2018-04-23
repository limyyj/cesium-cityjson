import { Component, OnInit, Injector, ElementRef } from '@angular/core';
import {DataSubscriber} from "../data/DataSubscriber";
import * as chroma from "chroma-js";


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
  ColorValue:string;
  HeightValue:string;
  ChromaScale:any;
  propertyNames:Array<any>;
  viewer:any;
  selectEntity:any=null;
  material:object;


  constructor(injector: Injector, myElement: ElementRef) { 
  	super(injector);
    this.myElement = myElement;
    this.ChromaScale=chroma.scale("SPECTRAL");
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
    	infoBox:true,
      imageryProvider : Cesium.createOpenStreetMapImageryProvider({ 
     	url : 'https://stamen-tiles.a.ssl.fastly.net/toner/', 
      })
    });
    document.getElementsByClassName('cesium-viewer-bottom')[0].remove();
    document.getElementsByClassName('cesium-viewer-animationContainer')[0].remove();
    document.getElementsByClassName('cesium-viewer-timelineContainer')[0].remove();
    document.getElementsByClassName('cesium-viewer-fullscreenContainer')[0].remove();
    document.getElementsByClassName('cesium-viewer-infoBoxContainer')[0].remove();
  	this.viewer=viewer;
    this.dataService.viewer=this.viewer;
  	this.data=data;
    var promise = Cesium.GeoJsonDataSource.load(this.data);;
    var self= this;
    var HeightKey:any=[];
    promise.then(function(dataSource) {
      viewer.dataSources.add(dataSource);
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];                               
		    entity.polygon.outline = false;
      }
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
    this.ColorValue=this.propertyNames.sort()[0];
    this.HeightValue=HeightKey.sort()[0]
    this.dataService.ColorValue=this.ColorValue;
    this.dataService.HeightValue=this.HeightValue;
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

  /*onChangeColor(ColorValue){
  	this.ColorValue=ColorValue;*/
  	/*if(this.ColorValue==="Status_Cat"||undefined){
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
  	}*/
  	/*var texts=[];
  	this.texts=[];
  	this.Colors=[];
  	for(var j=0;j<this.propertyNames.length;j++){
  	  if(this.ColorValue===this.propertyNames[j]){
  	  	this.Name=this.propertyNames[j];
  	  	var self= this;
  	  	this.cesiumpromise.then(function(dataSource) {
	      var entities = dataSource.entities.values;
	      for (var i = 0; i < entities.length; i++) {
	        var entity = entities[i];
	      	if(entity.properties[self.Name]!==undefined){
		      if(entity.properties[self.Name]._value!==" "){
		      	if(texts.length===0) {texts[0]=entity.properties[self.Name]._value;}
			    else{if(texts.indexOf(entity.properties[self.Name]._value)===-1) texts.push(entity.properties[self.Name]._value);}
				}
			  }
	        }
	    });
  	  }
  	}
  	for(var j=0;j<texts.length;j++){
  	  this.Colors.push(this.ColorStore[j]);
  	}
  	this.texts=texts;
  	if(typeof(texts[0])==="number") {
  	  this.colorByNum();
  	}else{this.colorByCat();}
  	if(this.CheckHide===true) this.Hide();
  	if(this.CheckCom===true) this.Commited();
  	if(this.CheckOcc===true) this.Occupied();
  	this.dataService.getColorValue(this.ColorValue);
  }
  colorByCat(){
  	var Name=this.ColorValue;
  	var texts=this.texts;
  	this.cesiumpromise.then(function(dataSource) {
	  var self= this;
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties[Name]._value===texts[0]){ entity.polygon.material=Cesium.Color.LIGHTCORAL.withAlpha(1);}
        else if(entity.properties[Name]._value===texts[1]){ entity.polygon.material=Cesium.Color.RED.withAlpha(1);}
        else if(entity.properties[Name]._value===texts[2]){ entity.polygon.material=Cesium.Color.CORAL.withAlpha(1);}
        else if(entity.properties[Name]._value===texts[3]){ entity.polygon.material=Cesium.Color.CRIMSON.withAlpha(1);}
        else if(entity.properties[Name]._value===texts[4]){ entity.polygon.material=Cesium.Color.ROYALBLUE.withAlpha(1);}
        else if(entity.properties[Name]._value===texts[5]){ entity.polygon.material=Cesium.Color.AQUA.withAlpha(1);}
        else if(entity.properties[Name]._value===texts[6]){ entity.polygon.material=Cesium.Color.BROWN.withAlpha(1);}
        else if(entity.properties[Name]._value===texts[7]){ entity.polygon.material=Cesium.Color.CADETBLUE.withAlpha(1);}
        else if(entity.properties[Name]._value===texts[8]){ entity.polygon.material=Cesium.Color.CHARTREUSE.withAlpha(1);}
        else if(entity.properties[Name]._value===texts[9]){ entity.polygon.material=Cesium.Color.DARKORCHID.withAlpha(1);}
        else if(entity.properties[Name]._value===texts[10]){ entity.polygon.material=Cesium.Color.DARKTURQUOISE.withAlpha(1);}
        else if(entity.properties[Name]._value===texts[11]){ entity.polygon.material=Cesium.Color.DEEPPINK.withAlpha(1);}
        else if(entity.properties[Name]._value===texts[12]){ entity.polygon.material=Cesium.Color.FORESTGREEN.withAlpha(1);}
        else if(entity.properties[Name]._value===texts[13]){ entity.polygon.material=Cesium.Color.GOLDENROD.withAlpha(1);}
        else{entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
      }
	});
  }


  colorByNum(){
  	var max = Math.max.apply(Math, this.texts);
  	var min = Math.min.apply(Math, this.texts);
  	console.log(max,min);

  }

  colorByStatus_Cat(promise,viewer) {
  	this.Colors=["lightcoral","red","coral","crimson","ROYALBLUE","lightslategray"];
    this.texts=["Available","Prime","Remnant","Estate under active master / infra planning","Others","0 OR NULL"];
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
	      if(entity.properties.Status_Cat!==undefined){
			if(entity.properties.Status_Cat._value==="Available") entity.polygon.material=Cesium.Color.LIGHTCORAL.withAlpha(1);
			else if(entity.properties.Status_Cat._value==="Prime") entity.polygon.material=Cesium.Color.RED.withAlpha(1);
			else if(entity.properties.Status_Cat._value==="Remnant") entity.polygon.material=Cesium.Color.CORAL.withAlpha(1);
	        else if(entity.properties.Status_Cat._value==="Estate under active master / infra planning") entity.polygon.material=Cesium.Color.CRIMSON.withAlpha(1);
			else if(entity.properties.Status_Cat._value==="0"||null) entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
			else {entity.polygon.material=Cesium.Color.ROYALBLUE.withAlpha(1);}
		  }
      }
    });
    
    
  }

  colorByDIST_TRUNK(promise,viewer) {
  	this.Colors=["DARKCYAN","MEDIUMTURQUOISE","KHAKI","GOLD","CORAL","LIGHTSLATEGRAY"];
    this.texts=[">= 239","238 - 151","150 - 96","95 - 61","<= 60","0 OR NULL"];
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
	      if(entity.properties.DIST_TRUNK!==undefined){
		    if(entity.properties.DIST_TRUNK>=239) entity.polygon.material=Cesium.Color.DARKCYAN .withAlpha(1);
		    else if(entity.properties.DIST_TRUNK>=151) entity.polygon.material=Cesium.Color.MEDIUMTURQUOISE.withAlpha(1);
		    else if(entity.properties.DIST_TRUNK>=96) entity.polygon.material=Cesium.Color.KHAKI.withAlpha(1);
		    else if(entity.properties.DIST_TRUNK>=61) entity.polygon.material=Cesium.Color.GOLD.withAlpha(1);
		    else if(entity.properties.DIST_TRUNK===0||null) entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
		    else entity.polygon.material=Cesium.Color.CORAL.withAlpha(1);
		  }   
      }
    });
  }

  colorByDIST_EWL(promise,viewer) {
  	this.Colors=["DARKCYAN","MEDIUMTURQUOISE","KHAKI","GOLD","CORAL","LIGHTSLATEGRAY"];
    this.texts=[">= 715","714 - 451","450 - 286","285 - 181","<= 180","0 OR NULL"];
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
	      if(entity.properties.DIST_EWL!==undefined){
		    if(entity.properties.DIST_EWL>=715) entity.polygon.material=Cesium.Color.DARKCYAN .withAlpha(1);
		    else if(entity.properties.DIST_EWL>=451) entity.polygon.material=Cesium.Color.MEDIUMTURQUOISE.withAlpha(1);
		    else if(entity.properties.DIST_EWL>=286) entity.polygon.material=Cesium.Color.KHAKI.withAlpha(1);
		    else if(entity.properties.DIST_EWL>=181) entity.polygon.material=Cesium.Color.GOLD.withAlpha(1);
		    else if(entity.properties.DIST_EWL===0||null) entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
		    else entity.polygon.material=Cesium.Color.CORAL.withAlpha(1);
		  }
      }
    });
  }

  colorByAVAILABLE(promise,viewer) {
  	this.Colors=["RED","ROYALBLUE","LIGHTSLATEGRAY"];
    this.texts=["AVAILABLE","COMMITTED","OCCUPIED"];
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
	      if(entity.properties.AVAILABLE!==undefined){
		    if(entity.properties.AVAILABLE._value==="AVAILABLE") entity.polygon.material=Cesium.Color.RED.withAlpha(1);
			else if(entity.properties.AVAILABLE._value==="COMMITTED") entity.polygon.material=Cesium.Color.ROYALBLUE.withAlpha(1);
			else if(entity.properties.AVAILABLE._value==="OCCUPIED") entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
		  }
      }
    });
  }

  colorByAGG_POT(promise,viewer) {
  	this.Colors=["CORAL","GOLD","KHAKI","MEDIUMTURQUOISE","DARKCYAN","LIGHTSLATEGRAY"];
    this.texts=[">= 0.79","0.789 - 0.67","0.669 - 0.56","0.559 - 0.38","<= 0.379","0 OR NULL"];
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
	      if(entity.properties.AGG_POT!==undefined){
		    if(entity.properties.AGG_POT>=0.79) entity.polygon.material=Cesium.Color.CORAL .withAlpha(1);
		    else if(entity.properties.AGG_POT>=0.67) entity.polygon.material=Cesium.Color.GOLD.withAlpha(1);
		    else if(entity.properties.AGG_POT>=0.56) entity.polygon.material=Cesium.Color.KHAKI.withAlpha(1);
		    else if(entity.properties.AGG_POT>=0.38) entity.polygon.material=Cesium.Color.MEDIUMTURQUOISE.withAlpha(1);
		    else if(entity.properties.AGG_POT===0||null) entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
		    else entity.polygon.material=Cesium.Color.DARKCYAN.withAlpha(1);
		  }
      }
    });
  }

  colorByGPR(promise,viewer) {
  	this.Colors=["YELLOW","DARKORANGE","RED","LIGHTSLATEGRAY"];
    this.texts=["0.9 - 1.7","2.0 - 2.8","3.0 - 3.5","0 OR NULL"];
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
	    if(entity.properties.GPR!==undefined){
	      if(entity.properties.GPR._value==="0.0"||entity.properties.GPR._value===0.0||entity.properties.GPR._value===0||entity.properties.GPR._value===null) entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
		  else if(entity.properties.GPR._value==="0.9"||entity.properties.GPR._value===0.9||entity.properties.GPR._value==="1.0"||entity.properties.GPR._value==="1"||entity.properties.GPR._value===1.0||entity.properties.GPR._value===1
			||entity.properties.GPR._value==="1.4"||entity.properties.GPR._value===1.4||entity.properties.GPR._value==="1.7"||entity.properties.GPR._value===1.7) 
			entity.polygon.material=Cesium.Color.YELLOW.withAlpha(1);
		  else if(entity.properties.GPR._value==="2"||entity.properties.GPR._value==="2.0"||entity.properties.GPR._value===2.0||entity.properties.GPR._value===2||entity.properties.GPR._value==="2.1"||entity.properties.GPR._value===2.1||
			entity.properties.GPR._value==="2.3"||entity.properties.GPR._value===2.3||entity.properties.GPR._value==="2.5"||entity.properties.GPR._value===2.5||
			entity.properties.GPR._value==="2.8"||entity.properties.GPR._value===2.8) entity.polygon.material=Cesium.Color.DARKORANGE.withAlpha(1);
		  else if(entity.properties.GPR._value==="3.0"||entity.properties.GPR._value==="3"||entity.properties.GPR._value===3.0||entity.properties.GPR._value===3||entity.properties.GPR._value==="3.2"||entity.properties.GPR._value===3.2||
			entity.properties.GPR._value==="3.5"||entity.properties.GPR._value===3.5) entity.polygon.material=Cesium.Color.RED.withAlpha(1);
		  else {entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
		}
      }
    });
  }

  colorByHB_LIMIT(promise,viewer) {
  	this.Colors=["RED","ORANGERED","DARKORANGE","YELLOW","LIGHTSLATEGRAY"];
    this.texts=[">= 93","92 - 86","85 - 77","76 - 63","<= 62"];
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
	      if(entity.properties.HB_LIMIT!==undefined){
		    if(entity.properties.HB_LIMIT>=93) entity.polygon.material=Cesium.Color.RED.withAlpha(1);
		    else if(entity.properties.HB_LIMIT>=86) entity.polygon.material=Cesium.Color.ORANGERED.withAlpha(1);
		    else if(entity.properties.HB_LIMIT>=77) entity.polygon.material=Cesium.Color.DARKORANGE.withAlpha(1);
		    else if(entity.properties.HB_LIMIT>=63) entity.polygon.material=Cesium.Color.YELLOW.withAlpha(1);
		    else if(entity.properties.HB_LIMIT===0||null) entity.polygon.material=Cesium.Color.WHITE.withAlpha(1);
		    else entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
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
  	if(this.CheckHide===true) this.Hide();
  	if(this.CheckCom===true) this.Commited();
  	if(this.CheckOcc===true) this.Occupied();
  	this.dataService.getHeightValue(this.HeightValue);
  }

  HeightByStatus_Cat(promise,viewer) {
  	this.Maximum=500;
  	this.Minimum=25;
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        //if(entity.properties.TRANSPAREN._value===1){
	      if(entity.properties.Status_Cat!==undefined){
	      	if(entity.properties.Status_Cat._value==="Available") entity.polygon.extrudedHeight = 100*5;
			else if(entity.properties.Status_Cat._value==="Prime") entity.polygon.extrudedHeight = 100*5;
			else if(entity.properties.Status_Cat._value==="Remnant") entity.polygon.extrudedHeight = 100*5;
	        else if(entity.properties.Status_Cat._value==="Estate under active master / infra planning") entity.polygon.extrudedHeight = 100*5;
			else if(entity.properties.Status_Cat._value==="0"||null) entity.polygon.extrudedHeight = 5*5;
			else{entity.polygon.extrudedHeight = 50*5;}*/
    		/*var center = Cesium.BoundingSphere.fromPoints(entity.polygon.hierarchy.getValue().positions).center;
    		center=Cesium.Ellipsoid.WGS84.scaleToGeodeticSurface(center, center);
			viewer.entities.add({
			    name : 'Glowing blue line on the surface',
			    polyline : {
			        positions : Cesium.Cartesian3.fromDegreesArrayHeights([103.63626290332934,1.3333570541789537,0,
			                                                        103.63660236586097,1.33303363743232,1000]),

			        width : 10,
			        material : new Cesium.PolylineGlowMaterialProperty({
			            glowPower : 0.2,
			            color : Cesium.Color.BLUE
			        })
			    }
			});
			viewer.zoomTo(viewer.entities);*/
		 /* }  
      }
    });
  }*/

  /*HeightByDIST_EWL(promise,viewer) {
  	this.Maximum=1500;
  	this.Minimum=25;
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
	      if(entity.properties.DIST_EWL!==undefined){
		    if(entity.properties.DIST_EWL>=715) entity.polygon.extrudedHeight = 5*5;
		    else if(entity.properties.DIST_EWL>=451) entity.polygon.extrudedHeight = 20*5;
		    else if(entity.properties.DIST_EWL>=286) entity.polygon.extrudedHeight = 50*5;
		    else if(entity.properties.DIST_EWL>=181) entity.polygon.extrudedHeight = 80*5;
		    else if(entity.properties.DIST_EWL===0||null) entity.polygon.extrudedHeight = 5*5;
		    else entity.polygon.extrudedHeight = 100*5;
		  }
      }
    });
  }

  HeightByDIST_TRUNK(promise,viewer) {
  	this.Maximum=500;
  	this.Minimum=25;
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
	      if(entity.properties.DIST_TRUNK!==undefined){
		    if(entity.properties.DIST_TRUNK>=239) entity.polygon.extrudedHeight = 5*5;
		    else if(entity.properties.DIST_TRUNK>=151) entity.polygon.extrudedHeight = 20*5;
		    else if(entity.properties.DIST_TRUNK>=96) entity.polygon.extrudedHeight = 50*5;
		    else if(entity.properties.DIST_TRUNK>=61) entity.polygon.extrudedHeight = 80*5;
		    else if(entity.properties.DIST_TRUNK===0||null) entity.polygon.extrudedHeight = 5*5;
		    else entity.polygon.extrudedHeight = 100*5;
		  } 
      }
    });
  }

  HeightByAVAILABLE(promise,viewer) {
  	this.Maximum=500;
  	this.Minimum=25;
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
	      if(entity.properties.AVAILABLE!==undefined){
		    if(entity.properties.AVAILABLE._value==="AVAILABLE") entity.polygon.extrudedHeight = 100*5;
			else if(entity.properties.AVAILABLE._value==="COMMITTED") entity.polygon.extrudedHeight = 50*5;
			else{entity.polygon.extrudedHeight = 5*5;}
		  }
      }
    });
  }

  HeightByAGG_POT(promise,viewer) {
  	this.Maximum=500;
  	this.Minimum=25;
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
	      if(entity.properties.AGG_POT!==undefined){
		    if(entity.properties.AGG_POT>=0.79) entity.polygon.extrudedHeight = 100*5;
		    else if(entity.properties.AGG_POT>=0.67) entity.polygon.extrudedHeight = 80*5;
		    else if(entity.properties.AGG_POT>=0.56) entity.polygon.extrudedHeight = 50*5;
		    else if(entity.properties.AGG_POT>=0.38) entity.polygon.extrudedHeight = 20*5;
		    else if(entity.properties.AGG_POT===0||null) entity.polygon.extrudedHeight = 5*5;
		    else {entity.polygon.extrudedHeight = 5*5;}
		  }  
      }
    });
  }

  HeightByGPR(promise,viewer) {
  	this.Maximum=600;
  	this.Minimum=25;
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
	    if(entity.properties.GPR!==undefined){
	      if(entity.properties.GPR._value==="0.0"||entity.properties.GPR._value===null||entity.properties.GPR._value===0||entity.properties.GPR._value==="0") 
	      	entity.polygon.extrudedHeight = 5*5;
	      else if(entity.properties.GPR._value==="0.9"||entity.properties.GPR._value===0.9) entity.polygon.extrudedHeight = 9*5;
		  else if(entity.properties.GPR._value==="1.0"||entity.properties.GPR._value===1.0||entity.properties.GPR._value===1||entity.properties.GPR._value==="1") 
		    entity.polygon.extrudedHeight = 10*5;
		  else if(entity.properties.GPR._value==="1.4"||entity.properties.GPR._value===1.4) entity.polygon.extrudedHeight = 15*5;
		  else if(entity.properties.GPR._value==="1.7"||entity.properties.GPR._value===1.7) entity.polygon.extrudedHeight = 30*5;
		  else if(entity.properties.GPR._value==="2.0"||entity.properties.GPR._value===2.0||entity.properties.GPR._value===2||entity.properties.GPR._value==="2") 
		    entity.polygon.extrudedHeight = 60*5;
		  else if(entity.properties.GPR._value==="2.1"||entity.properties.GPR._value===2.1) entity.polygon.extrudedHeight = 70*5;
		  else if(entity.properties.GPR._value==="2.3"||entity.properties.GPR._value===2.3) entity.polygon.extrudedHeight = 85*5;
		  else if(entity.properties.GPR._value==="2.5"||entity.properties.GPR._value===2.5) entity.polygon.extrudedHeight = 90*5;
		  else if(entity.properties.GPR._value==="2.8"||entity.properties.GPR._value===2.8) entity.polygon.extrudedHeight = 95*5;
		  else if(entity.properties.GPR._value==="3.0"||entity.properties.GPR._value===3.0||entity.properties.GPR._value===3||entity.properties.GPR._value==="3") 
		    entity.polygon.extrudedHeight = 105*5;
		  else if(entity.properties.GPR._value==="3.2"||entity.properties.GPR._value===3.2) entity.polygon.extrudedHeight = 110*5;
		  else if(entity.properties.GPR._value==="3.5"||entity.properties.GPR._value===3.5) entity.polygon.extrudedHeight = 120*5;
		  else{entity.polygon.extrudedHeight = 30*5;}
		}else{entity.polygon.extrudedHeight = 5*5;}
      }
    });
  }  


  HeightByHB_LIMIT(promise,viewer) {
  	var height:Array<any>=[];
  	this.Maximum=0;
  	this.Minimum=0;
  	var max:number=0;
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
	      if(entity.properties.HB_LIMIT!==undefined){
		    entity.polygon.extrudedHeight = entity.properties.HB_LIMIT;
		    height.push(Number(entity.properties.HB_LIMIT._value));
		  }else{entity.polygon.extrudedHeight =0;}

      }
    });
    this.Maximum=Math.max(...height);
  }

  checkHide(){
	if(this.CheckHide===true) {this.Hide();}else{this.onChangeHeight(this.HeightValue);this.onChangeColor(this.ColorValue);}
	if(this.CheckCom===true) {this.Commited();}else{this.onChangeHeight(this.HeightValue);this.onChangeColor(this.ColorValue);}
	if(this.CheckOcc===true) {this.Occupied();}else{this.onChangeHeight(this.HeightValue);this.onChangeColor(this.ColorValue);}
	this.dataService.CheckHide=this.CheckHide;
	this.dataService.CheckCom=this.CheckCom;
	this.dataService.CheckOcc=this.CheckOcc;
  }
  changeHide(){
  	this.CheckHide=!this.CheckHide;
  	this.dataService.CheckHide=this.CheckHide;
  }
  changeCom(){
  	this.CheckCom=!this.CheckCom;
  	this.dataService.CheckCom=this.CheckCom;
  }
  changeOcc(){
  	this.CheckOcc=!this.CheckOcc;
  	this.dataService.CheckOcc=this.CheckOcc;
  }

  Hide(){
  	this.cesiumpromise.then(function(dataSource) {
	  var entities = dataSource.entities.values;
	  for (var i = 0; i < entities.length; i++) {
	    var entity = entities[i];
		if(entity.properties.HIDE._value!==undefined&&entity.properties.HIDE._value===1){
	      entity.polygon.extrudedHeight = 0;
		  entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
		}
	  }
	});
  }
  Commited(){
  	this.cesiumpromise.then(function(dataSource) {
	  var entities = dataSource.entities.values;
	  for (var i = 0; i < entities.length; i++) {
	    var entity = entities[i];
		if(entity.properties.AVAILABLE._value==="COMMITTED"){
	      entity.polygon.extrudedHeight = 0;
		  entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
		}
	  }
	});
  }
  Occupied(){
  	this.cesiumpromise.then(function(dataSource) {
	  var entities = dataSource.entities.values;
	  for (var i = 0; i < entities.length; i++) {
	    var entity = entities[i];
		if(entity.properties.AVAILABLE._value==="OCCUPIED"){
	      entity.polygon.extrudedHeight = 0;
		  entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
		}
	  }
	});
  }
  select(){
  	var viewer=this.viewer;
  	if(this.selectEntity!==null) {this.ColorSelect(this.selectEntity);}
  	if(viewer.selectedEntity!==undefined&&viewer.selectedEntity.polygon!==null) {
      this.dataService.SelectedEntity=viewer.selectedEntity;
  		const material=viewer.selectedEntity.polygon.material;
  	  	viewer.selectedEntity.polygon.material=Cesium.Color.WHITE;
  		this.selectEntity=viewer.selectedEntity;
  		this.material=material;
  	}else{
  		this.selectEntity=null;
  		this.material=null;
  	}
  	
  }

  ColorSelect(entity){
  	if(this.ColorValue==="Status_Cat"){
  	  if(entity.properties.Status_Cat!==undefined){
		if(entity.properties.Status_Cat._value==="Available") entity.polygon.material=Cesium.Color.LIGHTCORAL.withAlpha(1);
		else if(entity.properties.Status_Cat._value==="Prime") entity.polygon.material=Cesium.Color.RED.withAlpha(1);
		else if(entity.properties.Status_Cat._value==="Remnant") entity.polygon.material=Cesium.Color.CORAL.withAlpha(1);
        else if(entity.properties.Status_Cat._value==="Estate under active master / infra planning") entity.polygon.material=Cesium.Color.CRIMSON.withAlpha(1);
		else if(entity.properties.Status_Cat._value==="0"||null) entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
		else {entity.polygon.material=Cesium.Color.ROYALBLUE.withAlpha(1);}
	  }
  	}else if(this.ColorValue==="DIST_EWL"){
  	  if(entity.properties.DIST_EWL!==undefined){
	    if(entity.properties.DIST_EWL>=715) entity.polygon.material=Cesium.Color.DARKCYAN .withAlpha(1);
	    else if(entity.properties.DIST_EWL>=451) entity.polygon.material=Cesium.Color.MEDIUMTURQUOISE.withAlpha(1);
	    else if(entity.properties.DIST_EWL>=286) entity.polygon.material=Cesium.Color.KHAKI.withAlpha(1);
	    else if(entity.properties.DIST_EWL>=181) entity.polygon.material=Cesium.Color.GOLD.withAlpha(1);
	    else if(entity.properties.DIST_EWL===0||null) entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
	    else entity.polygon.material=Cesium.Color.CORAL.withAlpha(1);
	  } 
  	}else if(this.ColorValue==="DIST_TRUNK"){
  	  if(entity.properties.DIST_TRUNK!==undefined){
	    if(entity.properties.DIST_TRUNK>=239) entity.polygon.material=Cesium.Color.DARKCYAN .withAlpha(1);
	    else if(entity.properties.DIST_TRUNK>=151) entity.polygon.material=Cesium.Color.MEDIUMTURQUOISE.withAlpha(1);
	    else if(entity.properties.DIST_TRUNK>=96) entity.polygon.material=Cesium.Color.KHAKI.withAlpha(1);
	    else if(entity.properties.DIST_TRUNK>=61) entity.polygon.material=Cesium.Color.GOLD.withAlpha(1);
	    else if(entity.properties.DIST_TRUNK===0||null) entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
	    else entity.polygon.material=Cesium.Color.CORAL.withAlpha(1);
	  } 
  	}else if(this.ColorValue==="AVAILABLE"){
  	  if(entity.properties.AVAILABLE!==undefined){
	    if(entity.properties.AVAILABLE._value==="AVAILABLE") entity.polygon.material=Cesium.Color.RED.withAlpha(1);
		else if(entity.properties.AVAILABLE._value==="COMMITTED") entity.polygon.material=Cesium.Color.ROYALBLUE.withAlpha(1);
		else if(entity.properties.AVAILABLE._value==="OCCUPIED") entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
	  }
  	}else if(this.ColorValue==="AGG_POT"){
  	  if(entity.properties.AGG_POT!==undefined){
	    if(entity.properties.AGG_POT>=0.79) entity.polygon.material=Cesium.Color.CORAL .withAlpha(1);
	    else if(entity.properties.AGG_POT>=0.67) entity.polygon.material=Cesium.Color.GOLD.withAlpha(1);
	    else if(entity.properties.AGG_POT>=0.56) entity.polygon.material=Cesium.Color.KHAKI.withAlpha(1);
	    else if(entity.properties.AGG_POT>=0.38) entity.polygon.material=Cesium.Color.MEDIUMTURQUOISE.withAlpha(1);
	    else if(entity.properties.AGG_POT===0||null) entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
	    else entity.polygon.material=Cesium.Color.DARKCYAN.withAlpha(1);
	  }
  	}else if(this.ColorValue==="GPR"){
  	  if(entity.properties.GPR!==undefined){
	      if(entity.properties.GPR._value==="0.0"||entity.properties.GPR._value===0.0||entity.properties.GPR._value===0||entity.properties.GPR._value===null) entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
		  else if(entity.properties.GPR._value==="0.9"||entity.properties.GPR._value===0.9||entity.properties.GPR._value==="1.0"||entity.properties.GPR._value==="1"||entity.properties.GPR._value===1.0||entity.properties.GPR._value===1
			||entity.properties.GPR._value==="1.4"||entity.properties.GPR._value===1.4||entity.properties.GPR._value==="1.7"||entity.properties.GPR._value===1.7) 
			entity.polygon.material=Cesium.Color.YELLOW.withAlpha(1);
		  else if(entity.properties.GPR._value==="2"||entity.properties.GPR._value==="2.0"||entity.properties.GPR._value===2.0||entity.properties.GPR._value===2||entity.properties.GPR._value==="2.1"||entity.properties.GPR._value===2.1||
			entity.properties.GPR._value==="2.3"||entity.properties.GPR._value===2.3||entity.properties.GPR._value==="2.5"||entity.properties.GPR._value===2.5||
			entity.properties.GPR._value==="2.8"||entity.properties.GPR._value===2.8) entity.polygon.material=Cesium.Color.DARKORANGE.withAlpha(1);
		  else if(entity.properties.GPR._value==="3.0"||entity.properties.GPR._value==="3"||entity.properties.GPR._value===3.0||entity.properties.GPR._value===3||entity.properties.GPR._value==="3.2"||entity.properties.GPR._value===3.2||
			entity.properties.GPR._value==="3.5"||entity.properties.GPR._value===3.5) entity.polygon.material=Cesium.Color.RED.withAlpha(1);
		  else {entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
		}
  	}else if(this.ColorValue==="HB_LIMIT"){
	  if(entity.properties.HB_LIMIT!==undefined){
	    if(entity.properties.HB_LIMIT>=93) entity.polygon.material=Cesium.Color.RED.withAlpha(1);
	    else if(entity.properties.HB_LIMIT>=86) entity.polygon.material=Cesium.Color.ORANGERED.withAlpha(1);
	    else if(entity.properties.HB_LIMIT>=77) entity.polygon.material=Cesium.Color.DARKORANGE.withAlpha(1);
	    else if(entity.properties.HB_LIMIT>=63) entity.polygon.material=Cesium.Color.YELLOW.withAlpha(1);
	    else if(entity.properties.HB_LIMIT===0||null) entity.polygon.material=Cesium.Color.WHITE.withAlpha(1);
	    else entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
	  }
  	}
  	if(this.CheckHide===true){
  	  if(entity.properties.HIDE._value!==undefined&&entity.properties.HIDE._value===1){
	  	entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
	  }
  	}

  }*/