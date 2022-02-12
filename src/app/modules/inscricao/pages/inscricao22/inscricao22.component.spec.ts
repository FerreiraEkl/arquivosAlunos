import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscricao22Component } from './inscricao22.component';

describe('Inscricao22Component', () => {
  let component: Inscricao22Component;
  let fixture: ComponentFixture<Inscricao22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscricao22Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscricao22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
