import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../../../data.service';
import { Data3Service } from '../../../data3.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  jobRole: string = '';
  experience: string = '';
  jobType: string = '';
  jobLocation: string = '';
  email: string = '';
  companyName:string = ''
  lastDate: string = ' '; // Set the desired date as a string
  selectedFile: File | null = null;

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files) {
        this.selectedFile = fileInput.files[0];
    }
}
  constructor(private http: HttpClient, private router: Router, private dataService: DataService,    private dataService3: Data3Service) {}

  ngOnInit(): void {
    this.dataService.getUserEmail().subscribe(email => {
      this.email = email;
    });

    this.dataService3.getcompanyName().subscribe(companyName =>{
         this.companyName = companyName;
    })
  }



  convertDateFormat(inputDate: string): string {
    if (!inputDate || inputDate.trim() === '') {
      return ''; // Return empty string for invalid or empty input
    }

    const parts = inputDate.split('/'); // Split by '/'
    if (parts.length === 3) {
      // Construct the date in YYYY-MM-DD format
      return `${parts[2]}-${parts[0].padStart(2, '0')}-${parts[1].padStart(2, '0')}`;
    }
    return ''; // Handle invalid input
  }

  postJob() {
    console.log("Last date received:", this.lastDate); // Log the value of lastDate

     // Convert trimmed lastDate format

    console.log("Converted date is:", this.lastDate);
    console.log("email is:", this.email);

    const jobData: any = {
      jobRole: this.jobRole,
      experience: this.experience,
      jobType: this.jobType,
      jobLocation: this.jobLocation,
      email: this.email,
      lastDate:this.lastDate,
      companyName:this.companyName
    };

    const formData = new FormData();

    // Append the selected file if available
    if (this.selectedFile) {
      formData.append('resume', this.selectedFile);
    }
  
    // Append job data to FormData
    for (const key in jobData) {
      if (Object.prototype.hasOwnProperty.call(jobData, key)) {
        formData.append(key, jobData[key]);
      }
    }

  

    // Your HTTP post request
    this.http.post("http://localhost:8086/student/hr/jobdetails", jobData).subscribe((resultData: any) => {
      console.log(resultData);
      Swal.fire('Congratulations!!', "Your job was posted Successfully");
      this.router.navigate(['/Hr-Dash']);
    });
  }
}
