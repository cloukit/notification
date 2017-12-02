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
  selector: 'story-00-simple-notifications',
  templateUrl: './story-00-simple-notifications.html',
  styles: [].concat(DemoComponent.sharedStyles),
})
export class Story00Component {

  constructor(private notificationService: CloukitNotificationService) {}

  success: CloukitNotification;
  successEventLog: number[] = [];

  warn: CloukitNotification;
  warnEventLog: number[] = [];

  error: CloukitNotification;
  errorEventLog: number[] = [];

  info: CloukitNotification;
  infoEventLog: number[] = [];

  openSuccess() {
    const self = this;
    self.success = new CloukitNotification('Success',
      'You clicked a button!',
      CloukitNotificationType.SUCCESS,
      new CloukitNotificationLink('Ok'),
      new CloukitNotificationLink('who cares'));
    self.success.getActions().subscribe(action => {
      self.successEventLog = [action].concat(self.successEventLog);
      if (CloukitNotification.isCloseAction(action)) { self.success = null; }
    });
    self.notificationService.addNotification(this.success);
  }
  closeSuccess() {
    this.success.forceClose();
  }

  openInfo() {
    const self = this;
    self.info = new CloukitNotification('Info',
      'Sport is healthy.',
      CloukitNotificationType.INFO,
      new CloukitNotificationLink('ok'),
      new CloukitNotificationLink('naaaah'));
    self.info.getActions().subscribe(action => {
      self.infoEventLog = [action].concat(self.infoEventLog);
      if (CloukitNotification.isCloseAction(action)) { self.info = null; }
    });
    self.notificationService.addNotification(this.info);
  }
  closeInfo() {
    this.info.forceClose();
  }

  openWarn() {
    const self = this;
    self.warn = new CloukitNotification('Atención',
      'Los pantalones estan pequeños!',
      CloukitNotificationType.WARN,
      new CloukitNotificationLink('confirmar'),
      new CloukitNotificationLink('cancelar'));
    self.warn.getActions().subscribe(action => {
      self.warnEventLog = [action].concat(self.warnEventLog);
      if (CloukitNotification.isCloseAction(action)) { self.warn = null; }
    });
    self.notificationService.addNotification(this.warn);
  }
  closeWarn() {
    this.warn.forceClose();
  }

  openError() {
    const self = this;
    self.error = new CloukitNotification('Warn',
      'Too much sugar is unhealthy!',
      CloukitNotificationType.ERROR,
      new CloukitNotificationLink('ok'),
      new CloukitNotificationLink('nbd'));
    self.error.getActions().subscribe(action => {
      self.errorEventLog = [action].concat(self.errorEventLog);
      if (CloukitNotification.isCloseAction(action)) { self.error = null; }
    });
    self.notificationService.addNotification(this.error);
  }
  closeError() {
    this.error.forceClose();
  }

  translateEventLog(type: number) {
    if (type === CloukitNotificationAction.CLOSE_ICON_CLICKED) return 'close icon clicked';
    if (type === CloukitNotificationAction.LINK_TWO_CLICKED) return 'link two clicked';
    if (type === CloukitNotificationAction.LINK_ONE_CLICKED) return 'link one clicked';
    if (type === CloukitNotificationAction.CLOSE_BY_FORCE) return 'close by force';
    if (type === CloukitNotificationAction.CLOSE_BY_TIME) return 'close by time';
  }

}
