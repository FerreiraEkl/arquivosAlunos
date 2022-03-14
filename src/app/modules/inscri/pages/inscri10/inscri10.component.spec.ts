import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscri10Component } from './inscri10.component';

describe('Inscri10Component', () => {
  let component: Inscri10Component;
  let fixture: ComponentFixture<Inscri10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscri10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscri10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
