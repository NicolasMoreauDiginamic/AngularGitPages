import { Component, Input, OnInit } from '@angular/core';
import { Avis, Collegue } from '../models/collegue';


@Component({
  selector: 'collegue', 
  templateUrl: './componentCollegue.html',
  styleUrls : ['./componentCollegue.scss']
})

export class CCollegue implements OnInit {

    @Input() paramCollegue!: Collegue;
    aimeActif = false;
    detesteActif = false;

    constructor() {}

    ngOnInit(): void {
        
    }

    traiterAvis(avis:Avis){
      if (avis==Avis.Aimer){
        this.paramCollegue.score
      }
      else{
        this.paramCollegue.score -= 100;
        this.aimeActif = this.paramCollegue.score < 1000?false:true;
        this.detesteActif = this.paramCollegue.score >- 1000?false:true;
      }
    }
}