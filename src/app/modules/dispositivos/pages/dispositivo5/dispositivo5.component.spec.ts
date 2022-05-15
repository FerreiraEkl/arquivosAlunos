import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dispositivo5Component } from './dispositivo5.component';

describe('Dispositivo5Component', () => {
  let component: Dispositivo5Component;
  let fixture: ComponentFixture<Dispositivo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dispositivo5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dispositivo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
