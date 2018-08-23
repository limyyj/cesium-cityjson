import { Injector } from '@angular/core';
import { DataService } from "./data.service";
import { CityJSONService } from "./readCityJSON.service";
import { CityGMLService } from "./readCityGML.service";
import { CesiumGeomService } from "./cesiumGeom.service";
import { Subscription } from 'rxjs/Subscription';

export class DataSubscriber {

    protected dataService: DataService;
    protected cityJSONService: CityJSONService;
    protected cityGMLService: CityGMLService;
    protected cesiumGeomService: CesiumGeomService;
    private _subscription: Subscription;
    private _message: any;

    constructor(injector: Injector) {
        this.dataService = injector.get(DataService);
        this._subscription = this.dataService.getMessage().subscribe((message) => {
          this._message = message;
          this.notify(message.text);
        });
        this.cityJSONService = injector.get(CityJSONService);
        this.cityGMLService = injector.get(CityGMLService);
        this.cesiumGeomService = injector.get(CesiumGeomService);
    }

    notify(message: string) {
        console.warn("Notify function not Implemented");
    }
}
