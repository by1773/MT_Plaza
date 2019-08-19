import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcMaterialTypeComponent } from './wc-material-type.component';

describe('WcMaterialTypeComponent', () => {
  let component: WcMaterialTypeComponent;
  let fixture: ComponentFixture<WcMaterialTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcMaterialTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcMaterialTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
