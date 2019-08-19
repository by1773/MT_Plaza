import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraFlowingComponent } from './tra-flowing.component';

describe('TraFlowingComponent', () => {
  let component: TraFlowingComponent;
  let fixture: ComponentFixture<TraFlowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraFlowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraFlowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
