import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcMaterialOrderComponent } from './wc-material-order.component';

describe('WcMaterialOrderComponent', () => {
  let component: WcMaterialOrderComponent;
  let fixture: ComponentFixture<WcMaterialOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcMaterialOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcMaterialOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
