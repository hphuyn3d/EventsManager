import { CanActivate, ActivatedRouteSnapshot,Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from '../shared/event.service';
import { Observable } from '../../../../node_modules/rxjs/Observable';

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService:EventService, private router:Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const eventExists = !!this.eventService.getEvent(route.params['id'])
        if (!eventExists)
            this.router.navigate(['/404'])
            return eventExists
    }
}