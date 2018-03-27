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
        entity.polygon.extrudedHeight = entity.properties.HB_LIMIT;
        entity.polygon.material = Cesium.Color.WHITE.withAlpha(1);
		entity.polygon.outline = false;
      }
    });
    viewer.zoomTo(promise);
	//this.colorByHeight(promise,viewer);
	this.cesiumviewer=viewer;
	this.cesiumpromise=promise;
  }

  onChange(deviceValue){
  	if(deviceValue==="Height"){
  	  this.colorByHeight(this.cesiumpromise,this.cesiumviewer);
  	}else if(deviceValue==="Area"){

  	}else if(deviceValue==="Distance"){

  	}

  }

  colorByHeight(promise,viewer) {
  	promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        entity.polygon.material=null; 
	    if(entity.properties.HB_LIMIT>=100) entity.polygon.material=Cesium.Color.GREEN.withAlpha(1);
	    else if(entity.properties.HB_LIMIT>=80) entity.polygon.material=Cesium.Color.RED.withAlpha(1);
	    else if(entity.properties.HB_LIMIT>=60) entity.polygon.material=Cesium.Color.GOLD.withAlpha(1);
	    else if(entity.properties.HB_LIMIT>=40) entity.polygon.material=Cesium.Color.HOTPINK.withAlpha(1);
	    else if(entity.properties.HB_LIMIT>=20) entity.polygon.material=Cesium.Color.LIGHTSLATEGREY.withAlpha(1);
	    else entity.polygon.material=Cesium.Color.WHITE.withAlpha(1);
      }
    });
  }

}