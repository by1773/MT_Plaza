import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcSaleListComponent } from './wc-sale-list.component';

describe('WcSaleListComponent', () => {
  let component: WcSaleListComponent;
  let fixture: ComponentFixture<WcSaleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcSaleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcSaleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
