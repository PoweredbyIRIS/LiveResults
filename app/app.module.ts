import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { HttpModule, JsonpModule }  from '@angular/http';
//import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent }  from './app.component';
import { OarsComponent } from './clubs/oars.component';
import { TeamComponent } from './teamDisplay/team.component';
import { LastResultsTableComponent } from './teamDisplay/lastResultsTable.component';

@NgModule({
  imports:      [ BrowserModule,HttpModule,JsonpModule,MaterialModule.forRoot() ],
  declarations: [ AppComponent,OarsComponent,TeamComponent,LastResultsTableComponent ],
  entryComponents: [TeamComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }