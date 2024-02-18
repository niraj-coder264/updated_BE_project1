import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobcarouselComponent } from './jobcarousel.component';

describe('JobcarouselComponent', () => {
  let component: JobcarouselComponent;
  let fixture: ComponentFixture<JobcarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobcarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
