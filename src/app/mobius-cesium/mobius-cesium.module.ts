import { NgModule, ModuleWithProviders,Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobiuscesiumComponent} from './mobius-cesium.component';
import { ViewerComponent} from "./viewer/viewer.component";
import { DataService } from './data/data.service';
import { ToolwindowComponent } from './toolwindow/toolwindow.component';
import { AngularSplitModule } from 'angular-split';
import { BrowserAnimationsModule ,NoopAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { MatTabsModule} from '@angular/material/tabs';
import { MatTooltipModule} from '@angular/material/tooltip';
import {MatSliderModule } from '@angular/material/slider';

@NgModule({
    imports: [CommonModule,
              AngularSplitModule,
              MatTabsModule,
              BrowserAnimationsModule,
              NoopAnimationsModule,
              BrowserModule,
              MatTooltipModule,
              MatSliderModule
			 ],
    exports: [ MobiuscesiumComponent ],
    declarations: [MobiuscesiumComponent,
                    ViewerComponent,
                    ToolwindowComponent],
    providers: [DataService],
})
export class MobiusCesium {
 	
 	static forRoot(): ModuleWithProviders {
        return {
            ngModule: MobiusCesium,
            providers: [
               DataService
            ]
        };
    }

}