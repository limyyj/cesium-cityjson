import { Component, OnInit, Injector, ElementRef ,NgModule} from "@angular/core";
import {DataSubscriber} from "../data/DataSubscriber";
import { DataService } from "../data/data.service";
import {ViewerComponent} from "../viewer/viewer.component";
import * as chroma from "chroma-js";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"],
})
export class FilterComponent extends DataSubscriber implements OnInit {
  private myElement;
  private all_ids: any;
  private srfcount: any;
  private filter_index: number;
  private filter_select: string;
  private filters: any;
  private prop_ids: any;
  private prop_keys: any;

  constructor(injector: Injector, myElement: ElementRef) {
  super(injector);
  }

  /* Initialises and gets parent IDs and properties
     Extracts keys for display in dropdown
     Uses: - initialise
           - dataService.getcesiumpromise
           - cesiumGeomService.getIds
           - cesiumGeomService.getPropIds
           - setKeys */
  public ngOnInit() {
    this.intialise();
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

  /* Initialise arrays/reset values */
  private intialise() {
    this.filter_index = 0;
    this.srfcount = null;
    this.filters = [];
    this.prop_keys = null;
    this.all_ids = null;
  }

  /* Get list of keys for properties (for displaying in the dropdown list) */
  private setKeys() {
    const keys2 = [];
    for (const key in this.prop_ids) {
      // keys.push(key);
      keys2.push(key);
    }
    this.prop_keys = keys2;
  }

  /* Hides all entities from list of ids
     Params: Array of entities to check for id and hide
             Array of ids to check for and hide
     Called in: applyFilter */
  public hide(entities, ids) {
    ids.forEach((id) => {
      entities.getById(id).show = false;
    });
  }

  /* Shows all entities from list of ids
     Params: Array of entities to check for id and show
             Array of ids to check for and show
     Called in: applyFilter */
  public show(entities, ids) {
    ids.forEach((id) => {
      entities.getById(id).show = true;
    });
  }

  /* Adds a filter option based on the current selected property (this.filter_select) when user clicks button */
  public addFilter() {
    const proptype = typeof(this.prop_ids[this.filter_select][0]);
    let text = 0;
    if (proptype === "string") {
      text = this.prop_ids[this.filter_select][0];
    }
    const filter = {id: this.filter_index, // ID number of filter
                    name: this.filter_select, // property name used for filter
                    type: proptype,  // type of property (number/string)
                    values: this.prop_ids[this.filter_select], // possible values for property (list if string, range if number)
                    disable: false, // determines if filter is disabled or not
                    relation: 0, // number: 0:>, 1:<, 2:=   string: 0:=, 1:!=
                    text: text // typed/selected value to use in filter
                  };
    this.filters.push(filter);
    this.filter_index ++;
  }

  /* Changes the currently selected property when the user selects a value from the dropdown box
     Params: Property name selected by user */
  public changeFilterSelect(name) {
    this.filter_select = name;
  }

  /* Changes the currently selected relation for a filter when user selects a value from the dropdown box
     Params: ID number of filter to change
             Number representing selected relation */
  public changeRelation(id,relation) {
    for (let i = 0 ; i < this.filters.length ; i ++) {
      if (this.filters[i].id === id) {
        this.filters[i].relation = Number(relation);
        break;
      }
    }
  }

  /* Changes the currently selected value for a filter when user selects a value from the dropdown box (string)
     Params: ID number of filter to change
             Value selected by user */
  public changeText(id,text) {
    for (let i = 0 ; i < this.filters.length ; i ++) {
      if (this.filters[i].id === id) {
        this.filters[i].text = text;
        break;
      }
    }
  }

  /* Changes the currently selected value for a filter when user types a value (number)
     Params: ID number of filter to change
             Value typed by user */
  public changeNum(id,text) {
    for (let i = 0 ; i < this.filters.length ; i ++) {
      if (this.filters[i].id === id) {
        this.filters[i].text = Number(text);
        break;
      }
    }
  }

  /* Toggles the disable value for a filter when user clicks on checkbox
     Params: ID number of filter to change
             Boolean representing checkbox status (true for checked, false for unchecked) */
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

  /* Removes a filter from the list when user clicks delete
     Params: ID number of filter to delete */
  public deleteFilter(id) {
    for (let i = 0 ; i < this.filters.length ; i ++) {
      if (this.filters[i].id === id) {
        this.filters.splice(i,1);
        break;
      }
    }
  }

  public getPropValue(props,name): any {
    const cats = props.propertyNames;
    for (let x of cats) {
      const ids = Object.keys(props[x]._value);
      for (let i of ids) {
        if (i === name) {
          return props[x]._value[i];
        }
      }
    }
    return null;
  }

  /* Applies all filter settings to view when user clicks button
     - Checks if filter is disabled, skips is true
     - Checks relation and separates parent IDs into 2 arrays, show and hide, based on relation and entered value (text)
     - Filter applies the rules using "and" 
         - eg. given 2 properties: property1 < 6, property2 = "A"
               shown entities will be entities that satisfy ((property1 < 6) && (property2 = "A"))
     Uses: - show
           - hide
    *** TODO: better relation if-else */
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
            if (this.getPropValue(entities.getById(id).properties,filter.name) > filter.text) {
              newshow.push(id);
            } else {
              hide.push(id);
            }
          });
        } else if (filter.relation === 1) {
          // <
          show.forEach((id) => {
            if (this.getPropValue(entities.getById(id).properties,filter.name) < filter.text) {
              newshow.push(id);
            } else {
              hide.push(id);
            }
          });
        } else {
          // =
          show.forEach((id) => {
            if (this.getPropValue(entities.getById(id).properties,filter.name) === filter.text) {
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
            if (this.getPropValue(entities.getById(id).properties,filter.name) === filter.text) {
              newshow.push(id);
            } else {
              hide.push(id);
            }
          });
        } else {
          // !=
          show.forEach((id) => {
            if (this.getPropValue(entities.getById(id).properties,filter.name) !== filter.text) {
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
}
