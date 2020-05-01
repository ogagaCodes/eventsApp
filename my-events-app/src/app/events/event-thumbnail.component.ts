import { Component, Input } from '@angular/core'

@Component({
  selector: "event-thumbnail",
  template:`
  <div [routerLink] = "['/events', event.id]" class="well hoverwell thumbnail">
  <h2>{{ event?.name }}</h2>
  <div>Date: {{ event?.date }}</div>
  <div [ngClass] = "getStartTimeClass()" [ngSwitch] = "event?.time">Time: {{ event?.time }}
  <span *ngSwitchCase = "'8:00 am'">(Early start)</span>
    <span *ngSwitchCase = "'10:00 am'">(Late start)</span>
    <span *ngSwitchDefault>(Normal start)</span>
  </div>
  <div>Price: {{ event?.price }}</div>
  <div *ngIf = "event?.location ">
    <span>location: {{ event?.location?.address }} </span>
    <span class="pad-left"></span>
    <span>{{ event?.location?.city }},{{ event?.location?.country }} </span>
  </div>
  <div *ngIf = "event?.OnlineUrl">
    Onineurl : {{ event?.OnlineUrl }}
  </div>
</div>
  `,
  styles: [`
  .bold { font-weight bold;}
  .green { color: green !important;}
  .thumbnail {min-height:210px;}
  .pad-left{margin-left:10px;}
  .well div {color:#bbb;}
  `
  ]
})

export class EventThumbnailComponent {
  @Input() event: any

  getStartTimeClass() {
    const isEarlyStart = this.event && this.event.time === '8:00 am'
    return {green: isEarlyStart, bold:isEarlyStart}
  }

}
