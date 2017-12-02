/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

export class CloukitNotification {
  private actions = new Subject<CloukitNotificationAction>();

  constructor(public title: string,
              public message: string,
              public type: CloukitNotificationType,
              public linkOne: CloukitNotificationLink,
              public linkTwo: CloukitNotificationLink,
              public destroyAfterMilliSeconds?: number) {}

  public forceClose(): void {
    this.actions.next(CloukitNotificationAction.CLOSE_BY_FORCE);
    this.actions.complete();
  }

  public timedClose(): void {
    this.actions.next(CloukitNotificationAction.CLOSE_BY_TIME);
    this.actions.complete();
  }

  public clickClose(): void {
    this.actions.next(CloukitNotificationAction.CLOSE_ICON_CLICKED);
    this.actions.complete();
  }

  public clickLinkOne(): void {
    this.actions.next(CloukitNotificationAction.LINK_ONE_CLICKED);
  }

  public clickLinkTwo(): void {
    this.actions.next(CloukitNotificationAction.LINK_TWO_CLICKED);
  }

  public getActions(): Observable<CloukitNotificationAction> {
    return this.actions.asObservable();
  }

  public static isCloseAction(type: CloukitNotificationAction) {
    return type === CloukitNotificationAction.CLOSE_ICON_CLICKED
      || type === CloukitNotificationAction.CLOSE_BY_FORCE
      || type === CloukitNotificationAction.CLOSE_BY_TIME;
  }
}

export enum CloukitNotificationType {
  INFO=1,
  SUCCESS=2,
  WARN=3,
  ERROR=4,
}

export enum CloukitNotificationAction {
  LINK_ONE_CLICKED=1,
  LINK_TWO_CLICKED=2,
  CLOSE_ICON_CLICKED=3,
  CLOSE_BY_FORCE=4,
  CLOSE_BY_TIME=5,
}

export class CloukitNotificationLink {
  constructor(public title: string) {}
}
