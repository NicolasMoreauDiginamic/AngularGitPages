import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'collegue', 
  templateUrl: './app.collegue.componentCollegue.html',
  styleUrls: ['./app.collegue.componentCollegue.scss']
})

export class Collegue implements OnInit {

    @Input() paramCollegue?: Collegue;

    constructor() {}

    ngOnInit(): void {
        
    }
}