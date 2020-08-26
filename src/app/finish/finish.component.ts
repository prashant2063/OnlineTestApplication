import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  score:number;
  maxScore:number;
  
  constructor(public activatedRoute: ActivatedRoute, public router: Router) { 
    this.score = parseInt(this.activatedRoute.snapshot.paramMap.get('score'));
    this.maxScore = parseInt(this.activatedRoute.snapshot.paramMap.get('maxScore'));
  }

  ngOnInit(): void {
  }

  leaveBtnClickEventHandler(){
    this.router.navigateByUrl("");
  }
}
