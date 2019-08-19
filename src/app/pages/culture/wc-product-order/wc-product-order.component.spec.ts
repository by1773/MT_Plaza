import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcProductOrderComponent } from './wc-product-order.component';

describe('WcProductOrderComponent', () => {
  let component: WcProductOrderComponent;
  let fixture: ComponentFixture<WcProductOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcProductOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcProductOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
