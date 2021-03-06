import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionOutterComponent } from './change-detection-outter.component';

describe('ChangeDetectionOutterComponent', () => {
  let component: ChangeDetectionOutterComponent;
  let fixture: ComponentFixture<ChangeDetectionOutterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDetectionOutterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionOutterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
