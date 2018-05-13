/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CloukitThemeService } from '@cloukit/theme';
import { CloukitNotificationComponentThemeDefault } from './notification.theme';
import { CloukitNotificationService } from './notification.service';
import { CloukitNotification, CloukitNotificationType } from './notification.model';
import { CloukitNotificationOutletComponent } from './notification-outlet.component';
import { CloukitNotificationComponent } from './notification.component';

class MockCloukitThemeService {
  public prefixStyle(x: any) {
    return x;
  }
  public getComponentTheme(x: any) {
    return new CloukitNotificationComponentThemeDefault();
  }
}

describe('CloukitNotificationOutletComponent', () => {
  let component: CloukitNotificationOutletComponent;
  let fixture: ComponentFixture<CloukitNotificationOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CloukitNotificationOutletComponent,
        CloukitNotificationComponent
      ],
      providers: [
        { provide: CloukitThemeService, useClass: MockCloukitThemeService },
        CloukitNotificationService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloukitNotificationOutletComponent);
    component = fixture.componentInstance;
    // @Input()
    component.theme = null;
    component.offsetX = 1;
    component.offsetY = 1;
    component.placement = 'bottomLeft';
    // -
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
