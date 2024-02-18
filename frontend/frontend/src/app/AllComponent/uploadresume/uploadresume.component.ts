import { Component, OnInit } from '@angular/core';
import { Data2Service } from '../../data2.service';
import { Data4Service } from '../../data4.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-uploadresume',
  templateUrl: './uploadresume.component.html',
  styleUrls: ['./uploadresume.component.css']
})
export class UploadresumeComponent implements OnInit {
  name: string = '';
  profileData: { name: string, email: string } | null = null;
  jobData: { appliedRole: string, appliedCompany: string } | null = null;

  constructor(
    private dataService2: Data2Service,
    private dataService4: Data4Service,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dataService2.getUsername().subscribe((name: string) => {
      this.name = name;
    });

    this.dataService4.profileData$.subscribe(data => this.profileData = data);
    this.dataService4.jobData$.subscribe(data => this.jobData = data);
  }

  upload(): void {
    const postData = {
      name: this.profileData?.name || '',
      email: this.profileData?.email || '',
      appliedRole: this.jobData?.appliedRole || '',
      appliedCompany: this.jobData?.appliedCompany || ''
    };

    this.http.post("http://localhost:8086/student/appliedjob", postData).subscribe(
      (resultData: any) => {
        console.log(resultData);
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Applied Successfully ',
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
        });

        // Optionally, navigate to another route after successful upload
        // this.router.navigate(['/some-other-route']);
      },
      (error) => {
        console.error('Error uploading resume:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Failed to apply. Please try again later.',
          confirmButtonText: 'OK',
        });
      }
    );
  }
}
