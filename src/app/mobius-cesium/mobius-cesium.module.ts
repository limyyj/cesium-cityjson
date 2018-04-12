import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobiuscesiumComponent} from './mobius-cesium.component';
import { ViewerComponent} from "./viewer/viewer.component";
import { DataService } from './data/data.service';
import { ToolwindowComponent } from './toolwindow/toolwindow.component';
import { AngularSplitModule } from 'angular-split';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule ,NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
    imports: [CommonModule,
              AngularSplitModule,
              MatTabsModule,
              BrowserAnimationsModule,
              NoopAnimationsModule,
              MatTooltipModule
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