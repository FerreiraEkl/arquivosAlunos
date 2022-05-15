import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscric15Component } from './inscric15.component';

describe('Inscric15Component', () => {
  let component: Inscric15Component;
  let fixture: ComponentFixture<Inscric15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscric15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscric15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
