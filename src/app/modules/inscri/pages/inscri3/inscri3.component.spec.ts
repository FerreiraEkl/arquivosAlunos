import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscri3Component } from './inscri3.component';

describe('Inscri3Component', () => {
  let component: Inscri3Component;
  let fixture: ComponentFixture<Inscri3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscri3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscri3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
