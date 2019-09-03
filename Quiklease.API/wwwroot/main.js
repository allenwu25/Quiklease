(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router, alertifyService) {
        this.authService = authService;
        this.router = router;
        this.alertifyService = alertifyService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        this.alertifyService.error('Please log in to view content');
        this.router.navigate(['/home']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_resolvers/listing-detail.resolver.ts":
/*!*******************************************************!*\
  !*** ./src/app/_resolvers/listing-detail.resolver.ts ***!
  \*******************************************************/
/*! exports provided: ListingDetailResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingDetailResolver", function() { return ListingDetailResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_listing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/listing.service */ "./src/app/_services/listing.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListingDetailResolver = /** @class */ (function () {
    function ListingDetailResolver(listingService, router, alertify) {
        this.listingService = listingService;
        this.router = router;
        this.alertify = alertify;
    }
    ListingDetailResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.listingService.getListing(route.params['id']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            _this.alertify.error(error);
            _this.router.navigate(['/listings']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    };
    ListingDetailResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_listing_service__WEBPACK_IMPORTED_MODULE_2__["ListingService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], ListingDetailResolver);
    return ListingDetailResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/listings.resolver.ts":
/*!*************************************************!*\
  !*** ./src/app/_resolvers/listings.resolver.ts ***!
  \*************************************************/
/*! exports provided: ListingsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingsResolver", function() { return ListingsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_listing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/listing.service */ "./src/app/_services/listing.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListingsResolver = /** @class */ (function () {
    function ListingsResolver(listingService, router, alertify) {
        this.listingService = listingService;
        this.router = router;
        this.alertify = alertify;
    }
    ;
    ListingsResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.listingService.getListings().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    };
    ListingsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_listing_service__WEBPACK_IMPORTED_MODULE_5__["ListingService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]])
    ], ListingsResolver);
    return ListingsResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/mylistings-edit.resolver.ts":
/*!********************************************************!*\
  !*** ./src/app/_resolvers/mylistings-edit.resolver.ts ***!
  \********************************************************/
/*! exports provided: MylistingsEditResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MylistingsEditResolver", function() { return MylistingsEditResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_listing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/listing.service */ "./src/app/_services/listing.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MylistingsEditResolver = /** @class */ (function () {
    function MylistingsEditResolver(listingService, router, alertify) {
        this.listingService = listingService;
        this.router = router;
        this.alertify = alertify;
    }
    MylistingsEditResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.listingService.getListing(route.params['id']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            _this.alertify.error(error);
            _this.router.navigate(['/listings']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    };
    MylistingsEditResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_listing_service__WEBPACK_IMPORTED_MODULE_2__["ListingService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], MylistingsEditResolver);
    return MylistingsEditResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/mylistings.resolver.ts":
/*!***************************************************!*\
  !*** ./src/app/_resolvers/mylistings.resolver.ts ***!
  \***************************************************/
/*! exports provided: MylistingsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MylistingsResolver", function() { return MylistingsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_listing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/listing.service */ "./src/app/_services/listing.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MylistingsResolver = /** @class */ (function () {
    function MylistingsResolver(listingService, router, alertify, authService) {
        this.listingService = listingService;
        this.router = router;
        this.alertify = alertify;
        this.authService = authService;
    }
    ;
    MylistingsResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.listingService.getUserListings(this.authService.decodedToken.nameid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    };
    MylistingsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_listing_service__WEBPACK_IMPORTED_MODULE_5__["ListingService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], MylistingsResolver);
    return MylistingsResolver;
}());



/***/ }),

/***/ "./src/app/_services/alertify.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/alertify.service.ts ***!
  \***********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.confirm = function (message, okCallback) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallback();
            }
            else { }
        });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.message(message);
    };
    AlertifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'auth/';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
    }
    AuthService.prototype.login = function (model) {
        var _this = this;
        return this.http.post(this.baseUrl + 'login', model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var user = response;
            if (user) {
                localStorage.setItem('token', user.token);
                _this.decodedToken = _this.jwtHelper.decodeToken(user.token);
            }
        }));
    };
    AuthService.prototype.register = function (user) {
        return this.http.post(this.baseUrl + 'register', user);
    };
    AuthService.prototype.loggedIn = function () {
        var token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/_services/errorinterceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/errorinterceptor.ts ***!
  \***********************************************/
/*! exports provided: Errorinterceptor, ErrorinterceptorProvide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Errorinterceptor", function() { return Errorinterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorinterceptorProvide", function() { return ErrorinterceptorProvide; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Errorinterceptor = /** @class */ (function () {
    function Errorinterceptor() {
    }
    Errorinterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                if (error.status === 401) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error.statusText);
                }
                var applicationError = error.headers.get('Application-Error');
                if (applicationError) {
                    console.error(applicationError);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(applicationError);
                }
                var serverError = error.error.errors || error.error;
                var modalStateErrors = '';
                if (serverError && typeof serverError === 'object') {
                    for (var key in serverError) {
                        if (serverError[key]) {
                            modalStateErrors += serverError[key] + '\n';
                        }
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(modalStateErrors || serverError || 'Server Error');
            }
        }));
    };
    Errorinterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
    ], Errorinterceptor);
    return Errorinterceptor;
}());

var ErrorinterceptorProvide = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: Errorinterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_services/geocode.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/geocode.service.ts ***!
  \**********************************************/
/*! exports provided: GeocodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeocodeService", function() { return GeocodeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GeocodeService = /** @class */ (function () {
    function GeocodeService(http) {
        this.http = http;
    }
    GeocodeService.prototype.getcoords = function (address) {
        return this.http.get('http://open.mapquestapi.com/geocoding/v1/address?key=nxy2SKBDidHing8LIkHMRJ6FrzEo3ZjR&location=' + address);
    };
    GeocodeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GeocodeService);
    return GeocodeService;
}());



/***/ }),

/***/ "./src/app/_services/listing.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/listing.service.ts ***!
  \**********************************************/
