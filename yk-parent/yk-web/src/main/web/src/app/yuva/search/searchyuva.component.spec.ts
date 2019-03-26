import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchyuvaComponent } from './searchyuva.component';

describe('SearchyuvaComponent', () => {
  let component: SearchyuvaComponent;
  let fixture: ComponentFixture<SearchyuvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchyuvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchyuvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
