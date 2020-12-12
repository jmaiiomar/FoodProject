import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { CommandeProduit } from '../modele/CommandeProduit';
import { User } from '../modele/Users';
@Injectable({
  providedIn: 'root'
})

export class CommandeService {
  CommandeUrl: string = 'http://localhost:3000/command';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
  constructor(private http: HttpClient) { }
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }


  ////////////////CRUD////////////////////
  addCommande(Commande: CommandeProduit): Observable<any> {
    return this.http.post(this.CommandeUrl, Commande, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  findbyUser(): Observable<CommandeProduit[]> {
    return this.http.get<CommandeProduit[]>(this.CommandeUrl, this.httpOptions);
  }
  deleteCommande(u: User | number): Observable<any> {
    const id = typeof u === 'number' ? u : u.id;
    const url = this.CommandeUrl + '/' + id;
    return this.http.delete(url).pipe(
      map(this.extractData),
      catchError(this.handleError));;
  }


}
