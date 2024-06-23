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
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AvatarLetterComponent } from './components/avatar-letter/avatar-letter.component';

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
    AvatarLetterComponent,
  ],
  providers: [HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  leads: Lead[];
  isLoading = true;

  constructor(
    private leadService: LeadService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
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
    this.leadService.changeLeadStatus(leadId, Status.Accepted).subscribe({
      next: (data) => {
        this.isLoading = true;
        setTimeout(() => {
          this.reloadCurrentRoute();
          this.getAllLeads();
          this.isLoading = false;
          this._snackBar.open(
            `O Lead ${leadId} foi aceito com sucesso!`,
            'OK',
            {
              duration: 5000,
              panelClass: 'green-snackbar',
            }
          );
        }, 1000);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  declineLead(leadId: string) {
    this.isLoading = true;
    this.leadService.changeLeadStatus(leadId, Status.Refused).subscribe({
      next: (data) => {
        this.isLoading = true;
        setTimeout(() => {
          this.reloadCurrentRoute();
          this.getAllLeads();
          this.isLoading = false;
          this._snackBar.open(
            `O Lead ${leadId} foi recusado com sucesso!`,
            'OK',
            {
              duration: 5000,
            }
          );
        }, 1000);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  title = 'Leads Manager';
}
