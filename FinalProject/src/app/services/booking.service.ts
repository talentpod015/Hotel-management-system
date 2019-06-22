import { Injectable } from '@angular/core';
import { Booking } from '../models/booking.model';
import { User } from '../models/user.model';
import { Establishment } from '../models/establishment.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  bookinghistory:Booking[]=[{  Booked_by:new User(''),establishment:new Establishment('lotus temple',4,5000),Checkindate:new Date('6/06/2019'),checkoutdate:new Date('06/08/2019'),noofperson:(2),cost:(4000)},
  {  Booked_by:new User('kamal'),establishment:new Establishment('India gate',3,8000),Checkindate:new Date('09/05/2019'),checkoutdate:new Date('07/10/2019'),noofperson:(2),cost:5000},
  {   Booked_by:new User('kammo'),establishment:new Establishment('kamal',4,7000),Checkindate:new Date('06/7/2019'),checkoutdate:new Date('06/28/2019'),noofperson:(4),cost:(4000)}, 
{ Booked_by:new User('prem'),establishment:new Establishment('lotus temple',4,5000),Checkindate:new Date('05/18/2019'),checkoutdate:new Date('05/22/2019'),noofperson:(2),cost:(7000)},
  ]


  constructor() { }


  getBookinghistory()
  {
return of(this.bookinghistory);
  }
}
