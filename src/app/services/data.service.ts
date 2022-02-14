import { Injectable } from '@angular/core';
import { Avis, Collegue, CreeCollegue } from '../models/collegue';
import { Observable, Subject } from 'rxjs';
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

  rechercherCollegueParPseudo(pseudo: string) : Observable<Collegue> {
    return this.http.get<Collegue>(`https://formation-angular-collegues.herokuapp.com/api/v1/collegues/${pseudo}`);
  }

  creerCollegue(collegue: Partial<CreeCollegue>){
    return this.http.post<Collegue>("https://formation-angular-collegues.herokuapp.com/api/v1/collegue",
      collegue);
  }

  rafraichirListeCollegues(){
    const contrat = this.listerCollegues()
    .subscribe(
      colsServeur => this.busTabCollegues.next(colsServeur)
    );

    contrat.unsubscribe();
  }

}
