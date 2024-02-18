import { Component, ElementRef, OnInit} from '@angular/core';
import { JobcardService } from '../../services/jobcard.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Data4Service } from '../../data4.service';

@Component({
  selector: 'app-jobcarousel',
  templateUrl: './jobcarousel.component.html',
  styleUrls: ['./jobcarousel.component.css']
})
export class JobcarouselComponent implements OnInit {
  jobs: any[] = []; // Adjust this type based on your actual job object structure

  constructor(private http: HttpClient,private router: Router,private dataService4: Data4Service) { }

  ngOnInit(): void {
    this.fetchJobs();

  }

  fetchJobs(): void {
    this.http.get<any[]>('http://localhost:8086/alljob')
      .subscribe(
        data => {
          this.jobs = data;
          console.log('Fetched data:', this.jobs);
        },
        error => {
          console.error('Error fetching jobs:', error);
        }
      );
  }

  applyForJob(jobRole: string, companyName: string) {
    const jobData = { appliedRole: jobRole, appliedCompany: companyName };
    this.dataService4.setJobData(jobData);
    this.router.navigate(['/resumeupload']);
  }



}
