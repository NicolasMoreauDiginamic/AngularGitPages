import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'collegue', 
  templateUrl: './collegue.componentCollegue.html',
  styleUrls: ['./collegue.componentCollegue.scss']
})

export class Collegue implements OnInit {

    @Input() paramCollegue?: Collegue;

    constructor() {}

    ngOnInit(): void {
        
    }
}