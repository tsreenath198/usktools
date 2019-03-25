import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YuvaComponent } from './yuva.component';

describe('YuvanComponent', () => {
  let component: YuvaComponent;
  let fixture: ComponentFixture<YuvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YuvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YuvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
