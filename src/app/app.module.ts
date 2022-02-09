import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CAvis } from './avis/componentAvis';
import { CCollegue } from './collegue/componantCollegue';

@NgModule({
  declarations: [
    AppComponent,
    CCollegue,
    CAvis
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
