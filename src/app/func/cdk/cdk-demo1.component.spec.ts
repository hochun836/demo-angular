import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkDemo1Component } from './cdk-demo1.component';

describe('CdkDemo1Component', () => {
  let component: CdkDemo1Component;
  let fixture: ComponentFixture<CdkDemo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkDemo1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