/*! exports provided: ListingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingService", function() { return ListingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListingService = /** @class */ (function () {
    function ListingService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    ListingService.prototype.getUsers = function (id) {
        return this.http.get(this.baseUrl + 'users/' + id);
    };
    ListingService.prototype.getListings = function () {
        return this.http.get(this.baseUrl + 'listings');
    };
    ListingService.prototype.getUserListings = function (userid) {
        return this.http.get(this.baseUrl + 'listings/mylistings/' + userid);
    };
    ListingService.prototype.getListing = function (id) {
        return this.http.get(this.baseUrl + 'listings/' + id);
    };
    ListingService.prototype.addlisting = function (listing) {
        return this.http.post(this.baseUrl + 'listings/', listing);
    };
    ListingService.prototype.updatelisting = function (id, listing) {
        return this.http.put(this.baseUrl + 'listings/' + id, listing);
    };
    ListingService.prototype.setMainPhoto = function (listingId, id) {
        return this.http.post(this.baseUrl + 'listings/' + listingId + '/photos/' + id + '/setMain', {});
    };
    ListingService.prototype.deletePhoto = function (listingId, id) {
        return this.http.delete(this.baseUrl + 'listings/' + listingId + '/photos/' + id);
    };
    ListingService.prototype.deleteListing = function (listingId) {
        return this.http.delete(this.baseUrl + 'listings/' + listingId);
    };
    ListingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ListingService);
    return ListingService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map{\r\n    height: 1000px;\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]();
    }
    AppComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('token');
        if (token) {
            this.authService.decodedToken = this.jwtHelper.decodeToken(token);
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _value_value_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./value/value.component */ "./src/app/value/value.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _services_errorinterceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_services/errorinterceptor */ "./src/app/_services/errorinterceptor.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _listingfolder_listings_listings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./listingfolder/listings/listings.component */ "./src/app/listingfolder/listings/listings.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _services_listing_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_services/listing.service */ "./src/app/_services/listing.service.ts");
/* harmony import */ var _listingfolder_listing_card_listing_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./listingfolder/listing-card/listing-card.component */ "./src/app/listingfolder/listing-card/listing-card.component.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _listingfolder_listing_detail_listing_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./listingfolder/listing-detail/listing-detail.component */ "./src/app/listingfolder/listing-detail/listing-detail.component.ts");
/* harmony import */ var _resolvers_listing_detail_resolver__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_resolvers/listing-detail.resolver */ "./src/app/_resolvers/listing-detail.resolver.ts");
/* harmony import */ var _resolvers_listings_resolver__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_resolvers/listings.resolver */ "./src/app/_resolvers/listings.resolver.ts");
/* harmony import */ var _listingfolder_mylistings_mylistings_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./listingfolder/mylistings/mylistings.component */ "./src/app/listingfolder/mylistings/mylistings.component.ts");
/* harmony import */ var _resolvers_mylistings_resolver__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./_resolvers/mylistings.resolver */ "./src/app/_resolvers/mylistings.resolver.ts");
/* harmony import */ var _listingfolder_mylistings_add_mylistings_add_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./listingfolder/mylistings-add/mylistings-add.component */ "./src/app/listingfolder/mylistings-add/mylistings-add.component.ts");
/* harmony import */ var _listingfolder_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./listingfolder/photo-editor/photo-editor.component */ "./src/app/listingfolder/photo-editor/photo-editor.component.ts");
/* harmony import */ var _listingfolder_mylistings_edit_mylistings_edit_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./listingfolder/mylistings-edit/mylistings-edit.component */ "./src/app/listingfolder/mylistings-edit/mylistings-edit.component.ts");
/* harmony import */ var _resolvers_mylistings_edit_resolver__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./_resolvers/mylistings-edit.resolver */ "./src/app/_resolvers/mylistings-edit.resolver.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _services_geocode_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./_services/geocode.service */ "./src/app/_services/geocode.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































function tokenGetter() {
    return localStorage.getItem('token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _value_value_component__WEBPACK_IMPORTED_MODULE_8__["ValueComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_15__["MapComponent"],
                _listingfolder_listings_listings_component__WEBPACK_IMPORTED_MODULE_16__["ListingsComponent"],
                _listingfolder_listing_card_listing_card_component__WEBPACK_IMPORTED_MODULE_22__["ListingCardComponent"],
                _listingfolder_listing_detail_listing_detail_component__WEBPACK_IMPORTED_MODULE_24__["ListingDetailComponent"],
                _listingfolder_mylistings_mylistings_component__WEBPACK_IMPORTED_MODULE_27__["MylistingsComponent"],
                _listingfolder_mylistings_add_mylistings_add_component__WEBPACK_IMPORTED_MODULE_29__["MylistingsAddComponent"],
                _listingfolder_mylistings_edit_mylistings_edit_component__WEBPACK_IMPORTED_MODULE_31__["MylistingsEditComponent"],
                _listingfolder_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_30__["PhotoEditorComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_33__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_19__["appRoutes"]),
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_23__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost:5001'],
                        blacklistedRoutes: ['localhost:5001/api/auth']
                    }
                }),
                ngx_gallery__WEBPACK_IMPORTED_MODULE_6__["NgxGalleryModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_18__["FileUploadModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCHdRPgIRJpcEHmKMeP0T5uLLd1-HL4q28'
                })
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
                _services_errorinterceptor__WEBPACK_IMPORTED_MODULE_13__["ErrorinterceptorProvide"],
                _services_alertify_service__WEBPACK_IMPORTED_MODULE_14__["AlertifyService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"],
                _services_listing_service__WEBPACK_IMPORTED_MODULE_21__["ListingService"],
                _resolvers_listing_detail_resolver__WEBPACK_IMPORTED_MODULE_25__["ListingDetailResolver"],
                _resolvers_listings_resolver__WEBPACK_IMPORTED_MODULE_26__["ListingsResolver"],
                _resolvers_mylistings_resolver__WEBPACK_IMPORTED_MODULE_28__["MylistingsResolver"],
                _resolvers_mylistings_edit_resolver__WEBPACK_IMPORTED_MODULE_32__["MylistingsEditResolver"],
                _services_geocode_service__WEBPACK_IMPORTED_MODULE_34__["GeocodeService"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\r\n  <div *ngIf=\"!registerMode\" style=\"text-align: center\">\r\n    <h1>Welcome to Quiklease!</h1>\r\n    <p class=\"lead\">Login or Register to view and post listings!</p>\r\n    <div class=\"text-center\">\r\n      <button class=\"btn btn-primary btn-lg mr-2\" (click)=\"registerToggle()\">Register</button>\r\n    </div>  \r\n  </div>\r\n\r\n  <div *ngIf=\"registerMode\" class=\"container\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-6\">\r\n          <app-register (cancelRegister)=\"cancelRegisterMode($event)\"></app-register>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.registerMode = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.registerToggle = function () {
        this.registerMode = !this.registerMode;
    };
    HomeComponent.prototype.cancelRegisterMode = function (registerMode) {
        this.registerMode = registerMode;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/listingfolder/listing-card/listing-card.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/listingfolder/listing-card/listing-card.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card:hover img {\r\n    -webkit-transform: scale(1.03, 1.03);\r\n            transform: scale(1.03, 1.03);\r\n    transition-duration: 500ms;\r\n    transition-timing-function: ease-out;\r\n    opacity:0.7;\r\n}\r\n\r\n.card img {\r\n    -webkit-transform: scale(1.0, 1.0);\r\n            transform: scale(1.0, 1.0);\r\n    transition-duration: 500ms;\r\n    transition-timing-function: ease-out;\r\n}\r\n\r\n.card-img-wrapper {\r\n    overflow: hidden;\r\n    position:relative;\r\n}\r\n\r\n.member-icons {\r\n    position:absolute;\r\n    bottom: -30%;\r\n    left: 0;\r\n    right: 0;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    opacity: 0;\r\n}\r\n\r\n.card-img-wrapper:hover .member-icons{\r\n    bottom: 0;\r\n    opacity: 1;\r\n}\r\n\r\n.animate {\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.leasetype {\r\n    background-color: white;\r\n    color: #1672e2 !important;\r\n    border: 2px solid #1672e2 !important;\r\n}\r\n\r\n.listingbutton {\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.listingbutton a {\r\n    text-decoration: none;\r\n    color:black !important;\r\n}\r\n\r\n.listingbutton a:hover {\r\n        \r\n        text-decoration: none;\r\n        color: black !important;\r\n    }\r\n\r\n.favorite {\r\n    border: 2px solid pink;\r\n}\r\n\r\n.message {\r\n    border: 2px solid orange;\r\n}\r\n\r\n.view {\r\n    border: 2px solid #25e025;\r\n}\r\n\r\n.card {\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    padding-bottom:6px;\r\n}\r\n\r\n.title {\r\n    font-size:1.2em;\r\n}"

/***/ }),

/***/ "./src/app/listingfolder/listing-card/listing-card.component.html":
/*!************************************************************************!*\
  !*** ./src/app/listingfolder/listing-card/listing-card.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2> Current Job Postings</h2>\r\n<div class=\"card\">\r\n     <div class=\"row mt-1\"> \r\n        <div class=\"col-md-2 rightcol\">\r\n            <img style=\"height: 120px; width: 160px;\" [src]=\"listing.photoUrl == null?  '../../../../../assets/default.jpg' : listing.photoUrl\" class=\"card-img-top\">\r\n          </div>\r\n         <div class=\"col-md-5\">\r\n             <a style=\"font-size:1.1em\" target=\"_blank\" title=\"{{listing.title}}\" [routerLink]=\"['/listings/', listing.id]\"> {{listing.title}}</a><br>\r\n             <p class=\"text-primary\">{{listing.address}}<br /></p>\r\n             <p class=\"text-primary\"><button type=\"button\" class=\"leasetype\">Lease </button> &nbsp; {{listing.rentFrom | date}} - {{listing.rentUntil | date}}</p>\r\n         </div>\r\n         <div class=\"col-md-2 mt-1 text-success\">\r\n           <h5>{{listing.price | currency}} / Mo</h5>\r\n         </div>\r\n         <div class=\"col-md-3 mt-1 rightcol border-left\">\r\n            <div class=\"text-left\"> \r\n                <button [routerLink]=\"['/listings/', listing.id]\" class=\"listingbutton bg-white view\"> \r\n                    \r\n                    <i class=\"fa fa-eye text-success \"></i>\r\n                    View Details\r\n                </button>\r\n                <button class=\"listingbutton mt-1 bg-white message\"> \r\n                    \r\n                    <i class=\"fa fa-envelope text-warning \"></i> Message User\r\n                </button>\r\n                <button class=\"listingbutton mt-1 bg-white favorite\"> \r\n                    <i class=\"fa fa-heart text-danger\"></i>\r\n                    <a target=\"_blank\" title=\"Message Lister\" [routerLink]=\"['/listings/', listing.id]\"> Favourite This</a>\r\n                </button>\r\n            </div>\r\n      </div>\r\n     </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/listingfolder/listing-card/listing-card.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/listingfolder/listing-card/listing-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: ListingCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingCardComponent", function() { return ListingCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListingCardComponent = /** @class */ (function () {
    function ListingCardComponent() {
    }
    ListingCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ListingCardComponent.prototype, "listing", void 0);
    ListingCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listing-card',
            template: __webpack_require__(/*! ./listing-card.component.html */ "./src/app/listingfolder/listing-card/listing-card.component.html"),
            styles: [__webpack_require__(/*! ./listing-card.component.css */ "./src/app/listingfolder/listing-card/listing-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListingCardComponent);
    return ListingCardComponent;
}());



/***/ }),

