import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkDemo2Component } from './cdk-demo2.component';

describe('CdkDemo2Component', () => {
  let component: CdkDemo2Component;
  let fixture: ComponentFixture<CdkDemo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkDemo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
