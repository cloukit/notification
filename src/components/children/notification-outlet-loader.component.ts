/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, TemplateRef, ViewChild, AfterContentInit, Input } from '@angular/core';
import { CloukitNotificationService } from '../services/notification.service';

/**
 * Injects a TemplateRef of the NotificationOutlet into the NotificationService
 */
@Component({
  selector: 'cloukit-notification-outlet-loader',
  template: `<ng-template #notificationOutlet>
    <cloukit-notification-outlet
      [theme]="theme"
      [offsetX]="offsetX"
      [offsetY]="offsetY"
      [placement]="placement"
    ></cloukit-notification-outlet>
  </ng-template>`,
  styles: [],
})
export class CloukitNotificationOutletLoaderComponent implements AfterContentInit {

  @ViewChild('notificationOutlet')
  notificationOutlet: TemplateRef<string>;

  @Input()
  theme: string;

  @Input()
  offsetX = 0; /* default */

  @Input()
  offsetY = 0; /* default */

  @Input()
  placement = 'bottomLeft'; /* default */

  constructor(private cloukitNotificationService: CloukitNotificationService) { }

  ngAfterContentInit() {
    this.cloukitNotificationService.setOutletTemplate(this.notificationOutlet, this.placement);
  }
}
