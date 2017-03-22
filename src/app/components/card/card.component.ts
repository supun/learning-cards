import { Component, OnDestroy,ElementRef } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import {Observable,Subject} from 'rxjs/Rx';
import { HighlightJsService } from 'angular2-highlight-js';
import { Lesson } from './../../shared/model/lesson';
import { LessonService } from './../../shared/lesson.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnDestroy  {
  lessons:Lesson[];
  lesson:Lesson;
  nextLesson:Lesson;
  subscription:Subscription;
  currentCardNumber:number=1;
  userName: string = "Wilfried Ifland";
  avatarUrl: string = 'assets/small.png';

  progress: number = 0;
  sampleContent: string;

  title: string = "Introduction";
  flipFront:string ='';
  flippedBack:string ='';
  contentHTML: string = `<p>This Ecma Standard defines the ECMAScript 2015 Language. It is the<b> sixth</b> <b>edition</b> of the ECMAScript Language Specification. Since publication of the first edition in 1997, ECMAScript has grown to be one of the world’s most widely used general purpose programming languages. It is best known as the language embedded in web browsers but has also been widely adopted for server and embedded applications. The<b> sixth edition</b> is the most extensive update to ECMAScript since the publication of the first edition in 1997.<br></p><p>ECMAScript is based on several originating technologies, the most well-known being JavaScript (Netscape) and JScript (Microsoft). The language was invented by Brendan Eich<br></p><p><i><a href="http://www.ecma-international.org/ecma-262/6.0/" target="_blank">http://www.ecma-international.org/ecma-262/6.0/</a></i><br></p><p><br></p>
  `;

  constructor(private lessonService: LessonService,private el: ElementRef, private service : HighlightJsService) { 
    this.subscription = lessonService.selectedLessonSource$.subscribe(
          lesson =>{
            this.lesson = lesson;
            this.lesson.code = `<pre>
            <code class="typescript highlight">`+this.lesson.code+`</code>
        <pre>`;
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
