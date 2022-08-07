import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Currency1Component } from './currency1.component';

describe('Currency1Component', () => {
  let component: Currency1Component;
  let fixture: ComponentFixture<Currency1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Currency1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Currency1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
