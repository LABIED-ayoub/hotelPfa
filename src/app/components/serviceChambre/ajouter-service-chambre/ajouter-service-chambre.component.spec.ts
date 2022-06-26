import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterServiceChambreComponent } from './ajouter-service-chambre.component';

describe('AjouterServiceChambreComponent', () => {
  let component: AjouterServiceChambreComponent;
  let fixture: ComponentFixture<AjouterServiceChambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterServiceChambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterServiceChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
