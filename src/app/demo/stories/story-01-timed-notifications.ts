import { Component } from '@angular/core';
import {
  CloukitNotificationService,
  CloukitNotification,
  CloukitNotificationType,
  CloukitNotificationLink,
  CloukitNotificationAction,
} from '../../../../projects/cloukit/notification/src/public_api';

@Component({
  selector: 'cloukit-story-01-timed-notifications',
  templateUrl: './story-01-timed-notifications.html',
  styleUrls: [ '../demo.styles.css' ]
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
