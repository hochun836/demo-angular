import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Func9999Component } from './func9999.component';

describe('Func9999Component', () => {
  let component: Func9999Component;
  let fixture: ComponentFixture<Func9999Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Func9999Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Func9999Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
