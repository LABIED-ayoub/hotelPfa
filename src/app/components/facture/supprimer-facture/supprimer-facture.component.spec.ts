import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerFactureComponent } from './supprimer-facture.component';

describe('SupprimerFactureComponent', () => {
  let component: SupprimerFactureComponent;
  let fixture: ComponentFixture<SupprimerFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerFactureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
