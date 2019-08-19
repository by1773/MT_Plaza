import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcTypeListComponent } from './wc-type-list.component';

describe('WcTypeListComponent', () => {
  let component: WcTypeListComponent;
  let fixture: ComponentFixture<WcTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
