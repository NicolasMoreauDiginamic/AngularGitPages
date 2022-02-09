import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Avis } from './avis/componentAvis';
import { Collegue } from './collegue/componantCollegue';

@NgModule({
  declarations: [
    AppComponent,
    Collegue,
    Avis
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
