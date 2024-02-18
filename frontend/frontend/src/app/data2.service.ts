import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Data2Service {

  constructor() { }

  private isCandidateSubject = new BehaviorSubject<boolean>(false);

  setIsCandidate(isCandidate: boolean) {
    this.isCandidateSubject.next(isCandidate);
  }

  getIsCandidate(): Observable<boolean> {
    return this.isCandidateSubject.asObservable();
  }

  updateIsCandidate() {
    this.isCandidateSubject.next(this.isCandidateSubject.value); // Trigger an update
  }
  

  private usernameSubject = new BehaviorSubject<string>('');
  setUsername(name: string) {
    this.usernameSubject.next(name);
  }

  getUsername(): Observable<string> {
    return this.usernameSubject.asObservable();
  }

  
}
