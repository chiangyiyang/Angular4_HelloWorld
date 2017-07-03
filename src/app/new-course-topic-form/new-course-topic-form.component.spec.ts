import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseTopicFormComponent } from './new-course-topic-form.component';

describe('NewCourseTopicFormComponent', () => {
  let component: NewCourseTopicFormComponent;
  let fixture: ComponentFixture<NewCourseTopicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCourseTopicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCourseTopicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
