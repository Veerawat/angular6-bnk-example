import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstragramComponent } from './instragram.component';

describe('InstragramComponent', () => {
  let component: InstragramComponent;
  let fixture: ComponentFixture<InstragramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstragramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstragramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
