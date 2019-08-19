import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcCrowdfundingTypeComponent } from './wc-crowdfunding-type.component';

describe('WcCrowdfundingTypeComponent', () => {
  let component: WcCrowdfundingTypeComponent;
  let fixture: ComponentFixture<WcCrowdfundingTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcCrowdfundingTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcCrowdfundingTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
