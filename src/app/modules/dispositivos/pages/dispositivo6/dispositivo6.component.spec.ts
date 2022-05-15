import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dispositivo6Component } from './dispositivo6.component';

describe('Dispositivo6Component', () => {
  let component: Dispositivo6Component;
  let fixture: ComponentFixture<Dispositivo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dispositivo6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dispositivo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
