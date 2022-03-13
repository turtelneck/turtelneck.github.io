import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Box } from './box';


@Injectable({ providedIn: 'root' })
export class BoxService {

  private boxesUrl = 'api/boxes';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** GET boxes from the server */
  getBoxes(): Observable<Box[]> {
    return this.http.get<Box[]>(this.boxesUrl)
      .pipe(
        tap(_ => this.log('fetched boxes')),
        catchError(this.handleError<Box[]>('getBoxes', []))
      );
  }

  /** GET box by id. Return `undefined` when id not found */
  getBoxNo404<Data>(id: number): Observable<Box> {
    const url = `${this.boxesUrl}/?id=${id}`;
    return this.http.get<Box[]>(url)
      .pipe(
        map(boxes => boxes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} box id=${id}`);
        }),
        catchError(this.handleError<Box>(`getBox id=${id}`))
      );
  }

  /** GET box by id. Will 404 if id not found */
  getBox(id: number): Observable<Box> {
    const url = `${this.boxesUrl}/${id}`;
    return this.http.get<Box>(url).pipe(
      tap(_ => this.log(`fetched box id=${id}`)),
      catchError(this.handleError<Box>(`getBox id=${id}`))
    );
  }

  /* GET boxes whose name contains search term */
  searchBoxes(term: string): Observable<Box[]> {
    if (!term.trim()) {
      // if not search term, return empty box array.
      return of([]);
    }
    return this.http.get<Box[]>(`${this.boxesUrl}/?search=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found box matching "${term}"`) :
         this.log(`no boxes matching "${term}"`)),
      catchError(this.handleError<Box[]>('searchBoxes', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a message to the console */
  private log(message: string) {
    console.log(`BoxService: ${message}`);
  }
}