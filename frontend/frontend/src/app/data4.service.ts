import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Data4Service {

  constructor() { }

  private profileDataSubject = new BehaviorSubject<{ name: string, email: string } | null>(null);
  private jobDataSubject = new BehaviorSubject<{ appliedRole: string, appliedCompany: string } | null>(null);

  profileData$ = this.profileDataSubject.asObservable();
  jobData$ = this.jobDataSubject.asObservable();

  setProfileData(data: { name: string, email: string }) {
    this.profileDataSubject.next(data);
  }

  setJobData(data: { appliedRole: string, appliedCompany: string }) {
    this.jobDataSubject.next(data);
  }
  
}
