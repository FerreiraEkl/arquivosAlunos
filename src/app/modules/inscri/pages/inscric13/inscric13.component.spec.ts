import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscric13Component } from './inscric13.component';

describe('Inscric13Component', () => {
  let component: Inscric13Component;
  let fixture: ComponentFixture<Inscric13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscric13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscric13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
