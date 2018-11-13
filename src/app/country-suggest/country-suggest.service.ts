import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import { of as observableOf } from 'rxjs/observable/of'
import { catchError, map, tap } from 'rxjs/operators';
import { Country } from './country-suggest';

@Injectable()
export class CountrySuggestService {

  private apiUrl: string;

  constructor(
    private http: HttpClient) { }

  setApiUrl(apiUrl) {
    this.apiUrl = apiUrl;
  }

  getCountries (): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl)
      .pipe(
        tap(_ => this.log('fetched Countries')),
        catchError(this.handleError('getCountries', []))
      );
  }

  searchCountries(term: string): Observable<Country[]> {
    if (!term.trim()) {
      return observableOf([]);
    }
    return this.http.get<Country[]>(`${this.apiUrl}/${term}`).pipe(
      tap(_ => this.log(`found Countries matching "${term}"`)),
      catchError(this.handleError<Country[]>('searchCountries', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return observableOf(result as T);
    };
  }

  private log(message: string) {
    console.log('Country Suggest Service Msg:', message);
  }
}
