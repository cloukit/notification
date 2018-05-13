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
import { CloukitNotificationComponent } from './notification.component';
import { CloukitNotificationOutletComponent } from './notification-outlet.component';
import { CloukitNotificationOutletLoaderComponent } from './notification-outlet-loader.component';

class MockCloukitThemeService {
  public prefixStyle(x: any) {
    return x;
  }
  public getComponentTheme(x: any) {
    return new CloukitNotificationComponentThemeDefault();
  }
}

describe('CloukitNotificationOutletLoaderComponent', () => {
  let component: CloukitNotificationOutletLoaderComponent;
  let fixture: ComponentFixture<CloukitNotificationOutletLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CloukitNotificationOutletComponent,
        CloukitNotificationOutletLoaderComponent,
        CloukitNotificationComponent,
      ],
      providers: [
        { provide: CloukitThemeService, useClass: MockCloukitThemeService },
        CloukitNotificationService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloukitNotificationOutletLoaderComponent);
    component = fixture.componentInstance;
    // @Input()
    // -
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
