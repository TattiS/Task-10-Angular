import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewFormComponent } from './crew-form.component';

describe('CrewFormComponent', () => {
  let component: CrewFormComponent;
  let fixture: ComponentFixture<CrewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
