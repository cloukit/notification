webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: "<demo></demo>"
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demo_demo_module__ = __webpack_require__("../../../../../src/demo/demo.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__demo_demo_module__["a" /* DemoModule */]],
            providers: [],
            exports: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/assets/demoStoriesSource.json":
/***/ (function(module, exports) {

module.exports = {"story-00-simple-notifications.html":"<div class=\"row\">\n  <div class=\"col\">\n    <button\n      type=\"button\"\n      class=\"superButton\"\n      (click)=\"openSuccess()\"\n      [disabled]=\"success && !success?.actions.closed\"\n    >add success</button>\n    <button\n      type=\"button\"\n      class=\"superButtonSecondary\"\n      (click)=\"closeSuccess()\"\n      [disabled]=\"!success || success?.actions.closed\"\n    >close success</button>\n    <div class=\"eventLog\">\n      <div\n        class=\"eventLogEntry eventLogEntry-{{entry}}\"\n        *ngFor=\"let entry of successEventLog\"\n        >{{translateEventLog(entry)}}</div>\n    </div>\n  </div>\n  <div class=\"col\">\n    <button\n      type=\"button\"\n      class=\"superButton\"\n      (click)=\"openInfo()\"\n      [disabled]=\"info && !info?.actions.closed\"\n    >add info</button>\n    <button\n      type=\"button\"\n      class=\"superButtonSecondary\"\n      (click)=\"closeInfo()\"\n      [disabled]=\"!info || info?.actions.closed\"\n    >close info</button>\n    <div class=\"eventLog\">\n      <div\n        class=\"eventLogEntry eventLogEntry-{{entry}}\"\n        *ngFor=\"let entry of infoEventLog\"\n      >{{translateEventLog(entry)}}</div>\n    </div>\n  </div>\n  <div class=\"col\">\n    <button\n      type=\"button\"\n      class=\"superButton\"\n      (click)=\"openWarn()\"\n      [disabled]=\"warn && !warn?.actions.closed\"\n    >add warn</button>\n    <button\n      type=\"button\"\n      class=\"superButtonSecondary\"\n      (click)=\"closeWarn()\"\n      [disabled]=\"!warn || warn?.actions.closed\"\n    >close warn</button>\n    <div class=\"eventLog\">\n      <div\n        class=\"eventLogEntry eventLogEntry-{{entry}}\"\n        *ngFor=\"let entry of warnEventLog\"\n      >{{translateEventLog(entry)}}</div>\n    </div>\n  </div>\n  <div class=\"col\">\n    <button\n      type=\"button\"\n      class=\"superButton\"\n      (click)=\"openError()\"\n      [disabled]=\"error && !error?.actions.closed\"\n    >add error</button>\n    <button\n      type=\"button\"\n      class=\"superButtonSecondary\"\n      (click)=\"closeError()\"\n      [disabled]=\"!error || error?.actions.closed\"\n    >close error</button>\n    <div class=\"eventLog\">\n      <div\n        class=\"eventLogEntry eventLogEntry-{{entry}}\"\n        *ngFor=\"let entry of errorEventLog\"\n      >{{translateEventLog(entry)}}</div>\n    </div>\n  </div>\n</div>\n\n","story-00-simple-notifications.ts":"import { Component } from '@angular/core';\nimport { DemoComponent } from '../demo.component';\nimport {\n  CloukitNotificationService,\n  CloukitNotification,\n  CloukitNotificationType,\n  CloukitNotificationLink,\n  CloukitNotificationAction,\n} from '../../index';\n\n@Component({\n  selector: 'story-00-simple-notifications',\n  templateUrl: './story-00-simple-notifications.html',\n  styles: [].concat(DemoComponent.sharedStyles),\n})\nexport class Story00Component {\n\n  constructor(private notificationService: CloukitNotificationService) {}\n\n  success: CloukitNotification;\n  successEventLog: number[] = [];\n\n  warn: CloukitNotification;\n  warnEventLog: number[] = [];\n\n  error: CloukitNotification;\n  errorEventLog: number[] = [];\n\n  info: CloukitNotification;\n  infoEventLog: number[] = [];\n\n  openSuccess() {\n    const self = this;\n    self.success = new CloukitNotification('Success',\n      'You clicked a button!',\n      CloukitNotificationType.SUCCESS,\n      new CloukitNotificationLink('Ok'),\n      new CloukitNotificationLink('who cares'));\n    self.success.getActions().subscribe(action => {\n      self.successEventLog = [action].concat(self.successEventLog);\n      if (CloukitNotification.isCloseAction(action)) { self.success = null; }\n    });\n    self.notificationService.addNotification(this.success);\n  }\n  closeSuccess() {\n    this.success.forceClose();\n  }\n\n  openInfo() {\n    const self = this;\n    self.info = new CloukitNotification('Info',\n      'Sport is healthy.',\n      CloukitNotificationType.INFO,\n      new CloukitNotificationLink('ok'),\n      new CloukitNotificationLink('naaaah'));\n    self.info.getActions().subscribe(action => {\n      self.infoEventLog = [action].concat(self.infoEventLog);\n      if (CloukitNotification.isCloseAction(action)) { self.info = null; }\n    });\n    self.notificationService.addNotification(this.info);\n  }\n  closeInfo() {\n    this.info.forceClose();\n  }\n\n  openWarn() {\n    const self = this;\n    self.warn = new CloukitNotification('Atención',\n      'Los pantalones estan pequeños!',\n      CloukitNotificationType.WARN,\n      new CloukitNotificationLink('confirmar'),\n      new CloukitNotificationLink('cancelar'));\n    self.warn.getActions().subscribe(action => {\n      self.warnEventLog = [action].concat(self.warnEventLog);\n      if (CloukitNotification.isCloseAction(action)) { self.warn = null; }\n    });\n    self.notificationService.addNotification(this.warn);\n  }\n  closeWarn() {\n    this.warn.forceClose();\n  }\n\n  openError() {\n    const self = this;\n    self.error = new CloukitNotification('Warn',\n      'Too much sugar is unhealthy!',\n      CloukitNotificationType.ERROR,\n      new CloukitNotificationLink('ok'),\n      new CloukitNotificationLink('nbd'));\n    self.error.getActions().subscribe(action => {\n      self.errorEventLog = [action].concat(self.errorEventLog);\n      if (CloukitNotification.isCloseAction(action)) { self.error = null; }\n    });\n    self.notificationService.addNotification(this.error);\n  }\n  closeError() {\n    this.error.forceClose();\n  }\n\n  translateEventLog(type: number) {\n    if (type === CloukitNotificationAction.CLOSE_ICON_CLICKED) return 'close icon clicked';\n    if (type === CloukitNotificationAction.LINK_TWO_CLICKED) return 'link two clicked';\n    if (type === CloukitNotificationAction.LINK_ONE_CLICKED) return 'link one clicked';\n    if (type === CloukitNotificationAction.CLOSE_BY_FORCE) return 'close by force';\n    if (type === CloukitNotificationAction.CLOSE_BY_TIME) return 'close by time';\n  }\n\n}\n","story-01-timed-notifications.html":"<div class=\"row\">\n  <div class=\"col\">\n    <button\n      type=\"button\"\n      class=\"superButton\"\n      (click)=\"openSuccess()\"\n    >add success that will auto close after 2 sec</button>\n  </div>\n</div>\n","story-01-timed-notifications.ts":"import { Component } from '@angular/core';\nimport { DemoComponent } from '../demo.component';\nimport {\n  CloukitNotificationService,\n  CloukitNotification,\n  CloukitNotificationType,\n  CloukitNotificationLink,\n  CloukitNotificationAction,\n} from '../../index';\n\n@Component({\n  selector: 'story-01-timed-notifications',\n  templateUrl: './story-01-timed-notifications.html',\n  styles: [].concat(DemoComponent.sharedStyles),\n})\nexport class Story01Component {\n\n  constructor(private notificationService: CloukitNotificationService) {}\n\n  openSuccess() {\n    const self = this;\n    const notification = new CloukitNotification('Success',\n      'You clicked a button!',\n      CloukitNotificationType.SUCCESS,\n      null, null,\n      2000);\n    self.notificationService.addNotification(notification);\n  }\n\n}\n"}

/***/ }),

/***/ "../../../../../src/components/children/notification-outlet-loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitNotificationOutletLoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_notification_service__ = __webpack_require__("../../../../../src/components/services/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */


/**
 * Injects a TemplateRef of the NotificationOutlet into the NotificationService
 */
var CloukitNotificationOutletLoaderComponent = (function () {
    function CloukitNotificationOutletLoaderComponent(cloukitNotificationService) {
        this.cloukitNotificationService = cloukitNotificationService;
        this.offsetX = 0; /* default */
        this.offsetY = 0; /* default */
        this.placement = 'bottomLeft'; /* default */
    }
    CloukitNotificationOutletLoaderComponent.prototype.ngAfterContentInit = function () {
        this.cloukitNotificationService.setOutletTemplate(this.notificationOutlet, this.placement);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])('notificationOutlet'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* TemplateRef */])
    ], CloukitNotificationOutletLoaderComponent.prototype, "notificationOutlet", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", String)
    ], CloukitNotificationOutletLoaderComponent.prototype, "theme", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], CloukitNotificationOutletLoaderComponent.prototype, "offsetX", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], CloukitNotificationOutletLoaderComponent.prototype, "offsetY", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], CloukitNotificationOutletLoaderComponent.prototype, "placement", void 0);
    CloukitNotificationOutletLoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cloukit-notification-outlet-loader',
            template: "<ng-template #notificationOutlet>\n    <cloukit-notification-outlet\n      [theme]=\"theme\"\n      [offsetX]=\"offsetX\"\n      [offsetY]=\"offsetY\"\n      [placement]=\"placement\"\n    ></cloukit-notification-outlet>\n  </ng-template>",
            styles: [],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_notification_service__["a" /* CloukitNotificationService */]])
    ], CloukitNotificationOutletLoaderComponent);
    return CloukitNotificationOutletLoaderComponent;
}());



