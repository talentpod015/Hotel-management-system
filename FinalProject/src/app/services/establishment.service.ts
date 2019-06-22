import { Injectable } from '@angular/core';
import { Establishment } from '../models/establishment.model';
import { User } from '../models/user.model';
import { Observable, of, Subject } from 'rxjs';
import { FilterhotelComponent } from '../bookings/filterhotel/filterhotel.component';
import { SearchhotelComponent } from '../bookings/searchhotel/searchhotel.component';
import { Review } from '../models/review.model';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  formData = {};
  objectId = {};

  reviews: Review[] = [
    { id: 1, rating: 4, reviewed_by: new User('John'), establishment: new Establishment('kamal',1,6577), reviewcontent: 'Excellent' },
    { id: 2, rating: 3, reviewed_by: new User('Jonas'), establishment: new Establishment('kammo',2,6784), reviewcontent: 'Good but not excellent. supporting service in not good but average' }

  ]

  searchHotelLocation: Establishment[] = [];
  establishments: Establishment[] = [
    { id: 1, name: 'Hotel Grand', type: 'hotel', location: 'Egmore', city: 'Chennai', capacity: 2, price: 5000, isBlock: false, averageRating: 4.2, reviews: this.reviews, bookingList: [], amenities: ['Car parking', 'First Aid', 'Wi-fi'], owner: new User('') },
    { id: 2, name: 'Hotel Taj', type: 'hotel', location: 'Guindy', city: 'Chennai', capacity: 1, price: 6000, isBlock: false, averageRating: 4.4, reviews: this.reviews, bookingList: [], amenities: ['Car parking', 'First Aid', 'Air-conditioned'], owner: new User('') },
    { id: 3, name: 'Hotel Trident', type: 'hotel', location: 'Adayar', city: 'Chennai', capacity: 3, price: 5500, isBlock: false, averageRating: 3.0, reviews: this.reviews, bookingList: [], amenities: ['Car parking', 'First Aid', 'Wi-fi'], owner: new User('') },
    { id: 4, name: 'Park Plaza', type: 'hotel', location: 'Adayar', city: 'Chennai', capacity: 2, price: 4000, isBlock: false, averageRating: 2.5, reviews: this.reviews, bookingList: [], amenities: ['Air-conditioned', 'First Aid', 'Wi-fi'], owner: new User('') },
    { id: 5, name: 'Le Meridien', type: 'hotel', location: 'Mylapore', city: 'Chennai', capacity: 1, price: 7500, isBlock: false, averageRating: 4.7, reviews: this.reviews, bookingList: [], amenities: ['Car parking', 'Air-conditioned'], owner: new User('') },
    { id: 6, name: 'Oberois Hotels', type: 'hotel', location: 'Egmore', city: 'Chennai', capacity: 2, price: 7000, isBlock: false, averageRating: 4.8, reviews: this.reviews, bookingList: [], amenities: ['Car parking', 'Air-conditioned', 'Wi-fi'], owner: new User('') },
    { id: 7, name: 'Lovely Homes', type: 'homestay', location: 'Mylapore', city: 'Chennai', capacity: 1, price: 2500, isBlock: false, averageRating: 5.0, reviews: this.reviews, bookingList: [], amenities: ['Car parking', 'Wi-fi'], owner: new User('') },
    { id: 8, name: 'Paradise Inn', type: 'homestay', location: 'Egmore', city: 'Chennai', capacity: 2, price: 3000, isBlock: false, averageRating: 4.8, reviews: this.reviews, bookingList: [], amenities: ['Car parking', 'First Aid', 'Wi-fi'], owner: new User('') },
    { id: 9, name: 'Green city', type: 'homestay', location: 'Adayar', city: 'Chennai', capacity: 2, price: 1500, isBlock: false, averageRating: 4.9, reviews: this.reviews, bookingList: [], amenities: ['Car parking'], owner: new User('') },
    { id: 10, name: 'Electronic city', type: 'homestay', location: 'phase-1', city: 'Bangalore', capacity: 2, price: 15000, isBlock: false, averageRating: 4.9, reviews: this.reviews, bookingList: [], amenities: ['Car parking'], owner: new User('') },
    { id: 11, name: 'Btm layout', type: 'hotel', location: 'stage-1', city: 'Bangalore', capacity: 2, price: 25000, isBlock: false, averageRating: 4.9, reviews: this.reviews, bookingList: [], amenities: ['Air-conditioned'], owner: new User('') },
    { id: 12, name: 'Patna', type: 'homestay', location: 'Indrapuri', city: 'Patna', capacity: 2, price: 12000, isBlock: false, averageRating: 4.9, reviews: this.reviews, bookingList: [], amenities: ['Car parking'], owner: new User('') },
    { id: 13, name: 'hawrah', type: 'homestay', location: 'phase-1', city: 'Kolkata', capacity: 2, price: 8000, isBlock: false, averageRating: 4.9, reviews: this.reviews, bookingList: [], amenities: ['Car parking'], owner: new User('') }
  ];


  getEstablishmentdata() {

    this.establishmentsubject.next(this.searchHotelLocation);
  }
  FilterhotelComponent = []

  establishmentsubject = new Subject<Establishment[]>();

  getFilterData(data) {
    console.log(data);
    let filterDatavalue = [];

    filterDatavalue = this.searchHotelLocation.filter(x => x.price >= data.minPrice);
    filterDatavalue = filterDatavalue.filter(x => x.averageRating >= data.rating);

    if (data.search !== '') {
      filterDatavalue = filterDatavalue.filter(x => x.name === data.search);

    }
    console.log(filterDatavalue);
    if (data.hotel === false) {
      filterDatavalue = filterDatavalue.filter(x => x.type === 'homestay');
      console.log(filterDatavalue);
    }

    if (data.homestay === false) {
      filterDatavalue = filterDatavalue.filter(x => x.type === 'hotel');

    }
    this.establishmentsubject.next(filterDatavalue);
  }

  getHotelLocation(locationdata) {
    this.formData = locationdata;
    this.searchHotelLocation = this.establishments.filter(y => y.city === locationdata.location);
    this.searchHotelLocation = this.searchHotelLocation.filter(y => y.capacity >= locationdata.capacity);
    this.establishmentsubject.next(this.searchHotelLocation);
  }

  selectedLocation() {
    return this.formData;
  }

  bookHotelById(hotelid) {
    let bookid;
    bookid = this.establishments.find(y => y.id === hotelid);
    return bookid;
  }

  getReview() {

    return this.reviews;
    console.log(this.reviews);

  }
  constructor() { }
}
