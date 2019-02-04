import { TestBed } from '@angular/core/testing';

import { VizsgaService } from './vizsga.service';

describe('VizsgaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VizsgaService = TestBed.get(VizsgaService);
    expect(service).toBeTruthy();
  });
});
