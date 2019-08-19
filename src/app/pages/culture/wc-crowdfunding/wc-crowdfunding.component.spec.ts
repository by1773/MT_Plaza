import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcCrowdfundingComponent } from './wc-crowdfunding.component';

describe('WcCrowdfundingComponent', () => {
  let component: WcCrowdfundingComponent;
  let fixture: ComponentFixture<WcCrowdfundingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcCrowdfundingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcCrowdfundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
