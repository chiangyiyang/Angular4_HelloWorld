import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCaseInputComponent } from './title-case-input.component';

describe('TitleCaseInputComponent', () => {
  let component: TitleCaseInputComponent;
  let fixture: ComponentFixture<TitleCaseInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleCaseInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleCaseInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
