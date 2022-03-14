import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscri4Component } from './inscri4.component';

describe('Inscri4Component', () => {
  let component: Inscri4Component;
  let fixture: ComponentFixture<Inscri4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscri4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscri4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
