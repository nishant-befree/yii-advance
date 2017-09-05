webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<smsf-main></smsf-main>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_splash_screen_service__ = __webpack_require__("../../../../../src/app/core/services/splash-screen.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(SMSFSplashScreen) {
        this.SMSFSplashScreen = SMSFSplashScreen;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'smsf-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_services_splash_screen_service__["a" /* SMSFSplashScreenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_services_splash_screen_service__["a" /* SMSFSplashScreenService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_modules_shared_module__ = __webpack_require__("../../../../../src/app/core/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_perfect_scrollbar__ = __webpack_require__("../../../../ngx-perfect-scrollbar/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_perfect_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ngx_perfect_scrollbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__main_main_module__ = __webpack_require__("../../../../../src/app/main/main.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__main_content_pages_pages_module__ = __webpack_require__("../../../../../src/app/main/content/pages/pages.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__main_content_bucket_bucket_module__ = __webpack_require__("../../../../../src/app/main/content/bucket/bucket.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__core_services_config_service__ = __webpack_require__("../../../../../src/app/core/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__core_services_splash_screen_service__ = __webpack_require__("../../../../../src/app/core/services/splash-screen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__core_services_auth_guard__ = __webpack_require__("../../../../../src/app/core/services/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__core_services_global_service__ = __webpack_require__("../../../../../src/app/core/services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__core_services_user_service__ = __webpack_require__("../../../../../src/app/core/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__main_content_practice_components_third_party_module__ = __webpack_require__("../../../../../src/app/main/content/practice/components-third-party.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__main_content_sample_sample_module__ = __webpack_require__("../../../../../src/app/main/content/sample/sample.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var appRoutes = [
    /* {
         path      : '**',
         redirectTo: 'sample'
     },*/
    {
        path: 'login',
        redirectTo: '/pages/auth/login'
    },
    {
        path: 'dashboard',
        redirectTo: 'apps/dashboards/project'
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["e" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_9__core_modules_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_13__main_content_pages_pages_module__["a" /* PagesModule */],
            __WEBPACK_IMPORTED_MODULE_14__main_content_bucket_bucket_module__["a" /* BucketModule */],
            __WEBPACK_IMPORTED_MODULE_11_ngx_perfect_scrollbar__["PerfectScrollbarModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12__main_main_module__["a" /* SMSFMainModule */],
            __WEBPACK_IMPORTED_MODULE_21__main_content_sample_sample_module__["a" /* SMSFSampleModule */],
            __WEBPACK_IMPORTED_MODULE_20__main_content_practice_components_third_party_module__["a" /* ComponentsThirdPartyModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__core_services_splash_screen_service__["a" /* SMSFSplashScreenService */],
            __WEBPACK_IMPORTED_MODULE_15__core_services_config_service__["a" /* SMSFConfigService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_7__angular_common__["LocationStrategy"],
                useClass: __WEBPACK_IMPORTED_MODULE_7__angular_common__["HashLocationStrategy"]
            },
            __WEBPACK_IMPORTED_MODULE_17__core_services_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_19__core_services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_18__core_services_global_service__["a" /* GlobalService */],
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animations; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");

// const query = (s, a, o = {optional: true}) => q(s, a, o);
var Animations = (function () {
    function Animations() {
    }
    return Animations;
}());

Animations.slideInOut = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])('slideInOut', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* state */])('0', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
        height: '0px',
        display: 'none'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* state */])('1', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
        height: '*',
        display: 'block'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('1 => 0', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-out')),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('0 => 1', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-in'))
]);
Animations.slideInLeft = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])('slideInLeft', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
        transform: 'translateX(-100%)',
        display: 'none'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
        transform: 'translateX(0)',
        display: 'flex'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('void => *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms')),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('* => void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms'))
]);
Animations.slideInRight = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])('slideInRight', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
        transform: 'translateX(100%)',
        display: 'none'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
        transform: 'translateX(0)',
        display: 'flex'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('void => *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms')),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('* => void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms'))
]);
Animations.slideInTop = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])('slideInTop', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
        transform: 'translateY(-100%)',
        display: 'none'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
        transform: 'translateY(0)',
        display: 'flex'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('void => *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms')),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('* => void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms'))
]);
Animations.slideInBottom = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])('slideInBottom', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
        transform: 'translateY(100%)',
        display: 'none'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
        transform: 'translateY(0)',
        display: 'flex'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('void => *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms')),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('* => void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms'))
]);
Animations.routerTransitionLeft = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])('routerTransitionLeft', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('* => *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])('smsf-content > :enter, smsf-content > :leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            })
        ], { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])('smsf-content > :enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                transform: 'translateX(100%)',
                opacity: 0
            })
        ], { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* sequence */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* group */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])('smsf-content > :leave', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                        transform: 'translateX(0)',
                        opacity: 1
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('400ms cubic-bezier(0.250, 0.460, 0.450, 0.940)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                        transform: 'translateX(-100%)',
                        opacity: 0
                    }))
                ], { optional: true }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])('smsf-content > :enter', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'translateX(100%)' }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('400ms cubic-bezier(0.250, 0.460, 0.450, 0.940)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                        transform: 'translateX(0%)',
                        opacity: 1
                    }))
                ], { optional: true })
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])('smsf-content > :leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])('smsf-content > :enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true })
        ])
    ])
]);
Animations.routerTransitionRight = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])('routerTransitionRight', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('* => *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])('smsf-content > :enter, smsf-content > :leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            })
        ], { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])('smsf-content > :enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                transform: 'translateX(-100%)',
                opacity: 0
            })
        ], { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* sequence */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* group */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])('smsf-content > :leave', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                        transform: 'translateX(0)',
                        opacity: 1
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('400ms cubic-bezier(0.250, 0.460, 0.450, 0.940)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                        transform: 'translateX(100%)',
                        opacity: 0
                    }))
                ], { optional: true }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])('smsf-content > :enter', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'translateX(-100%)' }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('400ms cubic-bezier(0.250, 0.460, 0.450, 0.940)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                        transform: 'translateX(0%)',
                        opacity: 1
                    }))
                ], { optional: true })
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])('smsf-content > :leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])('smsf-content > :enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true })
        ])
    ])
]);
Animations.routerTransitionUp = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])('routerTransitionUp', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('* => *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])('smsf-content > :enter, smsf-content > :leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            })
        ], { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])('smsf-content > :enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                transform: 'translateY(100%)',
                opacity: 0
            })
        ], { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* sequence */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* group */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])('smsf-content > :leave', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                        transform: 'translateY(0)',
                        opacity: 1
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('400ms cubic-bezier(0.250, 0.460, 0.450, 0.940)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                        transform: 'translateY(-100%)',
                        opacity: 0
                    }))
                ], { optional: true }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])('smsf-content > :enter', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'translateY(100%)' }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('400ms cubic-bezier(0.250, 0.460, 0.450, 0.940)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                        transform: 'translateY(0%)',
                        opacity: 1
                    }))
                ], { optional: true })
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])('smsf-content > :leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])('smsf-content > :enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true })
        ])
    ])
]);
Animations.routerTransitionDown = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])('routerTransitionDown', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('* => *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])('smsf-content > :enter, smsf-content > :leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            })
        ], { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])('smsf-content > :enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                transform: 'translateY(-100%)',
                opacity: 0
            })
        ], { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* sequence */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* group */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])('smsf-content > :leave', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                        transform: 'translateY(0)',
                        opacity: 1
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('400ms cubic-bezier(0.250, 0.460, 0.450, 0.940)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                        transform: 'translateY(100%)',
                        opacity: 0
                    }))
                ], { optional: true }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])('smsf-content > :enter', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'translateY(-100%)' }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('400ms cubic-bezier(0.250, 0.460, 0.450, 0.940)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                        transform: 'translateY(0%)',
                        opacity: 1
                    }))
                ], { optional: true })
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])('smsf-content > :leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])('smsf-content > :enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true })
        ])
    ])
]);
Animations.routerTransitionFade = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])('routerTransitionFade', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('* => *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])('smsf-content > :enter, smsf-content > :leave ', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            })
        ], { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])('smsf-content > :enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                opacity: 0
            })
        ], { optional: true }),
        // sequence([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])('smsf-content > :leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                opacity: 1
            }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms cubic-bezier(0.250, 0.460, 0.450, 0.940)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                opacity: 0
            }))
        ], { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])('smsf-content > :enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                opacity: 0
            }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms cubic-bezier(0.250, 0.460, 0.450, 0.940)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                opacity: 1
            }))
        ], { optional: true }),
        // ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])('smsf-content > :enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])('smsf-content > :leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true })
    ])
]);
//# sourceMappingURL=animations.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/confirm-dialog/confirm-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>Confirm</h1>\r\n<div md-dialog-content>{{confirmMessage}}</div>\r\n<div md-dialog-actions class=\"pt-24\">\r\n    <button md-raised-button class=\"mat-accent mr-16\" (click)=\"dialogRef.close(true)\">Confirm</button>\r\n    <button md-button (click)=\"dialogRef.close(false)\">Cancel</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/components/confirm-dialog/confirm-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/confirm-dialog/confirm-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFConfirmDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SMSFConfirmDialogComponent = (function () {
    function SMSFConfirmDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    SMSFConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    return SMSFConfirmDialogComponent;
}());
SMSFConfirmDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'smsf-confirm-dialog',
        template: __webpack_require__("../../../../../src/app/core/components/confirm-dialog/confirm-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/components/confirm-dialog/confirm-dialog.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialogRef */]) === "function" && _a || Object])
], SMSFConfirmDialogComponent);

var _a;
//# sourceMappingURL=confirm-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/countdown/countdown.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"smsf-countdown\">\r\n\r\n    <div class=\"time days\">\r\n        <div class=\"value\">\r\n            {{countdown.days}}\r\n        </div>\r\n        <div class=\"title\">\r\n            days\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"time hours\">\r\n        <div class=\"value\">\r\n            {{countdown.hours}}\r\n        </div>\r\n        <div class=\"title\">\r\n            hours\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"time minutes\">\r\n        <div class=\"value\">\r\n            {{countdown.minutes}}\r\n        </div>\r\n        <div class=\"title\">\r\n            minutes\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"time seconds\">\r\n        <div class=\"value\">\r\n            {{countdown.seconds}}\r\n        </div>\r\n        <div class=\"title\">\r\n            seconds\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/countdown/countdown.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  :host .smsf-countdown {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    text-align: center; }\n    :host .smsf-countdown .time {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      padding: 0 12px; }\n      :host .smsf-countdown .time .value {\n        font-size: 34px;\n        line-height: 34px;\n        padding-bottom: 8px; }\n      :host .smsf-countdown .time .title {\n        color: rgba(0, 0, 0, 0.54); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/countdown/countdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFCountdownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SMSFCountdownComponent = (function () {
    function SMSFCountdownComponent() {
        this.countdown = {
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        };
    }
    SMSFCountdownComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currDate = __WEBPACK_IMPORTED_MODULE_1_moment__();
        var eventDate = __WEBPACK_IMPORTED_MODULE_1_moment__(this.eventDate);
        var diff = eventDate.diff(currDate, 'seconds');
        var countDown = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"]
            .interval(1000)
            .map(function (value) {
            return diff = diff - 1;
        })
            .map(function (value) {
            var timeLeft = __WEBPACK_IMPORTED_MODULE_1_moment__["duration"](value, 'seconds');
            return {
                days: timeLeft.asDays().toFixed(0),
                hours: timeLeft.hours(),
                minutes: timeLeft.minutes(),
                seconds: timeLeft.seconds()
            };
        });
        countDown.subscribe(function (value) {
            _this.countdown = value;
        });
    };
    return SMSFCountdownComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('eventDate'),
    __metadata("design:type", Object)
], SMSFCountdownComponent.prototype, "eventDate", void 0);
SMSFCountdownComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'smsf-countdown',
        template: __webpack_require__("../../../../../src/app/core/components/countdown/countdown.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/components/countdown/countdown.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SMSFCountdownComponent);

//# sourceMappingURL=countdown.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/hljs/hljs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/hljs/hljs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFHljsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highlight_js__ = __webpack_require__("../../../../highlight.js/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highlight_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highlight_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SMSFHljsComponent = (function () {
    function SMSFHljsComponent(elementRef) {
        this.elementRef = elementRef;
        this.hljs = __WEBPACK_IMPORTED_MODULE_1_highlight_js__;
    }
    SMSFHljsComponent.prototype.ngOnInit = function () {
        var originalSource = this.source.nativeElement.value;
        if (!originalSource || !this.lang) {
            return;
        }
        // Split the source into lines
        var sourceLines = originalSource.split('\n');
        // Find the first non-whitespace char index in
        // the first line of the source code
        var indexOfFirstChar = sourceLines[0].search(/\S|$/);
        // Generate the trimmed source
        var source = '';
        // Iterate through all the lines and trim the
        // beginning white space depending on the index
        sourceLines.forEach(function (line, index) {
            source = source + line.substr(indexOfFirstChar, line.length);
            if (index !== sourceLines.length - 1) {
                source = source + '\n';
            }
        });
        this.elementRef.nativeElement.innerHTML =
            "<pre><code class=\"highlight\">" + this.hljs.highlight(this.lang, source).value + "</code></pre>";
    };
    return SMSFHljsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])('source'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], SMSFHljsComponent.prototype, "source", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('lang'),
    __metadata("design:type", String)
], SMSFHljsComponent.prototype, "lang", void 0);
SMSFHljsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'smsf-hljs',
        template: ' ',
        styles: [__webpack_require__("../../../../../src/app/core/components/hljs/hljs.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
], SMSFHljsComponent);

var _a, _b;
//# sourceMappingURL=hljs.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/material-color-picker/material-color-picker.component.html":
/***/ (function(module, exports) {

module.exports = "<button md-icon-button\r\n        type=\"button\"\r\n        class=\"mat-elevation-z1\"\r\n        [mdMenuTriggerFor]=\"colorMenu\"\r\n        (onMenuOpen)=\"onMenuOpen()\"\r\n        [ngClass]=\"'md-'+selectedPalette+'-'+selectedHue+'-bg'\">\r\n    <md-icon>palette</md-icon>\r\n</button>\r\n\r\n<md-menu #colorMenu=\"mdMenu\" class=\"smsf-material-color-picker-menu\">\r\n\r\n    <header [ngClass]=\"selectedColor?.class || 'md-accent-bg'\"\r\n            class=\"mat-elevation-z4\"\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-between center\">\r\n\r\n        <button md-icon-button\r\n                [style.visibility]=\"view==='hues'?'visible':'hidden'\"\r\n                (click)=\"$event.stopPropagation();backToPaletteSelection()\" aria-label=\"Palette\">\r\n            <md-icon class=\"s-20\">arrow_back</md-icon>\r\n        </button>\r\n\r\n        <span *ngIf=\"selectedColor?.palette\">\r\n            {{selectedColor.palette}} {{selectedColor.hue}}\r\n        </span>\r\n\r\n        <span *ngIf=\"!selectedColor?.palette\">\r\n            Select Color\r\n        </span>\r\n\r\n        <button md-icon-button\r\n                class=\"remove-color-button\"\r\n                (click)=\"removeColor()\"\r\n                aria-label=\"Remove Color\">\r\n            <md-icon class=\"s-20\">delete</md-icon>\r\n        </button>\r\n    </header>\r\n\r\n\r\n    <div [ngSwitch]=\"view\" class=\"views\">\r\n\r\n        <div class=\"view\"\r\n             *ngSwitchCase=\"'palettes'\"\r\n             [@slideInLeft]>\r\n\r\n            <div fxLayout=\"row\" fxLayoutWrap\r\n                 fxLayoutAlign=\"start start\"\r\n                 class=\"colors\" perfect-scrollbar>\r\n                <div class=\"color\"\r\n                     [ngClass]=\"'md-'+color.key+'-bg'\"\r\n                     *ngFor=\"let color of (colors | keys)\"\r\n                     (click)=\"$event.stopPropagation();selectPalette(color.key)\"\r\n                     fxLayout=\"row\" fxLayoutAlign=\"start end\" md-ink-ripple>\r\n                    <span class=\"label\">\r\n                        {{color.key}}\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"view\"\r\n             *ngSwitchCase=\"'hues'\"\r\n             [@slideInRight]>\r\n            <div fxLayout=\"row\" fxLayoutWrap\r\n                 fxLayoutAlign=\"start start\"\r\n                 class=\"colors\" perfect-scrollbar>\r\n                <div class=\"color\"\r\n                     *ngFor=\"let hue of hues\"\r\n                     [fxHide]=\"selectedPalette === 'white' && hue !== '500'|| selectedPalette === 'black' && hue !== '500'\"\r\n                     [ngClass]=\"'md-'+selectedPalette+'-'+hue+'-bg'\"\r\n                     (click)=\"selectHue(hue)\"\r\n                     fxLayout=\"row\" fxLayoutAlign=\"start end\" md-ink-ripple>\r\n                    <span class=\"label\">\r\n                        {{hue}}\r\n                    </span>\r\n                    <md-icon *ngIf=\"selectedHue === hue\" class=\"s-16\">check</md-icon>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</md-menu>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/components/material-color-picker/material-color-picker.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".smsf-material-color-picker-menu {\n  width: 208px; }\n  .smsf-material-color-picker-menu .mat-menu-content {\n    padding: 0; }\n    .smsf-material-color-picker-menu .mat-menu-content .views {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      position: relative;\n      overflow: hidden;\n      min-height: 258px;\n      height: 308px;\n      background-color: #f7f7f7; }\n      .smsf-material-color-picker-menu .mat-menu-content .views .view {\n        position: absolute;\n        width: 208px;\n        height: 100%;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0; }\n        .smsf-material-color-picker-menu .mat-menu-content .views .view .colors {\n          position: relative;\n          padding: 4px; }\n          .smsf-material-color-picker-menu .mat-menu-content .views .view .colors .color {\n            position: relative;\n            width: 46px;\n            height: 46px;\n            margin: 2px;\n            border-radius: 0;\n            cursor: pointer; }\n            .smsf-material-color-picker-menu .mat-menu-content .views .view .colors .color .label {\n              padding: 2px;\n              font-size: 10px; }\n            .smsf-material-color-picker-menu .mat-menu-content .views .view .colors .color md-icon {\n              position: absolute;\n              top: 2px;\n              right: 2px;\n              font-size: 16px;\n              opacity: 0.7; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/material-color-picker/material-color-picker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFMaterialColorPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__matColors__ = __webpack_require__("../../../../../src/app/core/matColors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__("../../../../../src/app/core/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SMSFMaterialColorPickerComponent = (function () {
    function SMSFMaterialColorPickerComponent() {
        this.view = 'palettes';
        this.selectedPalette = '';
        this.selectedHue = '';
        this.selectedFg = '';
        this.onValueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectedPaletteChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectedHueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectedClassChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectedBgChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectedFgChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._selectedClass = '';
        this._selectedBg = '';
        this.colors = __WEBPACK_IMPORTED_MODULE_1__matColors__["a" /* MatColors */].all;
        this.hues = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', 'A100', 'A200', 'A400', 'A700'];
    }
    Object.defineProperty(SMSFMaterialColorPickerComponent.prototype, "selectedClass", {
        get: function () {
            return this._selectedClass;
        },
        set: function (value) {
            if (value && value !== '' && this._selectedClass !== value) {
                var color = value.split('-');
                if (color.length >= 5) {
                    this.selectedPalette = color[1] + '-' + color[2];
                    this.selectedHue = color[3];
                }
                else {
                    this.selectedPalette = color[1];
                    this.selectedHue = color[2];
                }
            }
            this._selectedClass = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SMSFMaterialColorPickerComponent.prototype, "selectedBg", {
        get: function () {
            return this._selectedBg;
        },
        set: function (value) {
            if (value && value !== '' && this._selectedBg !== value) {
                for (var palette in this.colors) {
                    if (!this.colors.hasOwnProperty(palette)) {
                        continue;
                    }
                    for (var _i = 0, _a = this.hues; _i < _a.length; _i++) {
                        var hue = _a[_i];
                        if (this.colors[palette][hue] === value) {
                            this.selectedPalette = palette;
                            this.selectedHue = hue;
                            break;
                        }
                    }
                }
            }
            this._selectedBg = value;
        },
        enumerable: true,
        configurable: true
    });
    SMSFMaterialColorPickerComponent.prototype.ngOnInit = function () {
    };
    SMSFMaterialColorPickerComponent.prototype.selectPalette = function (palette) {
        this.selectedPalette = palette;
        this.updateSelectedColor();
        this.view = 'hues';
    };
    SMSFMaterialColorPickerComponent.prototype.selectHue = function (hue) {
        this.selectedHue = hue;
        this.updateSelectedColor();
    };
    SMSFMaterialColorPickerComponent.prototype.removeColor = function () {
        this.selectedPalette = '';
        this.selectedHue = '';
        this.updateSelectedColor();
    };
    SMSFMaterialColorPickerComponent.prototype.updateSelectedColor = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.selectedColor && _this.selectedPalette === _this.selectedColor.palette && _this.selectedHue === _this.selectedColor.hue) {
                return;
            }
            if (_this.selectedPalette !== '' && _this.selectedHue !== '') {
                _this.selectedBg = __WEBPACK_IMPORTED_MODULE_1__matColors__["a" /* MatColors */].getColor(_this.selectedPalette)[_this.selectedHue];
                _this.selectedFg = __WEBPACK_IMPORTED_MODULE_1__matColors__["a" /* MatColors */].getColor(_this.selectedPalette).contrast[_this.selectedHue];
                _this.selectedClass = 'md-' + _this.selectedPalette + '-' + _this.selectedHue + '-bg';
            }
            else {
                _this.selectedBg = '';
                _this.selectedFg = '';
            }
            _this.selectedColor = {
                palette: _this.selectedPalette,
                hue: _this.selectedHue,
                class: _this.selectedClass,
                bg: _this.selectedBg,
                fg: _this.selectedFg
            };
            _this.selectedPaletteChange.emit(_this.selectedPalette);
            _this.selectedHueChange.emit(_this.selectedHue);
            _this.selectedClassChange.emit(_this.selectedClass);
            _this.selectedBgChange.emit(_this.selectedBg);
            _this.selectedFgChange.emit(_this.selectedFg);
            _this.value = _this.selectedColor;
            _this.onValueChange.emit(_this.selectedColor);
        });
    };
    SMSFMaterialColorPickerComponent.prototype.backToPaletteSelection = function () {
        this.view = 'palettes';
    };
    SMSFMaterialColorPickerComponent.prototype.onMenuOpen = function () {
        if (this.selectedPalette === '') {
            this.view = 'palettes';
        }
        else {
            this.view = 'hues';
        }
    };
    SMSFMaterialColorPickerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.selectedBg && changes.selectedBg.currentValue === '' ||
            changes.selectedClass && changes.selectedClass.currentValue === '' ||
            changes.selectedPalette && changes.selectedPalette.currentValue === '') {
            this.removeColor();
            return;
        }
        if (changes.selectedPalette || changes.selectedHue || changes.selectedClass || changes.selectedBg) {
            this.updateSelectedColor();
        }
    };
    return SMSFMaterialColorPickerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SMSFMaterialColorPickerComponent.prototype, "selectedPalette", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SMSFMaterialColorPickerComponent.prototype, "selectedHue", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SMSFMaterialColorPickerComponent.prototype, "selectedFg", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SMSFMaterialColorPickerComponent.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SMSFMaterialColorPickerComponent.prototype, "onValueChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SMSFMaterialColorPickerComponent.prototype, "selectedPaletteChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SMSFMaterialColorPickerComponent.prototype, "selectedHueChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SMSFMaterialColorPickerComponent.prototype, "selectedClassChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SMSFMaterialColorPickerComponent.prototype, "selectedBgChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SMSFMaterialColorPickerComponent.prototype, "selectedFgChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SMSFMaterialColorPickerComponent.prototype, "selectedClass", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SMSFMaterialColorPickerComponent.prototype, "selectedBg", null);
SMSFMaterialColorPickerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'smsf-material-color-picker',
        template: __webpack_require__("../../../../../src/app/core/components/material-color-picker/material-color-picker.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/components/material-color-picker/material-color-picker.component.scss")],
        animations: [__WEBPACK_IMPORTED_MODULE_2__animations__["a" /* Animations */].slideInLeft, __WEBPACK_IMPORTED_MODULE_2__animations__["a" /* Animations */].slideInRight],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], SMSFMaterialColorPickerComponent);

//# sourceMappingURL=material-color-picker.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/nav-collapse/nav-collapse.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"nav-link\" md-ripple (click)=\"toggleOpen($event)\">\r\n    <md-icon class=\"nav-link-icon\" *ngIf=\"item.icon\">{{item.icon}}</md-icon>\r\n    <span class=\"nav-link-title\">{{item.title}}</span>\r\n    <md-icon class=\"collapse-arrow\">keyboard_arrow_right</md-icon>\r\n</a>\r\n<div class=\"children\" [@slideInOut]=\"isOpen\">\r\n    <ng-container *ngFor=\"let item of item.children\">\r\n        <smsf-nav-item *ngIf=\"item.type=='nav-item'\" [item]=\"item\"></smsf-nav-item>\r\n        <smsf-nav-collapse *ngIf=\"item.type=='nav-collapse'\" [item]=\"item\"></smsf-nav-collapse>\r\n    </ng-container>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/nav-collapse/nav-collapse.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".folded:not(.folded-open) :host .nav-link > span {\n  opacity: 0;\n  transition: opacity 200ms ease; }\n\n:host .nav-link .collapse-arrow {\n  transition: opacity .25s ease-in-out .1s, -webkit-transform .3s ease-in-out;\n  transition: transform .3s ease-in-out, opacity .25s ease-in-out .1s;\n  transition: transform .3s ease-in-out, opacity .25s ease-in-out .1s, -webkit-transform .3s ease-in-out;\n  -webkit-transform: rotate(0);\n          transform: rotate(0); }\n\n:host > .children {\n  overflow: hidden; }\n\n:host.open > .nav-link .collapse-arrow {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/nav-collapse/nav-collapse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFNavCollapseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigation_service__ = __webpack_require__("../../../../../src/app/core/components/navigation/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations__ = __webpack_require__("../../../../../src/app/core/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SMSFNavCollapseComponent = (function () {
    function SMSFNavCollapseComponent(navigationService, router) {
        var _this = this;
        this.navigationService = navigationService;
        this.router = router;
        this.classes = 'nav-collapse nav-item';
        this.isOpen = false;
        /**
         * When navigation changed
         */
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]) {
                /**
                 * Check if the url is child of the collapse
                 */
                if (_this.isUrlInChildren(_this.item, event.urlAfterRedirects)) {
                    // console.log(this.item);
                    _this.expand();
                }
                else {
                    _this.collapse();
                }
            }
        });
        /**
         * Whenever a navigation collapse item toggled
         */
        this.navigationService.onNavCollapseToggled.subscribe(function (clickedItem) {
            if (clickedItem.children) {
                /**
                 * if clicked collapse is child of this collapse
                 * return
                 */
                if (_this.item.children.indexOf(clickedItem) !== -1) {
                    return;
                }
                /**
                 * If collapsed item is not related with this collapse
                 * collapse
                 */
                if (_this.item !== clickedItem) {
                    _this.collapse();
                }
            }
        });
    }
    /**
     * Toggle Collapse
     * @param ev
     */
    SMSFNavCollapseComponent.prototype.toggleOpen = function (ev) {
        ev.preventDefault();
        this.isOpen = !this.isOpen;
        this.navigationService.onNavCollapseToggled.emit(this.item);
    };
    /**
     * Expand
     */
    SMSFNavCollapseComponent.prototype.expand = function () {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
    };
    /**
     * Collapse
     */
    SMSFNavCollapseComponent.prototype.collapse = function () {
        if (!this.isOpen) {
            return;
        }
        this.isOpen = false;
    };
    /**
     * Checking the url is in children
     * @param arr
     * @param url
     * @returns {any}
     */
    SMSFNavCollapseComponent.prototype.isUrlInChildren = function (arr, url) {
        if (!arr.children) {
            return false;
        }
        for (var i = 0; i < arr.children.length; i++) {
            if (arr.children[i].children) {
                if (this.isUrlInChildren(arr.children[i], url)) {
                    return true;
                }
            }
            if (arr.children[i].url === url) {
                return true;
            }
        }
        return false;
    };
    SMSFNavCollapseComponent.prototype.isCollapsed = function () {
        return this.isOpen;
    };
    SMSFNavCollapseComponent.prototype.ngOnInit = function () {
    };
    return SMSFNavCollapseComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SMSFNavCollapseComponent.prototype, "item", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class'),
    __metadata("design:type", Object)
], SMSFNavCollapseComponent.prototype, "classes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.open'),
    __metadata("design:type", Object)
], SMSFNavCollapseComponent.prototype, "isOpen", void 0);
SMSFNavCollapseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'smsf-nav-collapse',
        template: __webpack_require__("../../../../../src/app/core/components/navigation/nav-collapse/nav-collapse.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/components/navigation/nav-collapse/nav-collapse.component.scss")],
        animations: [__WEBPACK_IMPORTED_MODULE_3__animations__["a" /* Animations */].slideInOut]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__navigation_service__["a" /* SMSFNavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__navigation_service__["a" /* SMSFNavigationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === "function" && _b || Object])
], SMSFNavCollapseComponent);

var _a, _b;
//# sourceMappingURL=nav-collapse.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/nav-item/nav-item.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"nav-link\" md-ripple\r\n   [routerLink]=\"[item.url]\" routerLinkActive=\"active\">\r\n    <md-icon class=\"nav-link-icon\" *ngIf=\"item.icon\">{{item.icon}}</md-icon>\r\n    <span class=\"nav-link-title\">{{item.title}}</span>\r\n    <span class=\"nav-link-badge\" *ngIf=\"item.badge\" [ngStyle]=\"{'background-color': item.badge.bg,'color': item.badge.fg}\">{{item.badge.title}}</span>\r\n</a>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/nav-item/nav-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".folded:not(.folded-open) :host .nav-link > .nav-link-title,\n.folded:not(.folded-open) :host .nav-link > .nav-link-badge {\n  opacity: 0;\n  transition: opacity 200ms ease; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/nav-item/nav-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFNavItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SMSFNavItemComponent = (function () {
    function SMSFNavItemComponent() {
        this.classes = 'nav-item';
    }
    SMSFNavItemComponent.prototype.ngOnInit = function () {
    };
    return SMSFNavItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class'),
    __metadata("design:type", Object)
], SMSFNavItemComponent.prototype, "classes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SMSFNavItemComponent.prototype, "item", void 0);
SMSFNavItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'smsf-nav-item',
        template: __webpack_require__("../../../../../src/app/core/components/navigation/nav-item/nav-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/components/navigation/nav-item/nav-item.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SMSFNavItemComponent);

//# sourceMappingURL=nav-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/nav-subheader/nav-subheader.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"hint-text\">{{ item.title }}</span>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/nav-subheader/nav-subheader.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".folded:not(.folded-open) :host:before {\n  content: '';\n  display: block;\n  position: absolute;\n  min-width: 1.6rem;\n  border-top: 2px solid;\n  opacity: 0.2; }\n\n.folded:not(.folded-open) :host > span {\n  opacity: 0;\n  transition: opacity 200ms ease; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/nav-subheader/nav-subheader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFNavSubheaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SMSFNavSubheaderComponent = (function () {
    function SMSFNavSubheaderComponent() {
        this.classes = 'nav-subheader';
    }
    SMSFNavSubheaderComponent.prototype.ngOnInit = function () {
    };
    return SMSFNavSubheaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class'),
    __metadata("design:type", Object)
], SMSFNavSubheaderComponent.prototype, "classes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SMSFNavSubheaderComponent.prototype, "item", void 0);
SMSFNavSubheaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'smsf-nav-subheader',
        template: __webpack_require__("../../../../../src/app/core/components/navigation/nav-subheader/nav-subheader.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/components/navigation/nav-subheader/nav-subheader.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SMSFNavSubheaderComponent);

//# sourceMappingURL=nav-subheader.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main-navigation\" class=\"nav\">\r\n    <ng-container *ngFor=\"let item of navigation\">\r\n\r\n        <smsf-nav-subheader *ngIf=\"item.type=='subheader'\" [item]=\"item\"></smsf-nav-subheader>\r\n\r\n        <smsf-nav-item *ngIf=\"item.type=='nav-item'\" [item]=\"item\"></smsf-nav-item>\r\n\r\n        <smsf-nav-collapse *ngIf=\"item.type=='nav-collapse'\" [item]=\"item\"></smsf-nav-collapse>\r\n\r\n    </ng-container>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Applies styles for users in high contrast mode. Note that this only applies\r\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\r\n * attribute, however Chrome handles high contrast differently.\r\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\r\n * This mixin adds the correct panel transform styles based\r\n * on the direction that the menu panel opens.\r\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\r\n * This mixin contains shared option styles between the select and\r\n * autocomplete components.\r\n */\n#main-navigation {\n  margin: 0;\n  padding: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFNavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigation_service__ = __webpack_require__("../../../../../src/app/core/components/navigation/navigation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SMSFNavigationComponent = (function () {
    function SMSFNavigationComponent(navigationService) {
        this.navigationService = navigationService;
        this.navigation = navigationService.getNavigation();
    }
    return SMSFNavigationComponent;
}());
SMSFNavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'smsf-navigation',
        template: __webpack_require__("../../../../../src/app/core/components/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/components/navigation/navigation.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__navigation_service__["a" /* SMSFNavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__navigation_service__["a" /* SMSFNavigationService */]) === "function" && _a || Object])
], SMSFNavigationComponent);

var _a;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/navigation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFNavigationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_shared_module__ = __webpack_require__("../../../../../src/app/core/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nav_subheader_nav_subheader_component__ = __webpack_require__("../../../../../src/app/core/components/navigation/nav-subheader/nav-subheader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_component__ = __webpack_require__("../../../../../src/app/core/components/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nav_item_nav_item_component__ = __webpack_require__("../../../../../src/app/core/components/navigation/nav-item/nav-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nav_collapse_nav_collapse_component__ = __webpack_require__("../../../../../src/app/core/components/navigation/nav-collapse/nav-collapse.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SMSFNavigationModule = (function () {
    function SMSFNavigationModule() {
    }
    return SMSFNavigationModule;
}());
SMSFNavigationModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__modules_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__navigation_component__["a" /* SMSFNavigationComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__navigation_component__["a" /* SMSFNavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_3__nav_subheader_nav_subheader_component__["a" /* SMSFNavSubheaderComponent */],
            __WEBPACK_IMPORTED_MODULE_5__nav_item_nav_item_component__["a" /* SMSFNavItemComponent */],
            __WEBPACK_IMPORTED_MODULE_6__nav_collapse_nav_collapse_component__["a" /* SMSFNavCollapseComponent */]
        ]
    })
], SMSFNavigationModule);

//# sourceMappingURL=navigation.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/navigation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFNavigationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigation_model__ = __webpack_require__("../../../../../src/app/navigation.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SMSFNavigationService = (function () {
    function SMSFNavigationService() {
        this.onNavCollapseToggled = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.flatNavigation = [];
        this.navigation = new __WEBPACK_IMPORTED_MODULE_1__navigation_model__["a" /* SMSFNavigation */]().items;
    }
    /**
     * Get navigation array
     * @returns {any[]}
     */
    SMSFNavigationService.prototype.getNavigation = function () {
        return this.navigation;
    };
    /**
     * Get flattened navigation array
     * @param navigationItems
     * @returns {any[]}
     */
    SMSFNavigationService.prototype.getFlatNavigation = function (navigationItems) {
        if (!navigationItems) {
            navigationItems = this.navigation;
        }
        for (var _i = 0, navigationItems_1 = navigationItems; _i < navigationItems_1.length; _i++) {
            var navItem = navigationItems_1[_i];
            if (navItem.type === 'subheader') {
                continue;
            }
            if (navItem.type === 'nav-item') {
                this.flatNavigation.push({
                    title: navItem.title,
                    type: navItem.type,
                    icon: navItem.icon || false,
                    url: navItem.url
                });
                continue;
            }
            if (navItem.type === 'nav-collapse') {
                this.getFlatNavigation(navItem.children);
            }
        }
        return this.flatNavigation;
    };
    return SMSFNavigationService;
}());
SMSFNavigationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SMSFNavigationService);

//# sourceMappingURL=navigation.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/search-bar/search-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"smsf-search-bar\" [ngClass]=\"{'expanded':!collapsed}\" fxFlex=\"0 1 auto\">\r\n    <div [ngClass]=\"toolbarColor\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex>\r\n        <label for=\"smsf-search-bar-input\">\r\n            <button md-icon-button class=\"smsf-search-bar-expander\" aria-label=\"Expand Search Bar\" (click)=\"expand()\"\r\n                    *ngIf=\"collapsed\">\r\n                <md-icon class=\"s-24\">search</md-icon>\r\n            </button>\r\n\r\n        </label>\r\n\r\n        <input id=\"smsf-search-bar-input\" class=\"ml-24\" type=\"text\" placeholder=\"Search\" (input)=\"search($event)\" fxFlex>\r\n\r\n        <button md-icon-button class=\"smsf-search-bar-collapser md-icon-button\" (click)=\"collapse()\"\r\n                aria-label=\"Collapse Search Bar\">\r\n            <md-icon class=\"s-24\">close</md-icon>\r\n        </button>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/search-bar/search-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Applies styles for users in high contrast mode. Note that this only applies\r\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\r\n * attribute, however Chrome handles high contrast differently.\r\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\r\n * This mixin adds the correct panel transform styles based\r\n * on the direction that the menu panel opens.\r\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\r\n * This mixin contains shared option styles between the select and\r\n * autocomplete components.\r\n */\n:host .smsf-search-bar {\n  min-width: 64px;\n  height: 64px;\n  font-size: 13px; }\n  @media (max-width: 599px) {\n    :host .smsf-search-bar {\n      height: 56px; } }\n  :host .smsf-search-bar .smsf-search-bar-expander,\n  :host .smsf-search-bar .smsf-search-bar-collapser {\n    cursor: pointer;\n    padding: 0 20px;\n    margin: 0;\n    width: 64px !important;\n    height: 64px !important;\n    line-height: 64px !important; }\n    @media (max-width: 599px) {\n      :host .smsf-search-bar .smsf-search-bar-expander,\n      :host .smsf-search-bar .smsf-search-bar-collapser {\n        height: 56px !important;\n        line-height: 56px !important; } }\n  :host .smsf-search-bar .smsf-search-bar-loader {\n    width: 64px !important;\n    height: 64px !important;\n    line-height: 64px !important; }\n    @media (max-width: 599px) {\n      :host .smsf-search-bar .smsf-search-bar-loader {\n        height: 56px !important;\n        line-height: 56px !important; } }\n  :host .smsf-search-bar .smsf-search-bar-collapser {\n    display: none; }\n  :host .smsf-search-bar #smsf-search-bar-input {\n    display: none;\n    min-height: 64px;\n    background-color: transparent;\n    font-size: 16px; }\n  :host .smsf-search-bar.expanded {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 10; }\n    :host .smsf-search-bar.expanded #smsf-search-bar-input {\n      display: block; }\n    :host .smsf-search-bar.expanded .smsf-search-bar-collapser {\n      display: block; }\n\n:host body.smsf-search-bar-expanded #toolbar {\n  z-index: 999 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/search-bar/search-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFSearchBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_config_service__ = __webpack_require__("../../../../../src/app/core/services/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SMSFSearchBarComponent = (function () {
    function SMSFSearchBarComponent(SMSFConfig) {
        var _this = this;
        this.SMSFConfig = SMSFConfig;
        this.onInput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.collapsed = true;
        this.onSettingsChanged =
            this.SMSFConfig.onSettingsChanged
                .subscribe(function (newSettings) {
                _this.toolbarColor = newSettings.colorClasses.toolbar;
            });
    }
    SMSFSearchBarComponent.prototype.ngOnInit = function () {
    };
    SMSFSearchBarComponent.prototype.collapse = function () {
        this.collapsed = true;
    };
    SMSFSearchBarComponent.prototype.expand = function () {
        this.collapsed = false;
    };
    SMSFSearchBarComponent.prototype.search = function (event) {
        var value = event.target.value;
        this.onInput.emit(value);
    };
    return SMSFSearchBarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], SMSFSearchBarComponent.prototype, "onInput", void 0);
SMSFSearchBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'smsf-search-bar',
        template: __webpack_require__("../../../../../src/app/core/components/search-bar/search-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/components/search-bar/search-bar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_config_service__["a" /* SMSFConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_config_service__["a" /* SMSFConfigService */]) === "function" && _b || Object])
], SMSFSearchBarComponent);

var _a, _b;
//# sourceMappingURL=search-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/search-bar/search-bar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFSearchBarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_shared_module__ = __webpack_require__("../../../../../src/app/core/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_bar_component__ = __webpack_require__("../../../../../src/app/core/components/search-bar/search-bar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SMSFSearchBarModule = (function () {
    function SMSFSearchBarModule() {
    }
    return SMSFSearchBarModule;
}());
SMSFSearchBarModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__search_bar_component__["a" /* SMSFSearchBarComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__modules_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__search_bar_component__["a" /* SMSFSearchBarComponent */]
        ]
    })
], SMSFSearchBarModule);

//# sourceMappingURL=search-bar.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/shortcuts/shortcuts.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"smsf-shortcuts\" #shortcuts>\r\n\r\n    <div class=\"shortcuts-mobile-toggle\" *ngIf=\"!mobileShortcutsPanelActive\" fxLayout=\"row\" fxLayoutAlign=\"start center\"\r\n         fxHide fxShow.lt-md>\r\n        <button md-icon-button (click)=\"showMobileShortcutsPanel()\">\r\n            <md-icon class=\"amber-600-fg\">star</md-icon>\r\n        </button>\r\n    </div>\r\n\r\n    <div class=\"shortcuts\" fxHide fxShow.gt-sm [ngClass]=\"toolbarColor\">\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxFlex=\"0 1 auto\">\r\n\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n                <div class=\"w-40 h-40 p-4\" fxLayout=\"row\" fxLayoutAlign=\"center center\"\r\n                     *ngFor=\"let shortcutItem of shortcutItems\">\r\n\r\n                    <a md-icon-button mdTooltip=\"{{shortcutItem.title}}\" [routerLink]=\"shortcutItem.url\">\r\n                        <md-icon *ngIf=\"shortcutItem.icon\">{{shortcutItem.icon}}</md-icon>\r\n                        <span *ngIf=\"!shortcutItem.icon\" class=\"h2 secondary-text text-bold\">\r\n                            {{shortcutItem.title.substr(0, 1).toUpperCase()}}\r\n                        </span>\r\n                    </a>\r\n\r\n                </div>\r\n\r\n                <button md-icon-button [mdMenuTriggerFor]=\"addMenu\" md-tooltip=\"Click to add/remove shortcut\"\r\n                        (onMenuOpen)=\"onMenuOpen()\">\r\n                    <md-icon class=\"amber-600-fg\">star</md-icon>\r\n                </button>\r\n\r\n            </div>\r\n\r\n            <div class=\"shortcuts-mobile-close\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxHide fxShow.lt-md>\r\n                <button md-icon-button (click)=\"hideMobileShortcutsPanel()\">\r\n                    <md-icon>close</md-icon>\r\n                </button>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <md-menu #addMenu=\"mdMenu\" class=\"w-240\">\r\n\r\n            <md-input-container class=\"px-16 w-100-p\" (click)=\"$event.stopPropagation()\" floatPlaceholder=\"never\">\r\n                <input #searchInput mdInput placeholder=\"Search for an app or a page\" (input)=\"search($event)\">\r\n            </md-input-container>\r\n\r\n            <md-divider></md-divider>\r\n            <md-nav-list *ngIf=\"!searching\" style=\"max-height: 312px; overflow: auto\" perfect-scrollbar>\r\n\r\n                <md-list-item *ngFor=\"let shortcutItem of shortcutItems\"\r\n                              (click)=\"toggleShortcut($event, shortcutItem)\">\r\n                    <div class=\"w-100-p\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <md-icon md-list-icon class=\"mr-8\" *ngIf=\"shortcutItem.icon\">{{shortcutItem.icon}}</md-icon>\r\n                        <span class=\"h2 w-32 h-32 p-4 mr-8 secondary-text text-bold\" fxLayout=\"row\"\r\n                              fxLayoutAlign=\"center center\" *ngIf=\"!shortcutItem.icon\">\r\n                            {{shortcutItem.title.substr(0, 1).toUpperCase()}}\r\n                        </span>\r\n                        <p md-line fxFlex>{{shortcutItem.title}}</p>\r\n                        <md-icon class=\"ml-8\">star</md-icon>\r\n                    </div>\r\n                </md-list-item>\r\n                <md-list-item *ngIf=\"shortcutItems.length === 0\">\r\n                    <p>\r\n                        <small>No shortcuts yet!</small>\r\n                    </p>\r\n                </md-list-item>\r\n            </md-nav-list>\r\n\r\n            <md-nav-list *ngIf=\"searching\" style=\"max-height: 312px; overflow: auto\" perfect-scrollbar>\r\n                <md-list-item *ngFor=\"let navigationItem of filteredNavigationItems\"\r\n                              (click)=\"toggleShortcut($event, navigationItem)\">\r\n                    <div class=\"w-100-p\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <md-icon md-list-icon class=\"mr-8\" *ngIf=\"navigationItem.icon\">{{navigationItem.icon}}</md-icon>\r\n                        <span class=\"h2 w-32 h-32 p-4 mr-8 secondary-text text-bold\" fxLayout=\"row\"\r\n                              fxLayoutAlign=\"center center\" *ngIf=\"!navigationItem.icon\">\r\n                            {{navigationItem.title.substr(0, 1).toUpperCase()}}\r\n                        </span>\r\n                        <p md-line fxFlex>{{navigationItem.title}}</p>\r\n                        <md-icon class=\"ml-8\" *ngIf=\"isInShortcuts(navigationItem)\">star</md-icon>\r\n                    </div>\r\n                </md-list-item>\r\n            </md-nav-list>\r\n        </md-menu>\r\n\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/components/shortcuts/shortcuts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Applies styles for users in high contrast mode. Note that this only applies\r\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\r\n * attribute, however Chrome handles high contrast differently.\r\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\r\n * This mixin adds the correct panel transform styles based\r\n * on the direction that the menu panel opens.\r\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\r\n * This mixin contains shared option styles between the select and\r\n * autocomplete components.\r\n */\n@media (max-width: 959px) {\n  :host #smsf-shortcuts.show-mobile-panel {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 99;\n    padding: 0 8px; }\n    :host #smsf-shortcuts.show-mobile-panel .shortcuts {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      height: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/shortcuts/shortcuts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFShortcutsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigation_navigation_service__ = __webpack_require__("../../../../../src/app/core/components/navigation/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_match_media_service__ = __webpack_require__("../../../../../src/app/core/services/match-media.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_config_service__ = __webpack_require__("../../../../../src/app/core/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SMSFShortcutsComponent = (function () {
    function SMSFShortcutsComponent(renderer, observableMedia, SMSFMatchMedia, SMSFNavigationService, SMSFConfig, cookieService) {
        var _this = this;
        this.renderer = renderer;
        this.observableMedia = observableMedia;
        this.SMSFMatchMedia = SMSFMatchMedia;
        this.SMSFNavigationService = SMSFNavigationService;
        this.SMSFConfig = SMSFConfig;
        this.cookieService = cookieService;
        this.shortcutItems = [];
        this.searching = false;
        this.mobileShortcutsPanelActive = false;
        this.filteredNavigationItems = this.navigationItems = this.SMSFNavigationService.getFlatNavigation();
        this.onSettingsChanged =
            this.SMSFConfig.onSettingsChanged
                .subscribe(function (newSettings) {
                _this.toolbarColor = newSettings.colorClasses.toolbar;
            });
    }
    SMSFShortcutsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var cookieExists = this.cookieService.check('smsf.shortcuts');
        if (cookieExists) {
            this.shortcutItems = JSON.parse(this.cookieService.get('smsf.shortcuts'));
        }
        else {
            // User's shortcut items
            this.shortcutItems = [
                {
                    'title': 'Calendar',
                    'type': 'nav-item',
                    'icon': 'today',
                    'url': '/apps/calendar'
                },
                {
                    'title': 'Mail',
                    'type': 'nav-item',
                    'icon': 'email',
                    'url': '/apps/mail'
                },
                {
                    'title': 'Contacts',
                    'type': 'nav-item',
                    'icon': 'account_box',
                    'url': '/apps/contacts'
                },
                {
                    'title': 'To-Do',
                    'type': 'nav-item',
                    'icon': 'check_box',
                    'url': '/apps/todo'
                }
            ];
        }
        this.matchMediaSubscription =
            this.SMSFMatchMedia.onMediaChange.subscribe(function () {
                if (_this.observableMedia.isActive('gt-sm')) {
                    _this.hideMobileShortcutsPanel();
                }
            });
    };
    SMSFShortcutsComponent.prototype.ngOnDestroy = function () {
        this.matchMediaSubscription.unsubscribe();
    };
    SMSFShortcutsComponent.prototype.search = function (event) {
        var value = event.target.value.toLowerCase();
        if (value === '') {
            this.searching = false;
            this.filteredNavigationItems = this.navigationItems;
            return;
        }
        this.searching = true;
        this.filteredNavigationItems = this.navigationItems.filter(function (navigationItem) {
            return navigationItem.title.toLowerCase().includes(value);
        });
    };
    SMSFShortcutsComponent.prototype.toggleShortcut = function (event, itemToToggle) {
        event.stopPropagation();
        for (var i = 0; i < this.shortcutItems.length; i++) {
            if (this.shortcutItems[i].url === itemToToggle.url) {
                this.shortcutItems.splice(i, 1);
                // Save to the cookies
                this.cookieService.set('smsf.shortcuts', JSON.stringify(this.shortcutItems));
                return;
            }
        }
        this.shortcutItems.push(itemToToggle);
        // Save to the cookies
        this.cookieService.set('smsf.shortcuts', JSON.stringify(this.shortcutItems));
    };
    SMSFShortcutsComponent.prototype.isInShortcuts = function (navigationItem) {
        return this.shortcutItems.find(function (item) {
            return item.url === navigationItem.url;
        });
    };
    SMSFShortcutsComponent.prototype.onMenuOpen = function () {
        this.searchInputField.nativeElement.focus();
    };
    SMSFShortcutsComponent.prototype.showMobileShortcutsPanel = function () {
        this.mobileShortcutsPanelActive = true;
        this.renderer.addClass(this.shortcutsEl.nativeElement, 'show-mobile-panel');
    };
    SMSFShortcutsComponent.prototype.hideMobileShortcutsPanel = function () {
        this.mobileShortcutsPanelActive = false;
        this.renderer.removeClass(this.shortcutsEl.nativeElement, 'show-mobile-panel');
    };
    return SMSFShortcutsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchInput'),
    __metadata("design:type", Object)
], SMSFShortcutsComponent.prototype, "searchInputField", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('shortcuts'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], SMSFShortcutsComponent.prototype, "shortcutsEl", void 0);
SMSFShortcutsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'smsf-shortcuts',
        template: __webpack_require__("../../../../../src/app/core/components/shortcuts/shortcuts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/components/shortcuts/shortcuts.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["b" /* ObservableMedia */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["b" /* ObservableMedia */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_match_media_service__["a" /* SMSFMatchMedia */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_match_media_service__["a" /* SMSFMatchMedia */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__navigation_navigation_service__["a" /* SMSFNavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__navigation_navigation_service__["a" /* SMSFNavigationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_config_service__["a" /* SMSFConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_config_service__["a" /* SMSFConfigService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__["a" /* CookieService */]) === "function" && _g || Object])
], SMSFShortcutsComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=shortcuts.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/shortcuts/shortcuts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFShortcutsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shortcuts_component__ = __webpack_require__("../../../../../src/app/core/components/shortcuts/shortcuts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_shared_module__ = __webpack_require__("../../../../../src/app/core/modules/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SMSFShortcutsModule = (function () {
    function SMSFShortcutsModule() {
    }
    return SMSFShortcutsModule;
}());
SMSFShortcutsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__shortcuts_component__["a" /* SMSFShortcutsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__modules_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__shortcuts_component__["a" /* SMSFShortcutsComponent */]
        ]
    })
], SMSFShortcutsModule);

