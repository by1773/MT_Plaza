import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHotComponent } from './new-hot.component';

describe('NewHotComponent', () => {
  let component: NewHotComponent;
  let fixture: ComponentFixture<NewHotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewHotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
