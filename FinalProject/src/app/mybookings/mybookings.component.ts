import { Component, OnInit } from '@angular/core';
 

import { Router, ActivatedRoute } from '@angular/router';
 
import { Booking } from '../models/booking.model';
import { BookingService } from '../services/booking.service';
// import { Booking } from 'src/app/sharede/booking.model';
// import { BookingService } from 'src/app/services/booking.service';
@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit {
   
  constructor(private bookservice:BookingService,private router: Router, private route: ActivatedRoute) { }
  bookingListhistory:Booking[];
  checkIn=[]
  checkOut=[]
  ngOnInit() {
  this.bookservice.getBookinghistory().subscribe(data=>{
  this.bookingListhistory=data;
  })

  for(let s of this.bookingListhistory) {
  const date=new Date();
  if(s.Checkindate<date && s.checkoutdate<date){
  this.checkIn.push(s)
  }
  else{
  this.checkOut.push(s)
  }
  
  }
  } 

}