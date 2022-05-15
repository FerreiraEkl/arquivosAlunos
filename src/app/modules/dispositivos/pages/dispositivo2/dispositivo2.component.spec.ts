import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dispositivo2Component } from './dispositivo2.component';

describe('Dispositivo2Component', () => {
  let component: Dispositivo2Component;
  let fixture: ComponentFixture<Dispositivo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dispositivo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dispositivo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
