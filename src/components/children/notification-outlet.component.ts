/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, AfterContentInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CloukitNotificationService } from '../services/notification.service';
import { CloukitNotification } from '../../index';

@Component({
  selector: 'cloukit-notification-outlet',
  template: `
 <div class="outlet">
   <div *ngFor="let notification of notifications" class="notification notification-{{notification.type}}">
     {{notification.title}}
   </div>
 </div>
  `,
  styles: [
    '.outlet { border:1px solid red; width:430px; display:flex; flex-direction: column; }',
  ],
})
export class CloukitNotificationOutletComponent implements AfterContentInit, OnDestroy {

  notifications: CloukitNotification[] = [];
  notificationsSubscription: Subscription;

  constructor(private cloukitNotificationService: CloukitNotificationService) { }

  ngAfterContentInit() {
    this.notificationsSubscription = this.cloukitNotificationService
      .getNotifications()
      .subscribe(notifications => this.notifications = notifications);
  }

  ngOnDestroy() {
    if (this.notificationsSubscription !== undefined && this.notificationsSubscription !== null && !this.notificationsSubscription.closed) {
      this.notificationsSubscription.unsubscribe();
    }
  }
}
