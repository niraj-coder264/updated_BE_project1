import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router'; // Import Router from '@angular/router'
import { Data3Service } from '../../../data3.service';

@Component({
  selector: 'app-hr-dash',
  templateUrl: './hr-dash.component.html',
  styleUrls: ['./hr-dash.component.css']
})
export class HrDashComponent implements OnInit {
  showJobDetails: boolean = false;
  showSeekersDetails: boolean = false;
  email: string = '';
  appliedCompany :string ='';
  jobData: any[] = [];
  jobData1:any[]  =[];

  constructor(
    private http: HttpClient,
    private dataService: DataService,
    private router: Router, // Inject Router here,
    private dataService3: Data3Service,
  ) {}

  ngOnInit() {
    this.dataService.getUserEmail().subscribe(email => {
      this.email = email;
  
      this.http.get<any>('http://localhost:8086/student/job/' + this.email).subscribe((data) => {
        this.jobData = data.student; 
      });
  
      this.dataService3.getcompanyName().subscribe(collegeOrCompanyName => {
        this.appliedCompany = collegeOrCompanyName;
  
        // Make sure collegeOrCompanyName is set before making the HTTP request
        if (this.appliedCompany) {

          this.http.get<any>(`http://localhost:8086/${this.appliedCompany}`).subscribe((data) => {
            this.jobData1 = data.students;
            console.log("object is:" + this.jobData1)
          });

        }
      });
    });
  }

  deleteJob(jobId: string) {
    this.http.delete(`http://localhost:8086/student/job/${jobId}`).subscribe(
      (response: any) => {
        console.log('Job deleted successfully:', response);
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Job deleted successfully',
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
        }).then(() => {
          // Navigate to the desired route after the modal is closed
          this.router.navigate(['/PostJob']);
        });
      },
      (error) => {
        console.error('Error deleting job:', error);
      }
    );
  }

  togglePostedJobs() {
    this.showJobDetails = !this.showJobDetails;
    this.showSeekersDetails = false;
  }

  toggleSeekersDetails() {
    this.showSeekersDetails = !this.showSeekersDetails;
    this.showJobDetails = false;
  }




}
