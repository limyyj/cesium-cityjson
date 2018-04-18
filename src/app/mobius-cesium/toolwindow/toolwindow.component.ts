import { Component, OnInit, Injector, ElementRef ,NgModule} from '@angular/core';
import {DataSubscriber} from "../data/DataSubscriber";
//import { AngularSplitModule } from 'angular-split';
import { DataService } from "../data/data.service";
import {ViewerComponent} from "../viewer/viewer.component";
import chroma =require("chroma-js");


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
  ColorFeature:any;
  ChromaScale:any;
  ColorNames:Array<string>;
  ColorKey:Array<any>;
  HeightKey:Array<any>;
  Max:number;
  Min:number;
  SelectedEntity:object;
  ScaleValue:number=1000;
  CheckScale:boolean=true;
  HideNum:Array<number>;
  RelaHide:Array<number>;
  HeightHide:Array<string>;
  textHide:Array<number>;
  HideMax:Array<number>;
  HideMin:Array<number>;

  constructor(injector: Injector, myElement: ElementRef){
    super(injector);
    /*this.ColorStore= ["LIGHTCORAL","RED","CORAL","CRIMSON","ROYALBLUE","AQUA","BROWN","CADETBLUE","CHARTREUSE",
            "DARKORCHID","DARKRED","DARKSEAGREEN","DARKTURQUOISE","DEEPPINK","FORESTGREEN","GOLDENROD","CRIMSON","CRIMSON"];*/
    this.ChromaScale=chroma.scale("SPECTRAL");
    //this.ColorFeature=this.ChromaScale(0.2);
    //console.log(this.ColorFeature);
    this.HeightHide=[undefined,undefined,undefined];
    this.RelaHide=[undefined,undefined,undefined];
    this.textHide=[undefined,undefined,undefined];
    this.HideMax=[undefined,undefined,undefined];
    this.HideMin=[undefined,undefined,undefined];
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
        this.ColorNames.sort();
        this.onChangeColor(this.ColorValue);
        
      }
      if(this.HeightValue!==this.dataService.HeightValue){
        this.HeightValue=this.dataService.HeightValue;
        this.HeightKey=this.dataService.HeightKey;
        this.HeightKey.sort();
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
    this.changescale(this.ScaleValue)
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
      var range:number=12;
      var Colortext:any=[];
      Colortext.push(">="+(min+((range-1)/range)*(max-min)).toFixed(2));
      for(var i=range-2;i>0;i--){
        Colortext.push((min+(i/range)*(max-min)).toFixed(2)+" - "+(min+((i+1)/range)*(max-min)).toFixed(2));
      }
      /*var Colortext=[">="+(min+0.8*(max-min)).toFixed(2),(min+0.8*(max-min)).toFixed(2)+" - "+(min+0.6*(max-min)).toFixed(2),(min+0.6*(max-min)).toFixed(2)+" - "+(min+0.4*(max-min)).toFixed(2),
                 (min+0.4*(max-min)).toFixed(2)+" - "+(min+0.2*(max-min)).toFixed(2),"<="+(min+0.2*(max-min)).toFixed(2)];*/
      Colortext.push("<="+(min+(1/range)*(max-min)).toFixed(2))
      for(var j=0;j<Colortext.length;j++){
        var ColorKey:any=[];
        ColorKey.text=Colortext[j];
        //ColorKey.color=this.ColorStore[j];
        var Color=this.ChromaScale((j/Colortext.length).toFixed(2));
        ColorKey.color=Color;
        this.ColorKey.push(ColorKey);
      }
      this.dataService.Colortexts=this.ColorKey;
      this.dataService.MaxColor=max;
      this.dataService.MinColor=min;
      this.colorByNum();
    }else{
      this.texts=texts;
      for(var j=0;j<texts.length;j++){
        var ColorKey:any=[];
        ColorKey.text=texts[j];
        //ColorKey.color=this.ColorStore[j];
        var Color=this.ChromaScale((j/texts.length).toFixed(2));
        ColorKey.color=Color;
        this.ColorKey.push(ColorKey);
      }
      this.dataService.Colortexts=this.ColorKey;
      this.colorByCat();
    }
    this.Hide();
    this.dataService.getColorValue(this.ColorValue);
  }
  colorByNum(){
    var max = Math.max.apply(Math, this.texts);
    var min = Math.min.apply(Math, this.texts);
    var promise=this.dataService.cesiumpromise;
    var ChromaScale=this.ChromaScale;
    var ColorKey=this.ColorKey;
    var range=ColorKey.length;
    var self= this;
    promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity=entities[i];
        if(entity.properties[self.ColorValue]!==undefined){
          for(var j=1;j<range;j++){
            if(entity.properties[self.ColorValue]._value>=(min+(j/range)*(max-min)).toFixed(2)){
            var rgb=ColorKey[range-j].color._rgb;
            entity.polygon.material=Cesium.Color.fromBytes(rgb[0],rgb[1],rgb[2]);
            }else if(entity.properties[self.ColorValue]._value<(min+(1/range)*(max-min)).toFixed(2)){
              var rgb=ColorKey[range-1].color._rgb;
              entity.polygon.material=Cesium.Color.fromBytes(rgb[0],rgb[1],rgb[2]);
            }
          }
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
    var ChromaScale=this.ChromaScale;
    var promise=this.dataService.cesiumpromise;
    promise.then(function(dataSource) {
    var self= this;
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties[Name]!==undefined){
          var initial:boolean=false;
          for(var j=0;j<texts.length;j++){
            if(entity.properties[Name]._value===texts[j]) {
              var rgb=ChromaScale((j/texts.length).toFixed(2));
              entity.polygon.material=entity.polygon.material=Cesium.Color.fromBytes(rgb._rgb[0],rgb._rgb[1],rgb._rgb[2]);
              initial=true;
            }
          }
          if(initial===false){
            entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
          }
        }
      }
  });

  }

  changescale(ScaleValue){
    this.ScaleValue=ScaleValue;
    var scale:number=this.ScaleValue/this.Max;
    if(this.CheckScale===true){
      var promise=this.dataService.cesiumpromise;
      var self= this;
      promise.then(function(dataSource) {
        var entities = dataSource.entities.values;
        for (var i = 0; i < entities.length; i++) {
          var entity=entities[i];
          if(entity.properties[self.HeightValue]!==undefined){
          if(entity.properties[self.HeightValue]._value!==" "){
            entity.polygon.extrudedHeight =entity.properties[self.HeightValue]._value*scale;
          }
          }
        }
      });
      this.Hide();
    }else{
      var promise=this.dataService.cesiumpromise;
      var self= this;
      promise.then(function(dataSource) {
        var entities = dataSource.entities.values;
        for (var i = 0; i < entities.length; i++) {
          var entity=entities[i];
          if(entity.properties[self.HeightValue]!==undefined){
          if(entity.properties[self.HeightValue]._value!==" "){
            entity.polygon.extrudedHeight =entity.properties[self.HeightValue]._value;
          }
          }
        }
      });
    }
  }
  checkscale(){
    this.CheckScale=!this.CheckScale;
  }

  /*checkHide(){
    if(this.CheckHide===true) {this.Hide();}else{this.onChangeHeight(this.HeightValue);this.onChangeColor(this.ColorValue);}
    //this.dataService.CheckHide=this.CheckHide;
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
    //this.dataService.CheckHide=this.CheckHide;
  }*/

  addHide(){
    /*var addHide=document.getElementById("addHide");
    addHide.innerHTML=""*/
    // const addHide=document.getElementsByClassName("addHide")[0];
    // var clone = addHide.cloneNode(true);
    // clone["style"].display=null;
    // clone["id"]="addHide"+this.HideNum;
    // var number=this.HideNum-1;
    // var buttons = document.getElementById(String(number));
    // buttons.onclick=this.deleteHide;
    // console.log(buttons);
    // addHide.parentNode.appendChild(clone);
    var texts=this.Initial();
    for(var i=0;i<3;i++){
      var addHide=document.getElementById("addHide"+i);
      if(addHide["style"].display==="none"){
        addHide["style"].display=null;
        if(this.HeightKey!==undefined){
          if(this.HeightHide[i] === undefined) {
            this.HeightHide[i] = this.HeightKey[0];
          }
          if(this.RelaHide[i] === undefined) {
            this.RelaHide[i] = 0;
          }
          if(this.textHide[i] == undefined) {
            this.textHide[i] = Math.round(Math.min.apply(Math, texts)*100)/100;
            this.HideMax[i]=Math.ceil(Math.max.apply(Math, texts));
            this.HideMin[i]=Math.round(Math.min.apply(Math, texts)*100)/100;
          }
        }
        break;
      }
    }
  }
  deleteHide(event){
    var addHide=document.getElementById("addHide"+event);
    addHide["style"].display="none";
    this.textHide[event] = this.HideMin[event];
    this.Hide();
  }

  Initial():Array<any>{
    var texts=[];
    var promise=this.dataService.cesiumpromise;
    var self= this;
    promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties[self.HeightKey[0]]!==undefined){
          if(entity.properties[self.HeightKey[0]]._value!==" "){
            if(texts.length===0) {texts[0]=entity.properties[self.HeightKey[0]]._value;}
            else{if(texts.indexOf(entity.properties[self.HeightKey[0]]._value)===-1) texts.push(entity.properties[self.HeightKey[0]]._value);}
          }
        }
      }
    });
    return texts;
  }

  Changerelation(HeightHide,RelaHide,id){
    this.HeightHide[id]=HeightHide;
    this.RelaHide[id]=RelaHide;
    var texts=[];
    var promise=this.dataService.cesiumpromise;
    for(var j=0;j<this.HeightKey.length;j++){
      if(this.HeightHide[id]===this.HeightKey[j]){
        var self= this;
        promise.then(function(dataSource) {
        var entities = dataSource.entities.values;
        for (var i = 0; i < entities.length; i++) {
          var entity = entities[i];
          if(entity.properties[self.HeightHide[id]]!==undefined){
          if(entity.properties[self.HeightHide[id]]._value!==" "){
            if(texts.length===0) {texts[0]=entity.properties[self.HeightHide[id]]._value;}
            else{if(texts.indexOf(entity.properties[self.HeightHide[id]]._value)===-1) texts.push(entity.properties[self.HeightHide[id]]._value);}
            }
          }
        }
      });
      }
    }
    this.HideMax[id] = Math.ceil(Math.max.apply(Math, texts));
    this.HideMin[id]= Math.round(Math.min.apply(Math, texts)*100)/100;
    this.textHide[id]=this.HideMin[id];
    this.Hide();
  }
  Changetext(event){
    this.textHide[0]=event;
    this.Hide();
  }
  Changetext1(event){
    this.textHide[1]=event;
    this.Hide();
  }
  Changetext2(event){
    this.textHide[2]=event;
    this.Hide();
  }

  _compare(value: number, slider: number, relation: number): boolean {
    switch (relation) {
      case 0:
        return value < slider;
      case 1:
        return value > slider;
      case 2:
        return value === slider;
    }
  }


  Hide(){
    var promise=this.dataService.cesiumpromise;
    var propertyname:any=[];
    var relation:any=[];
    var text:any=[];
    var scale:number=this.ScaleValue/this.Max;
    for(var j=0;j<3;j++){
      if(this.HeightHide[j]!==undefined){
        propertyname.push(this.HeightHide[j]);
        relation.push(Number(this.RelaHide[j]));
        text.push(Number(this.textHide[j]));
      }
    }
    var self=this;
    promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        for (let j = 0; j < propertyname.length; j++) {
          const value = entity.properties[propertyname[j]]._value;
          if(value !== undefined){
            if (self._compare(value, text[j], relation[j])) {
              entity.polygon.extrudedHeight = 0;
              entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
              break;
            }else{
              self.ColorByNumCat(entity);
              if(self.CheckScale===true){
                entity.polygon.extrudedHeight =entity.properties[self.HeightValue]._value*scale;
              }else{
                entity.polygon.extrudedHeight =entity.properties[self.HeightValue]._value;
              }
            }

          }
        }
      }
    });

  }

  ColorByNumCat(entity){
    var ChromaScale=this.ChromaScale;
    var ColorKey=this.ColorKey;
    var range=ColorKey.length;
    var self=this;
    if(typeof(self.texts[0])==="number") {
      var max = Math.max.apply(Math, self.texts);
      var min = Math.min.apply(Math, self.texts);
      var ChromaScale=self.ChromaScale;
      for(var j=1;j<range;j++){
        if(entity.properties[self.ColorValue]._value>=(min+(j/range)*(max-min)).toFixed(2)){
        var rgb=ColorKey[range-j].color._rgb;
        entity.polygon.material=Cesium.Color.fromBytes(rgb[0],rgb[1],rgb[2]);
        }else if(entity.properties[self.ColorValue]._value<(min+(1/range)*(max-min)).toFixed(2)){
          var rgb=ColorKey[range-1].color._rgb;
          entity.polygon.material=Cesium.Color.fromBytes(rgb[0],rgb[1],rgb[2]);
        }
      }
    }else{
      var Colortexts=self.dataService.Colortexts;
      var initial:boolean=false;
      for(var j=0;j<Colortexts.length;j++){
        if(entity.properties[self.ColorValue]._value===Colortexts[j].text) {
          var rgb=ChromaScale((j/Colortexts.length).toFixed(2));
          entity.polygon.material=entity.polygon.material=Cesium.Color.fromBytes(rgb._rgb[0],rgb._rgb[1],rgb._rgb[2]);
          initial=true;
        }
      }
      if(initial===false){
        entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
      }
    }

  }

}