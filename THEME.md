To be able to write a custom theme you need to know about the elements, uiStates and uiModifiers.
This graphic shows you all elements and how they are composed together. The Box Elements are composed together by flexbox.

cloukitSvg:https://cloukit.github.io/notification/doc/cloukit-notification-decomposed.svg

Visual Elements

| Element | UI States | UI Modifiers |
|---------|----------|-------------|
| notification | ready | success, info, warn, error  |
| statusIcon | ready | success, info, warn, error |
| title | ready | success, info, warn, error |
| message | ready | success, info, warn, error |
| closeIcon | ready | success, info, warn, error, successHover, infoHover, warnHover, errorHover |
| linkOne | ready | success, info, warn, error, successHover, infoHover, warnHover, errorHover |
| linkTwo | ready | success, info, warn, error, successHover, infoHover, warnHover, errorHover |


Box Elements

| Element | UI States | UI Modifiers |
|---------|----------|-------------|
| wrapper | fadeIn | latest |
|         | ready | latest, latestPlusOne, latestPlusN  |
|         | fadeOut | latest |
| outlet | ready | base |
| left | ready | base |
| right | ready | base |
| center | ready | base |
| links | ready | base |

Note that the **wrapper** has some special UI States and Modifiers. The Animation flow starts with  `fadeIn` and transitions after a short time to `ready`.
On close the UI State changes tp `fadeOut` before the component is destroyed



Below you can see the theme provided by notification. You can easily extend one of the existing themes and change it to your needs. But do not forget to register it at the [`cloukitThemeService`](https://cloukit.github.io/#/guide/themeing).

A new theme with a red background would be created like so:

```typescript
import { CloukitNotificationComponentThemeDefault } from '@cloukit/tooltip';

export class MyRedNotificationTheme extends CloukitNotificationComponentThemeDefault {
  constructor() {
    super();
    const tooltip = this.getElementTheme('wrapper', 'ready', 'error');
    tooltip.styleDef.style.backgroundColor = 'red';
  }
}
```
