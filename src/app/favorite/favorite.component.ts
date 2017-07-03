import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',

  styles: [
    `
      .glyphicon{
          color: green;
      }
      .glyphicon-star {
          background: black;
      }
    `
  ],
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {

  @Input('is-favorite') isSelected: boolean;
  @Output('change') click = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.click.emit({ newValue: this.isSelected });
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}
