import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Box } from '../box';
import { BoxService } from '../box.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
})
export class BoxSearchComponent implements OnInit {
  title = 'Stack & Stō';
  
  boxes$!: Observable<Box[]>;
  private searchTerms = new Subject<string>();

  constructor(private boxService: BoxService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.boxes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.boxService.searchBoxes(term)),
    );
  }
}