import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { LeadService } from './services/lead.service';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Lead } from './models/lead';
import { MatGridListModule } from '@angular/material/grid-list';
import { LeadsFilterPipe } from './pipes/leads-filter.pipe';
import { FirstNamePipe } from './pipes/first-name.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { Status } from './enums/Status';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatTabsModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    CommonModule,
    MatGridListModule,
    LeadsFilterPipe,
    FirstNamePipe,
    MatIconModule,
    MatDividerModule,
    MatProgressSpinnerModule,
  ],
  providers: [HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  leads: Lead[];
  isLoading = true;

  constructor(private leadService: LeadService) {
    this.isLoading = true;
    this.getAllLeads();
  }

  ngOnInit(): void {
    this.getAllLeads();
  }

  getAllLeads() {
    this.leadService.geaAllLeads().subscribe((response) => {
      this.leads = response.leads;
      this.isLoading = false;
    });
  }

  acceptLead(leadId: string) {
    this.isLoading = true;
    this.leadService
      .changeLeadStatus(leadId, Status.Accepted)
      .subscribe((response) => {
        window.location.reload();
      });
  }

  declineLead(leadId: string) {
    this.isLoading = true;
    this.leadService
      .changeLeadStatus(leadId, Status.Refused)
      .subscribe((response) => {
        window.location.reload();
      });
  }

  title = 'leads-manager-front';
}
