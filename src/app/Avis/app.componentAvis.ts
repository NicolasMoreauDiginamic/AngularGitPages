import { Component } from '@angular/core';

@Component({
  selector: 'avis', 
  template: `
    <h1>Avis 1</h1>
    <button (click)="aime()">J'aime</button>
    <button (click)="deteste()">Je deteste</button>
  `
})

export class Avis {
  
    aime(){

    }

    deteste(){

    }
}