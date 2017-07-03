import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'title-case-input',
  templateUrl: './title-case-input.component.html',
  styleUrls: ['./title-case-input.component.css']
})
export class TitleCaseInputComponent implements OnInit {
  title = "the rise of the planet of the apes."
  constructor() { }

  ngOnInit() {
  }

}
