import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Att101Component } from './att101.component';

describe('Att101Component', () => {
  let component: Att101Component;
  let fixture: ComponentFixture<Att101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Att101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Att101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
