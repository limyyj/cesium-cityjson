import { Component, OnInit, Injector, ElementRef ,NgModule} from '@angular/core';
import {DataSubscriber} from "../data/DataSubscriber";
//import { AngularSplitModule } from 'angular-split';
import { DataService } from "../data/data.service";
import {ViewerComponent} from "../viewer/viewer.component";


@Component({
  selector: 'app-toolwindow',
  templateUrl: './toolwindow.component.html',
  styleUrls: ['./toolwindow.component.css']
})
export class ToolwindowComponent extends DataSubscriber implements OnInit{
  myElement;
  data:any;
  viewer:any;
  ID:any;
  PropertyNames:Array<string>;
  Properties:Array<any>;
  cesiumpromise:any;
  CheckHide:boolean;
  ColorValue:string;
  HeightValue:string;
  Colors:Array<string>;
  texts:Array<string>;
  Name:string;
  ColorStore:Array<string>;
  ColorNames:Array<string>;
  ColorKey:Array<any>;
  HeightKey:Array<any>;
  Max:number;
  Min:number;
  SelectedEntity:object;

  constructor(injector: Injector, myElement: ElementRef){
    super(injector);
    this.ColorStore=["LIGHTCORAL","RED","CORAL","CRIMSON","ROYALBLUE","AQUA","BROWN","CADETBLUE","CHARTREUSE",
            "DARKORCHID","DARKRED","DARKSEAGREEN","DARKTURQUOISE","DEEPPINK","FORESTGREEN","GOLDENROD","CRIMSON","CRIMSON"];
  }
 
  ngOnInit() {
    if(this.CheckHide == undefined) {
        this.CheckHide = false;
    } else {
      this.CheckHide=this.dataService.CheckHide;
    }
  	

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
    if(data["features"]!==undefined){
      this.PropertyNames=Object.getOwnPropertyNames(data["features"][0].properties);
      this.PropertyNames.sort();
      this.viewer=this.dataService.viewer;
    }
   
    
  }

  ngDoCheck(){
    if(this.viewer!==undefined&&this.dataService.SelectedEntity!==undefined){
       if(this.ID!==this.dataService.SelectedEntity._id){
          this.ID=this.dataService.SelectedEntity._id;
          this.Properties=[];
          for(var i=0;i<this.PropertyNames.length;i++){
            var Properties:any=[];
            Properties.Name=this.PropertyNames[i];
            Properties.Value=this.dataService.SelectedEntity.properties[this.PropertyNames[i]]._value;
            this.Properties.push(Properties);
          }
        }
    }
    if(this.viewer!==undefined){
      if(this.ColorValue!==this.dataService.ColorValue){
        this.ColorValue=this.dataService.ColorValue;
        this.ColorNames=this.dataService.propertyNames; 
        this.onChangeColor(this.ColorValue);
        
      }
      if(this.HeightValue!==this.dataService.HeightValue){
        this.HeightValue=this.dataService.HeightValue;
        this.HeightKey=this.dataService.HeightKey;
        this.onChangeHeight(this.HeightValue);
      }
    }
    
  }
  onChangeHeight(HeightValue){
    this.HeightValue=HeightValue;
    var texts=[];
    var promise=this.dataService.cesiumpromise;
    for(var j=0;j<this.HeightKey.length;j++){
      if(this.HeightValue===this.HeightKey[j]){
        var self= this;
        promise.then(function(dataSource) {
        var entities = dataSource.entities.values;
        for (var i = 0; i < entities.length; i++) {
          var entity = entities[i];
          if(entity.properties[self.HeightValue]!==undefined){
          if(entity.properties[self.HeightValue]._value!==" "){
            entity.polygon.extrudedHeight =entity.properties[self.HeightValue]._value;
            if(texts.length===0) {texts[0]=entity.properties[self.HeightValue]._value;}
            else{if(texts.indexOf(entity.properties[self.HeightValue]._value)===-1) texts.push(entity.properties[self.HeightValue]._value);}
            }
          }
        }
      });
      }
    }
    this.Max = Math.max.apply(Math, texts);
    this.Min= Math.min.apply(Math, texts);
    if(this.CheckHide===true) this.Hide();
    this.dataService.getHeightValue(this.HeightValue);
  }

