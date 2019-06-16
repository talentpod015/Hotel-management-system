import { Establishment } from "./establishment.model";

export class User{
   
    id:number;
    username:string;
    password: string;
    email: string;
    phoneNumber : string;
    
    isBlock: boolean;
    role: string;
    establishment: Establishment[];
    //reviews: review[];
    //bookingList: BookingList[];
    }