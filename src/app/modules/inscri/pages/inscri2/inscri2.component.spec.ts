import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscri2Component } from './inscri2.component';

describe('Inscri2Component', () => {
  let component: Inscri2Component;
  let fixture: ComponentFixture<Inscri2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscri2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscri2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