//# sourceMappingURL=shortcuts.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/theme-options/theme-options.component.html":
/***/ (function(module, exports) {

module.exports = "<button #openButton md-icon-button class=\"open-button md-primary-bg mat-elevation-z2\" (click)=\"openBar()\">\r\n    <md-icon>settings</md-icon>\r\n</button>\r\n\r\n<div #panel class=\"theme-options-panel md-white-bg mat-elevation-z2 pb-16\">\r\n\r\n    <button md-icon-button class=\"close-button\" (click)=\"closeBar()\">\r\n        <md-icon>close</md-icon>\r\n    </button>\r\n\r\n    <md-list>\r\n        <h3 md-subheader>Navigation:</h3>\r\n        <md-list-item>\r\n            <md-radio-group [(ngModel)]=\"smsfSettings.layout.navigation\" (ngModelChange)=\"onSettingsChange()\">\r\n                <md-radio-button class=\"mr-8\" value=\"left\">Left</md-radio-button>\r\n                <md-radio-button class=\"mr-8\" value=\"right\">Right</md-radio-button>\r\n                <md-radio-button class=\"mr-8\" value=\"none\">None</md-radio-button>\r\n            </md-radio-group>\r\n        </md-list-item>\r\n\r\n        <h3 md-subheader>Toolbar:</h3>\r\n        <md-list-item>\r\n            <md-radio-group [(ngModel)]=\"smsfSettings.layout.toolbar\" (ngModelChange)=\"onSettingsChange()\">\r\n                <md-radio-button class=\"mr-8\" value=\"below\">Below</md-radio-button>\r\n                <md-radio-button class=\"mr-8\" value=\"above\">Above</md-radio-button>\r\n                <md-radio-button class=\"mr-8\" value=\"none\">None</md-radio-button>\r\n            </md-radio-group>\r\n        </md-list-item>\r\n\r\n        <h3 md-subheader>Footer:</h3>\r\n        <md-list-item>\r\n            <md-radio-group [(ngModel)]=\"smsfSettings.layout.footer\" (ngModelChange)=\"onSettingsChange()\">\r\n                <md-radio-button class=\"mr-8\" value=\"below\">Below</md-radio-button>\r\n                <md-radio-button class=\"mr-8\" value=\"above\">Above</md-radio-button>\r\n                <md-radio-button class=\"mr-8\" value=\"none\">None</md-radio-button>\r\n            </md-radio-group>\r\n        </md-list-item>\r\n\r\n        <md-divider></md-divider>\r\n\r\n        <h3 md-subheader>Colors:</h3>\r\n\r\n        <md-list-item>\r\n            <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <h4>Toolbar Color</h4>\r\n                <smsf-material-color-picker [(selectedClass)]=\"smsfSettings.colorClasses.toolbar\" (onValueChange)=\"onSettingsChange()\"></smsf-material-color-picker>\r\n            </div>\r\n        </md-list-item>\r\n\r\n        <md-list-item>\r\n            <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <h4>Navigation Bar Color</h4>\r\n                <smsf-material-color-picker [(selectedClass)]=\"smsfSettings.colorClasses.navbar\" (onValueChange)=\"onSettingsChange()\"></smsf-material-color-picker>\r\n            </div>\r\n        </md-list-item>\r\n\r\n        <md-list-item>\r\n            <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <h4>Footer Color</h4>\r\n                <smsf-material-color-picker [(selectedClass)]=\"smsfSettings.colorClasses.footer\" (onValueChange)=\"onSettingsChange()\"></smsf-material-color-picker>\r\n            </div>\r\n        </md-list-item>\r\n\r\n        <md-divider></md-divider>\r\n\r\n        <h3 md-subheader>Animation:</h3>\r\n\r\n        <md-list-item>\r\n            <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <h4>Router Animation</h4>\r\n                <md-select [(ngModel)]=\"smsfSettings.routerAnimation\">\r\n                    <md-option value=\"none\">\r\n                        None\r\n                    </md-option>\r\n                    <md-option value=\"slideUp\">\r\n                        Slide up\r\n                    </md-option>\r\n                    <md-option value=\"slideDown\">\r\n                        Slide down\r\n                    </md-option>\r\n                    <md-option value=\"slideRight\">\r\n                        Slide right\r\n                    </md-option>\r\n                    <md-option value=\"slideLeft\">\r\n                        Slide left\r\n                    </md-option>\r\n                    <md-option value=\"fadeIn\">\r\n                        Fade in\r\n                    </md-option>\r\n                </md-select>\r\n            </div>\r\n        </md-list-item>\r\n\r\n    </md-list>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/components/theme-options/theme-options.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Applies styles for users in high contrast mode. Note that this only applies\r\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\r\n * attribute, however Chrome handles high contrast differently.\r\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\r\n * This mixin adds the correct panel transform styles based\r\n * on the direction that the menu panel opens.\r\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\r\n * This mixin contains shared option styles between the select and\r\n * autocomplete components.\r\n */\n@-webkit-keyframes rotating {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n@keyframes rotating {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n:host {\n  position: fixed;\n  display: block;\n  right: 0;\n  top: 160px; }\n  :host .theme-options-panel {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 320px;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n    z-index: 999; }\n    :host .theme-options-panel .close-button {\n      position: absolute;\n      top: 0;\n      right: 0; }\n  :host .mat-list .mat-list-item {\n    font-size: 15px; }\n  :host .open-button {\n    position: absolute;\n    top: 0;\n    left: -48px;\n    width: 48px;\n    height: 48px;\n    line-height: 48px;\n    text-align: center;\n    cursor: pointer;\n    border-radius: 0;\n    margin: 0;\n    pointer-events: auto;\n    opacity: .75;\n    z-index: 998; }\n    :host .open-button md-icon {\n      -webkit-animation: rotating 3s linear infinite;\n              animation: rotating 3s linear infinite; }\n    :host .open-button:hover {\n      opacity: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/theme-options/theme-options.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFThemeOptionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_config_service__ = __webpack_require__("../../../../../src/app/core/services/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SMSFThemeOptionsComponent = (function () {
    function SMSFThemeOptionsComponent(animationBuilder, smsfConfig) {
        var _this = this;
        this.animationBuilder = animationBuilder;
        this.smsfConfig = smsfConfig;
        this.onSettingsChanged =
            this.smsfConfig.onSettingsChanged
                .subscribe(function (newSettings) {
                _this.smsfSettings = newSettings;
            });
    }
    SMSFThemeOptionsComponent.prototype.ngOnInit = function () {
    };
    SMSFThemeOptionsComponent.prototype.onSettingsChange = function () {
        this.smsfConfig.setSettings(this.smsfSettings);
    };
    SMSFThemeOptionsComponent.prototype.closeBar = function () {
        this.player =
            this.animationBuilder
                .build([
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({ transform: 'translate3d(0,0,0)' }),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({ transform: 'translate3d(100%,0,0)' }))
            ]).create(this.panel.nativeElement);
        this.player.play();
    };
    SMSFThemeOptionsComponent.prototype.openBar = function () {
        this.player =
            this.animationBuilder
                .build([
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({ transform: 'translate3d(100%,0,0)' }),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({ transform: 'translate3d(0,0,0)' }))
            ]).create(this.panel.nativeElement);
        this.player.play();
    };
    SMSFThemeOptionsComponent.prototype.ngOnDestroy = function () {
        this.onSettingsChanged.unsubscribe();
    };
    return SMSFThemeOptionsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('openButton'),
    __metadata("design:type", Object)
], SMSFThemeOptionsComponent.prototype, "openButton", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('panel'),
    __metadata("design:type", Object)
], SMSFThemeOptionsComponent.prototype, "panel", void 0);
SMSFThemeOptionsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'SMSF-theme-options',
        template: __webpack_require__("../../../../../src/app/core/components/theme-options/theme-options.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/components/theme-options/theme-options.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* AnimationBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* AnimationBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_config_service__["a" /* SMSFConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_config_service__["a" /* SMSFConfigService */]) === "function" && _b || Object])
], SMSFThemeOptionsComponent);

var _a, _b;
//# sourceMappingURL=theme-options.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/directives/md-sidenav-helper/md-sidenav-helper.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFMdSidenavHelperDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SMSFMdSidenavTogglerDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_core_directives_md_sidenav_helper_md_sidenav_helper_service__ = __webpack_require__("../../../../../src/app/core/directives/md-sidenav-helper/md-sidenav-helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_match_media_service__ = __webpack_require__("../../../../../src/app/core/services/match-media.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SMSFMdSidenavHelperDirective = (function () {
    function SMSFMdSidenavHelperDirective(SMSFMdSidenavService, SMSFMatchMedia, observableMedia, mdSidenav) {
        this.SMSFMdSidenavService = SMSFMdSidenavService;
        this.SMSFMatchMedia = SMSFMatchMedia;
        this.observableMedia = observableMedia;
        this.mdSidenav = mdSidenav;
        this.isLockedOpen = true;
        this.stopTransition = true;
    }
    SMSFMdSidenavHelperDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.SMSFMdSidenavService.setSidenav(this.id, this.mdSidenav);
        if (this.observableMedia.isActive(this.mdIsLockedOpenBreakpoint)) {
            setTimeout(function () {
                _this.isLockedOpen = true;
                _this.mdSidenav.mode = 'side';
                _this.mdSidenav.open();
            });
        }
        else {
            setTimeout(function () {
                _this.isLockedOpen = false;
                _this.mdSidenav.mode = 'over';
                _this.mdSidenav.close();
            });
        }
        this.matchMediaSubscription = this.SMSFMatchMedia.onMediaChange.subscribe(function () {
            if (_this.observableMedia.isActive(_this.mdIsLockedOpenBreakpoint)) {
                setTimeout(function () {
                    _this.isLockedOpen = true;
                    _this.mdSidenav.mode = 'side';
                    _this.mdSidenav.open();
                });
            }
            else {
                setTimeout(function () {
                    _this.isLockedOpen = false;
                    _this.mdSidenav.mode = 'over';
                    _this.mdSidenav.close();
                });
            }
        });
    };
    SMSFMdSidenavHelperDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.stopTransition = false;
        }, 0);
    };
    SMSFMdSidenavHelperDirective.prototype.ngOnDestroy = function () {
        this.matchMediaSubscription.unsubscribe();
    };
    return SMSFMdSidenavHelperDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.md-is-locked-open'),
    __metadata("design:type", Object)
], SMSFMdSidenavHelperDirective.prototype, "isLockedOpen", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.md-stop-transition'),
    __metadata("design:type", Object)
], SMSFMdSidenavHelperDirective.prototype, "stopTransition", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('SMSFMdSidenavHelper'),
    __metadata("design:type", String)
], SMSFMdSidenavHelperDirective.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('md-is-locked-open'),
    __metadata("design:type", String)
], SMSFMdSidenavHelperDirective.prototype, "mdIsLockedOpenBreakpoint", void 0);
SMSFMdSidenavHelperDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[SMSFMdSidenavHelper]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_core_directives_md_sidenav_helper_md_sidenav_helper_service__["a" /* SMSFMdSidenavHelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_core_directives_md_sidenav_helper_md_sidenav_helper_service__["a" /* SMSFMdSidenavHelperService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_match_media_service__["a" /* SMSFMatchMedia */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_match_media_service__["a" /* SMSFMatchMedia */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["b" /* ObservableMedia */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["b" /* ObservableMedia */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MdSidenav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MdSidenav */]) === "function" && _d || Object])
], SMSFMdSidenavHelperDirective);

var SMSFMdSidenavTogglerDirective = (function () {
    function SMSFMdSidenavTogglerDirective(SMSFMdSidenavService) {
        this.SMSFMdSidenavService = SMSFMdSidenavService;
    }
    SMSFMdSidenavTogglerDirective.prototype.onClick = function () {
        this.SMSFMdSidenavService.getSidenav(this.id).toggle();
    };
    return SMSFMdSidenavTogglerDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('SMSFMdSidenavToggler'),
    __metadata("design:type", Object)
], SMSFMdSidenavTogglerDirective.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SMSFMdSidenavTogglerDirective.prototype, "onClick", null);
SMSFMdSidenavTogglerDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[SMSFMdSidenavToggler]'
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_app_core_directives_md_sidenav_helper_md_sidenav_helper_service__["a" /* SMSFMdSidenavHelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_core_directives_md_sidenav_helper_md_sidenav_helper_service__["a" /* SMSFMdSidenavHelperService */]) === "function" && _e || Object])
], SMSFMdSidenavTogglerDirective);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=md-sidenav-helper.directive.js.map

/***/ }),

/***/ "../../../../../src/app/core/directives/md-sidenav-helper/md-sidenav-helper.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFMdSidenavHelperService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SMSFMdSidenavHelperService = (function () {
    function SMSFMdSidenavHelperService() {
        this.sidenavInstances = [];
    }
    SMSFMdSidenavHelperService.prototype.setSidenav = function (id, instance) {
        this.sidenavInstances[id] = instance;
    };
    SMSFMdSidenavHelperService.prototype.getSidenav = function (id) {
        return this.sidenavInstances[id];
    };
    return SMSFMdSidenavHelperService;
}());
SMSFMdSidenavHelperService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SMSFMdSidenavHelperService);

//# sourceMappingURL=md-sidenav-helper.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/directives/smsf-if-on-dom/smsf-if-on-dom.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFIfOnDomDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SMSFIfOnDomDirective = (function () {
    function SMSFIfOnDomDirective(templateRef, viewContainer, element) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.element = element;
        this.isCreated = false;
    }
    SMSFIfOnDomDirective.prototype.ngAfterContentChecked = function () {
        var _this = this;
        if (document.body.contains(this.element.nativeElement) && !this.isCreated) {
            setTimeout(function () {
                _this.viewContainer.createEmbeddedView(_this.templateRef);
            }, 0);
            this.isCreated = true;
        }
        else if (this.isCreated && !document.body.contains(this.element.nativeElement)) {
            this.viewContainer.clear();
            this.isCreated = false;
        }
    };
    return SMSFIfOnDomDirective;
}());
SMSFIfOnDomDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[smsfIfOnDom]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object])
], SMSFIfOnDomDirective);

var _a, _b, _c;
//# sourceMappingURL=smsf-if-on-dom.directive.js.map

/***/ }),

