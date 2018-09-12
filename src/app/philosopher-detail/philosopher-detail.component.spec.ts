import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilosopherDetailComponent } from './philosopher-detail.component';

describe('PhilosopherDetailComponent', () => {
  let component: PhilosopherDetailComponent;
  let fixture: ComponentFixture<PhilosopherDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhilosopherDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhilosopherDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
