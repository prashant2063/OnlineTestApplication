import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { ActivatedRoute, Router } from '@angular/router';

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
    this.questionsArray.push(new Question("WWW stands for ?", ["World Whole Web", "Wide World Web", "Web World Wide", "World Wide Web"], 3));
    this.questionsArray.push(new Question("Which of the following are components of Central Processing Unit (CPU) ?", ["Arithmetic logic unit, Mouse", "Arithmetic logic unit, Control unit", "Arithmetic logic unit, Integrated Circuits", "Control Unit, Monitor"], 1));
    this.questionsArray.push(new Question("Which among following first generation of computers had ?", ["Vaccum Tubes and Magnetic Drum", "Integrated Circuits", "Magnetic Tape and Transistors", "All of above"], 0));
    this.questionsArray.push(new Question("Where is RAM located ?", ["Expansion Board", "External Drive", "Mother Board", "All of above"], 2));
    this.questionsArray.push(new Question("If a computer has more than one processor then it is known as ?", ["Uniprocess","Multiprocessor","Multithreaded","Multiprogramming"], 1));
    this.questionsArray.push(new Question("If a computer provides database services to other, then it will be known as ?",["Web server","Application server","Database server","FTP server"],2));
    this.questionsArray.push(new Question("Full form of URL is ?",["Uniform Resource Locator","Uniform Resource Link","Uniform Registered Link","Unified Resource Link"],0));
    this.questionsArray.push(new Question("In which of the following form, data is stored in computer ?",["Decimal","Binary","HexaDecimal","Octal"],1));
    this.questionsArray.push(new Question("Technology used to provide internet by transmitting data over wires of telephone network is ?",["Transmitter","Diodes","HHL","DSL"],3));
    this.questionsArray.push(new Question("Which level language is Assembly Language ?",["high-level programming language","medium-level programming language","low-level programming language","machine language"],2));
    this.questionsArray.push(new Question("Documents, Movies, Images and Photographs etc are stored at a ?",["Application Sever","Web Sever","Print Server","File Server"],3));
    this.questionsArray.push(new Question("Which of following is used in RAM ?",["Conductor","Semi Conductor","Vaccum Tubes","Transistor"],1));
    this.questionsArray.push(new Question("What is full form of GUI in terms of computers ?",["Graphical user Instrument","Graphical unified Interface","Graphical unified Instrument","Graphical user Interface"],3));
    this.questionsArray.push(new Question("What is full form of ALU ?",["Arithmetic logic unit","Allowed logic unit","Ascii logic unit","Arithmetic least unit"],0));
    this.questionsArray.push(new Question("Where are saved files stored in computer ?",["RAM","Hard disk","Cache","Any of above"],1));

    this.currentQuestion = history.state.questionNumber;
    this.selectedAnswer = -1;
  }

  ngOnInit(): void {
  }

  nextBtnClickEventHandler(){
    // console.log(history.state);
    this.selectedAnswerArray.push(this.selectedAnswer);
    this.currentQuestion = 1 + history.state.questionNumber;
    (history.state.questionNumber)++;
    this.router.navigateByUrl("/test");
    this.selectedAnswer = -1;
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
    // console.log(score,maxScore);
    this.router.navigateByUrl("/finish",{state:{"score":score,"maxScore":maxScore}});
  }
  onAnswerChange(value){
    this.selectedAnswer = parseInt(value);
 }
}
