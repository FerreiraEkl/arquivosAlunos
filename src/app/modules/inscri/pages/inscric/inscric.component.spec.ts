import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscricComponent } from './inscric.component';

describe('InscricComponent', () => {
  let component: InscricComponent;
  let fixture: ComponentFixture<InscricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
