import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerServiceChambreComponent } from './supprimer-service-chambre.component';

describe('SupprimerServiceChambreComponent', () => {
  let component: SupprimerServiceChambreComponent;
  let fixture: ComponentFixture<SupprimerServiceChambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerServiceChambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerServiceChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
