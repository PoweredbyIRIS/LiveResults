import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
import { HttpModule, JsonpModule }  from '@angular/http';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,HttpModule,JsonpModule,MaterialModule.forRoot() ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }