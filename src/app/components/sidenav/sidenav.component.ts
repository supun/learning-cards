import { Component, OnInit } from '@angular/core';
import { Lesson } from './../../shared/model/lesson';
import { LessonService } from './../../shared/lesson.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
   lessons:Lesson[];
   lesson:Lesson;
  constructor(private lessonService:LessonService) {
    this.lessonService.getLessionsData().
     do(console.log)
     .subscribe(
       data => {
        this.lessons = data;
        this.lessonService.setLoadedLessonSource(this.lessons);
        this.lesson = this.lessons[0];
        this.lessonService.setSelectedLessonItem(this.lessons[0]);
        if(this.lessons.length>this.lesson.id){
           this.lessonService.setNextLessonItem(this.lessons[this.lesson.id]);
        }
      },
      err => console.error(err)
     );
     
     
   }

  ngOnInit() {
  }

goToLesson(lesson:Lesson){
  this.lessonService.setSelectedLessonItem(lesson);
  this.lesson = lesson;
   if(this.lessons.length>this.lesson.id){
           this.lessonService.setNextLessonItem(this.lessons[this.lesson.id]);
  }
}
}
