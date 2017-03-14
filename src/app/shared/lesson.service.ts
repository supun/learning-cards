import { wpObj } from './model/wpObj';
import { Lesson } from './model/lesson';
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
  private selectedLessonSource = new Subject<Lesson>();
  private nextLessonSource = new Subject<Lesson>();
  private loadedLessonSource = new Subject<Lesson[]>();

  // Observable string streams
  selectedLessonSource$ = this.selectedLessonSource.asObservable();
  nextLessonSource$ = this.nextLessonSource.asObservable();
  loadedLessonSource$ = this.loadedLessonSource.asObservable();

  // Service message commands
  setSelectedLessonItem(lesson:Lesson) {
    this.selectedLessonSource.next(lesson);
  }

 setNextLessonItem(lesson:Lesson){
   this.nextLessonSource.next(lesson);
 }
  setLoadedLessonSource(lessons:Lesson[]){
     this.loadedLessonSource.next(lessons);
  }

  getLessionsData():Observable<Lesson[]> {
    return this.http.get('https://learning-cards.000webhostapp.com/index.php/wp-json/acf/v3/posts')
                  .do(console.log)
                  .map(res => res.json())
                 //.map(res => res.json().lessons)
                 .map(wpObj.fromJsonArray);
                 //.map(Lesson.fromJsonArray);
  }

}
