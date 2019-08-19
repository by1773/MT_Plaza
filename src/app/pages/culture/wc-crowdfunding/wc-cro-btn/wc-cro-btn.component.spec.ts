import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcCroBtnComponent } from './wc-cro-btn.component';

describe('WcCroBtnComponent', () => {
  let component: WcCroBtnComponent;
  let fixture: ComponentFixture<WcCroBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcCroBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcCroBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
