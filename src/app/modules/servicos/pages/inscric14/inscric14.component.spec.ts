import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscric14Component } from './inscric14.component';

describe('Inscric14Component', () => {
  let component: Inscric14Component;
  let fixture: ComponentFixture<Inscric14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscric14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscric14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
