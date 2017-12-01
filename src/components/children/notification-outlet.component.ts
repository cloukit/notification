/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, AfterContentInit, OnDestroy, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CloukitNotificationService } from '../services/notification.service';
import { CloukitNotification } from '../../index';
import {
  CloukitComponentTheme, CloukitStatefulAndModifierAwareElementThemeStyleDefinition,
  CloukitThemeService,
} from '@cloukit/theme';

@Component({
  selector: 'cloukit-notification-outlet',
  template: `
 <div [ngStyle]="getStyle('outlet').style">
   <cloukit-notification
     *ngFor="let noti of notifications; let i = index"
     [notification]="noti"
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

  notifications: CloukitNotification[] = [];
  notificationsSubscription: Subscription;

  private themeSelected: CloukitComponentTheme;
  private state = {
    outlet: {
      uiState: 'ready',
      uiModifier: 'base',
    },
  };

  constructor(private cloukitNotificationService: CloukitNotificationService,
              private themeService: CloukitThemeService) {
    this.themeSelected = this.themeService.getComponentTheme('notification');
  }

  getStyle(element: string): CloukitStatefulAndModifierAwareElementThemeStyleDefinition {
    if (this.themeSelected !== undefined && this.themeSelected !== null) {
      const style = this.themeSelected.getStyle(element, this.state[element].uiState, this.state[element].uiModifier);
      return this.themeService.prefixStyle(style);
    }
    return { style: {}, icon: {} } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition;
  }

  doClose(index: number) {
    this.notifications = this.notifications.splice(index, 1)
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
