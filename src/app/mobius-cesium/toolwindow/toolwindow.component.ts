import { Component, OnInit, Injector, ElementRef ,NgModule} from '@angular/core';
import {DataSubscriber} from "../data/DataSubscriber";
import { DataService } from "../data/data.service";
import {ViewerComponent} from "../viewer/viewer.component";
import * as chroma from "chroma-js";

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
  CheckOpp:boolean;
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
  ScaleValue:number;
  CheckScale:boolean;
  CheckExtrude:boolean;
  HideNum:Array<string>;
  RelaHide:Array<number>;
  Maxtext:number;
  Mintext:number;
  HideValue:string;
  HideType:string;
  selectColor:string;
  selectHeight:string;
  Filter:boolean=false;
  HeightMin:number;
  HeightMax:number;
  InitialTool:boolean=false;

  constructor(injector: Injector, myElement: ElementRef){
    super(injector);
    this.ChromaScale=chroma.scale("SPECTRAL");
    this.HideNum=[];
    this.ScaleValue=this.dataService.ScaleValue;
    this.CheckScale=this.dataService.CheckScale;
    this.CheckOpp=this.dataService.CheckOpp;
    if(this.dataService.HideNum!==undefined) {
      this.HideNum=this.dataService.HideNum;
      this.hideElementArr=this.dataService.hideElementArr;
    }
  }
 
  ngOnInit() {
  }

  notify(message: string): void{
    if(message == "model_update" ){
      this.data=undefined;
      this.viewer=undefined;
      this.data = this.dataService.getGsModel(); 
      try{
        if(this.data!==undefined&&this.data["features"]!==undefined){
          if(this.data["cesium"]===undefined){
              this.LoadData(this.data);
              this.InitialTool=true;
          }else{
            this.InitialTool=false;
          }
        }
      }
      catch(ex){
        console.log(ex);
      }
    }
  }

  LoadData(data:JSON){
    if(data!==undefined){
      if(data["features"]!==undefined){
        this.PropertyNames=Object.getOwnPropertyNames(data["features"][0].properties);
        this.PropertyNames.sort();
        this.viewer=this.dataService.viewer;
      }
    }
  }

  ngDoCheck(){
    if(this.viewer!==undefined&&this.dataService.SelectedEntity!==undefined&&this.InitialTool===true){
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
    if(this.viewer!==undefined&&this.InitialTool===true){
     if(this.ColorValue!==this.dataService.ColorValue||this.ColorNames!==this.dataService.propertyNames){
        this.ColorValue=this.dataService.ColorValue;
        this.ColorNames=this.dataService.propertyNames;
        this.ColorNames.sort();
        this.ColorNames=["None"].concat(this.ColorNames);
        this.dataService.propertyNames=this.ColorNames;
        this.selectColor=this.ColorValue;
        this.onChangeColor(this.ColorValue);
      }
      if(this.HeightValue!==this.dataService.HeightValue||this.HeightKey!==this.dataService.HeightKey){
        this.HeightValue=this.dataService.HeightValue;
        this.HeightKey=this.dataService.HeightKey;
        this.HeightKey.sort();
        this.HeightKey=["None"].concat(this.HeightKey);
        this.dataService.HeightKey=this.HeightKey;
        this.selectHeight=this.HeightValue;
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
      }else if(this.HeightValue==="None"){
        var self= this;
        promise.then(function(dataSource) {
        var entities = dataSource.entities.values;
        for (var i = 0; i < entities.length; i++) {
          var entity = entities[i];
          entity.polygon.extrudedHeight =0;
        }
      });
      }
    }
    /*this.Max = Math.max.apply(Math, texts);
    this.Min= Math.min.apply(Math, texts);*/
    this.HeightMax= Math.max.apply(Math, texts);
    this.HeightMin=Math.min.apply(Math, texts);

    //if(this.CheckHide===true) this.Hide();
    this.changescale(this.ScaleValue);
    /*if(this.CheckScale!==undefined&&this.CheckOpp!==undefined&&this.CheckExtrude!==undefined){
      this.changeExtrude();
    }*/
    this.Hide();
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
      }else if(this.ColorValue==="None"){
        var self= this;
        promise.then(function(dataSource) {
        var entities = dataSource.entities.values;
        for (var i = 0; i < entities.length; i++) {
          var entity = entities[i];
          if(entity.polygon!==undefined) entity.polygon.material=Cesium.Color.White;
          if(entity.polyline!==undefined) entity.polyline.material=Cesium.Color.Black;
        }
      });

      }
    }
    if(typeof(texts[0])==="number") {
      this.texts=texts;
      var max = Math.max.apply(Math, texts);
      var min = Math.min.apply(Math, texts);
      for(var j=0;j<texts.length;j++){
        var ColorKey:any=[];
        var Color=this.ChromaScale(Number(((max-texts[j])/(max-min)).toFixed(2)));
        ColorKey.color=Color;
        ColorKey.text=texts[j];
        this.ColorKey.push(ColorKey);
      }
      this.dataService.Colortexts=this.ColorKey;
      this.dataService.MaxColor=max;
      this.dataService.MinColor=min;
      this.Max=max;
      this.Min=min;
      this.colorByNum();
    }else if(typeof(texts[0])==="string"){
      this.texts=texts;
      for(var j=0;j<texts.length;j++){
        var ColorKey:any=[];
        ColorKey.text=texts[j];
        var Color=this.ChromaScale((j/texts.length).toFixed(2));
        ColorKey.color=Color;
        this.ColorKey.push(ColorKey);
      }
      this.dataService.Colortexts=this.ColorKey;
      this.colorByCat();
      this.Max=null;
      this.Min=null;
    }
    /*if(this.CheckScale!==undefined&&this.CheckOpp!==undefined&&this.CheckExtrude!==undefined){
      this.changeExtrude();
    }*/
    //this.changeExtrude();
    /*if(this.data.crs.cesium!==undefined&&this.data.crs.cesium.length!==0){
      this.addHide();
    }*/
    if(this.dataService.hideElementArr===undefined||this.dataService.hideElementArr.length===0){
      this.changeExtrude();
    }else{
      this.Hide();
    }
    
    this.dataService.getColorValue(this.ColorValue);
  }

  changeColorMin(Min){
    this.Min=Number(Min);
    this.dataService.MinColor=Number(Min);
    //this.changeExtrude();
    //this.Hide();
    if(this.dataService.hideElementArr===undefined||this.dataService.hideElementArr.length===0){
      this.changeExtrude();
    }else{
      this.Hide();
    }
  }
  changeColorMax(Max){
    this.Max=Number(Max);
    this.dataService.MaxColor=Number(Max);
    //this.changeExtrude();
    //this.Hide();
    if(this.dataService.hideElementArr===undefined||this.dataService.hideElementArr.length===0){
      this.changeExtrude();
    }else{
      this.Hide();
    }
  }

  changeHeightMin(Min){
    this.HeightMin=Number(Min);
    this.dataService.MinHeight=Number(Min);
    //this.changeExtrude();
    //this.Hide();
    if(this.dataService.hideElementArr===undefined||this.dataService.hideElementArr.length===0){
      this.changeExtrude();
    }else{
      this.Hide();
    }
  }
  changeHeightMax(Max){
    this.HeightMax=Number(Max);
    this.dataService.MaxHeight=Number(Max);
    //this.changeExtrude();
    /*console.log(this.dataService.hideElementArr);
    this.Hide();*/
    if(this.dataService.hideElementArr===undefined||this.dataService.hideElementArr.length===0){
      this.changeExtrude();
    }else{
      this.Hide();
    }
  }

  colorByNum(){
    var max = this.dataService.MaxColor;
    var min=this.dataService.MinColor;
    var promise=this.dataService.cesiumpromise;
    var ChromaScale=this.ChromaScale;
    //var ColorKey=this.ColorKey;
    //var range=ColorKey.length;
    var self= this;
    promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      //console.log(entities);
      for (var i = 0; i < entities.length; i++) {
        var entity=entities[i];
        if(entity.properties[self.ColorValue]!==undefined){
          var texts=entity.properties[self.ColorValue]._value;
          var rgb=self.ChromaScale(Number(((max-texts)/(max-min)).toFixed(2)))._rgb;
          if(entity.polygon!==undefined) entity.polygon.material=Cesium.Color.fromBytes(rgb[0],rgb[1],rgb[2]);
          if(entity.polyline!==undefined) entity.polyline.material=Cesium.Color.fromBytes(rgb[0],rgb[1],rgb[2]);
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
              if(entity.polygon!==undefined){
                entity.polygon.material=Cesium.Color.fromBytes(rgb._rgb[0],rgb._rgb[1],rgb._rgb[2]);
              }
              if(entity.polyline!==undefined){
                entity.polyline.material=Cesium.Color.fromBytes(rgb._rgb[0],rgb._rgb[1],rgb._rgb[2]);
              }
              initial=true;
            }
          }
          if(initial===false){
            if(entity.polygon!==undefined){
              entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
            }
            if(entity.polyline!==undefined){
              entity.polyline.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
            }
          }
        }
      }
  });

  }

  changescale(ScaleValue){
    //var Max=Math.max.apply(Math, this.texts);
    var Max=this.HeightMax;
    this.ScaleValue=Number(ScaleValue);
    /*var scale:number=this.ScaleValue;
    if(this.CheckScale===true){
      var promise=this.dataService.cesiumpromise;
      var self= this;
      if(self.CheckOpp===false){
        promise.then(function(dataSource) {
          var entities = dataSource.entities.values;
          for (var i = 0; i < entities.length; i++) {
            var entity=entities[i];
            if(entity.properties[self.HeightValue]!==undefined){
            if(entity.properties[self.HeightValue]._value!==" "){
              entity.polygon.extrudedHeight =Math.min(entity.properties[self.HeightValue]._value,Max)*scale;
            }
            }
          }
        });
      }else{
        promise.then(function(dataSource) {
          var entities = dataSource.entities.values;
          for (var i = 0; i < entities.length; i++) {
            var entity=entities[i];
            if(entity.properties[self.HeightValue]!==undefined){
            if(entity.properties[self.HeightValue]._value!==" "){
              entity.polygon.extrudedHeight =(Max-Math.min((entity.properties[self.HeightValue]._value),Max))*scale;
            }
            }
          }
        });
      }
      /*this.Hide();*/
    /*}else{
      var promise=this.dataService.cesiumpromise;
      var self= this;
      if(self.CheckOpp===false){
        promise.then(function(dataSource) {
          var entities = dataSource.entities.values;
          for (var i = 0; i < entities.length; i++) {
            var entity=entities[i];
            if(entity.properties[self.HeightValue]!==undefined){
            if(entity.properties[self.HeightValue]._value!==" "){
              entity.polygon.extrudedHeight =Math.min(entity.properties[self.HeightValue]._value,Max);
            }
            }
          }
        });
      }else{
        promise.then(function(dataSource) {
          var entities = dataSource.entities.values;
          for (var i = 0; i < entities.length; i++) {
            var entity=entities[i];
            if(entity.properties[self.HeightValue]!==undefined){
            if(entity.properties[self.HeightValue]._value!==" "){
              entity.polygon.extrudedHeight =Max-Math.min((entity.properties[self.HeightValue]._value),Max);
            }
            }
          }
        });
      }
    }*/
    //this.changeExtrude();
    /*if(this.CheckScale!==undefined&&this.CheckOpp!==undefined&&this.CheckExtrude!==undefined){
      this.changeExtrude();
    }else{
      //this.ScaleValue=Number(ScaleValue);
      var scale:number=this.ScaleValue;
      if(this.CheckScale===true){
        var promise=this.dataService.cesiumpromise;
        var self= this;
        if(self.CheckOpp===false){
          promise.then(function(dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
              var entity=entities[i];
              if(entity.properties[self.HeightValue]!==undefined){
              if(entity.properties[self.HeightValue]._value!==" "){
                entity.polygon.extrudedHeight =Math.min(entity.properties[self.HeightValue]._value,Max)*scale;
              }
              }
            }
          });
        }else{
          promise.then(function(dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
              var entity=entities[i];
              if(entity.properties[self.HeightValue]!==undefined){
              if(entity.properties[self.HeightValue]._value!==" "){
                entity.polygon.extrudedHeight =(Max-Math.min((entity.properties[self.HeightValue]._value),Max))*scale;
              }
              }
            }
          });
        }
        /*this.Hide();*/
      /*}else{
        var promise=this.dataService.cesiumpromise;
        var self= this;
        if(self.CheckOpp===false){
          promise.then(function(dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
              var entity=entities[i];
              if(entity.properties[self.HeightValue]!==undefined){
              if(entity.properties[self.HeightValue]._value!==" "){
                entity.polygon.extrudedHeight =Math.min(entity.properties[self.HeightValue]._value,Max);
              }
              }
            }
          });
        }else{
          promise.then(function(dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
              var entity=entities[i];
              if(entity.properties[self.HeightValue]!==undefined){
              if(entity.properties[self.HeightValue]._value!==" "){
                entity.polygon.extrudedHeight =Max-Math.min((entity.properties[self.HeightValue]._value),Max);
              }
              }
            }
          });
        }
      }
    }*/
    if(this.dataService.hideElementArr===undefined||this.dataService.hideElementArr.length===0){
      this.changeExtrude();
    }else{
      this.Hide();
    }
    //this.Hide();
    this.dataService.ScaleValue=this.ScaleValue;
  }
  checkscale(){
    this.CheckScale=!this.CheckScale;
    this.dataService.CheckScale=this.CheckScale;
  }

  hideElementArr = [];
  addHide(){
    var lastnumber:string;
   /* if(this.data.crs.cesium!==undefined&&this.data.crs.cesium.length!==0){
      if(this.Filter===false){
        for(var i=0;i<this.data.crs.cesium.Filter.length;i++){
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
          var propertyname=this.data.crs.cesium.Filter[i].name;
          var relation=Number(this.data.crs.cesium.Filter[i].relation);
          var text=this.data.crs.cesium.Filter[i].text;
          if(typeof(text)==="number"){this.HideType="number";var texts=this.Initial(propertyname);}else if(typeof(text)==="string"){this.HideType="category";var texts=this.Initial(propertyname);}
          this.hideElementArr.push({divid:String("addHide".concat(String(lastnumber))),id: lastnumber,HeightHide:propertyname,type:this.HideType,Category:texts,CategaryHide:text,RelaHide:relation,textHide: text,
                                HideMax:Math.ceil(Math.max.apply(Math, texts)),HideMin:Math.round(Math.min.apply(Math, texts)*100)/100});
        }

      }
      this.Hide();
    }*/
    //if(this.Filter===true){
    if(this.dataService.HideNum!==undefined) {this.HideNum=this.dataService.HideNum;this.hideElementArr=this.dataService.hideElementArr;}
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
      if(this.HideValue===undefined) this.HideValue=this.ColorNames[0];
      var texts=this.Initial(this.HideValue);
      if(typeof(texts[0])==="number"){this.HideType="number"}else if(typeof(texts[0])==="string"){this.HideType="category";}
      this.hideElementArr.push({divid:String("addHide".concat(String(lastnumber))),id: lastnumber,HeightHide:this.HideValue,type:this.HideType,Category:texts,CategaryHide:texts[0],RelaHide:0,textHide: Math.round(Math.min.apply(Math, texts)*100)/100,
                                HideMax:Math.ceil(Math.max.apply(Math, texts)),HideMin:Math.round(Math.min.apply(Math, texts)*100)/100});
      
      //return;
    //}
    this.dataService.hideElementArr=this.hideElementArr;
    this.dataService.HideNum=this.HideNum;
    this.Filter=true;
  }

  deleteHide(event){
    var index=this.HideNum.indexOf(event);
    var divid=String("addHide".concat(String(event)));
    var addHide=document.getElementById(divid);
    var hidecontainer=document.getElementsByClassName("hide-container")[0];
    hidecontainer.removeChild(addHide);
    if(this.hideElementArr[index].type==="number"){
      if(this.hideElementArr[index].RelaHide==="0"||this.hideElementArr[index].RelaHide===0) this.hideElementArr[index].textHide=this.hideElementArr[index].HideMin;
      if(this.hideElementArr[index].RelaHide==="1"||this.hideElementArr[index].RelaHide===1) this.hideElementArr[index].textHide=this.hideElementArr[index].HideMax;
    }else if(this.hideElementArr[index].type==="category"){
      this.hideElementArr[index].RelaHide=0;
    }
    this.Hide();
    this.hideElementArr.splice(index,1);
    this.HideNum.splice(index,1);
    this.dataService.hideElementArr=this.hideElementArr;
    this.dataService.HideNum=this.HideNum;
  }

  Initial(HideValue):Array<any>{
    var texts=[];
    var promise=this.dataService.cesiumpromise;
    var self= this;
    promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties[HideValue]!==undefined){
          if(entity.properties[HideValue]._value!==" "){
            if(texts.length===0) {texts[0]=entity.properties[HideValue]._value;}
            else{if(texts.indexOf(entity.properties[HideValue]._value)===-1) texts.push(entity.properties[HideValue]._value);}
          }
        }
      }
    });
    return texts;
  }

  ChangeHeight(HeightHide){
    this.HideValue=HeightHide;
  }

  Changerelation(RelaHide,id){
    var index=this.HideNum.indexOf(id);
    var HeightHide=this.hideElementArr[index].HeightHide;
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
    if(RelaHide==="0"||RelaHide===0) this.hideElementArr[index].textHide=this.hideElementArr[index].HideMin;
    if(RelaHide==="1"||RelaHide===1) this.hideElementArr[index].textHide=this.hideElementArr[index].HideMax;
    this.Hide();
    this.dataService.hideElementArr=this.hideElementArr;
  }

  ChangeCategory(categary,id,type){
    var scale:number=this.ScaleValue/this.Max;
    var index=this.HideNum.indexOf(id);
    var promise=this.dataService.cesiumpromise;
    if(type===1){
      this.hideElementArr[index].CategaryHide=categary;
    }
    if(type===0){
      this.hideElementArr[index].RelaHide=Number(categary);
    }
    this.Hide();
    this.dataService.hideElementArr=this.hideElementArr;
  }


  Changetext(value,id){
    var index=this.HideNum.indexOf(id);
    this.hideElementArr[index].textHide=value;
    this.Hide();
    this.dataService.hideElementArr=this.hideElementArr;
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
  _compareCat(value: string, Categary:string,relation: number): boolean {
    switch (relation) {
      case 0:
        return value ===  undefined;
      case 1:
        return value !== Categary;
      case 2:
        return value === Categary;
    }
  }


  Hide(){
    var promise=this.dataService.cesiumpromise;
    var propertyname:any=[];
    var relation:any=[];
    var text:any=[];
    var scale:number=this.ScaleValue;
    var Max=this.HeightMax;
    for(var j=0;j<this.hideElementArr.length;j++){
      if(this.hideElementArr[j]!==undefined){
        propertyname.push(this.hideElementArr[j].HeightHide);
        relation.push(Number(this.hideElementArr[j].RelaHide));
        if(this.hideElementArr[j].type==="number"){
          text.push(Number(this.hideElementArr[j].textHide));
        }else if(this.hideElementArr[j].type==="category"){
          text.push(String(this.hideElementArr[j].CategaryHide));
        }
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
            if(typeof(value)==="number"){
              if (self._compare(value, text[j], relation[j])) {
                if(entity.polygon!==undefined){
                  entity.polygon.extrudedHeight = 0;
                  entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                  if(self.CheckExtrude===true){
                    if(entity.polyline.show!==undefined) entity.polyline.show=false;
                  }
                  break;
                }
                if(entity.polyline!==undefined)  entity.polyline.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
              }else{
                self.ColorByNumCat(entity);
                if(self.CheckScale===true){
                  if(self.CheckOpp===true){
                    if(self.CheckExtrude===true){
                      var center=self.dataService.poly_center[i];
                      entity.polyline=new Cesium.PolylineGraphics({
                        positions:new Cesium.Cartesian3.fromDegreesArrayHeights([center[0],center[1],0,center[0],center[1],(Math.min((Max-entity.properties[self.HeightValue]._value),Max))*scale]),
                        width:center[2],
                        material:entity.polygon.material,
                        show:true
                      })
                    }else{
                      entity.polygon.extrudedHeight =(Math.min((Max-entity.properties[self.HeightValue]._value),Max))*scale;//(self.HeightMax-entity.properties[self.HeightValue]._value)*scale;
                    }
                  }else{
                    if(self.CheckExtrude===true){
                      var center=self.dataService.poly_center[i];
                      entity.polyline=new Cesium.PolylineGraphics({
                        positions:new Cesium.Cartesian3.fromDegreesArrayHeights([center[0],center[1],0,center[0],center[1],(Math.min((entity.properties[self.HeightValue]._value),Max))*scale]),
                        width:center[2],
                        material:entity.polygon.material,
                        show:true
                      })
                    }else{
                      entity.polygon.extrudedHeight =(Math.min((entity.properties[self.HeightValue]._value),Max))*scale;//entity.properties[self.HeightValue]._value*scale;
                    }
                  }
                }
                else{
                  if(self.CheckOpp===true){
                    if(self.CheckExtrude===true){
                      var center=self.dataService.poly_center[i];
                      entity.polyline=new Cesium.PolylineGraphics({
                        positions:new Cesium.Cartesian3.fromDegreesArrayHeights([center[0],center[1],0,center[0],center[1],(Math.min((Max-entity.properties[self.HeightValue]._value),Max))]),
                        width:center[2],
                        material:entity.polygon.material,
                        show:true
                      })
                    }else{
                      entity.polygon.extrudedHeight =(Math.min((Max-entity.properties[self.HeightValue]._value),Max));//self.HeightMax-entity.properties[self.HeightValue]._value;
                    }
                    
                  }else{
                    if(self.CheckExtrude===true){
                      var center=self.dataService.poly_center[i];
                      entity.polyline=new Cesium.PolylineGraphics({
                        positions:new Cesium.Cartesian3.fromDegreesArrayHeights([center[0],center[1],0,center[0],center[1],(Math.min((entity.properties[self.HeightValue]._value),Max))]),
                        width:center[2],
                        material:entity.polygon.material,
                        show:true
                      })
                    }else{
                      entity.polygon.extrudedHeight =(Math.min(entity.properties[self.HeightValue]._value,Max));
                    }
                    
                  }
                }
              }
            }else if(typeof(value)==="string"){
              if (self._compareCat(value, text[j], relation[j])) {
                if(entity.polygon!==undefined){
                  entity.polygon.extrudedHeight = 0;
                  entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                  if(self.CheckExtrude===true){
                    if(entity.polyline.show!==undefined) entity.polyline.show=false;
                  }
                  break;
                }
                if(entity.polyline!==undefined) entity.polyline.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
              }else{
                self.ColorByNumCat(entity);
                if(self.CheckScale===true){
                  if(self.CheckOpp===true){
                    if(self.CheckExtrude===true){
                      var center=self.dataService.poly_center[i];
                      entity.polyline=new Cesium.PolylineGraphics({
                        positions:new Cesium.Cartesian3.fromDegreesArrayHeights([center[0],center[1],0,center[0],center[1],(Math.min((Max-entity.properties[self.HeightValue]._value),Max))*scale]),
                        width:center[2],
                        material:entity.polygon.material,
                        show:true
                      })
                    }else{
                    entity.polygon.extrudedHeight =(self.HeightMax-entity.properties[self.HeightValue]._value)*scale;
                    }
                  }else{
                    if(self.CheckExtrude===true){
                      var center=self.dataService.poly_center[i];
                      entity.polyline=new Cesium.PolylineGraphics({
                        positions:new Cesium.Cartesian3.fromDegreesArrayHeights([center[0],center[1],0,center[0],center[1],(Math.min((entity.properties[self.HeightValue]._value),Max))*scale]),
                        width:center[2],
                        material:entity.polygon.material,
                        show:true
                      })
                    }else{
                      entity.polygon.extrudedHeight =Math.min((entity.properties[self.HeightValue]._value),Max)*scale;
                    }
                  }
                }
                else{
                  if(self.CheckOpp===true){
                    if(self.CheckExtrude===true){
                      var center=self.dataService.poly_center[i];
                      entity.polyline=new Cesium.PolylineGraphics({
                        positions:new Cesium.Cartesian3.fromDegreesArrayHeights([center[0],center[1],0,center[0],center[1],(Math.min((Max-entity.properties[self.HeightValue]._value),Max))]),
                        width:center[2],
                        material:entity.polygon.material,
                        show:true
                      })
                    }else{
                      entity.polygon.extrudedHeight =(Math.min((Max-entity.properties[self.HeightValue]._value),Max));//self.HeightMax-entity.properties[self.HeightValue]._value;
                    }
                  }else{
                    if(self.CheckExtrude===true){
                      var center=self.dataService.poly_center[i];
                      entity.polyline=new Cesium.PolylineGraphics({
                        positions:new Cesium.Cartesian3.fromDegreesArrayHeights([center[0],center[1],0,center[0],center[1],(Math.min(entity.properties[self.HeightValue]._value,Max))]),
                        width:center[2],
                        material:entity.polygon.material,
                        show:true
                      })
                    }else{
                      entity.polygon.extrudedHeight =Math.min(entity.properties[self.HeightValue]._value,Max);//entity.properties[self.HeightValue]._value;
                    }
                  }
                }
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
      //var max = Math.max.apply(Math, self.texts);
      //var min = Math.min.apply(Math, self.texts);
      var max = this.dataService.MaxColor;
      var min=this.dataService.MinColor;
      var ChromaScale=self.ChromaScale;
      var texts=entity.properties[self.ColorValue]._value;
      var rgb=self.ChromaScale(Number(((max-texts)/(max-min)).toFixed(2)))._rgb;
      if(entity.polygon!==undefined) entity.polygon.material=Cesium.Color.fromBytes(rgb[0],rgb[1],rgb[2]);
      if(entity.polyline!==undefined) entity.polyline.material=Cesium.Color.fromBytes(rgb[0],rgb[1],rgb[2]);
      /*for(var j=1;j<range;j++){
        if(entity.properties[self.ColorValue]._value>=(min+(j/range)*(max-min)).toFixed(2)){
        var rgb=ColorKey[range-j].color._rgb;
        entity.polygon.material=Cesium.Color.fromBytes(rgb[0],rgb[1],rgb[2]);
        }else if(entity.properties[self.ColorValue]._value<(min+(1/range)*(max-min)).toFixed(2)){
          var rgb=ColorKey[range-1].color._rgb;
          entity.polygon.material=Cesium.Color.fromBytes(rgb[0],rgb[1],rgb[2]);
        }
      }*/

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

  


  changeopp(){
    /*var Max=this.HeightMax;
    var scale:number=Number(this.ScaleValue);
    if(this.CheckOpp===true){
      var promise=this.dataService.cesiumpromise;
      var self= this;
      if(self.CheckScale===true){
        //var scale:number=self.ScaleValue;
        if(self.CheckExtrude===false){
          promise.then(function(dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
              var entity=entities[i];
              entity.polylin.show=false;
              if(entity.properties[self.HeightValue]!==undefined){
                if(entity.properties[self.HeightValue]._value!==" "){
                  entity.polygon.extrudedHeight =(Math.min((self.HeightMax-entity.properties[self.HeightValue]._value),Max))*scale;
                }
              }
            }
          });
        }else{
          promise.then(function(dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
              var entity=entities[i];
              if(entity.properties[self.HeightValue]!==undefined){
                if(entity.properties[self.HeightValue]._value!==" "){
                  entity.polygon.extrudedHeight =(Math.min(Max-entity.properties[self.HeightValue]._value,Max))*scale;
                }
              }
            }
          });
        }
      }else{
        promise.then(function(dataSource) {
          var entities = dataSource.entities.values;
          for (var i = 0; i < entities.length; i++) {
            var entity=entities[i];
            if(entity.properties[self.HeightValue]!==undefined){
            if(entity.properties[self.HeightValue]._value!==" "){
              entity.polygon.extrudedHeight =Math.min(Max-entity.properties[self.HeightValue]._value,Max);
            }
            }
          }
        });
      }
    }else{
      this.changescale(this.ScaleValue);
    }*/
    
    //this.changeExtrude();
    //this.Hide();
    if(this.dataService.hideElementArr===undefined||this.dataService.hideElementArr.length===0){
      this.changeExtrude();
    }else{
      this.Hide();
    }
  }

  checkopp(){
    this.CheckOpp=!this.CheckOpp;
    this.dataService.CheckOpp=this.CheckOpp;
    /*this.changeExtrude();*/
    //this.Hide();
    if(this.dataService.hideElementArr===undefined||this.dataService.hideElementArr.length===0){
      this.changeExtrude();
    }else{
      this.Hide();
    }
  }

  changeExtrude(){
    if(typeof(this.texts[0])==="number"){
      this.colorByNum();
    }
    //var Max=Math.max.apply(Math, this.texts);
    var Max=this.HeightMax;
    var scale:number=Number(this.ScaleValue);
    if(this.CheckExtrude===true){
      if(this.CheckScale===true){
        if(this.CheckOpp===true){
          var promise=this.dataService.cesiumpromise;
          var self= this;
          promise.then(function(dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
              var entity=entities[i];
              entity.polygon.extrudedHeight=0;
              var center=self.dataService.poly_center[i];
              entity.polyline=new Cesium.PolylineGraphics({
                positions:new Cesium.Cartesian3.fromDegreesArrayHeights([center[0],center[1],0,center[0],center[1],(Max-Math.min((entity.properties[self.HeightValue]._value),Max))*scale]),
                width:center[2],
                material:entity.polygon.material,
                show:true
              })
            }
          });
        }else{
          var promise=this.dataService.cesiumpromise;
          var self= this;
          promise.then(function(dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
              var entity=entities[i];
              entity.polygon.extrudedHeight=0;
              var center=self.dataService.poly_center[i];
              entity.polyline=new Cesium.PolylineGraphics({
                positions:new Cesium.Cartesian3.fromDegreesArrayHeights([center[0],center[1],0,center[0],center[1],(Math.min(entity.properties[self.HeightValue]._value,Max))*scale]),
                width:center[2],
                material:entity.polygon.material,
                show:true
              })
            }
          });
        }
      }else{
        if(this.CheckOpp===true){
          var promise=this.dataService.cesiumpromise;
          var self= this;
          promise.then(function(dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
              var entity=entities[i];
              entity.polygon.extrudedHeight=0;
              var center=self.dataService.poly_center[i];
              entity.polyline=new Cesium.PolylineGraphics({
                positions:new Cesium.Cartesian3.fromDegreesArrayHeights([center[0],center[1],0,center[0],center[1],(Max-Math.min((entity.properties[self.HeightValue]._value),Max))]),
                width:center[2],
                material:entity.polygon.material,
                show:true
              })
            }
          });
        }else{
          var promise=this.dataService.cesiumpromise;
          var self= this;
          promise.then(function(dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
              var entity=entities[i];
              entity.polygon.extrudedHeight=0;
              var center=self.dataService.poly_center[i];
              entity.polyline=new Cesium.PolylineGraphics({
                positions:new Cesium.Cartesian3.fromDegreesArrayHeights([center[0],center[1],0,center[0],center[1],(Math.min(entity.properties[self.HeightValue]._value,Max))]),
                width:center[2],
                material:entity.polygon.material,
                show:true
              })
            }
          });
        }
      }
    }else{
      
      var promise=this.dataService.cesiumpromise;
      var self= this;
      /*promise.then(function(dataSource) {
        var entities = dataSource.entities.values;
        for (var i = 0; i < entities.length; i++) {
          var entity=entities[i];
          entity.polyline.show=false;*/
          if(self.CheckScale===true){
            if(self.CheckOpp===true){
              promise.then(function(dataSource) {
                var entities = dataSource.entities.values;
                for (var i = 0; i < entities.length; i++) {
                  var entity=entities[i];
                  if(entity.polyline!==undefined) entity.polyline.show=false;
                  entity.polygon.extrudedHeight =(Max-Math.min((entity.properties[self.HeightValue]._value),Max))*scale;
                }
              });
            }else{
              promise.then(function(dataSource) {
                var entities = dataSource.entities.values;
                for (var i = 0; i < entities.length; i++) {
                  var entity=entities[i];
                  if(entity.polyline!==undefined) entity.polyline.show=false;
                  entity.polygon.extrudedHeight =(Math.min(entity.properties[self.HeightValue]._value,Max))*scale;
                }
              });
            }
          }
          else{
            if(self.CheckOpp===true){
              promise.then(function(dataSource) {
                var entities = dataSource.entities.values;
                for (var i = 0; i < entities.length; i++) {
                  var entity=entities[i];
                  if(entity.polyline!==undefined) entity.polyline.show=false;
                  entity.polygon.extrudedHeight =(Max-Math.min((entity.properties[self.HeightValue]._value),Max));
                }
              });
            }else{
              promise.then(function(dataSource) {
                var entities = dataSource.entities.values;
                for (var i = 0; i < entities.length; i++) {
                  var entity=entities[i];
                  if(entity.polyline!==undefined) entity.polyline.show=false;
                  entity.polygon.extrudedHeight =(Math.min(entity.properties[self.HeightValue]._value,Max));
                }
              });
            }
          }
        }
      /*});


    }*/
    

  }
  checkExtrude(){
    this.CheckExtrude=!this.CheckExtrude;
    this.dataService.CheckExtrude=this.CheckExtrude;

  }

}