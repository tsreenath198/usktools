import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DMilanComponent } from './d-milan.component';

describe('DMilanComponent', () => {
  let component: DMilanComponent;
  let fixture: ComponentFixture<DMilanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DMilanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DMilanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