/***/ }),

/***/ "../../../../../src/components/children/notification-outlet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitNotificationOutletComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_notification_service__ = __webpack_require__("../../../../../src/components/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cloukit_theme__ = __webpack_require__("../../../../@cloukit/theme/theme.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */



var CloukitNotificationOutletComponent = (function () {
    function CloukitNotificationOutletComponent(cloukitNotificationService, themeService) {
        this.cloukitNotificationService = cloukitNotificationService;
        this.themeService = themeService;
        this.notifications = [];
        this.themeSelected = this.themeService.getComponentTheme('notification');
    }
    CloukitNotificationOutletComponent.prototype.getOutletStyle = function () {
        if (this.themeSelected !== undefined && this.themeSelected !== null) {
            var style = this.themeSelected.getStyle('outlet', 'ready', 'base');
            if (this.placement === 'bottomLeft') {
                // FIXME: more placements
                style.style.left = this.offsetX + "px";
                style.style.bottom = this.offsetY + "px";
            }
            return this.themeService.prefixStyle(style);
        }
        return { style: {}, icon: {} };
    };
    CloukitNotificationOutletComponent.prototype.doClose = function (index) {
        this.notifications.splice(index, 1);
    };
    CloukitNotificationOutletComponent.prototype.ngOnInit = function () {
        if (this.theme !== undefined && this.theme !== null) {
            this.themeSelected = this.themeService.getComponentTheme(this.theme);
            if (this.themeSelected === null) {
                console.log("WARN: requested theme " + this.theme + " does not exist. Falling back to default theme for notification.");
                this.themeSelected = this.themeService.getComponentTheme('notification');
            }
        }
    };
    CloukitNotificationOutletComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.notificationsSubscription = this.cloukitNotificationService
            .getNotifications()
            .subscribe(function (notifications) { return _this.notifications = notifications; });
    };
    CloukitNotificationOutletComponent.prototype.ngOnDestroy = function () {
        if (this.notificationsSubscription !== undefined && this.notificationsSubscription !== null && !this.notificationsSubscription.closed) {
            this.notificationsSubscription.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", String)
    ], CloukitNotificationOutletComponent.prototype, "theme", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Number)
    ], CloukitNotificationOutletComponent.prototype, "offsetX", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Number)
    ], CloukitNotificationOutletComponent.prototype, "offsetY", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", String)
    ], CloukitNotificationOutletComponent.prototype, "placement", void 0);
    CloukitNotificationOutletComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cloukit-notification-outlet',
            template: "\n <div [ngStyle]=\"getOutletStyle().style\">\n   <cloukit-notification\n     *ngFor=\"let notification of notifications; let i = index\"\n     [notification]=\"notification\"\n     [themeSelected]=\"themeSelected\"\n     [index]=\"i\"\n     (close)=\"doClose($event)\"\n   ></cloukit-notification>\n </div>\n  ",
            styles: [],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_notification_service__["a" /* CloukitNotificationService */],
            __WEBPACK_IMPORTED_MODULE_2__cloukit_theme__["c" /* CloukitThemeService */]])
    ], CloukitNotificationOutletComponent);
    return CloukitNotificationOutletComponent;
}());



/***/ }),

