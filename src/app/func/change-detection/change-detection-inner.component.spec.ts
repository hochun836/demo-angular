import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionInnerComponent } from './change-detection-inner.component';

describe('ChangeDetectionInnerComponent', () => {
  let component: ChangeDetectionInnerComponent;
  let fixture: ComponentFixture<ChangeDetectionInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDetectionInnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
