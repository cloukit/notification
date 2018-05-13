/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CloukitNotificationComponentThemeDefault } from './notification.theme';
import { CloukitNotification, CloukitNotificationType } from './notification.model';
import { CloukitNotificationComponent } from './notification.component';

describe('CloukitNotificationComponent', () => {
  let component: CloukitNotificationComponent;
  let fixture: ComponentFixture<CloukitNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloukitNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloukitNotificationComponent);
    component = fixture.componentInstance;
    // @Input()
    component.themeSelected = new CloukitNotificationComponentThemeDefault();
    component.notification = new  CloukitNotification('foo', 'bar',
      CloukitNotificationType.SUCCESS, null, null);
    component.index = 1;
    // -
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
