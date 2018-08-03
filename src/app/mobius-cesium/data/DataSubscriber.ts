import { Injector } from '@angular/core';
import { DataService } from "./data.service";
import { CityJSONService } from "./readCityJSON.service";
import { Subscription } from 'rxjs/Subscription';

export class DataSubscriber {

    protected dataService: DataService;
    protected cityJSONService : CityJSONService;
    private _subscription: Subscription;
    private _message: any;

    constructor(injector: Injector) {
        this.dataService = injector.get(DataService);
        this._subscription = this.dataService.getMessage().subscribe((message) => {
          this._message = message;
          this.notify(message.text);
        });
        this.cityJSONService = injector.get(CityJSONService);
        this._subscription = this.cityJSONService.getMessage().subscribe((message) => {
          this._message = message;
          this.notify(message.text);
        });
    }

    notify(message: string) {
        console.warn("Notify function not Implemented");
    }
}
