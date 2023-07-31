import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoReactiveComponent } from './no-reactive.component';

describe('NoReactiveComponent', () => {
  let component: NoReactiveComponent;
  let fixture: ComponentFixture<NoReactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoReactiveComponent]
    });
    fixture = TestBed.createComponent(NoReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