/***/ "./src/app/listingfolder/listing-detail/listing-detail.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/listingfolder/listing-detail/listing-detail.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-panel {\r\n    font-size: 1.2em;\r\n}"

/***/ }),

/***/ "./src/app/listingfolder/listing-detail/listing-detail.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/listingfolder/listing-detail/listing-detail.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">\r\n      <h2>{{listing.title}}</h2><br>\r\n      <h4>{{listing.address}}</h4>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"card\">\r\n          <img class=\"card-img-top img-thumbnail\" \r\n          [src]=\"numberphotos==0? '../../../assets/default.jpg' : listing.photoUrl\">\r\n          <div class=\"card-body\">\r\n            <div>\r\n              <h5>Posted {{listing.postedDate | date}} by {{user.fullName}}</h5>\r\n              <h5>Email seller at {{user.userName}}</h5>\r\n            </div>\r\n            <div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div class=\"btn-group d-flex\">\r\n              <button class=\"btn btn-primary w-100\">Like</button>\r\n              <button class=\"btn btn-success w-100\">Message</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"col-sm-8\">\r\n        <div class=\"tab-panel\">\r\n          <tabset class=\"member-tabset\">\r\n            <tab heading=\"About this listing:\">\r\n              <p>{{listing.description}}</p>\r\n              <h4 class=\"mt-2 text-primary\">Details</h4>\r\n              <i class=\"fa fa-map-marker\"></i>&nbsp;<strong>Address: </strong> {{listing.address}}<br><br>\r\n              <i class=\"fa fa-dollar\"></i>&nbsp;<strong>Price: </strong> {{listing.price | currency }}<br><br>\r\n              <i class=\"fa fa-calendar\"></i>&nbsp;<strong>Rental Period: </strong> {{listing.rentFrom | date}} - {{listing.rentUntil | date}}<br><br>\r\n              \r\n              <i class=\"fa fa-user\"></i>&nbsp;<strong>Rooms available: </strong> {{listing.roomsAvailable}} &nbsp;&nbsp;\r\n              <i class=\"{{listing.buildingType == 'House'? 'fa fa-home' : 'fa fa-building'}}\"></i><strong>Building Type: </strong> {{listing.buildingType}}\r\n            </tab>\r\n            <tab heading=\"Photos\">\r\n              <h4>Photos</h4>\r\n              <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\r\n\r\n            </tab>\r\n            <tab heading=\"Messages\">\r\n                <h4>Messages here</h4>\r\n              </tab>\r\n          </tabset>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/listingfolder/listing-detail/listing-detail.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/listingfolder/listing-detail/listing-detail.component.ts ***!
  \**************************************************************************/
/*! exports provided: ListingDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingDetailComponent", function() { return ListingDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_listing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/listing.service */ "./src/app/_services/listing.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListingDetailComponent = /** @class */ (function () {
    function ListingDetailComponent(listingService, authService, alertify, route) {
        this.listingService = listingService;
        this.authService = authService;
        this.alertify = alertify;
        this.route = route;
    }
    ListingDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.listing = data['listing'];
        });
        this.listingService.getUsers(this.listing.userId).subscribe(function (userresult) {
            _this.user = userresult;
        }, function (error) {
            _this.alertify.error(error);
        });
        this.galleryOptions = [
            {
                width: '500px',
                height: '500px',
                imagePercent: 100,
                thumbnailsColumns: 4,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_4__["NgxGalleryAnimation"].Slide,
                preview: false
            }
        ];
        this.galleryImages = this.getImages();
    };
    ListingDetailComponent.prototype.getImages = function () {
        var imageUrls = [];
        for (var i = 0; i < this.listing.photos.length; i++) {
            imageUrls.push({
                small: this.listing.photos[i].photoUrl,
                medium: this.listing.photos[i].photoUrl,
                big: this.listing.photos[i].photoUrl,
                description: ''
            });
        }
        this.numberphotos = imageUrls.length;
        return imageUrls;
    };
    ListingDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listing-detail',
            template: __webpack_require__(/*! ./listing-detail.component.html */ "./src/app/listingfolder/listing-detail/listing-detail.component.html"),
            styles: [__webpack_require__(/*! ./listing-detail.component.css */ "./src/app/listingfolder/listing-detail/listing-detail.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_listing_service__WEBPACK_IMPORTED_MODULE_1__["ListingService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ListingDetailComponent);
    return ListingDetailComponent;
}());



/***/ }),

/***/ "./src/app/listingfolder/listings/listings.component.css":
/*!***************************************************************!*\
  !*** ./src/app/listingfolder/listings/listings.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/listingfolder/listings/listings.component.html":
/*!****************************************************************!*\
  !*** ./src/app/listingfolder/listings/listings.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n      <div *ngFor=\"let listing of listings\" style=\"color:white;\">\r\n        <app-listing-card [listing]=\"listing\"></app-listing-card>\r\n\r\n      </div>\r\n</div>"

/***/ }),

/***/ "./src/app/listingfolder/listings/listings.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/listingfolder/listings/listings.component.ts ***!
  \**************************************************************/
