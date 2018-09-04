import { EventsListComponent } from "./app/events-list/events-list.component";
import { EventDetailsComponent } from "./app/event-details/event-details.component";
import { CreateEventComponent } from "./app/create-event/create-event.component";
import { Routes } from '@angular/router';
import { Error404Component } from "./app/errors/404.component";
import { EventRouteActivator } from "./app/event-details/event-route-activator.service";
import { EventListResolver } from "./app/shared/events-list-resolver.service";

export const appRoutes:Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events', component: EventsListComponent, resolve: {events:EventListResolver}},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full' },
    {path: 'user', loadChildren: './user/user.module#UserModule'}
]