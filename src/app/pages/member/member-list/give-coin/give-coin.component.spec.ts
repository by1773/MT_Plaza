import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveCoinComponent } from './give-coin.component';

describe('GiveCoinComponent', () => {
  let component: GiveCoinComponent;
  let fixture: ComponentFixture<GiveCoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveCoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
