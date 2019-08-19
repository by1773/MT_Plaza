import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyReViewComponent } from './dy-re-view.component';

describe('DyReViewComponent', () => {
  let component: DyReViewComponent;
  let fixture: ComponentFixture<DyReViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyReViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyReViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
