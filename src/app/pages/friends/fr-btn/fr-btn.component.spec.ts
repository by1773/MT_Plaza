import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrBtnComponent } from './fr-btn.component';

describe('FrBtnComponent', () => {
  let component: FrBtnComponent;
  let fixture: ComponentFixture<FrBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
