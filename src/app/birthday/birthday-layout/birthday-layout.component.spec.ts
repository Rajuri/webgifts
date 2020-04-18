import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayLayoutComponent } from './birthday-layout.component';

describe('BirthdayLayoutComponent', () => {
  let component: BirthdayLayoutComponent;
  let fixture: ComponentFixture<BirthdayLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdayLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
