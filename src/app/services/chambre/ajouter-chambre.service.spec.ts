import { TestBed } from '@angular/core/testing';

import { AjouterChambreService } from './ajouter-chambre.service';

describe('AjouterChambreService', () => {
  let service: AjouterChambreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjouterChambreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
