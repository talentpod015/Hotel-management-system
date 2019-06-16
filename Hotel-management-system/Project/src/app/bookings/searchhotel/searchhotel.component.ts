import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-searchhotel',
  templateUrl: './searchhotel.component.html',
  styleUrls: ['./searchhotel.component.css']
})
export class SearchhotelComponent implements OnInit {

  profileForm = new FormGroup({
    location : new FormControl('', [Validators.required]),
    guest : new FormControl('', [Validators.required,]),
    room : new FormControl('', [Validators.required]),
    date : new FormControl('', [Validators.required,Validators.pattern('[0-9 ]*')]),
    // type: new FormControl('user')
  })
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;


  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}

//   search()
//   {
//  console.log(this.profileForm.value);
//   }

// }
