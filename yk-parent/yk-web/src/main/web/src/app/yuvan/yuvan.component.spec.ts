import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YuvanComponent } from './yuvan.component';

describe('YuvanComponent', () => {
  let component: YuvanComponent;
  let fixture: ComponentFixture<YuvanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YuvanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YuvanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