/***/ "../../../../../src/components/children/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitNotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notification_model__ = __webpack_require__("../../../../../src/components/notification.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cloukit_theme__ = __webpack_require__("../../../../@cloukit/theme/theme.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeUntil.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */






var CloukitNotificationComponent = (function () {
    function CloukitNotificationComponent(themeService) {
        this.themeService = themeService;
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.preDestroy = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        this.state = {
            notification: {
                uiState: 'ready',
                uiModifier: 'success',
            },
            statusIcon: {
                uiState: 'ready',
                uiModifier: 'success',
            },
            title: {
                uiState: 'ready',
                uiModifier: 'success',
            },
            message: {
                uiState: 'ready',
                uiModifier: 'success',
            },
            closeIcon: {
                uiState: 'ready',
                uiModifier: 'success',
            },
            linkOne: {
                uiState: 'ready',
                uiModifier: 'success',
            },
            linkTwo: {
                uiState: 'ready',
                uiModifier: 'success',
            },
            /* BOX ELEMENTS */
            wrapper: {
                uiState: 'fadeIn',
                uiModifier: 'latest',
            },
            left: {
                uiState: 'ready',
                uiModifier: 'base',
            },
            right: {
                uiState: 'ready',
                uiModifier: 'base',
            },
            center: {
                uiState: 'ready',
                uiModifier: 'base',
            },
            links: {
                uiState: 'ready',
                uiModifier: 'base',
            },
        };
    }
    CloukitNotificationComponent.prototype.ngOnInit = function () {
        var self = this;
        self.notification
            .getActions()
            .takeUntil(self.preDestroy)
            .subscribe(function (action) {
            if (action === __WEBPACK_IMPORTED_MODULE_1__notification_model__["b" /* CloukitNotificationAction */].CLOSE_BY_FORCE) {
                self.doClose();
            }
        });
        setTimeout(function () {
            self.state.wrapper.uiState = 'ready';
        }, 50);
        if (!Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(self.notification.destroyAfterMilliSeconds) && self.notification.destroyAfterMilliSeconds > 0) {
            setTimeout(function () { return self.closeByTime(); }, self.notification.destroyAfterMilliSeconds);
        }
        var uiModifierByType = self.notificationTypeToUiModifier(self.notification.type);
        self.state.statusIcon.uiModifier = uiModifierByType;
        self.state.title.uiModifier = uiModifierByType;
        self.state.notification.uiModifier = uiModifierByType;
        self.state.message.uiModifier = uiModifierByType;
        self.state.closeIcon.uiModifier = uiModifierByType;
        self.state.linkOne.uiModifier = uiModifierByType;
        self.state.linkTwo.uiModifier = uiModifierByType;
    };
    CloukitNotificationComponent.prototype.ngOnChanges = function () {
        var self = this;
        if (self.index === 0) {
            this.state.wrapper.uiModifier = 'latest';
        }
        if (self.index !== 0) {
            this.state.wrapper.uiModifier = self.index === 1 ? 'latestPlusOne' : 'latestPlusN';
        }
    };
    CloukitNotificationComponent.prototype.ngOnDestroy = function () {
        if (this.preDestroy !== undefined && this.preDestroy !== null) {
            this.preDestroy.next(true);
            this.preDestroy.complete();
        }
    };
    CloukitNotificationComponent.prototype.notificationTypeToUiModifier = function (type) {
        if (type === __WEBPACK_IMPORTED_MODULE_1__notification_model__["d" /* CloukitNotificationType */].ERROR)
            return 'error';
        if (type === __WEBPACK_IMPORTED_MODULE_1__notification_model__["d" /* CloukitNotificationType */].INFO)
            return 'info';
        if (type === __WEBPACK_IMPORTED_MODULE_1__notification_model__["d" /* CloukitNotificationType */].WARN)
            return 'warn';
        if (type === __WEBPACK_IMPORTED_MODULE_1__notification_model__["d" /* CloukitNotificationType */].SUCCESS)
            return 'success';
    };
    CloukitNotificationComponent.prototype.closeByTime = function () {
        var self = this;
        self.notification.timedClose();
        self.doClose();
    };
    CloukitNotificationComponent.prototype.clickCloseIcon = function () {
        var self = this;
        self.notification.clickClose();
        self.doClose();
    };
    CloukitNotificationComponent.prototype.doClose = function () {
        var _this = this;
        var self = this;
        self.state.wrapper.uiState = 'fadeOut';
        setTimeout(function () {
            self.close.emit(_this.index);
        }, 500);
    };
    CloukitNotificationComponent.prototype.toggleHover = function (el) {
        var modifier = this.state.title.uiModifier;
        if (/^.*Hover$/.test(this.state[el].uiModifier)) {
            this.state[el].uiModifier = "" + modifier;
        }
        else {
            this.state[el].uiModifier = modifier + "Hover";
        }
    };
    CloukitNotificationComponent.prototype.clickLinkOne = function () {
        this.notification.clickLinkOne();
    };
    CloukitNotificationComponent.prototype.clickLinkTwo = function () {
        this.notification.clickLinkTwo();
    };
    CloukitNotificationComponent.prototype.getStyle = function (element) {
        var style = this.themeSelected.getStyle(element, this.state[element].uiState, this.state[element].uiModifier);
        if (style === null) {
            return { style: {}, icon: { svgPathD: '', svgStyle: {} } };
        }
        return this.themeService.prefixStyle(style);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__cloukit_theme__["a" /* CloukitComponentTheme */])
    ], CloukitNotificationComponent.prototype, "themeSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__notification_model__["a" /* CloukitNotification */])
    ], CloukitNotificationComponent.prototype, "notification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Number)
    ], CloukitNotificationComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", Object)
    ], CloukitNotificationComponent.prototype, "close", void 0);
    CloukitNotificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cloukit-notification',
            template: "\n  <div [ngStyle]=\"getStyle('wrapper').style\" [style.zIndex]=\"getStyle('wrapper').style.zIndex - index\">\n    <div [ngStyle]=\"getStyle('notification').style\">\n      <div [ngStyle]=\"getStyle('left').style\">\n        <svg\n          viewBox=\"0 0 512 512\"\n          [ngStyle]=\"getStyle('statusIcon').style\"\n        >\n          <path\n            [ngStyle]=\"getStyle('statusIcon').icon.svgStyle\"\n            [attr.d]=\"getStyle('statusIcon').icon.svgPathD\"\n          ></path>\n        </svg>\n      </div>\n      <div [ngStyle]=\"getStyle('center').style\">\n        <div [ngStyle]=\"getStyle('title').style\">\n          {{notification.title}}\n        </div>\n        <div [ngStyle]=\"getStyle('message').style\">\n          {{notification.message}}\n        </div>\n        <div\n          *ngIf=\"notification.linkOne || notification.linkTwo\"\n          [ngStyle]=\"getStyle('links').style\"\n        >\n          <button\n            type=\"button\"\n            *ngIf=\"notification.linkOne\"\n            [ngStyle]=\"getStyle('linkOne').style\"\n            (click)=\"clickLinkOne()\"\n            (mouseenter)=\"toggleHover('linkOne')\"\n            (mouseleave)=\"toggleHover('linkOne')\"\n          >{{notification.linkOne.title}}</button>\n          <button\n            type=\"button\"\n            *ngIf=\"notification.linkTwo\"\n            [ngStyle]=\"getStyle('linkTwo').style\"\n            (click)=\"clickLinkTwo()\"\n            (mouseenter)=\"toggleHover('linkTwo')\"\n            (mouseleave)=\"toggleHover('linkTwo')\"\n          >{{notification.linkTwo.title}}</button>\n        </div>\n      </div>\n      <div [ngStyle]=\"getStyle('right').style\">\n        <svg\n          (click)=\"clickCloseIcon()\"\n          (mouseenter)=\"toggleHover('closeIcon')\"\n          (mouseleave)=\"toggleHover('closeIcon')\"\n          viewBox=\"0 0 512 512\"\n          [ngStyle]=\"getStyle('closeIcon').style\"\n        >\n          <path\n            [ngStyle]=\"getStyle('closeIcon').icon.svgStyle\"\n            [attr.d]=\"getStyle('closeIcon').icon.svgPathD\"\n          ></path>\n        </svg>\n      </div>\n    </div>\n  </div>",
            styles: [],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__cloukit_theme__["c" /* CloukitThemeService */]])
    ], CloukitNotificationComponent);
    return CloukitNotificationComponent;
}());



