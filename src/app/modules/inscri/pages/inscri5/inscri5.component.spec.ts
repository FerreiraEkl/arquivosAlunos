import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscri5Component } from './inscri5.component';

describe('Inscri5Component', () => {
  let component: Inscri5Component;
  let fixture: ComponentFixture<Inscri5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscri5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscri5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
