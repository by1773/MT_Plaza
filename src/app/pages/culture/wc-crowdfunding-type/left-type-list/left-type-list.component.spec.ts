import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftTypeListComponent } from './left-type-list.component';

describe('LeftTypeListComponent', () => {
  let component: LeftTypeListComponent;
  let fixture: ComponentFixture<LeftTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
