import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { As3Component } from './as3.component';

describe('As3Component', () => {
  let component: As3Component;
  let fixture: ComponentFixture<As3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ As3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(As3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
