import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrDynamicComponent } from './fr-dynamic.component';

describe('FrDynamicComponent', () => {
  let component: FrDynamicComponent;
  let fixture: ComponentFixture<FrDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
