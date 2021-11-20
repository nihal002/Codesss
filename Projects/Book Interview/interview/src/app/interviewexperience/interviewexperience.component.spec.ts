import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewexperienceComponent } from './interviewexperience.component';

describe('InterviewexperienceComponent', () => {
  let component: InterviewexperienceComponent;
  let fixture: ComponentFixture<InterviewexperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewexperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewexperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
