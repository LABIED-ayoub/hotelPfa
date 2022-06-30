import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerServiceChambreComponent } from './lister-service-chambre.component';

describe('ListerServiceChambreComponent', () => {
  let component: ListerServiceChambreComponent;
  let fixture: ComponentFixture<ListerServiceChambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerServiceChambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListerServiceChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
