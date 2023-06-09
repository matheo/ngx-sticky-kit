import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyComponent } from './sticky.component';

describe('StickyComponent', () => {
  let component: StickyComponent;
  let fixture: ComponentFixture<StickyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StickyComponent]
    });
    fixture = TestBed.createComponent(StickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
