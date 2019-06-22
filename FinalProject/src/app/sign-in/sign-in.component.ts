import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { EstablishmentService } from 'src/app/services/establishment.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  submitted = false;
  profileForm = new FormGroup({
    // email : new FormControl('', [Validators.required, Validators.email]),
    // password : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]),
    // password : new FormControl('', [Validators.required ]),

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
  constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthserviceService) { }
  hide = true;

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,
      ]],
    });

  }

  errormessage;
  onSubmit() {
    console.log(this.profileForm);
    this.submitted = true;
    if (this.profileForm.invalid) {
      return;
    }

    const login = this.auth.signIn(this.profileForm.value);
    if (login)
    {
      this.router.navigate(['/search']);
    }
    else
      this.errormessage = 'invalid email or password';
  }

}

