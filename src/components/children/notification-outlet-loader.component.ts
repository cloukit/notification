/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, TemplateRef, ViewChild, AfterContentInit } from '@angular/core';
import { CloukitNotificationService } from '../services/notification.service';

/**
 * Injects a TemplateRef of the NotificationOutlet into the NotificationService
 */
@Component({
  selector: 'cloukit-notification-outlet-loader',
  template: `<ng-template #notificationOutlet><cloukit-notification-outlet></cloukit-notification-outlet></ng-template>`,
  styles: [],
})
export class CloukitNotificationOutletLoaderComponent implements AfterContentInit {

  @ViewChild('notificationOutlet')
  notificationOutlet: TemplateRef<string>;

  constructor(private cloukitNotificationService: CloukitNotificationService) { }

  ngAfterContentInit() {
    this.cloukitNotificationService.setOutletTemplate(this.notificationOutlet);
  }
}
