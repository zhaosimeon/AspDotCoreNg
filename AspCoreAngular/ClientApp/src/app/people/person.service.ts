import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(public http: HttpClient,  @Inject('API_URL') public baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;
   }
  create(person: Person): Observable<Person> {
    return this.http.post<Person>(this.baseUrl + 'people', JSON.stringify(person), this.httpOptions)
    .pipe(catchError(this.errorHandler));
  } 

  getById(id): Observable<Person> {
    return this.http.get<Person>(this.baseUrl + `people/${id}`)
    .pipe(catchError(this.errorHandler));
  } 

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseUrl + `people`)
    .pipe(catchError(this.errorHandler));
  } 

  update(id, person): Observable<Person> {
    return this.http.put<Person>(this.baseUrl + `people/${id}`, JSON.stringify(person), this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }

  delete(id: number){
    return this.http.delete(this.baseUrl + `people/${id}`)
    .pipe(catchError(this.errorHandler));
  } 
  
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
