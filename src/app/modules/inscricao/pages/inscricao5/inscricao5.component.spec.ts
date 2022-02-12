import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscricao5Component } from './inscricao5.component';

describe('Inscricao5Component', () => {
  let component: Inscricao5Component;
  let fixture: ComponentFixture<Inscricao5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscricao5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscricao5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
