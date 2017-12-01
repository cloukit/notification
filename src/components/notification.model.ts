/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
export class CloukitNotification {
  constructor(public title: string,
              public message: string,
              public type: CloukitNotificationType,
              public linkOne: CloukitNotificationLink,
              public linkTwo: CloukitNotificationLink) {}
}
export enum CloukitNotificationType {
  INFO=1,
  SUCCESS=2,
  WARN=3,
  ERROR=4,
}

export class CloukitNotificationLink {
  constructor(public title: string, public href: string) {}
}