/***/ "../../../../../src/app/core/matColors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatColors; });
var black87 = 'rgba(black, 0.87)';
var white87 = 'rgba(white, 0.87)';
var black12 = 'rgba(black, 0.12)';
var white12 = 'rgba(white, 0.12)';
var black6 = 'rgba(black, 0.06)';
var white6 = 'rgba(white, 0.06)';
var matColors = {
    'red': {
        50: '#ffebee',
        100: '#ffcdd2',
        200: '#ef9a9a',
        300: '#e57373',
        400: '#ef5350',
        500: '#f44336',
        600: '#e53935',
        700: '#d32f2f',
        800: '#c62828',
        900: '#b71c1c',
        A100: '#ff8a80',
        A200: '#ff5252',
        A400: '#ff1744',
        A700: '#d50000',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: 'white',
            600: 'white',
            700: 'white',
            800: white87,
            900: white87,
            A100: black87,
            A200: 'white',
            A400: 'white',
            A700: 'white'
        }
    },
    'pink': {
        50: '#fce4ec',
        100: '#f8bbd0',
        200: '#f48fb1',
        300: '#f06292',
        400: '#ec407a',
        500: '#e91e63',
        600: '#d81b60',
        700: '#c2185b',
        800: '#ad1457',
        900: '#880e4f',
        A100: '#ff80ab',
        A200: '#ff4081',
        A400: '#f50057',
        A700: '#c51162',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: 'white',
            600: 'white',
            700: white87,
            800: white87,
            900: white87,
            A100: black87,
            A200: 'white',
            A400: 'white',
            A700: 'white'
        }
    },
    'purple': {
        50: '#f3e5f5',
        100: '#e1bee7',
        200: '#ce93d8',
        300: '#ba68c8',
        400: '#ab47bc',
        500: '#9c27b0',
        600: '#8e24aa',
        700: '#7b1fa2',
        800: '#6a1b9a',
        900: '#4a148c',
        A100: '#ea80fc',
        A200: '#e040fb',
        A400: '#d500f9',
        A700: '#aa00ff',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: 'white',
            400: 'white',
            500: white87,
            600: white87,
            700: white87,
            800: white87,
            900: white87,
            A100: black87,
            A200: 'white',
            A400: 'white',
            A700: 'white'
        }
    },
    'deep-purple': {
        50: '#ede7f6',
        100: '#d1c4e9',
        200: '#b39ddb',
        300: '#9575cd',
        400: '#7e57c2',
        500: '#673ab7',
        600: '#5e35b1',
        700: '#512da8',
        800: '#4527a0',
        900: '#311b92',
        A100: '#b388ff',
        A200: '#7c4dff',
        A400: '#651fff',
        A700: '#6200ea',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: 'white',
            400: 'white',
            500: white87,
            600: white87,
            700: white87,
            800: white87,
            900: white87,
            A100: black87,
            A200: 'white',
            A400: white87,
            A700: white87
        }
    },
    'indigo': {
        50: '#e8eaf6',
        100: '#c5cae9',
        200: '#9fa8da',
        300: '#7986cb',
        400: '#5c6bc0',
        500: '#3f51b5',
        600: '#3949ab',
        700: '#303f9f',
        800: '#283593',
        900: '#1a237e',
        A100: '#8c9eff',
        A200: '#536dfe',
        A400: '#3d5afe',
        A700: '#304ffe',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: 'white',
            400: 'white',
            500: white87,
            600: white87,
            700: white87,
            800: white87,
            900: white87,
            A100: black87,
            A200: 'white',
            A400: 'white',
            A700: white87
        }
    },
    'blue': {
        50: '#e3f2fd',
        100: '#bbdefb',
        200: '#90caf9',
        300: '#64b5f6',
        400: '#42a5f5',
        500: '#2196f3',
        600: '#1e88e5',
        700: '#1976d2',
        800: '#1565c0',
        900: '#0d47a1',
        A100: '#82b1ff',
        A200: '#448aff',
        A400: '#2979ff',
        A700: '#2962ff',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: 'white',
            600: 'white',
            700: 'white',
            800: white87,
            900: white87,
            A100: black87,
            A200: 'white',
            A400: 'white',
            A700: 'white'
        }
    },
    'light-blue': {
        50: '#e1f5fe',
        100: '#b3e5fc',
        200: '#81d4fa',
        300: '#4fc3f7',
        400: '#29b6f6',
        500: '#03a9f4',
        600: '#039be5',
        700: '#0288d1',
        800: '#0277bd',
        900: '#01579b',
        A100: '#80d8ff',
        A200: '#40c4ff',
        A400: '#00b0ff',
        A700: '#0091ea',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: 'white',
            600: 'white',
            700: 'white',
            800: 'white',
            900: white87,
            A100: black87,
            A200: black87,
            A400: black87,
            A700: 'white'
        }
    },
    'cyan': {
        50: '#e0f7fa',
        100: '#b2ebf2',
        200: '#80deea',
        300: '#4dd0e1',
        400: '#26c6da',
        500: '#00bcd4',
        600: '#00acc1',
        700: '#0097a7',
        800: '#00838f',
        900: '#006064',
        A100: '#84ffff',
        A200: '#18ffff',
        A400: '#00e5ff',
        A700: '#00b8d4',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: 'white',
            600: 'white',
            700: 'white',
            800: 'white',
            900: white87,
            A100: black87,
            A200: black87,
            A400: black87,
            A700: black87
        }
    },
    'teal': {
        50: '#e0f2f1',
        100: '#b2dfdb',
        200: '#80cbc4',
        300: '#4db6ac',
        400: '#26a69a',
        500: '#009688',
        600: '#00897b',
        700: '#00796b',
        800: '#00695c',
        900: '#004d40',
        A100: '#a7ffeb',
        A200: '#64ffda',
        A400: '#1de9b6',
        A700: '#00bfa5',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: 'white',
            600: 'white',
            700: 'white',
            800: white87,
            900: white87,
            A100: black87,
            A200: black87,
            A400: black87,
            A700: black87
        }
    },
    'green': {
        50: '#e8f5e9',
        100: '#c8e6c9',
        200: '#a5d6a7',
        300: '#81c784',
        400: '#66bb6a',
        500: '#4caf50',
        600: '#43a047',
        700: '#388e3c',
        800: '#2e7d32',
        900: '#1b5e20',
        A100: '#b9f6ca',
        A200: '#69f0ae',
        A400: '#00e676',
        A700: '#00c853',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: 'white',
            600: 'white',
            700: 'white',
            800: white87,
            900: white87,
            A100: black87,
            A200: black87,
            A400: black87,
            A700: black87
        }
    },
    'light-green': {
        50: '#f1f8e9',
        100: '#dcedc8',
        200: '#c5e1a5',
        300: '#aed581',
        400: '#9ccc65',
        500: '#8bc34a',
        600: '#7cb342',
        700: '#689f38',
        800: '#558b2f',
        900: '#33691e',
        A100: '#ccff90',
        A200: '#b2ff59',
        A400: '#76ff03',
        A700: '#64dd17',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: black87,
            600: black87,
            700: black87,
            800: 'white',
            900: 'white',
            A100: black87,
            A200: black87,
            A400: black87,
            A700: black87
        }
    },
    'lime': {
        50: '#f9fbe7',
        100: '#f0f4c3',
        200: '#e6ee9c',
        300: '#dce775',
        400: '#d4e157',
        500: '#cddc39',
        600: '#c0ca33',
        700: '#afb42b',
        800: '#9e9d24',
        900: '#827717',
        A100: '#f4ff81',
        A200: '#eeff41',
        A400: '#c6ff00',
        A700: '#aeea00',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: black87,
            600: black87,
            700: black87,
            800: black87,
            900: 'white',
            A100: black87,
            A200: black87,
            A400: black87,
            A700: black87
        }
    },
    'yellow': {
        50: '#fffde7',
        100: '#fff9c4',
        200: '#fff59d',
        300: '#fff176',
        400: '#ffee58',
        500: '#ffeb3b',
        600: '#fdd835',
        700: '#fbc02d',
        800: '#f9a825',
        900: '#f57f17',
        A100: '#ffff8d',
        A200: '#ffff00',
        A400: '#ffea00',
        A700: '#ffd600',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: black87,
            600: black87,
            700: black87,
            800: black87,
            900: black87,
            A100: black87,
            A200: black87,
            A400: black87,
            A700: black87
        }
    },
    'amber': {
        50: '#fff8e1',
        100: '#ffecb3',
        200: '#ffe082',
        300: '#ffd54f',
        400: '#ffca28',
        500: '#ffc107',
        600: '#ffb300',
        700: '#ffa000',
        800: '#ff8f00',
        900: '#ff6f00',
        A100: '#ffe57f',
        A200: '#ffd740',
        A400: '#ffc400',
        A700: '#ffab00',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: black87,
            600: black87,
            700: black87,
            800: black87,
            900: black87,
            A100: black87,
            A200: black87,
            A400: black87,
            A700: black87
        }
    },
    'orange': {
        50: '#fff3e0',
        100: '#ffe0b2',
        200: '#ffcc80',
        300: '#ffb74d',
        400: '#ffa726',
        500: '#ff9800',
        600: '#fb8c00',
        700: '#f57c00',
        800: '#ef6c00',
        900: '#e65100',
        A100: '#ffd180',
        A200: '#ffab40',
        A400: '#ff9100',
        A700: '#ff6d00',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: black87,
            600: black87,
            700: black87,
            800: 'white',
            900: 'white',
            A100: black87,
            A200: black87,
            A400: black87,
            A700: 'black'
        }
    },
    'deep-orange': {
        50: '#fbe9e7',
        100: '#ffccbc',
        200: '#ffab91',
        300: '#ff8a65',
        400: '#ff7043',
        500: '#ff5722',
        600: '#f4511e',
        700: '#e64a19',
        800: '#d84315',
        900: '#bf360c',
        A100: '#ff9e80',
        A200: '#ff6e40',
        A400: '#ff3d00',
        A700: '#dd2c00',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: 'white',
            600: 'white',
            700: 'white',
            800: 'white',
            900: 'white',
            A100: black87,
            A200: black87,
            A400: 'white',
            A700: 'white'
        }
    },
    'brown': {
        50: '#efebe9',
        100: '#d7ccc8',
        200: '#bcaaa4',
        300: '#a1887f',
        400: '#8d6e63',
        500: '#795548',
        600: '#6d4c41',
        700: '#5d4037',
        800: '#4e342e',
        900: '#3e2723',
        A100: '#d7ccc8',
        A200: '#bcaaa4',
        A400: '#8d6e63',
        A700: '#5d4037',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: 'white',
            400: 'white',
            500: white87,
            600: white87,
            700: white87,
            800: white87,
            900: white87,
            A100: black87,
            A200: black87,
            A400: 'white',
            A700: white87
        }
    },
    'grey': {
        0: '#ffffff',
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#eeeeee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
        1000: '#000000',
        A100: '#ffffff',
        A200: '#eeeeee',
        A400: '#bdbdbd',
        A700: '#616161',
        contrast: {
            0: black87,
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: black87,
            600: white87,
            700: white87,
            800: white87,
            900: white87,
            1000: white87,
            A100: black87,
            A200: black87,
            A400: black87,
            A700: white87
        }
    },
    'blue-grey': {
        50: '#eceff1',
        100: '#cfd8dc',
        200: '#b0bec5',
        300: '#90a4ae',
        400: '#78909c',
        500: '#607d8b',
        600: '#546e7a',
        700: '#455a64',
        800: '#37474f',
        900: '#263238',
        A100: '#cfd8dc',
        A200: '#b0bec5',
        A400: '#78909c',
        A700: '#455a64',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: 'white',
            500: 'white',
            600: white87,
            700: white87,
            800: white87,
            900: white87,
            A100: black87,
            A200: black87,
            A400: 'white',
            A700: white87
        }
    },
    'smsf-dark': {
        50: '#ECECEE',
        100: '#C5C6CB',
        200: '#9EA1A9',
        300: '#7D818C',
        400: '#5C616F',
        500: '#3C4252',
        600: '#353A48',
        700: '#2D323E',
        800: '#262933',
        900: '#1E2129',
        A100: '#C5C6CB',
        A200: '#9EA1A9',
        A400: '#5C616F',
        A700: '#2D323E',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: 'white',
            400: 'white',
            500: white87,
            600: white87,
            700: white87,
            800: white87,
            900: white87,
            A100: black87,
            A200: white87,
            A400: white87,
            A700: white87
        }
    },
    white: {
        500: 'white',
        contrast: {
            500: black87
        }
    },
    black: {
        500: 'black',
        contrast: {
            500: 'white'
        }
    }
};
var matPresetColors = [
    '#ffebee', '#ffcdd2', '#ef9a9a', '#e57373', '#ef5350', '#f44336', '#e53935', '#d32f2f', '#c62828', '#b71c1c', '#ff8a80', '#ff5252', '#ff1744', '#d50000', '#fce4ec', '#f8bbd0', '#f48fb1', '#f06292', '#ec407a', '#e91e63', '#d81b60', '#c2185b', '#ad1457', '#880e4f', '#ff80ab', '#ff4081', '#f50057', '#c51162', '#f3e5f5', '#e1bee7', '#ce93d8', '#ba68c8', '#ab47bc', '#9c27b0', '#8e24aa', '#7b1fa2', '#6a1b9a', '#4a148c', '#ea80fc', '#e040fb', '#d500f9', '#aa00ff', '#ede7f6', '#d1c4e9', '#b39ddb', '#9575cd', '#7e57c2', '#673ab7', '#5e35b1', '#512da8', '#4527a0', '#311b92', '#b388ff', '#7c4dff', '#651fff', '#6200ea', '#e8eaf6', '#c5cae9', '#9fa8da', '#7986cb', '#5c6bc0', '#3f51b5', '#3949ab', '#303f9f', '#283593', '#1a237e', '#8c9eff', '#536dfe', '#3d5afe', '#304ffe', '#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5', '#2196f3', '#1e88e5', '#1976d2', '#1565c0', '#0d47a1', '#82b1ff', '#448aff', '#2979ff', '#2962ff', '#e1f5fe', '#b3e5fc', '#81d4fa', '#4fc3f7', '#29b6f6', '#03a9f4', '#039be5', '#0288d1', '#0277bd', '#01579b', '#80d8ff', '#40c4ff', '#00b0ff', '#0091ea', '#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da', '#00bcd4', '#00acc1', '#0097a7', '#00838f', '#006064', '#84ffff', '#18ffff', '#00e5ff', '#00b8d4', '#e0f2f1', '#b2dfdb', '#80cbc4', '#4db6ac', '#26a69a', '#009688', '#00897b', '#00796b', '#00695c', '#004d40', '#a7ffeb', '#64ffda', '#1de9b6', '#00bfa5', '#e8f5e9', '#c8e6c9', '#a5d6a7', '#81c784', '#66bb6a', '#4caf50', '#43a047', '#388e3c', '#2e7d32', '#1b5e20', '#b9f6ca', '#69f0ae', '#00e676', '#00c853', '#f1f8e9', '#dcedc8', '#c5e1a5', '#aed581', '#9ccc65', '#8bc34a', '#7cb342', '#689f38', '#558b2f', '#33691e', '#ccff90', '#b2ff59', '#76ff03', '#64dd17', '#f9fbe7', '#f0f4c3', '#e6ee9c', '#dce775', '#d4e157', '#cddc39', '#c0ca33', '#afb42b', '#9e9d24', '#827717', '#f4ff81', '#eeff41', '#c6ff00', '#aeea00', '#fffde7', '#fff9c4', '#fff59d', '#fff176', '#ffee58', '#ffeb3b', '#fdd835', '#fbc02d', '#f9a825', '#f57f17', '#ffff8d', '#ffff00', '#ffea00', '#ffd600', '#fff8e1', '#ffecb3', '#ffe082', '#ffd54f', '#ffca28', '#ffc107', '#ffb300', '#ffa000', '#ff8f00', '#ff6f00', '#ffe57f', '#ffd740', '#ffc400', '#ffab00', '#fff3e0', '#ffe0b2', '#ffcc80', '#ffb74d', '#ffa726', '#ff9800', '#fb8c00', '#f57c00', '#ef6c00', '#e65100', '#ffd180', '#ffab40', '#ff9100', '#ff6d00', '#fbe9e7', '#ffccbc', '#ffab91', '#ff8a65', '#ff7043', '#ff5722', '#f4511e', '#e64a19', '#d84315', '#bf360c', '#ff9e80', '#ff6e40', '#ff3d00', '#dd2c00', '#efebe9', '#d7ccc8', '#bcaaa4', '#a1887f', '#8d6e63', '#795548', '#6d4c41', '#5d4037', '#4e342e', '#3e2723', '#d7ccc8', '#bcaaa4', '#8d6e63', '#5d4037', '#fafafa', '#f5f5f5', '#eeeeee', '#e0e0e0', '#bdbdbd', '#9e9e9e', '#757575', '#616161', '#424242', '#212121', '#ffffff', '#eeeeee', '#bdbdbd', '#616161', '#eceff1', '#cfd8dc', '#b0bec5', '#90a4ae', '#78909c', '#607d8b', '#546e7a', '#455a64', '#37474f', '#263238', '#cfd8dc', '#b0bec5', '#78909c', '#455a64'
];
/**
 // Color palettes from the Material Design spec.
 // See https://www.google.com/design/spec/style/color.html
 */
var MatColors = (function () {
    function MatColors() {
    }
    MatColors.getColor = function (colorName) {
        if (matColors[colorName]) {
            return matColors[colorName];
        }
        return false;
    };
    return MatColors;
}());

MatColors.all = matColors;
MatColors.presets = matPresetColors;
//# sourceMappingURL=matColors.js.map

/***/ }),

/***/ "../../../../../src/app/core/modules/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthConfig"]({
        tokenName: 'frontend-token',
        noJwtError: true,
        tokenGetter: (function () { return localStorage.getItem('frontend-token'); }),
        globalHeaders: [{ 'Content-Type': 'application/json' }],
    }), http, options);
}
var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"],
                useFactory: authHttpServiceFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]]
            }
        ]
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/modules/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("../../../cdk/@angular/cdk/table.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());
MaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdChipsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdCoreModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MdRippleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MdSortModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MdTableModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MdTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdChipsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdCoreModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MdRippleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MdSortModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MdTableModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MdTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */]
        ]
    })
], MaterialModule);

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/modules/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_module__ = __webpack_require__("../../../../../src/app/core/modules/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_perfect_scrollbar__ = __webpack_require__("../../../../ngx-perfect-scrollbar/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_perfect_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_perfect_scrollbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_color_picker__ = __webpack_require__("../../../../ngx-color-picker/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_color_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_color_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_dnd__ = __webpack_require__("../../../../@swimlane/ngx-dnd/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_dnd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_md_sidenav_helper_md_sidenav_helper_directive__ = __webpack_require__("../../../../../src/app/core/directives/md-sidenav-helper/md-sidenav-helper.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_pipes_module__ = __webpack_require__("../../../../../src/app/core/pipes/pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/core/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_countdown_countdown_component__ = __webpack_require__("../../../../../src/app/core/components/countdown/countdown.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_navigation_navigation_service__ = __webpack_require__("../../../../../src/app/core/components/navigation/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_match_media_service__ = __webpack_require__("../../../../../src/app/core/services/match-media.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__main_navbar_navbar_service__ = __webpack_require__("../../../../../src/app/main/navbar/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__directives_md_sidenav_helper_md_sidenav_helper_service__ = __webpack_require__("../../../../../src/app/core/directives/md-sidenav-helper/md-sidenav-helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_hljs_hljs_component__ = __webpack_require__("../../../../../src/app/core/components/hljs/hljs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__directives_smsf_if_on_dom_smsf_if_on_dom_directive__ = __webpack_require__("../../../../../src/app/core/directives/smsf-if-on-dom/smsf-if-on-dom.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_material_color_picker_material_color_picker_component__ = __webpack_require__("../../../../../src/app/core/components/material-color-picker/material-color-picker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_md2__ = __webpack_require__("../../../../md2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__auth_module__ = __webpack_require__("../../../../../src/app/core/modules/auth.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__directives_md_sidenav_helper_md_sidenav_helper_directive__["a" /* SMSFMdSidenavHelperDirective */],
            __WEBPACK_IMPORTED_MODULE_9__directives_md_sidenav_helper_md_sidenav_helper_directive__["b" /* SMSFMdSidenavTogglerDirective */],
            __WEBPACK_IMPORTED_MODULE_11__components_confirm_dialog_confirm_dialog_component__["a" /* SMSFConfirmDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_countdown_countdown_component__["a" /* SMSFCountdownComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_hljs_hljs_component__["a" /* SMSFHljsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__directives_smsf_if_on_dom_smsf_if_on_dom_directive__["a" /* SMSFIfOnDomDirective */],
            __WEBPACK_IMPORTED_MODULE_19__components_material_color_picker_material_color_picker_component__["a" /* SMSFMaterialColorPickerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_3__material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10__pipes_pipes_module__["a" /* SMSFPipesModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_perfect_scrollbar__["PerfectScrollbarModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_color_picker__["ColorPickerModule"],
            __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_dnd__["NgxDnDModule"],
            __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable__["NgxDatatableModule"],
            __WEBPACK_IMPORTED_MODULE_20_md2__["a" /* Md2Module */],
            __WEBPACK_IMPORTED_MODULE_22__auth_module__["a" /* AuthModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_3__material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__directives_md_sidenav_helper_md_sidenav_helper_directive__["a" /* SMSFMdSidenavHelperDirective */],
            __WEBPACK_IMPORTED_MODULE_9__directives_md_sidenav_helper_md_sidenav_helper_directive__["b" /* SMSFMdSidenavTogglerDirective */],
            __WEBPACK_IMPORTED_MODULE_10__pipes_pipes_module__["a" /* SMSFPipesModule */],
            __WEBPACK_IMPORTED_MODULE_12__components_countdown_countdown_component__["a" /* SMSFCountdownComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_hljs_hljs_component__["a" /* SMSFHljsComponent */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_perfect_scrollbar__["PerfectScrollbarModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_color_picker__["ColorPickerModule"],
            __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_dnd__["NgxDnDModule"],
            __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable__["NgxDatatableModule"],
            __WEBPACK_IMPORTED_MODULE_18__directives_smsf_if_on_dom_smsf_if_on_dom_directive__["a" /* SMSFIfOnDomDirective */],
            __WEBPACK_IMPORTED_MODULE_19__components_material_color_picker_material_color_picker_component__["a" /* SMSFMaterialColorPickerComponent */],
            __WEBPACK_IMPORTED_MODULE_20_md2__["a" /* Md2Module */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_11__components_confirm_dialog_confirm_dialog_component__["a" /* SMSFConfirmDialogComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_21_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_13__components_navigation_navigation_service__["a" /* SMSFNavigationService */],
            __WEBPACK_IMPORTED_MODULE_14__services_match_media_service__["a" /* SMSFMatchMedia */],
            __WEBPACK_IMPORTED_MODULE_15__main_navbar_navbar_service__["a" /* SMSFNavbarService */],
            __WEBPACK_IMPORTED_MODULE_16__directives_md_sidenav_helper_md_sidenav_helper_service__["a" /* SMSFMdSidenavHelperService */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/pipes/camelCaseToDash.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CamelCaseToDashPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CamelCaseToDashPipe = (function () {
    function CamelCaseToDashPipe() {
    }
    CamelCaseToDashPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = []; }
        return value ? String(value).replace(/([A-Z])/g, function (g) { return "-" + g[0].toLowerCase(); }) : '';
    };
    return CamelCaseToDashPipe;
}());
CamelCaseToDashPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'camelCaseToDash' })
], CamelCaseToDashPipe);

//# sourceMappingURL=camelCaseToDash.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/core/pipes/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__smsfUtils__ = __webpack_require__("../../../../../src/app/core/smsfUtils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (mainArr, searchText, property) {
        return __WEBPACK_IMPORTED_MODULE_1__smsfUtils__["a" /* SMSFUtils */].filterArrayByString(mainArr, searchText);
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'filter' })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/core/pipes/getById.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetByIdPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GetByIdPipe = (function () {
    function GetByIdPipe() {
    }
    GetByIdPipe.prototype.transform = function (value, id, property) {
        var foundItem = value.find(function (item) {
            if (item.id !== undefined) {
                return item.id === id;
            }
            return false;
        });
        if (foundItem) {
            return foundItem[property];
        }
    };
    return GetByIdPipe;
}());
GetByIdPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'getById',
        pure: false
    })
], GetByIdPipe);

//# sourceMappingURL=getById.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/core/pipes/htmlToPlaintext.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HtmlToPlaintextPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HtmlToPlaintextPipe = (function () {
    function HtmlToPlaintextPipe() {
    }
    HtmlToPlaintextPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = []; }
        return value ? String(value).replace(/<[^>]+>/gm, '') : '';
    };
    return HtmlToPlaintextPipe;
}());
HtmlToPlaintextPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'htmlToPlaintext' })
], HtmlToPlaintextPipe);

//# sourceMappingURL=htmlToPlaintext.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/core/pipes/keys.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                keys.push({
                    key: key,
                    value: value[key]
                });
            }
        }
        return keys;
    };
    return KeysPipe;
}());
KeysPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'keys' })
], KeysPipe);

//# sourceMappingURL=keys.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/core/pipes/pipes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFPipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys_pipe__ = __webpack_require__("../../../../../src/app/core/pipes/keys.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getById_pipe__ = __webpack_require__("../../../../../src/app/core/pipes/getById.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__htmlToPlaintext_pipe__ = __webpack_require__("../../../../../src/app/core/pipes/htmlToPlaintext.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filter_pipe__ = __webpack_require__("../../../../../src/app/core/pipes/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__camelCaseToDash_pipe__ = __webpack_require__("../../../../../src/app/core/pipes/camelCaseToDash.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SMSFPipesModule = (function () {
    function SMSFPipesModule() {
    }
    return SMSFPipesModule;
}());
SMSFPipesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__keys_pipe__["a" /* KeysPipe */],
            __WEBPACK_IMPORTED_MODULE_2__getById_pipe__["a" /* GetByIdPipe */],
            __WEBPACK_IMPORTED_MODULE_3__htmlToPlaintext_pipe__["a" /* HtmlToPlaintextPipe */],
            __WEBPACK_IMPORTED_MODULE_4__filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_5__camelCaseToDash_pipe__["a" /* CamelCaseToDashPipe */]
        ],
        imports: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__keys_pipe__["a" /* KeysPipe */],
            __WEBPACK_IMPORTED_MODULE_2__getById_pipe__["a" /* GetByIdPipe */],
            __WEBPACK_IMPORTED_MODULE_3__htmlToPlaintext_pipe__["a" /* HtmlToPlaintextPipe */],
            __WEBPACK_IMPORTED_MODULE_4__filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_5__camelCaseToDash_pipe__["a" /* CamelCaseToDashPipe */]
        ]
    })
], SMSFPipesModule);

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/core/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by pankajk on 8/2/2017.
 */



var AuthGuard = (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.userService.isLoggedIn()) {
            return true;
        }
        // Store the attempted URL for redirecting
        this.userService.redirectURL = url;
        // Navigate to the login page with extras
        this.router.navigate(['login'], { queryParams: { r: url } });
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_platform__ = __webpack_require__("../../../cdk/@angular/cdk/platform.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SMSFConfigService = (function () {
    /**
     * @param router
     * @param platform
     */
    function SMSFConfigService(router, platform) {
        var _this = this;
        this.router = router;
        this.platform = platform;
        // Set the default settings
        this.defaultSettings = {
            layout: {
                navigation: 'left',
                toolbar: 'below',
                footer: 'none' // 'above', 'below', none
            },
            colorClasses: {
                toolbar: 'md-white-500-bg',
                navbar: 'md-smsf-dark-800-bg',
                footer: 'md-smsf-dark-900-bg'
            },
            customScrollbars: true,
            routerAnimation: 'fadeIn'
        };
        /**
         * Disable Custom Scrollbars if Browser is Mobile
         */
        if (this.platform.ANDROID || this.platform.IOS) {
            this.defaultSettings.customScrollbars = false;
        }
        this.settings = Object.assign({}, this.defaultSettings);
        // Reload the default settings on every navigation start
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationStart */]) {
                _this.setSettings({ layout: _this.defaultSettings.layout });
            }
        });
        // Create the behavior subject
        this.onSettingsChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](this.settings);
    }
    /**
     * Sets settings
     * @param settings
     */
    SMSFConfigService.prototype.setSettings = function (settings) {
        this.settings = Object.assign({}, this.settings, settings);
        this.onSettingsChanged.next(this.settings);
    };
    return SMSFConfigService;
}());
SMSFConfigService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_cdk_platform__["a" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_cdk_platform__["a" /* Platform */]) === "function" && _b || Object])
], SMSFConfigService);

