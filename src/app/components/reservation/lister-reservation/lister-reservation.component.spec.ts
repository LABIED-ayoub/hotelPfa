import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerReservationComponent } from './lister-reservation.component';

describe('ListerReservationComponent', () => {
  let component: ListerReservationComponent;
  let fixture: ComponentFixture<ListerReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListerReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
