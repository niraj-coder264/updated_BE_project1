import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string = '';
  email: string = '';
  password: string = '';
  collegeOrCompanyName: string = '';
  registerAs: string = '';

  constructor(private http: HttpClient, private router: Router) {
  }
  
  
  ngOnInit(): void
  {

  }
  onSubmit() {

    let bodydata ={
      "name":this.name,
      "email":this.email,
      "password":this.password,
      "collegeOrCompanyName":this.collegeOrCompanyName,
      "registerAs":this.registerAs
    }

    

    if(this.registerAs == "candidate"){
         
      this.http.post("http://localhost:8086/student/create",bodydata).subscribe((resultData: any)=>
      {
          console.log(resultData);
          Swal.fire('Congratulations!!',this.name+" you Registered Successfully");
          this.router.navigate(['/login']);

      });

    }
    else{
          
      this.http.post("http://localhost:8086/student/createhr",bodydata).subscribe((resultData: any)=>
      {
          console.log(resultData);
          Swal.fire('Congratulations!!',this.name+' you Registered Successfully');
          this.router.navigate(['/login']);
      });
        
    }
  }
  save()
  {
    this.onSubmit();
  }
}
