import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import 'hammerjs';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomMaterialModule } from './core/material.module';
import { AppRoutingModule } from './app-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatRadioModule } from '@angular/material/radio';
import { BookingComponent } from './booking/booking.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { SearchhotelComponent } from './bookings/searchhotel/searchhotel.component';
import { FilterhotelComponent } from './bookings/filterhotel/filterhotel.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BookinglistComponent } from './bookings/bookinglist/bookinglist/bookinglist.component';
import { BookingitemComponent } from './bookings/bookingitem/bookingitem.component';
import { MatSortModule } from '@angular/material/sort';
import { RouterModule, Routes } from '@angular/router';
import { SearcbyallcariteriaComponent } from './bookings/searcbyallcariteria/searcbyallcariteria.component';
import { BookingviewComponent } from './bookings/bookingview/bookingview.component';
import { HeaderComponent } from './bookings/header/header.component';
 import {EditprofileComponent} from './editprofile/editprofile.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    BookingComponent,
    SearchhotelComponent,
    FilterhotelComponent,
    BookinglistComponent,
    BookingitemComponent,
    SearcbyallcariteriaComponent,
    BookingviewComponent,
    HeaderComponent,
    EditprofileComponent,
    MybookingsComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule,
    MatRadioModule,
    MatCheckboxModule,
    MatIconModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSidenavModule,
    MatAutocompleteModule,
    FlexLayoutModule,
    MatSortModule,
    MatTabsModule,
    // RouterModule
    AppRoutingModule
    //  MatInputModules

  ],
  exports: [

    BrowserModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    // MatInputModules

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
