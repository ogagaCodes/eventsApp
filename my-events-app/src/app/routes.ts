import { EventListComponent } from './events/event-list.component'
import { EventDetailsComponent } from './events/eventsDetails/event-details.component'
import { Routes } from '@angular/router'
import { CreateEventComponent } from './events/create-event.omponent'
import { Error404Component } from './errors/404.component'
import { EventRouteActivator } from './events/eventsDetails/events-routes-activator.service'


export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent,
canDeactivate:['canDeactivateCreateEvent']},
  { path: 'events', component: EventListComponent },
  { path: '404', component: Error404Component},
  {
    path: 'events/:id', component: EventDetailsComponent,
    canActivate:[ EventRouteActivator ]
  },
  {path:'', redirectTo: '/events', pathMatch:'full'}
]
