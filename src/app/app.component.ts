import { Component } from '@angular/core';
import menudata from './quiz-data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quiz-app';
  menudata = menudata;
  counter=0;
  total = menudata.questions.length;
  progress = '0%';
  quizOver = false;
  currectanswers= 0;
  previousScore;
  PrevScoreHasData = false;
  constructor() { 

  
  }


  getPreviousScore(){
    if(localStorage.getItem('previousScore')!== null){
      this.previousScore = localStorage.getItem('previousScore');
      this.PrevScoreHasData = true;
    }
  }
  


  ngOnInit(){
    console.log(menudata , "aaa");
    console.log(this.total , "total")
    this.getPreviousScore();
  }

  nextQuestion(){
    console.log(this.counter , "ktuuuuuuuuuuuuu" , this.total)
    if((this.counter+1) === this.total){
      localStorage.setItem('previousScore', this.currectanswers.toString())
      this.quizOver = true;
    }
    this.counter++;
    this.progress=Math.round((this.counter/this.total*100)).toString();
      this.progress = this.progress.concat('%');
      console.log(this.progress , "????");




  }

  checkAnswer(i,event){

    if((this.menudata.questions[this.counter].correctIndex) === i+1){
      this.currectanswers++;
      console.log("correct answer");
      console.log(event , "event")
      event.target.classList.add('correct');

    }else{
      event.target.classList.add('wrong');
    }
    setTimeout(()=>{
      this.nextQuestion();
    },500)
    
    console.log(this.counter+1)
    console.log(i+1 , "q index")
  }


  playAgain(){

    this.counter=0;
    this.progress='0%';
    this.currectanswers=0;
    this.quizOver=false;
    this.getPreviousScore();
  }


  

  
}
