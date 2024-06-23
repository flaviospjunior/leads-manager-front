import { Status } from '../enums/Status';
import { ILead } from '../interfaces/ILead';

export class Lead implements ILead {
  id: string;
  status: Status;
  description: string;
  price: number;
  finalPrice: number;
  creationDate: Date;
  contactName: string;
  contactEmail: string;
  contactPhoneNumber: string;
  category: string;
  suburb: string;
}
