import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscricao20Component } from './inscricao20.component';

describe('Inscricao20Component', () => {
  let component: Inscricao20Component;
  let fixture: ComponentFixture<Inscricao20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscricao20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscricao20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
