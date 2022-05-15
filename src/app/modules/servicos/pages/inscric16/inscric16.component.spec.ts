import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscric16Component } from './inscric16.component';

describe('Inscric16Component', () => {
  let component: Inscric16Component;
  let fixture: ComponentFixture<Inscric16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscric16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscric16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
