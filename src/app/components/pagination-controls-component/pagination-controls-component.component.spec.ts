import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationControlsComponentComponent } from './pagination-controls-component.component';

describe('PaginationControlsComponentComponent', () => {
  let component: PaginationControlsComponentComponent;
  let fixture: ComponentFixture<PaginationControlsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationControlsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationControlsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
