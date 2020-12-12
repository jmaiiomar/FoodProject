import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { User } from '../modele/Users';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  UsersUrl: string = 'http://localhost:3000/users';
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
  getUsers(): Observable<any> {
    return this.http.get(this.UsersUrl, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
    addUser(user: User): Observable<any> {
    console.log(user);
    return this.http.post(this.UsersUrl, user, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  updateUser(id: number, user: User): Observable<any> {
    return this.http.put(this.UsersUrl + '/' + id, user, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));;
  }
  findbyId(id: number): Observable<any> {
    return this.http.get<any>(this.UsersUrl + '/' + id).pipe(tap(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
  }));
  }
  deleteUser(u: User | number): Observable<any> {
    const id = typeof u === 'number' ? u : u.id;
    const url = this.UsersUrl + '/' + id;
    return this.http.delete(url).pipe(
      map(this.extractData),
      catchError(this.handleError));;
  }
  login(email: string, password: string): Observable<any>{
    return this.http.post<{ access_token: any }>(this.UsersUrl + '?email=' + email + '?password=' + password, this.httpOptions).pipe(tap(res => {
      console.log(res);
      localStorage.setItem('access_token', res.access_token);
    }))
  }
  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('Panier');
   
  }
  findbyid(email: any, pass: any): Observable<any[]>  {
    return this.http.get<any[]>(this.UsersUrl + '/?email=' + email + '&&password=' +pass, this.httpOptions).pipe(tap(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
  
  }));
  }

  //Function to get JWT access token that we will use to allow the user to access the protected resources on the server
login2(user: any) {
  return this.http.post<{ access_token: any }>(this.UsersUrl, user, this.httpOptions).pipe(tap(res => {
    console.log(res.access_token);
    localStorage.setItem('access_token', res.access_token);
  }));
}

isLoggedIn()
{let token =localStorage.getItem('currentUser');
if(token)
 { return true ;}
  else 
  {return false ;}
}



}
