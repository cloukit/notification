/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, AfterContentInit, OnDestroy, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { CloukitNotificationService } from './notification.service';
import { CloukitNotification } from './notification.model';
import {
  CloukitComponentTheme, CloukitStatefulAndModifierAwareElementThemeStyleDefinition,
  CloukitThemeService,
} from '@cloukit/theme';

@Component({
  selector: 'cloukit-notification-outlet',
  template: `
 <div [ngStyle]="getOutletStyle().style">
   <cloukit-notification
     *ngFor="let notification of notifications; let i = index"
     [notification]="notification"
     [themeSelected]="themeSelected"
     [index]="i"
     (close)="doClose($event)"
   ></cloukit-notification>
 </div>
  `,
  styles: [],
})
export class CloukitNotificationOutletComponent implements AfterContentInit, OnDestroy, OnInit {

  @Input()
  public theme: string;

  @Input()
  public offsetX: number;

  @Input()
  public offsetY: number;

  @Input()
  public placement: string;

  notifications: CloukitNotification[] = [];
  notificationsSubscription: Subscription;

  public themeSelected: CloukitComponentTheme;

  constructor(private cloukitNotificationService: CloukitNotificationService,
              private themeService: CloukitThemeService) {
    this.themeSelected = this.themeService.getComponentTheme('notification');
  }

  getOutletStyle(): CloukitStatefulAndModifierAwareElementThemeStyleDefinition {
    if (this.themeSelected !== undefined && this.themeSelected !== null) {
      const style = this.themeSelected.getStyle('outlet', 'ready', 'base');
      if (this.placement === 'bottomLeft') {
        // FIXME: more placements
        style.style.left = `${this.offsetX}px`;
        style.style.bottom = `${this.offsetY}px`;
      }
      return this.themeService.prefixStyle(style);
    }
    return { style: {}, icon: {} } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition;
  }

  doClose(index: number) {
    this.notifications.splice(index, 1);
  }

  ngOnInit() {
    if (this.theme !== undefined && this.theme !== null) {
      this.themeSelected = this.themeService.getComponentTheme(this.theme);
      if (this.themeSelected === null) {
        console.log(`WARN: requested theme ${this.theme} does not exist. Falling back to default theme for notification.`);
        this.themeSelected = this.themeService.getComponentTheme('notification');
      }
    }
  }

  ngAfterContentInit() {
    this.notificationsSubscription = this.cloukitNotificationService
      .getNotifications()
      .subscribe(notifications => this.notifications = notifications);
  }

  ngOnDestroy() {
    if (this.notificationsSubscription !== undefined && this.notificationsSubscription !== null && !this.notificationsSubscription.closed) {
      this.notificationsSubscription.unsubscribe();
    }
  }
}
