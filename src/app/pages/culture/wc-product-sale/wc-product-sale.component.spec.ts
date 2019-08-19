import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcProductSaleComponent } from './wc-product-sale.component';

describe('WcProductSaleComponent', () => {
  let component: WcProductSaleComponent;
  let fixture: ComponentFixture<WcProductSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcProductSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcProductSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