var _a, _b;
//# sourceMappingURL=config.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/global.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalService = (function () {
    function GlobalService() {
        this.setting = {};
        if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production == true) {
            this.apiHost = 'http://dev.befreecrm.com.au/yiiapp/pbackend/web';
        }
        else {
            // this.apiHost = 'http://api.smsfrecords.local/admin';
            this.apiHost = 'http://dev.befreecrm.com.au/yiiapp/pbackend/web';
        }
    }
    GlobalService.prototype.loadGlobalSettingsFromSessionStorage = function () {
        if (sessionStorage.getItem('frontend-setting') != null) {
            this.setting = JSON.parse(sessionStorage.getItem('frontend-setting'));
        }
    };
    return GlobalService;
}());
GlobalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], GlobalService);

//# sourceMappingURL=global.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/match-media.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFMatchMedia; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SMSFMatchMedia = (function () {
    function SMSFMatchMedia(observableMedia) {
        var _this = this;
        this.observableMedia = observableMedia;
        this.onMediaChange = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.activeMediaQuery = '';
        this.observableMedia.subscribe(function (change) {
            if (_this.activeMediaQuery !== change.mqAlias) {
                _this.activeMediaQuery = change.mqAlias;
                _this.onMediaChange.emit(change.mqAlias);
            }
        });
    }
    return SMSFMatchMedia;
}());
SMSFMatchMedia = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_flex_layout__["b" /* ObservableMedia */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_flex_layout__["b" /* ObservableMedia */]) === "function" && _a || Object])
], SMSFMatchMedia);

var _a;
//# sourceMappingURL=match-media.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/splash-screen.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFSplashScreenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var SMSFSplashScreenService = (function () {
    function SMSFSplashScreenService(animationBuilder, document, router) {
        var _this = this;
        this.animationBuilder = animationBuilder;
        this.document = document;
        this.router = router;
        this.splashScreenEl = this.document.body.querySelector('#smsf-splash-screen');
        var hideOnLoad = this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationEnd */]) {
                setTimeout(function () {
                    _this.hide();
                    hideOnLoad.unsubscribe();
                }, 0);
            }
        });
    }
    SMSFSplashScreenService.prototype.show = function () {
        var _this = this;
        this.player =
            this.animationBuilder
                .build([
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* style */])({
                    opacity: '0',
                    zIndex: '99999'
                }),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('400ms ease', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* style */])({ opacity: '1' }))
            ]).create(this.splashScreenEl);
        setTimeout(function () {
            _this.player.play();
        }, 0);
    };
    SMSFSplashScreenService.prototype.hide = function () {
        var _this = this;
        this.player =
            this.animationBuilder
                .build([
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* style */])({ opacity: '1' }),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('400ms ease', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* style */])({
                    opacity: '0',
                    zIndex: '-10'
                }))
            ]).create(this.splashScreenEl);
        setTimeout(function () {
            _this.player.play();
        }, 0);
    };
    return SMSFSplashScreenService;
}());
SMSFSplashScreenService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common__["DOCUMENT"])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_animations__["b" /* AnimationBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_animations__["b" /* AnimationBuilder */]) === "function" && _a || Object, Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */]) === "function" && _b || Object])
], SMSFSplashScreenService);

var _a, _b;
//# sourceMappingURL=splash-screen.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_service__ = __webpack_require__("../../../../../src/app/core/services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by pankajk on 8/2/2017.
 */










var UserService = (function () {
    function UserService(_globalService, _router, _authHttp) {
        this._globalService = _globalService;
        this._router = _router;
        this._authHttp = _authHttp;
        this.loggedIn = false;
        this.redirectURL = '';
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_8_angular2_jwt__["JwtHelper"]();
        this.loggedIn = this.isLoggedIn();
    }
    UserService.prototype.login = function (username, password) {
        var _this = this;
        // console.log(username, password);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json; charset=UTF-8');
        var val = this._authHttp
            .post(this._globalService.apiHost + '/user/login/userlogin', JSON.stringify({
            "LoginForm": {
                "username": username,
                "password": password
            }
        }), { headers: headers })
            .map(function (response) { return response.json(); })
            .map(function (response) {
            if (response.success) {
                localStorage.setItem('frontend-token', response.data.access_token);
                _this.loggedIn = true;
            }
            else {
                localStorage.removeItem('frontend-token');
                _this.loggedIn = false;
            }
            return response;
        })
            .catch(this.handleError);
        //console.log(val);
        return val;
    };
    UserService.prototype.signup = function (username, email, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json; charset=UTF-8');
        return this._authHttp
            .post(this._globalService.apiHost + '/user/signup', JSON.stringify({
            "SignupForm": {
                "username": username,
                "email": email,
                "password": password
            }
        }), { headers: headers })
            .map(function (response) { return response.json(); })
            .map(function (response) {
            if (response.success) {
            }
            else {
            }
            return response;
        })
            .catch(this.handleError);
    };
    UserService.prototype.signupConfirm = function (id, auth_key) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json; charset=UTF-8');
        return this._authHttp
            .post(this._globalService.apiHost + '/user/confirm', JSON.stringify({
            "SignupConfirmForm": {
                "id": id,
                "auth_key": auth_key,
            }
        }), { headers: headers })
            .map(function (response) { return response.json(); })
            .map(function (response) {
            if (response.success) {
            }
            else {
            }
            return response;
        })
            .catch(this.handleError);
    };
    UserService.prototype.passwordResetRequest = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json; charset=UTF-8');
        return this._authHttp
            .post(this._globalService.apiHost + '/user/password-reset-request', JSON.stringify({
            "PasswordResetRequestForm": {
                "email": email
            }
        }), { headers: headers })
            .map(function (response) { return response.json(); })
            .map(function (response) {
            if (response.success) {
            }
            else {
            }
            return response;
        })
            .catch(this.handleError);
    };
    UserService.prototype.passwordResetTokenVerification = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json; charset=UTF-8');
        return this._authHttp
            .post(this._globalService.apiHost + '/user/password-reset-token-verification', JSON.stringify({
            "PasswordResetTokenVerificationForm": {
                "token": token,
            }
        }), { headers: headers })
            .map(function (response) { return response.json(); })
            .map(function (response) {
            if (response.success) {
            }
            else {
            }
            return response;
        })
            .catch(this.handleError);
    };
    UserService.prototype.passwordReset = function (token, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json; charset=UTF-8');
        return this._authHttp
            .post(this._globalService.apiHost + '/user/password-reset', JSON.stringify({
            "PasswordResetForm": {
                "token": token,
                "password": password
            }
        }), { headers: headers })
            .map(function (response) { return response.json(); })
            .map(function (response) {
            if (response.success) {
            }
            else {
            }
            return response;
        })
            .catch(this.handleError);
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem('frontend-token');
        this.loggedIn = false;
    };
    UserService.prototype.getToken = function () {
        return localStorage.getItem('frontend-token');
    };
    UserService.prototype.checkToken = function () {
        return !!localStorage.getItem('frontend-token');
    };
    UserService.prototype.unauthorizedAccess = function (error) {
        this.logout();
        this._router.navigate(['/login']);
    };
    UserService.prototype.isLoggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_8_angular2_jwt__["tokenNotExpired"])('frontend-token');
    };
    UserService.prototype.getJWTValue = function () {
        if (this.isLoggedIn()) {
            var token = this.getToken();
            return this.jwtHelper.decodeToken(token);
        }
        else {
            return null;
        }
    };
    UserService.prototype.handleError = function (error) {
        var errorMessage = {};
        // Connection error
        if (error.status == 0) {
            errorMessage = {
                success: false,
                status: 0,
                data: "Sorry, there was a connection error occurred. Please try again.",
            };
        }
        else {
            errorMessage = error.json();
        }
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__["Observable"].throw(errorMessage);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["d" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/smsfUtils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFUtils; });
var SMSFUtils = (function () {
    function SMSFUtils() {
    }
    SMSFUtils.filterArrayByString = function (mainArr, searchText) {
        var _this = this;
        if (searchText === '') {
            return mainArr;
        }
        searchText = searchText.toLowerCase();
        return mainArr.filter(function (itemObj) {
            return _this.searchInObj(itemObj, searchText);
        });
    };
    SMSFUtils.searchInObj = function (itemObj, searchText) {
        for (var prop in itemObj) {
            if (!itemObj.hasOwnProperty(prop)) {
                continue;
            }
            var value = itemObj[prop];
            if (typeof value === 'string') {
                if (this.searchInSting(value, searchText)) {
                    return true;
                }
            }
            else if (Array.isArray(value)) {
                if (this.searchInArray(value, searchText)) {
                    return true;
                }
            }
            if (typeof value === 'object') {
                if (this.searchInObj(value, searchText)) {
                    return true;
                }
            }
        }
    };
    SMSFUtils.searchInArray = function (arr, searchText) {
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var value = arr_1[_i];
            if (typeof value === 'string') {
                if (this.searchInSting(value, searchText)) {
                    return true;
                }
            }
            if (typeof value === 'object') {
                if (this.searchInObj(value, searchText)) {
                    return true;
                }
            }
        }
    };
    SMSFUtils.searchInSting = function (value, searchText) {
        return value.toLowerCase().includes(searchText);
    };
    SMSFUtils.generateGUID = function () {
        function S4() {
            return (((1 + Math.random()) * 0x10000) || 0).toString(16).substring(1);
        }
        return (S4() + S4());
    };
    SMSFUtils.toggleInArray = function (item, array) {
        if (array.indexOf(item) === -1) {
            array.push(item);
        }
        else {
            array.splice(array.indexOf(item), 1);
        }
    };
    return SMSFUtils;
}());

//# sourceMappingURL=smsfUtils.js.map

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/bucket.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BucketModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__practice_response_practice_response_module__ = __webpack_require__("../../../../../src/app/main/content/bucket/practice_response/practice_response.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productivity_bucket_productivity_bucket_component__ = __webpack_require__("../../../../../src/app/main/content/bucket/productivity-bucket/productivity-bucket.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__practice_practice_component__ = __webpack_require__("../../../../../src/app/main/content/bucket/practice/practice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__job_job_component__ = __webpack_require__("../../../../../src/app/main/content/bucket/job/job.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__task_task_component__ = __webpack_require__("../../../../../src/app/main/content/bucket/task/task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pending_item_pending_item_component__ = __webpack_require__("../../../../../src/app/main/content/bucket/pending-item/pending-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reports_reports_component__ = __webpack_require__("../../../../../src/app/main/content/bucket/reports/reports.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var BucketModule = (function () {
    function BucketModule() {
    }
    return BucketModule;
}());
BucketModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__practice_response_practice_response_module__["a" /* Practice_responseModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__productivity_bucket_productivity_bucket_component__["a" /* ProductivityBucketComponent */], __WEBPACK_IMPORTED_MODULE_3__practice_practice_component__["a" /* PracticeComponent */], __WEBPACK_IMPORTED_MODULE_4__job_job_component__["a" /* JobComponent */], __WEBPACK_IMPORTED_MODULE_5__task_task_component__["a" /* TaskComponent */], __WEBPACK_IMPORTED_MODULE_6__pending_item_pending_item_component__["a" /* PendingItemComponent */], __WEBPACK_IMPORTED_MODULE_7__reports_reports_component__["a" /* ReportsComponent */]]
    })
], BucketModule);

//# sourceMappingURL=bucket.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/job/job.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  job works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/job/job.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/job/job.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JobComponent = (function () {
    function JobComponent() {
    }
    JobComponent.prototype.ngOnInit = function () {
    };
    return JobComponent;
}());
JobComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-job',
        template: __webpack_require__("../../../../../src/app/main/content/bucket/job/job.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/content/bucket/job/job.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], JobComponent);

//# sourceMappingURL=job.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/pending-item/pending-item.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  pending-item works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/pending-item/pending-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/pending-item/pending-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PendingItemComponent = (function () {
    function PendingItemComponent() {
    }
    PendingItemComponent.prototype.ngOnInit = function () {
    };
    return PendingItemComponent;
}());
PendingItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pending-item',
        template: __webpack_require__("../../../../../src/app/main/content/bucket/pending-item/pending-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/content/bucket/pending-item/pending-item.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PendingItemComponent);

//# sourceMappingURL=pending-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/practice/practice.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  practice works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/practice/practice.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/practice/practice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PracticeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PracticeComponent = (function () {
    function PracticeComponent() {
    }
    PracticeComponent.prototype.ngOnInit = function () {
    };
    return PracticeComponent;
}());
PracticeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-practice',
        template: __webpack_require__("../../../../../src/app/main/content/bucket/practice/practice.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/content/bucket/practice/practice.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PracticeComponent);

//# sourceMappingURL=practice.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/practice_response/practice_response.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"typography\" class=\"page-layout simple tabbed\" fxLayout=\"column\" perfect-scrollbar>\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header md-header-bg p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <md-icon class=\"secondary-text s-16\">home</md-icon>\r\n                <md-icon class=\"secondary-text s-16\">chevron_right</md-icon>\r\n                <span class=\"secondary-text\">Bucket</span>\r\n            </div>\r\n            <div class=\"h2 mt-16\">Bucket</div>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content\">\r\n\r\n        <md-tab-group md-dynamic-height=\"true\">\r\n\r\n            <md-tab label=\"Assigned Task\">\r\n                <smsf-assigned_task></smsf-assigned_task>\r\n\r\n            </md-tab>\r\n\r\n            <md-tab label=\"Internal Query\">\r\n\r\n                <smsf-internal_query></smsf-internal_query>\r\n\r\n            </md-tab>\r\n\r\n            <md-tab label=\"My Task\">\r\n\r\n                <smsf-my_task></smsf-my_task>\r\n\r\n            </md-tab>\r\n\r\n            <md-tab label=\"Practice Response\">\r\n\r\n                <smsf-total_practice_respone></smsf-total_practice_respone>\r\n\r\n            </md-tab>\r\n\r\n\r\n            <md-tab label=\"Unassign Task\">\r\n            <smsf-unassign_task></smsf-unassign_task>\r\n            </md-tab>\r\n\r\n        </md-tab-group>\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/practice_response/practice_response.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".md-header-bg {\n  background: #e8e8e8; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/practice_response/practice_response.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Practice_responseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Practice_responseComponent = (function () {
    function Practice_responseComponent() {
    }
    Practice_responseComponent.prototype.ngOnInit = function () {
    };
    return Practice_responseComponent;
}());
Practice_responseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'smsf-practice_response',
        template: __webpack_require__("../../../../../src/app/main/content/bucket/practice_response/practice_response.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/content/bucket/practice_response/practice_response.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], Practice_responseComponent);

//# sourceMappingURL=practice_response.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/practice_response/practice_response.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Practice_responseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_modules_shared_module__ = __webpack_require__("../../../../../src/app/core/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__practice_response_component__ = __webpack_require__("../../../../../src/app/main/content/bucket/practice_response/practice_response.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_assigned_task_assigned_task_component__ = __webpack_require__("../../../../../src/app/main/content/bucket/practice_response/tabs/assigned_task/assigned_task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_Internal_query_Internal_query_component__ = __webpack_require__("../../../../../src/app/main/content/bucket/practice_response/tabs/Internal_query/Internal_query.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_my_task_my_task_component__ = __webpack_require__("../../../../../src/app/main/content/bucket/practice_response/tabs/my_task/my_task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_total_practice_response_total_practice_response_component__ = __webpack_require__("../../../../../src/app/main/content/bucket/practice_response/tabs/total_practice_response/total_practice_response.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tabs_Unassign_task_Unassign_task_component__ = __webpack_require__("../../../../../src/app/main/content/bucket/practice_response/tabs/Unassign_task/Unassign_task.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'bucket/practice_response',
        component: __WEBPACK_IMPORTED_MODULE_3__practice_response_component__["a" /* Practice_responseComponent */]
    }
];
var Practice_responseModule = (function () {
    function Practice_responseModule() {
    }
    return Practice_responseModule;
}());
Practice_responseModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__core_modules_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forChild(routes)
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__practice_response_component__["a" /* Practice_responseComponent */],
            __WEBPACK_IMPORTED_MODULE_4__tabs_assigned_task_assigned_task_component__["a" /* Assigned_taskComponent */],
            __WEBPACK_IMPORTED_MODULE_5__tabs_Internal_query_Internal_query_component__["a" /* Internal_queryComponent */],
            __WEBPACK_IMPORTED_MODULE_6__tabs_my_task_my_task_component__["a" /* My_taskComponent */],
            __WEBPACK_IMPORTED_MODULE_7__tabs_total_practice_response_total_practice_response_component__["a" /* Total_practice_responseComponent */],
            __WEBPACK_IMPORTED_MODULE_8__tabs_Unassign_task_Unassign_task_component__["a" /* Unassign_taskComponent */]
        ]
    })
], Practice_responseModule);

