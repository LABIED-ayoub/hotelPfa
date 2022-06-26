import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierReservationComponent } from './modifier-reservation.component';

describe('ModifierReservationComponent', () => {
  let component: ModifierReservationComponent;
  let fixture: ComponentFixture<ModifierReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
