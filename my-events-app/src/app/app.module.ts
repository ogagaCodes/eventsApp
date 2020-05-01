import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from './events/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/nav.component';
import { EventService } from './events/shared/events-service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/eventsDetails/event-details.component';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event.omponent';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/eventsDetails/events-routes-activator.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent', useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {

}

export default function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('you haved not saved your changes, hit okay to continue')
  return true
}
