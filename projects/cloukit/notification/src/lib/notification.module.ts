/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloukitThemeService } from '@cloukit/theme';
import { CloukitNotificationService } from './notification.service';
import { CloukitNotificationOutletLoaderComponent } from './notification-outlet-loader.component';
import { CloukitNotificationOutletComponent } from './notification-outlet.component';
import { CloukitNotificationComponent } from './notification.component';
import { CloukitNotificationComponentThemeDefault } from './notification.theme';

@NgModule({
  imports: [ CommonModule ],
  exports: [
    CloukitNotificationOutletLoaderComponent,
    CloukitNotificationOutletComponent,
    CloukitNotificationComponent,
  ],
  declarations: [
    CloukitNotificationOutletLoaderComponent,
    CloukitNotificationOutletComponent,
    CloukitNotificationComponent,
  ],
  providers: [ CloukitNotificationService ],
  entryComponents: [
    CloukitNotificationOutletLoaderComponent,
    CloukitNotificationOutletComponent,
    CloukitNotificationComponent,
  ],
})
export class CloukitNotificationModule {
  constructor(private themeService: CloukitThemeService) {
    if (this.themeService.getComponentTheme('notification') === null) {
      this.themeService.registerComponentTheme('notification',
        new CloukitNotificationComponentThemeDefault());
    }
  }
}
