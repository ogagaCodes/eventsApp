import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/events-service'
import { toBase64String } from '@angular/compiler/src/output/source_map'
import { ToastrService } from '../common/toastr.service'

declare let toastr

@Component({
  template: `
  <div>
  <h1>Upcoming Events</h1>
  <hr/>
  <div class="row">
    <div *ngFor="let event of events"  class="col-md-5">
    <event-thumbnail (click) = "handleThumbnailClick(event.name)" [event] = "event"></event-thumbnail>
    </div>
</div>
</div>
`
})

export class EventListComponent implements OnInit {
   events:any
  constructor(private eventService: EventService, private toastr:ToastrService) {

  }

  ngOnInit() {
    this.eventService.getEvents().subscribe(events => {
       this.events = events
     })
  }
  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
