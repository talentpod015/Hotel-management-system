import { Component, OnInit, OnDestroy } from '@angular/core';
import { EstablishmentService } from 'src/app/services/establishment.service';
import { Establishment } from 'src/app/models/establishment.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.css']
})
export class BookinglistComponent implements OnInit,OnDestroy {
  establishments: Establishment[];
  subscription: Subscription;
  rating=0;
  price=0;
  
  constructor(private establishmentService:EstablishmentService) { }

  ngOnInit() {
    this.subscription = this.establishmentService.establishmentsubject.subscribe(
      (data) => this.establishments = data
    );
    this.establishmentService.getEstablishmentdata();
  }

  //this.http.get("https://api.myjson.com/bins/1g4yrl").map(Response) => Response.subscribe(data));
  ngOnDestroy()
  {
  this.subscription.unsubscribe();
  }

  ratingOnly()
  {
  if(this.rating==1)
  {
    this.rating=2;
  }
  else{
    this.rating=1
  }
  this.price = 0;
  this.sortBy();
  }

  priceOnly()
  {
  if(this.price==1)
  {
    this.price=2;
  }
  else{
    this.price=1;
  }
  this.rating = 0;
  this.sortBy();
  }

  sortBy()
  {
  // console.log('inside sort');  
  if(this.rating==1)
  {
    this.establishments.sort((x,y) => x.averageRating-y.averageRating);
  } 
  else if(this.rating==2)
  {
    this.establishments.sort((x,y) => y.averageRating-x.averageRating);
  } 
  else if(this.price==1)
  {
    this.establishments.sort((x,y) => x.price-y.price);
  } 
  else if(this.price==2)
  {
    this.establishments.sort((x,y) => y.price-x.price);
  } 
  
}

  }
