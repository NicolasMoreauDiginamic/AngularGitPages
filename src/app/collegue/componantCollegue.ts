import { Component, Input, OnInit } from '@angular/core';
import { Collegue } from '../models/collegue';


@Component({
  selector: 'collegue', 
  templateUrl: './componentCollegue.html',
  styleUrls: ['./componentCollegue.scss']
})

export class CCollegue implements OnInit {

    @Input() paramCollegue?: Collegue;

    constructor() {}

    ngOnInit(): void {
        
    }
}