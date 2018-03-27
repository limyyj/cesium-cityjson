import { Component, OnInit, Input } from '@angular/core';
import {DataService} from './data/data.service';

@Component({
  selector: 'mobius-cesium',
  templateUrl: './mobius-cesium.component.html',
  styleUrls: ['./mobius-cesium.component.scss']
})
export class MobiuscesiumComponent {
	@Input() data: JSON;

	constructor(private dataService: DataService){

  	};
	setModel(data: JSON): void{
		try{
			this.dataService.setGsModel(data);
		}
		catch(ex){
			this.data = undefined;
			//console.error("Error generating model");
		}
	}
	ngOnInit() {
		this.setModel(this.data);

	}
	ngDoCheck(){
		if(this.dataService.getGsModel() !== this.data){
			this.setModel(this.data);
		}
	}

	/*LoadViewer(){
    var viewer = new Cesium.Viewer('cesiumContainer');
    document.getElementsByClassName('cesium-viewer-bottom')[0].remove();
    document.getElementsByClassName('cesium-viewer-animationContainer')[0].remove();
    document.getElementsByClassName('cesium-viewer-timelineContainer')[0].remove();
    var promise= viewer.dataSources.add(Cesium.GeoJsonDataSource.load(this.data, {//'https://raw.githubusercontent.com/wandererwillow/urbanenvironment/master/Data/Neighborhood%20Boundary%20Map_4326.json', {
      stroke: Cesium.Color.HOTPINK,
      fill: Cesium.Color.PINK.withAlpha(0.5),
      strokeWidth: 3
    }));
    viewer.flyTo(promise);
  }*/


}