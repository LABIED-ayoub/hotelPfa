import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerReservationComponent } from './supprimer-reservation.component';

describe('SupprimerReservationComponent', () => {
  let component: SupprimerReservationComponent;
  let fixture: ComponentFixture<SupprimerReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
