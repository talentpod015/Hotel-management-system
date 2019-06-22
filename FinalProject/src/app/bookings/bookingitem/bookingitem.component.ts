import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from 'src/app/services/establishment.service';
import { Establishment } from 'src/app/models/establishment.model';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bookingitem',
  templateUrl: './bookingitem.component.html',
  styleUrls: ['./bookingitem.component.css']
})

export class BookingitemComponent implements OnInit {
  @Input() appBookingItem: Establishment;
  constructor(private router: Router) 
  {

   }

  ngOnInit() {
     
  }

}
