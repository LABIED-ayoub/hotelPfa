import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerChambreComponent } from './lister-chambre.component';

describe('ListerChambreComponent', () => {
  let component: ListerChambreComponent;
  let fixture: ComponentFixture<ListerChambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerChambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListerChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
