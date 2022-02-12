import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscricao17Component } from './inscricao17.component';

describe('Inscricao17Component', () => {
  let component: Inscricao17Component;
  let fixture: ComponentFixture<Inscricao17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscricao17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscricao17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
