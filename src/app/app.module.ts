import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import {MdDatepickerModule, MdNativeDateModule, MdInputModule} from '@angular/material';
import { PlaygroundComponent } from './playground.component';   
import {DatePickerComponent} from './datepicker';
import { AppRoutingModule }     from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,MdInputModule,
    MdDatepickerModule,MdNativeDateModule
  ],
  declarations: [
    AppComponent,
    DatePickerComponent,
    PlaygroundComponent
  ],
  providers: [  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }