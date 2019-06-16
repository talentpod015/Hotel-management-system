import { User } from "./user.model";

export class Offer
{
   proposedBy: User[];
 accepted_by: User[];
merchant: User[];
 exp_date: Date;
status: string;  
}