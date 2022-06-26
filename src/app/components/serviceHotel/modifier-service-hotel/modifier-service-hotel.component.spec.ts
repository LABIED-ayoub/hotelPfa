import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierServiceHotelComponent } from './modifier-service-hotel.component';

describe('ModifierServiceHotelComponent', () => {
  let component: ModifierServiceHotelComponent;
  let fixture: ComponentFixture<ModifierServiceHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierServiceHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierServiceHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
