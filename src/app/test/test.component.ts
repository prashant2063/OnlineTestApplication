import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { ActivatedRoute, Router } from '@angular/router';
import { NumberFormatStyle } from '@angular/common';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  selectedAnswer: number;
  currentQuestion: number;
  notLastQuestion: boolean;
  selectedAnswerArray: Array<number> = new Array();
  questionsArray: Array<Question> = new Array();

  constructor(public activatedRoute: ActivatedRoute, public router: Router) {
    this.questionsArray.push(new Question("The World Largest desert is?", ["Thar", "Kalahari", "Sahara", " Sonoran"], 2));
    this.questionsArray.push(new Question("Mount Everest is located in ?", ["India", "Nepal", "Tibet", "China"], 1));
    this.questionsArray.push(new Question("The device used for measuring altitudes is ?", ["altimeter", "ammeter", "audiometer", "galvanometer"], 0));
    this.questionsArray.push(new Question("The Gate way of India is ?", ["Chennai", "Mumbai", "Kolkata", "New Delhi"], 1));
    this.questionsArray.push(new Question("OS computer abbriviation usually means?", ["Order of Significance", "Open Software", "Operating System", "Optical Sensor"], 2));

    this.selectedAnswer = -1;
  }

  ngOnInit(): void {

    this.currentQuestion = this.activatedRoute.snapshot.params['questionNumber'];
  }

  nextBtnClickEventHandler(){
    this.selectedAnswerArray.push(this.selectedAnswer);
    this.currentQuestion = 1 + parseInt(this.activatedRoute.snapshot.params['questionNumber']);
    this.router.navigateByUrl("/test/"+this.currentQuestion);
    // console.log(this.selectedAnswerArray);
  }

  finishBtnClickEventHandler(){
    this.selectedAnswerArray.push(this.selectedAnswer);
    let score:number = 0;
    let questionWeight:number = 10;
    let maxScore:number = this.questionsArray.length * questionWeight;
    let negetiveFraction:number = 0;       //value between 0-1;
    for(let i=0;i<this.questionsArray.length;i++){
      if(this.questionsArray[i].correct == this.selectedAnswerArray[i]){
        score = score + questionWeight;
      }
      else{
        score = score - (questionWeight*negetiveFraction);
      }
    }
    console.log(score,maxScore);
    this.router.navigateByUrl(`/finish/${score}/${maxScore}`);
  }
  onAnswerChange(value){
    this.selectedAnswer = parseInt(value);
 }
}
