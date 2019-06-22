import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { EstablishmentService } from 'src/app/services/establishment.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-searchhotel',
  templateUrl: './searchhotel.component.html',
  styleUrls: ['./searchhotel.component.css']
})
export class SearchhotelComponent implements OnInit {

  profileForm = new FormGroup({
    location: new FormControl('', [Validators.required]),
    // guest : new FormControl('', [Validators.required,]),
    // room : new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    capacity: new FormControl('')
    // type: new FormControl('user')
  });

  // filteredOptions: Observable<string[]>;


  constructor(private establishmentservice: EstablishmentService, private router: Router) {
  }

  ngOnInit() {
    this.profileForm.patchValue(this.establishmentservice.selectedLocation());
    // this.profileForm.valueChanges.subscribe((data)=>{
    //   this.establishmentservice.getHotelLocation(data);
    // });
    // this.filteredOptions = this.myControl.valueChanges
    //   .pipe(
    //     startWith(''),
    //     map(value => this._filter(value))
    //   );
  }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter(option => option.toLowerCase().includes(filterValue));
  // }

  submitForm() {
    //console.log(this.profileForm.value);
    this.establishmentservice.getHotelLocation(this.profileForm.value);
    this.router.navigate(['/booking']);
  }
  getLocationErrorMessage() {
    return this.profileForm.get('location').hasError('required') ? 'You must enter location' : '';
  }

  // AddGuest()
  // {
  //   // console.log("inside addguest");
  //   let guestCount=1;
  //   guestCount++;
  // }
}
