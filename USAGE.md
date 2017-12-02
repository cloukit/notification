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

The import the the needed modules in your main module like so.

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
