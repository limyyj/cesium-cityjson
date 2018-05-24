import { Component, OnInit, Injector, ElementRef ,NgModule} from "@angular/core";
import {DataSubscriber} from "../data/DataSubscriber";
import { DataService } from "../data/data.service";
import {ViewerComponent} from "../viewer/viewer.component";
import * as chroma from "chroma-js";

@Component({
  selector:  "app-publish",
  templateUrl:  "./publish.component.html",
  styleUrls: [ "./publish.component.css" ],
})
export class PublishComponent extends DataSubscriber implements OnInit {
  private myElement ;
  private dataArr: object;
  private _ColorDescr: string;
  private _ColorProperty: any[];
  private _ColorKey: string;
  private _ColorMax: number;
  private _ColorMin: number;
  private _ColorInvert: boolean;
  private _ExtrudeDescr: string;
  private _ExtrudeProperty: any[];
  private _ExtrudeKey: string;
  private _ExtrudeMax: number;
  private _ExtrudeMin: number;
  private _HeightChart: boolean;
  private _Invert: boolean;
  private _Scale: number;
  private _Filter: any[];
  private _HideNum: any[];
  private _CheckDisable: boolean;

  constructor(injector: Injector, myElement: ElementRef) {
  super(injector);
  }
  public ngOnInit() {
    this.dataArr=this.dataService._PuData;
    if(this.dataArr!==undefined) {this.LoadData();this.addHide();}
  }
  public notify(message: string): void {
    if(message === "model_update" ) {
      try {
        this.dataArr=this.dataService._PuData;
        if(this.dataArr!==undefined) {this.LoadData();this.addHide();}
      }
      catch (ex) {
        console.log(ex);
      }
    }
  }

  public LoadData() {
    this._ColorDescr=this.dataArr["ColorDescr"];
    this._ColorProperty=this.dataArr[ "ColorProperty"];
    this._ColorKey=this.dataArr[ "ColorKey"];
    this._ColorMax=this.dataArr[ "ColorMax"];
    this._ColorMin=this.dataArr[ "ColorMin"];
    this._ColorInvert=this.dataArr[ "ColorInvert"];
    this._ExtrudeDescr=this.dataArr[ "ExtrudeDescr"];
    this._ExtrudeProperty=this.dataArr[ "ExtrudeProperty"];
    this._ExtrudeKey=this.dataArr[ "ExtrudeKey"];
    this._ExtrudeMax=this.dataArr[ "ExtrudeMax"];
    this._ExtrudeMin=this.dataArr[ "ExtrudeMin"];
    this._HeightChart=this.dataArr[ "HeightChart"];
    this._Invert=this.dataArr[ "Invert"];
    this._Scale=this.dataArr[ "Scale"];
    this._HideNum=this.dataArr[ "HideNum"];
  }

   public addHide() {
    const  _Filter=this.dataArr[ "Filter"];
    let lastnumber: string;
    this._Filter=[];
    this._HideNum=[];
    if(_Filter!==undefined&&_Filter.length!==0) {
      for(const _filter of _Filter) {
        if(this._HideNum.length===0) {
          this._HideNum[0]="0";
          lastnumber=this._HideNum[0];
        } else {
          for(let j=0;j<this._HideNum.length+1;j++) {
            if(this._HideNum.indexOf(String(j))===-1) {
              this._HideNum.push(String(j));
              lastnumber=String(j);
              break;
            }
          }
        }
        const _propertyname=_filter["name"];
        const _relation=Number(_filter["relation"]);
        const _text=_filter["value"];
        const _descr=_filter["descr"];
        let _HideType: string;
        let _texts: any[];
        if(typeof(_text)==="number") {
          _HideType="number";
          _texts=this.Initial(_propertyname);
        } else if(typeof(_text)==="string") {
          _HideType="category";
          _texts=this.Initial(_propertyname);
          _texts=["None"].concat(_texts);
        }
        this._Filter.push({ divid:String("addHide".concat(String(lastnumber))),id: lastnumber,HeightHide:_propertyname,
                            type:_HideType,Category:_texts,CategaryHide:_text,descr:_descr,RelaHide:_relation,
                            textHide: _text,HideMax:Math.ceil(Math.max.apply(Math, _texts)),
                            HideMin:Math.round(Math.min.apply(Math, _texts)*100)/100,Disabletext:null});
      }
    }
    this.dataArr["Filter"]=this._Filter;
    this.dataArr["HideNum"]=this._HideNum;
    this.dataService._PuData=this.dataArr;
  }