/***/ }),

/***/ "../../../../../src/components/notification.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CloukitNotificationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CloukitNotificationAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CloukitNotificationLink; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */

var CloukitNotification = (function () {
    function CloukitNotification(title, message, type, linkOne, linkTwo, destroyAfterMilliSeconds) {
        this.title = title;
        this.message = message;
        this.type = type;
        this.linkOne = linkOne;
        this.linkTwo = linkTwo;
        this.destroyAfterMilliSeconds = destroyAfterMilliSeconds;
        this.actions = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
    }
    CloukitNotification.prototype.forceClose = function () {
        this.actions.next(CloukitNotificationAction.CLOSE_BY_FORCE);
        this.actions.complete();
    };
    CloukitNotification.prototype.timedClose = function () {
        this.actions.next(CloukitNotificationAction.CLOSE_BY_TIME);
        this.actions.complete();
    };
    CloukitNotification.prototype.clickClose = function () {
        this.actions.next(CloukitNotificationAction.CLOSE_ICON_CLICKED);
        this.actions.complete();
    };
    CloukitNotification.prototype.clickLinkOne = function () {
        this.actions.next(CloukitNotificationAction.LINK_ONE_CLICKED);
    };
    CloukitNotification.prototype.clickLinkTwo = function () {
        this.actions.next(CloukitNotificationAction.LINK_TWO_CLICKED);
    };
    CloukitNotification.prototype.getActions = function () {
        return this.actions.asObservable();
    };
    CloukitNotification.isCloseAction = function (type) {
        return type === CloukitNotificationAction.CLOSE_ICON_CLICKED
            || type === CloukitNotificationAction.CLOSE_BY_FORCE
            || type === CloukitNotificationAction.CLOSE_BY_TIME;
    };
    return CloukitNotification;
}());

var CloukitNotificationType;
(function (CloukitNotificationType) {
    CloukitNotificationType[CloukitNotificationType["INFO"] = 1] = "INFO";
    CloukitNotificationType[CloukitNotificationType["SUCCESS"] = 2] = "SUCCESS";
    CloukitNotificationType[CloukitNotificationType["WARN"] = 3] = "WARN";
    CloukitNotificationType[CloukitNotificationType["ERROR"] = 4] = "ERROR";
})(CloukitNotificationType || (CloukitNotificationType = {}));
var CloukitNotificationAction;
(function (CloukitNotificationAction) {
    CloukitNotificationAction[CloukitNotificationAction["LINK_ONE_CLICKED"] = 1] = "LINK_ONE_CLICKED";
    CloukitNotificationAction[CloukitNotificationAction["LINK_TWO_CLICKED"] = 2] = "LINK_TWO_CLICKED";
    CloukitNotificationAction[CloukitNotificationAction["CLOSE_ICON_CLICKED"] = 3] = "CLOSE_ICON_CLICKED";
    CloukitNotificationAction[CloukitNotificationAction["CLOSE_BY_FORCE"] = 4] = "CLOSE_BY_FORCE";
    CloukitNotificationAction[CloukitNotificationAction["CLOSE_BY_TIME"] = 5] = "CLOSE_BY_TIME";
})(CloukitNotificationAction || (CloukitNotificationAction = {}));
var CloukitNotificationLink = (function () {
    function CloukitNotificationLink(title) {
        this.title = title;
    }
    return CloukitNotificationLink;
}());



/***/ }),

/***/ "../../../../../src/components/notification.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitNotificationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cloukit_theme__ = __webpack_require__("../../../../@cloukit/theme/theme.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cloukit_dropout__ = __webpack_require__("../../../../@cloukit/dropout/dropout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notification_service__ = __webpack_require__("../../../../../src/components/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__children_notification_outlet_loader_component__ = __webpack_require__("../../../../../src/components/children/notification-outlet-loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__children_notification_outlet_component__ = __webpack_require__("../../../../../src/components/children/notification-outlet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__children_notification_component__ = __webpack_require__("../../../../../src/components/children/notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__notification_theme__ = __webpack_require__("../../../../../src/components/notification.theme.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */









var CloukitNotificationModule = (function () {
    function CloukitNotificationModule(themeService) {
        this.themeService = themeService;
        if (this.themeService.getComponentTheme('notification') === null) {
            this.themeService.registerComponentTheme('notification', new __WEBPACK_IMPORTED_MODULE_8__notification_theme__["a" /* CloukitNotificationComponentThemeDefault */]());
        }
    }
    CloukitNotificationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__cloukit_dropout__["a" /* CloukitDropoutModule */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__children_notification_outlet_loader_component__["a" /* CloukitNotificationOutletLoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__children_notification_outlet_component__["a" /* CloukitNotificationOutletComponent */],
                __WEBPACK_IMPORTED_MODULE_7__children_notification_component__["a" /* CloukitNotificationComponent */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__children_notification_outlet_loader_component__["a" /* CloukitNotificationOutletLoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__children_notification_outlet_component__["a" /* CloukitNotificationOutletComponent */],
                __WEBPACK_IMPORTED_MODULE_7__children_notification_component__["a" /* CloukitNotificationComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* CloukitNotificationService */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__children_notification_outlet_loader_component__["a" /* CloukitNotificationOutletLoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__children_notification_outlet_component__["a" /* CloukitNotificationOutletComponent */],
                __WEBPACK_IMPORTED_MODULE_7__children_notification_component__["a" /* CloukitNotificationComponent */],
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__cloukit_theme__["c" /* CloukitThemeService */]])
    ], CloukitNotificationModule);
    return CloukitNotificationModule;
}());



/***/ }),

