import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Categorie } from '../modele/Categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  UsersUrl: string = 'http://localhost:3000/categorie';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
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
  getCategories(): Observable<any> {
    return this.http.get(this.UsersUrl, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  findbyId(id: number): Observable<any> {
    return this.http.get<any>(this.UsersUrl + '?id=' + id).pipe(tap(prod => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
   return prod[0];
  }));

  }

}