//# sourceMappingURL=practice_response.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/practice_response/tabs/Internal_query/Internal_query.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Internal_queryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Internal_queryComponent = (function () {
    function Internal_queryComponent(http) {
        this.http = http;
        this.loadingIndicator = true;
        this.reorderable = true;
    }
    Internal_queryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://dev.befreecrm.com.au/yiiapp/pbackend/web/bucket/bucket/internalquery')
            .subscribe(function (contacts) {
            _this.rows = contacts.json().data;
            _this.loadingIndicator = false;
        });
    };
    return Internal_queryComponent;
}());
Internal_queryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'smsf-internal_query',
        template: __webpack_require__("../../../../../src/app/main/content/bucket/practice_response/tabs/Internal_query/internal_query.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/content/bucket/practice_response/tabs/Internal_query/internal_query.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], Internal_queryComponent);

var _a;
//# sourceMappingURL=Internal_query.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/practice_response/tabs/Internal_query/internal_query.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"ngx-datatable\" class=\"page-layout simple fullwidth\" perfect-scrollbar>\r\n\r\n\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <p class=\"mb-32\">\r\n            <b>Manage Practice Table</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry.\r\n        </p>\r\n\r\n        <ngx-datatable\r\n                class=\"material\"\r\n                [rows]=\"rows\"\r\n                [loadingIndicator]=\"loadingIndicator\"\r\n                [columnMode]=\"'force'\"\r\n                [headerHeight]=\"48\"\r\n                [footerHeight]=\"56\"\r\n                [rowHeight]=\"'auto'\"\r\n                [scrollbarH]=\"true\"\r\n                [reorderable]=\"reorderable\"\r\n                [selectionType]=\"'checkbox'\"\r\n                [limit]=\"10\">\r\n\r\n            <ngx-datatable-column [width]=\"48\"\r\n                                  [canAutoResize]=\"false\"\r\n                                  [sortable]=\"false\">\r\n                <ng-template ngx-datatable-header-template let-value=\"value\" let-allRowsSelected=\"allRowsSelected\"\r\n                             let-selectFn=\"selectFn\">\r\n                    <md-checkbox [checked]=\"allRowsSelected\" (change)=\"selectFn(!allRowsSelected)\"></md-checkbox>\r\n                </ng-template>\r\n\r\n                <ng-template ngx-datatable-cell-template let-value=\"value\" let-isSelected=\"isSelected\"\r\n                             let-onCheckboxChangeFn=\"onCheckboxChangeFn\">\r\n                    <md-checkbox [checked]=\"isSelected\" (change)=\"onCheckboxChangeFn($event)\"></md-checkbox>\r\n                </ng-template>\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Company Name\" prop=\"company_name\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Urgent\" prop=\"is_urgent\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Practice Urgent\" prop=\"is_practice_urgent\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"KnockBack\" prop=\"is_knockback\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Milestone Date\" prop=\"job_milestone_date\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Last Task\" prop=\"last_task\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Query Created on\" prop=\"first_query_created_on\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Query Sent count\" prop=\"querysentcount\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Pending Count\" prop=\"pendingcount\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"paused\" prop=\"is_paused\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"job paused on\" prop=\"job_paused_on\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"client name\" prop=\"clientName\">\r\n            </ngx-datatable-column>\r\n\r\n        </ngx-datatable>\r\n\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/practice_response/tabs/Internal_query/internal_query.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/practice_response/tabs/Unassign_task/Unassign_task.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"ngx-datatable\" class=\"page-layout simple fullwidth\" perfect-scrollbar>\r\n\r\n\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <p class=\"mb-32\">\r\n            <b>Manage Practice Table</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry.\r\n        </p>\r\n\r\n        <ngx-datatable\r\n                class=\"material\"\r\n                [rows]=\"rows\"\r\n                [loadingIndicator]=\"loadingIndicator\"\r\n                [columnMode]=\"'force'\"\r\n                [headerHeight]=\"48\"\r\n                [footerHeight]=\"56\"\r\n                [rowHeight]=\"'auto'\"\r\n                [scrollbarH]=\"true\"\r\n                [reorderable]=\"reorderable\"\r\n                [selectionType]=\"'checkbox'\"\r\n                [limit]=\"10\">\r\n\r\n            <ngx-datatable-column [width]=\"48\"\r\n                                  [canAutoResize]=\"false\"\r\n                                  [sortable]=\"false\">\r\n                <ng-template ngx-datatable-header-template let-value=\"value\" let-allRowsSelected=\"allRowsSelected\"\r\n                             let-selectFn=\"selectFn\">\r\n                    <md-checkbox [checked]=\"allRowsSelected\" (change)=\"selectFn(!allRowsSelected)\"></md-checkbox>\r\n                </ng-template>\r\n\r\n                <ng-template ngx-datatable-cell-template let-value=\"value\" let-isSelected=\"isSelected\"\r\n                             let-onCheckboxChangeFn=\"onCheckboxChangeFn\">\r\n                    <md-checkbox [checked]=\"isSelected\" (change)=\"onCheckboxChangeFn($event)\"></md-checkbox>\r\n                </ng-template>\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Company Name\" prop=\"company_name\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Task Name\" prop=\"task_name\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Job Type Name\" prop=\"jobTypeName\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Less Date\" prop=\"lessDate\">\r\n            </ngx-datatable-column>\r\n\r\n        </ngx-datatable>\r\n\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/practice_response/tabs/Unassign_task/Unassign_task.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/practice_response/tabs/Unassign_task/Unassign_task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Unassign_taskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Unassign_taskComponent = (function () {
    function Unassign_taskComponent(http) {
        this.http = http;
        this.loadingIndicator = true;
        this.reorderable = true;
    }
    Unassign_taskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://dev.befreecrm.com.au/yiiapp/pbackend/web/bucket/bucket/unassigntask')
            .subscribe(function (contacts) {
            _this.rows = contacts.json().data;
            _this.loadingIndicator = false;
        });
    };
    return Unassign_taskComponent;
}());
Unassign_taskComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'smsf-unassign_task',
        template: __webpack_require__("../../../../../src/app/main/content/bucket/practice_response/tabs/Unassign_task/Unassign_task.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/content/bucket/practice_response/tabs/Unassign_task/Unassign_task.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], Unassign_taskComponent);

var _a;
//# sourceMappingURL=Unassign_task.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/practice_response/tabs/assigned_task/assigned_task.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"ngx-datatable\" class=\"page-layout simple fullwidth\" perfect-scrollbar>\r\n\r\n\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <p class=\"mb-32\">\r\n            <b>Manage Practice Table</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry.\r\n        </p>\r\n        <input\r\n                type='text'\r\n                style='padding:8px;margin:15px auto;width:30%;'\r\n                placeholder='Type to filter the name column...'\r\n                (keyup)='updateFilter($event)'\r\n        />\r\n        <ngx-datatable\r\n                class=\"material\"\r\n                [rows]=\"rows\"\r\n                [loadingIndicator]=\"loadingIndicator\"\r\n                [columnMode]=\"'force'\"\r\n                [headerHeight]=\"48\"\r\n                [footerHeight]=\"56\"\r\n                [rowHeight]=\"'auto'\"\r\n                [scrollbarH]=\"true\"\r\n                [reorderable]=\"reorderable\"\r\n                [selectionType]=\"'checkbox'\"\r\n                [limit]=\"10\">\r\n\r\n            <ngx-datatable-column [width]=\"48\"\r\n                                  [canAutoResize]=\"false\"\r\n                                  [sortable]=\"false\">\r\n                <ng-template ngx-datatable-header-template let-value=\"value\" let-allRowsSelected=\"allRowsSelected\"\r\n                             let-selectFn=\"selectFn\">\r\n                    <md-checkbox [checked]=\"allRowsSelected\" (change)=\"selectFn(!allRowsSelected)\"></md-checkbox>\r\n                </ng-template>\r\n\r\n                <ng-template ngx-datatable-cell-template let-value=\"value\" let-isSelected=\"isSelected\"\r\n                             let-onCheckboxChangeFn=\"onCheckboxChangeFn\">\r\n                    <md-checkbox [checked]=\"isSelected\" (change)=\"onCheckboxChangeFn($event)\"></md-checkbox>\r\n                </ng-template>\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"ID\" prop=\"assignee_id\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"First Name\" prop=\"first_name\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Last Name\" prop=\"last_name\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Stage Id\" prop=\"task_stage_id\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Task Name\" prop=\"task_name\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Practice Name\" prop=\"practiceName\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Job Type Name\" prop=\"jobTypeName\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Task Type Name\" prop=\"taskTypeName\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Task Type Id\" prop=\"taskTypeId\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Job Type Id\" prop=\"jobTypeId\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Service Division\" prop=\"jobServiceDivision\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"lessdate\" prop=\"lessDate\">\r\n            </ngx-datatable-column>\r\n\r\n\r\n        </ngx-datatable>\r\n\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/practice_response/tabs/assigned_task/assigned_task.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/practice_response/tabs/assigned_task/assigned_task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Assigned_taskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Assigned_taskComponent = (function () {
    function Assigned_taskComponent(http) {
        this.http = http;
        this.loadingIndicator = true;
        this.reorderable = true;
        this.columns = [
            { prop: 'company_name' },
            { name: 'service_division' },
            { name: 'job_type_id' }
        ];
    }
    Assigned_taskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://dev.befreecrm.com.au/yiiapp/pbackend/web/bucket/bucket/assigntask')
            .subscribe(function (contacts) {
            _this.rows = contacts.json().data;
            _this.loadingIndicator = false;
        });
    };
    return Assigned_taskComponent;
}());
Assigned_taskComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'smsf-assigned_task',
        template: __webpack_require__("../../../../../src/app/main/content/bucket/practice_response/tabs/assigned_task/assigned_task.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/content/bucket/practice_response/tabs/assigned_task/assigned_task.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], Assigned_taskComponent);

var _a;
//# sourceMappingURL=assigned_task.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/practice_response/tabs/my_task/my_task.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"ngx-datatable\" class=\"page-layout simple fullwidth\" perfect-scrollbar>\r\n\r\n\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <p class=\"mb-32\">\r\n            <b>Manage Practice Table</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry.\r\n        </p>\r\n\r\n        <ngx-datatable\r\n                class=\"material\"\r\n                [rows]=\"rows\"\r\n                [loadingIndicator]=\"loadingIndicator\"\r\n                [columnMode]=\"'force'\"\r\n                [headerHeight]=\"48\"\r\n                [footerHeight]=\"56\"\r\n                [rowHeight]=\"'auto'\"\r\n                [scrollbarH]=\"true\"\r\n                [reorderable]=\"reorderable\"\r\n                [selectionType]=\"'checkbox'\"\r\n                [limit]=\"10\">\r\n\r\n            <ngx-datatable-column [width]=\"48\"\r\n                                  [canAutoResize]=\"false\"\r\n                                  [sortable]=\"false\">\r\n                <ng-template ngx-datatable-header-template let-value=\"value\" let-allRowsSelected=\"allRowsSelected\"\r\n                             let-selectFn=\"selectFn\">\r\n                    <md-checkbox [checked]=\"allRowsSelected\" (change)=\"selectFn(!allRowsSelected)\"></md-checkbox>\r\n                </ng-template>\r\n\r\n                <ng-template ngx-datatable-cell-template let-value=\"value\" let-isSelected=\"isSelected\"\r\n                             let-onCheckboxChangeFn=\"onCheckboxChangeFn\">\r\n                    <md-checkbox [checked]=\"isSelected\" (change)=\"onCheckboxChangeFn($event)\"></md-checkbox>\r\n                </ng-template>\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"ID\" prop=\"assignee_id\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Stage Id\" prop=\"task_stage_id\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Task Name\" prop=\"task_name\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Practice Name\" prop=\"practiceName\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Job Type Name\" prop=\"jobTypeName\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Task Type Name\" prop=\"taskTypeName\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Task Type Id\" prop=\"taskTypeId\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Job Type Id\" prop=\"jobTypeId\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Service Division\" prop=\"jobServiceDivision\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"lessdate\" prop=\"lessDate\">\r\n            </ngx-datatable-column>\r\n\r\n        </ngx-datatable>\r\n\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/practice_response/tabs/my_task/my_task.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/practice_response/tabs/my_task/my_task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return My_taskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var My_taskComponent = (function () {
    function My_taskComponent(http) {
        this.http = http;
        this.loadingIndicator = true;
        this.reorderable = true;
    }
    My_taskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://dev.befreecrm.com.au/yiiapp/pbackend/web/bucket/bucket/mytask')
            .subscribe(function (contacts) {
            _this.rows = contacts.json().data;
            _this.loadingIndicator = false;
        });
    };
    return My_taskComponent;
}());
My_taskComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'smsf-my_task',
        template: __webpack_require__("../../../../../src/app/main/content/bucket/practice_response/tabs/my_task/my_task.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/content/bucket/practice_response/tabs/my_task/my_task.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], My_taskComponent);

var _a;
//# sourceMappingURL=my_task.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/practice_response/tabs/total_practice_response/total_practice_response.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"ngx-datatable\" class=\"page-layout simple fullwidth\" perfect-scrollbar>\r\n\r\n\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <p class=\"mb-32\">\r\n            <b>Manage Practice Table</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry.\r\n        </p>\r\n\r\n        <ngx-datatable\r\n                class=\"material\"\r\n                [rows]=\"rows\"\r\n                [loadingIndicator]=\"loadingIndicator\"\r\n                [columnMode]=\"'force'\"\r\n                [headerHeight]=\"48\"\r\n                [footerHeight]=\"56\"\r\n                [rowHeight]=\"'auto'\"\r\n                [scrollbarH]=\"true\"\r\n                [reorderable]=\"reorderable\"\r\n                [selectionType]=\"'checkbox'\"\r\n                [limit]=\"10\">\r\n\r\n            <ngx-datatable-column [width]=\"48\"\r\n                                  [canAutoResize]=\"false\"\r\n                                  [sortable]=\"false\">\r\n                <ng-template ngx-datatable-header-template let-value=\"value\" let-allRowsSelected=\"allRowsSelected\"\r\n                             let-selectFn=\"selectFn\">\r\n                    <md-checkbox [checked]=\"allRowsSelected\" (change)=\"selectFn(!allRowsSelected)\"></md-checkbox>\r\n                </ng-template>\r\n\r\n                <ng-template ngx-datatable-cell-template let-value=\"value\" let-isSelected=\"isSelected\"\r\n                             let-onCheckboxChangeFn=\"onCheckboxChangeFn\">\r\n                    <md-checkbox [checked]=\"isSelected\" (change)=\"onCheckboxChangeFn($event)\"></md-checkbox>\r\n                </ng-template>\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Company Name\" prop=\"company_name\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Service_division\" prop=\"service_division\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Job Type\" prop=\"job_type_id\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Client Name\" prop=\"client_name\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Period\" prop=\"period\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Urgent\" prop=\"is_urgent\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Knockback\" prop=\"is_knockback\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Pr_urgent\" prop=\"is_practice_urgent\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Milestone\" prop=\"milestone_date\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"First Query created on\" prop=\"first_query_created_on\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"lessdate\" prop=\"lessDate\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"querysentcount\" prop=\"querysentcount\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"pendingcount\" prop=\"pendingcount\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"replied count1\" prop=\"repliedcount1\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"replied count2\" prop=\"repliedcount2\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"tr_QueryCount\" prop=\"transactionQueryCount\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Job Type string\" prop=\"job_type_string\">\r\n            </ngx-datatable-column>\r\n        </ngx-datatable>\r\n\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/practice_response/tabs/total_practice_response/total_practice_response.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/practice_response/tabs/total_practice_response/total_practice_response.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Total_practice_responseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Total_practice_responseComponent = (function () {
    function Total_practice_responseComponent(http) {
        this.http = http;
        this.loadingIndicator = true;
        this.reorderable = true;
    }
    Total_practice_responseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://dev.befreecrm.com.au/yiiapp/pbackend/web/bucket')
            .subscribe(function (contacts) {
            _this.rows = contacts.json().data;
            _this.loadingIndicator = false;
        });
    };
    return Total_practice_responseComponent;
}());
Total_practice_responseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'smsf-total_practice_respone',
        template: __webpack_require__("../../../../../src/app/main/content/bucket/practice_response/tabs/total_practice_response/total_practice_response.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/content/bucket/practice_response/tabs/total_practice_response/total_practice_response.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], Total_practice_responseComponent);

var _a;
//# sourceMappingURL=total_practice_response.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/productivity-bucket/productivity-bucket.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  productivity-bucket works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/productivity-bucket/productivity-bucket.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/productivity-bucket/productivity-bucket.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductivityBucketComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductivityBucketComponent = (function () {
    function ProductivityBucketComponent() {
    }
    ProductivityBucketComponent.prototype.ngOnInit = function () {
    };
    return ProductivityBucketComponent;
}());
ProductivityBucketComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-productivity-bucket',
        template: __webpack_require__("../../../../../src/app/main/content/bucket/productivity-bucket/productivity-bucket.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/content/bucket/productivity-bucket/productivity-bucket.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProductivityBucketComponent);

//# sourceMappingURL=productivity-bucket.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/reports/reports.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  reports works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/reports/reports.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/reports/reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportsComponent = (function () {
    function ReportsComponent() {
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    return ReportsComponent;
}());
ReportsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reports',
        template: __webpack_require__("../../../../../src/app/main/content/bucket/reports/reports.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/content/bucket/reports/reports.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ReportsComponent);

//# sourceMappingURL=reports.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/task/task.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  task works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/task/task.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/bucket/task/task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TaskComponent = (function () {
    function TaskComponent() {
    }
    TaskComponent.prototype.ngOnInit = function () {
    };
    return TaskComponent;
}());
TaskComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-task',
        template: __webpack_require__("../../../../../src/app/main/content/bucket/task/task.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/content/bucket/task/task.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TaskComponent);

//# sourceMappingURL=task.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/main/content/content.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  z-index: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_animations__ = __webpack_require__("../../../../../src/app/core/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_config_service__ = __webpack_require__("../../../../../src/app/core/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SMSFContentComponent = (function () {
    function SMSFContentComponent(router, activatedRoute, smsfConfig) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.smsfConfig = smsfConfig;
        this.routeAnimationUp = false;
        this.routeAnimationDown = false;
        this.routeAnimationRight = false;
        this.routeAnimationLeft = false;
        this.routeAnimationFade = false;
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; })
            .map(function () { return _this.activatedRoute; })
            .subscribe(function (event) {
            switch (_this.smsfSettings.routerAnimation) {
                case 'fadeIn':
                    _this.routeAnimationFade = !_this.routeAnimationFade;
                    break;
                case 'slideUp':
                    _this.routeAnimationUp = !_this.routeAnimationUp;
                    break;
                case 'slideDown':
                    _this.routeAnimationDown = !_this.routeAnimationDown;
                    break;
                case 'slideRight':
                    _this.routeAnimationRight = !_this.routeAnimationRight;
                    break;
                case 'slideLeft':
                    _this.routeAnimationLeft = !_this.routeAnimationLeft;
                    break;
            }
        });
        this.onSettingsChanged =
            this.smsfConfig.onSettingsChanged
                .subscribe(function (newSettings) {
                _this.smsfSettings = newSettings;
            });
    }
    SMSFContentComponent.prototype.ngOnInit = function () {
    };
    SMSFContentComponent.prototype.ngOnDestroy = function () {
        this.onSettingsChanged.unsubscribe();
    };
    return SMSFContentComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerTransitionUp'),
    __metadata("design:type", Object)
], SMSFContentComponent.prototype, "routeAnimationUp", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerTransitionDown'),
    __metadata("design:type", Object)
], SMSFContentComponent.prototype, "routeAnimationDown", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerTransitionRight'),
    __metadata("design:type", Object)
], SMSFContentComponent.prototype, "routeAnimationRight", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerTransitionLeft'),
    __metadata("design:type", Object)
], SMSFContentComponent.prototype, "routeAnimationLeft", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerTransitionFade'),
    __metadata("design:type", Object)
], SMSFContentComponent.prototype, "routeAnimationFade", void 0);
SMSFContentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'smsf-content',
        template: __webpack_require__("../../../../../src/app/main/content/content.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/content/content.component.scss")],
        animations: [
            __WEBPACK_IMPORTED_MODULE_2__core_animations__["a" /* Animations */].routerTransitionUp,
            __WEBPACK_IMPORTED_MODULE_2__core_animations__["a" /* Animations */].routerTransitionDown,
            __WEBPACK_IMPORTED_MODULE_2__core_animations__["a" /* Animations */].routerTransitionRight,
            __WEBPACK_IMPORTED_MODULE_2__core_animations__["a" /* Animations */].routerTransitionLeft,
            __WEBPACK_IMPORTED_MODULE_2__core_animations__["a" /* Animations */].routerTransitionFade
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__core_services_config_service__["a" /* SMSFConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_services_config_service__["a" /* SMSFConfigService */]) === "function" && _c || Object])
], SMSFContentComponent);

var _a, _b, _c;
//# sourceMappingURL=content.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/content/pages/authentication/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"forgot-password\" fxLayout=\"column\" perfect-scrollbar>\r\n\r\n    <div id=\"forgot-password-form-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\r\n        <div id=\"forgot-password-form\">\r\n\r\n            <div class=\"logo\">\r\n                <img src=\"../../../../../../assets/images/logos/logo.svg\">\r\n            </div>\r\n\r\n            <div class=\"title\">RECOVER YOUR PASSWORD</div>\r\n\r\n            <form name=\"forgotPasswordForm\" [formGroup]=\"forgotPasswordForm\" novalidate>\r\n\r\n                <md-input-container>\r\n                    <input mdInput placeholder=\"Email\" formControlName=\"email\">\r\n                    <md-error *ngIf=\"forgotPasswordFormErrors.email.required\">\r\n                        Email is required\r\n                    </md-error>\r\n                    <md-error *ngIf=\"!forgotPasswordFormErrors.email.required && forgotPasswordFormErrors.email.email\">\r\n                        Please enter a valid email address\r\n                    </md-error>\r\n                </md-input-container>\r\n\r\n                <button md-raised-button class=\"submit-button\" color=\"accent\"\r\n                        aria-label=\"SEND RESET LINK\" [disabled]=\"forgotPasswordForm.invalid\">\r\n                    SEND RESET LINK\r\n                </button>\r\n            </form>\r\n\r\n            <div class=\"login\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                <a class=\"link\" [routerLink]=\"'/pages/auth/login'\">Go back to login</a>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/content/pages/authentication/forgot-password/forgot-password.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Applies styles for users in high contrast mode. Note that this only applies\r\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\r\n * attribute, however Chrome handles high contrast differently.\r\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\r\n * This mixin adds the correct panel transform styles based\r\n * on the direction that the menu panel opens.\r\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\r\n * This mixin contains shared option styles between the select and\r\n * autocomplete components.\r\n */\n:host #forgot-password {\n  width: 100%;\n  overflow: auto;\n  background: url(" + __webpack_require__("../../../../../src/assets/images/backgrounds/login.jpg") + ") no-repeat;\n  background-size: cover; }\n  :host #forgot-password #forgot-password-form-wrapper {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    padding: 32px; }\n    @media screen and (max-width: 599px) {\n      :host #forgot-password #forgot-password-form-wrapper {\n        padding: 16px; } }\n    :host #forgot-password #forgot-password-form-wrapper #forgot-password-form {\n      width: 384px;\n      max-width: 384px;\n      padding: 32px;\n      text-align: center;\n      background: #FFFFFF;\n      box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n      @media screen and (max-width: 599px) {\n        :host #forgot-password #forgot-password-form-wrapper #forgot-password-form {\n          padding: 24px;\n          width: 100%; } }\n      :host #forgot-password #forgot-password-form-wrapper #forgot-password-form .logo {\n        line-height: 128px;\n        margin: 32px auto; }\n      :host #forgot-password #forgot-password-form-wrapper #forgot-password-form .title {\n        font-size: 20px;\n        margin: 16px 0 32px 0; }\n      :host #forgot-password #forgot-password-form-wrapper #forgot-password-form form {\n        width: 100%;\n        text-align: left; }\n        :host #forgot-password #forgot-password-form-wrapper #forgot-password-form form md-input-container {\n          width: 100%; }\n        :host #forgot-password #forgot-password-form-wrapper #forgot-password-form form .submit-button {\n          width: 220px;\n          margin: 16px auto;\n          display: block; }\n          @media screen and (max-width: 599px) {\n            :host #forgot-password #forgot-password-form-wrapper #forgot-password-form form .submit-button {\n              width: 90%; } }\n      :host #forgot-password #forgot-password-form-wrapper #forgot-password-form .login {\n        margin: 32px auto 24px auto;\n        width: 250px;\n        font-weight: 500; }\n        :host #forgot-password #forgot-password-form-wrapper #forgot-password-form .login .text {\n          margin-right: 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/pages/authentication/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_config_service__ = __webpack_require__("../../../../../src/app/core/services/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SMSFForgotPasswordComponent = (function () {
    function SMSFForgotPasswordComponent(SMSFConfig, formBuilder) {
        this.SMSFConfig = SMSFConfig;
        this.formBuilder = formBuilder;
        this.SMSFConfig.setSettings({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
        this.forgotPasswordFormErrors = {
            email: {}
        };
    }
    SMSFForgotPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.forgotPasswordForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email]]
        });
        this.forgotPasswordForm.valueChanges.subscribe(function () {
            _this.onForgotPasswordFormValuesChanged();
        });
    };
    SMSFForgotPasswordComponent.prototype.onForgotPasswordFormValuesChanged = function () {
        for (var field in this.forgotPasswordFormErrors) {
            if (!this.forgotPasswordFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.forgotPasswordFormErrors[field] = {};
            // Get the control
            var control = this.forgotPasswordFormErrors.get(field);
            if (control && control.dirty && !control.valid) {
                this.forgotPasswordFormErrors[field] = control.errors;
            }
        }
    };
    return SMSFForgotPasswordComponent;
}());
SMSFForgotPasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'smsf-forgot-password',
        template: __webpack_require__("../../../../../src/app/main/content/pages/authentication/forgot-password/forgot-password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/content/pages/authentication/forgot-password/forgot-password.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_services_config_service__["a" /* SMSFConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_services_config_service__["a" /* SMSFConfigService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _b || Object])
], SMSFForgotPasswordComponent);

