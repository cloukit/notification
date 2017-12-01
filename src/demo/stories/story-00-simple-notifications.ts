import { Component } from '@angular/core';
import { DemoComponent } from '../demo.component';
import {
  CloukitNotificationService,
  CloukitNotification,
  CloukitNotificationType,
  CloukitNotificationLink
} from '../../index';

@Component({
  selector: 'story-00-simple-notifications',
  templateUrl: './story-00-simple-notifications.html',
  styles: [].concat(DemoComponent.sharedStyles),
})
export class Story00Component {

  dummyNotifications = [

  ];

  constructor(private notificationService: CloukitNotificationService) {}

  addNotification() {
    const random = this._randomInt(0, 4);
    let dummyNotification: CloukitNotification;
    if (random === 0) dummyNotification = new CloukitNotification('Atención', 'Los pantalones estan pequeños', CloukitNotificationType.WARN, new CloukitNotificationLink('foo', 'bar'), null);
    if (random === 1) dummyNotification = new CloukitNotification('Note', 'You should drink 2-3 liters a day', CloukitNotificationType.INFO, new CloukitNotificationLink('foo', 'bar'), null);
    if (random === 2) dummyNotification = new CloukitNotification('Warn', 'Sugar is unhealthy!', CloukitNotificationType.WARN, new CloukitNotificationLink('foo', 'bar'), null);
    if (random === 3) dummyNotification = new CloukitNotification('Info', 'Sport is healthy.', CloukitNotificationType.INFO, new CloukitNotificationLink('foo', 'bar'), null);
    if (random === 4) dummyNotification = new CloukitNotification('Success', 'You clicked a button!', CloukitNotificationType.SUCCESS, new CloukitNotificationLink('foo', 'bar'), null);
    this.notificationService.addNotification(dummyNotification);
  }

  _randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
