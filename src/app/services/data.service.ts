import { Injectable } from '@angular/core';
import { Avis, Collegue } from '../models/collegue';
import { delay, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private busTabCollegues = new Subject<Collegue[]>();

  constructor(private http: HttpClient) { }

  abonnerFluxTabColegues(): Observable<Collegue[]> {
    return this.busTabCollegues.asObservable();
  }
  listerCollegues(): Observable<Collegue[]> {
    return this.http.get<Collegue[]>('https://formation-angular-collegues.herokuapp.com/api/v1/collegues');
  }

  donnerUnAvis(collegue: Collegue, avis:Avis): Observable<Collegue> {
    return this.http.post<Collegue>("https://formation-angular-collegues.herokuapp.com/api/v1/votes", {
      avis,
      pseudo: collegue.pseudo
    });
  }

  rafraichirListeCollegues(){
    this.busTabCollegues.next([]);
    this.listerCollegues()
    .pipe(
      delay(3000)
    )
    .subscribe(
      colsServeur => this.busTabCollegues.next(colsServeur)
    );
  }
}
