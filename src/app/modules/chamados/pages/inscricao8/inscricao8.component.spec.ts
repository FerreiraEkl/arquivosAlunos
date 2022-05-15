import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscricao8Component } from './inscricao8.component';

describe('Inscricao8Component', () => {
  let component: Inscricao8Component;
  let fixture: ComponentFixture<Inscricao8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscricao8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscricao8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
