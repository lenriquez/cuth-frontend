import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { KeyComponent } from './key/key.component';
import { KeyEditComponent } from './key-edit/key-edit.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyComponent,
    KeyEditComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
