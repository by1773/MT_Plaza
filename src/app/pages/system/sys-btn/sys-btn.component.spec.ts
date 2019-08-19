import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysBtnComponent } from './sys-btn.component';

describe('SysBtnComponent', () => {
  let component: SysBtnComponent;
  let fixture: ComponentFixture<SysBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
