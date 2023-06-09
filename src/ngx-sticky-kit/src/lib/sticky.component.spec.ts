import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyComponent } from './sticky.component';

@Component({
  selector: 'test-component',
  template: '<sticky [sticky-offset-top]="50"></sticky>'
})
export class TestComponent {}

describe('ngx-sticky-kit', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StickyComponent, TestComponent]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('is defined', () => {
    let stickyElement = fixture.nativeElement.querySelector('sticky');
    expect(StickyComponent).toBeDefined();
    expect(stickyElement).toBeDefined();
  });
});
