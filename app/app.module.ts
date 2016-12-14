import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { HttpModule, JsonpModule }  from '@angular/http';
//import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent }  from './app.component';
import { OarsComponent } from './clubs/oars.component';
import { TeamSimpelComponent } from './teamDisplay/teamSimpel.component';

@NgModule({
  imports:      [ BrowserModule,HttpModule,JsonpModule,MaterialModule.forRoot() ],
  declarations: [ AppComponent,OarsComponent,TeamSimpelComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }