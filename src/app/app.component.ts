import { Component, OnInit } from '@angular/core'; 
import {DataService} from './mobius-cesium/data/data.service';
  
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})  
export class AppComponent { 
  public gs_dummy_data: any='https://raw.githubusercontent.com/wandererwillow/urbanenvironment/master/Data/Neighborhood%20Boundary%20Map_4326.json';
  

  constructor(private dataService: DataService){

  }
  ngOnInit() {
    this.LoadViewer();
  }

  handleFileSelect(evt) {
    var files = evt.target.files; // FileList object
    let fr = new FileReader();
    let self = this;
    fr.onload = function(text){ 
      let js_data = JSON.parse(text.target["result"]);
      self.gs_dummy_data = js_data;
      self.dataService.setGsModel(self.gs_dummy_data);
    };
    fr.readAsText(files[0]);
  }

  LoadViewer(){
    var viewer = new Cesium.Viewer('cesiumContainer');
    document.getElementsByClassName('cesium-viewer-bottom')[0].remove();
    document.getElementsByClassName('cesium-viewer-animationContainer')[0].remove();
    document.getElementsByClassName('cesium-viewer-timelineContainer')[0].remove();
    var promise= viewer.dataSources.add(Cesium.GeoJsonDataSource.load(this.gs_dummy_data, {//'https://raw.githubusercontent.com/wandererwillow/urbanenvironment/master/Data/Neighborhood%20Boundary%20Map_4326.json', {
      stroke: Cesium.Color.HOTPINK,
      fill: Cesium.Color.PINK.withAlpha(0.5),
      strokeWidth: 3
    }));
    viewer.flyTo(promise);
  }
  /*gs_dummy_data: any='https://raw.githubusercontent.com/wandererwillow/urbanenvironment/master/Data/Neighborhood%20Boundary%20Map_4326.json';
  fullscreenContainer: HTMLCollectionOf<Element>;
  selected = {
      feature: undefined,
      originalColor: new Cesium.Color()
  };
  highlighted = {
    feature: undefined,
    originalColor: new Cesium.Color()
  };
  selectedEntity = new Cesium.Entity();
  ngOnInit() {
    this.LoadViewer();
  }

  handleFileSelect(evt) {
    var files = evt.target.files; // FileList object
    let fr = new FileReader();
    let self = this;
    fr.onload = function(text){ 
      let js_data = JSON.parse(text.target["result"]);
      self.gs_dummy_data = js_data;
      self.LoadData(self.gs_dummy_data);
    };
    fr.readAsText(files[0]);
  }

  LoadViewer(){
    var viewer = new Cesium.Viewer('cesiumContainer');
    document.getElementsByClassName('cesium-viewer-bottom')[0].remove();
    document.getElementsByClassName('cesium-viewer-animationContainer')[0].remove();
    document.getElementsByClassName('cesium-viewer-timelineContainer')[0].remove();
    var promise= viewer.dataSources.add(Cesium.GeoJsonDataSource.load(this.gs_dummy_data, {//'https://raw.githubusercontent.com/wandererwillow/urbanenvironment/master/Data/Neighborhood%20Boundary%20Map_4326.json', {
      stroke: Cesium.Color.HOTPINK,
      fill: Cesium.Color.PINK.withAlpha(0.5),
      strokeWidth: 3
    }));
    viewer.flyTo(promise);
  }

  /*LoadData(gs_dummy_data){
    document.getElementsByClassName('cesium-viewer')[0].remove();
    var viewer = new Cesium.Viewer('cesiumContainer');  
    document.getElementsByClassName('cesium-viewer-bottom')[0].remove();
    document.getElementsByClassName('cesium-viewer-animationContainer')[0].remove();
    document.getElementsByClassName('cesium-viewer-timelineContainer')[0].remove();
    var promise = Cesium.GeoJsonDataSource.load(this.gs_dummy_data);
    promise.then(function(dataSource) {
      viewer.dataSources.add(dataSource);
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];                               
        entity.polygon.extrudedHeight = entity.properties.height;

        //var color:string=this.gs_dummy_data.features["features"][i]["properties"].roofColor;
        //entity.polygon.material.color._value= new Cesium.Color.fromCssColorString(color);//Cesium.Color.WHITE.withAlpha(0.8);//Cesium.Color.fromCssColorString("#425f51");
        entity.polygon.material = Cesium.Material.fromType(0.0, 0.0, 0.0, 1.0);
        //entity.polygon.material.uniforms.color = new Cesium.Color(1.0, 1.0, 0.0, 1.0);
        /*entity.polygon.material = Cesium.Material.fromType('Color');*/
        //entity.polygon.material.uniforms.color = Cesium.Color.fromCssColorString("#425f51");
        /*entity.polygon.outlineColor= Cesium.Color.BLACK;
      }
    });

    viewer.zoomTo(promise);
    var tileset=new Cesium.Cesium3DTileset({
      color: {
       /* conditions: [
          ["${height} >= 1000", "color(45, 0, 75, 0.5)"],
          ["${height} >= 800", "color(102, 71, 151)"],
          ["${height} >= 600", "color(170, 162, 204)"],
          ["${height} >= 400", "color(224, 226, 238)"],
          ["${height} >= 200", "color(252, 230, 200)"],
          ["${height} >= 100", "color(248, 176, 87)"],
          ["${height} >= 500", "color(198, 106, 11)"],
          ["true", "rgb(127, 59, 8)"]
        ]*/
      /*}
    });
    /*var style = new Cesium.Cesium3DTileStyle({
      color: {
        conditions: [
          ["${height} >= 1000", "rgba(45, 0, 75, 0.5)"],
          ["${height} >= 800", "rgb(102, 71, 151)"],
          ["${height} >= 600", "rgb(170, 162, 204)"],
          ["${height} >= 400", "rgb(224, 226, 238)"],
          ["${height} >= 200", "rgb(252, 230, 200)"],
          ["${height} >= 100", "rgb(248, 176, 87)"],
          ["${height} >= 500", "rgb(198, 106, 11)"],
          ["true", "rgb(127, 59, 8)"]
        ]
      }
    });
    tileset.style=style;*/
    /*viewer.scene.primitives.add(tileset);
  }

  // Information about the currently selected feature
  

  colorByHeight() {
    console.log("1");
    var tileset=new Cesium.Cesium3DTileSyle();
    tileset.style = new Cesium.Cesium3DTileStyle({
        color: {
            conditions: [
                ["${height} >= 300", "rgba(45, 0, 75, 0.5)"],
                ["${height} >= 200", "rgb(102, 71, 151)"],
                ["${height} >= 100", "rgb(170, 162, 204)"],
                ["${height} >= 50", "rgb(224, 226, 238)"],
                ["${height} >= 25", "rgb(252, 230, 200)"],
                ["${height} >= 10", "rgb(248, 176, 87)"],
                ["${height} >= 5", "rgb(198, 106, 11)"],
                ["true", "rgb(127, 59, 8)"]
            ]
        }
    });
  }
 /* MoveMouse(){
  viewer.screenSpaceEventHandler.setInputAction(function onMouseMove(movement) {
    // If a feature was previously highlighted, undo the highlight
    if (Cesium.defined(highlighted.feature)) {
        highlighted.feature.color = highlighted.originalColor;
        highlighted.feature = undefined;
    }

    // Pick a new feature
    var pickedFeature = viewer.scene.pick(movement.endPosition);
    if (!Cesium.defined(pickedFeature)) {
        nameOverlay.style.display = 'none';
        return;
    }

    // A feature was picked, so show it's overlay content
    nameOverlay.style.display = 'block';
    nameOverlay.style.bottom = viewer.canvas.clientHeight - movement.endPosition.y + 'px';
    nameOverlay.style.left = movement.endPosition.x + 'px';
    var name = pickedFeature.getProperty('name');
    if (!Cesium.defined(name)) {
        name = pickedFeature.getProperty('id');
    }
    nameOverlay.textContent = name;

    // Highlight the feature if it's not already selected.
    if (pickedFeature !== selected.feature) {
        highlighted.feature = pickedFeature;
        Cesium.Color.clone(pickedFeature.color, highlighted.originalColor);
        pickedFeature.color = Cesium.Color.YELLOW;
    }
  }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
}*/
}  