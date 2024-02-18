import { Component, OnInit } from '@angular/core';
import { Data2Service } from '../../data2.service';

@Component({
  selector: 'app-jobinternship',
  templateUrl: './jobinternship.component.html',
  styleUrl: './jobinternship.component.css'
})
export class JobinternshipComponent implements OnInit {
  name: string = '';
    constructor(   private dataService2: Data2Service){

    }

   ngOnInit(): void {
    this.dataService2.getUsername().subscribe((name: string) => {
      this.name = name;
    });
   }
}