/***/ "../../../../../src/components/notification.theme.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitNotificationComponentThemeDefault; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cloukit_theme__ = __webpack_require__("../../../../@cloukit/theme/theme.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cloukit_icon__ = __webpack_require__("../../../../@cloukit/icon/icon.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */


/**
 * The default theme
 */
var CloukitNotificationComponentThemeDefault = (function (_super) {
    __extends(CloukitNotificationComponentThemeDefault, _super);
    function CloukitNotificationComponentThemeDefault() {
        var _this = _super.call(this) || this;
        //
        // BOX ELEMENTS
        //
        _this.createStyle('outlet', 'ready', 'base', {
            style: {
                width: '430px',
                zIndex: 9999,
                color: '#333',
                position: 'fixed',
            }
        });
        _this.createStyle('left', 'ready', 'base', {
            style: {
                width: '30px',
                maxWidth: '30px',
                flex: 1,
            }
        });
        _this.createStyle('right', 'ready', 'base', {
            style: {
                width: '22px',
                maxWidth: '22px',
                flex: 1,
            }
        });
        _this.createStyle('center', 'ready', 'base', {
            style: {
                display: 'flex',
                flexDirection: 'column',
                flex: 3,
            }
        });
        _this.createStyle('links', 'ready', 'base', {
            style: {}
        });
        _this.createStyle('wrapper', 'fadeIn', 'latest', {
            style: {
                position: 'absolute',
                bottom: '50px',
                width: '400px',
                maxWidth: '400px',
                transition: "\n          margin-left 300ms linear,\n          margin-right 300ms linear,\n          margin-top 300ms linear,\n          margin-bottom 300ms linear,\n          opacity 300ms ease-in-out,\n          transform 300ms linear",
                opacity: 0,
                zIndex: 10000,
                margin: '10px 800px 10px -800px',
                boxShadow: '0 0 1px rgba(9, 30, 66, 0.31), 0 20px 32px -8px rgba(9, 30, 66, 0.25)',
            }
        });
        _this.createStyle('wrapper', 'ready', 'latest', _this.merge(_this.getStyle('wrapper', 'fadeIn', 'latest'), {
            style: {
                opacity: 1,
                margin: '10px 10px 10px 10px',
                transform: 'translateX(0) translateY(0)',
            }
        }));
        _this.createStyle('wrapper', 'ready', 'latestPlusOne', _this.merge(_this.getStyle('wrapper', 'fadeIn', 'latest'), {
            style: {
                opacity: 1,
                margin: '10px 10px 10px 10px',
                transform: 'translateX(0) translateY(100%) translateY(20px)',
            }
        }));
        _this.createStyle('wrapper', 'ready', 'latestPlusN', _this.merge(_this.getStyle('wrapper', 'fadeIn', 'latest'), {
            style: {
                opacity: 1,
                margin: '10px 10px 10px 10px',
                transform: 'translateX(0) translateY(200%) translateY(40px)',
            }
        }));
        _this.createStyle('wrapper', 'fadeOut', 'latest', _this.merge(_this.getStyle('wrapper', 'ready', 'latest'), {
            style: {
                opacity: 0,
                zIndex: 10000,
                margin: '10px 800px 10px -800px',
            }
        }));
        _this.createStyle('wrapper', 'fadeOut', 'latestPlusOne', _this.merge(_this.getStyle('wrapper', 'ready', 'latestPlusOne'), {
            style: {
                opacity: 0,
                zIndex: 10000,
                margin: '10px 800px 10px -800px',
            }
        }));
        _this.createStyle('wrapper', 'fadeOut', 'latestPlusN', _this.merge(_this.getStyle('wrapper', 'ready', 'latestPlusN'), {
            style: {
                opacity: 0,
                zIndex: 10000,
                margin: '10px 800px 10px -800px',
            }
        }));
        //
        // notification
        //
        _this.createStyle('notification', 'ready', 'base', {
            style: {
                backgroundColor: '#fff',
                padding: '10px',
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
            }
        });
        _this.createStyle('notification', 'ready', 'success', _this.merge(_this.getStyle('notification', 'ready', 'base'), {
            style: {
                border: '1px solid #52C416',
            }
        }));
        _this.createStyle('notification', 'ready', 'info', _this.merge(_this.getStyle('notification', 'ready', 'base'), {
            style: {
                border: '1px solid #005FFF',
            }
        }));
        _this.createStyle('notification', 'ready', 'warn', _this.merge(_this.getStyle('notification', 'ready', 'base'), {
            style: {
                border: '1px solid #E77B12',
            }
        }));
        _this.createStyle('notification', 'ready', 'error', _this.merge(_this.getStyle('notification', 'ready', 'base'), {
            style: {
                border: '1px solid #C41616',
            }
        }));
        //
        // statusIcon
        //
        _this.createStyle('statusIcon', 'ready', 'base', {
            style: {
                width: '20px',
            },
            icon: {
                svgStyle: {
                    width: '20px',
                }
            }
        });
        _this.createStyle('statusIcon', 'ready', 'success', _this.merge(_this.getStyle('statusIcon', 'ready', 'base'), {
            style: {},
            icon: {
                svgPathD: __WEBPACK_IMPORTED_MODULE_1__cloukit_icon__["a" /* CloukitIcons */].checkCircle,
                svgStyle: {
                    fill: '#52C416',
                }
            }
        }));
        _this.createStyle('statusIcon', 'ready', 'info', _this.merge(_this.getStyle('statusIcon', 'ready', 'base'), {
            style: {},
            icon: {
                svgPathD: __WEBPACK_IMPORTED_MODULE_1__cloukit_icon__["a" /* CloukitIcons */].infoCircle,
                svgStyle: {
                    fill: '#005FFF',
                }
            }
        }));
        _this.createStyle('statusIcon', 'ready', 'warn', _this.merge(_this.getStyle('statusIcon', 'ready', 'base'), {
            style: {},
            icon: {
                svgPathD: __WEBPACK_IMPORTED_MODULE_1__cloukit_icon__["a" /* CloukitIcons */].exclamationCircle,
                svgStyle: {
                    fill: '#E77B12',
                }
            }
        }));
        _this.createStyle('statusIcon', 'ready', 'error', _this.merge(_this.getStyle('statusIcon', 'ready', 'base'), {
            style: {},
            icon: {
                svgPathD: __WEBPACK_IMPORTED_MODULE_1__cloukit_icon__["a" /* CloukitIcons */].exclamationTriangle,
                svgStyle: {
                    fill: '#C41616',
                }
            }
        }));
        //
        // closeIcon
        //
        _this.createStyle('closeIcon', 'ready', 'base', {
            style: {
                width: '20px',
                cursor: 'pointer',
                userSelect: 'none',
            },
            icon: {
                svgPathD: __WEBPACK_IMPORTED_MODULE_1__cloukit_icon__["a" /* CloukitIcons */].cross,
                svgStyle: {
                    width: '20px',
                    fill: '#333',
                }
            }
        });
        _this.createStyle('closeIcon', 'ready', 'success', _this.merge(_this.getStyle('closeIcon', 'ready', 'base'), {}));
        _this.createStyle('closeIcon', 'ready', 'info', _this.merge(_this.getStyle('closeIcon', 'ready', 'base'), {}));
        _this.createStyle('closeIcon', 'ready', 'warn', _this.merge(_this.getStyle('closeIcon', 'ready', 'base'), {}));
        _this.createStyle('closeIcon', 'ready', 'error', _this.merge(_this.getStyle('closeIcon', 'ready', 'base'), {}));
        _this.createStyle('closeIcon', 'ready', 'successHover', _this.merge(_this.getStyle('closeIcon', 'ready', 'success'), {}));
        _this.createStyle('closeIcon', 'ready', 'infoHover', _this.merge(_this.getStyle('closeIcon', 'ready', 'info'), {}));
        _this.createStyle('closeIcon', 'ready', 'warnHover', _this.merge(_this.getStyle('closeIcon', 'ready', 'warn'), {}));
        _this.createStyle('closeIcon', 'ready', 'errorHover', _this.merge(_this.getStyle('closeIcon', 'ready', 'error'), {}));
        //
        // title
        //
        _this.createStyle('title', 'ready', 'base', {
            style: {
                fontWeight: 700,
                color: '#333',
                marginBottom: '10px',
            }
        });
        _this.createStyle('title', 'ready', 'success', _this.merge(_this.getStyle('title', 'ready', 'base'), {
            style: {}
        }));
        _this.createStyle('title', 'ready', 'info', _this.merge(_this.getStyle('title', 'ready', 'base'), {
            style: {}
        }));
        _this.createStyle('title', 'ready', 'warn', _this.merge(_this.getStyle('title', 'ready', 'base'), {
            style: {}
        }));
        _this.createStyle('title', 'ready', 'error', _this.merge(_this.getStyle('title', 'ready', 'base'), {
            style: {}
        }));
        //
        // message
        //
        _this.createStyle('message', 'ready', 'base', {
            style: {
                fontWeight: 400,
                color: '#333',
                marginBottom: '10px',
            }
        });
        _this.createStyle('message', 'ready', 'success', _this.merge(_this.getStyle('message', 'ready', 'base'), {
            style: {}
        }));
        _this.createStyle('message', 'ready', 'info', _this.merge(_this.getStyle('message', 'ready', 'base'), {
            style: {}
        }));
        _this.createStyle('message', 'ready', 'warn', _this.merge(_this.getStyle('message', 'ready', 'base'), {
            style: {}
        }));
        _this.createStyle('message', 'ready', 'error', _this.merge(_this.getStyle('message', 'ready', 'base'), {
            style: {}
        }));
        //
        // linkOne
        //
        _this.createStyle('linkOne', 'ready', 'base', {
            style: {
                outline: 0,
                border: 0,
                backgroundColor: 'transparent',
                color: '#333',
                textDecoration: 'none',
                padding: 0,
                fontSize: '1rem',
                marginRight: '20px',
                cursor: 'pointer',
            }
        });
        _this.createStyle('linkOne', 'ready', 'success', _this.merge(_this.getStyle('linkOne', 'ready', 'base'), {
            style: {
                color: '#52C416',
            }
        }));
        _this.createStyle('linkOne', 'ready', 'successHover', _this.merge(_this.getStyle('linkOne', 'ready', 'success'), {
            style: {
                textDecoration: 'underline',
            }
        }));
        _this.createStyle('linkOne', 'ready', 'info', _this.merge(_this.getStyle('linkOne', 'ready', 'base'), {
            style: {
                color: '#005FFF',
            }
        }));
        _this.createStyle('linkOne', 'ready', 'infoHover', _this.merge(_this.getStyle('linkOne', 'ready', 'info'), {
            style: {
                textDecoration: 'underline',
            }
        }));
        _this.createStyle('linkOne', 'ready', 'warn', _this.merge(_this.getStyle('linkOne', 'ready', 'base'), {
            style: {
                color: '#E77B12',
            }
        }));
        _this.createStyle('linkOne', 'ready', 'warnHover', _this.merge(_this.getStyle('linkOne', 'ready', 'warn'), {
            style: {
                textDecoration: 'underline',
            }
        }));
        _this.createStyle('linkOne', 'ready', 'error', _this.merge(_this.getStyle('linkOne', 'ready', 'base'), {
            style: {
                color: '#C41616',
            }
        }));
        _this.createStyle('linkOne', 'ready', 'errorHover', _this.merge(_this.getStyle('linkOne', 'ready', 'error'), {
            style: {
                textDecoration: 'underline',
            }
        }));
        //
        // linkTwo
        //
        _this.createStyle('linkTwo', 'ready', 'base', {
            style: {
                outline: 0,
                border: 0,
                backgroundColor: 'transparent',
                color: '#333',
                textDecoration: 'none',
                padding: 0,
                fontSize: '1rem',
                marginRight: '20px',
                cursor: 'pointer',
            }
        });
        _this.createStyle('linkTwo', 'ready', 'success', _this.merge(_this.getStyle('linkTwo', 'ready', 'base'), {
            style: {
                color: '#52C416',
            }
        }));
        _this.createStyle('linkTwo', 'ready', 'successHover', _this.merge(_this.getStyle('linkTwo', 'ready', 'success'), {
            style: {
                textDecoration: 'underline',
            }
        }));
        _this.createStyle('linkTwo', 'ready', 'info', _this.merge(_this.getStyle('linkTwo', 'ready', 'base'), {
            style: {
                color: '#005FFF',
            }
        }));
        _this.createStyle('linkTwo', 'ready', 'infoHover', _this.merge(_this.getStyle('linkTwo', 'ready', 'info'), {
            style: {
                textDecoration: 'underline',
            }
        }));
        _this.createStyle('linkTwo', 'ready', 'warn', _this.merge(_this.getStyle('linkTwo', 'ready', 'base'), {
            style: {
                color: '#E77B12',
            }
        }));
        _this.createStyle('linkTwo', 'ready', 'warnHover', _this.merge(_this.getStyle('linkTwo', 'ready', 'warn'), {
            style: {
                textDecoration: 'underline',
            }
        }));
        _this.createStyle('linkTwo', 'ready', 'error', _this.merge(_this.getStyle('linkTwo', 'ready', 'base'), {
            style: {
                color: '#C41616',
            }
        }));
        _this.createStyle('linkTwo', 'ready', 'errorHover', _this.merge(_this.getStyle('linkTwo', 'ready', 'error'), {
            style: {
                textDecoration: 'underline',
            }
        }));
        return _this;
    }
    return CloukitNotificationComponentThemeDefault;
}(__WEBPACK_IMPORTED_MODULE_0__cloukit_theme__["a" /* CloukitComponentTheme */]));



/***/ }),

