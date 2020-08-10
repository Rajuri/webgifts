import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bdt101Component } from './bdt101.component';

describe('Bdt101Component', () => {
  let component: Bdt101Component;
  let fixture: ComponentFixture<Bdt101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bdt101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bdt101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
