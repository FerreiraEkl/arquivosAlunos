import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscricao21Component } from './inscricao21.component';

describe('Inscricao21Component', () => {
  let component: Inscricao21Component;
  let fixture: ComponentFixture<Inscricao21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscricao21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscricao21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