/*! exports provided: ListingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingsComponent", function() { return ListingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_listing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/listing.service */ "./src/app/_services/listing.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListingsComponent = /** @class */ (function () {
    function ListingsComponent(listingService, alertify, authService, route) {
        this.listingService = listingService;
        this.alertify = alertify;
        this.authService = authService;
        this.route = route;
    }
    ListingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.listings = data['listings'];
        });
    };
    ListingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listings',
            template: __webpack_require__(/*! ./listings.component.html */ "./src/app/listingfolder/listings/listings.component.html"),
            styles: [__webpack_require__(/*! ./listings.component.css */ "./src/app/listingfolder/listings/listings.component.css")]
        }),
        __metadata("design:paramtypes", [_services_listing_service__WEBPACK_IMPORTED_MODULE_1__["ListingService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ListingsComponent);
    return ListingsComponent;
}());



/***/ }),

/***/ "./src/app/listingfolder/mylistings-add/mylistings-add.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/listingfolder/mylistings-add/mylistings-add.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/listingfolder/mylistings-add/mylistings-add.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/listingfolder/mylistings-add/mylistings-add.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-2\"></div>\r\n  <div class=\"col-md-8\">\r\n      <form class=\"addformclass\" [formGroup]=\"addForm\" (ngSubmit)=\"addformlisting()\">\r\n          <h2 class=\"text-center text-primary mt-3\">Add New Listing</h2>\r\n          <hr>\r\n      \r\n      \r\n          <div class=\"mt-3\">\r\n            <label for=\"title\">Listing Title</label>\r\n            <div class=\"input-group\">\r\n                <input type=\"text\" \r\n                [ngClass]=\"{'is-invalid' : addForm.get('title').errors && addForm.get('title').touched}\"\r\n                class=\"form-control\" \r\n                formControlName=\"title\" \r\n                placeholder=\"Listing Title\">\r\n                <div class=\"invalid-feedback\"> Please choose a listing title</div>\r\n            </div>\r\n          </div>\r\n      \r\n          <div class=\"mt-3\">\r\n              <label for=\"username\">Listing Description</label>\r\n              <div class=\"input-group\">\r\n                  <textarea\r\n                  rows=\"5\"\r\n                  [ngClass]=\"{'is-invalid' : addForm.get('description').errors && addForm.get('description').touched}\"\r\n                  class=\"form-control\" \r\n                  formControlName=\"description\" \r\n                  placeholder=\"Listing Description\"></textarea>\r\n                  <div class=\"invalid-feedback\"> Please enter a description</div>\r\n              </div>\r\n            </div>\r\n      \r\n            <div class=\"mt-3\">\r\n                <label for=\"username\">Listing Address</label>\r\n                <div class=\"input-group\">\r\n                    <input type=\"text\" \r\n                    [ngClass]=\"{'is-invalid' : addForm.get('address').errors && addForm.get('address').touched}\"\r\n                    class=\"form-control\" \r\n                    formControlName=\"address\" \r\n                    placeholder=\"Eg. 102 Seagram Drive, Waterloo ON\">\r\n                  <div class=\"invalid-feedback\" style=\"width: 100%;\">\r\n                    Listing address is required.\r\n                  </div>\r\n                </div>\r\n            </div>\r\n      \r\n            <div class=\"row mt-3\">\r\n                <div class=\"col-md-6\">\r\n                  <label for=\"email\">Tenant move in date</label>\r\n                  <div class=\"input-group\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"><i class=\"fa fa-calendar\"></i></span>\r\n                      </div>\r\n                      <input type=\"date\" \r\n                    [ngClass]=\"{'is-invalid' : addForm.get('rentFrom').errors && addForm.get('rentFrom').touched}\"\r\n                    class=\"form-control\" \r\n                    formControlName=\"rentFrom\" \r\n                    >\r\n                  <div class=\"invalid-feedback\" style=\"width: 100%;\">\r\n                    Move in date is required.\r\n                  </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <label for=\"address\">Tenant move out date</label>\r\n                  <div class=\"input-group\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"><i class=\"fa fa-calendar\"></i></span>\r\n                      </div>\r\n                      <input type=\"date\" \r\n                        [ngClass]=\"{'is-invalid' : addForm.get('rentUntil').errors && addForm.get('rentUntil').touched}\"\r\n                        class=\"form-control\" \r\n                        formControlName=\"rentUntil\" \r\n                        >\r\n                      <div class=\"invalid-feedback\" style=\"width: 100%;\">\r\n                        Move out date is required.\r\n                      </div>\r\n                    </div>\r\n                </div>\r\n              </div>\r\n      \r\n              <div class=\"row mt-3\">\r\n                  <div class=\"col-md-5 mb-3\">\r\n                    <label for=\"buildingType\">Building Type</label>\r\n                    <select formControlName=\"buildingType\"\r\n                    [ngClass]=\"{'is-invalid' : addForm.get('buildingType').errors && addForm.get('buildingType').touched}\"\r\n                    class=\"custom-select d-block w-100\">\r\n                      <option value=\"Apartment / Condominium\">Apartment / Condominium</option>\r\n                      <option value=\"Detached House\">Detached House</option>\r\n                      <option value=\"Semi-Detached House\">Semi-Detached House</option>\r\n                      <option value=\"Townhouse\">Townhouse</option>\r\n                    </select>\r\n                    <div class=\"invalid-feedback\">\r\n                        Please select a building type\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-md-4 mb-3\">\r\n                    <label for=\"state\">Price per month</label>\r\n                    <input \r\n                    type=\"number\" \r\n                    class=\"form-control\" \r\n                    [ngClass]=\"{'is-invalid' : addForm.get('price').errors && addForm.get('price').touched}\"\r\n                    formControlName=\"price\">\r\n                    <div class=\"invalid-feedback\">\r\n                      Please provide a price\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-3 mb-3\">\r\n                    <label for=\"zip\">Rooms for Rent</label>\r\n                    <input \r\n                    type=\"number\" \r\n                    class=\"form-control\" \r\n                    [ngClass]=\"{'is-invalid' : addForm.get('roomsAvailable').errors && addForm.get('roomsAvailable').touched}\"\r\n                    formControlName=\"roomsAvailable\">\r\n                    <div class=\"invalid-feedback\">\r\n                      Please provide rooms available\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n      \r\n                <h4 class=\"mt-3\">Your Contact Information</h4><br>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 mb-3\">\r\n                    <label for=\"address2\">Your Phone Number <span class=\"text-muted\">(Optional)</span></label>\r\n                    <input \r\n                    type=\"text\" \r\n                    class=\"form-control\" \r\n                    [ngClass]=\"{'is-invalid' : addForm.get('phone').errors && addForm.get('phone').touched}\"\r\n                    formControlName=\"phone\">\r\n                    <div class=\"invalid-feedback\">\r\n                      Please provide a phone number\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n              <hr class=\"mb-4\">\r\n              <button class=\"btn btn-success btn-lg btn-block mb-12\" [disabled]=\"!addForm.valid\" type=\"submit\">ADD LISTING</button>\r\n              \r\n      </form>\r\n  </div>\r\n  <div class=\"col-md-2\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/listingfolder/mylistings-add/mylistings-add.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/listingfolder/mylistings-add/mylistings-add.component.ts ***!
  \**************************************************************************/
