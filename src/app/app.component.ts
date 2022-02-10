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
    photoURL :'photo',
    pseudo: 'test',
    score: 500
  }

  listeCollegue: Collegue[] = [{
    photoURL :'photo2',
    pseudo: 'test2',
    score: 1500
  },{
    photoURL :'photo3',
    pseudo: 'test3',
    score: 2500
  },{
    photoURL :'photo4',
    pseudo: 'test4',
    score: 2000
  }]
}
