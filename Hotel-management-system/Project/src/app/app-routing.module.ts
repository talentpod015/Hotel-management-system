import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BookingComponent } from './booking/booking.component';
import { BookinglistComponent } from './bookings/bookinglist/bookinglist/bookinglist.component';
const routes: Routes = [
  { path: 'signin', component: SignInComponent  },
  { path: 'signup', component: SignUpComponent },
  {path : 'booking', component :BookinglistComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