/*! exports provided: MylistingsAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MylistingsAddComponent", function() { return MylistingsAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_listing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/listing.service */ "./src/app/_services/listing.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MylistingsAddComponent = /** @class */ (function () {
    function MylistingsAddComponent(listingService, alertifyService, fb, router) {
        this.listingService = listingService;
        this.alertifyService = alertifyService;
        this.fb = fb;
        this.router = router;
    }
    MylistingsAddComponent.prototype.ngOnInit = function () {
        this.createaddlistingsform();
    };
    MylistingsAddComponent.prototype.createaddlistingsform = function () {
        this.addForm = this.fb.group({
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: [''],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            rentFrom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            rentUntil: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            buildingType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            roomsAvailable: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    MylistingsAddComponent.prototype.addformlisting = function () {
        var _this = this;
        if (this.addForm.valid) {
            this.listing = Object.assign({}, this.addForm.value);
            this.listingService.addlisting(this.listing).subscribe(function () {
                _this.router.navigate(['/mylistings']);
                _this.alertifyService.success('Added new listing. Click edit to add photos!');
            }, function (error) {
                _this.alertifyService.error(error);
            });
        }
    };
    MylistingsAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mylistings-add',
            template: __webpack_require__(/*! ./mylistings-add.component.html */ "./src/app/listingfolder/mylistings-add/mylistings-add.component.html"),
            styles: [__webpack_require__(/*! ./mylistings-add.component.css */ "./src/app/listingfolder/mylistings-add/mylistings-add.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_listing_service__WEBPACK_IMPORTED_MODULE_4__["ListingService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_1__["AlertifyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MylistingsAddComponent);
    return MylistingsAddComponent;
}());



/***/ }),

/***/ "./src/app/listingfolder/mylistings-edit/mylistings-edit.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/listingfolder/mylistings-edit/mylistings-edit.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/listingfolder/mylistings-edit/mylistings-edit.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/listingfolder/mylistings-edit/mylistings-edit.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n          <h1>Your Profile</h1>\r\n      </div>\r\n      <div class=\"col-sm-8\">\r\n        <div *ngIf=\"editForm.dirty\" class=\"alert alert-info\">\r\n          <strong>Information:</strong>You have made changes. Any unsaved changes will be lost.\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <div>\r\n              <strong>Age:</strong>\r\n              <p>\r\n                {{listing.address}}\r\n              </p>\r\n            </div>\r\n            <div>\r\n              <strong>Last Active:</strong>\r\n              <p>\r\n                {{listing.rentFrom}}\r\n              </p>\r\n            </div>\r\n            <div>\r\n              <strong>Member since:</strong>\r\n              <p>\r\n                {{listing.rentUntil}}\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n              <button [disabled]=\"!editForm.dirty\" form=\"editForm\" class=\"btn btn-success btn-block\">Save Changes</button>\r\n              \r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"col-sm-8\">\r\n        <div class=\"tab-panel\">\r\n          <tabset class=\"member-tabset\">\r\n            <tab heading=\"Edit Profile\">\r\n              <form #editForm=\"ngForm\" id=\"editForm\" (ngSubmit)=\"updateListing()\">\r\n                  <h4>Description</h4>\r\n                  <textarea name=\"description\" class=\"form-control\" rows=\"6\" \r\n                  [(ngModel)]=\"listing.description\"></textarea>\r\n    \r\n              \r\n                  <h4>Location Details:</h4>\r\n                  <div class=\"form-inline\">\r\n                    \r\n                    <label for=\"address\">address</label>\r\n                    <input type=\"text\" name=\"address\" [(ngModel)]=\"listing.address\" class=\"form-control\">\r\n                  </div>\r\n                  <div class=\"form-inline\">\r\n                      \r\n\r\n                      <label for=\"title\">title</label>\r\n                      <input type=\"text\" name=\"title\" [(ngModel)]=\"listing.title\" class=\"form-control\">\r\n                      <label for=\"phone\">phone</label>\r\n                      <input type=\"text\" name=\"phone\" [(ngModel)]=\"listing.phone\" class=\"form-control\">\r\n                    </div>\r\n                </form>\r\n            </tab>\r\n            <tab heading=\"Edit Photos\">\r\n              <app-photo-editor [photos]=\"listing.photos\" [listingId]=\"listing.id\"></app-photo-editor>\r\n            </tab>\r\n          </tabset>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/listingfolder/mylistings-edit/mylistings-edit.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/listingfolder/mylistings-edit/mylistings-edit.component.ts ***!
  \****************************************************************************/
/*! exports provided: MylistingsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MylistingsEditComponent", function() { return MylistingsEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var src_app_services_listing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/listing.service */ "./src/app/_services/listing.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MylistingsEditComponent = /** @class */ (function () {
    function MylistingsEditComponent(route, alertify, listingService, authService) {
        this.route = route;
        this.alertify = alertify;
        this.listingService = listingService;
        this.authService = authService;
    }
    MylistingsEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.listing = data['listing'];
        });
    };
    MylistingsEditComponent.prototype.updateListing = function () {
        var _this = this;
        this.listingService.updatelisting(this.listing.id, this.listing).subscribe(function (next) {
            _this.alertify.success("Profile updated.");
            _this.editForm.reset(_this.listing);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('editForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], MylistingsEditComponent.prototype, "editForm", void 0);
    MylistingsEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mylistings-edit',
            template: __webpack_require__(/*! ./mylistings-edit.component.html */ "./src/app/listingfolder/mylistings-edit/mylistings-edit.component.html"),
            styles: [__webpack_require__(/*! ./mylistings-edit.component.css */ "./src/app/listingfolder/mylistings-edit/mylistings-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            src_app_services_listing_service__WEBPACK_IMPORTED_MODULE_4__["ListingService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], MylistingsEditComponent);
    return MylistingsEditComponent;
}());



/***/ }),

/***/ "./src/app/listingfolder/mylistings/mylistings.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/listingfolder/mylistings/mylistings.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/listingfolder/mylistings/mylistings.component.html":
/*!********************************************************************!*\
  !*** ./src/app/listingfolder/mylistings/mylistings.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-2\"></div>\r\n  <div class=\"col-md-8\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-10\">\r\n          <h2 class=\"text-primary mt-3\">My Listings</h2>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n        <br>\r\n          <button class=\"btn btn-primary align-text-bottom\" [routerLink]=\"['/add']\">Add Listing</button>\r\n      </div>\r\n    </div>\r\n \r\n    <div class=\"row mt-3\">\r\n          <table class=\"table table-bordered mytable\">\r\n              <thead>\r\n                  <tr>\r\n                      <th>Listing Title</th>\r\n                      <th>Address</th>\r\n                      <th>Actions</th>\r\n                  </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let listing of listings\">\r\n                      <td>{{listing.title}}</td>\r\n                      <td>{{listing.address}}</td>\r\n                      <td>\r\n                        <button class=\"btn btn-primary\" \r\n                        [routerLink]=\"['/mylistings/', listing.id]\"><i class=\"fa fa-pencil\"></i> Edit</button>\r\n                        &nbsp;\r\n                        <button class=\"btn btn-primary\" \r\n                        (click)=\"deleteListing(listing.id)\"><i class=\"fa fa-trash\"></i> Delete</button>            \r\n                      </td>\r\n                  </tr>      \r\n              </tbody>\r\n          </table>\r\n    </div>\r\n  <div class=\"col-md-2\"></div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/listingfolder/mylistings/mylistings.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/listingfolder/mylistings/mylistings.component.ts ***!
  \******************************************************************/
/*! exports provided: MylistingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MylistingsComponent", function() { return MylistingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_listing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/listing.service */ "./src/app/_services/listing.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MylistingsComponent = /** @class */ (function () {
    function MylistingsComponent(route, authService, listingService, alertify) {
        this.route = route;
        this.authService = authService;
        this.listingService = listingService;
        this.alertify = alertify;
    }
    MylistingsComponent.prototype.ngOnInit = function () {
        this.getuserlistings();
        console.log(this.authService.decodedToken.nameid);
    };
    MylistingsComponent.prototype.getuserlistings = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.listings = data['listings'];
        });
        console.log(this.listings);
    };
    MylistingsComponent.prototype.deleteListing = function (id) {
        var _this = this;
        this.alertify.confirm("Do you wish to delete this listing?", function () {
            _this.listingService.deleteListing(id).subscribe(function () {
                _this.listings.splice(_this.listings.findIndex(function (l) { return l.id == id; }), 1);
                _this.alertify.success("Listing has been deleted");
            }, function (error) {
                _this.alertify.error(error);
            });
        });
    };
    MylistingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mylistings',
            template: __webpack_require__(/*! ./mylistings.component.html */ "./src/app/listingfolder/mylistings/mylistings.component.html"),
            styles: [__webpack_require__(/*! ./mylistings.component.css */ "./src/app/listingfolder/mylistings/mylistings.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            src_app_services_listing_service__WEBPACK_IMPORTED_MODULE_3__["ListingService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], MylistingsComponent);
    return MylistingsComponent;
}());



