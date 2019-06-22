import { User } from './user.model';
import { Establishment } from './establishment.model';

export class Booking {
   Booked_by: User;
   establishment: Establishment;
  Checkindate: Date;
  checkoutdate: Date;
 // booked_by:Booked_by[];
   //Check_in date: Date;
   cost:number;
   noofperson: number;
}