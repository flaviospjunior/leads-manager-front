import { Pipe, PipeTransform } from '@angular/core';
import { Lead } from '../models/lead';
import { Status } from '../enums/Status';

@Pipe({
  name: 'leadsFilter',
  standalone: true,
})
export class LeadsFilterPipe implements PipeTransform {
  transform(leads: Lead[], status: Status): Lead[] {
    if (leads === undefined || leads.length == 0) {
      return [];
    } else {
      return leads.filter((ld) => ld.status == status);
    }
  }
}
