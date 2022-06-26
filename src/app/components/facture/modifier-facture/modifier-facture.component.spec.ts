import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierFactureComponent } from './modifier-facture.component';

describe('ModifierFactureComponent', () => {
  let component: ModifierFactureComponent;
  let fixture: ComponentFixture<ModifierFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierFactureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
