import { Component, OnInit, Injector, ElementRef ,NgModule} from "@angular/core";
import {DataSubscriber} from "../data/DataSubscriber";
import { DataService } from "../data/data.service";
import {ViewerComponent} from "../viewer/viewer.component";
import * as chroma from "chroma-js";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./attributes.component.css"],
})
export class AboutComponent { 

	constructor(private dataService: DataService) { }

	public handleExamples(id) {
		const path = "./assets/examples/" + id;
    const readfile = new Promise(function(resolve) {
      let val = "";
      const xhttp = new XMLHttpRequest();
      xhttp.onload = function() {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
          val = xhttp.responseText;
          resolve(val);
        }
      };
      xhttp.open("GET", path, true);
      xhttp.send();
    });

    readfile.then((file) => {
    	const data = this.parseFile(file);
    	this.dataService.setGsModel(data);
      document.getElementById("overlay").style.display = "block";
    	document.getElementById("loader").style.display = "block";
    });
  }

  public parseFile(file): any {
  	const filetype = file.type;
    let data: any;
    try {
      const js_data = JSON.parse(file);
      data = js_data;
    } catch {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(file,"application/xml");
      data = xmlDoc;
    }
    return data;
  }
}
