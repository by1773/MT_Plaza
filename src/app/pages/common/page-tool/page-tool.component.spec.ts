import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageToolComponent } from './page-tool.component';

describe('PageToolComponent', () => {
  let component: PageToolComponent;
  let fixture: ComponentFixture<PageToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
