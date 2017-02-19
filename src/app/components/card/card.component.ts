import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
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


}
