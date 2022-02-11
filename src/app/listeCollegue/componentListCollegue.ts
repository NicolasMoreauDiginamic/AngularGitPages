import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Collegue } from '../models/collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'listeCollegue',
  templateUrl: './componentListCollegue.html' 
})
export class CListeCollegue implements OnInit {

  collegues!: Observable<Collegue[]>;
  
  constructor(private dateSrv: DataService) { 
    
  }

  ngOnInit(): void {
    this.collegues = this.dateSrv.abonnerFluxTabColegues();
  }

}