var _a, _b;
//# sourceMappingURL=forgot-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/content/pages/authentication/forgot-password/forgot-password.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_modules_shared_module__ = __webpack_require__("../../../../../src/app/core/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_password_component__ = __webpack_require__("../../../../../src/app/main/content/pages/authentication/forgot-password/forgot-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'pages/auth/forgot-password',
        component: __WEBPACK_IMPORTED_MODULE_3__forgot_password_component__["a" /* SMSFForgotPasswordComponent */]
    }
];
var ForgotPasswordModule = (function () {
    function ForgotPasswordModule() {
    }
    return ForgotPasswordModule;
}());
ForgotPasswordModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__forgot_password_component__["a" /* SMSFForgotPasswordComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__core_modules_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forChild(routes)
        ]
    })
], ForgotPasswordModule);

//# sourceMappingURL=forgot-password.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/content/pages/authentication/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"login\" fxLayout=\"row\" fxLayoutAlign=\"start\">\r\n\r\n    <div id=\"login-intro\" fxFlex fxHide fxShow.gt-xs>\r\n        <div class=\"logo\">\r\n            <img src=\"../../../../../../assets/images/logos/logo.svg\">\r\n        </div>\r\n\r\n        <div class=\"title\">\r\n            Welcome to the SMSF Records!\r\n        </div>\r\n\r\n        <div class=\"description\">\r\n            At Super Records, we believe that outsourcing should be as quick & easy as plugging in an extension.\r\n            Our service model is built on the pillars of flexibility, reliability and accountability.\r\n        </div>\r\n    </div>\r\n\r\n    <div id=\"login-form-wrapper\" perfect-scrollbar>\r\n\r\n        <div id=\"login-form\">\r\n\r\n            <div class=\"logo\" fxHide.gt-xs>\r\n                <span>F</span>\r\n            </div>\r\n\r\n            <div class=\"title\">LOGIN TO YOUR ACCOUNT</div>\r\n            <div class=\"description\">Admin Login Description</div>\r\n\r\n            <form name=\"loginForm\" [formGroup]=\"loginForm\" (ngSubmit)=\"submitForm(loginForm.value)\" novalidate>\r\n\r\n                <md-input-container>\r\n                    <input mdInput placeholder=\"Email\" formControlName=\"email\">\r\n                    <md-error *ngIf=\"loginFormErrors.email.required\">\r\n                        Email is required\r\n                    </md-error>\r\n                    <md-error *ngIf=\"!loginFormErrors.email.required && loginFormErrors.email.email\">\r\n                        Please enter a valid email address\r\n                    </md-error>\r\n                </md-input-container>\r\n\r\n                <md-input-container>\r\n                    <input mdInput placeholder=\"Password\" formControlName=\"password\">\r\n                    <md-error *ngIf=\"loginFormErrors.password.required\">\r\n                        Password is required\r\n                    </md-error>\r\n                </md-input-container>\r\n\r\n                <div class=\"remember-forgot-password\" fxLayout=\"row\" fxLayout.xs=\"column\"\r\n                     fxLayoutAlign=\"space-between center\">\r\n                    <md-checkbox class=\"remember-me\" aria-label=\"Remember Me\">\r\n                        Remember Me\r\n                    </md-checkbox>\r\n\r\n                    <a class=\"forgot-password\" [routerLink]=\"'/pages/auth/forgot-password'\">\r\n                        Forgot Password?\r\n                    </a>\r\n                    <br/>\r\n                    <a class=\"forgot-password\" [routerLink]=\"'/app/dashboard/project'\">\r\n                      Dashboard\r\n                    </a>\r\n                </div>\r\n\r\n                <button md-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"LOGIN\"\r\n                        [disabled]=\"loginForm.invalid\">\r\n                    LOGIN\r\n                </button>\r\n\r\n            </form>\r\n\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/content/pages/authentication/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Applies styles for users in high contrast mode. Note that this only applies\r\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\r\n * attribute, however Chrome handles high contrast differently.\r\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\r\n * This mixin adds the correct panel transform styles based\r\n * on the direction that the menu panel opens.\r\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\r\n * This mixin contains shared option styles between the select and\r\n * autocomplete components.\r\n */\n:host #login {\n  width: 100%;\n  overflow: hidden;\n  background: url(" + __webpack_require__("../../../../../src/assets/images/backgrounds/login.jpg") + ") no-repeat;\n  background-size: cover; }\n  :host #login #login-intro {\n    padding: 128px; }\n    @media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #login #login-intro {\n        padding: 128px 64px; } }\n    :host #login #login-intro .logo {\n      width: 300px;\n      line-height: 128px;\n      margin-bottom: 32px;\n      text-align: center; }\n    :host #login #login-intro .title {\n      font-size: 42px;\n      font-weight: 300;\n      line-height: 1;\n      color: #ffffff; }\n    :host #login #login-intro .description {\n      padding-top: 8px;\n      font-size: 16px;\n      max-width: 600px;\n      color: #ffffff; }\n  :host #login #login-form-wrapper {\n    width: 450px;\n    min-width: 400px;\n    max-width: 400px;\n    height: 100%;\n    background: #FFFFFF;\n    box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n    @media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #login #login-form-wrapper {\n        width: 360px;\n        min-width: 360px;\n        max-width: 360px; } }\n    @media screen and (max-width: 599px) {\n      :host #login #login-form-wrapper {\n        width: 100%;\n        min-width: 100%;\n        max-width: 100%; } }\n    :host #login #login-form-wrapper #login-form {\n      padding: 128px 48px 48px 48px; }\n      @media screen and (max-width: 599px) {\n        :host #login #login-form-wrapper #login-form {\n          text-align: center;\n          padding: 24px; } }\n      :host #login #login-form-wrapper #login-form .logo {\n        width: 128px;\n        height: 128px;\n        line-height: 128px;\n        font-size: 86px;\n        font-weight: 500;\n        text-align: center;\n        margin: 32px auto;\n        color: #FFFFFF;\n        border-radius: 2px;\n        background: #039be5; }\n      :host #login #login-form-wrapper #login-form .title {\n        font-size: 21px; }\n      :host #login #login-form-wrapper #login-form .description {\n        padding-top: 8px; }\n      :host #login #login-form-wrapper #login-form form {\n        width: 100%;\n        padding-top: 32px; }\n        :host #login #login-form-wrapper #login-form form md-input-container {\n          width: 100%; }\n          @media screen and (max-width: 599px) {\n            :host #login #login-form-wrapper #login-form form md-input-container {\n              width: 80%; } }\n        :host #login #login-form-wrapper #login-form form md-checkbox {\n          margin: 0; }\n        :host #login #login-form-wrapper #login-form form .remember-forgot-password {\n          font-size: 13px;\n          margin-top: 8px; }\n          :host #login #login-form-wrapper #login-form form .remember-forgot-password .remember-me {\n            margin-bottom: 16px; }\n          :host #login #login-form-wrapper #login-form form .remember-forgot-password .forgot-password {\n            font-size: 13px;\n            font-weight: 500;\n            margin-bottom: 16px; }\n        :host #login #login-form-wrapper #login-form form .submit-button {\n          width: 100%;\n          margin: 16px auto;\n          display: block; }\n          @media screen and (max-width: 599px) {\n            :host #login #login-form-wrapper #login-form form .submit-button {\n              width: 80%; } }\n      :host #login #login-form-wrapper #login-form .separator {\n        font-size: 15px;\n        font-weight: 600;\n        margin: 24px auto;\n        position: relative;\n        overflow: hidden;\n        width: 100px;\n        text-align: center;\n        color: rgba(0, 0, 0, 0.54); }\n        :host #login #login-form-wrapper #login-form .separator .text {\n          display: -webkit-inline-box;\n          display: -ms-inline-flexbox;\n          display: inline-flex;\n          position: relative;\n          padding: 0 8px;\n          z-index: 9999; }\n          :host #login #login-form-wrapper #login-form .separator .text:before, :host #login #login-form-wrapper #login-form .separator .text:after {\n            content: '';\n            display: block;\n            width: 30px;\n            position: absolute;\n            top: 10px;\n            border-top: 1px solid rgba(0, 0, 0, 0.12); }\n          :host #login #login-form-wrapper #login-form .separator .text:before {\n            right: 100%; }\n          :host #login #login-form-wrapper #login-form .separator .text:after {\n            left: 100%; }\n      :host #login #login-form-wrapper #login-form button.google, :host #login #login-form-wrapper #login-form button.facebook {\n        width: 70%;\n        text-transform: none;\n        color: #FFFFFF;\n        font-size: 13px; }\n        @media screen and (max-width: 599px) {\n          :host #login #login-form-wrapper #login-form button.google, :host #login #login-form-wrapper #login-form button.facebook {\n            width: 60%; } }\n        :host #login #login-form-wrapper #login-form button.google md-icon, :host #login #login-form-wrapper #login-form button.facebook md-icon {\n          color: #FFFFFF;\n          margin: 0 8px 0 0; }\n      :host #login #login-form-wrapper #login-form button.google {\n        background-color: #D73D32;\n        margin-bottom: 8px; }\n      :host #login #login-form-wrapper #login-form button.facebook {\n        background-color: #3f5c9a; }\n      :host #login #login-form-wrapper #login-form .register {\n        margin: 32px auto 24px auto;\n        width: 250px;\n        font-weight: 500; }\n        :host #login #login-form-wrapper #login-form .register .text {\n          margin-right: 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/pages/authentication/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_config_service__ = __webpack_require__("../../../../../src/app/core/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_user_service__ = __webpack_require__("../../../../../src/app/core/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SMSFLoginComponent = (function () {
    function SMSFLoginComponent(SMSFConfig, formBuilder, userService, router, activatedRoute) {
        this.SMSFConfig = SMSFConfig;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.submitted = false;
        this.errorMessage = '';
        this.SMSFConfig.setSettings({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
        this.loginFormErrors = {
            email: {},
            password: {}
        };
    }
    SMSFLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]
        });
        this.loginForm.valueChanges.subscribe(function () {
            _this.onLoginFormValuesChanged();
        });
        this._resetFormErrors();
        this.userService.logout();
        var token = localStorage.getItem('jwt');
    };
    SMSFLoginComponent.prototype.onLoginFormValuesChanged = function () {
        for (var field in this.loginFormErrors) {
            if (!this.loginFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.loginFormErrors[field] = {};
            // Get the control
            var control = this.loginForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.loginFormErrors[field] = control.errors;
            }
        }
    };
    //check form error
    SMSFLoginComponent.prototype._setFormErrors = function (errorFields) {
        for (var key in errorFields) {
            // skip loop if the property is from prototype
            if (!errorFields.hasOwnProperty(key))
                continue;
            var message = errorFields[key];
            this.loginFormErrors[key].valid = false;
            this.loginFormErrors[key].message = message;
        }
    };
    //reset if no error
    SMSFLoginComponent.prototype._resetFormErrors = function () {
        this.loginFormErrors = {
            email: { valid: true, message: '' },
            password: { valid: true, message: '' },
        };
    };
    // check
    SMSFLoginComponent.prototype._isValid = function (field) {
        var isValid = false;
        // If the field is not touched and invalid, it is considered as initial loaded form. Thus set as true
        if (this.loginForm.controls[field].touched == false) {
            isValid = true;
        }
        else if (this.loginForm.controls[field].touched == true && this.loginForm.controls[field].valid == true) {
            isValid = true;
        }
        return isValid;
    };
    SMSFLoginComponent.prototype.onValueChanged = function (data) {
        if (!this.loginForm) {
            return;
        }
        var form = this.loginForm;
        for (var field in this.loginFormErrors) {
            // clear previous error message (if any)
            var control = form.get(field);
            if (control && control.dirty) {
                this.loginFormErrors[field].valid = true;
                this.loginFormErrors[field].message = '';
            }
        }
    };
    SMSFLoginComponent.prototype.submitForm = function (elementValues) {
        var _this = this;
        this.submitted = true;
        this.userService.login(elementValues.email, elementValues.password)
            .subscribe(function (result) {
            if (result.success) {
                _this.router.navigate(["./bucket/practice_response"]);
            }
            else {
                _this.errorMessage = 'Username or password is incorrect.';
                _this.submitted = false;
            }
        }, function (error) {
            _this.submitted = false;
            // Validation error
            if (error.status == 422) {
                _this._resetFormErrors();
                // this._errorMessage = "There was an error on submission. Please check again.";
                var errorFields = JSON.parse(error.data.message);
                _this._setFormErrors(errorFields);
            }
            else {
                _this.errorMessage = error.data;
                //console.log(this.errorMessage);
            }
        });
    };
    return SMSFLoginComponent;
}());
SMSFLoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'smsf-login',
        template: __webpack_require__("../../../../../src/app/main/content/pages/authentication/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/content/pages/authentication/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__core_services_config_service__["a" /* SMSFConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_services_config_service__["a" /* SMSFConfigService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__core_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], SMSFLoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/content/pages/authentication/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_modules_shared_module__ = __webpack_require__("../../../../../src/app/core/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_modules_auth_module__ = __webpack_require__("../../../../../src/app/core/modules/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_component__ = __webpack_require__("../../../../../src/app/main/content/pages/authentication/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'pages/auth/login',
        component: __WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* SMSFLoginComponent */]
    }
];
var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* SMSFLoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__core_modules_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__core_modules_auth_module__["a" /* AuthModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* RouterModule */].forChild(routes)
        ]
    })
], LoginModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/content/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_login_login_module__ = __webpack_require__("../../../../../src/app/main/content/pages/authentication/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_forgot_password_forgot_password_module__ = __webpack_require__("../../../../../src/app/main/content/pages/authentication/forgot-password/forgot-password.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            // Auth
            __WEBPACK_IMPORTED_MODULE_1__authentication_login_login_module__["a" /* LoginModule */],
            __WEBPACK_IMPORTED_MODULE_2__authentication_forgot_password_forgot_password_module__["a" /* ForgotPasswordModule */]
        ]
    })
], PagesModule);

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/content/practice/components-third-party.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsThirdPartyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_modules_shared_module__ = __webpack_require__("../../../../../src/app/core/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datatable_manage_practice_component__ = __webpack_require__("../../../../../src/app/main/content/practice/datatable/manage_practice.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'practice/datatables/manage_practice',
        component: __WEBPACK_IMPORTED_MODULE_3__datatable_manage_practice_component__["a" /* SMSFManagePracticeComponent */]
    }
];
var ComponentsThirdPartyModule = (function () {
    function ComponentsThirdPartyModule() {
    }
    return ComponentsThirdPartyModule;
}());
ComponentsThirdPartyModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__core_modules_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forChild(routes)
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__datatable_manage_practice_component__["a" /* SMSFManagePracticeComponent */]
        ]
    })
], ComponentsThirdPartyModule);

//# sourceMappingURL=components-third-party.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/content/practice/datatable/manage_practice.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"ngx-datatable\" class=\"page-layout simple fullwidth\" perfect-scrollbar>\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header md-header-bg p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <md-icon class=\"secondary-text s-16\">home</md-icon>\r\n                <md-icon class=\"secondary-text s-16\">chevron_right</md-icon>\r\n                <span class=\"secondary-text\">Practice</span>\r\n                <md-icon class=\"secondary-text s-16\">chevron_right</md-icon>\r\n                <span class=\"secondary-text\">Manage Practice</span>\r\n            </div>\r\n            <div class=\"h2 mt-16\">Manage Practice Table</div>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <p class=\"mb-32\">\r\n            <b>Manage Practice Table</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry.\r\n        </p>\r\n\r\n        <ngx-datatable\r\n            class=\"material\"\r\n            [rows]=\"rows\"\r\n            [loadingIndicator]=\"loadingIndicator\"\r\n            [columnMode]=\"'force'\"\r\n            [headerHeight]=\"48\"\r\n            [footerHeight]=\"56\"\r\n            [rowHeight]=\"'auto'\"\r\n            [scrollbarH]=\"true\"\r\n            [reorderable]=\"reorderable\"\r\n            [selectionType]=\"'checkbox'\"\r\n            [limit]=\"10\">\r\n\r\n            <ngx-datatable-column [width]=\"48\"\r\n                                  [canAutoResize]=\"false\"\r\n                                  [sortable]=\"false\">\r\n                <ng-template ngx-datatable-header-template let-value=\"value\" let-allRowsSelected=\"allRowsSelected\"\r\n                             let-selectFn=\"selectFn\">\r\n                    <md-checkbox [checked]=\"allRowsSelected\" (change)=\"selectFn(!allRowsSelected)\"></md-checkbox>\r\n                </ng-template>\r\n\r\n                <ng-template ngx-datatable-cell-template let-value=\"value\" let-isSelected=\"isSelected\"\r\n                             let-onCheckboxChangeFn=\"onCheckboxChangeFn\">\r\n                    <md-checkbox [checked]=\"isSelected\" (change)=\"onCheckboxChangeFn($event)\"></md-checkbox>\r\n                </ng-template>\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Company Name\" prop=\"company_name\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Service_division\" prop=\"service_division\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Job Type\" prop=\"job_type_id\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Client Name\" prop=\"client_name\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Period\" prop=\"period\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Urgent\" prop=\"is_urgent\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Knockback\" prop=\"is_knockback\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Pr_urgent\" prop=\"is_practice_urgent\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Milestone\" prop=\"milestone_date\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"First Query created on\" prop=\"first_query_created_on\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"lessdate\" prop=\"lessDate\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"querysentcount\" prop=\"querysentcount\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"pendingcount\" prop=\"pendingcount\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"replied count1\" prop=\"repliedcount1\">\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"replied count2\" prop=\"repliedcount2\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"tr_QueryCount\" prop=\"transactionQueryCount\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Job Type string\" prop=\"job_type_string\">\r\n            </ngx-datatable-column>\r\n        </ngx-datatable>\r\n\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/main/content/practice/datatable/manage_practice.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".md-header-bg {\n  background: #e8e8e8; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/practice/datatable/manage_practice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFManagePracticeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SMSFManagePracticeComponent = (function () {
    function SMSFManagePracticeComponent(http) {
        this.http = http;
        this.loadingIndicator = true;
        this.reorderable = true;
    }
    SMSFManagePracticeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://dev.befreecrm.com.au/yiiapp/pbackend/web/bucket')
            .subscribe(function (contacts) {
            _this.rows = contacts.json().data;
            _this.loadingIndicator = false;
        });
    };
    return SMSFManagePracticeComponent;
}());
SMSFManagePracticeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'smsf-manage_practice',
        template: __webpack_require__("../../../../../src/app/main/content/practice/datatable/manage_practice.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/content/practice/datatable/manage_practice.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], SMSFManagePracticeComponent);

var _a;
//# sourceMappingURL=manage_practice.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/content/sample/sample.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout blank p-24\" perfect-scrollbar>\r\n\r\n    <h2>Sample Page</h2>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/content/sample/sample.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/sample/sample.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFSampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SMSFSampleComponent = (function () {
    function SMSFSampleComponent() {
    }
    return SMSFSampleComponent;
}());
SMSFSampleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'smsf-sample',
        template: __webpack_require__("../../../../../src/app/main/content/sample/sample.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/content/sample/sample.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SMSFSampleComponent);

//# sourceMappingURL=sample.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/content/sample/sample.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFSampleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_modules_shared_module__ = __webpack_require__("../../../../../src/app/core/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sample_component__ = __webpack_require__("../../../../../src/app/main/content/sample/sample.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'sample',
        component: __WEBPACK_IMPORTED_MODULE_3__sample_component__["a" /* SMSFSampleComponent */]
    }
];
var SMSFSampleModule = (function () {
    function SMSFSampleModule() {
    }
    return SMSFSampleModule;
}());
SMSFSampleModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__sample_component__["a" /* SMSFSampleComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__core_modules_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__sample_component__["a" /* SMSFSampleComponent */]
        ]
    })
], SMSFSampleModule);

//# sourceMappingURL=sample.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar class=\"mat-elevation-z1\">\r\n    <span>Footer</span>\r\n</md-toolbar>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  z-index: 3; }\n  :host .mat-toolbar {\n    background: inherit;\n    color: inherit; }\n  :host.above {\n    position: relative;\n    z-index: 99; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SMSFFooterComponent = (function () {
    function SMSFFooterComponent() {
    }
    SMSFFooterComponent.prototype.ngOnInit = function () {
    };
    return SMSFFooterComponent;
}());
SMSFFooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'smsf-footer',
        template: __webpack_require__("../../../../../src/app/main/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SMSFFooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container>\r\n\r\n    <div id=\"smsf-main-content\" fxFlexFill>\r\n\r\n        <!-- TOOLBAR: Above -->\r\n        <ng-container *ngIf=\"smsfSettings.layout.toolbar === 'above'\">\r\n            <smsf-toolbar class=\"above\" [class]=\"smsfSettings.colorClasses.toolbar\"></smsf-toolbar>\r\n        </ng-container>\r\n        <!-- / TOOLBAR: Above -->\r\n\r\n        <div id=\"wrapper\">\r\n            <smsf-navbar [folded]=\"false\"\r\n                         class=\"left-navbar\"\r\n                         *ngIf=\"smsfSettings.layout.navigation === 'left'\"\r\n                         [class]=\"smsfSettings.colorClasses.navbar\">\r\n            </smsf-navbar>\r\n\r\n            <div class=\"content-wrapper\">\r\n\r\n                <!-- TOOLBAR: Below -->\r\n                <ng-container *ngIf=\"smsfSettings.layout.toolbar === 'below'\">\r\n                    <smsf-toolbar class=\"below\" [class]=\"smsfSettings.colorClasses.toolbar\"></smsf-toolbar>\r\n                </ng-container>\r\n                <!-- / TOOLBAR: Below -->\r\n\r\n                <smsf-content></smsf-content>\r\n\r\n                <!-- FOOTER: Below -->\r\n                <ng-container *ngIf=\"smsfSettings.layout.footer === 'below'\">\r\n                    <smsf-footer class=\"below\" [class]=\"smsfSettings.colorClasses.footer\"></smsf-footer>\r\n                </ng-container>\r\n                <!-- / FOOTER: Below -->\r\n\r\n            </div>\r\n\r\n            <smsf-navbar [folded]=\"false\" class=\"md-primary-700-bg right-navbar\" *ngIf=\"smsfSettings.layout.navigation === 'right'\"></smsf-navbar>\r\n\r\n        </div>\r\n\r\n        <!-- FOOTER: Above -->\r\n        <ng-container *ngIf=\"smsfSettings.layout.footer === 'above'\">\r\n            <smsf-footer class=\"above\" [class]=\"smsfSettings.colorClasses.footer\"></smsf-footer>\r\n        </ng-container>\r\n        <!-- FOOTER: Above -->\r\n\r\n    </div>\r\n\r\n    <!-- QUICK PANEL -->\r\n    <md-sidenav smsfMdSidenavHelper=\"quick-panel\" align=\"end\">\r\n        <smsf-quick-panel></smsf-quick-panel>\r\n    </md-sidenav>\r\n    <!-- / QUICK PANEL -->\r\n\r\n</md-sidenav-container>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Applies styles for users in high contrast mode. Note that this only applies\r\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\r\n * attribute, however Chrome handles high contrast differently.\r\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\r\n * This mixin adds the correct panel transform styles based\r\n * on the direction that the menu panel opens.\r\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\r\n * This mixin contains shared option styles between the select and\r\n * autocomplete components.\r\n */\nsmsf-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  height: 100%; }\n  smsf-main.disable-perfect-scrollbar .ps {\n    -webkit-overflow-scrolling: touch !important;\n    overflow: auto !important; }\n  smsf-main.disable-perfect-scrollbar .ps__scrollbar-x-rail,\n  smsf-main.disable-perfect-scrollbar .ps__scrollbar-y-rail {\n    display: none !important; }\n  smsf-main > .mat-sidenav-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n    smsf-main > .mat-sidenav-container > .mat-sidenav-content,\n    smsf-main > .mat-sidenav-container > .mat-drawer-content {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      overflow: hidden;\n      height: 100vh; }\n      @media (max-width: 959px) {\n        smsf-main > .mat-sidenav-container > .mat-sidenav-content,\n        smsf-main > .mat-sidenav-container > .mat-drawer-content {\n          height: auto !important; } }\n      smsf-main > .mat-sidenav-container > .mat-sidenav-content #smsf-main-content,\n      smsf-main > .mat-sidenav-container > .mat-drawer-content #smsf-main-content {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        overflow: hidden; }\n        smsf-main > .mat-sidenav-container > .mat-sidenav-content #smsf-main-content #wrapper,\n        smsf-main > .mat-sidenav-container > .mat-drawer-content #smsf-main-content #wrapper {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          position: relative;\n          -webkit-box-flex: 1;\n              -ms-flex: 1;\n                  flex: 1;\n          overflow: hidden; }\n          smsf-main > .mat-sidenav-container > .mat-sidenav-content #smsf-main-content #wrapper .content-wrapper,\n          smsf-main > .mat-sidenav-container > .mat-drawer-content #smsf-main-content #wrapper .content-wrapper {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            -webkit-box-flex: 1;\n                -ms-flex: 1;\n                    flex: 1;\n            overflow: hidden; }\n            smsf-main > .mat-sidenav-container > .mat-sidenav-content #smsf-main-content #wrapper .content-wrapper smsf-content,\n            smsf-main > .mat-sidenav-container > .mat-drawer-content #smsf-main-content #wrapper .content-wrapper smsf-content {\n              position: relative;\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-flex: 1;\n                  -ms-flex: 1;\n                      flex: 1;\n              -webkit-box-orient: horizontal;\n              -webkit-box-direction: normal;\n                  -ms-flex-direction: row;\n                      flex-direction: row;\n              width: 100%;\n              overflow: hidden; }\n              smsf-main > .mat-sidenav-container > .mat-sidenav-content #smsf-main-content #wrapper .content-wrapper smsf-content > *:not(router-outlet):not(.ps__scrollbar-x-rail):not(.ps__scrollbar-y-rail),\n              smsf-main > .mat-sidenav-container > .mat-drawer-content #smsf-main-content #wrapper .content-wrapper smsf-content > *:not(router-outlet):not(.ps__scrollbar-x-rail):not(.ps__scrollbar-y-rail) {\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: flex;\n                -webkit-box-flex: 1;\n                    -ms-flex: 1;\n                        flex: 1;\n                width: 100%;\n                min-width: 100%; }\n              smsf-main > .mat-sidenav-container > .mat-sidenav-content #smsf-main-content #wrapper .content-wrapper smsf-content > *.ng-animating .mat-tab-body,\n              smsf-main > .mat-sidenav-container > .mat-drawer-content #smsf-main-content #wrapper .content-wrapper smsf-content > *.ng-animating .mat-tab-body {\n                height: 100vh; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_config_service__ = __webpack_require__("../../../../../src/app/core/services/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SMSFMainComponent = (function () {
    function SMSFMainComponent(_renderer, _elementRef, SMSFConfig) {
        var _this = this;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.SMSFConfig = SMSFConfig;
        this.onSettingsChanged =
            this.SMSFConfig.onSettingsChanged
                .subscribe(function (newSettings) {
                _this.smsfSettings = newSettings;
                _this.disableCustomScrollbars = !_this.smsfSettings.customScrollbars;
            });
    }
    SMSFMainComponent.prototype.ngOnInit = function () {
    };
    SMSFMainComponent.prototype.ngOnDestroy = function () {
        this.onSettingsChanged.unsubscribe();
    };
    SMSFMainComponent.prototype.addClass = function (className) {
        this._renderer.addClass(this._elementRef.nativeElement, className);
    };
    SMSFMainComponent.prototype.removeClass = function (className) {
        this._renderer.removeClass(this._elementRef.nativeElement, className);
    };
    return SMSFMainComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.disable-perfect-scrollbar'),
    __metadata("design:type", Object)
], SMSFMainComponent.prototype, "disableCustomScrollbars", void 0);
SMSFMainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'smsf-main',
        template: __webpack_require__("../../../../../src/app/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/main.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__core_services_config_service__["a" /* SMSFConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_services_config_service__["a" /* SMSFConfigService */]) === "function" && _c || Object])
], SMSFMainComponent);

