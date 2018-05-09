import { Component, OnInit, Injector, ElementRef ,NgModule} from '@angular/core';
import {DataSubscriber} from "../data/DataSubscriber";
import { DataService } from "../data/data.service";
import {ViewerComponent} from "../viewer/viewer.component";
import * as chroma from "chroma-js";

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent extends DataSubscriber implements OnInit{
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
  ceisumData:Array<any>;
  HeightMin:number;
  HeightMax:number;
  HeightInti:boolean=false;
  ColorInti:boolean=false;
  InitialTool:boolean=false;
  CheckDisable:boolean=false;

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
          if(this.data["cesium"]!==undefined){
            this.LoadData(this.data);
            this.InitialTool=false;

          }else{
            this.InitialTool=true;
          }
          
        }
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
      if(this.data["cesium"]!==undefined){
        this.LoadJSONData();
      }     
    } 
  }

  LoadJSONData(){
    var cesiumData=this.data["cesium"];
    var data:any=[];
    this.ceisumData=[];
    this.ColorNames=[];
    this.HeightKey=[];
    if(cesiumData["colour"]!==undefined&&cesiumData["colour"]["attribs"]!==undefined){
      for(var i=0;i<cesiumData["colour"]["attribs"].length;i++){
        this.ColorNames.push(cesiumData["colour"]["attribs"][i]["name"]);
      }
      this.ColorValue=this.ColorNames[0];
    }
    if(cesiumData["extrude"]!==undefined&&cesiumData["extrude"]["attribs"]!==undefined){
      for(var i=0;i<cesiumData["extrude"]["attribs"].length;i++){
        this.HeightKey.push(cesiumData["extrude"]["attribs"][i]["name"]);
      }
      this.HeightValue=this.HeightKey[0];
    }
    if(cesiumData["colour"]!==undefined){
      if(cesiumData["colour"].descr!==undefined) data.colorDescr=cesiumData["colour"].descr;
      if(cesiumData["colour"]["attribs"]!==undefined){
        data.colorDefault=cesiumData["colour"]["attribs"][0]["name"];
        if(cesiumData["colour"]["attribs"][0]["min"]!==undefined) {data.colorMin=cesiumData["colour"]["attribs"][0]["min"];}
        if(cesiumData["colour"]["attribs"][0]["max"]!==undefined) {data.colorMax=cesiumData["colour"]["attribs"][0]["max"];}
        if(cesiumData["colour"]["attribs"][0]["invert"]===true){data.colorInvert=true;this.ChromaScale=chroma.scale("SPECTRAL").domain([1,0]);}else{data.colorInvert=false;this.ChromaScale=chroma.scale("SPECTRAL").domain([0,1]);}
      }
    }
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
    if(cesiumData["extrude"]!==undefined){
      if(cesiumData["extrude"].descr!==undefined) data.heightDescr=cesiumData["extrude"].descr;
      if(cesiumData["extrude"]["attribs"]!==undefined){
        data.heightDefault=cesiumData["extrude"]["attribs"][0]["name"];
      if(cesiumData["extrude"]["attribs"][0]["min"]!==undefined) {data.heightMin=cesiumData["extrude"]["attribs"][0]["min"];}else{data.heightMin=Math.min.apply(Math, texts);}
        if(cesiumData["extrude"]["attribs"][0]["max"]!==undefined) {data.heightMax=cesiumData["extrude"]["attribs"][0]["max"];}else{data.heightMax=Math.max.apply(Math, texts);}
        if(cesiumData["extrude"]["attribs"][0]["invert"]===true) {data.heightInvert=true;}else{data.heightInvert=false;}
        if(cesiumData["extrude"]["attribs"][0]["line"]===true) {data.heightLine=true;}else{data.heightLine=false;}
        if(cesiumData["extrude"]["attribs"][0]["scale"]!==undefined) {data.heightScale=cesiumData["extrude"]["attribs"][0]["scale"];}else{data.heightScale=1;}
      }
    }
    this.dataService.MinColor=data.colorMin;
    this.dataService.MaxColor=data.colorMax;
    this.dataService.MinHeight=data.heightMin;
    this.dataService.MaxHeight=data.heightMax;
    this.dataService.ChromaScale=this.ChromaScale;
    if(data.heightLine!==undefined){
      this.CheckExtrude=data.heightLine;
    }else{this.CheckExtrude=false;}
    this.dataService.CheckExtrude=this.CheckExtrude;
    if(data.heightInvert!==undefined){
      this.CheckOpp=data.heightInvert;
    }else{this.CheckOpp=false;}
    this.dataService.CheckOpp=this.CheckOpp;
    if(data.heightScale!==undefined){
      this.ScaleValue=data.heightScale;
    }else{this.ScaleValue=1;}
    this.dataService.ScaleValue=this.ScaleValue;
    this.dataService.propertyNames=this.ColorNames;
    this.dataService.ColorValue=this.ColorValue;
    this.dataService.HeightKey=this.HeightKey;
    this.dataService.HeightValue=this.HeightValue;

    if(cesiumData["filters"]!==undefined&&cesiumData["filters"].length!==0){
      data.filter=cesiumData["filters"];
    }
    this.ceisumData=data;
    this.dataService.ceisumData=this.ceisumData;
    this.onChangeColor(this.ColorValue);
    if(cesiumData["filters"]!==undefined){
      this.addHide();
    }
    
  }

  ngDoCheck(){
    if(this.viewer!==undefined&&this.dataService.SelectedEntity!==undefined&&this.InitialTool===false){
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
  }
  onChangeHeight(HeightValue){
    this.HeightValue=HeightValue;
    this.ceisumData["heightDefault"]=this.HeightValue;
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
    for(var i=0;i<this.data["cesium"]["extrude"]["attribs"].length;i++){
      if(this.data["cesium"]["extrude"]["attribs"][i]["name"]===this.HeightValue){
        if(this.data["cesium"]["extrude"]["attribs"][i]["min"]!==undefined){
          this.ceisumData["heightMin"]=this.data["cesium"]["extrude"]["attribs"][i]["min"];
        }else{this.ceisumData["heightMin"]=Math.min.apply(Math, texts);}
        if(this.data["cesium"]["extrude"]["attribs"][i]["max"]!==undefined){  
          this.ceisumData["heightMax"]=this.data["cesium"]["extrude"]["attribs"][i]["max"];
        }else{this.ceisumData["heightMax"]=Math.max.apply(Math, texts);}
        if(this.data["cesium"]["extrude"]["attribs"][i]["scale"]!==undefined){
          this.ceisumData["heightScale"]=this.data["cesium"]["extrude"]["attribs"][i]["scale"];
        }else{this.ceisumData["heightScale"]=1;}
        if(this.data["cesium"]["extrude"]["attribs"][i]["invert"]===true){
          this.ceisumData["heightInvert"]=true;
        }else{this.ceisumData["heightInvert"]=false;}
        if(this.data["cesium"]["extrude"]["attribs"][i]["line"]===true){
          this.ceisumData["heightLine"]=true;
        }else{this.ceisumData["heightLine"]=false;}
        this.dataService.MinHeight=this.ceisumData["heightMin"];
        this.dataService.MaxHeight=this.ceisumData["heightMax"];
        break;
      }
    }
    this.HeightMax= this.dataService.MinHeight;
    this.HeightMin=this.dataService.MaxHeight;
    this.CheckExtrude=this.ceisumData["heightLine"];
    this.dataService.CheckExtrude=this.CheckExtrude;
    this.CheckOpp=this.ceisumData["heightInvert"];
    this.dataService.CheckOpp=this.CheckOpp;
    this.ScaleValue=this.ceisumData["heightScale"];
    this.dataService.ScaleValue=this.ScaleValue;
    this.dataService.ceisumData=this.ceisumData;
    this.Hide();
    this.dataService.getHeightValue(this.HeightValue);
  }

  onChangeColor(ColorValue){
    this.ColorValue=ColorValue;
    this.ceisumData["colorDefault"]=this.ColorValue;
    if(this.data["cesium"]["colour"]!==undefined){
      for(var i=0;i<this.data["cesium"]["colour"]["attribs"].length;i++){
        if(this.data["cesium"]["colour"]["attribs"][i]["name"]===this.ColorValue){
          if(this.data["cesium"]["colour"]["attribs"][i]["min"]!==undefined&&this.data["cesium"]["colour"]["attribs"][i]["max"]!==undefined){
            this.ceisumData["colorMin"]=this.data["cesium"]["colour"]["attribs"][i]["min"];
            this.ceisumData["colorMax"]=this.data["cesium"]["colour"]["attribs"][i]["max"];
          }else{this.ceisumData["colorMin"]=null;this.ceisumData["colorMax"]=null;}
          if(this.data["cesium"]["colour"]["attribs"][i]["invert"]===true){
            this.ceisumData["colorInvert"]=true;
            this.ChromaScale=chroma.scale("SPECTRAL").domain([1,0]);
          }else{
            this.ceisumData["colorInvert"]=false;
            this.ChromaScale=chroma.scale("SPECTRAL").domain([0,1]);
          }
          this.dataService.MinColor=this.ceisumData["colorMin"];
          this.dataService.MaxColor=this.ceisumData["colorMax"];
          this.dataService.ChromaScale=this.ChromaScale;
          this.dataService.ceisumData=this.ceisumData;
          break;
        }
      }
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
            entity.polygon.material=Cesium.Color.White;
          }
        });

        }
      }
      if(typeof(texts[0])==="number") {
        this.texts=texts;
        var max = this.dataService.MaxColor;//Math.max.apply(Math, texts);
        var min = this.dataService.MinColor;//Math.min.apply(Math, texts);
        //var range:number=82;//12;
        /*var Colortext:any=[];
        Colortext.push(">="+(min+((range-1)/range)*(max-min)).toFixed(2));
        for(var i=range-2;i>0;i--){
          Colortext.push((min+(i/range)*(max-min)).toFixed(2)+" - "+(min+((i+1)/range)*(max-min)).toFixed(2));
        }
        Colortext.push("<="+(min+(1/range)*(max-min)).toFixed(2))*/
        for(var j=0;j<texts.length;j++){
          var ColorKey:any=[];
          ColorKey.text=texts[j];
          var Color=this.ChromaScale(Number(((max-texts[j])/(max-min)).toFixed(2)));
          ColorKey.color=Color;
          this.ColorKey.push(ColorKey);
        }
        this.dataService.Colortexts=this.ColorKey;
        if(max===null) {max=Math.max.apply(Math, texts);}
        if(min===null) {max=Math.max.apply(Math, texts);}
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
          this.Max=null;
          this.Min=null;
        }
        this.dataService.Colortexts=this.ColorKey;
        this.colorByCat();
      }
      this.Hide();
      this.dataService.getColorValue(this.ColorValue);
    }else{
      var promise=this.dataService.cesiumpromise;
      var self= this;
      promise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        entity.polygon.material=Cesium.Color.White;
      }
    });
    }
  }

  colorByNum(){
    var max = this.dataService.MaxColor;
    var min=this.dataService.MinColor;
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
          /*for(var j=1;j<range;j++){
            if(entity.properties[self.ColorValue]._value>=(min+(j/range)*(max-min)).toFixed(2)){
            var rgb=ColorKey[range-j].color._rgb;
            entity.polygon.material=Cesium.Color.fromBytes(rgb[0],rgb[1],rgb[2]);
            }else if(entity.properties[self.ColorValue]._value<(min+(1/range)*(max-min)).toFixed(2)){
              var rgb=ColorKey[range-1].color._rgb;
              entity.polygon.material=Cesium.Color.fromBytes(rgb[0],rgb[1],rgb[2]);
            }
          }*/
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

  hideElementArr = [];
  addHide(){
    var lastnumber:string;
    this.hideElementArr=[];
    this.HideNum=[];
    if(this.data["cesium"]!==undefined&&this.data["cesium"].length!==0){
      for(var i=0;i<this.ceisumData.filter.length;i++){
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
        var propertyname=this.ceisumData.filter[i]["name"];
        var relation=Number(this.ceisumData.filter[i]["relation"]);
        var text=this.ceisumData.filter[i]["value"];
        var descr=this.ceisumData.filter[i]["descr"];
        if(typeof(text)==="number"){this.HideType="number";var texts=this.Initial(propertyname);}else if(typeof(text)==="string"){this.HideType="category";var texts=this.Initial(propertyname);texts=["None"].concat(texts);}
        this.hideElementArr.push({divid:String("addHide".concat(String(lastnumber))),id: lastnumber,HeightHide:propertyname,type:this.HideType,Category:texts,CategaryHide:text,descr:descr,RelaHide:relation,textHide: text,
                              HideMax:Math.ceil(Math.max.apply(Math, texts)),HideMin:Math.round(Math.min.apply(Math, texts)*100)/100,Disabletext:null});
      }

      
    }
    this.dataService.hideElementArr=this.hideElementArr;
    this.dataService.HideNum=this.HideNum;
    this.Hide();

  }

  Disable(event){
    var index=this.HideNum.indexOf(event);
    var divid=String("addHide".concat(String(event)));
    var addHide=document.getElementById(divid);
    if(this.hideElementArr[index].Disabletext===null) {this.CheckDisable=true;}else{this.CheckDisable=false;}
    if(this.CheckDisable===true){
      addHide.style.background="grey";
      if(this.hideElementArr[index].type==="number"){
        const textHide=this.hideElementArr[index].textHide;
        this.hideElementArr[index].Disabletext=Number(textHide);
        if(this.hideElementArr[index].RelaHide==="0"||this.hideElementArr[index].RelaHide===0) this.hideElementArr[index].textHide=this.hideElementArr[index].HideMin;
        if(this.hideElementArr[index].RelaHide==="1"||this.hideElementArr[index].RelaHide===1) this.hideElementArr[index].textHide=this.hideElementArr[index].HideMax;
      }else if(this.hideElementArr[index].type==="category"){
        const textHide=this.hideElementArr[index].RelaHide;
        this.hideElementArr[index].Disabletext=Number(textHide);
        this.hideElementArr[index].RelaHide=0;
      }
    }else{
      addHide.style.background=null;
      if(this.hideElementArr[index].type==="number"){
        this.hideElementArr[index].textHide=this.hideElementArr[index].Disabletext;
        this.hideElementArr[index].Disabletext=null;
      }else if(this.hideElementArr[index].type==="category"){
        this.hideElementArr[index].RelaHide=this.hideElementArr[index].Disabletext;
        this.hideElementArr[index].Disabletext=null;
      }
    }
    this.Hide();
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
    var Max:number;
    var Min:number;
    if(this.ceisumData["heightMax"]!==undefined){
      Max=this.ceisumData["heightMax"];
    }else{Max=0}
    if(this.ceisumData["heightMin"]!==undefined){
      if(this.ceisumData["heightMin"]<0){
        Min=Math.abs(this.ceisumData["heightMin"])
      }else{Min=0}
    }
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
                entity.polygon.extrudedHeight = 0;
                entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                if(self.CheckExtrude===true){
                  if(entity.polyline!==undefined&&entity.polyline.show!==undefined) entity.polyline.show=false;
                }
                break;
              }else{
                self.ColorByNumCat(entity);
                if(self.CheckScale===true){
                  if(self.CheckOpp===true){
                    if(self.CheckExtrude===true){
                      var center=self.dataService.poly_center[i];
                      entity.polyline=new Cesium.PolylineGraphics({
                        positions:new Cesium.Cartesian3.fromDegreesArrayHeights([center[0],center[1],0,center[0],center[1],((Max-Math.min((entity.properties[self.HeightValue]._value),Max))+Min)*scale]),
                        width:center[2],
                        material:entity.polygon.material,
                        show:true
                      })
                    }else{
                      if(entity.polyline!==undefined&&entity.polyline.show!==undefined) entity.polyline.show=false;
                        if(self.HeightValue!==undefined){
                          entity.polygon.extrudedHeight =((Max-Math.min((entity.properties[self.HeightValue]._value),Max))+Min)*scale;
                        }else{entity.polygon.extrudedHeight =0;}
                    }
                  }else{
                    if(self.CheckExtrude===true){
                      var center=self.dataService.poly_center[i];
                      entity.polyline=new Cesium.PolylineGraphics({
                        positions:new Cesium.Cartesian3.fromDegreesArrayHeights([center[0],center[1],0,center[0],center[1],((Math.min((entity.properties[self.HeightValue]._value),Max))+Min)*scale]),
                        width:center[2],
                        material:entity.polygon.material,
                        show:true
                      })
                    }else{
                      if(entity.polyline!==undefined&&entity.polyline.show!==undefined) entity.polyline.show=false;
                        if(self.HeightValue!==undefined){
                          entity.polygon.extrudedHeight =((Math.min((entity.properties[self.HeightValue]._value),Max))+Min)*scale;
                        }else{entity.polygon.extrudedHeight =0;}
                    }
                  }
                }
              }
            }else if(typeof(value)==="string"){
              if(text[j]!=="None"){
                if (self._compareCat(value, text[j], relation[j])) {
                entity.polygon.extrudedHeight = 0;
                entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                if(self.CheckExtrude===true){
                  if(entity.polyline!==undefined&&entity.polyline.show!==undefined) entity.polyline.show=false;
                }
                break;              
              }else{

                self.ColorByNumCat(entity);
                if(self.CheckScale===true){
                  if(self.CheckOpp===true){
                    if(self.CheckExtrude===true){
                      entity.polygon.extrudedHeight =0;
                      var center=self.dataService.poly_center[i];
                      entity.polyline=new Cesium.PolylineGraphics({
                        positions:new Cesium.Cartesian3.fromDegreesArrayHeights([center[0],center[1],0,center[0],center[1],((Max-Math.min((entity.properties[self.HeightValue]._value),Max))+Min)*scale]),
                        width:center[2],
                        material:entity.polygon.material,
                        show:true
                      })
                    }else{
                      if(entity.polyline!==undefined&&entity.polyline.show!==undefined) entity.polyline.show=false;
                        if(self.HeightValue!==undefined){
                          entity.polygon.extrudedHeight =((Max-Math.min((entity.properties[self.HeightValue]._value),Max))+Min)*scale;
                        }else{entity.polygon.extrudedHeight =0;}
                    }
                  }else{
                    if(self.CheckExtrude===true){
                      entity.polygon.extrudedHeight =0;
                      var center=self.dataService.poly_center[i];
                      entity.polyline=new Cesium.PolylineGraphics({
                        positions:new Cesium.Cartesian3.fromDegreesArrayHeights([center[0],center[1],0,center[0],center[1],((Math.min((entity.properties[self.HeightValue]._value),Max))+Min)*scale]),
                        width:center[2],
                        material:entity.polygon.material,
                        show:true
                      })
                    }else{
                      if(entity.polyline!==undefined&&entity.polyline.show!==undefined) entity.polyline.show=false;
                      if(self.HeightValue!==undefined){
                        entity.polygon.extrudedHeight =(Math.min((entity.properties[self.HeightValue]._value),Max)+Min)*scale;
                      }else{entity.polygon.extrudedHeight =0;}
                    }
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
    if(this.ColorKey!==undefined){
      var ChromaScale=this.ChromaScale;
      var ColorKey=this.ColorKey;
      //var range=ColorKey.length;
      var self=this;
      if(typeof(self.texts[0])==="number") {
        var max = self.dataService.MaxColor;
        var min=self.dataService.MinColor;
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
            entity.polygon.material=Cesium.Color.fromBytes(rgb._rgb[0],rgb._rgb[1],rgb._rgb[2]);
            initial=true;
          }
        }
        if(initial===false){
          entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
        }
      }
    }else{
      entity.polygon.material=Cesium.Color.White;
    }

  }

  reset(){
    if(this.data["cesium"]!==undefined){
      this.LoadData(this.data);
    }
  }

}