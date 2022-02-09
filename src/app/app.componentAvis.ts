import { Component } from '@angular/core';

@Component({
  selector: 'avis',
  template :  `<h1>Avis</h1>
                <button (click)="aime()">j'aime</button>
                <button (click)="deteste()>je deteste</button>`
})

export class Avis {
  
    aime(){

    }

    deteste(){

    }
}