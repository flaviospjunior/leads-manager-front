import { Status } from '../enums/Status';

export interface ILead {
  id: string;
  status: Status;
  description: string;
  price: number;
  finalPrice: number;
  creationDate: Date;
  contactName: string;
  contactEmail: string;
  contactNumber: string;
  category: string;
  suburb: string;
}
