import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Data3Service {

  constructor() { }

  private companyName = new BehaviorSubject<string>('');

  setcompanyName(companyName: string) {
    this.companyName.next(companyName);
  }

  getcompanyName() {
    return this.companyName.asObservable();
  }
}
