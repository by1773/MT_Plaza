import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcSaleBtnComponent } from './wc-sale-btn.component';

describe('WcSaleBtnComponent', () => {
  let component: WcSaleBtnComponent;
  let fixture: ComponentFixture<WcSaleBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcSaleBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcSaleBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
