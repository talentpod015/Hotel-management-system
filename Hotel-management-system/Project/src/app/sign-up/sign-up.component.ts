import { Component, OnInit } from '@angular/core';
 
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { User } from '../models/user.model';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  profileForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]),
    username : new FormControl('', [Validators.required]),
    phoneNumber : new FormControl('', [Validators.required,Validators.pattern('[0-9 ]*')]),
    type: new FormControl('user')
  })
  
  
  getEmailErrorMessage() {
    return this.profileForm.get('email').hasError('required') ? 'You must enter email' :
    this.profileForm.get('email').hasError('email') ? 'Not a valid email' :
            '';
  }
  getPasswordErrorMessage() {
    return this.profileForm.get('password').hasError('required') ? 'You must enter password' :
    this.profileForm.get('password').hasError('pattern') ? 'allowed character is alphabet and number' :
            '';
  }

  getUserErrorMessage() {
    return this.profileForm.get('username').hasError('required') ? 'You must enter username' : '';
  }
  getPhoneNumberErrorMessage() {
    return this.profileForm.get('phoneNumber').hasError('required') ? 'You must enter phoneNumber' :
    this.profileForm.get('phoneNumber').hasError('pattern') ? 'only number is allowed' :
            '';
  }


  signUp()
  {
 console.log(this.profileForm.value);
  }
  constructor() { }
  ngOnInit() {
    
  }
}