/***/ "../../../../../src/components/services/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitNotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cloukit_dropout__ = __webpack_require__("../../../../@cloukit/dropout/dropout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */




var CloukitNotificationService = (function () {
    function CloukitNotificationService(dropoutService) {
        this.dropoutService = dropoutService;
        this.notifications = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
    }
    CloukitNotificationService.prototype.setOutletTemplate = function (t, placement) {
        this.notificationOutlet = t;
        var self = this;
        var dummyTriggerElement = document.createElement('div');
        var request = new __WEBPACK_IMPORTED_MODULE_1__cloukit_dropout__["c" /* DropoutComponentCreationRequest */]();
        request.triggerElement = dummyTriggerElement;
        request.template = self.notificationOutlet;
        // FIXME: use placement
        request.placement = __WEBPACK_IMPORTED_MODULE_1__cloukit_dropout__["d" /* DropoutPlacement */].FIX_BOTTOM_LEFT;
        request.zIndex = 300;
        self.dropoutService.requestDropoutCreation(request);
    };
    CloukitNotificationService.prototype.addNotification = function (notification) {
        var _this = this;
        this.notifications.take(1).subscribe(function (notifications) {
            _this.notifications
                .next([notification].concat(notifications));
        });
    };
    CloukitNotificationService.prototype.getNotifications = function () {
        return this.notifications.asObservable();
    };
    CloukitNotificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__cloukit_dropout__["b" /* CloukitDropoutService */]])
    ], CloukitNotificationService);
    return CloukitNotificationService;
}());



/***/ }),

