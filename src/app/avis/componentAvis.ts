import { Component } from '@angular/core';

@Component({
  selector: 'avis', 
  template: `
    <button (click)="aime()">J'aime</button>
    <button (click)="deteste()">Je deteste</button>
  `
})

export class CAvis {
  
    aime(){

    }

    deteste(){

    }
}