import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CAccueil } from './accueil/componentAccueil';

import { AppComponent } from './app.component';
import { CAvis } from './avis/componentAvis';
import { CCollegue } from './collegue/componentCollegue';
import { CNewCollegue } from './formulaire/componentNewCollegue';
import { CListeCollegue } from './listeCollegue/componentListCollegue';
import { ScorePipe } from './pipes/scorePipe';
import { CRafraichir } from './rafraichir/componentRafraichir';
import { NomPrenomValidatorDirective } from './validators/nomPrenomValidatorDirective';
import { PseudoValidatorDirective } from './validators/pseudoValidatorDirective';

@NgModule({
  declarations: [
    AppComponent,
    CCollegue,
    CAvis,
    CAccueil,
    CListeCollegue,
    ScorePipe,
    CRafraichir,
    CNewCollegue,
    NomPrenomValidatorDirective,
    PseudoValidatorDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
