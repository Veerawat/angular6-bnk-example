import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstragramListComponent } from './instragram-list.component';

describe('InstragramListComponent', () => {
  let component: InstragramListComponent;
  let fixture: ComponentFixture<InstragramListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstragramListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstragramListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
