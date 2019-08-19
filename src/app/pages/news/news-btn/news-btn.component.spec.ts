import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBtnComponent } from './news-btn.component';

describe('NewsBtnComponent', () => {
  let component: NewsBtnComponent;
  let fixture: ComponentFixture<NewsBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
