import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscricao18Component } from './inscricao18.component';

describe('Inscricao18Component', () => {
  let component: Inscricao18Component;
  let fixture: ComponentFixture<Inscricao18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscricao18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscricao18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
