import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dispositivo3Component } from './dispositivo3.component';

describe('Dispositivo3Component', () => {
  let component: Dispositivo3Component;
  let fixture: ComponentFixture<Dispositivo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dispositivo3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dispositivo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
