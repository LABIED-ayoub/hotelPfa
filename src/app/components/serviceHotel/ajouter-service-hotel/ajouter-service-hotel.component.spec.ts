import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterServiceHotelComponent } from './ajouter-service-hotel.component';

describe('AjouterServiceHotelComponent', () => {
  let component: AjouterServiceHotelComponent;
  let fixture: ComponentFixture<AjouterServiceHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterServiceHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterServiceHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
