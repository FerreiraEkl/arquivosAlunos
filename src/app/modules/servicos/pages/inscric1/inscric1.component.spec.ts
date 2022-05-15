import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscric1Component } from './inscric1.component';

describe('Inscric1Component', () => {
  let component: Inscric1Component;
  let fixture: ComponentFixture<Inscric1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscric1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscric1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
