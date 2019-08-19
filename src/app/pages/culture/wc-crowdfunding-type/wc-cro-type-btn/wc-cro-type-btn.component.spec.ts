import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcCroTypeBtnComponent } from './wc-cro-type-btn.component';

describe('WcCroTypeBtnComponent', () => {
  let component: WcCroTypeBtnComponent;
  let fixture: ComponentFixture<WcCroTypeBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcCroTypeBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcCroTypeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
