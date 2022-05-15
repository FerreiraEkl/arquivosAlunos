import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscri6Component } from './inscri6.component';

describe('Inscri6Component', () => {
  let component: Inscri6Component;
  let fixture: ComponentFixture<Inscri6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscri6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscri6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
