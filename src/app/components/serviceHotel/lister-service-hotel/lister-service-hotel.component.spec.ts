import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerServiceHotelComponent } from './lister-service-hotel.component';

describe('ListerServiceHotelComponent', () => {
  let component: ListerServiceHotelComponent;
  let fixture: ComponentFixture<ListerServiceHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerServiceHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListerServiceHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
