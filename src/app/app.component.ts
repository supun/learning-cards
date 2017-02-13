import { Component, OnInit, Inject } from '@angular/core';

import { Subscription } from "rxjs";
import { MediaChange } from "@angular/flex-layout";
import { ObservableMediaService } from "@angular/flex-layout/media-query/observable-media-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private _mediaSubscription: Subscription;
  sidenavOpen: boolean = false;
  sidenavMode: string = 'side';
  isMobile: boolean = false;

  private _routerEventsSubscription: Subscription;

  constructor(
    @Inject(ObservableMediaService) private _media$
  ) { }

  ngOnInit() {
    this._mediaSubscription = this._media$.subscribe((change: MediaChange) => {
      let isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');

      this.isMobile = isMobile;
      this.sidenavMode = (isMobile) ? 'over' : 'side';
      this.sidenavOpen = !isMobile;
    });

  }

  toggle(){
    this.sidenavOpen = ! this.sidenavOpen;
  }
}
