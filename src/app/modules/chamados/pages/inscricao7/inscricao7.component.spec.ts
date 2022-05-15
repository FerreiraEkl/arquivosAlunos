import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscricao7Component } from './inscricao7.component';

describe('Inscricao7Component', () => {
  let component: Inscricao7Component;
  let fixture: ComponentFixture<Inscricao7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscricao7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscricao7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
