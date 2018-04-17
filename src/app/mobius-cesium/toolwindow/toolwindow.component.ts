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
  ScaleValue:number;
  CheckScale:boolean;
  HideNum:Array<number>;
  RelaHide:Array<string>;
  HeightHide:Array<string>;
  textHide:Array<number>;
  HideMax:Array<number>;
  HideMin:Array<number>;

  constructor(injector: Injector, myElement: ElementRef){
    super(injector);
    this.ColorStore=["LIGHTCORAL","RED","CORAL","CRIMSON","ROYALBLUE","AQUA","BROWN","CADETBLUE","CHARTREUSE",
            "DARKORCHID","DARKRED","DARKSEAGREEN","DARKTURQUOISE","DEEPPINK","FORESTGREEN","GOLDENROD","CRIMSON","CRIMSON"];
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
      if(this.CheckHide===true) this.Hide();
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

  checkHide(){
    if(this.CheckHide===true) {this.Hide();}else{this.onChangeHeight(this.HeightValue);this.onChangeColor(this.ColorValue);}
    //this.dataService.CheckHide=this.CheckHide;
  }

  /*Hide(){
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
  }*/

  changeHide(){
    this.CheckHide=!this.CheckHide;
    //this.dataService.CheckHide=this.CheckHide;
  }

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
    for(var i=0;i<4;i++){
      var addHide=document.getElementById("addHide"+i);
      if(addHide["style"].display==="none"){
        addHide["style"].display=null;
        if(this.HeightKey!==undefined){
          if(this.HeightHide[i] === undefined) {
            this.HeightHide[i] = this.HeightKey[0];
          }
          if(this.RelaHide[i] === undefined) {
            this.RelaHide[i] = ">";
          }
          if(this.textHide[i] == undefined) {
            this.textHide[i] = Math.min.apply(Math, texts);
            this.HideMax[i]=Math.max.apply(Math, texts);
            this.HideMin[i]=Math.min.apply(Math, texts);
          }
        }
        break;
      }
    }
  }
  deleteHide(id){
    var addHide=document.getElementById("addHide"+id);
    addHide["style"].display="none";
    this.HeightHide[id] = undefined;
    this.RelaHide[id] = undefined;
    this.textHide[id] = undefined;
    this.HideMax[id] = undefined;
    this.HideMin[id] = undefined;
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
    this.HideMax[id] = Math.max.apply(Math, texts);
    this.HideMin[id]= Math.min.apply(Math, texts);
    this.textHide[id]=this.HideMin[id];
    this.CheckHide=false;
    this.onChangeHeight(this.HeightValue);
    this.onChangeColor(this.ColorValue);
  }
  Changetext(event){
    this.textHide[0]=event;
    this.CheckHide=false;
    this.onChangeHeight(this.HeightValue);
    this.onChangeColor(this.ColorValue);
    //if(this.CheckHide===true)  {this.Hide();}
  }
  Changetext1(event){
    this.textHide[1]=event;
    this.CheckHide=false;
    this.onChangeHeight(this.HeightValue);
    this.onChangeColor(this.ColorValue);
  }
  Changetext2(event){
    this.textHide[2]=event;
    this.CheckHide=false;
    this.onChangeHeight(this.HeightValue);
    this.onChangeColor(this.ColorValue);
  }

  Hide(){
    var promise=this.dataService.cesiumpromise;
    for(var j=0;j<4;j++){
      if(this.HeightHide[j]!==undefined){
        var propertyname=this.HeightHide[j];
        var relation=this.RelaHide[j];
        var text=this.textHide[j];
        var self=this;
        if(relation===">"){
          promise.then(function(dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
              var entity = entities[i];
              if(entity.properties[propertyname]._value!==undefined){
                if(entity.properties[propertyname]._value<=text){
                  entity.polygon.extrudedHeight = 0;
                  entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                }
              }
            }
          });
        }else if(relation==="<"){
          promise.then(function(dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
              var entity = entities[i];
              if(entity.properties[propertyname]._value!==undefined){
                if(entity.properties[propertyname]._value>=text){
                  entity.polygon.extrudedHeight = 0;
                  entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                }
              }
            }
          });
        }else{
          promise.then(function(dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
              var entity = entities[i];
              if(entity.properties[propertyname]._value!==undefined){
                if(entity.properties[propertyname]._value===text){
                  entity.polygon.extrudedHeight = 0;
                  entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                }
              }
            }
          });
        }
      }
    }
  }

}