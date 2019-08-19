import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcProductTypeComponent } from './wc-product-type.component';

describe('WcProductTypeComponent', () => {
  let component: WcProductTypeComponent;
  let fixture: ComponentFixture<WcProductTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcProductTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcProductTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
