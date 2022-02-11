import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'accueil',
  templateUrl: './componentAccueil.html',
})
export class CAccueil implements OnInit {

  //@Input() collegues?:Collegue[];
  
  constructor(private dataServ: DataService) { }

  ngOnInit(): void {
    
  }

  actualiser(){
    this.dataServ.rafraichirListeCollegues();
  }

}