import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyViewComponent } from './dy-view.component';

describe('DyViewComponent', () => {
  let component: DyViewComponent;
  let fixture: ComponentFixture<DyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
