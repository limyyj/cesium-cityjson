import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MobiuscesiumComponent} from './mobius-cesium.component';
import {ViewerComponent} from "./viewer/viewer.component";
import { DataService } from './data/data.service';

@NgModule({
    imports: [CommonModule
			 ],
    exports: [ MobiuscesiumComponent ],
    declarations: [MobiuscesiumComponent,
                    ViewerComponent],
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