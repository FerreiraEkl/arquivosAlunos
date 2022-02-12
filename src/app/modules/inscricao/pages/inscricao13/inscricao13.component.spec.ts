import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscricao13Component } from './inscricao13.component';

describe('Inscricao13Component', () => {
  let component: Inscricao13Component;
  let fixture: ComponentFixture<Inscricao13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscricao13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscricao13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
