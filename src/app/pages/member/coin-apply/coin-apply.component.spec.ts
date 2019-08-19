import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinApplyComponent } from './coin-apply.component';

describe('CoinApplyComponent', () => {
  let component: CoinApplyComponent;
  let fixture: ComponentFixture<CoinApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
