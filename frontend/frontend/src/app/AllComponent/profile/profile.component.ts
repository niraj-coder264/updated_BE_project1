import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../data.service';
import { Data2Service } from '../../data2.service';
import { Data3Service } from '../../data3.service';
import { Data4Service } from '../../data4.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile: any = {};
  selectedFile: File | null = null;
  userEmail: string = '';
  companyName:string ='';
  flag: boolean = false;
  snackBar: any;

  constructor(
    private userService: UserService,
    private http: HttpClient,
    private dataService: DataService,
    private dataService2: Data2Service,
    private dataService3: Data3Service,
    private dataService4: Data4Service
  ) {
    
  }

  ngOnInit() {

    this.userService.getUserEmail().subscribe(email => {
      this.userEmail = email;
      this.dataService.setUserEmail(this.userEmail);
     

      if (this.userEmail) {
        this.http.get(`http://localhost:8086/student/${this.userEmail}`).subscribe(
          (userData: any) => {
          
            console.log(userData);
            this.userProfile = userData.student;
            this.dataService2.setUsername(this.userProfile.name);
            const profile = {name:this.userProfile.name,email:this.userProfile.email};
            this.dataService4.setProfileData(profile);
          }
        );
      }

      
      if (this.userEmail) {
        this.http.get(`http://localhost:8086/student/hr/${this.userEmail}`).subscribe(
          (userData: any) => {
            this.flag = true;
            console.log(userData);
            this.userProfile = userData.student;
            this.dataService.setIsHR(true);
            console.log("company name is:"+this.userProfile.collegeOrCompanyName);
            this.dataService3.setcompanyName(this.userProfile.collegeOrCompanyName);
          }
        );
      }



    });

    


  }

 

  onResumeUpload(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files) {
      this.selectedFile = fileInput.files[0];
    }
  }

  uploadResume() {
    if (!this.selectedFile) {
      console.error('No file selected!');
      return;
    }

    if (!this.userProfile._id) {
      console.error('User profile ID not found!');
      return;
    }

    const formData = new FormData();
    formData.append('resume', this.selectedFile);

    // Call the updateResume function from UserService
  }
}
