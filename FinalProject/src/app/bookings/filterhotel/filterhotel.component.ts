import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EstablishmentService } from 'src/app/services/establishment.service';
import { filter } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-filterhotel',
  templateUrl: './filterhotel.component.html',
  styleUrls: ['./filterhotel.component.css']
})
export class FilterhotelComponent implements OnInit {
  filterForm = new FormGroup({
    search: new FormControl(''),
    hotel: new FormControl(true),
    homestay: new FormControl(true),
    minPrice: new FormControl(1000),
    rating: new FormControl(1)
  })

  constructor(private establishmentService: EstablishmentService) { }

  ngOnInit() {
    this.filterForm.valueChanges.subscribe((data) => {
      this.establishmentService.getFilterData(data)
    })

  }

  setRating(value: number) {
    return this.filterForm.get('rating').setValue(value);
  }
}
