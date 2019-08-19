import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcOrderListComponent } from './wc-order-list.component';

describe('WcOrderListComponent', () => {
  let component: WcOrderListComponent;
  let fixture: ComponentFixture<WcOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
