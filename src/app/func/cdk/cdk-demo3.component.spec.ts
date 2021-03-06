import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkDemo3Component } from './cdk-demo3.component';

describe('CdkDemo3Component', () => {
  let component: CdkDemo3Component;
  let fixture: ComponentFixture<CdkDemo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkDemo3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkDemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
