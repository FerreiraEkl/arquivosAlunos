import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscricao3Component } from './inscricao3.component';

describe('Inscricao3Component', () => {
  let component: Inscricao3Component;
  let fixture: ComponentFixture<Inscricao3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscricao3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscricao3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
