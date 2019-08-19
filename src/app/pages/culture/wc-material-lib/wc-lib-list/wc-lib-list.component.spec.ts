import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcLibListComponent } from './wc-lib-list.component';

describe('WcLibListComponent', () => {
  let component: WcLibListComponent;
  let fixture: ComponentFixture<WcLibListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcLibListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcLibListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
