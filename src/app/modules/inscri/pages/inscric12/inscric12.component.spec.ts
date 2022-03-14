import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscric12Component } from './inscric12.component';

describe('Inscric12Component', () => {
  let component: Inscric12Component;
  let fixture: ComponentFixture<Inscric12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscric12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscric12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
