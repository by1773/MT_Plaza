import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcProductComponent } from './wc-product.component';

describe('WcProductComponent', () => {
  let component: WcProductComponent;
  let fixture: ComponentFixture<WcProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
