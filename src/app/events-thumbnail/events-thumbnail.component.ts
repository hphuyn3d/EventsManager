import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-events-thumbnail',
  templateUrl: './events-thumbnail.component.html',
  styleUrls: ['./events-thumbnail.component.css']
})
export class EventsThumbnailComponent implements OnInit {

  @Input() event: any;
  @Output() eventClick = new EventEmitter();
  handleClickMe() {
    this.eventClick.emit(this.event.name);
  }

  constructor() { }

  ngOnInit() {
  }

}
