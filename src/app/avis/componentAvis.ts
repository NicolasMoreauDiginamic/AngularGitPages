import { TokenizeResult } from '@angular/compiler/src/ml_parser/lexer';
import { EventEmitter,Component, Input, Output } from '@angular/core';
import { Avis } from '../models/collegue';

@Component({
  selector: 'avis', 
  templateUrl: './componentAvis.html'
})

export class CAvis {
  @Output() event = new EventEmitter<Avis>();
  @Input() aimeActif = true;
  @Input() detesteActif = true;
  
  constructor(){

  }
  ngOnInit(): void {
        
  }
  aime(){
    this.event.emit(Avis.Aimer);
  }

  deteste(){
    this.event.emit(Avis.Detester);
  }
}