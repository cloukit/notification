<!-- !!! will be dynamically included into cloukit.github.io component doc !!! -->
<!-- !!! DO NOT USE UNECESSARY MARRKUP THAT BREAKS THE CORPORATE DESIGN !!! -->

### Initial Setup

First install needed peerDependencies.

```
yarn add @cloukit/icon @cloukit/dropout @cloukit/theme
````

Secondly you need to define the [**`cloukit-dropout-outlet`**](https://cloukit.github.io/#/component/dropout) and the `cloukit-notification-outlet-loader` in your main Bootstrap Component's template like so. Make sure you only define this once at the top level of your component hierarchy.

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
// (1) Package Imports
import { CloukitThemeModule } from '@cloukit/theme';
import { CloukitDropoutModule } from '@cloukit/dropout';
import { CloukitNotificationModule } from '@cloukit/notification';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    // (2) Register Imports
    CloukitThemeModule,
    CloukitDropoutModule,
    CloukitNotificationModule,    
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


&nbsp;

### Version Compatibility

You can read the [release comments](https://github.com/cloukit/notification/releases) for full details.

Please mind the the compatibility chart

| Angular Version | Cloukit Component Version |
|-----------------|---------------------------|
| >=6.0.0         | 6.0.0 - current           |
| >=5.0.0         | 1.2.0 - 1.2.0             |
| >=4.0.0         | 1.0.0 - 1.1.1             |

To install a specific version use:

```
yarn add @cloukit/notification@1.1.1
```
