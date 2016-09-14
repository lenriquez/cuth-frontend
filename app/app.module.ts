import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent }   from './app.component';

import { TableComponent } from './table.component';
import { KeyComponent }   from './key.component';
import { KeyEditComponent } from './key-edit.component';

@NgModule({
  imports:      [ BrowserModule, Ng2BootstrapModule ],
  declarations: [
    AppComponent,
    TableComponent,
    KeyComponent,
    KeyEditComponent
  ],
  bootstrap:   [ AppComponent ]
})
export class AppModule { }
