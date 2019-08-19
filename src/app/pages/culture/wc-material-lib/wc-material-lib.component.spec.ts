import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcMaterialLibComponent } from './wc-material-lib.component';

describe('WcMaterialLibComponent', () => {
  let component: WcMaterialLibComponent;
  let fixture: ComponentFixture<WcMaterialLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcMaterialLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcMaterialLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
