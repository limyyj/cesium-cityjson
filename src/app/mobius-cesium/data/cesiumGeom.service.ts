import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import {Subject} from "rxjs/Subject";
import * as chroma from "chroma-js";
import proj4 from "proj4";
import * as earcut from "earcut";

@Injectable()
export class CesiumGeomService {
	private dataSource: any;
	private srftype_ids: any;

	public setDataSource(dataSource: any): void {
    this.dataSource = dataSource;
  }

  public getDataSource(): any {
    return this.dataSource;
  }

  public clearDataSource(): void {
    this.dataSource = undefined;
  }

  public initialiseSrftypeIds(): void {
    this.srftype_ids = {RoofSurface: [],
                        GroundSurface: [],
                        WallSurface: [],
                        ClosureSurface: [],
                        OuterCeilingSurface: [],
                        OuterFloorSurface: [],
                        Window: [],
                        Door: [],
                        WaterSurface: [],
                        WaterGroundSurface: [],
                        WaterClosureSurface: [],
                        TrafficArea: [],
                        AuxiliaryTrafficArea: [],
                        None: []};
  }

  public getSrftypeIds(): any {
    return this.srftype_ids;
  }

  public setSrftypeIds(type: string, id: string): void {
    // console.log(this.srftype_ids,type,id);
    if (type === undefined) {
      this.srftype_ids["None"].push(id);
    } else {
      this.srftype_ids[type].push(id);
    }
  }

	public genMultiPoly(polygons, properties){

	}
}