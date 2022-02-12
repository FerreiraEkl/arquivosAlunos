import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscricao19Component } from './inscricao19.component';

describe('Inscricao19Component', () => {
  let component: Inscricao19Component;
  let fixture: ComponentFixture<Inscricao19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscricao19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscricao19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
