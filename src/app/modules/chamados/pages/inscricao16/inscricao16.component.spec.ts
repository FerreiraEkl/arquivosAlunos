import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscricao16Component } from './inscricao16.component';

describe('Inscricao16Component', () => {
  let component: Inscricao16Component;
  let fixture: ComponentFixture<Inscricao16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscricao16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscricao16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
