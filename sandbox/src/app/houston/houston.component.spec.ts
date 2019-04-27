import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoustonComponent } from './houston.component';

describe('HoustonComponent', () => {
  let component: HoustonComponent;
  let fixture: ComponentFixture<HoustonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoustonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoustonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
