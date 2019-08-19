import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcComListComponent } from './wc-com-list.component';

describe('WcComListComponent', () => {
  let component: WcComListComponent;
  let fixture: ComponentFixture<WcComListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcComListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcComListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
