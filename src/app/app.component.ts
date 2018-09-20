import { Component, OnInit } from "@angular/core";
import {DataService} from "./mobius-cesium/data/data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public gs_dummy_data: any=undefined;
  public mode: string;

  constructor(private dataService: DataService) {
    // this.dataService.setGsModel(this.gs_dummy_data);
  }

  public handleFileSelect(evt) {
    const files = evt.target.files; // FileList object
    evt = null;
    // const filetype = files[0].type;
    // console.log(filetype);
    const fr = new FileReader();
    const self = this;
    fr.onload = function(text) {
      // if (filetype === "application/json") {
      const js_data = JSON.parse(text.target["result"]);
       self.gs_dummy_data = js_data;
      // }
      // else {
      //   const parser = new DOMParser();
      //   const xmlDoc = parser.parseFromString(text.target["result"],"application/xml");
      //   // console.log(xmlDoc);
      //   self.gs_dummy_data = xmlDoc;
      // }
      // self.dataService.setGsModel(self.gs_dummy_data);
      // self.gs_dummy_data = text;
    };
    fr.readAsText(files[0]);
  }
  
}
