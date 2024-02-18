import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreadyappliedComponent } from './alreadyapplied.component';

describe('AlreadyappliedComponent', () => {
  let component: AlreadyappliedComponent;
  let fixture: ComponentFixture<AlreadyappliedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlreadyappliedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlreadyappliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