/***/ }),

/***/ "./src/app/listingfolder/photo-editor/photo-editor.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/listingfolder/photo-editor/photo-editor.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img.img-thumbnail {\r\n    height: 100px;\r\n    min-width: 100px !important;\r\n}\r\n\r\n.nv-file-over {\r\n    border:dotted 3px red;\r\n}\r\n\r\ninput[type=file] {\r\n    color: transparent;\r\n}"

/***/ }),

/***/ "./src/app/listingfolder/photo-editor/photo-editor.component.html":
/*!************************************************************************!*\
  !*** ./src/app/listingfolder/photo-editor/photo-editor.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-2\" *ngFor=\"let photo of photos\">\r\n    <img src=\"{{photo.photoUrl}}\" class=\"img-thumbnail p-1\">\r\n    <div class=\"text-center\">\r\n      <button type=\"button\" \r\n      (click)=\"setMainPhoto(photo)\"\r\n      [disabled]=\"photo.isMain\"\r\n      [ngClass]=\"photo.isMain ? 'btn-success active' : 'btn-default'\"\r\n      type=\"button\"\r\n      class=\"btn btn-sm\">Main</button>\r\n      <button type=\"button\" \r\n      (click)=\"deletePhoto(photo.id)\"\r\n      [disabled]=\"photo.isMain\"\r\n      class=\"btn btn-sm btn-danger\"><i class=\"fa fa-trash\"></i></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n \r\n    <div class=\"col-md-3\">\r\n\r\n        <h3>Select files</h3>\r\n\r\n        <div ng2FileDrop\r\n             [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\r\n             (fileOver)=\"fileOverBase($event)\"\r\n             [uploader]=\"uploader\"\r\n             class=\"card bg-faded p-3 text-center mb-3 my-drop-zone\">\r\n             <i class=\"fa fa-upload fa-3x\"></i>\r\n            Drop Photos Here\r\n        </div>\r\n\r\n\r\n        Multiple\r\n        <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /><br/>\r\n\r\n        Single\r\n        <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\r\n    </div>\r\n\r\n    <div class=\"col-md-9\" style=\"margin-bottom: 40px\" *ngIf=\"uploader?.queue.length\">\r\n\r\n        <h3>Upload queue</h3>\r\n        <p>Queue length: {{ uploader?.queue?.length }}</p>\r\n\r\n        <table class=\"table\">\r\n            <thead>\r\n            <tr>\r\n                <th width=\"50%\">Name</th>\r\n                <th>Size</th>\r\n                <th>Progress</th>\r\n                <th>Status</th>\r\n                <th>Actions</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let item of uploader.queue\">\r\n                <td><strong>{{ item?.file?.name }}</strong></td>\r\n                <td *ngIf=\"uploader.options.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\r\n                <td *ngIf=\"uploader.options.isHTML5\">\r\n                    <div class=\"progress\" style=\"margin-bottom: 0;\">\r\n                        <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\r\n                    </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                    <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\r\n                    <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\r\n                    <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\r\n                </td>\r\n                <td nowrap>\r\n                    <button type=\"button\" class=\"btn btn-success btn-xs\"\r\n                            (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\r\n                        <span class=\"glyphicon glyphicon-upload\"></span> Upload\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-warning btn-xs\"\r\n                            (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\r\n                        <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-danger btn-xs\"\r\n                            (click)=\"item.remove()\">\r\n                        <span class=\"glyphicon glyphicon-trash\"></span> Remove\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n\r\n        <div>\r\n            <div>\r\n                Queue progress:\r\n                <div class=\"progress\" style=\"\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\r\n                </div>\r\n            </div>\r\n            <button type=\"button\" class=\"btn btn-success btn-s\"\r\n                    (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n                <span class=\"glyphicon glyphicon-upload\"></span> Upload all\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-warning btn-s\"\r\n                    (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\r\n                <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-danger btn-s\"\r\n                    (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\r\n                <span class=\"glyphicon glyphicon-trash\"></span> Remove all\r\n            </button>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/listingfolder/photo-editor/photo-editor.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/listingfolder/photo-editor/photo-editor.component.ts ***!
  \**********************************************************************/
