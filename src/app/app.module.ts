import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MobiusCesium} from './mobius-cesium/mobius-cesium.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MobiusCesium
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
