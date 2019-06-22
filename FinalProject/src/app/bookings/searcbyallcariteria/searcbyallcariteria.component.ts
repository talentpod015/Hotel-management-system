import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from 'src/app/services/establishment.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-searcbyallcariteria',
  templateUrl: './searcbyallcariteria.component.html',
  styleUrls: ['./searcbyallcariteria.component.css']
})
export class SearcbyallcariteriaComponent implements OnInit {
  // profileForm = new FormGroup({
  //   location : new FormControl('',),
  //    capacity:new FormControl(''),
  //   date : new FormControl(''),

  // })

  constructor(private establishmentservice: EstablishmentService) { }
  
  ngOnInit() {
    // this.profileForm.valueChanges.subscribe((data)=>{
    //   this.establishmentservice.getHotelLocation(data);
    // })
  }
}
