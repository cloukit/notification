import { Component, EventEmitter } from '@angular/core';
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

  constructor(private notificationService: CloukitNotificationService) {}

  addNotification() {
    const random = this._randomInt(0, 6);
    const event = new EventEmitter<void>();
    event.subscribe(() => {
      console.log('you clicked');
    });
    let dummyNotification: CloukitNotification;
    if (random === 0) dummyNotification = new CloukitNotification('Atención', 'Los pantalones estan pequeños',
      CloukitNotificationType.WARN, new CloukitNotificationLink('foo', event), null);
    if (random === 1) dummyNotification = new CloukitNotification('Note', 'You should drink 2-3 liters a day',
      CloukitNotificationType.INFO, new CloukitNotificationLink('Tell me more', event),
      new CloukitNotificationLink('naaaah', event));
    if (random === 2) dummyNotification = new CloukitNotification('Warn', 'Sugar is unhealthy!',
      CloukitNotificationType.ERROR, null, null);
    if (random === 3) dummyNotification = new CloukitNotification('Info', 'Sport is healthy.',
      CloukitNotificationType.INFO, null, null);
    if (random === 4) dummyNotification = new CloukitNotification('Success', 'You clicked a button!',
      CloukitNotificationType.SUCCESS, new CloukitNotificationLink('foo', event), null);
    if (random === 5) dummyNotification = new CloukitNotification('Ok', 'all fine!',
      CloukitNotificationType.SUCCESS, new CloukitNotificationLink('foo', event), null);
    this.notificationService.addNotification(dummyNotification);
  }

  _randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
