import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BookingComponent } from './booking/booking.component';
import { BookinglistComponent } from './bookings/bookinglist/bookinglist/bookinglist.component';
import { SearcbyallcariteriaComponent } from './bookings/searcbyallcariteria/searcbyallcariteria.component';
import { BookingviewComponent } from './bookings/bookingview/bookingview.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { MybookingsComponent } from './mybookings/mybookings.component';

const routes: Routes = [
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'booking', component: BookinglistComponent },
  { path: 'search', component: SearcbyallcariteriaComponent },
  { path: 'bookingview/:id', component: BookingviewComponent },
   { path: 'editprofile', component:  EditprofileComponent },
   { path: 'mybookings', component: MybookingsComponent },
  { path: '', redirectTo: 'search', pathMatch: 'full' },
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
