import { Component, OnInit, Injector, ElementRef ,NgModule} from '@angular/core';
import {DataSubscriber} from "../data/DataSubscriber";
import { DataService } from "../data/data.service";
import {ViewerComponent} from "../viewer/viewer.component";
import * as chroma from "chroma-js";

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.css']
})
export class AttributesComponent extends DataSubscriber implements OnInit{
  myElement;
  constructor(injector: Injector, myElement: ElementRef) { 
  	super(injector);
  }
  ngOnInit() {
    
  }
  notify(message: string): void{
  }
}