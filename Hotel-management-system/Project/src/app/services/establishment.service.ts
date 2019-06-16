import { Injectable } from '@angular/core';
import { Establishment } from '../models/establishment.model';
import { User } from '../models/user.model';
import { Observable, of, Subject } from 'rxjs';
import{FilterhotelComponent} from '../bookings/filterhotel/filterhotel.component'
@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {
   
  establishments : Establishment[]= [
    { id: 1, name: "Hotel Grand", type: "hotel", location: "Egmore", city: "Chennai", capacity: 2 , price: 5000, isBlock: false, averageRating: 4.2, reviews: [],bookingList: [],amenities: [ "Car parking", "First Aid" , "Wi-fi"], owner: new User() },
    { id: 2, name: "Hotel Taj", type: "hotel", location: "Guindy", city: "Chennai", capacity: 1 , price: 6000, isBlock: false, averageRating: 4.4, reviews: [],bookingList: [],amenities: [ "Car parking", "First Aid" , "Air-conditioned"], owner: new User() },
    { id: 3, name: "Hotel Trident", type: "hotel", location: "Adayar", city: "Chennai", capacity: 3 , price: 5500, isBlock: false, averageRating: 3.0, reviews: [],bookingList: [],amenities: [ "Car parking", "First Aid" , "Wi-fi"], owner: new User() },
    { id: 4, name: "Park Plaza", type: "hotel", location: "Adayar", city: "Chennai", capacity: 2 , price: 4000, isBlock: false, averageRating: 2.5, reviews: [],bookingList: [],amenities: [ "Air-conditioned", "First Aid" , "Wi-fi"], owner: new User() },
    { id: 5, name: "Le Meridien", type: "hotel", location: "Mylapore", city: "Chennai", capacity: 1 , price: 7500, isBlock: false, averageRating: 4.7, reviews: [],bookingList: [],amenities: [ "Car parking", "Air-conditioned"], owner: new User() },
    { id: 6, name: "Oberois Hotels", type: "hotel", location: "Egmore", city: "Chennai", capacity: 2 , price: 7000, isBlock: false, averageRating: 4.8, reviews: [],bookingList: [],amenities: [ "Car parking", "Air-conditioned" , "Wi-fi"], owner: new User() },
    { id: 7, name: "Lovely Homes", type: "homestay", location: "Mylapore", city: "Chennai", capacity: 1 , price: 2500, isBlock: false, averageRating: 5.0, reviews: [],bookingList: [],amenities: [ "Car parking", "Wi-fi"], owner: new User() },
    { id: 8, name: "Paradise Inn", type: "homestay", location: "Egmore", city: "Chennai", capacity: 2 , price: 3000, isBlock: false, averageRating: 4.8, reviews: [],bookingList: [],amenities: [ "Car parking", "First Aid" , "Wi-fi"], owner: new User() },
    { id: 9, name: "Green city", type: "homestay", location: "Adayar", city: "Chennai", capacity: 2 , price: 1500, isBlock: false, averageRating: 4.9, reviews: [],bookingList: [],amenities: [ "Car parking"], owner: new User() }
    ]

    getEstablishmentdata()
    {
      // if(this.getEstablishmentdata.name=='Hotel Grand')
      // var imageurl:String;
      // {
      //   imageurl='../../../assets/images/download.jpeg';
      // }
      this.establishmentsubject.next(this.establishments);
    }
    FilterhotelComponent=[]
    
    establishmentsubject=new Subject <Establishment[]>()

    getFilterData(data)
  {
  console.log(data);
  let filterDatavalue=[];

  filterDatavalue = this.establishments.filter(x => x.price >= data.minPrice);
  filterDatavalue = filterDatavalue.filter(x => x.averageRating >= data.rating);
  
  if(data.search!=="")
  {
   filterDatavalue = filterDatavalue.filter(x => x.name === data.search);
  
  }
   console.log(filterDatavalue);
   if(data.hotel==false)
   {
  filterDatavalue = filterDatavalue.filter(x => x.type==="homestay");
  console.log(filterDatavalue);
   }
   
   if(data.homestay==false)
{
   filterDatavalue = filterDatavalue.filter(x => x.type==="hotel");
 
  } 
 

  this.establishmentsubject.next(filterDatavalue);
}


getHotelLocation(locationdata)
{
  let searchHotelLocation=[];
  searchHotelLocation=this.establishments.filter(y=> y.location >= locationdata.location);

}


  constructor() { }
}
