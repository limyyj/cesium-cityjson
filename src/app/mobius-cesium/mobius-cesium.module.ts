import { NgModule, ModuleWithProviders,Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MobiuscesiumComponent} from "./mobius-cesium.component";
import { ViewerComponent} from "./viewer/viewer.component";
import { DataService } from "./data/data.service";
import { CityJSONService } from "./data/readCityJSON.service";
import { CityGMLService } from "./data/readCityGML.service";
import { CesiumGeomService } from "./data/cesiumGeom.service";
import { AngularSplitModule } from "angular-split";
import { BrowserAnimationsModule ,NoopAnimationsModule} from "@angular/platform-browser/animations";
import { BrowserModule, HAMMER_GESTURE_CONFIG } from "@angular/platform-browser";
import { MatTabsModule} from "@angular/material/tabs";
import { MatTooltipModule} from "@angular/material/tooltip";
import { MatSliderModule } from "@angular/material/slider";
import { FormsModule } from "@angular/forms";
import { SettingComponent } from "./setting/setting.component";
import { DataComponent } from "./setting/visualise.component";
import { SelectComponent } from "./setting/attributes.component";
import { PublishComponent } from "./setting/publish.component";
import { DisplayComponent } from "./setting/display.copmponent";
import { FilterComponent } from "./setting/filter.component";
import { AboutComponent } from "./setting/about.component";

@NgModule({
    imports: [CommonModule,
              AngularSplitModule,
              MatTabsModule,
              BrowserAnimationsModule,
              NoopAnimationsModule,
              BrowserModule,
              MatTooltipModule,
              MatSliderModule,
              FormsModule,
       ],
    exports: [ MobiuscesiumComponent ],
    declarations: [MobiuscesiumComponent,
                    ViewerComponent,
                    SettingComponent,
                    DataComponent,
                    SelectComponent,
                    PublishComponent,
                    DisplayComponent,
                    FilterComponent,
                    AboutComponent,
                    ],
    providers: [DataService,
                CityJSONService,
                CityGMLService,
                CesiumGeomService,
                ],
})
export class MobiusCesium {
   static forRoot(): ModuleWithProviders {
        return {
            ngModule: MobiusCesium,
            providers: [
               DataService,
            ],
        };
    }
}
