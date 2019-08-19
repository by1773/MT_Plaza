import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FxAllInfoComponent } from './fx-all-info.component';

describe('FxAllInfoComponent', () => {
  let component: FxAllInfoComponent;
  let fixture: ComponentFixture<FxAllInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FxAllInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FxAllInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
