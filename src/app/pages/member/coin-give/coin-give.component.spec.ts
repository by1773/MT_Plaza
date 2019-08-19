import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinGiveComponent } from './coin-give.component';

describe('CoinGiveComponent', () => {
  let component: CoinGiveComponent;
  let fixture: ComponentFixture<CoinGiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinGiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinGiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
