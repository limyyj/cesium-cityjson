import { Component, OnInit, Input } from '@angular/core';
import {DataService} from './data/data.service';

@Component({
  selector: 'mobius-cesium',
  templateUrl: './mobius-cesium.component.html',
  styleUrls: ['./mobius-cesium.component.scss']
})
export class MobiuscesiumComponent {
	@Input() data: any;

	constructor(private dataService: DataService){

	}
	setModel(data: any): void{
		try{
			this.dataService.setGsModel(data);
		}
		catch(ex){
			this.data = undefined;
			console.error("Error generating model");
		}
	}
	ngOnInit() {
		this.setModel(this.data);

	}


}