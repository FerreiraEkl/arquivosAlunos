import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscri8Component } from './inscri8.component';

describe('Inscri8Component', () => {
  let component: Inscri8Component;
  let fixture: ComponentFixture<Inscri8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscri8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscri8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
