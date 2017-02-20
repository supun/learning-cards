import { LessonService } from './../../shared/lesson.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnDestroy {

  subscription:Subscription;
  cardList:number[] = [1,2,3];
  currentCardNumber:number=1;
  userName: string = "Wilfried Ifland";
  avatarUrl: string;

  progress: number = 0;
  lesson: string = "Lesson 1 of 6";

  title: string = "Simple text";
  flipFront:string ='';
  flippedBack:string ='';
  contentHTML: string = `
    <p>Ut nostrud nostrud laboris reprehenderit officia reprehenderit irure. Reprehenderit id magna irure sit. Incididunt aute elit dolore pariatur do irure. Mollit officia est adipisicing voluptate tempor pariatur quis nulla minim. Sint eiusmod sint deserunt laboris Lorem eu amet do nisi minim quis aliqua.</p>

    <p>Magna do veniam do commodo ad exercitation fugiat proident elit reprehenderit occaecat do. Consectetur consectetur eu voluptate Lorem consequat sit ipsum aute eu veniam. Nostrud consectetur amet ea enim magna velit duis minim. Fugiat nulla mollit laborum sunt magna laborum. Eu pariatur sit ea nulla incididunt exercitation qui mollit. Consectetur est ut exercitation cillum ut exercitation sunt.</p>
  `;

  constructor(private lessonService: LessonService) { 
    this.subscription = lessonService.selectedLessonSource$.subscribe(
          cardNumber =>{
            this.currentCardNumber = cardNumber;
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

  getCard(cardNumber:number){
this.lessonService.setSelectedLessonItem(cardNumber);
  }
ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
