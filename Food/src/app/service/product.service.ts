import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Product } from '../modele/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ProductsUrl: string = 'http://localhost:3000/product';
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
    return body || { };
  }
  i=0;
  getAllPoduct(): Observable<any>  {
    return this.http.get<any[]>(this.ProductsUrl).pipe(tap(prod => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      this.i++;
   
      console.log(prod[this.i].name);
  }));
}

findbyId(id: number): Observable<any> {
  return this.http.get<any>(this.ProductsUrl + '/' + id)}
 
 
}
