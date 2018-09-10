import { Component, OnInit, Injector, ElementRef ,NgModule} from "@angular/core";
import {DataSubscriber} from "../data/DataSubscriber";
import { DataService } from "../data/data.service";
import {ViewerComponent} from "../viewer/viewer.component";
import * as chroma from "chroma-js";

@Component({
  selector: "app-cityjson",
  templateUrl: "./cityjson.component.html",
  styleUrls: ["./cityjson.component.css"],
})
export class CityJSONComponent extends DataSubscriber implements OnInit {
  private myElement;
  // private srftype_ids: any;
  // private srftype_keys: any;
  private all_ids: any;
  private srfcount: any;
  // private _CheckDisable: boolean = true;
  private filter_index: number;
  private filter_select: string;
  private filters: any;
  private prop_ids: any;
  private prop_keys: any;

  constructor(injector: Injector, myElement: ElementRef) {
  super(injector);
  }
  public ngOnInit() {
    this.intialise();
    // this.srftype_ids = this.cesiumGeomService.getSrftypeIds();
    // this.srfcount = this.cesiumGeomService.getSrfCount();
    this.all_ids = this.cesiumGeomService.getIds();
    this.prop_ids = this.cesiumGeomService.getPropIds();
    this.setKeys();
    this.filter_select = this.prop_keys[0];
  }
  public notify(message: string): void {
    if(message === "model_update" ) {
      try {
        this.intialise();
        this.dataService.getcesiumpromise().then(() => {
          // this.srftype_ids = this.cesiumGeomService.getSrftypeIds();
          // this.srfcount = this.cesiumGeomService.getSrfCount();
          this.all_ids = this.cesiumGeomService.getIds();
          this.prop_ids = this.cesiumGeomService.getPropIds();
          this.setKeys();
          this.filter_select = this.prop_keys[0];
        });
      }
      catch(ex) {
        console.log(ex);
      }
    }
  }

  public intialise() {
    this.filter_index = 0;
    // this.srftype_ids = null;
    // this.srftype_keys = null;
    this.srfcount = null;
    this.filters = [];
    this.prop_keys = null;
    this.all_ids = null;
  }

  public setKeys() {
    // const keys = [];
    // let all = [];
    // for (const key in this.srftype_ids) {
    //   // keys.push(key);
    //   keys.push(key);
    //   all = all.concat(this.srftype_ids[key]);
    // }
    // this.srftype_keys = keys;
    // this.all_ids = all;

    const keys2 = [];
    for (const key in this.prop_ids) {
      // keys.push(key);
      keys2.push(key);
    }
    this.prop_keys = keys2;
  }

  // // shows or hides element from a group when user clicks on checkbox
  // public checkbox(event) {
  //   const eventCheckbox = document.getElementById(event+"_check");
  //   const entities = this.dataService.getViewer().dataSources.get(0).entities;
  //   const ids = this.srftype_ids[event];
  //   if (eventCheckbox["checked"] === false) {
  //     this.hide(entities,ids);
  //   } else {
  //     this.show(entities,ids);
  //   }
  // }

  // hides all entities from list of ids
  public hide(entities, ids) {
    ids.forEach((id) => {
      entities.getById(id).show = false;
    });
  }

  // shows all entities from list of ids
  public show(entities, ids) {
    ids.forEach((id) => {
      entities.getById(id).show = true;
    });
  }

  // adds a filter option based on the current selected property
  public addFilter() {
    const proptype = typeof(this.prop_ids[this.filter_select][0]);
    let text = 0;
    if (proptype === "string") {
      text = this.prop_ids[this.filter_select][0];
    }
    const filter = {id: this.filter_index,
                    name: this.filter_select,
                    type: proptype,
                    values: this.prop_ids[this.filter_select],
                    disable: false,
                    relation: 0,
                    text: text
                  };
    this.filters.push(filter);
    this.filter_index ++;
  }

  // changes the currently selected property when the user selects a value from the dropdown box
  public changeFilterSelect(val) {
    this.filter_select = val;
  }

  // changes the currently selected relation for a filter when user selects a value from the dropdown box
  public changeRelation(id,relation) {
    for (let i = 0 ; i < this.filters.length ; i ++) {
      if (this.filters[i].id === id) {
        this.filters[i].relation = Number(relation);
        break;
      }
    }
  }

  // changes the currently selected value for a filter when user selects a value from the dropdown box (string)
  public changeText(id,text) {
    for (let i = 0 ; i < this.filters.length ; i ++) {
      if (this.filters[i].id === id) {
        this.filters[i].text = text;
        break;
      }
    }
  }

  // changes the currently selected value for a filter when user types a value (number)
  public changeNum(id,text) {
    for (let i = 0 ; i < this.filters.length ; i ++) {
      if (this.filters[i].id === id) {
        this.filters[i].text = Number(text);
        break;
      }
    }
  }

