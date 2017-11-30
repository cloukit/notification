/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Injectable, TemplateRef } from '@angular/core';
import { CloukitDropoutService, DropoutComponentCreationRequest, DropoutPlacement } from '@cloukit/dropout';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

@Injectable()
export class CloukitNotificationService {

  private notificationOutlet: TemplateRef<string>;

  private notifications = new BehaviorSubject<CloukitNotification[]>([]);

  constructor(private dropoutService: CloukitDropoutService) {}

  public setOutletTemplate(t: TemplateRef<string>) {
    this.notificationOutlet = t;
    this.initOutlet();
  }

  initOutlet() {
    const self = this;
    const dummyTriggerElement = document.createElement('div');
    const request = new DropoutComponentCreationRequest();
    request.triggerElement = dummyTriggerElement;
    request.template = self.notificationOutlet;
    request.placement = DropoutPlacement.FIX_BOTTOM_RIGHT;
    request.zIndex = 300;
    const dropoutRef = self.dropoutService.requestDropoutCreation(request);
  }

  public addNotification(notification: CloukitNotification) {
    this.notifications.take(1).subscribe(notifications => {
      this.notifications
        .next(notifications.concat([notification]));
    });
  }

  public getNotifications(): Observable<CloukitNotification[]> {
    return this.notifications.asObservable();
  }

}

export class CloukitNotification {
  constructor(public title: string,
              public message: string,
              public type: CloukitNotificationType) {}
}
export enum CloukitNotificationType {
  INFO=1,
  SUCCESS=2,
  WARN=3,
  ERROR=4,
}
