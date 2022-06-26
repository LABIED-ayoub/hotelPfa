import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterReceptionnisteComponent } from './ajouter-receptionniste.component';

describe('AjouterReceptionnisteComponent', () => {
  let component: AjouterReceptionnisteComponent;
  let fixture: ComponentFixture<AjouterReceptionnisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterReceptionnisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterReceptionnisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
