import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierServiceChambreComponent } from './modifier-service-chambre.component';

describe('ModifierServiceChambreComponent', () => {
  let component: ModifierServiceChambreComponent;
  let fixture: ComponentFixture<ModifierServiceChambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierServiceChambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierServiceChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
