import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcCroOrderBtnComponent } from './wc-cro-order-btn.component';

describe('WcCroOrderBtnComponent', () => {
  let component: WcCroOrderBtnComponent;
  let fixture: ComponentFixture<WcCroOrderBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcCroOrderBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcCroOrderBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
