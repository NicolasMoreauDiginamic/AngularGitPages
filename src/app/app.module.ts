import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CAccueil } from './accueil/componentAccueil';

import { AppComponent } from './app.component';
import { CAvis } from './avis/componentAvis';
import { CCollegue } from './collegue/componentCollegue';
import { CListeCollegue } from './listeCollegue/componentListCollegue';
import { ScorePipe } from './pipes/scorePipe';
import { CRafraichir } from './rafraichir/componentRafraichir';

@NgModule({
  declarations: [
    AppComponent,
    CCollegue,
    CAvis,
    CAccueil,
    CListeCollegue,
    ScorePipe,
    CRafraichir
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
