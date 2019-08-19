import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberBtnComponent } from './member-btn.component';

describe('MemberBtnComponent', () => {
  let component: MemberBtnComponent;
  let fixture: ComponentFixture<MemberBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
