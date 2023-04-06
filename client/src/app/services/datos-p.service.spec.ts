import { TestBed } from '@angular/core/testing';

import { DatosPService } from './datos-p.service';

describe('DatosPService', () => {
  let service: DatosPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
