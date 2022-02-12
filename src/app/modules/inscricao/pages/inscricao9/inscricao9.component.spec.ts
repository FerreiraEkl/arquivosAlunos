import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscricao9Component } from './inscricao9.component';

describe('Inscricao9Component', () => {
  let component: Inscricao9Component;
  let fixture: ComponentFixture<Inscricao9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscricao9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscricao9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
