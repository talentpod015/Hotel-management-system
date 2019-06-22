import { Component, OnInit } from '@angular/core';

import { FormControl, Validators, FormGroup } from '@angular/forms';
import { User } from '../models/user.model';
import { AuthserviceService } from '../services/authservice.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  submitted = false;
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
   
    username: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9 ]*')]),
    // firstname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    role: new FormControl('3')
  });

  getEmailErrorMessage() {
    return this.profileForm.get('email').hasError('required') ? 'You must enter email' :
      this.profileForm.get('email').hasError('email') ? 'Not a valid email' :
        '';
  }
  getPasswordErrorMessage() {
    return this.profileForm.get('password').hasError('required') ? 'You must enter password' :
      this.profileForm.get('password').hasError('pattern') ? ' password must be At least 8 characters in length one Lowercase letters on Upper case letters one number and one special character ' :
        '';
  }
 
  // getFirstNameErrorMessage() {
  //   return this.profileForm.get('firstname').hasError('required') ? 'You must enter password' :
  //     this.profileForm.get('firstname').hasError('pattern') ? 'String is only allowed' :
  //       '';
  // }

  getUserErrorMessage() {
    return this.profileForm.get('username').hasError('required') ? 'You must enter username' : '';
  }
  getPhoneNumberErrorMessage() {
    return this.profileForm.get('phoneNumber').hasError('required') ? 'You must enter phoneNumber' :
      this.profileForm.get('phoneNumber').hasError('pattern') ? 'only number is allowed' :
        '';
  }
  errormessage;
  
  signUp() {
     
    this.auth.signUpData(this.profileForm.value);
    //this.router.navigate(['/signin']);
  }

  constructor(private router: Router, private auth: AuthserviceService) { }

  ngOnInit() { }
}
