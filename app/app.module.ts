import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { KeyComponent }   from './key.component';
import { TableComponent } from './table.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    TableComponent,
    KeyComponent
  ],
  bootstrap:   [ AppComponent ]
})
export class AppModule { }
