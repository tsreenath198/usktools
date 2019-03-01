import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdmilanComponent } from './searchdmilan.component';

describe('SearchdmilanComponent', () => {
  let component: SearchdmilanComponent;
  let fixture: ComponentFixture<SearchdmilanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchdmilanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdmilanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
