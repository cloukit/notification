import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloukitDropoutModule } from '@cloukit/dropout';
import { CloukitThemeModule } from '@cloukit/theme';
import { CloukitNotificationModule } from '../index';
import { DemoComponent } from './demo.component';
import demoStoriesSource from '../assets/demoStoriesSource.json';
import { CloukitStoryModule, CloukitStoryService } from '@cloukit/story';
import { Story00Component } from './stories/story-00-simple-notifications';
import { Story01Component } from './stories/story-01-timed-notifications';


@NgModule({
  declarations: [
    DemoComponent,
    Story00Component,
    Story01Component,
  ],
  exports: [ DemoComponent ],
  imports: [
    CommonModule,
    CloukitThemeModule,
    CloukitNotificationModule,
    CloukitDropoutModule,
    CloukitStoryModule,
  ],
  providers: [ ],
  bootstrap: [ ],
})
export class DemoModule {
  constructor(private cloukitStoryService: CloukitStoryService) {
    //
    // REGISTER STORY SOURCES
    //
    const keys = Object.keys(demoStoriesSource);
    for (let i=0; i<keys.length; i++) {
      this.cloukitStoryService.addSource(keys[i], demoStoriesSource[keys[i]]);
    }
  }
}
