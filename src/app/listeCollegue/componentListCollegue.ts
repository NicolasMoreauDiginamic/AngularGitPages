import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/collegue';

@Component({
  selector: 'listeCollegue',
  templateUrl: './componentListCollegue.html'
})
export class CListeCollegue implements OnInit {

  @Input() collegues?:Collegue[];

  msgErr = "";
  afficherErr = true;
  
  constructor() { }

  ngOnInit(): void {
    if(!this.collegues || this.collegues.length == 0){
      this.msgErr = "Collègues disponibles...";
      this.afficherErr = false;
    }
  }

}