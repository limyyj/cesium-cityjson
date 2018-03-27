import { Component, OnInit } from '@angular/core'; 
import {DataService} from './mobius-cesium/data/data.service';
  
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})  
export class AppComponent { 
  public gs_dummy_data: any=undefined;//'https://raw.githubusercontent.com/wandererwillow/urbanenvironment/master/Data/Neighborhood%20Boundary%20Map_4326.json';
  

  constructor(private dataService: DataService){
    this.dataService.setGsModel(this.gs_dummy_data);

  }
  ngOnInit() {
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
}  