  onChangeColor(ColorValue){
    this.ColorValue=ColorValue;
    var texts=[];
    this.ColorKey=[];
    var promise=this.dataService.cesiumpromise;
    for(var j=0;j<this.ColorNames.length;j++){
      if(this.ColorValue===this.ColorNames[j]){
        this.Name=this.ColorNames[j];
        var self= this;
        promise.then(function(dataSource) {
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
    if(typeof(texts[0])==="number") {
      this.texts=texts;
      var max = Math.max.apply(Math, texts);
      var min = Math.min.apply(Math, texts);
      var Colortext=[">="+(min+0.8*(max-min)).toFixed(2),(min+0.8*(max-min)).toFixed(2)+" - "+(min+0.6*(max-min)).toFixed(2),(min+0.6*(max-min)).toFixed(2)+" - "+(min+0.4*(max-min)).toFixed(2),
                 (min+0.4*(max-min)).toFixed(2)+" - "+(min+0.2*(max-min)).toFixed(2),"<="+(min+0.2*(max-min)).toFixed(2)];
      for(var j=0;j<Colortext.length;j++){
        var ColorKey:any=[];
        ColorKey.text=Colortext[j];
        ColorKey.color=this.ColorStore[j];
        this.ColorKey.push(ColorKey);
      }
      this.dataService.Colortexts=this.ColorKey;
      this.dataService.MaxColor=max;
      this.dataService.MinColor=min;
      this.colorByNum();
    }else{
      for(var j=0;j<texts.length;j++){
        var ColorKey:any=[];
        ColorKey.text=texts[j];
        ColorKey.color=this.ColorStore[j];
        this.ColorKey.push(ColorKey);
      }
      this.dataService.Colortexts=this.ColorKey;
      this.colorByCat();
    }
    if(this.CheckHide===true) this.Hide();
    this.dataService.getColorValue(this.ColorValue);
  }
  colorByNum(){
    var max = Math.max.apply(Math, this.texts);
    var min = Math.min.apply(Math, this.texts);
    var promise=this.dataService.cesiumpromise;
    var self= this;
    promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity=entities[i];
        if(entity.properties[self.ColorValue]!==undefined){
          if(entity.properties[self.ColorValue]>=min+0.8*(max-min)) entity.polygon.material=Cesium.Color.LIGHTCORAL.withAlpha(1);
          else if(entity.properties[self.ColorValue]>=min+0.6*(max-min)) entity.polygon.material=Cesium.Color.RED.withAlpha(1);
          else if(entity.properties[self.ColorValue]>=min+0.4*(max-min)) entity.polygon.material=Cesium.Color.CORAL.withAlpha(1);
          else if(entity.properties[self.ColorValue]>=min+0.2*(max-min)) entity.polygon.material=Cesium.Color.CRIMSON.withAlpha(1);
          else {entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
        }
      }
    });
  }

  colorByCat(){
    var Name=this.ColorValue;
    var texts=[];
    for(var i=0;i<this.ColorKey.length;i++){
      texts.push(this.ColorKey[i].text)
    }
    var promise=this.dataService.cesiumpromise;
    promise.then(function(dataSource) {
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
        else if(entity.properties[Name]._value===texts[10]){ entity.polygon.material=Cesium.Color.DARKRED.withAlpha(1);}
        else if(entity.properties[Name]._value===texts[11]){ entity.polygon.material=Cesium.Color.DARKSEAGREEN.withAlpha(1);}
        else if(entity.properties[Name]._value===texts[12]){ entity.polygon.material=Cesium.Color.DARKTURQUOISE.withAlpha(1);}
        else if(entity.properties[Name]._value===texts[13]){ entity.polygon.material=Cesium.Color.DEEPPINK.withAlpha(1);}
        else if(entity.properties[Name]._value===texts[14]){ entity.polygon.material=Cesium.Color.FORESTGREEN.withAlpha(1);}
        else if(entity.properties[Name]._value===texts[15]){ entity.polygon.material=Cesium.Color.GOLDENROD.withAlpha(1);}
        else if(entity.properties[Name]._value===texts[16]){ entity.polygon.material=Cesium.Color.CRIMSON.withAlpha(1);}
        else if(entity.properties[Name]._value===texts[17]){ entity.polygon.material=Cesium.Color.CRIMSON.withAlpha(1);}
        else{entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
      }
  });

  }

  checkHide(){
  if(this.CheckHide===true) {this.Hide();}else{this.onChangeHeight(this.HeightValue);this.onChangeColor(this.ColorValue);}
  this.dataService.CheckHide=this.CheckHide;
  }

  Hide(){
    var promise=this.dataService.cesiumpromise;
    var self=this;
    promise.then(function(dataSource) {
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
  changeHide(){
    this.CheckHide=!this.CheckHide;
    this.dataService.CheckHide=this.CheckHide;
  }

}