import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FxProTypeComponent } from './fx-pro-type.component';

describe('FxProTypeComponent', () => {
  let component: FxProTypeComponent;
  let fixture: ComponentFixture<FxProTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FxProTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FxProTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
