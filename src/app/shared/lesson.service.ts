import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs/Rx';

// lessonService to be shared within the application
@Injectable()
export class LessonService {

  constructor() { }

    // Observable string sources
  private selectedLessonSource = new Subject<number>();

  // Observable string streams
  selectedLessonSource$ = this.selectedLessonSource.asObservable();

  // Service message commands
  setSelectedLessonItem(cardId: number) {
    this.selectedLessonSource.next(cardId);
  }


}
