import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchklevelComponent } from './searchklevel.component';

describe('SearchklevelComponent', () => {
  let component: SearchklevelComponent;
  let fixture: ComponentFixture<SearchklevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchklevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchklevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
