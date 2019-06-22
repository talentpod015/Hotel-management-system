import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  // profileForm = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]),
  //   username: new FormControl('', [Validators.required]),
  //   phoneNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9 ]*')]),
  //   // firstname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
  //   type: new FormControl('user')
  // });
  profileForm: FormGroup;
  submitted = false;
  obj: User;
  hide = true;


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
  editProfile() {
     
    this.auth.editProfile(this.profileForm.value);
    //this.auth.signUpData(this.profileForm.value);
    //this.router.navigate(['/signin']);
  }


  constructor(private formBuilder: FormBuilder, private router: Router,private auth : AuthserviceService) { }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      username: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.required, Validators.pattern('[0-9]{10}')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      role: ['', Validators.required],
      id: []
      });
      this.profileForm.patchValue(this.auth.getprofileData());
      }
      get f() { return this.profileForm.controls; }
  
      onSubmit() {
        console.log(this.profileForm);
        this.submitted = true;
        // this.obj = this.profileForm.value;
        if (this.profileForm.invalid) {
        return;
        }
        this.auth.editProfile(this.profileForm.value)
        //this.auth.profileData(this.profileForm.value)
        this.router.navigate(['/search']);
        }
        
        }