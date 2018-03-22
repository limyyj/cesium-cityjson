import { Component, OnInit } from '@angular/core';  
  
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})  
export class AppComponent {  
  gs_dummy_data: any='https://raw.githubusercontent.com/wandererwillow/urbanenvironment/master/Data/Neighborhood%20Boundary%20Map_4326.json';
  fullscreenContainer: HTMLCollectionOf<Element>;
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

  LoadData(gs_dummy_data){
    document.getElementsByClassName('cesium-viewer')[0].remove();
    var viewer = new Cesium.Viewer('cesiumContainer');  
    document.getElementsByClassName('cesium-viewer-bottom')[0].remove();
    document.getElementsByClassName('cesium-viewer-animationContainer')[0].remove();
    document.getElementsByClassName('cesium-viewer-timelineContainer')[0].remove();

    //document.getElementsByClassName('cesium-viewer-fullscreenContainer')[0].remove();
    /*var promise= viewer.dataSources.add(Cesium.GeoJsonDataSource.load(gs_dummy_data, {
      stroke: Cesium.Color.HOTPINK,
      fill: Cesium.Color.PINK.withAlpha(0.5),
      strokeWidth: 3
    }));
    viewer.flyTo(promise);*/
    // Create an initial camera view
    /*var initialPosition = new Cesium.Cartesian3.fromDegrees(-73.998114468289017509, 40.674512895646692812, 2631.082799425431);
    var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(7.1077496389876024807, -31.987223091598949054, 0.025883251314954971306);
    var homeCameraView = {
        destination : initialPosition,
        orientation : {
            heading : initialOrientation.heading,
            pitch : initialOrientation.pitch,
            roll : initialOrientation.roll
        }
    };
    // Set the initial view
    viewer.scene.camera.setView(homeCameraView);
    // 1. create a polygon from points
    var city = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
        url: 'https://beta.cesium.com/api/assets/1461?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkYWJmM2MzNS02OWM5LTQ3OWItYjEyYS0xZmNlODM5ZDNkMTYiLCJpZCI6NDQsImFzc2V0cyI6WzE0NjFdLCJpYXQiOjE0OTkyNjQ3NDN9.vuR75SqPDKcggvUrG_vpx0Av02jdiAxnnB1fNf-9f7s',
        maximumScreenSpaceError: 16 // default value
    }));
    // Adjust the tileset height so its not floating above terrain
    var heightOffset = -32;
    city.readyPromise.then(function(tileset) {
        // Position tileset
        var boundingSphere = tileset.boundingSphere;
        var cartographic = Cesium.Cartographic.fromCartesian(boundingSphere.center);
        var surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0.0);
        var offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, heightOffset);
        var translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3());
        tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation);
    });
    var defaultStyle = new Cesium.Cesium3DTileStyle({
    color : "color('white')",
    show : true
    });
    city.style = defaultStyle;*/
    
    var promise = Cesium.GeoJsonDataSource.load(this.gs_dummy_data);
    promise.then(function(dataSource) {
      viewer.dataSources.add(dataSource);
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];                               
        entity.polygon.extrudedHeight = entity.properties.height;
        entity.polygon.material= Cesium.Color.WHITE.withAlpha(0.8);//Cesium.Color.fromCssColorString(color);//
        entity.polygon.outlineColor= Cesium.Color.BLACK;
      }
    });
    viewer.zoomTo(promise);
  }
}  