import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilosopherComponent } from './philosopher.component';

describe('PhilosopherComponent', () => {
  let component: PhilosopherComponent;
  let fixture: ComponentFixture<PhilosopherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhilosopherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhilosopherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
