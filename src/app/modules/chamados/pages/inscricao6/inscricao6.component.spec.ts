import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscricao6Component } from './inscricao6.component';

describe('Inscricao6Component', () => {
  let component: Inscricao6Component;
  let fixture: ComponentFixture<Inscricao6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscricao6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscricao6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
