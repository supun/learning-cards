import { Component, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import {Observable,Subject} from 'rxjs/Rx';
import { Lesson } from './../../shared/model/lesson';
import { LessonService } from './../../shared/lesson.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnDestroy {
  lessons:Lesson[];
  lesson:Lesson;
  nextLesson:Lesson;
  subscription:Subscription;
  currentCardNumber:number=1;
  userName: string = "Wilfried Ifland";
  avatarUrl: string;

  progress: number = 0;
  //lesson: string = "Lesson 1 of 6";

  title: string = "Introduction";
  flipFront:string ='';
  flippedBack:string ='';
  contentHTML: string = `
    <p>Ut nostrud nostrud laboris reprehenderit officia reprehenderit irure. Reprehenderit id magna irure sit. Incididunt aute elit dolore pariatur do irure. Mollit officia est adipisicing voluptate tempor pariatur quis nulla minim. Sint eiusmod sint deserunt laboris Lorem eu amet do nisi minim quis aliqua.</p>

    <p>Magna do veniam do commodo ad exercitation fugiat proident elit reprehenderit occaecat do. Consectetur consectetur eu voluptate Lorem consequat sit ipsum aute eu veniam. Nostrud consectetur amet ea enim magna velit duis minim. Fugiat nulla mollit laborum sunt magna laborum. Eu pariatur sit ea nulla incididunt exercitation qui mollit. Consectetur est ut exercitation cillum ut exercitation sunt.</p>
  `;

  constructor(private lessonService: LessonService) { 
    this.subscription = lessonService.selectedLessonSource$.subscribe(
          lesson =>{
            this.lesson = lesson;
    });

     this.subscription = lessonService.loadedLessonSource$.subscribe(
          lessons =>{
            this.lessons = lessons;
    });

     this.subscription = lessonService.nextLessonSource$.subscribe(
          nextLesson =>{
            this.nextLesson = nextLesson;
    });
  } 

  

  flipCard(){
   if(this.flipFront == ''){
     this.flipFront = 'flippedFront';
    } else {
      this.flipFront ='';
    }
  
  if(this.flippedBack == ''){
     this.flippedBack ='flippedBack';
    } else {
       this.flippedBack ='';
    }
  
  }

  goToLesson(lesson:Lesson){
     this.lessonService.setSelectedLessonItem(lesson);
     this.lesson = lesson;
     if(this.lessons.length>this.lesson.id){
           this.lessonService.setNextLessonItem(this.lessons[this.lesson.id]);
  }
  }
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
