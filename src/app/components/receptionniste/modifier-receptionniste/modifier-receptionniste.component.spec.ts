import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierReceptionnisteComponent } from './modifier-receptionniste.component';

describe('ModifierReceptionnisteComponent', () => {
  let component: ModifierReceptionnisteComponent;
  let fixture: ComponentFixture<ModifierReceptionnisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierReceptionnisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierReceptionnisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
