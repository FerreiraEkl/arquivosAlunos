import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscricao11Component } from './inscricao11.component';

describe('Inscricao11Component', () => {
  let component: Inscricao11Component;
  let fixture: ComponentFixture<Inscricao11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscricao11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscricao11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
