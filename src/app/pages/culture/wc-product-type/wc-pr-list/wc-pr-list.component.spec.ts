import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcPrListComponent } from './wc-pr-list.component';

describe('WcPrListComponent', () => {
  let component: WcPrListComponent;
  let fixture: ComponentFixture<WcPrListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcPrListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcPrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
