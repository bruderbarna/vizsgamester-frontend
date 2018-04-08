import { TestBed, inject } from '@angular/core/testing';

import { RegisztracioService } from './regisztracio.service';

describe('RegisztracioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisztracioService]
    });
  });

  it('should be created', inject([RegisztracioService], (service: RegisztracioService) => {
    expect(service).toBeTruthy();
  }));
});
