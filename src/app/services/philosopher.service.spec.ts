import { TestBed, inject } from '@angular/core/testing';

import { PhilosopherService } from './philosopher.service';

describe('PhilosopherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhilosopherService]
    });
  });

  it('should be created', inject([PhilosopherService], (service: PhilosopherService) => {
    expect(service).toBeTruthy();
  }));
});
