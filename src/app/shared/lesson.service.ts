import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable,Subject} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// lessonService to be shared within the application
@Injectable()
export class LessonService {
  constructor(private http:Http) { }

    // Observable string sources
  private selectedLessonSource = new Subject<number>();

  // Observable string streams
  selectedLessonSource$ = this.selectedLessonSource.asObservable();

  // Service message commands
  setSelectedLessonItem(cardId: number) {
    this.selectedLessonSource.next(cardId);
  }

  getLessionsData():Observable<any> {
    return this.http.get('../data/people.json')
                  .do(console.log)
                 .map(res => res.json());
  }

}
