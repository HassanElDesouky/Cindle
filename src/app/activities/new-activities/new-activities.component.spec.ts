import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewActivitiesComponent } from './new-activities.component';

describe('NewActivitiesComponent', () => {
  let component: NewActivitiesComponent;
  let fixture: ComponentFixture<NewActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
