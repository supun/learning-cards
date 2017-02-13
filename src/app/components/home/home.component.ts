import { Component, OnInit, Inject } from '@angular/core';

import { Subscription } from "rxjs";
import { MediaChange } from "@angular/flex-layout";
import { ObservableMediaService } from "@angular/flex-layout/media-query/observable-media-service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _mediaSubscription: Subscription;
  sidenavOpen: boolean = false;
  sidenavMode: string = 'side';
  sideNavToggled: boolean = false;
  isMobile: boolean = false;

  // private _routerEventsSubscription: Subscription;

  constructor(
    @Inject(ObservableMediaService) private _media$
  ) { }

  ngOnInit() {
    this._mediaSubscription = this._media$.subscribe((change: MediaChange) => {
      let isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');

      this.isMobile = isMobile;
      this.sidenavMode = (isMobile) ? 'over' : 'side';

      if (this.sideNavToggled) {
        this.sidenavOpen = !isMobile;

      }
      
    });

  }

  toggle(){
    this.sideNavToggled = ! this.sideNavToggled;
    this.sidenavOpen = ! this.sidenavOpen;
  }

  ngOnDestroy() {
    this._mediaSubscription.unsubscribe();
  }


}
