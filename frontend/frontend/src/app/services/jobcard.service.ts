import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobcardService {

  constructor() { }
 
  companyName: string = ''; // Initialize with an empty string or the default value
  description: string = ''; // Initialize with an empty string or the default value

}
