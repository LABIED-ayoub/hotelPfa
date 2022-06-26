import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerReceptionnisteComponent } from './supprimer-receptionniste.component';

describe('SupprimerReceptionnisteComponent', () => {
  let component: SupprimerReceptionnisteComponent;
  let fixture: ComponentFixture<SupprimerReceptionnisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerReceptionnisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerReceptionnisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
