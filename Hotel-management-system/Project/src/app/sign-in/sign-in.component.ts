import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  profileForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    // password : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]),
    password : new FormControl('', [Validators.required ]),
  })
  
  getPasswordErrorMessage() {
    return this.profileForm.get('password').hasError('required') ? 'You must enter password' :
    this.profileForm.get('password').hasError('password') ? 'Not a valid password' :
            '';
  }

  getEmailErrorMessage() {
    return this.profileForm.get('email').hasError('required') ? 'You must enter email' :
    this.profileForm.get('email').hasError('email') ? 'Not a valid email' :
            '';
  }

  
  signIn()
  {
    console.log(this.profileForm.value);
  }
  

  constructor() { }

  ngOnInit() {

    
  }

}