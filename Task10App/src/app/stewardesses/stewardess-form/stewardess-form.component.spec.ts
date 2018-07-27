import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StewardessFormComponent } from './stewardess-form.component';

describe('StewardessFormComponent', () => {
  let component: StewardessFormComponent;
  let fixture: ComponentFixture<StewardessFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StewardessFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StewardessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
