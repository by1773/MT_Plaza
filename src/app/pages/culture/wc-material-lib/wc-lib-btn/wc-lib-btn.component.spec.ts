import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcLibBtnComponent } from './wc-lib-btn.component';

describe('WcLibBtnComponent', () => {
  let component: WcLibBtnComponent;
  let fixture: ComponentFixture<WcLibBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcLibBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcLibBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
