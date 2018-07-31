import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {Angular5TableModule} from './Angular5-Table/angular5-table.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Angular5TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
