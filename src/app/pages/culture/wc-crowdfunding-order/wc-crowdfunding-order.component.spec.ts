import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcCrowdfundingOrderComponent } from './wc-crowdfunding-order.component';

describe('WcCrowdfundingOrderComponent', () => {
  let component: WcCrowdfundingOrderComponent;
  let fixture: ComponentFixture<WcCrowdfundingOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcCrowdfundingOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcCrowdfundingOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
