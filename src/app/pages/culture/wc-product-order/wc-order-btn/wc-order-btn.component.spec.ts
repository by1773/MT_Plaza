import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcOrderBtnComponent } from './wc-order-btn.component';

describe('WcOrderBtnComponent', () => {
  let component: WcOrderBtnComponent;
  let fixture: ComponentFixture<WcOrderBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcOrderBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcOrderBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
