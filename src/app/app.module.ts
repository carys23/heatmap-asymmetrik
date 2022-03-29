
import { BrowserModule } from '@angular/platform-browser';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { MapComponent } from './map/map.component';
import { AppComponent } from './app.component';

import { NgModule,Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';


@NgModule({
  declarations: [
    
    MapComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    LeafletModule
  
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
