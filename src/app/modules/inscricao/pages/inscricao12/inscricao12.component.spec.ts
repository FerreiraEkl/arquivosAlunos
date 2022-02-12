import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscricao12Component } from './inscricao12.component';

describe('Inscricao12Component', () => {
  let component: Inscricao12Component;
  let fixture: ComponentFixture<Inscricao12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscricao12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscricao12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
