import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsThumbnailComponent } from './events-thumbnail/events-thumbnail.component';
import { NavComponent } from './nav/nav.component';
import { EventService } from './shared/event.service';
import { ToastrService } from './shared/toastr.service';
import { EventDetailsComponent } from './event-details/event-details.component';


@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventService,ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
