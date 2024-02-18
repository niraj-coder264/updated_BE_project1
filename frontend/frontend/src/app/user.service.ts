import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userEmailSubject = new BehaviorSubject<string>('');
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);


  constructor(private http: HttpClient) {}

  setUserEmail(email: string) {
    this.userEmailSubject.next(email);
  }

  getUserEmail(): Observable<string> {
    return this.userEmailSubject.asObservable();
  }

  setIsLoggedIn(status: boolean) {
    this.isLoggedInSubject.next(status); // Update isLoggedIn subject
  }

  getIsLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable(); // Return isLoggedIn subject as observable
  }


  
}
