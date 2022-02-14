import { Component, Input, OnInit } from '@angular/core';
import { Avis, Collegue } from '../models/collegue';
import { DataService } from '../services/data.service';


@Component({
  selector: 'collegue', 
  templateUrl: './componentCollegue.html'
})

export class CCollegue implements OnInit {

    @Input() col!: Collegue;
    aimeActif = false;
    detesteActif = false;

    constructor(private dataServ: DataService) {}

    ngOnInit(): void {
        this.gereEtatBtn();
    }

    traiterAvis(avis:Avis){
      if(this.col){
        this.dataServ.donnerUnAvis(this.col, avis)
        .subscribe(colServeur => this.col = colServeur);
      }
    }

    gereEtatBtn(){
      if(this.col){
          const {score} = this.col;
          if(score <= -1000){
            this.detesteActif = false;
            this.aimeActif = true;
          } else if(score >= 1000){
            this.detesteActif = true;
            this.aimeActif = false;
          } else {
            this.detesteActif = true;
            this.aimeActif = true;
          }
      }
    }
}