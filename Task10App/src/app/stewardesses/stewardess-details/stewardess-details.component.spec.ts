import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StewardessDetailsComponent } from './stewardess-details.component';

describe('StewardessDetailsComponent', () => {
  let component: StewardessDetailsComponent;
  let fixture: ComponentFixture<StewardessDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StewardessDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StewardessDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
