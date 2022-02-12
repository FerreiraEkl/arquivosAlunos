import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  @Input('image') image: string = 'notFound.png';
  @Input('name') name: string = 'Eventox';
  @Input('url') url: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
