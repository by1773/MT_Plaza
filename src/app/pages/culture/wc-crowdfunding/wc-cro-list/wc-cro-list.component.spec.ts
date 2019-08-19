import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcCroListComponent } from './wc-cro-list.component';

describe('WcCroListComponent', () => {
  let component: WcCroListComponent;
  let fixture: ComponentFixture<WcCroListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcCroListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcCroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
