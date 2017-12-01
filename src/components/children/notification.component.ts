/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { CloukitNotification, CloukitNotificationType } from '../notification.model';
import {
  CloukitComponentTheme, CloukitStatefulAndModifierAwareElementThemeStyleDefinition,
  CloukitThemeService,
} from '@cloukit/theme';

@Component({
  selector: 'cloukit-notification',
  template: `
  <div [ngStyle]="getStyle('wrapper').style" [style.zIndex]="10000 - index">
    <div [ngStyle]="getStyle('notification').style">
      <div [ngStyle]="getStyle('left').style">
        <svg
          viewBox="0 0 512 512"
          [ngStyle]="getStyle('statusIcon').style"
        >
          <path
            [ngStyle]="getStyle('statusIcon').icon.svgStyle"
            [attr.d]="getStyle('statusIcon').icon.svgPathD"
          ></path>
        </svg>
      </div>
      <div [ngStyle]="getStyle('center').style">
        <div [ngStyle]="getStyle('title').style">
          {{notification.title}}
        </div>
        <div [ngStyle]="getStyle('message').style">
          {{notification.message}}
        </div>
        <div
          *ngIf="notification.linkOne || notification.linkTwo"
          [ngStyle]="getStyle('links').style"
        >
          <button
            type="button"
            *ngIf="notification.linkOne"
            [ngStyle]="getStyle('linkOne').style"
            (click)="notification.linkOne.event.emit()"
            (mouseenter)="toggleHover('linkOne')"
            (mouseleave)="toggleHover('linkOne')"
          >{{notification.linkOne.title}}</button>
          <button
            type="button"
            *ngIf="notification.linkTwo"
            [ngStyle]="getStyle('linkTwo').style"
            (click)="notification.linkTwo.event.emit()"
            (mouseenter)="toggleHover('linkTwo')"
            (mouseleave)="toggleHover('linkTwo')"
          >{{notification.linkTwo.title}}</button>
        </div>
      </div>
      <div [ngStyle]="getStyle('right').style">
        <svg
          (click)="doClose()"
          (mouseenter)="toggleHover('closeIcon')"
          (mouseleave)="toggleHover('closeIcon')"
          viewBox="0 0 512 512"
          [ngStyle]="getStyle('closeIcon').style"
        >
          <path
            [ngStyle]="getStyle('closeIcon').icon.svgStyle"
            [attr.d]="getStyle('closeIcon').icon.svgPathD"
          ></path>
        </svg>
      </div>
    </div>
  </div>`,
  styles: [],
})
export class CloukitNotificationComponent implements OnInit, OnChanges {

  @Input()
  public themeSelected: CloukitComponentTheme;
  @Input()
  public notification: CloukitNotification;
  @Input()
  public index: number;
  @Output()
  public close = new EventEmitter<number>();

  constructor(private themeService: CloukitThemeService) { }

  private state = {
    notification: {
      uiState: 'ready',
      uiModifier: 'success',
    },
    statusIcon: {
      uiState: 'ready',
      uiModifier: 'success',
    },
    title: {
      uiState: 'ready',
      uiModifier: 'success',
    },
    message: {
      uiState: 'ready',
      uiModifier: 'success',
    },
    closeIcon: {
      uiState: 'ready',
      uiModifier: 'success',
    },
    linkOne: {
      uiState: 'ready',
      uiModifier: 'success',
    },
    linkTwo: {
      uiState: 'ready',
      uiModifier: 'success',
    },
    /* BOX ELEMENTS */
    wrapper: {
      uiState: 'fadeIn',
      uiModifier: 'latest',
    },
    left: {
      uiState: 'ready',
      uiModifier: 'base',
    },
    right: {
      uiState: 'ready',
      uiModifier: 'base',
    },
    center: {
      uiState: 'ready',
      uiModifier: 'base',
    },
    links: {
      uiState: 'ready',
      uiModifier: 'base',
    },
  };

  ngOnInit() {
    const self = this;
    setTimeout(() => {
      self.state.wrapper.uiState = 'ready'
    }, 50);

    const uiModifierByType = self.notificationTypeToUiModifier(self.notification.type);
    self.state.statusIcon.uiModifier = uiModifierByType;
    self.state.title.uiModifier = uiModifierByType;
    self.state.notification.uiModifier = uiModifierByType;
    self.state.message.uiModifier = uiModifierByType;
    self.state.closeIcon.uiModifier = uiModifierByType;
    self.state.linkOne.uiModifier = uiModifierByType;
    self.state.linkTwo.uiModifier = uiModifierByType;
  }

  ngOnChanges() {
    const self = this;
    if (self.index === 0) {
      this.state.wrapper.uiModifier = 'latest';
    }
    if (self.index !== 0) {
      this.state.wrapper.uiModifier = self.index === 1 ? 'latestPlusOne' : 'latestPlusN';
    }
  }

  private notificationTypeToUiModifier(type: CloukitNotificationType) {
    if (type === CloukitNotificationType.ERROR) return 'error';
    if (type === CloukitNotificationType.INFO) return 'info';
    if (type === CloukitNotificationType.WARN) return 'warn';
    if (type === CloukitNotificationType.SUCCESS) return 'success';
  }

  public doClose() {
    this.close.emit(this.index);
  }

  public toggleHover(el: string) {
    const modifier = this.state.title.uiModifier;
    if (/^.*Hover$/.test(this.state[el].uiModifier)) {
      this.state[el].uiModifier = `${modifier}`;
    } else {
      this.state[el].uiModifier = `${modifier}Hover`;
    }
  }

  public getStyle(element: string): CloukitStatefulAndModifierAwareElementThemeStyleDefinition {
    const style = this.themeSelected.getStyle(element, this.state[element].uiState, this.state[element].uiModifier);
    if (style === null) {
      return { style: {}, icon: { svgPathD: '', svgStyle: {} } } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition ;
    }
    return this.themeService.prefixStyle(style);
  }
}
