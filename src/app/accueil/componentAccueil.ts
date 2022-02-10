import { Component, Input, OnInit } from '@angular/core';
import { Collegue } from '../models/collegue';

@Component({
  selector: 'accueil',
  templateUrl: './componentAccueil.html',
})
export class CAccueil implements OnInit {

  @Input() collegues?:Collegue[];
  
  constructor() { }

  ngOnInit(): void {
    
  }

}