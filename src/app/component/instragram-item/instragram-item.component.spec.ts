import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstragramItemComponent } from './instragram-item.component';

describe('InstragramItemComponent', () => {
  let component: InstragramItemComponent;
  let fixture: ComponentFixture<InstragramItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstragramItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstragramItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
