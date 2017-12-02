import { Component } from '@angular/core';
import { DemoComponent } from '../demo.component';
import {
  CloukitNotificationService,
  CloukitNotification,
  CloukitNotificationType,
  CloukitNotificationLink,
  CloukitNotificationAction,
} from '../../index';

@Component({
  selector: 'story-01-timed-notifications',
  templateUrl: './story-01-timed-notifications.html',
  styles: [].concat(DemoComponent.sharedStyles),
})
export class Story01Component {

  constructor(private notificationService: CloukitNotificationService) {}

  openSuccess() {
    const self = this;
    const notification = new CloukitNotification('Success',
      'You clicked a button!',
      CloukitNotificationType.SUCCESS,
      null, null,
      2000);
    self.notificationService.addNotification(notification);
  }

}