  public Disable(event) {
    const index=this._HideNum.indexOf(event);
    const divid=String("addHide".concat(String(event)));
    const addHide=document.getElementById(divid);
    if(this._Filter[index].Disabletext===null) {
      this._CheckDisable=true;
    } else {this._CheckDisable=false;}
    if(this._CheckDisable===true) {
      addHide.style.background="grey";
      if(this._Filter[index].type==="number") {
        const textHide=this._Filter[index].textHide;
        this._Filter[index].Disabletext=Number(textHide);
        if(this._Filter[index].RelaHide==="0"||this._Filter[index].RelaHide===0) {
          this._Filter[index].textHide=this._Filter[index].HideMin;
        }
        if(this._Filter[index].RelaHide==="1"||this._Filter[index].RelaHide===1) {
          this._Filter[index].textHide=this._Filter[index].HideMax;
        }
      } else if(this._Filter[index].type==="category") {
        const textHide=this._Filter[index].RelaHide;
        this._Filter[index].Disabletext=Number(textHide);
        this._Filter[index].RelaHide=0;
      }
    } else {
      addHide.style.background=null;
      if(this._Filter[index].type==="number") {
        this._Filter[index].textHide=this._Filter[index].Disabletext;
        this._Filter[index].Disabletext=null;
      } else if(this._Filter[index].type==="category") {
        this._Filter[index].RelaHide=this._Filter[index].Disabletext;
        this._Filter[index].Disabletext=null;
      }
    }
    this.dataArr["Filter"]=this._Filter;
    this.dataArr["HideNum"]=this._HideNum;
    this.dataService._PuData=this.dataArr;
  }

  public Initial(_HideValue: string): any[] {
    const texts: any[] =[];
    const promise=this.dataService.cesiumpromise;
    const self= this;
    promise.then( function(dataSource) {
      const entities = dataSource.entities.values;
      for (const entity of entities) {
        if(entity.properties[_HideValue]!==undefined) {
          if(entity.properties[_HideValue]._value!==" ") {
            if(texts.length===0) {texts[0]=entity.properties[_HideValue]._value;
            } else { if(texts.indexOf(entity.properties[_HideValue]._value)===-1) {
              texts.push(entity.properties[_HideValue]._value);}
            }
          }
        }
      }
    });
    return texts;
  }

  public ChangeCategory(categary,id,type) {
    const _index=this._HideNum.indexOf(id);
    if(type===1) {
      this._Filter[_index].CategaryHide=categary;
    }
    if(type===0) {
      this._Filter[_index].RelaHide=Number(categary);
    }
  }

  public Changetext(value,id) {
    const _index=this._HideNum.indexOf(id);
    this._Filter[_index].textHide=value;
  }

  public onChangeColor(value) {
    const data = this.dataService.getGsModel()["cesium"]["colour"]["attribs"];
    this.dataArr["ColorKey"]=value;
    for(const _data of data) {
      if(_data["name"]===value) {
        this.dataArr["ColorMin"]=_data["min"];
        this.dataArr["ColorMax"]=_data["max"];
        this.dataArr["ColorInvert"]=_data["invert"];
      }
    }
    const promise=this.dataService.cesiumpromise;
    const _Colortexts: any[]=[];
    const self= this;
    promise.then( function(dataSource) {
      const entities = dataSource.entities.values;
      for (const entity of entities) {
        if(entity.properties[value]!==undefined) {
        if(entity.properties[value]._value!==" ") {
          if(_Colortexts.length===0) {_Colortexts[0]=entity.properties[value]._value;
          } else { if(_Colortexts.indexOf(entity.properties[value]._value)===-1) {
            _Colortexts.push(entity.properties[value]._value);}
            }
          }
        }
      }
    });
    this.dataArr["ColorText"]=_Colortexts.sort();
    this.dataService._PuData=this.dataArr;
    this.LoadData();
  }

  public onChangeHeight(value) {
    const data = this.dataService.getGsModel()["cesium"]["extrude"]["attribs"];
    this.dataArr["ExtrudeKey"]=value;
    for(const _data of data) {
      if(_data["name"]===value) {
        this.dataArr["ExtrudeMin"]=_data["min"];
        this.dataArr["ExtrudeMax"]=_data["max"];
        this.dataArr["HeightChart"]=_data["line"];
        this.dataArr["Invert"]=_data["invert"];
        this.dataArr["Scale"]=_data["scale"];
      }
    }
    const promise=this.dataService.cesiumpromise;
    const _Heighttexts=[];
    const self= this;
    promise.then(function(dataSource) {
      const entities = dataSource.entities.values;
      for (const entity of entities) {
        if(entity.properties[value]!==undefined) {
        if(entity.properties[value]._value!==" ") {
          if(_Heighttexts.length===0) {_Heighttexts[0]=entity.properties[value]._value;
          } else { if(_Heighttexts.indexOf(entity.properties[value]._value)===-1) {
            _Heighttexts.push(entity.properties[value]._value);}
            }
          }
        }
      }
    });
    this.dataArr["ExtrudeText"]=_Heighttexts.sort();
    this.dataService._PuData=this.dataArr;
    this.LoadData();
  }

  public reset() {
    this.dataService.LoadJSONData();
    this.dataArr=this.dataService._PuData;
    if(this.dataArr!==undefined) {this.LoadData();this.addHide();}
  }
}
