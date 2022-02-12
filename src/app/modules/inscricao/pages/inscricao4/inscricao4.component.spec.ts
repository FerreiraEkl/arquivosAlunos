import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscricao4Component } from './inscricao4.component';

describe('Inscricao4Component', () => {
  let component: Inscricao4Component;
  let fixture: ComponentFixture<Inscricao4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscricao4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscricao4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
