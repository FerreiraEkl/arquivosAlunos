import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscric17Component } from './inscric17.component';

describe('Inscric17Component', () => {
  let component: Inscric17Component;
  let fixture: ComponentFixture<Inscric17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscric17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscric17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
