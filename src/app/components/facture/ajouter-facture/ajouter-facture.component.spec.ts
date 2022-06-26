import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFactureComponent } from './ajouter-facture.component';

describe('AjouterFactureComponent', () => {
  let component: AjouterFactureComponent;
  let fixture: ComponentFixture<AjouterFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterFactureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
