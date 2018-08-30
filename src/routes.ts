import { EventsListComponent } from "./app/events-list/events-list.component";
import { EventDetailsComponent } from "./app/event-details/event-details.component";
import { CreateEventComponent } from "./app/create-event/create-event.component";
import { Routes } from '@angular/router';
import { Error404Component } from "./app/errors/404.component";
import { EventRouteActivator } from "./app/event-details/event-route-activator.service";

export const appRoutes:Routes = [
    {path: 'events/new', component: CreateEventComponent},
    {path: 'events', component: EventsListComponent},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full' }
]