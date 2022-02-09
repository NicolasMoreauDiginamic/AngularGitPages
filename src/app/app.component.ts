import { Component } from '@angular/core';
import { Collegue } from './models/collegue';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'top-collegues';
  unCollegue : Collegue = {
    photoURL : '',
    pseudo: 'test',
    score: '+500'
  }
}
