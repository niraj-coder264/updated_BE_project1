// navbar.component.ts
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { DataService } from '../../data.service';
import { Data2Service } from '../../data2.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  imageUrl: string | undefined;
  isLoggedIn: boolean = false; // Assume user is initially not logged in
  isHR: boolean = false;
  isCandidate: boolean = false;

  constructor(private http: HttpClient,private userService: UserService,  private dataService: DataService,private dataService2: Data2Service) {}

  ngOnInit() {
   
    this.imageUrl = 'assets/target.png';


    // Simulate user login status (replace this with your actual logic)
    this.userService.getIsLoggedIn().subscribe((loggedInStatus: boolean) => {
      this.isLoggedIn = loggedInStatus;
    });

    this.dataService.getIsHR().subscribe((isHR: boolean) => {
      this.isHR = isHR;
    });

    this.dataService2.updateIsCandidate(); // Ensure initial update

    this.dataService2.getIsCandidate().subscribe((isCandidate: boolean) => {
      this.isCandidate = isCandidate;
    });
    
  }

 
}
