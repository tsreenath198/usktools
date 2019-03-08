import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KLevelComponent } from './k-level.component';

describe('KLevelComponent', () => {
  let component: KLevelComponent;
  let fixture: ComponentFixture<KLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
