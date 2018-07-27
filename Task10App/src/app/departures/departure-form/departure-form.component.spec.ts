import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartureFormComponent } from './departure-form.component';

describe('DepartureFormComponent', () => {
  let component: DepartureFormComponent;
  let fixture: ComponentFixture<DepartureFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartureFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
