import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcComBtnComponent } from './wc-com-btn.component';

describe('WcComBtnComponent', () => {
  let component: WcComBtnComponent;
  let fixture: ComponentFixture<WcComBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcComBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcComBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
