import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscricao14Component } from './inscricao14.component';

describe('Inscricao14Component', () => {
  let component: Inscricao14Component;
  let fixture: ComponentFixture<Inscricao14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscricao14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscricao14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
