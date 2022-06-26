import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidifierServiceChambreComponent } from './midifier-service-chambre.component';

describe('MidifierServiceChambreComponent', () => {
  let component: MidifierServiceChambreComponent;
  let fixture: ComponentFixture<MidifierServiceChambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidifierServiceChambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidifierServiceChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
