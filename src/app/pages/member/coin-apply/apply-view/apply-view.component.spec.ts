import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyViewComponent } from './apply-view.component';

describe('ApplyViewComponent', () => {
  let component: ApplyViewComponent;
  let fixture: ComponentFixture<ApplyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
