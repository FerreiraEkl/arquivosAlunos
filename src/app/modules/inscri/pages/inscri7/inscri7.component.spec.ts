import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscri7Component } from './inscri7.component';

describe('Inscri7Component', () => {
  let component: Inscri7Component;
  let fixture: ComponentFixture<Inscri7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscri7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscri7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
