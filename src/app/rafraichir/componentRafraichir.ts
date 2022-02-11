import { DataService } from '../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rafraichir',
  templateUrl: 'componentRafraichir.html'
})
export class CRafraichir implements OnInit {

  constructor(private dataSrv: DataService) { }

  ngOnInit(): void {
  }

  rafraichir() {
    this.dataSrv.rafraichirListeCollegues()
  }

}