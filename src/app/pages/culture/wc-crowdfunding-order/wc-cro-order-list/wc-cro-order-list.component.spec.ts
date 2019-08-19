import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcCroOrderListComponent } from './wc-cro-order-list.component';

describe('WcCroOrderListComponent', () => {
  let component: WcCroOrderListComponent;
  let fixture: ComponentFixture<WcCroOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcCroOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcCroOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
