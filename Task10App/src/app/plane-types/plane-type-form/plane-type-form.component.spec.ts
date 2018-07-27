import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneTypeFormComponent } from './plane-type-form.component';

describe('PlaneTypeFormComponent', () => {
  let component: PlaneTypeFormComponent;
  let fixture: ComponentFixture<PlaneTypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneTypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
