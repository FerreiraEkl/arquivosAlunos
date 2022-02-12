import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscricao10Component } from './inscricao10.component';

describe('Inscricao10Component', () => {
  let component: Inscricao10Component;
  let fixture: ComponentFixture<Inscricao10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscricao10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscricao10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
