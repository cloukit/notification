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
import { CloukitNotification } from '../notification.model';

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
    request.placement = DropoutPlacement.FIX_BOTTOM_LEFT;
    request.zIndex = 300;
    const dropoutRef = self.dropoutService.requestDropoutCreation(request);
  }

  public addNotification(notification: CloukitNotification) {
    this.notifications.take(1).subscribe(notifications => {
      this.notifications
        .next([notification].concat(notifications));
    });
  }

  public getNotifications(): Observable<CloukitNotification[]> {
    return this.notifications.asObservable();
  }

}
