import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CAccueil } from './accueil/componentAccueil';

import { AppComponent } from './app.component';
import { CAvis } from './avis/componentAvis';
import { CCollegue } from './collegue/componentCollegue';
import { CNewCollegue } from './formulaire/componentNewCollegue';
import { CListeCollegue } from './listeCollegue/componentListCollegue';
import { CMenu } from './menu/componentMenu';
import { ScorePipe } from './pipes/scorePipe';
import { CRafraichir } from './rafraichir/componentRafraichir';
import { NomPrenomValidatorDirective } from './validators/nomPrenomValidatorDirective';
import { PseudoValidatorDirective } from './validators/pseudoValidatorDirective';

const routerConfig: Routes = [
  {
    path: 'formulaire', component: CNewCollegue
  },
  {
    path: 'collegues', component: CAccueil
  },
  {
    path:'collegues/pseudo', component: CCollegue
  },
  { path: '', pathMatch: 'full', redirectTo: '/liste' },
];

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
    PseudoValidatorDirective,
    CMenu
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