  // toggles the disable value for a filter when user clicks on checkbox
  public changeDisable(id,check) {
    for (let i = 0 ; i < this.filters.length ; i ++) {
      if (this.filters[i].id === id) {
        if (check === true) {
          this.filters[i].disable = false;
        } else {
          this.filters[i].disable = true;
        }
        break;
      }
    }
  }

  // removes a filter from the list when user clicks delete
  public deleteFilter(event) {
    for (let i = 0 ; i < this.filters.length ; i ++) {
      if (this.filters[i].id === event) {
        this.filters.splice(i,1);
        break;
      }
    }
  }

  // applies filter settings to view
  public applyFilter() {
    const entities = this.dataService.getViewer().dataSources.get(0).entities;
    let show = this.all_ids;
    const hide = [];
    this.filters.forEach((filter) => {
      const newshow = [];
      // skip if filter is disabled
      if (filter.disable === true) {
        return;
      }
      if (filter.type === "number") {
        if (filter.relation === 0) {
          // >
          show.forEach((id) => {
            if (entities.getById(id).properties[filter.name]._value > filter.text) {
              newshow.push(id);
            } else {
              hide.push(id);
            }
          });
        } else if (filter.relation === 1) {
          // <
          show.forEach((id) => {
            if (entities.getById(id).properties[filter.name]._value < filter.text) {
              newshow.push(id);
            } else {
              hide.push(id);
            }
          });
        } else {
          // =
          show.forEach((id) => {
            if (entities.getById(id).properties[filter.name]._value === filter.text) {
              newshow.push(id);
            } else {
              hide.push(id);
            }
          });
        }
      } else {
        if (filter.relation === 0) {
          // =
          show.forEach((id) => {
            if (entities.getById(id).properties[filter.name]._value === filter.text) {
              newshow.push(id);
            } else {
              hide.push(id);
            }
          });
        } else {
          // !=
          show.forEach((id) => {
            if (entities.getById(id).properties[filter.name]._value !== filter.text) {
              newshow.push(id);
            } else {
              hide.push(id);
            }
          });
        }
      }
      show = newshow;
    });
    this.show(entities,show);
    this.hide(entities,hide);
  }

  // public Show(event) {
  //   const index = this._HideNum.indexOf(event);
  //   const divid = String("addHide".concat(String(event)));
  //   const addHide = document.getElementById(divid);
  //   // if(this._Filter[index].Disabletext === null) {this._CheckDisable = false;} else {this._CheckDisable = true;}
  //   if(this._CheckDisable === false) {
  //     if(this._Filter[index].type === "number") {
  //       const textHide = this._Filter[index].textHide;
  //       this._Filter[index].Disabletext = Number(textHide);
  //       if(this._Filter[index].RelaHide === "0"||this._Filter[index].RelaHide === 0) {
  //         this._Filter[index].textHide = this._Filter[index].HideMin;
  //       }
  //       if(this._Filter[index].RelaHide === "1"||this._Filter[index].RelaHide === 1) {
  //         this._Filter[index].textHide = this._Filter[index].HideMax;
  //       }
  //     } else if(this._Filter[index].type === "category") {
  //       const textHide = this._Filter[index].RelaHide;
  //       this._Filter[index].Disabletext = Number(textHide);
  //       this._Filter[index].RelaHide = 0;
  //     }
  //   } else {
  //     if(this._Filter[index].type === "number") {
  //       this._Filter[index].textHide = this._Filter[index].Disabletext;
  //       this._Filter[index].Disabletext = null;
  //     } else if(this._Filter[index].type === "category") {
  //       this._Filter[index].RelaHide = this._Filter[index].Disabletext;
  //       this._Filter[index].Disabletext = null;
  //     }
  //   }
  //   this.dataArr["Filter"] = this._Filter;
  //   this.dataArr["HideNum"] = this._HideNum;
  //   this.dataService.set_ViData(this.dataArr);
  // }

  // public  Initial(_HideValue: string): any[] {
  //   const texts = [];
  //   const promise = this.dataService.getcesiumpromise();
  //   const self = this;
  //   promise.then(function(dataSource) {
  //     const entities = dataSource.entities.values;
  //     for (const entity of entities) {
  //       if(entity.properties[_HideValue] !== undefined) {
  //         if(entity.properties[_HideValue]._value !== " ") {
  //           if(texts.length === 0) {texts[0] = entity.properties[_HideValue]._value;
  //           } else { if(texts.indexOf(entity.properties[_HideValue]._value) === -1) {
  //             texts.push(entity.properties[_HideValue]._value);}
  //           }
  //         }
  //       }
  //     }
  //   });
  //   return texts;
  // }
}
