import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerClientComponent } from './supprimer-client.component';

describe('SupprimerClientComponent', () => {
  let component: SupprimerClientComponent;
  let fixture: ComponentFixture<SupprimerClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
