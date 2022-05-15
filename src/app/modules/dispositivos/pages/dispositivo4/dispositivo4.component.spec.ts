import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dispositivo4Component } from './dispositivo4.component';

describe('Dispositivo4Component', () => {
  let component: Dispositivo4Component;
  let fixture: ComponentFixture<Dispositivo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dispositivo4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dispositivo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
