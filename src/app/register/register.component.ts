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

  switchToLogin(){
    if(!this.open){
      document.getElementById("register-form").classList.replace("d-block","d-none");
      document.getElementById("login-form").classList.replace("d-none","d-block");
      this.open = true;
    }
  }

  switchToRegister(){
    if(this.open){
      document.getElementById("login-form").classList.replace("d-block","d-none");
      document.getElementById("register-form").classList.replace("d-none","d-block");
      this.open = false;
    }
  }
}
