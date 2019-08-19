import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcCroTypeListComponent } from './wc-cro-type-list.component';

describe('WcCroTypeListComponent', () => {
  let component: WcCroTypeListComponent;
  let fixture: ComponentFixture<WcCroTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcCroTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcCroTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
