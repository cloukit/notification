/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloukitThemeService } from '@cloukit/theme';
import { CloukitDropoutModule } from '@cloukit/dropout';
import { CloukitNotificationService } from './services/notification.service';
import { CloukitNotificationOutletLoaderComponent } from './children/notification-outlet-loader.component';
import { CloukitNotificationOutletComponent } from './children/notification-outlet.component';

@NgModule({
  imports: [ CommonModule, CloukitDropoutModule ],
  exports: [ CloukitNotificationOutletLoaderComponent, CloukitNotificationOutletComponent ],
  declarations: [ CloukitNotificationOutletLoaderComponent, CloukitNotificationOutletComponent ],
  providers: [ CloukitNotificationService ],
  entryComponents: [ CloukitNotificationOutletLoaderComponent, CloukitNotificationOutletComponent ],
})
export class CloukitNotificationModule {
  constructor(private themeService: CloukitThemeService) {
    // if (this.themeService.getComponentTheme('tooltip') === null) {
    //  this.themeService.registerComponentTheme('tooltip', new CloukitTooltipComponentThemeDefault());
    // }
  }
}
