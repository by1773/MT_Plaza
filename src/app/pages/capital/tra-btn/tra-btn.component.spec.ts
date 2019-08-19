import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraBtnComponent } from './tra-btn.component';

describe('TraBtnComponent', () => {
  let component: TraBtnComponent;
  let fixture: ComponentFixture<TraBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
