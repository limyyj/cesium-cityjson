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
  HideNum:Array<string>;
  RelaHide:Array<number>;
  HeightHide:Array<string>;
  textHide:Array<number>;
  HideMax:Array<number>;
  HideMin:Array<number>;
  Maxtext:number;
  Mintext:number;

  constructor(injector: Injector, myElement: ElementRef){
    super(injector);
    this.ChromaScale=chroma.scale("SPECTRAL");
    this.HideNum=[];
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

  hideElementArr = [];
  addHide(){
    var lastnumber:string;
    if(this.HideNum.length===0) {this.HideNum[0]="0";lastnumber=this.HideNum[0]}
    else{
      for(var i=0;i<this.HideNum.length+1;i++){
        if(this.HideNum.indexOf(String(i))===-1){
          this.HideNum.push(String(i));
          lastnumber=String(i);
          break;
        }
      }
    }
    var texts=this.Initial();
    this.hideElementArr.push({divid:String("addHide".concat(String(lastnumber))),id: lastnumber,HeightHide:this.HeightKey[0],RelaHide:0,textHide: Math.ceil(Math.max.apply(Math, texts)),
                              HideMax:Math.ceil(Math.max.apply(Math, texts)),HideMin:Math.round(Math.min.apply(Math, texts)*100)/100});
    return;
  }
  deleteHide(event){
    var index=this.HideNum.indexOf(event);
    var divid=String("addHide".concat(String(event)));
    var addHide=document.getElementById(divid);
    var hidecontainer=document.getElementsByClassName("hide-container")[0];
    hidecontainer.removeChild(addHide);
    if(this.hideElementArr[index].RelaHide==="0") this.hideElementArr[index].textHide=this.hideElementArr[index].HideMax;
    if(this.hideElementArr[index].RelaHide==="1") this.hideElementArr[index].textHide=this.hideElementArr[index].HideMin;
    this.hideElementArr.splice(index,1);
    this.HideNum.splice(index,1);
    console.log(this.hideElementArr,this.HideNum);
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
    console.log(HeightHide,RelaHide);
    var index=this.HideNum.indexOf(id);
    this.hideElementArr[index].HeightHide=HeightHide;
    this.hideElementArr[index].RelaHide=RelaHide;
    var texts=[];
    var promise=this.dataService.cesiumpromise;
    var self= this;
    promise.then(function(dataSource) {
    var entities = dataSource.entities.values;
    for (var i = 0; i < entities.length; i++) {
      var entity = entities[i];
      if(entity.properties[HeightHide]!==undefined){
        if(entity.properties[HeightHide]._value!==" "){
          if(texts.length===0) {texts[0]=entity.properties[HeightHide]._value;}
          else{if(texts.indexOf(entity.properties[HeightHide]._value)===-1) texts.push(entity.properties[HeightHide]._value);}
          }
        }
      }
    });
    this.hideElementArr[index].HideMax=Math.ceil(Math.max.apply(Math, texts));
    this.hideElementArr[index].HideMin=Math.round(Math.min.apply(Math, texts)*100)/100;
    if(RelaHide==="0"||RelaHide===0) this.hideElementArr[index].textHide=this.hideElementArr[index].HideMax;
    if(RelaHide==="1"||RelaHide===1) this.hideElementArr[index].textHide=this.hideElementArr[index].HideMin;
    this.Hide();
  }
  Changetext(value,id){
    var index=this.HideNum.indexOf(id);
    this.hideElementArr[index].textHide=value;
    this.Hide();
  }

  _compare(value: number, slider: number, relation: number): boolean {
    switch (relation) {
      case 0:
        return value > slider;
      case 1:
        return value < slider;
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
    for(var j=0;j<this.hideElementArr.length;j++){
      if(this.hideElementArr[j]!==undefined){
        propertyname.push(this.hideElementArr[j].HeightHide);
        relation.push(Number(this.hideElementArr[j].RelaHide));
        text.push(Number(this.hideElementArr[j].textHide));
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