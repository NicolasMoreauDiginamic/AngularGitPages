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
    photoURL : 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
    pseudo: 'test',
    score: '+500'
  }
}
