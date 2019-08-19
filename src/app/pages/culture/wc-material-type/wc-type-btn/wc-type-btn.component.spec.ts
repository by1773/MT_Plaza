import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcTypeBtnComponent } from './wc-type-btn.component';

describe('WcTypeBtnComponent', () => {
  let component: WcTypeBtnComponent;
  let fixture: ComponentFixture<WcTypeBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcTypeBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcTypeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