/*! exports provided: PhotoEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoEditorComponent", function() { return PhotoEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var src_app_services_listing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/listing.service */ "./src/app/_services/listing.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PhotoEditorComponent = /** @class */ (function () {
    function PhotoEditorComponent(authService, listingService, alertify) {
        this.authService = authService;
        this.listingService = listingService;
        this.alertify = alertify;
        this.getMemberPhotoChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.hasBaseDropZoneOver = false;
    }
    PhotoEditorComponent.prototype.ngOnInit = function () {
        this.initializeuploader();
    };
    PhotoEditorComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    PhotoEditorComponent.prototype.initializeuploader = function () {
        var _this = this;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileUploader"]({
            url: this.baseUrl + 'listings/' + this.listingId + '/photos',
            authToken: 'Bearer ' + localStorage.getItem('token'),
            isHTML5: true,
            allowedFileType: ['image'],
            removeAfterUpload: true,
            autoUpload: false,
            maxFileSize: 10 * 1024 * 1024
        });
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            if (response) {
                var res = JSON.parse(response);
                var photo = {
                    id: res.id,
                    photoUrl: res.photoUrl,
                    dateAdded: res.dateAdded,
                    isMain: res.isMain
                };
                _this.photos.push(photo);
            }
        };
    };
    PhotoEditorComponent.prototype.setMainPhoto = function (photo) {
        var _this = this;
        this.listingService.setMainPhoto(this.listingId, photo.id)
            .subscribe(function () {
            _this.currentmain = _this.photos.filter(function (p) { return p.isMain == true; })[0];
            _this.currentmain.isMain = false;
            photo.isMain = true;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    PhotoEditorComponent.prototype.deletePhoto = function (id) {
        var _this = this;
        this.alertify.confirm("Do you wish to delete this photo?", function () {
            _this.listingService.deletePhoto(_this.listingId, id).subscribe(function () {
                _this.photos.splice(_this.photos.findIndex(function (p) { return p.id == id; }), 1);
                _this.alertify.success("Photo has been deleted");
            }, function (error) {
                _this.alertify.error(error);
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PhotoEditorComponent.prototype, "photos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PhotoEditorComponent.prototype, "listingId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PhotoEditorComponent.prototype, "getMemberPhotoChange", void 0);
    PhotoEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photo-editor',
            template: __webpack_require__(/*! ./photo-editor.component.html */ "./src/app/listingfolder/photo-editor/photo-editor.component.html"),
            styles: [__webpack_require__(/*! ./photo-editor.component.css */ "./src/app/listingfolder/photo-editor/photo-editor.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_services_listing_service__WEBPACK_IMPORTED_MODULE_5__["ListingService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_1__["AlertifyService"]])
    ], PhotoEditorComponent);
    return PhotoEditorComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<form *ngIf=\"!loggedIn()\" #loginForm=\"ngForm\" class=\"form-inline my-2 my-lg-0\" (ngSubmit)=\"login()\">  \r\n    \r\n    <input class=\"form-control mr-sm-2\" type=\"text\" name=\"username\" \r\n    placeholder=\"Username\" required [(ngModel)]=\"model.username\">\r\n    \r\n    <input class=\"form-control mr-sm-2\" type=\"password\" name=\"password\"\r\n    placeholder=\"Password\" required [(ngModel)]=\"model.password\">\r\n\r\n    <button [disabled]=\"!loginForm.valid\" class=\"btn btn-success my-2 my-sm-0\" type=\"submit\">Login</button>\r\n  \r\n  </form>\r\n\r\n  <div class=\"login-form\">\r\n      <form *ngIf=\"!loggedIn()\" #loginForm=\"ngForm\" class=\"form-inline my-2 my-lg-0\" (ngSubmit)=\"login()\">\r\n          <h2 class=\"text-center\">Log in</h2>       \r\n          <div class=\"form-group\">\r\n              <input class=\"form-control mr-sm-2\" type=\"text\" name=\"username\" \r\n    placeholder=\"Username\" required [(ngModel)]=\"model.username\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <input class=\"form-control mr-sm-2\" type=\"password\" name=\"password\"\r\n    placeholder=\"Password\" required [(ngModel)]=\"model.password\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <button [disabled]=\"!loginForm.valid\" class=\"btn btn-success my-2 my-sm-0\" type=\"submit\">Login</button>\r\n  \r\n          </div>\r\n      </form>\r\n      <p class=\"text-center\"><a href=\"#\">Create an Account</a></p>\r\n  </div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, alertifyService, router) {
        this.authService = authService;
        this.alertifyService = alertifyService;
        this.router = router;
        this.model = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model).subscribe(function (next) {
            _this.router.navigate(['/listings']);
            _this.alertifyService.success('Logged in successfully');
        }, function (error) {
            _this.alertifyService.error(error);
        });
    };
    LoginComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height:500px;\r\n}"

/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-primary text-center\">Map of All Listings</h2>\r\n<agm-map [zoom]=\"14\" [latitude]=\"latitude\" [longitude]=\"longitude\">\r\n  <agm-marker *ngFor=\"let marker of locations\" [label]=\"mylabel\" [latitude]=\"marker.latitude\" [longitude]=\"marker.longitude\">\r\n      <agm-info-window>\r\n          <a target='_blank' href='/listings/{{marker.urlid}}'><strong>{{marker.title}}</strong></a><br>\r\n          {{marker.address}}\r\n        </agm-info-window>\r\n  </agm-marker>\r\n</agm-map>\r\n"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_geocode_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/geocode.service */ "./src/app/_services/geocode.service.ts");
/* harmony import */ var _services_listing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/listing.service */ "./src/app/_services/listing.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapComponent = /** @class */ (function () {
    function MapComponent(coordservice, listingservice, route) {
        this.coordservice = coordservice;
        this.listingservice = listingservice;
        this.route = route;
        this.locations = [];
        this.latitude = 43.4723;
        this.longitude = -80.5449;
        this.mylabel = "🏠";
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.listings = data['listings'];
        });
        this.getcoords();
    };
    MapComponent.prototype.getcoords = function () {
        var _this = this;
        this.listings.forEach(function (element) {
            _this.coordservice.getcoords(element.address).subscribe(function (results) {
                _this.getlocation(element, results);
            }, function (error) {
                console.log(error);
            });
        });
    };
    MapComponent.prototype.getlocation = function (element, results) {
        this.locations.push({
            'title': element.title,
            'address': element.address,
            'latitude': results.results[0].locations[0].latLng.lat,
            'longitude': results.results[0].locations[0].latLng.lng,
            'urlid': element.id
        });
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [_services_geocode_service__WEBPACK_IMPORTED_MODULE_1__["GeocodeService"], _services_listing_service__WEBPACK_IMPORTED_MODULE_2__["ListingService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logoutclass:hover {\r\n    cursor:pointer;\r\n}"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\" navbar navbar-expand-md navbar-dark bg-dark\" id=\"navbarsExampleDefault\">\r\n    \r\n        <a *ngIf=\"!loggedIn()\" class=\"nav-link\" [routerLink]=\"['/']\">Home <span class=\"sr-only\">(current)</span></a>\r\n\r\n        <ul *ngIf=\"loggedIn()\" class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/listings']\"  >Listings</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/map']\">Map</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/mylistings']\">My Postings</a>\r\n        </li>\r\n            \r\n\r\n    </ul>\r\n\r\n    <a *ngIf=\"loggedIn()\" class=\"btn btn-success py-2 text-light mr-2\" [routerLink]=\"['/add']\">Add Listing</a>\r\n    <div *ngIf=\"loggedIn()\" class=\"dropdown\" dropdown>\r\n      <a class=\"dropdown-toggle text-light\" dropdownToggle>\r\n        Welcome {{authService.decodedToken?.unique_name}}\r\n      </a>\r\n      <div class=\"dropdown-menu\" *dropdownMenu>\r\n        <a class=\"dropdown-item logoutclass\" (click)=\"logout()\"><i class=\"fa fa-sign-out\"></i>Logout</a>\r\n      </div>\r\n    </div>\r\n    \r\n\r\n    <form *ngIf=\"!loggedIn()\" #loginForm=\"ngForm\" class=\"form-inline my-2 my-lg-0\" (ngSubmit)=\"login()\">  \r\n    \r\n      <input class=\"form-control mr-sm-2\" type=\"text\" name=\"username\" \r\n      placeholder=\"Username\" required [(ngModel)]=\"model.username\">\r\n      \r\n      <input class=\"form-control mr-sm-2\" type=\"password\" name=\"password\"\r\n      placeholder=\"Password\" required [(ngModel)]=\"model.password\">\r\n  \r\n      <button [disabled]=\"!loginForm.valid\" class=\"btn btn-success my-2 my-sm-0\" type=\"submit\">Login</button>\r\n    \r\n    </form>\r\n  </nav>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_listing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/listing.service */ "./src/app/_services/listing.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavComponent = /** @class */ (function () {
    function NavComponent(authService, alertifyService, listingService, router) {
        this.authService = authService;
        this.alertifyService = alertifyService;
        this.listingService = listingService;
        this.router = router;
        this.model = {};
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model).subscribe(function (next) {
            _this.router.navigate(['/listings']);
            _this.alertifyService.success('Logged in successfully');
        }, function (error) {
            _this.alertifyService.error(error);
        });
    };
    NavComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    NavComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        this.alertifyService.message('Logged out');
        this.router.navigate(['/']);
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            _services_listing_service__WEBPACK_IMPORTED_MODULE_4__["ListingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myform {\r\n    float:center;\r\n    background-color: lightblue;\r\n    padding:50px;\r\n    width: 500px; \r\n    box-shadow: 0px 6px 18px 5px rgba(0,0,0,0.58);\r\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-form\">\r\n<form class=\"myform\" [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\r\n  <h2 class=\"text-center\">Register</h2>\r\n  <p class=\"hint-text text-center\">Create your account. It's free and only takes a minute.</p>\r\n          \r\n    \r\n    \r\n    <div class=\"form-group\">\r\n        <input type=\"email\" \r\n        [ngClass]=\"{'is-invalid' : registerForm.get('userName').errors && registerForm.get('userName').touched}\"\r\n        class=\"form-control\" \r\n        formControlName=\"userName\" \r\n        placeholder=\"Email\">\r\n        <div class=\"invalid-feedback\"> Please enter a valid email</div>\r\n    \r\n      </div>\r\n  \r\n      <div class=\"form-group\">\r\n          <input type=\"text\" \r\n          [ngClass]=\"{'is-invalid' : registerForm.get('fullName').errors && registerForm.get('fullName').touched}\"\r\n          class=\"form-control\" \r\n          formControlName=\"fullName\" \r\n          placeholder=\"Full Name\">\r\n          <div class=\"invalid-feedback\"> Please enter your full name</div>\r\n      \r\n        </div>\r\n    \r\n    \r\n      <div class=\"form-group\">\r\n        <input type=\"password\" \r\n        [ngClass]=\"{'is-invalid' : registerForm.get('password').errors && registerForm.get('password').touched}\"\r\n        class=\"form-control\" \r\n        formControlName=\"password\" \r\n        placeholder=\"Password\">\r\n        <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('password').hasError('required') && registerForm.get('password').touched\"> Password is required</div>\r\n        <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('password').hasError('minlength') && registerForm.get('password').touched\"> Password must have at least 4 characters</div>\r\n        <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('password').hasError('maxlength') && registerForm.get('password').touched\"> Password cannot exceed 18 characters</div>\r\n    \r\n      </div>\r\n    \r\n      <div class=\"form-group\">\r\n        <input type=\"password\" \r\n        [ngClass]=\"{'is-invalid' : \r\n        registerForm.get('confirmPassword').errors && registerForm.get('confirmPassword').touched ||\r\n        registerForm.get('confirmPassword').touched && registerForm.hasError('mismatch')}\"\r\n        class=\"form-control\" \r\n        formControlName=\"confirmPassword\" \r\n        placeholder=\"Confirm Password\">\r\n        <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('confirmPassword').hasError('required') \r\n        && registerForm.get('confirmPassword').touched\"> Confirm password is required</div>\r\n        <div class=\"invalid-feedback\" *ngIf=\"registerForm.hasError('mismatch') \r\n        && registerForm.get('confirmPassword').touched\"> Passwords must match</div>\r\n        \r\n      </div>\r\n    \r\n    \r\n      <div class=\"form-group text-center\">\r\n        <button class=\"btn btn-success btn-block\" [disabled]=\"!registerForm.valid\" type=\"submit\">Register</button>\r\n        \r\n        <button class=\"btn btn-primary btn-block\" type=\"button\" (click)=\"cancel()\">Cancel</button>\r\n      </div>\r\n      <p class=\"text-center\"><a href=\"#\">Already have an account? Log in</a></p>\r\n  </form>\r\n  .\r\n</div>\r\n\r\n  "

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, alertifyService, fb, router) {
        this.authService = authService;
        this.alertifyService = alertifyService;
        this.fb = fb;
        this.router = router;
        this.cancelRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.createRegisterForm();
    };
    RegisterComponent.prototype.createRegisterForm = function () {
        this.registerForm = this.fb.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(18)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, { validator: this.passwordMatchValidator });
    };
    RegisterComponent.prototype.passwordMatchValidator = function (g) {
        return g.get('password').value === g.get('confirmPassword').value ? null : { 'mismatch': true };
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.registerForm.valid) {
            this.user = Object.assign({}, this.registerForm.value);
            this.authService.register(this.user).subscribe(function () {
                _this.alertifyService.success('Registration Successful');
            }, function (error) {
                _this.alertifyService.error(error);
            }, function () {
                _this.authService.login(_this.user).subscribe(function () {
                    _this.router.navigate(['/listings']);
                });
            });
        }
    };
    RegisterComponent.prototype.cancel = function () {
        this.cancelRegister.emit(false);
        this.alertifyService.message('Cancelled Registration');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "cancelRegister", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _listingfolder_listings_listings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listingfolder/listings/listings.component */ "./src/app/listingfolder/listings/listings.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _listingfolder_listing_detail_listing_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listingfolder/listing-detail/listing-detail.component */ "./src/app/listingfolder/listing-detail/listing-detail.component.ts");
/* harmony import */ var _resolvers_listing_detail_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_resolvers/listing-detail.resolver */ "./src/app/_resolvers/listing-detail.resolver.ts");
/* harmony import */ var _resolvers_listings_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_resolvers/listings.resolver */ "./src/app/_resolvers/listings.resolver.ts");
/* harmony import */ var _listingfolder_mylistings_mylistings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listingfolder/mylistings/mylistings.component */ "./src/app/listingfolder/mylistings/mylistings.component.ts");
/* harmony import */ var _resolvers_mylistings_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_resolvers/mylistings.resolver */ "./src/app/_resolvers/mylistings.resolver.ts");
/* harmony import */ var _listingfolder_mylistings_add_mylistings_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./listingfolder/mylistings-add/mylistings-add.component */ "./src/app/listingfolder/mylistings-add/mylistings-add.component.ts");
/* harmony import */ var _listingfolder_mylistings_edit_mylistings_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./listingfolder/mylistings-edit/mylistings-edit.component */ "./src/app/listingfolder/mylistings-edit/mylistings-edit.component.ts");
/* harmony import */ var _resolvers_mylistings_edit_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_resolvers/mylistings-edit.resolver */ "./src/app/_resolvers/mylistings-edit.resolver.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");













