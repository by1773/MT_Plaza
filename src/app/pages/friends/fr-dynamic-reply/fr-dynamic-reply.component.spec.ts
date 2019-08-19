import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrDynamicReplyComponent } from './fr-dynamic-reply.component';

describe('FrDynamicReplyComponent', () => {
  let component: FrDynamicReplyComponent;
  let fixture: ComponentFixture<FrDynamicReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrDynamicReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrDynamicReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
