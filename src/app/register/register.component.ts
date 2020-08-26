import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  open: boolean = true;     //true for login and false for register
  constructor() { }

  ngOnInit(): void {
  }

}