var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"] },
    { path: 'listings', component: _listingfolder_listings_listings_component__WEBPACK_IMPORTED_MODULE_1__["ListingsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], resolve: { listings: _resolvers_listings_resolver__WEBPACK_IMPORTED_MODULE_6__["ListingsResolver"] } },
    { path: 'listings/:id', component: _listingfolder_listing_detail_listing_detail_component__WEBPACK_IMPORTED_MODULE_4__["ListingDetailComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], resolve: { listing: _resolvers_listing_detail_resolver__WEBPACK_IMPORTED_MODULE_5__["ListingDetailResolver"] } },
    { path: 'mylistings', component: _listingfolder_mylistings_mylistings_component__WEBPACK_IMPORTED_MODULE_7__["MylistingsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], resolve: { listings: _resolvers_mylistings_resolver__WEBPACK_IMPORTED_MODULE_8__["MylistingsResolver"] } },
    { path: 'mylistings/:id', component: _listingfolder_mylistings_edit_mylistings_edit_component__WEBPACK_IMPORTED_MODULE_10__["MylistingsEditComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], resolve: { listing: _resolvers_mylistings_edit_resolver__WEBPACK_IMPORTED_MODULE_11__["MylistingsEditResolver"] } },
    { path: 'add', component: _listingfolder_mylistings_add_mylistings_add_component__WEBPACK_IMPORTED_MODULE_9__["MylistingsAddComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'map', component: _map_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], resolve: { listings: _resolvers_listings_resolver__WEBPACK_IMPORTED_MODULE_6__["ListingsResolver"] } },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/value/value.component.css":
/*!*******************************************!*\
  !*** ./src/app/value/value.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/value/value.component.html":
/*!********************************************!*\
  !*** ./src/app/value/value.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngFor=\"let value of values\">\r\n  {{value.id}}, {{value.name}}\r\n</p>"

/***/ }),

/***/ "./src/app/value/value.component.ts":
/*!******************************************!*\
  !*** ./src/app/value/value.component.ts ***!
  \******************************************/
/*! exports provided: ValueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueComponent", function() { return ValueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValueComponent = /** @class */ (function () {
    function ValueComponent(http) {
        this.http = http;
    }
    ValueComponent.prototype.ngOnInit = function () {
        this.getValues();
    };
    ValueComponent.prototype.getValues = function () {
        var _this = this;
        this.http.get('http://localhost:5001/api/values')
            .subscribe(function (response) {
            _this.values = response;
        }, function (error) {
            console.log(error);
        });
    };
    ValueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-value',
            template: __webpack_require__(/*! ./value.component.html */ "./src/app/value/value.component.html"),
            styles: [__webpack_require__(/*! ./value.component.css */ "./src/app/value/value.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ValueComponent);
    return ValueComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:5001/api/'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\allen\Quiklease\Quiklease-SPA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map