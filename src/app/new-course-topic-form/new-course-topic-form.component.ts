import { Validators } from '@angular/forms';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-course-topic-form',
  templateUrl: './new-course-topic-form.component.html',
  styleUrls: ['./new-course-topic-form.component.css']
})
export class NewCourseTopicFormComponent  {
  // form = new FormGroup({
  //   topics: new FormArray([])
  // })

  // form = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   contact: new FormGroup({
  //     email: new FormControl(),
  //     phone: new FormControl()
  //   }),
  //   topics: new FormArray([])
  // })

  form;

  constructor(fb: FormBuilder){
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email:[],
        phone:[]
      }),
      topics: fb.array([])
    });
  }

  addTopic(topic: HTMLInputElement){
    this.topics.push(
      new FormControl(topic.value)
    );
    topic.value='';
  }

  removeTopic(topic: FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics(){
    return this.form.get('topics') as FormArray;
  }
}
