import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EventEmitter } from '@angular/core';
import { UserService } from '../../user.service';
import { Data2Service } from '../../data2.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
      
  email: string = '';
  password: string = '';

  isLogin: boolean = true;
  erroMessage: string = "";

  userEmailEmitter: EventEmitter<string> = new EventEmitter<string>();


  constructor(private router: Router,private http: HttpClient,private userService:UserService,private dataService2: Data2Service) {}



  onSubmitLogin(){
      
    console.log(this.email);
    console.log(this.password);

    let bodyData = {
      email: this.email,
      password: this.password,
    };


    

    this.http.post("http://localhost:8086/student/login", bodyData).subscribe(  (resultData: any) => {
      console.log(resultData);

      if (resultData.status) 
      {

        Swal.fire({
          icon: 'success', // Setting success as the icon
          title: 'Success!', // Title of the modal
          text: 'Successfully Logged in', // Text content displayed in the modal
          confirmButtonText: 'OK', // Text for the confirm button
          cancelButtonText: 'Cancel', // Text for the cancel button
        });


        if (resultData.status) {
          this.userService.setUserEmail(this.email);
          this.userService.setIsLoggedIn(true); // Set login status to true
          this.dataService2.setIsCandidate(true);
          this.dataService2.updateIsCandidate();
          this.router.navigate(['/profile']);
          // ...
        }
        
  
       // this.router.navigate(['/jobinternship']);
        
      } 

      else if(resultData.status==false){
         
         
        this.http.post("http://localhost:8086/student/loginhr", bodyData).subscribe(  (resultData1: any) => {
          console.log(resultData1);

        if(resultData1.status){
           
          Swal.fire({
            icon: 'success', // Setting success as the icon
            title: 'Success!', // Title of the modal
            text: 'Successfully Logged in', // Text content displayed in the modal
            confirmButtonText: 'OK', // Text for the confirm button
            cancelButtonText: 'Cancel', // Text for the cancel button
          });

          if (resultData1.status) {
            this.userService.setUserEmail(this.email);
            this.userService.setIsLoggedIn(true); // Set login status to true

          
            this.router.navigate(['/profile']);
            // ...
          }

         

         

        }
        else{
            
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Incorrect Email or Password',
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel' // Optional if you want to provide a cancel button
          });

          
        }  


      });
         
            
      }

    });

    

  }


  save(){
    this.onSubmitLogin();
  }


}


function loginUser(email: string, String: StringConstructor) {
  throw new Error('Function not implemented.');
}

