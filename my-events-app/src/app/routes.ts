import { Routes } from '@angular/router'
import { Error404Component } from './errors/404.component'

import {
  EventListResolver,
  EventRouteActivator,
  CreateEventComponent,
  EventDetailsComponent,
  EventListComponent
 } from "./events";

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent,
canDeactivate:['canDeactivateCreateEvent']},
  { path: 'events', component: EventListComponent, resolve:{
    events: EventListResolver
  } },
  { path: '404', component: Error404Component},
  {
    path: 'events/:id', component: EventDetailsComponent,
    canActivate:[ EventRouteActivator ]
  },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {path:'user', loadChildren: () => import('./user/user.module').then(mod => mod.UserModule)}
]