var _a, _b, _c;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFMainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_modules_shared_module__ = __webpack_require__("../../../../../src/app/core/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_content_component__ = __webpack_require__("../../../../../src/app/main/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__("../../../../../src/app/main/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/main/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/main/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_components_navigation_navigation_module__ = __webpack_require__("../../../../../src/app/core/components/navigation/navigation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_toggle_directive__ = __webpack_require__("../../../../../src/app/main/navbar/navbar-toggle.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__quick_panel_quick_panel_component__ = __webpack_require__("../../../../../src/app/main/quick-panel/quick-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_components_theme_options_theme_options_component__ = __webpack_require__("../../../../../src/app/core/components/theme-options/theme-options.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_components_shortcuts_shortcuts_module__ = __webpack_require__("../../../../../src/app/core/components/shortcuts/shortcuts.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_components_search_bar_search_bar_module__ = __webpack_require__("../../../../../src/app/core/components/search-bar/search-bar.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var SMSFMainModule = (function () {
    function SMSFMainModule() {
    }
    return SMSFMainModule;
}());
SMSFMainModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__content_content_component__["a" /* SMSFContentComponent */],
            __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* SMSFFooterComponent */],
            __WEBPACK_IMPORTED_MODULE_3__main_component__["a" /* SMSFMainComponent */],
            __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* SMSFNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__toolbar_toolbar_component__["a" /* SMSFToolbarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_toggle_directive__["a" /* SMSFNavbarToggleDirective */],
            __WEBPACK_IMPORTED_MODULE_11__core_components_theme_options_theme_options_component__["a" /* SMSFThemeOptionsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__quick_panel_quick_panel_component__["a" /* SMSFQuickPanelComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__core_modules_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_8__core_components_navigation_navigation_module__["a" /* SMSFNavigationModule */],
            __WEBPACK_IMPORTED_MODULE_12__core_components_shortcuts_shortcuts_module__["a" /* SMSFShortcutsModule */],
            __WEBPACK_IMPORTED_MODULE_13__core_components_search_bar_search_bar_module__["a" /* SMSFSearchBarModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__main_component__["a" /* SMSFMainComponent */]
        ]
    })
], SMSFMainModule);

//# sourceMappingURL=main.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/navbar/navbar-toggle.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFNavbarToggleDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar_service__ = __webpack_require__("../../../../../src/app/main/navbar/navbar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SMSFNavbarToggleDirective = (function () {
    function SMSFNavbarToggleDirective(navbarService) {
        this.navbarService = navbarService;
    }
    SMSFNavbarToggleDirective.prototype.onClick = function () {
        this.navbar = this.navbarService.getNavBar();
        if (!this.navbar[this.smsfNavbar]) {
            return;
        }
        this.navbar[this.smsfNavbar]();
    };
    return SMSFNavbarToggleDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SMSFNavbarToggleDirective.prototype, "smsfNavbar", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SMSFNavbarToggleDirective.prototype, "onClick", null);
SMSFNavbarToggleDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[smsfNavbar]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__navbar_service__["a" /* SMSFNavbarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__navbar_service__["a" /* SMSFNavbarService */]) === "function" && _a || Object])
], SMSFNavbarToggleDirective);

var _a;
//# sourceMappingURL=navbar-toggle.directive.js.map

/***/ }),

/***/ "../../../../../src/app/main/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-header\">\r\n\r\n    <div class=\"logo\">\r\n       <!-- <span class=\"logo-icon\">S</span>-->\r\n        <span class=\"logo-text\">SMSF</span>\r\n    </div>\r\n\r\n    <button md-button class=\"toggle-button-navbar mat-icon-button\" smsfNavbar=\"toggleFold\" fxHide.lt-lg>\r\n        <md-icon>menu</md-icon>\r\n    </button>\r\n\r\n    <button md-button class=\"toggle-button-navbar mat-icon-button\" smsfNavbar=\"closeBar\" fxHide.gt-md>\r\n        <md-icon>arrow_back</md-icon>\r\n    </button>\r\n\r\n</div>\r\n\r\n<div class=\"navbar-content\" perfect-scrollbar>\r\n    <smsf-navigation></smsf-navigation>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Applies styles for users in high contrast mode. Note that this only applies\r\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\r\n * attribute, however Chrome handles high contrast differently.\r\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\r\n * This mixin adds the correct panel transform styles based\r\n * on the direction that the menu panel opens.\r\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\r\n * This mixin contains shared option styles between the select and\r\n * autocomplete components.\r\n */\nsmsf-main.smsf-nav-bar-folded .content-wrapper:last-child {\n  padding-left: 64px !important; }\n\nsmsf-main.smsf-nav-bar-folded .content-wrapper:first-child {\n  padding-right: 64px !important; }\n\nsmsf-main.smsf-nav-bar-folded .content-wrapper:first-child:last-child {\n  padding-left: 0 !important;\n  padding-right: 0 !important; }\n\nsmsf-navbar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 256px;\n  min-width: 256px;\n  max-width: 256px;\n  background-color: #FFFFFF;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 3;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2), width 0.1s linear, min-width 0.1s linear, max-width 0.1s linear;\n  -webkit-transform: translateX(0);\n          transform: translateX(0); }\n  smsf-navbar.folded {\n    position: absolute;\n    top: 0;\n    bottom: 0; }\n    smsf-navbar.folded.left-navbar {\n      left: 0; }\n    smsf-navbar.folded.right-navbar {\n      right: 0; }\n    smsf-navbar.folded:not(.folded-open) {\n      width: 64px;\n      min-width: 64px;\n      max-width: 64px; }\n      smsf-navbar.folded:not(.folded-open) .navbar-header {\n        padding: 0 16px 0 16px; }\n  smsf-navbar.close {\n    box-shadow: none; }\n    smsf-navbar.close.left-navbar {\n      -webkit-transform: translateX(-100%) !important;\n              transform: translateX(-100%) !important; }\n    smsf-navbar.close.right-navbar {\n      -webkit-transform: translateX(100%) !important;\n              transform: translateX(100%) !important; }\n  @media screen and (max-width: 1279px) {\n    smsf-navbar {\n      position: absolute;\n      top: 0;\n      bottom: 0; }\n      smsf-navbar.left-navbar {\n        left: 0; }\n      smsf-navbar.right-navbar {\n        right: 0; }\n      smsf-navbar:not(.initialized).left-navbar {\n        -webkit-transform: translateX(-100%);\n                transform: translateX(-100%); }\n      smsf-navbar:not(.initialized).right-navbar {\n        -webkit-transform: translateX(100%);\n                transform: translateX(100%); } }\n  smsf-navbar .navbar-header {\n    padding: 0 16px 0 24px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 64px;\n    min-height: 64px;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    transition: padding 200ms ease;\n    background-color: rgba(255, 255, 255, 0.05);\n    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n    smsf-navbar .navbar-header .logo {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n      smsf-navbar .navbar-header .logo .logo-icon {\n        display: block;\n        background: #039BE5;\n        width: 32px;\n        min-width: 32px;\n        height: 32px;\n        line-height: 32px;\n        text-align: center;\n        font-size: 16px;\n        font-weight: 500;\n        color: #FFF;\n        border-radius: 2px; }\n      smsf-navbar .navbar-header .logo .logo-text {\n        margin-left: 16px;\n        font-size: 16px; }\n  smsf-navbar .nav-bar-content {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_match_media_service__ = __webpack_require__("../../../../../src/app/core/services/match-media.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navbar_service__ = __webpack_require__("../../../../../src/app/main/navbar/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_perfect_scrollbar__ = __webpack_require__("../../../../ngx-perfect-scrollbar/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_perfect_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_perfect_scrollbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_components_navigation_navigation_service__ = __webpack_require__("../../../../../src/app/core/components/navigation/navigation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SMSFNavbarComponent = (function () {
    function SMSFNavbarComponent(SMSFMainComponentEl, SMSFMatchMedia, SMSFNavigationService, navBarService, media, router) {
        var _this = this;
        this.SMSFMainComponentEl = SMSFMainComponentEl;
        this.SMSFMatchMedia = SMSFMatchMedia;
        this.SMSFNavigationService = SMSFNavigationService;
        this.navBarService = navBarService;
        this.media = media;
        this.router = router;
        this.foldedByDefault = false;
        navBarService.setNavBar(this);
        this.SMSFNavigationService.onNavCollapseToggled.subscribe(function () {
            setTimeout(function () {
                _this.perfectScrollbarDirective.update();
            }, 310);
        });
        this.matchMediaWatcher =
            this.SMSFMatchMedia.onMediaChange
                .subscribe(function (mediaStep) {
                setTimeout(function () {
                    if (_this.media.isActive('lt-lg')) {
                        _this.closeBar();
                        _this.deActivateFolded();
                    }
                    else {
                        _this.openBar();
                    }
                });
            });
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* NavigationEnd */]) {
                if (_this.media.isActive('lt-lg')) {
                    setTimeout(function () {
                        _this.closeBar();
                    });
                }
            }
        });
    }
    SMSFNavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isClosed = false;
        this.isFoldedActive = this.foldedByDefault;
        this.isFoldedOpen = false;
        this.initialized = false;
        this.updateCssClasses();
        setTimeout(function () {
            _this.initialized = true;
        });
        if (this.media.isActive('lt-lg')) {
            this.closeBar();
            this.deActivateFolded();
        }
        else {
            if (!this.foldedByDefault) {
                this.deActivateFolded();
            }
            else {
                this.activateFolded();
            }
        }
    };
    SMSFNavbarComponent.prototype.openBar = function () {
        this.isClosed = false;
        this.updateCssClasses();
    };
    SMSFNavbarComponent.prototype.closeBar = function () {
        this.isClosed = true;
        this.updateCssClasses();
    };
    SMSFNavbarComponent.prototype.toggleBar = function () {
        if (this.isClosed) {
            this.openBar();
        }
        else {
            this.closeBar();
        }
    };
    SMSFNavbarComponent.prototype.toggleFold = function () {
        if (!this.isFoldedActive) {
            this.activateFolded();
        }
        else {
            this.deActivateFolded();
        }
    };
    SMSFNavbarComponent.prototype.activateFolded = function () {
        this.isFoldedActive = true;
        this.SMSFMainComponentEl.addClass('smsf-nav-bar-folded');
        this.isFoldedOpen = false;
    };
    SMSFNavbarComponent.prototype.deActivateFolded = function () {
        this.isFoldedActive = false;
        this.SMSFMainComponentEl.removeClass('smsf-nav-bar-folded');
        this.isFoldedOpen = false;
    };
    SMSFNavbarComponent.prototype.onMouseEnter = function () {
        this.isFoldedOpen = true;
    };
    SMSFNavbarComponent.prototype.onMouseLeave = function () {
        this.isFoldedOpen = false;
    };
    SMSFNavbarComponent.prototype.updateCssClasses = function () {
        if (this.isClosed) {
            this.SMSFMainComponentEl.addClass('smsf-nav-bar-opened');
            this.SMSFMainComponentEl.removeClass('smsf-nav-bar-closed');
        }
        else {
            this.SMSFMainComponentEl.addClass('smsf-nav-bar-closed');
            this.SMSFMainComponentEl.removeClass('smsf-nav-bar-opened');
        }
    };
    SMSFNavbarComponent.prototype.ngOnDestroy = function () {
        this.matchMediaWatcher.unsubscribe();
    };
    return SMSFNavbarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.close'),
    __metadata("design:type", Boolean)
], SMSFNavbarComponent.prototype, "isClosed", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.folded'),
    __metadata("design:type", Boolean)
], SMSFNavbarComponent.prototype, "isFoldedActive", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.folded-open'),
    __metadata("design:type", Boolean)
], SMSFNavbarComponent.prototype, "isFoldedOpen", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.initialized'),
    __metadata("design:type", Boolean)
], SMSFNavbarComponent.prototype, "initialized", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('folded'),
    __metadata("design:type", Object)
], SMSFNavbarComponent.prototype, "foldedByDefault", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6_ngx_perfect_scrollbar__["PerfectScrollbarDirective"]),
    __metadata("design:type", Object)
], SMSFNavbarComponent.prototype, "perfectScrollbarDirective", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SMSFNavbarComponent.prototype, "onMouseEnter", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SMSFNavbarComponent.prototype, "onMouseLeave", null);
SMSFNavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'smsf-navbar',
        template: __webpack_require__("../../../../../src/app/main/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/navbar/navbar.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__main_component__["a" /* SMSFMainComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__main_component__["a" /* SMSFMainComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__core_services_match_media_service__["a" /* SMSFMatchMedia */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_services_match_media_service__["a" /* SMSFMatchMedia */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__core_components_navigation_navigation_service__["a" /* SMSFNavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__core_components_navigation_navigation_service__["a" /* SMSFNavigationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__navbar_service__["a" /* SMSFNavbarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__navbar_service__["a" /* SMSFNavbarService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["b" /* ObservableMedia */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["b" /* ObservableMedia */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* Router */]) === "function" && _f || Object])
], SMSFNavbarComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/navbar/navbar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFNavbarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SMSFNavbarService = (function () {
    function SMSFNavbarService() {
    }
    SMSFNavbarService.prototype.setNavBar = function (ref) {
        this.navBarRef = ref;
    };
    SMSFNavbarService.prototype.getNavBar = function () {
        return this.navBarRef;
    };
    return SMSFNavbarService;
}());
SMSFNavbarService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SMSFNavbarService);

//# sourceMappingURL=navbar.service.js.map

/***/ }),

/***/ "../../../../../src/app/main/quick-panel/quick-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<md-list class=\"date\">\r\n\r\n    <h3 md-subheader>\r\n        <span>Today</span>\r\n    </h3>\r\n\r\n    <div class=\"secondary-text mat-display-1 mb-0 p-16\">\r\n        <div class=\"mb-12\">\r\n            {{date | date:'EEEE'}}\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n            <span> {{date | date:'d'}}</span>\r\n            <span class=\"mat-subheading-1\">th</span>\r\n            <span> {{date | date:'MMMM'}}</span>\r\n        </div>\r\n    </div>\r\n</md-list>\r\n\r\n<md-divider></md-divider>\r\n\r\n<md-list>\r\n    <h3 md-subheader>\r\n        <span>Quick Settings</span>\r\n    </h3>\r\n\r\n    <md-list-item>\r\n        <md-slide-toggle fxFlex class=\"mat-primary\" [(ngModel)]=\"settings.notify\" aria-label=\"Notifications\" labelPosition=\"before\">\r\n            <h3>Notifications</h3>\r\n        </md-slide-toggle>\r\n    </md-list-item>\r\n\r\n    <md-list-item>\r\n        <md-slide-toggle fxFlex class=\"mat-accent\" [(ngModel)]=\"settings.cloud\" aria-label=\"Cloud\" labelPosition=\"before\">\r\n            <h3>Cloud Sync</h3>\r\n        </md-slide-toggle>\r\n    </md-list-item>\r\n\r\n    <md-list-item>\r\n        <md-slide-toggle fxFlex class=\"mat-warn\" [(ngModel)]=\"settings.retro\" aria-label=\"Retro Thrusters\" labelPosition=\"before\">\r\n            <h3>Retro Thrusters</h3>\r\n        </md-slide-toggle>\r\n    </md-list-item>\r\n</md-list>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/quick-panel/quick-panel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "smsf-quick-panel {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 330px;\n  min-width: 330px;\n  max-width: 330px;\n  z-index: 99;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  smsf-quick-panel .mat-slide-toggle-content {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/quick-panel/quick-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFQuickPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SMSFQuickPanelComponent = (function () {
    function SMSFQuickPanelComponent() {
        this.date = new Date();
        this.settings = {
            notify: true,
            cloud: false,
            retro: true
        };
    }
    SMSFQuickPanelComponent.prototype.ngOnInit = function () {
    };
    return SMSFQuickPanelComponent;
}());
SMSFQuickPanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'smsf-quick-panel',
        template: __webpack_require__("../../../../../src/app/main/quick-panel/quick-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/quick-panel/quick-panel.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], SMSFQuickPanelComponent);

//# sourceMappingURL=quick-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar class=\"p-0 mat-elevation-z1\">\r\n\r\n    <div fxFlex fxFill fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n        <div fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n            <button md-button class=\"toggle-button-navbar mat-icon-button\" smsfNavbar=\"openBar\" fxHide.gt-md>\r\n                <md-icon>menu</md-icon>\r\n            </button>\r\n\r\n            <div class=\"toolbar-separator\" fxHide.gt-md></div>\r\n\r\n            <div class=\"px-8 px-md-16\">\r\n                <smsf-shortcuts></smsf-shortcuts>\r\n            </div>\r\n\r\n            <div class=\"toolbar-separator\"></div>\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"\" fxFlex=\"0 1 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n            <md-spinner *ngIf=\"showSpinner\" class=\"loading-spinner mx-8\"></md-spinner>\r\n\r\n            <button md-button [mdMenuTriggerFor]=\"userMenu\"\r\n                    class=\"user-button\">\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                    <img class=\"avatar\" src=\"/assets/images/profile.jpg\">\r\n                    <span class=\"username mr-12\" fxHide fxShow.gt-sm>Hemadri Patel</span>\r\n                    <md-icon class=\"s-16\" fxHide.xs>keyboard_arrow_down</md-icon>\r\n                </div>\r\n            </button>\r\n\r\n            <md-menu #userMenu=\"mdMenu\">\r\n\r\n                <button md-menu-item>\r\n                    <md-icon>account_circle</md-icon>\r\n                    <span>My Profile</span>\r\n                </button>\r\n\r\n                <button md-menu-item class=\"\">\r\n                    <md-icon>mail</md-icon>\r\n                    <span>Inbox</span>\r\n                </button>\r\n\r\n                <button md-menu-item class=\"\">\r\n                    <md-icon>exit_to_app</md-icon>\r\n                    <span>Logout</span>\r\n                </button>\r\n\r\n            </md-menu>\r\n\r\n            <div class=\"toolbar-separator\"></div>\r\n\r\n            <smsf-search-bar (onInput)=\"search($event)\"></smsf-search-bar>\r\n\r\n            <div class=\"toolbar-separator\"></div>\r\n\r\n            <button md-button fxHide fxShow.gt-xs\r\n                    class=\"language-button\"\r\n                    [mdMenuTriggerFor]=\"languageMenu\">\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                    <img class=\"flag mr-8\" [src]=\"'assets/images/flags/'+selectedLanguage.flag+'.png'\">\r\n                    <span class=\"iso text-uppercase\">{{selectedLanguage.id}}</span>\r\n                </div>\r\n            </button>\r\n\r\n            <md-menu #languageMenu=\"mdMenu\">\r\n                <button md-menu-item *ngFor=\"let lang of languages\" (click)=\"selectedLanguage = lang\">\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <img class=\"flag mr-16\" [src]=\"'assets/images/flags/'+lang.flag+'.png'\">\r\n                        <span class=\"iso\">{{lang.title}}</span>\r\n                    </div>\r\n                </button>\r\n            </md-menu>\r\n\r\n            <div class=\"toolbar-separator\"></div>\r\n\r\n            <button md-icon-button\r\n                    class=\"mat-icon-button quick-panel-toggle-button\"\r\n                    smsfMdSidenavToggler=\"quick-panel\"\r\n                    aria-label=\"Toggle quick panel\">\r\n                <md-icon class=\"icon\">format_list_bulleted</md-icon>\r\n            </button>\r\n\r\n        </div>\r\n    </div>\r\n</md-toolbar>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/toolbar/toolbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Applies styles for users in high contrast mode. Note that this only applies\r\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\r\n * attribute, however Chrome handles high contrast differently.\r\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\r\n * This mixin adds the correct panel transform styles based\r\n * on the direction that the menu panel opens.\r\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\r\n * This mixin contains shared option styles between the select and\r\n * autocomplete components.\r\n */\n:host {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  z-index: 4; }\n  :host.below {\n    z-index: 2; }\n  :host .mat-toolbar {\n    background: inherit;\n    color: inherit; }\n  :host .loading-spinner {\n    width: 32px;\n    height: 32px; }\n  :host .user-button,\n  :host .search-button,\n  :host .language-button,\n  :host .quick-panel-toggle-button {\n    min-width: 64px;\n    height: 64px; }\n    @media (max-width: 599px) {\n      :host .user-button,\n      :host .search-button,\n      :host .language-button,\n      :host .quick-panel-toggle-button {\n        height: 56px; } }\n  :host .toggle-button-navbar {\n    min-width: 56px;\n    height: 56px; }\n  :host .toolbar-separator {\n    height: 64px;\n    width: 1px;\n    background: rgba(0, 0, 0, 0.12); }\n    @media (max-width: 599px) {\n      :host .toolbar-separator {\n        height: 56px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SMSFToolbarComponent = (function () {
    function SMSFToolbarComponent(router) {
        var _this = this;
        this.router = router;
        this.userStatusOptions = [
            {
                'title': 'Online',
                'icon': 'icon-checkbox-marked-circle',
                'color': '#4CAF50'
            },
            {
                'title': 'Away',
                'icon': 'icon-clock',
                'color': '#FFC107'
            },
            {
                'title': 'Do not Disturb',
                'icon': 'icon-minus-circle',
                'color': '#F44336'
            },
            {
                'title': 'Invisible',
                'icon': 'icon-checkbox-blank-circle-outline',
                'color': '#BDBDBD'
            },
            {
                'title': 'Offline',
                'icon': 'icon-checkbox-blank-circle-outline',
                'color': '#616161'
            }
        ];
        this.languages = [
            {
                'id': 'en',
                'title': 'English',
                'flag': 'us'
            },
            {
                'id': 'es',
                'title': 'Spanish',
                'flag': 'es'
            },
            {
                'id': 'tr',
                'title': 'Turkish',
                'flag': 'tr'
            }
        ];
        this.selectedLanguage = this.languages[0];
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationStart */]) {
                _this.showSpinner = true;
            }
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                _this.showSpinner = false;
            }
        });
    }
    SMSFToolbarComponent.prototype.search = function (value) {
        // Do your search here...
        console.log(value);
    };
    return SMSFToolbarComponent;
}());
SMSFToolbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'smsf-toolbar',
        template: __webpack_require__("../../../../../src/app/main/toolbar/toolbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/toolbar/toolbar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _a || Object])
], SMSFToolbarComponent);

var _a;
//# sourceMappingURL=toolbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/navigation.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSFNavigation; });
var SMSFNavigation = (function () {
    function SMSFNavigation() {
        this.items = [
            {
                'title': 'APPS',
                'type': 'subheader'
            },
            {
                'title': 'Dashboard',
                'type': 'nav-item',
                'icon': 'email',
                'url': '/sample',
                'badge': {
                    'title': 25,
                    'bg': '#F44336',
                    'fg': '#FFFFFF'
                }
            },
            {
                'title': 'Bucket',
                'type': 'nav-collapse',
                'icon': 'border_all',
                'children': [
                    {
                        'title': 'Pratice Response',
                        'type': 'nav-item',
                        'url': '/bucket/practice_response'
                    },
                    {
                        'title': 'Productivity Bucket',
                        'type': 'nav-item',
                        'url': '/bucket/productivity-bucket'
                    },
                    {
                        'title': 'Practice',
                        'type': 'nav-item',
                        'url': '/bucket/practice'
                    },
                    {
                        'title': 'Jobs',
                        'type': 'nav-item',
                        'url': '/bucket/job'
                    },
                    {
                        'title': 'Task',
                        'type': 'nav-item',
                        'url': '/bucket/task'
                    },
                    {
                        'title': 'Pending Item',
                        'type': 'nav-item',
                        'url': '/bucket/pending-item'
                    },
                    {
                        'title': 'Reports',
                        'type': 'nav-item',
                        'url': '/bucket/reports'
                    }
                ]
            },
            {
                'title': 'Practice',
                'type': 'nav-collapse',
                'icon': 'border_all',
                'children': [
                    {
                        'title': 'Manage Practice',
                        'type': 'nav-item',
                        'url': '/practice/datatables/manage_practice'
                    }
                ]
            },
        ];
    }
    return SMSFNavigation;
}());

//# sourceMappingURL=navigation.model.js.map

/***/ }),

/***/ "../../../../../src/assets/images/backgrounds/login.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "login.ff2a1ae88f6e4b42816b.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map