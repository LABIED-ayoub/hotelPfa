import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerServiceHotelComponent } from './supprimer-service-hotel.component';

describe('SupprimerServiceHotelComponent', () => {
  let component: SupprimerServiceHotelComponent;
  let fixture: ComponentFixture<SupprimerServiceHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerServiceHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerServiceHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
