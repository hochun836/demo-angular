import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HammerjsComponent } from './hammerjs.component';

describe('HammerjsComponent', () => {
  let component: HammerjsComponent;
  let fixture: ComponentFixture<HammerjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HammerjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HammerjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
