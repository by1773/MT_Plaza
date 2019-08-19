import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcPrBtnComponent } from './wc-pr-btn.component';

describe('WcPrBtnComponent', () => {
  let component: WcPrBtnComponent;
  let fixture: ComponentFixture<WcPrBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcPrBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcPrBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
