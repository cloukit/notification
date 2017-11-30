import { Component } from '@angular/core';
import { DemoComponent } from '../demo.component';
import { CloukitNotificationService } from '../../index';
import { CloukitNotification, CloukitNotificationType } from '../../components/services/notification.service';

@Component({
  selector: 'story-00-simple-notifications',
  templateUrl: './story-00-simple-notifications.html',
  styles: [].concat(DemoComponent.sharedStyles),
})
export class Story00Component {
  counter = 0;

  dummyNotifications = [
    new CloukitNotification('Atención', 'Los pantalones estan pequeños', CloukitNotificationType.WARN),
    new CloukitNotification('Note', 'You should drink 2-3 liters a day', CloukitNotificationType.INFO),
    new CloukitNotification('Warn', 'Sugar is unhealthy!', CloukitNotificationType.WARN),
    new CloukitNotification('Info', 'Sport is healthy.', CloukitNotificationType.INFO),
    new CloukitNotification('Success', 'You clicked a button!', CloukitNotificationType.SUCCESS),
  ];

  constructor(private notificationService: CloukitNotificationService) {}

  addNotification() {
    const dummyNotification = this.dummyNotifications[this._randomInt(0, 4)];
    this.notificationService.addNotification(dummyNotification);
  }

  _randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
