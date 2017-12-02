### Initial Setup

First of all you need to define the `cloukit-dropout-outlet` and the `cloukit-notification-outlet-loader` in your main Bootstrap Component's template like so. Make sure you only define this once at the top level of your component hierarchy.

```html
<cloukit-dropout-outlet></cloukit-dropout-outlet>
<cloukit-notification-outlet-loader
  theme="notification"
  placement="bottomLeft"
  offsetX="80"
  offsetY="0"
></cloukit-notification-outlet-loader>
```

Then import the needed modules in your main module.

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloukitDropoutModule } from '@cloukit/dropout';
import { CloukitThemeModule } from '@cloukit/theme';
import { CloukitNotificationModule } from '@cloukit/notification';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    CloukitThemeModule,
    CloukitNotificationModule,
    CloukitDropoutModule,
  ],
  providers: [ ],
  bootstrap: [ AppComponent ],
})
// ....
```

&nbsp;

### Create a Notification

You can do this simply via the `CloukitNotificationService` like so.

```typescript
import { Component } from '@angular/core';
import {
  CloukitNotificationService,
  CloukitNotification,
  CloukitNotificationType,
} from '@cloukit/notification';

@Component({
  selector: 'demo',
  template: `<button (click)="addNotification()">add</button>`,
  styles: []
})
export class DemoComponent {
  constructor(private notificationService: CloukitNotificationService) {}
  addNotification() {
    this.notificationService.addNotification(
      new CloukitNotification(
        'Success',                        // title
        'You clicked a button!',          // message
        CloukitNotificationType.SUCCESS,  // type
        null,                             // linkOne
        null,                             // linkTwo
        2000                              // Optional: Autoclose after 2secs
    ));
  }
}
```

For more complex examples see the source code of the Demo Stories above.
