import { TestBed } from '@angular/core/testing';

import { ReceptionnisteService } from './receptionniste.service';

describe('ReceptionnisteService', () => {
  let service: ReceptionnisteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceptionnisteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
