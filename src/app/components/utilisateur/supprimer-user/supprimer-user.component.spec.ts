import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerUserComponent } from './supprimer-user.component';

describe('SupprimerUserComponent', () => {
  let component: SupprimerUserComponent;
  let fixture: ComponentFixture<SupprimerUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
