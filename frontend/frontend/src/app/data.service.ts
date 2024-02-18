import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private userEmail = new BehaviorSubject<string>('');

  setUserEmail(email: string) {
    this.userEmail.next(email);
  }

  getUserEmail() {
    return this.userEmail.asObservable();
  }




  private isHR = new BehaviorSubject<boolean>(false);

  setIsHR(isHR: boolean) {
    this.isHR.next(isHR);
  }

  getIsHR() {
    return this.isHR.asObservable();
  }

  
}
