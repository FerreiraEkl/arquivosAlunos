import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscric11Component } from './inscric11.component';

describe('Inscric11Component', () => {
  let component: Inscric11Component;
  let fixture: ComponentFixture<Inscric11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inscric11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscric11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
