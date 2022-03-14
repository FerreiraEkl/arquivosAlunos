import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscri9Component } from './inscri9.component';

describe('Inscri9Component', () => {
  let component: Inscri9Component;
  let fixture: ComponentFixture<Inscri9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscri9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscri9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
