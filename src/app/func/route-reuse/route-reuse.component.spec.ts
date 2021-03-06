import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteReuseComponent } from './route-reuse.component';

describe('RouteReuseComponent', () => {
  let component: RouteReuseComponent;
  let fixture: ComponentFixture<RouteReuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteReuseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteReuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
