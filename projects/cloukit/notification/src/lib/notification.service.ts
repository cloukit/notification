/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Injectable, TemplateRef } from '@angular/core';
import { CloukitDropoutService, DropoutComponentCreationRequest, DropoutPlacement } from '@cloukit/dropout';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { CloukitNotification } from './notification.model';

@Injectable()
export class CloukitNotificationService {

  private notificationOutlet: TemplateRef<string>;

  private notifications = new BehaviorSubject<CloukitNotification[]>([]);

  constructor(private dropoutService: CloukitDropoutService) {}

  public setOutletTemplate(t: TemplateRef<string>, placement: string) {
    this.notificationOutlet = t;
    const self = this;
    const dummyTriggerElement = document.createElement('div');
    const request = new DropoutComponentCreationRequest();
    request.triggerElement = dummyTriggerElement;
    request.template = self.notificationOutlet;
    // FIXME: use placement
    request.placement = DropoutPlacement.FIX_BOTTOM_LEFT;
    request.zIndex = 300;
    self.dropoutService.requestDropoutCreation(request);
  }

  public addNotification(notification: CloukitNotification) {
    this.notifications.pipe(take(1)).subscribe(notifications => {
      this.notifications
        .next([notification].concat(notifications));
    });
  }

  public getNotifications(): Observable<CloukitNotification[]> {
    return this.notifications.asObservable();
  }

}
