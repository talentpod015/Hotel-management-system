import { Injectable } from '@angular/core';
import { Booking } from '../models/booking.model';
import { User } from '../models/user.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  isLoggedIn = false;
  isSignUp=false;
  obj:User;
  loginSubject = new Subject<boolean>();
  loggedInUser: User;
  users: User[] = [
    { id: 1, username: "admin", email: "admin@admin.com", phoneNumber: "9900000000", password: "abc12@Abc", isBlock: false, role: "1", establishment: [], reviews: [], bookingList: [] },
    { id: 2, username: "shalu", email: "abc@123.com", phoneNumber: "9900000000", password: "abc12@Abc", isBlock: false, role: "2", establishment: [], reviews: [], bookingList: [] },
    { id: 3, username: "test", email: "test@test.com", phoneNumber: "9900000000", password: "12345678", isBlock: false, role: "3", establishment: [], reviews: [], bookingList: [] },
    { id: 4, username: "test1", email: "kksahani17@gmail.com", phoneNumber: "9900000000", password: "Lgkamal@333", isBlock: false, role: "3", establishment: [], reviews: [], bookingList: [] }
  ]

  constructor(private router: Router) { }
  signIn(signinForm) {
    if (signinForm) {
      let sign = this.users.find(x => x.email === signinForm.email && x.password === signinForm.password)
      if (sign) {
        this.obj = sign;
        this.loggedInUser = sign;
        this.isLoggedIn = true;
        this.loginSubject.next(this.isLoggedIn)
        return true;
      }
      else {
        this.isLoggedIn = false;
        this.loginSubject.next(this.isLoggedIn)
        return false;
      }
    }
  }


  signUp() {
    this.isLoggedIn = false;
    this.loginSubject.next(this.isLoggedIn)
    this.router.navigate(['/signin'])
  }


   signUpData(user) {
    // let newUser:any;
    //   newUser = {id: 5, username: "kamal", email: "kamal@admin.com", phoneNumber: "9900000000", password: "Lgkamal@666", isBlock: false, role: "1", establishment: [], reviews: [], bookingList: [] };
    user.bookingList=[];
    user.establishment= [];
    user.id=this.users.length+1;
    user.isBlock= false;
    user.reviews= [];
    this.users.push(user);
    this.obj = user;
    console.log(this.users);
    this.isLoggedIn = true;
    this.loginSubject.next(this.isLoggedIn)
    this.router.navigate(['/search']);   
      //   this.isSignUp = false;
      //  this.loginSubject.next(this.isSignUp)
      //     this.router.navigate(['/signin'])
  }

  logout() {
    this.isLoggedIn = false;
    this.obj = null;
    this.loginSubject.next(this.isLoggedIn);
    this.router.navigate(['/signin']);
    }

    getprofileData(){
      return this.obj
      }
 

      editProfile(editData)
      {
        for(var user in this.users)
        {
        if(this.users[user].id === editData.id)
      {
          this.users[user]=editData;
        }
        }
        console.log(this.users);
        this.obj=editData;
        // this.getprofileData();

      }
      
 
}

