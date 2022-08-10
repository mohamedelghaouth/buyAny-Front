import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  signUpForm : FormGroup = new FormGroup({
    fullName: new FormControl(),
    userName: new FormControl(),
    password: new FormControl(),
    passwordConfirmation: new FormControl(),

  });

  constructor() { }

  ngOnInit() {  }

  onSubmit(){
    console.warn(this.signUpForm.value);
    
  }

}