/***/ "../../../../../src/demo/demo.component.html":
/***/ (function(module, exports) {

module.exports = "<cloukit-dropout-outlet></cloukit-dropout-outlet>\n<!-- with default theme -->\n<cloukit-notification-outlet-loader\n  theme=\"notification\"\n  placement=\"bottomLeft\"\n  offsetX=\"80\"\n  offsetY=\"0\"\n></cloukit-notification-outlet-loader>\n<div style=\"padding:10px;\">\n\n  <cloukit-story title=\"Simple Notifications\" story=\"story-00-simple-notifications\">\n    <story-00-simple-notifications></story-00-simple-notifications>\n  </cloukit-story>\n\n  <br><br>\n\n  <cloukit-story title=\"Timed Notifications\" story=\"story-01-timed-notifications\">\n    <story-01-timed-notifications></story-01-timed-notifications>\n  </cloukit-story>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/demo/demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DemoComponent = (function () {
    function DemoComponent() {
    }
    DemoComponent.sharedStyles = [
        '.tooltipTrigger { color:#710ECC; cursor: help; }',
        '.label { display:inline-block; width:250px; }',
        '.superButton, .superButtonSecondary { border:2px solid #710ECC; outline:0; background-color:#710ECC; color:#fff; border-radius:0px; padding:4px 8px 4px 8px; color:#fff; cursor:pointer; font-size:1rem; }',
        '.superButton:hover, .superButtonSecondary:hover { border:2px solid #710ECC; background-color:#fff; color:#710ECC;  }',
        '.superButtonSecondary { border-color: rgb(164, 227, 254); background-color:rgb(164, 227, 254); }',
        '.superButtonSecondary:hover { border-color:rgb(164, 227, 254); background-color:#fff; color:rgb(164, 227, 254);  }',
        '.superButton:disabled, .superButtonSecondary:disabled { border-color:#777; background-color:#777; color:#fff; cursor:not-allowed;  }',
        '.row { display: flex }',
        '.col { flex: 1 }',
        ".eventLog { display:flex; flex-direction: column; padding: 10px; \n                 margin:10px 20px 10px 0; overflow-y: scroll;\n                 height:100px; background-color: #efefef; }",
        '.eventLogEntry { padding: 5px; }',
        '.eventLogEntry-1 { border-left:8px solid #FE8A29; color: #FE8A29; }',
        '.eventLogEntry-2 { border-left:8px solid #FE2929; color: #FE2929;}',
        '.eventLogEntry-3 { border-left:8px solid #21CC21; color: #21CC21;}',
        '.eventLogEntry-4 { border-left:8px solid #189999; color: #189999;}',
        '.eventLogEntry-5 { border-left:8px solid #CC2182; color: #CC2182;}',
    ];
    DemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'demo',
            template: __webpack_require__("../../../../../src/demo/demo.component.html"),
            styles: [],
        })
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "../../../../../src/demo/demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cloukit_dropout__ = __webpack_require__("../../../../@cloukit/dropout/dropout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cloukit_theme__ = __webpack_require__("../../../../@cloukit/theme/theme.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__("../../../../../src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__demo_component__ = __webpack_require__("../../../../../src/demo/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_demoStoriesSource_json__ = __webpack_require__("../../../../../src/assets/demoStoriesSource.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_demoStoriesSource_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__assets_demoStoriesSource_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cloukit_story__ = __webpack_require__("../../../../@cloukit/story/story.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stories_story_00_simple_notifications__ = __webpack_require__("../../../../../src/demo/stories/story-00-simple-notifications.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__stories_story_01_timed_notifications__ = __webpack_require__("../../../../../src/demo/stories/story-01-timed-notifications.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DemoModule = (function () {
    function DemoModule(cloukitStoryService) {
        this.cloukitStoryService = cloukitStoryService;
        //
        // REGISTER STORY SOURCES
        //
        var keys = Object.keys(__WEBPACK_IMPORTED_MODULE_6__assets_demoStoriesSource_json___default.a);
        for (var i = 0; i < keys.length; i++) {
            this.cloukitStoryService.addSource(keys[i], __WEBPACK_IMPORTED_MODULE_6__assets_demoStoriesSource_json___default.a[keys[i]]);
        }
    }
    DemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__demo_component__["a" /* DemoComponent */],
                __WEBPACK_IMPORTED_MODULE_8__stories_story_00_simple_notifications__["a" /* Story00Component */],
                __WEBPACK_IMPORTED_MODULE_9__stories_story_01_timed_notifications__["a" /* Story01Component */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__demo_component__["a" /* DemoComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__cloukit_theme__["b" /* CloukitThemeModule */],
                __WEBPACK_IMPORTED_MODULE_4__index__["d" /* CloukitNotificationModule */],
                __WEBPACK_IMPORTED_MODULE_2__cloukit_dropout__["a" /* CloukitDropoutModule */],
                __WEBPACK_IMPORTED_MODULE_7__cloukit_story__["a" /* CloukitStoryModule */],
            ],
            providers: [],
            bootstrap: [],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__cloukit_story__["b" /* CloukitStoryService */]])
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

/***/ "../../../../../src/demo/stories/story-00-simple-notifications.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col\">\n    <button\n      type=\"button\"\n      class=\"superButton\"\n      (click)=\"openSuccess()\"\n      [disabled]=\"success && !success?.actions.closed\"\n    >add success</button>\n    <button\n      type=\"button\"\n      class=\"superButtonSecondary\"\n      (click)=\"closeSuccess()\"\n      [disabled]=\"!success || success?.actions.closed\"\n    >close success</button>\n    <div class=\"eventLog\">\n      <div\n        class=\"eventLogEntry eventLogEntry-{{entry}}\"\n        *ngFor=\"let entry of successEventLog\"\n        >{{translateEventLog(entry)}}</div>\n    </div>\n  </div>\n  <div class=\"col\">\n    <button\n      type=\"button\"\n      class=\"superButton\"\n      (click)=\"openInfo()\"\n      [disabled]=\"info && !info?.actions.closed\"\n    >add info</button>\n    <button\n      type=\"button\"\n      class=\"superButtonSecondary\"\n      (click)=\"closeInfo()\"\n      [disabled]=\"!info || info?.actions.closed\"\n    >close info</button>\n    <div class=\"eventLog\">\n      <div\n        class=\"eventLogEntry eventLogEntry-{{entry}}\"\n        *ngFor=\"let entry of infoEventLog\"\n      >{{translateEventLog(entry)}}</div>\n    </div>\n  </div>\n  <div class=\"col\">\n    <button\n      type=\"button\"\n      class=\"superButton\"\n      (click)=\"openWarn()\"\n      [disabled]=\"warn && !warn?.actions.closed\"\n    >add warn</button>\n    <button\n      type=\"button\"\n      class=\"superButtonSecondary\"\n      (click)=\"closeWarn()\"\n      [disabled]=\"!warn || warn?.actions.closed\"\n    >close warn</button>\n    <div class=\"eventLog\">\n      <div\n        class=\"eventLogEntry eventLogEntry-{{entry}}\"\n        *ngFor=\"let entry of warnEventLog\"\n      >{{translateEventLog(entry)}}</div>\n    </div>\n  </div>\n  <div class=\"col\">\n    <button\n      type=\"button\"\n      class=\"superButton\"\n      (click)=\"openError()\"\n      [disabled]=\"error && !error?.actions.closed\"\n    >add error</button>\n    <button\n      type=\"button\"\n      class=\"superButtonSecondary\"\n      (click)=\"closeError()\"\n      [disabled]=\"!error || error?.actions.closed\"\n    >close error</button>\n    <div class=\"eventLog\">\n      <div\n        class=\"eventLogEntry eventLogEntry-{{entry}}\"\n        *ngFor=\"let entry of errorEventLog\"\n      >{{translateEventLog(entry)}}</div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/demo/stories/story-00-simple-notifications.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Story00Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_component__ = __webpack_require__("../../../../../src/demo/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("../../../../../src/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Story00Component = (function () {
    function Story00Component(notificationService) {
        this.notificationService = notificationService;
        this.successEventLog = [];
        this.warnEventLog = [];
        this.errorEventLog = [];
        this.infoEventLog = [];
    }
    Story00Component.prototype.openSuccess = function () {
        var self = this;
        self.success = new __WEBPACK_IMPORTED_MODULE_2__index__["a" /* CloukitNotification */]('Success', 'You clicked a button!', __WEBPACK_IMPORTED_MODULE_2__index__["f" /* CloukitNotificationType */].SUCCESS, new __WEBPACK_IMPORTED_MODULE_2__index__["c" /* CloukitNotificationLink */]('Ok'), new __WEBPACK_IMPORTED_MODULE_2__index__["c" /* CloukitNotificationLink */]('who cares'));
        self.success.getActions().subscribe(function (action) {
            self.successEventLog = [action].concat(self.successEventLog);
            if (__WEBPACK_IMPORTED_MODULE_2__index__["a" /* CloukitNotification */].isCloseAction(action)) {
                self.success = null;
            }
        });
        self.notificationService.addNotification(this.success);
    };
    Story00Component.prototype.closeSuccess = function () {
        this.success.forceClose();
    };
    Story00Component.prototype.openInfo = function () {
        var self = this;
        self.info = new __WEBPACK_IMPORTED_MODULE_2__index__["a" /* CloukitNotification */]('Info', 'Sport is healthy.', __WEBPACK_IMPORTED_MODULE_2__index__["f" /* CloukitNotificationType */].INFO, new __WEBPACK_IMPORTED_MODULE_2__index__["c" /* CloukitNotificationLink */]('ok'), new __WEBPACK_IMPORTED_MODULE_2__index__["c" /* CloukitNotificationLink */]('naaaah'));
        self.info.getActions().subscribe(function (action) {
            self.infoEventLog = [action].concat(self.infoEventLog);
            if (__WEBPACK_IMPORTED_MODULE_2__index__["a" /* CloukitNotification */].isCloseAction(action)) {
                self.info = null;
            }
        });
        self.notificationService.addNotification(this.info);
    };
    Story00Component.prototype.closeInfo = function () {
        this.info.forceClose();
    };
    Story00Component.prototype.openWarn = function () {
        var self = this;
        self.warn = new __WEBPACK_IMPORTED_MODULE_2__index__["a" /* CloukitNotification */]('Atención', 'Los pantalones estan pequeños!', __WEBPACK_IMPORTED_MODULE_2__index__["f" /* CloukitNotificationType */].WARN, new __WEBPACK_IMPORTED_MODULE_2__index__["c" /* CloukitNotificationLink */]('confirmar'), new __WEBPACK_IMPORTED_MODULE_2__index__["c" /* CloukitNotificationLink */]('cancelar'));
        self.warn.getActions().subscribe(function (action) {
            self.warnEventLog = [action].concat(self.warnEventLog);
            if (__WEBPACK_IMPORTED_MODULE_2__index__["a" /* CloukitNotification */].isCloseAction(action)) {
                self.warn = null;
            }
        });
        self.notificationService.addNotification(this.warn);
    };
    Story00Component.prototype.closeWarn = function () {
        this.warn.forceClose();
    };
    Story00Component.prototype.openError = function () {
        var self = this;
        self.error = new __WEBPACK_IMPORTED_MODULE_2__index__["a" /* CloukitNotification */]('Warn', 'Too much sugar is unhealthy!', __WEBPACK_IMPORTED_MODULE_2__index__["f" /* CloukitNotificationType */].ERROR, new __WEBPACK_IMPORTED_MODULE_2__index__["c" /* CloukitNotificationLink */]('ok'), new __WEBPACK_IMPORTED_MODULE_2__index__["c" /* CloukitNotificationLink */]('nbd'));
        self.error.getActions().subscribe(function (action) {
            self.errorEventLog = [action].concat(self.errorEventLog);
            if (__WEBPACK_IMPORTED_MODULE_2__index__["a" /* CloukitNotification */].isCloseAction(action)) {
                self.error = null;
            }
        });
        self.notificationService.addNotification(this.error);
    };
    Story00Component.prototype.closeError = function () {
        this.error.forceClose();
    };
    Story00Component.prototype.translateEventLog = function (type) {
        if (type === __WEBPACK_IMPORTED_MODULE_2__index__["b" /* CloukitNotificationAction */].CLOSE_ICON_CLICKED)
            return 'close icon clicked';
        if (type === __WEBPACK_IMPORTED_MODULE_2__index__["b" /* CloukitNotificationAction */].LINK_TWO_CLICKED)
            return 'link two clicked';
        if (type === __WEBPACK_IMPORTED_MODULE_2__index__["b" /* CloukitNotificationAction */].LINK_ONE_CLICKED)
            return 'link one clicked';
        if (type === __WEBPACK_IMPORTED_MODULE_2__index__["b" /* CloukitNotificationAction */].CLOSE_BY_FORCE)
            return 'close by force';
        if (type === __WEBPACK_IMPORTED_MODULE_2__index__["b" /* CloukitNotificationAction */].CLOSE_BY_TIME)
            return 'close by time';
    };
    Story00Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'story-00-simple-notifications',
            template: __webpack_require__("../../../../../src/demo/stories/story-00-simple-notifications.html"),
            styles: [].concat(__WEBPACK_IMPORTED_MODULE_1__demo_component__["a" /* DemoComponent */].sharedStyles),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__index__["e" /* CloukitNotificationService */]])
    ], Story00Component);
    return Story00Component;
}());



