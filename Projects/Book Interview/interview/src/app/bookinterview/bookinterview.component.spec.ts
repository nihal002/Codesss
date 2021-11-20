import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookinterviewComponent } from './bookinterview.component';

describe('BookinterviewComponent', () => {
  let component: BookinterviewComponent;
  let fixture: ComponentFixture<BookinterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookinterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookinterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
