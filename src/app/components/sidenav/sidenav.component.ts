import { LessonService } from './../../shared/lesson.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private lessonService:LessonService) { }

  ngOnInit() {
  }

goToLesson(lessonId:number){
  this.lessonService.setSelectedLessonItem(lessonId);
}
}
