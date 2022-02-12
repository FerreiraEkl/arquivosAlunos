import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscricao2Component } from './inscricao2.component';

describe('Inscricao2Component', () => {
  let component: Inscricao2Component;
  let fixture: ComponentFixture<Inscricao2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscricao2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscricao2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
