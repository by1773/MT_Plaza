import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcProductCommentComponent } from './wc-product-comment.component';

describe('WcProductCommentComponent', () => {
  let component: WcProductCommentComponent;
  let fixture: ComponentFixture<WcProductCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcProductCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcProductCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
