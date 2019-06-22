import { Establishment } from "./establishment.model";
import { Booking } from "./booking.model";
import { Review } from "./review.model";

export class User {
    id: number;
    username: string;
    password: string;
    email: string;
    phoneNumber: string;
    isBlock: boolean;
    role: string;
    establishment: Establishment[];
    reviews: Review[];
    bookingList: Booking[];
    
    constructor(username: string) {
        this.username = username;
    }
}