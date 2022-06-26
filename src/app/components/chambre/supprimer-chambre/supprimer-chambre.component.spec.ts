import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerChambreComponent } from './supprimer-chambre.component';

describe('SupprimerChambreComponent', () => {
  let component: SupprimerChambreComponent;
  let fixture: ComponentFixture<SupprimerChambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerChambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