/***/ }),

/***/ "../../../../../src/demo/stories/story-01-timed-notifications.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col\">\n    <button\n      type=\"button\"\n      class=\"superButton\"\n      (click)=\"openSuccess()\"\n    >add success that will auto close after 2 sec</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/demo/stories/story-01-timed-notifications.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Story01Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_component__ = __webpack_require__("../../../../../src/demo/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("../../../../../src/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Story01Component = (function () {
    function Story01Component(notificationService) {
        this.notificationService = notificationService;
    }
    Story01Component.prototype.openSuccess = function () {
        var self = this;
        var notification = new __WEBPACK_IMPORTED_MODULE_2__index__["a" /* CloukitNotification */]('Success', 'You clicked a button!', __WEBPACK_IMPORTED_MODULE_2__index__["f" /* CloukitNotificationType */].SUCCESS, null, null, 2000);
        self.notificationService.addNotification(notification);
    };
    Story01Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'story-01-timed-notifications',
            template: __webpack_require__("../../../../../src/demo/stories/story-01-timed-notifications.html"),
            styles: [].concat(__WEBPACK_IMPORTED_MODULE_1__demo_component__["a" /* DemoComponent */].sharedStyles),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__index__["e" /* CloukitNotificationService */]])
    ], Story01Component);
    return Story01Component;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_notification_module__ = __webpack_require__("../../../../../src/components/notification.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__components_notification_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_notification_model__ = __webpack_require__("../../../../../src/components/notification.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__components_notification_model__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__components_notification_model__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__components_notification_model__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__components_notification_model__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_services_notification_service__ = __webpack_require__("../../../../../src/components/services/notification.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__components_services_notification_service__["a"]; });





/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map