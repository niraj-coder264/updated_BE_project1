import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobinternshipComponent } from './jobinternship.component';

describe('JobinternshipComponent', () => {
  let component: JobinternshipComponent;
  let fixture: ComponentFixture<JobinternshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobinternshipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobinternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
