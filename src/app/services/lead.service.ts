import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILeadResponse } from '../interfaces/ILeadResponse';
import { Observable } from 'rxjs';
import { Status } from '../enums/Status';

const URL: string = 'https://localhost:7256/api/Lead';
@Injectable({
  providedIn: 'root',
})
export class LeadService {
  constructor(private http: HttpClient) {}

  public geaAllLeads(): Observable<ILeadResponse> {
    return this.http.get<ILeadResponse>(URL);
  }

  public changeLeadStatus(leadId: string, status: Status) {
    return this.http.patch<ILeadResponse>(`${URL}/${leadId}/${status}`, null);
  }
}
