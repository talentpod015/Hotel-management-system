import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from 'src/app/services/establishment.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {FormControl, FormBuilder, FormGroup} from '@angular/forms';
import { toDate } from '@angular/common/src/i18n/format_date';

 
@Component({
  selector: 'app-bookingview',
  templateUrl: './bookingview.component.html',
  styleUrls: ['./bookingview.component.css']
})

export class BookingviewComponent implements OnInit {

constructor(private formBuilder: FormBuilder, 
  private estServices: EstablishmentService,private router:Router,private route: ActivatedRoute) { }
 
  bookingForm: FormGroup;
  bookingView={}
 
  count=1
  ngOnInit() {
  this.bookingForm = this.formBuilder.group({
  date: [""],
  todate: [""]
  });

var reviews=this.estServices.getReview();

  this.route.params.subscribe(params => {
    this.bookingView = this.estServices.bookHotelById(+params.id);
  });

  let formData = this.estServices.selectedLocation()
  this.bookingForm.get('date').setValue(formData["date"]);
this.bookingForm.get('todate').setValue(formData["todate"]);
new Date();
  //let date=this.bookingForm.get('todate').setValue(formData["todate"].getDate() +1);
 //new Date(this.bookingForm.get('todate').setValue(formData["todate"].getDate() +1));
//this.bookingForm.get().setValue(a.bookingForm.date);
  this.bookingForm.valueChanges.subscribe(dates => {
    let f=new Date(dates.date).getDate()
    let t=new Date(dates.todate).getDate()
    this.count=t-f; 
  })
  }
  
  }
  

