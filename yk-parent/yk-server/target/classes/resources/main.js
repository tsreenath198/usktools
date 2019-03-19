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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _searchdmilan_searchdmilan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./searchdmilan/searchdmilan.component */ "./src/app/searchdmilan/searchdmilan.component.ts");
/* harmony import */ var _k_level_k_level_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./k-level/k-level.component */ "./src/app/k-level/k-level.component.ts");
/* harmony import */ var _yuvan_yuvan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./yuvan/yuvan.component */ "./src/app/yuvan/yuvan.component.ts");
/* harmony import */ var _k_level_search_searchklevel_searchklevel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./k-level/search/searchklevel/searchklevel.component */ "./src/app/k-level/search/searchklevel/searchklevel.component.ts");








var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'searchdmilan', component: _searchdmilan_searchdmilan_component__WEBPACK_IMPORTED_MODULE_4__["SearchdmilanComponent"] },
    { path: 'yuvan', component: _yuvan_yuvan_component__WEBPACK_IMPORTED_MODULE_6__["YuvanComponent"] },
    { path: 'k-level', component: _k_level_k_level_component__WEBPACK_IMPORTED_MODULE_5__["KLevelComponent"] },
    { path: 'searchklevel', component: _k_level_search_searchklevel_searchklevel_component__WEBPACK_IMPORTED_MODULE_7__["SearchklevelComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _searchdmilan_searchdmilan_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./searchdmilan/searchdmilan.component */ "./src/app/searchdmilan/searchdmilan.component.ts");
/* harmony import */ var _k_level_k_level_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./k-level/k-level.component */ "./src/app/k-level/k-level.component.ts");
/* harmony import */ var _yuvan_yuvan_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./yuvan/yuvan.component */ "./src/app/yuvan/yuvan.component.ts");
/* harmony import */ var _k_level_search_searchklevel_searchklevel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./k-level/search/searchklevel/searchklevel.component */ "./src/app/k-level/search/searchklevel/searchklevel.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _yuvan_yuvan_component__WEBPACK_IMPORTED_MODULE_11__["YuvanComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _searchdmilan_searchdmilan_component__WEBPACK_IMPORTED_MODULE_9__["SearchdmilanComponent"],
                _k_level_k_level_component__WEBPACK_IMPORTED_MODULE_10__["KLevelComponent"],
                _k_level_search_searchklevel_searchklevel_component__WEBPACK_IMPORTED_MODULE_12__["SearchklevelComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.configUrl = "http://106.0.37.69:8282/api/";
    }
    HttpService.prototype.create = function (data, url) {
        return this.http.post(this.configUrl + url, data);
    };
    HttpService.prototype.getReq = function (URL) {
        return this.http.get(this.configUrl + URL);
    };
    HttpService.prototype.postReq = function (URL, obj) {
        return this.http.post(this.configUrl + URL, obj);
    };
    HttpService.prototype.getLogin = function (URL) {
        return this.http.get(URL);
    };
    HttpService.prototype.getKLData = function (URL) {
        return this.http.get(URL);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/k-level/k-level.component.css":
/*!***********************************************!*\
  !*** ./src/app/k-level/k-level.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2stbGV2ZWwvay1sZXZlbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/k-level/k-level.component.html":
/*!************************************************!*\
  !*** ./src/app/k-level/k-level.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form name=\"form\" (ngSubmit)=\" addToList()\" #f=\"ngForm\" novalidate>\n  <div class=\"row pt10\">\n    <!-- Jilla Name section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Jilla Name</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"klCurrent.jilla\" placeholder=\"Jilla Name\" name=\"jillaName\"\n        #jillaName=\"ngModel\" />\n    </div>\n    <!-- Jilla Sannidatha section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Jilla Sannidatha</span>\n      </div>\n      <select class=\"custom-select\" name=\"jillaSannidatha\" [(ngModel)]=\"klCurrent.jSannidatha.id\"\n        #jillaSannidatha=\"ngModel\" (change)=\"setName(klCurrent.jSannidatha.id,'jilla')\">\n        <option hidden selected></option>\n        <option *ngFor=\"let jsl of jSannidathaList\" [ngValue]=\"jsl.id\">{{jsl.name}}</option>\n      </select>\n    </div>\n    <!-- Jilla Sannidatha dob section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Jilla Sannidatha DOB</span>\n      </div>\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"klCurrent.jSannidatha.dob\" name=\"jillaSannidathaDOB\"\n        #jillaSannidathaDOB=\"ngModel\" readonly />\n    </div>\n    <!-- Jilla Sannidatha phone section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Jilla Sannidatha phone</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"klCurrent.jSannidatha.phone\" name=\"jillaSannidathaphone\"\n        #jillaSannidathaphone=\"ngModel\" readonly />\n    </div>\n  </div>\n  <div class=\"row pt10\">\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <!-- Taluka Name Section in form -->\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Taluka Name</span>\n      </div>\n      <input class=\"form-control\" type=\"text\" placeholder=\"Taluka Name\" [(ngModel)]=\"klCurrent.taluka\" name=\"talukaName\"\n        #talukaName=\"ngModel\" />\n    </div>\n    <!-- Taluka Sannidatha Section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Taluka Sannidatha</span>\n      </div>\n      <select class=\"custom-select\" name=\"talukaSannidatha\" [(ngModel)]=\"klCurrent.tSannidatha.id\"\n        #talukaSannidatha=\"ngModel\" (change)=\"setName(klCurrent.tSannidatha.id,'taluka')\">\n        <option hidden selected></option>\n        <option *ngFor=\"let tsl of tSannidathaList\" [ngValue]=\"tsl.id\">{{tsl.name}}</option>\n      </select>\n    </div>\n    <!-- Taluka Sannidatha dob section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Taluka Sannidatha DOB</span>\n      </div>\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"klCurrent.tSannidatha.dOB\" name=\"talukaSannidathaDOB\"\n        #talukaSannidathaDOB=\"ngModel\" readonly />\n    </div>\n    <!-- Taluka Sannidatha phone section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">`\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Taluka Sannidatha phone</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"klCurrent.tSannidatha.phone\" name=\"talukaSannidathaphone\"\n        #talukaSannidathaphone=\"ngModel\" readonly />\n    </div>\n  </div>\n  <div class=\"row pt10\">\n    <!-- Group Name section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Group Name</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"klCurrent.group\" placeholder=\"Group Name\" name=\"groupName\"\n        #groupName=\"ngModel\" />\n    </div>\n    <!-- Avekshak Name section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Avekshak</span>\n      </div>\n      <select class=\"custom-select\" name=\"avekshakName\" (change)=\"setName(klCurrent.avekshak.id,'avekshak')\"\n        [(ngModel)]=\"klCurrent.avekshak.id\" #avekshakName=\"ngModel\">\n        <option hidden selected></option>\n        <option *ngFor=\"let avl of avekshakList\" [ngValue]=\"avl.id\">{{avl.name}}</option>\n      </select>\n    </div>\n    <!-- Jilla Name section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Avekshak DOB</span>\n      </div>\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"klCurrent.avekshak.dob\" name=\"avekshakDOB\"\n        #avekshakDOB=\"ngModel\" readonly />\n    </div>\n    <!-- Jilla Name section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Avekshak phone</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"klCurrent.avekshak.phone\" name=\"avekshakphone\" #avekshakphone=\"ngModel\"\n        readonly />\n    </div>\n  </div>\n  <div class=\"row pt10\">\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <!-- Country Section in form -->\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Country</span>\n      </div>\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"klCurrent.country\" name=\"country\" #country=\"ngModel\" />\n    </div>\n    <!-- State Section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Sanghat/State</span>\n      </div>\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"klCurrent.sanghat\" name=\"state\" #state=\"ngModel\" />\n    </div>\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <!-- Kendra Name Section in form -->\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Kendra Name</span>\n      </div>\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"klCurrent.kendra\" name=\"kendraName\" #kendraName=\"ngModel\" />\n    </div>\n    <!-- Kendra Type Section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Kendra Type</span>\n      </div>\n      <select class=\"custom-select\" name=\"kendraType\" [(ngModel)]=\"klCurrent.kendraType\" #kendraType=\"ngModel\">\n        <option hidden selected></option>\n        <option *ngFor=\"let ktl of kendraTypeList\">{{ktl}}</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"row pt10\">\n    <!-- yuva/yuvati section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">gender</span>\n      </div>\n      <select class=\"custom-select\" name=\"yuvaYuvati\" [(ngModel)]=\"klCurrent.yuvaYuvati\" #yuvaYuvati=\"ngModel\">\n        <option hidden selected></option>\n        <option *ngFor=\"let gt of genderType\">{{gt}}</option>\n      </select>\n    </div>\n    <!-- Category section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Category</span>\n      </div>\n      <select class=\"custom-select\" name=\"category\" [(ngModel)]=\"klCurrent.category\" #category=\"ngModel\">\n        <option hidden selected></option>\n        <option *ngFor=\"let cat of categoryList\">{{cat}}</option>\n      </select>\n    </div>\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <!-- Kendra Number Section in form -->\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Kendra No.</span>\n      </div>\n      <input class=\"form-control quantity\" type=\"number\" [(ngModel)]=\"klCurrent.kendraNumber\" name=\"kendraNumber\"\n        #kendraNumber=\"ngModel\" />\n    </div>\n    <!-- Status Section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Status</span>\n      </div>\n      <select class=\"custom-select\" name=\"status\" [(ngModel)]=\"klCurrent.status\" #status=\"ngModel\">\n        <option hidden selected></option>\n        <option *ngFor=\"let stat of statusList\">{{stat}}</option>\n      </select>\n    </div>\n  </div>\n\n\n\n  <div class=\"row pt10\">\n    <!-- sanchalak1 section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Sanchalak1</span>\n      </div>\n      <select class=\"custom-select\" name=\"sanchalak1\" (change)=\"setName(klCurrent.sanchalak1.id,'s1')\"\n        [(ngModel)]=\"klCurrent.sanchalak1.id\" #sanchalak1=\"ngModel\">\n        <option hidden selected></option>\n        <option *ngFor=\"let sck of sanchalakList\" [ngValue]=\"sck.id\">{{sck.name}}</option>\n      </select>\n    </div>\n    <!-- merged to section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Sanchalak1 DOB</span>\n      </div>\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"klCurrent.sanchalak1.dob\" placeholder=\"Merged To\"\n        name=\"sanchalak1DOB\" #sanchalak1DOB=\"ngModel\" readonly />\n    </div>\n    <!-- merged to section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Sanchalak1 phone</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"klCurrent.sanchalak1.phone\" placeholder=\"Merged To\"\n        name=\"sanchalak1phone\" #sanchalak1phone=\"ngModel\" readonly />\n    </div>\n  </div>\n\n  <div class=\"row pt10\">\n\n\n    <!-- sanchalak2 section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Sanchalak2</span>\n      </div>\n      <select class=\"custom-select\" name=\"sanchalak2\" (change)=\"setName(klCurrent.sanchalak2.id,'s2')\"\n        [(ngModel)]=\"klCurrent.sanchalak2.id\" #sanchalak2=\"ngModel\">\n        <option hidden selected></option>\n        <option *ngFor=\"let sck of sanchalakList\" [ngValue]=\"sck.id\">{{sck.name}}</option>\n      </select>\n    </div>\n    <!-- merged to section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Sanchalak2 DOB</span>\n      </div>\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"klCurrent.sanchalak2.dob\" placeholder=\"Merged To\"\n        name=\"sanchalak2DOB\" #sanchalak2DOB=\"ngModel\" readonly />\n    </div>\n    <!-- merged to section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Sanchalak2 phone</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"klCurrent.sanchalak2.phone\" placeholder=\"Merged To\"\n        name=\"sanchalak2phone\" #sanchalak2phone=\"ngModel\" readonly />\n    </div>\n  </div>\n  <div class=\"row pt10\">\n    <!-- Minimum Attendance section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Attendance</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"klCurrent.minAttendance\" placeholder=\"Min Attendance\"\n        name=\"minAttendance\" #minAttendance=\"ngModel\" />\n    </div>\n    <!-- Maxium Attendance section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Attendance</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"klCurrent.maxAttendance\" placeholder=\"Max Attendance\"\n        name=\"maxAttendance\" #maxAttendance=\"ngModel\" />\n    </div>\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <!-- Yuva kendra conducted in Section in form -->\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Conducted Place</span>\n      </div>\n      <select class=\"custom-select\" name=\"conductedIn\" [(ngModel)]=\"klCurrent.ykConducted\" #conductedIn=\"ngModel\">\n        <option hidden selected></option>\n        <option *ngFor=\"let con of conducted\">{{con}}</option>\n      </select>\n    </div>\n    <!-- Name of Village of Yuvakendra Section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Village</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"klCurrent.villageOfYK\" placeholder=\"Village Of YK\" name=\"villageOfYK\"\n        #villageOfYK=\"ngModel\" />\n    </div>\n  </div>\n\n\n\n\n  <div class=\"row pt10\">\n\n    <!-- Land Mark section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Land Mark</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"klCurrent.landMark\" placeholder=\"Nearest Place\" name=\"landMark\"\n        #landMark=\"ngModel\" />\n    </div>\n    <!-- Day Of Yuvakendra section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Day Of YK</span>\n      </div>\n      <select class=\"custom-select\" name=\"weekDay\" [(ngModel)]=\"klCurrent.dayOfYK\" #weekDay=\"ngModel\">\n        <option hidden selected></option>\n        <option *ngFor=\"let day of daysList\">{{day}}</option>\n      </select>\n    </div>\n    <!-- Time Of Yuvakendra section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Time of YK</span>\n      </div>\n      <input type=\"time\" class=\"form-control\" [(ngModel)]=\"klCurrent.timeOfYK\" name=\"timeOfYK\" #timeOfYK=\"ngModel\" />\n    </div>\n    <!-- Swadhyay Kendra based on Area/Village/Vistar section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Swadhyay Kendra</span>\n      </div>\n      <input class=\"form-control\" placeholder=\"Area/Village/Vistar\" [(ngModel)]=\"klCurrent.swadhyayLoc\"\n        name=\"swadhyayLoc\" #swadhyayLoc=\"ngModel\" />\n    </div>\n  </div>\n\n\n  <div class=\"row pt10\">\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Year of Kendra</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"klCurrent.yearOfKendra\" placeholder=\"Year Merged\" name=\"yearOfKendra\"\n        #yearOfKendra=\"ngModel\" />\n    </div>\n    <!-- year merged section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Year</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"klCurrent.yearMerged\" placeholder=\"Year Merged\" name=\"yearMerged\"\n        #yearMerged=\"ngModel\" />\n    </div>\n    <!-- merged to section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Merge</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"klCurrent.mergedTo\" placeholder=\"Merged To\" name=\"mergedTo\"\n        #mergedTo=\"ngModel\" />\n    </div>\n    <!--  Village (As Per Swadhyay Kendra) section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\"> Village </span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"klCurrent.swadhyayVillage\" placeholder=\"(As Per Swadhyay Kendra)\"\n        name=\"swadhyayVillage\" #swadhyayVillage=\"ngModel\" />\n    </div>\n  </div>\n\n  <div class=\"row pt10\">\n    <!-- YK Sthal Pincode section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Pincode</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"klCurrent.yKSthalPin\" name=\"yKSthalPin\" #yKSthalPin=\"ngModel\" />\n    </div>\n    <!-- Yuvakendra Sthal - Complete postal Address section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Address</span>\n      </div>\n      <textarea class=\"form-control\" [(ngModel)]=\"klCurrent.yKSthal\"\n        placeholder=\"Yuvakendra Sthal - Complete postal Address \" name=\"yKSthal\" #yKSthal=\"ngModel\"></textarea>\n    </div>\n\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <button [disabled]=\"loading\" class=\"tn btn-primary btn-sm\">Add</button>\n    </div>\n  </div>\n</form>\n\n\n<div class=\"mt-4\">\n  <table class=\"table\" id=\"table_id\" *ngIf=\"klList.length\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>Country</th>\n        <th>Sanghta/State</th>\n        <th>Jilla Name</th>\n        <th>Jilla Sannidatha</th>\n        <th>Jilla Sannidatha Dob</th>\n        <th>Jilla Sannidatha phone</th>\n        <th>Taluka Name</th>\n        <th>Taluka Sannidatha</th>\n        <th>Taluka Sannidatha Dob</th>\n        <th>Taluka Sannidatha phone</th>\n        <th>Group Name </th>\n        <th>Avekshak Name</th>\n        <th>Avekshak phone</th>\n        <th>Avekshak Dob</th>\n        <th>Kendra Name</th>\n        <th>Kendra Type</th>\n        <th>Yuva/Yuvati</th>\n        <th>Year Started</th>\n        <th>Category</th>\n        <th>Kendra No.</th>\n        <th>Status</th>\n        <th>Year Merged</th>\n        <th>Merged to</th>\n        <th>Sanchalak1</th>\n        <th>Sanchalak1 phone</th>\n        <th>Sanchalak1 Dob</th>\n        <th>Sanchalak2</th>\n        <th>Sanchalak2 phone</th>\n        <th>Sanchalak2 Dob</th>\n        <th>Min Attendance</th>\n        <th>Max Attendance</th>\n        <th>YK Conducted In</th>\n        <th>Name of Village</th>\n        <th>Landmark</th>\n        <th>YK sthal</th>\n        <th>Pincode</th>\n        <th>Day</th>\n        <th>Time of YK</th>\n        <th>Swadhyay Based On</th>\n        <th>Village(swadhyay kendra)</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <!-- displays details filled in form -->\n    <tbody id=\"table_id\">\n      <tr *ngFor=\"let kl of klList;let i = index;let f= first;let l= last\">\n        <td>\n          <span>{{kl.country}}</span>\n        </td>\n        <td>\n          <span>{{kl.sanghat}}</span>\n        </td>\n        <td>\n          <span>{{kl.jilla}}</span>\n        </td>\n        <td>\n          <span>{{kl.jSannidatha.name}}</span>\n        </td>\n        <td>\n          <span>{{kl.jSannidatha.dob | date}}</span>\n        </td>\n        <td>\n          <span>{{kl.jSannidatha.phone}}</span>\n        </td>\n        <td>\n          <span>{{kl.taluka}}</span>\n        </td>\n        <td>\n          <span>{{kl.tSannidatha.name}}</span>\n        </td>\n        <td>\n          <span>{{kl.tSannidatha.dob | date}}</span>\n        </td>\n        <td>\n          <span>{{kl.tSannidatha.phone}}</span>\n        </td>\n        <td>\n          <span>{{kl.group}}</span>\n        </td>\n        <td>\n          <span>{{kl.avekshak.name}}</span>\n        </td>\n        <td>\n          <span>{{kl.avekshak.phone}}</span>\n        </td>\n        <td>\n          <span>{{kl.avekshak.dob| date}}</span>\n        </td>\n        <td>\n          <span>{{kl.kendra}}</span>\n        </td>\n        <td>\n          <span>{{kl.kendraType}}</span>\n        </td>\n        <td>\n          <span>{{kl.yuvaYuvati}}</span>\n        </td>\n        <td>\n          <span>{{kl.yearOfKendra}}</span>\n        </td>\n        <td>\n          <span>{{kl.category}}</span>\n        </td>\n        <td>\n          <span>{{kl.kendraNumber}}</span>\n        </td>\n        <td>\n          <span>{{kl.status}}</span>\n        </td>\n        <td>\n          <span>{{kl.yearMerged}}</span>\n        </td>\n        <td>\n          <span>{{kl.mergedTo}}</span>\n        </td>\n        <td>\n          <span>{{kl.sanchalak1.name}}</span>\n        </td>\n        <td>\n          <span>{{kl.sanchalak1.phone}}</span>\n        </td>\n        <td>\n          <span>{{kl.sanchalak1.dob| date}}</span>\n        </td>\n        <td>\n          <span>{{kl.sanchalak2.name}}</span>\n        </td>\n        <td>\n          <span>{{kl.sanchalak2.phone}}</span>\n        </td>\n        <td>\n          <span>{{kl.sanchalak2.dob| date}}</span>\n        </td>\n        <td>\n          <span>{{kl.minAttendance}}</span>\n        </td>\n        <td>\n          <span>{{kl.maxAttendance}}</span>\n        </td>\n        <td>\n          <span>{{kl.ykConducted}}</span>\n        </td>\n        <td>\n          <span>{{kl.villageOfYK}}</span>\n        </td>\n        <td>\n          <span>{{kl.landMark}}</span>\n        </td>\n        <td>\n          <span>{{kl.yKSthal}}</span>\n        </td>\n        <td>\n          <span>{{kl.yKSthalPin}}</span>\n        </td>\n        <td>\n          <span>{{kl.dayOfYK}}</span>\n        </td>\n        <td>\n          <span>{{kl.timeOfYK}}</span>\n        </td>\n        <td>\n          <span>{{kl.swadhyayLoc}}</span>\n        </td>\n        <td>\n          <span>{{kl.swadhyayVillage}}</span>\n        </td>\n        <td>\n          <!-- Delete's the particular row data from the table -->\n          <button type=\"button\" (click)=\"delete(i)\" class=\"btn btn-primary btn-sm\">Delete</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <!-- Submits all the data of the row to database -->\n  <button *ngIf=\"klList.length\" class=\"btn btn-primary btn-sm\" (click)=\"submit()\">Submit</button>\n</div>\n<!--\n  country - i/p box /\n  sanghat/state - i/p box\n  jllla name - i/p box\n  jilla sannidhata - select box (from json)\n  taluka name - i/p box\n  taluka sannidhata - select box (from json)\n  groupname - i/p box\n  avekshak name - select box (from json)\n  kendra name - i/p \n  kendra type - select (Yuva kendra / DPC )\n  YuvaYuvati - selecct (Yuva / Yuvati)\n  Year in which kendra Started - 1997\n  category - select (Village , City Vistar)\n  Kendra number - i/p (only digits)\n  status - selct (Active,Merged,Inactive)\n  year merged - i/p\n  merged to - i/p\n  sanchalak1 - select (from json)\n  sanchalak2 - select (from json)\n  min attendence - i/p\n  max attendance - i/p\n  Yuva kendra conducted in - selct (Home,School or College,Classes,Others)\n  Name of Village of Yuvakendra - i/p \n  Name of Nearest Bus Stand Or Main Road (Land Mark) - i/p\n  Day Of Yuvakendra - Weekday - slect (from json)\n\n\n\n\n  Time Of Yuvakendra - i/p (Placeholder \"format HH:MM AM/PM\")\n  Swadhyay Kendra based on Area/Village/Vistar - i/p\n  Village (As Per Swadhyay Kendra) - i/p\n  Yuvakendra Sthal - Complete postal Address (compulsory) - textarea\n  Yuva Kendra Sthal - Pincode (compulsory) - i/p (only digits)\n  \n-->\n<!-- year merged section in form -->"

/***/ }),

/***/ "./src/app/k-level/k-level.component.ts":
/*!**********************************************!*\
  !*** ./src/app/k-level/k-level.component.ts ***!
  \**********************************************/
/*! exports provided: KLevelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KLevelComponent", function() { return KLevelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var KLevelComponent = /** @class */ (function () {
    function KLevelComponent(http, router) {
        this.http = http;
        this.router = router;
        this.klList = [];
        this.klCurrent = {
            country: "",
            sanghat: "",
            jilla: "",
            taluka: "",
            group: "",
            kendra: "",
            jSannidatha: { "phone": "", "dob": new Date(), "name": "", "role": "" },
            tSannidatha: { "phone": "", "dob": new Date(), "name": "", "role": "" },
            avekshak: { "phone": "", "dob": new Date(), "name": "", "role": "" },
            sanchalak1: { "phone": "", "dob": new Date(), "name": "", "role": "" },
            sanchalak2: { "phone": "", "dob": new Date(), "name": "", "role": "" },
            kendraType: "",
            yuvaYuvati: "",
            yearOfKendra: "",
            category: "",
            kendraNumber: "",
            status: "",
            yearMerged: "",
            mergedTo: "",
            minAttendance: "",
            maxAttendance: "",
            villageOfYK: "",
            landMark: "",
            yKSthal: "",
            yKSthalPin: "",
            dayOfYK: "",
            timeOfYK: "",
            swadhyayLoc: "",
            swadhyayVillage: "",
            ykConducted: "",
        };
        this.kendraTypeList = ["YK", "DPC"];
        this.genderType = ["yuva", "yuvati"];
        this.categoryList = ["Village", "City Vistar"];
        this.statusList = ["Active", "Merged", "Inactive"];
        this.conducted = ["Home", "School", "College", "Classes", "Other"];
    }
    KLevelComponent.prototype.ngOnInit = function () {
        var _this = this;
        var ak = this.http.getReq('yuvan/getAllByRole/Avekshak');
        var sk = this.http.getReq('yuvan/getAllByRole/Sanchalak');
        var js = this.http.getReq('yuvan/getAllByRole/Jilla-sannidhata');
        var ts = this.http.getReq('yuvan/getAllByRole/Taluka-sannidhata');
        var wd = this.http.getLogin('assets/weekdays.json');
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([ak, sk, js, ts, wd]).subscribe(function (resultList) {
            _this.avekshakList = resultList[0];
            _this.sanchalakList = resultList[1];
            _this.jSannidathaList = resultList[2];
            _this.tSannidathaList = resultList[3];
            _this.daysList = resultList[4];
        });
    };
    KLevelComponent.prototype.addToList = function () {
        this.klList.unshift(this.klCurrent);
        this.klCurrent = {
            country: "",
            sanghat: "",
            jilla: "",
            taluka: "",
            group: "",
            kendra: "",
            jSannidatha: { "phone": "", "dob": new Date(), "name": "", "role": "" },
            tSannidatha: { "phone": "", "dob": new Date(), "name": "", "role": "" },
            avekshak: { "phone": "", "dob": new Date(), "name": "", "role": "" },
            sanchalak1: { "phone": "", "dob": new Date(), "name": "", "role": "" },
            sanchalak2: { "phone": "", "dob": new Date(), "name": "", "role": "" },
            kendraType: "",
            yuvaYuvati: "",
            yearOfKendra: "",
            category: "",
            kendraNumber: "",
            status: "",
            yearMerged: "",
            mergedTo: "",
            minAttendance: "",
            maxAttendance: "",
            villageOfYK: "",
            landMark: "",
            yKSthal: "",
            yKSthalPin: "",
            dayOfYK: "",
            timeOfYK: "",
            swadhyayLoc: "",
            swadhyayVillage: "",
            ykConducted: "",
        };
        console.log(this.klList);
    };
    KLevelComponent.prototype.setName = function (value, role) {
        var temp;
        switch (role) {
            case "jilla": {
                temp = this.jSannidathaList.filter(function (t) { return t.id == value; });
                this.klCurrent.jSannidatha.phone = temp[0].phone;
                this.klCurrent.jSannidatha.name = temp[0].name;
                this.klCurrent.jSannidatha.role = temp[0].role;
                this.klCurrent.jSannidatha.id = temp[0].id;
                this.klCurrent.jSannidatha.dob = new Date(temp[0].dob);
                break;
            }
            case "taluka": {
                temp = this.tSannidathaList.filter(function (t) { return t.id == value; });
                this.klCurrent.tSannidatha.phone = temp[0].phone;
                this.klCurrent.tSannidatha.name = temp[0].name;
                this.klCurrent.tSannidatha.role = temp[0].role;
                this.klCurrent.tSannidatha.id = temp[0].id;
                this.klCurrent.tSannidatha.dob = new Date(temp[0].dob);
                break;
            }
            case "avekshak": {
                temp = this.avekshakList.filter(function (t) { return t.id == value; });
                this.klCurrent.avekshak.phone = temp[0].phone;
                this.klCurrent.avekshak.name = temp[0].name;
                this.klCurrent.avekshak.role = temp[0].role;
                this.klCurrent.avekshak.id = temp[0].id;
                this.klCurrent.avekshak.dob = new Date(temp[0].dob);
                break;
            }
            case "s1": {
                temp = this.sanchalakList.filter(function (t) { return t.id == value; });
                this.klCurrent.sanchalak1.phone = temp[0].phone;
                this.klCurrent.sanchalak1.name = temp[0].name;
                this.klCurrent.sanchalak1.role = temp[0].role;
                this.klCurrent.sanchalak1.id = temp[0].id;
                this.klCurrent.sanchalak1.dob = new Date(temp[0].dob);
                break;
            }
            case "s2": {
                temp = this.sanchalakList.filter(function (t) { return t.id == value; });
                this.klCurrent.sanchalak2.phone = temp[0].phone;
                this.klCurrent.sanchalak2.name = temp[0].name;
                this.klCurrent.sanchalak2.role = temp[0].role;
                this.klCurrent.sanchalak2.id = temp[0].id;
                this.klCurrent.sanchalak2.dob = new Date(temp[0].dob);
                break;
            }
        }
    };
    KLevelComponent.prototype.submit = function () {
        var _this = this;
        console.log(this.klList);
        this.http.create(this.klList, 'kendra/create').subscribe(function (resp) {
            _this.router.navigate(['/', 'searchklevel']);
        });
    };
    KLevelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-k-level',
            template: __webpack_require__(/*! ./k-level.component.html */ "./src/app/k-level/k-level.component.html"),
            styles: [__webpack_require__(/*! ./k-level.component.css */ "./src/app/k-level/k-level.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], KLevelComponent);
    return KLevelComponent;
}());



/***/ }),

/***/ "./src/app/k-level/search/searchklevel/searchklevel.component.css":
/*!************************************************************************!*\
  !*** ./src/app/k-level/search/searchklevel/searchklevel.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2stbGV2ZWwvc2VhcmNoL3NlYXJjaGtsZXZlbC9zZWFyY2hrbGV2ZWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/k-level/search/searchklevel/searchklevel.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/k-level/search/searchklevel/searchklevel.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" mt-4\">\n    <div class=\"clearfix\">\n        <span class=\"float-left form-group col-3\">\n            <select name=\"Nav\" [(ngModel)]=\"currLoc\" (change)=\"navigate(currLoc)\">\n                <option value=\"searchklevel\">k-level</option>\n                <option value=\"searchdmilan\">yuvan</option>\n            </select>\n        </span>\n        <span class=\"float-right col-1\">\n            <button class=\"btn btn-primary btn-sm float-right\" (click)=\"addToList()\">Add</button>\n        </span>\n    </div>\n    <!-- Displays data which is retrived from database -->\n    <table class=\"table\" id=\"table_id\" *ngIf=\"klList.length\">\n        <thead class=\"thead-dark\">\n            <tr>\n                <th>Country</th>\n                <th>Sanghta/State</th>\n                <th>Jilla Name</th>\n                <th>Jilla Sannidhata</th>\n                <th>Jilla Sannidhata Dob</th>\n                <th>Jilla Sannidhata Contact</th>\n                <th>Taluka Name</th>\n                <th>Taluka Sannidhata</th>\n                <th>Taluka Sannidhata Dob</th>\n                <th>Taluka Sannidhata Contact</th>\n                <th>Group Name </th>\n                <th>Avekshak Name</th>\n                <th>Avekshak Contact</th>\n                <th>Avekshak Dob</th>\n                <th>Kendra Name</th>\n                <th>Kendra Type</th>\n                <th>Yuva/Yuvati</th>\n                <th>Year Started</th>\n                <th>Category</th>\n                <th>Kendra No.</th>\n                <th>Status</th>\n                <th>Year Merged</th>\n                <th>Merged to</th>\n                <th>Sanchalak1</th>\n                <th>Sanchalak1 Contact</th>\n                <th>Sanchalak1 Dob</th>\n                <th>Sanchalak2</th>\n                <th>Sanchalak2 Contact</th>\n                <th>Sanchalak2 Dob</th>\n                <th>Min Attendance</th>\n                <th>Max Attendance</th>\n                <th>YK Conducted In</th>\n                <th>Name of Village</th>\n                <th>Landmark</th>\n                <th>YK sthal</th>\n                <th>Pincode</th>\n                <th>Day</th>\n                <th>Time of YK</th>\n                <th>Swadhyay Based On</th>\n                <th>Village(swadhyay kendra)</th>\n                <th>Action</th>\n            </tr>\n        </thead>\n        <tbody id=\"table_id\">\n            <tr *ngFor=\"let kl of klList;let i = index\">\n\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.country}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><input type=\"text\" [(ngModel)]=\"kl.country\" /></span>\n\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.sanghat}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><input type=\"text\" [(ngModel)]=\"kl.sanghat\" /></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.jilla}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><input type=\"text\" [(ngModel)]=\"kl.jilla\" /></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.jSannidatha.name}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><select [(ngModel)]=\"kl.jSannidatha.name\"\n                            (change)=\"setName(kl.jSannidatha.name,'jilla',i)\">\n                            <option hidden selected></option>\n                            <option *ngFor=\"let jsl of jSannidathaList\" [ngValue]=\"jsl.id\">{{jsl.name}}</option>\n                        </select></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.jSannidatha.dob | date}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><input type=\"text\" [(ngModel)]=\"kl.jSannidatha.dob\" readonly/></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.jSannidatha.phone}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><input type=\"text\" [(ngModel)]=\"kl.jSannidatha.phone\" readonly/></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.taluka}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><input type=\"text\" [(ngModel)]=\"kl.taluka\" /></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.tSannidatha.name}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><select [(ngModel)]=\"kl.tSannidatha.name\"\n                            (change)=\"setName(kl.tSannidatha.name,'taluka',i)\">\n                            <option hidden selected></option>\n                            <option *ngFor=\"let tsl of tSannidathaList\" [ngValue]=\"tsl.id\">{{tsl.name}}</option>\n                        </select></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.tSannidatha.dob | date }}</span>\n                    <span *ngIf=\"selectedIndex === i \"><input type=\"text\" [(ngModel)]=\"kl.tSannidatha.dob\" readonly/></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.tSannidatha.phone}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><input type=\"text\" [(ngModel)]=\"kl.tSannidatha.phone\" /></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.group}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><input type=\"text\" [(ngModel)]=\"kl.group\" /></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.avekshak.name}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><select (change)=\"setName(kl.avekshak.name,'avekshak',i)\"\n                            [(ngModel)]=\"kl.avekshak.name\">\n                            <option hidden selected></option>\n                            <option *ngFor=\"let avl of avekshakList\" [ngValue]=\"avl.id\">{{avl.name}}</option>\n                        </select></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.avekshak.phone}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><input type=\"text\" [(ngModel)]=\"kl.avekshak.phone\" /></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.avekshak.dob | date }}</span>\n                    <span *ngIf=\"selectedIndex === i \"><input type=\"text\" [(ngModel)]=\"kl.avekshak.dob \" readonly/></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.kendra}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><input type=\"text\" [(ngModel)]=\"kl.kendra\" /></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.kendraType}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><select [(ngModel)]=\"kl.kendraType\">\n                        <option hidden selected></option>\n                        <option *ngFor=\"let ktl of kendraTypeList\">{{ktl}}</option>\n                    </select></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.yuvaYuvati}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><select [(ngModel)]=\"kl.yuvaYuvati\">\n                            <option hidden selected></option>\n                            <option *ngFor=\"let gt of genderType\">{{gt}}</option>\n                        </select></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.yearOfKendra}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><input type=\"text\" [(ngModel)]=\"kl.yearOfKendra\" /></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.category}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><select [(ngModel)]=\"kl.category\">\n                            <option hidden selected></option>\n                            <option *ngFor=\"let cat of categoryList\">{{cat}}</option>\n                        </select></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.kendraNumber}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><input type=\"text\" [(ngModel)]=\"kl.kendraNumber\" /></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.status}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><select [(ngModel)]=\"kl.status\">\n                            <option hidden selected></option>\n                            <option *ngFor=\"let stat of statusList\">{{stat}}</option>\n                        </select></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.yearMerged}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><input type=\"text\" [(ngModel)]=\"kl.yearMerged\" /></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.mergedTo}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><input type=\"text\" [(ngModel)]=\"kl.mergedTo\" /></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.sanchalak1.name}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><select (change)=\"setName(kl.sanchalak1.name,'s1',i)\"\n                            [(ngModel)]=\"kl.sanchalak1.name\">\n                            <option hidden selected></option>\n                            <option *ngFor=\"let sck of sanchalakList\" [ngValue]=\"sck.id\">{{sck.name}}</option>\n                        </select></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.sanchalak1.phone}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><input type=\"text\" [(ngModel)]=\"kl.sanchalak1.phone\" /></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.sanchalak1.dob | date}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><input type=\"text\" [(ngModel)]=\"kl.sanchalak1.dob\" readonly/></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.sanchalak2.name}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><select (change)=\"setName(kl.sanchalak2.name,'s2',i)\"\n                            [(ngModel)]=\"kl.sanchalak2.name\">\n                            <option hidden selected></option>\n                            <option *ngFor=\"let sck of sanchalakList\" [ngValue]=\"sck.id\">{{sck.name}}</option>\n                        </select></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.sanchalak2.phone}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><input type=\"text\" [(ngModel)]=\"kl.sanchalak2.phone\" /></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.sanchalak2.dob | date}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><input type=\"text\" [(ngModel)]=\"kl.sanchalak2.dob\" readonly/></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.minAttendance}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><input type=\"text\" [(ngModel)]=\"kl.minAttendance\" /></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.maxAttendance}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><input type=\"text\" [(ngModel)]=\"kl.maxAttendance\" /></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.ykConducted}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><select  [(ngModel)]=\"kl.ykConducted\" >\n                            <option hidden selected></option>\n                            <option *ngFor=\"let con of conducted\">{{con}}</option>\n                          </select></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.villageOfYK}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><input type=\"text\" [(ngModel)]=\"kl.villageOfYK\" /></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.landMark}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><input type=\"text\" [(ngModel)]=\"kl.landMark\" /></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.yKSthal}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><input type=\"text\" [(ngModel)]=\"kl.yKSthal\" /></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.yKSthalPin}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><input type=\"text\" [(ngModel)]=\"kl.yKSthalPin\" /></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.dayOfYK}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><select [(ngModel)]=\"kl.dayOfYK\" >\n                            <option hidden selected></option>\n                            <option *ngFor=\"let day of daysList\">{{day}}</option>\n                          </select></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.timeOfYK}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><input type=\"text\" [(ngModel)]=\"kl.timeOfYK\" /></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.swadhyayLoc}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><input type=\"text\" [(ngModel)]=\"kl.swadhyayLoc\" /></span>\n                </td>\n                <td>\n                    <span *ngIf=\"selectedIndex !== i \">{{kl.swadhyayVillage}}</span>\n                    <span *ngIf=\"selectedIndex === i \"><input type=\"text\" [(ngModel)]=\"kl.swadhyayVillage\" /></span>\n                </td>\n\n                <td>\n                    <!-- Edit the particular row data from the table -->\n                    <button type=\"button\" *ngIf=\"selectedIndex == -1\" (click)=\"edit(i)\"\n                        class=\"btn btn-primary btn-sm\">Edit</button>\n                    <button type=\"button\" *ngIf=\"selectedIndex !== -1\" (click)=\"update(kl)\"\n                        class=\"btn btn-primary btn-sm\">Update</button>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n\n</div>"

/***/ }),

/***/ "./src/app/k-level/search/searchklevel/searchklevel.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/k-level/search/searchklevel/searchklevel.component.ts ***!
  \***********************************************************************/
/*! exports provided: SearchklevelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchklevelComponent", function() { return SearchklevelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var SearchklevelComponent = /** @class */ (function () {
    function SearchklevelComponent(http, router) {
        this.http = http;
        this.router = router;
        this.klList = [];
        this.selectedIndex = -1;
        this.kendraTypeList = ["YK", "DPC"];
        this.genderType = ["yuva", "yuvati"];
        this.categoryList = ["Village", "City Vistar"];
        this.statusList = ["Active", "Merged", "Inactive"];
        this.conducted = ["Home", "School", "College", "Classes", "Other"];
    }
    SearchklevelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.init();
        var ak = this.http.getReq('yuvan/getAllByRole/Avekshak');
        var sk = this.http.getReq('yuvan/getAllByRole/Sanchalak');
        var js = this.http.getReq('yuvan/getAllByRole/Jilla-sannidhata');
        var ts = this.http.getReq('yuvan/getAllByRole/Taluka-sannidhata');
        var wd = this.http.getLogin('assets/weekdays.json');
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([ak, sk, js, ts, wd]).subscribe(function (resultList) {
            _this.avekshakList = resultList[0];
            _this.sanchalakList = resultList[1];
            _this.jSannidathaList = resultList[2];
            _this.tSannidathaList = resultList[3];
            _this.daysList = resultList[4];
        });
    };
    SearchklevelComponent.prototype.init = function () {
        var _this = this;
        this.http.getReq('kendra/getAll').subscribe(function (resp) {
            _this.klList = resp;
            _this.selectedIndex = -1;
        });
    };
    SearchklevelComponent.prototype.addToList = function () {
        this.router.navigate(['/', 'k-level']);
    };
    SearchklevelComponent.prototype.edit = function (index) {
        this.selectedIndex = index;
    };
    SearchklevelComponent.prototype.navigate = function (pth) {
        this.router.navigate(['/', pth]);
    };
    SearchklevelComponent.prototype.update = function (obj) {
        var _this = this;
        this.http.postReq('kendra/update', obj).subscribe(function (resp) {
            _this.init();
        });
    };
    SearchklevelComponent.prototype.setName = function (value, role, i) {
        var temp;
        switch (role) {
            case "jilla": {
                temp = this.jSannidathaList.filter(function (t) { return t.id == value; });
                this.klList[i].jSannidatha.phone = temp[0].phone;
                this.klList[i].jSannidatha.dob = new Date(temp[0].dob);
                break;
            }
            case "taluka": {
                temp = this.tSannidathaList.filter(function (t) { return t.id == value; });
                this.klList[i].tSannidatha.phone = temp[0].phone;
                this.klList[i].tSannidatha.dob = new Date(temp[0].dob);
                break;
            }
            case "avekshak": {
                temp = this.avekshakList.filter(function (t) { return t.id == value; });
                this.klList[i].avekshak.phone = temp[0].phone;
                this.klList[i].avekshak.dob = new Date(temp[0].dob);
                break;
            }
            case "s1": {
                temp = this.sanchalakList.filter(function (t) { return t.id == value; });
                this.klList[i].sanchalak1.phone = temp[0].phone;
                this.klList[i].sanchalak1.dob = new Date(temp[0].dob);
                break;
            }
            case "s2": {
                temp = this.sanchalakList.filter(function (t) { return t.id == value; });
                this.klList[i].sanchalak2.phone = temp[0].phone;
                this.klList[i].sanchalak2.dob = new Date(temp[0].dob);
                break;
            }
        }
    };
    SearchklevelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searchklevel',
            template: __webpack_require__(/*! ./searchklevel.component.html */ "./src/app/k-level/search/searchklevel/searchklevel.component.html"),
            styles: [__webpack_require__(/*! ./searchklevel.component.css */ "./src/app/k-level/search/searchklevel/searchklevel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SearchklevelComponent);
    return SearchklevelComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center-screen {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    min-height: 80vh;\r\n  }\r\n \r\n  .text-color{\r\n      color:#286090;\r\n  }\r\n \r\n  .wth33{\r\n      width: 33%;\r\n      border: 1px solid lightgray;\r\n      padding: 20px;\r\n      border-radius: 5px;\r\n  }\r\n \r\n  .text-center{\r\n        text-align: center;\r\n  }\r\n \r\n  .txt-right{\r\n    font-size: 15px;\r\n    text-indent: 40%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7O0VBRUE7TUFDSSxhQUFhO0VBQ2pCOztFQUNBO01BQ0ksVUFBVTtNQUNWLDJCQUEyQjtNQUMzQixhQUFhO01BQ2Isa0JBQWtCO0VBQ3RCOztFQUNBO1FBQ00sa0JBQWtCO0VBQ3hCOztFQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyLXNjcmVlbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbiAgfVxyXG4gXHJcbiAgLnRleHQtY29sb3J7XHJcbiAgICAgIGNvbG9yOiMyODYwOTA7XHJcbiAgfVxyXG4gIC53dGgzM3tcclxuICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIC50ZXh0LWNlbnRlcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC50eHQtcmlnaHR7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB0ZXh0LWluZGVudDogNDAlO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center-screen rounded\">\n  <div class=\"wth33\">\n    <!-- Login page form -->\n    <h2 class=\"text-center\">Kendram</h2>\n    <!-- validate() checks the login id and logs to next page if valid -->\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && validate()\" #f=\"ngForm\" novalidate>\n      <!-- Username field with validation -->\n      <div class=\"form-group\">\n        <small class=\"text-muted\">Username</small>\n        <input type=\"text\" class=\"form-control\" name=\"uname\" [(ngModel)]=\"username\" placeholder=\"Username\" #uname=\"ngModel\"\n          [ngClass]=\"{ 'is-invalid': f.submitted && uname.invalid }\" required />\n        <div *ngIf=\"f.submitted && uname.invalid\" class=\"invalid-feedback\">\n          <div *ngIf=\"uname.errors.required\">Username is required</div>\n        </div>\n      </div>\n      <!-- Password field with validation -->\n      <div class=\"form-group\">\n        <small class=\"text-muted\">Password</small>\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"pwd\" [(ngModel)]=\"password\" #pwd=\"ngModel\"\n          [ngClass]=\"{ 'is-invalid': f.submitted && pwd.invalid }\" required />\n        <div *ngIf=\"f.submitted && pwd.invalid\" class=\"invalid-feedback\">\n          <div *ngIf=\"pwd.errors.required\">Password is required</div>\n        </div>\n      </div>\n      <div class=\"clearfix form-group\">\n        <span class=\"float-right\">\n          <button type=\"submit\" class=\"btn btn-primary\">Sign-in</button>\n        </span>\n      </div>\n    </form>\n    <hr>\n    <div class=\"clearfix\">\n      <a class=\"float-left text-color\" href=\"\">Forgot Password</a>\n      <a href=\"\" class=\"float-right text-color\">Register</a>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.username = "";
        this.password = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.validate = function () {
        var _this = this;
        this.loginService.getLogin('assets/login.json').subscribe(function (resp) {
            var response = resp;
            if (response.username == _this.username) {
                console.log("succes");
                _this.router.navigate(['/', 'searchdmilan']);
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/searchdmilan/searchdmilan.component.css":
/*!*********************************************************!*\
  !*** ./src/app/searchdmilan/searchdmilan.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".i-color{\r\n    background-color: blue;\r\n    color:white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoZG1pbGFuL3NlYXJjaGRtaWxhbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaGRtaWxhbi9zZWFyY2hkbWlsYW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pLWNvbG9ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/searchdmilan/searchdmilan.component.html":
/*!**********************************************************!*\
  !*** ./src/app/searchdmilan/searchdmilan.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" mt-4\">\n  <div class=\"clearfix\">\n    <span class=\"float-left form-group col-3\">\n      <select name=\"Nav\" [(ngModel)]=\"currLoc\" (change)=\"navigate(currLoc)\">\n        <option value=\"searchklevel\">k-level</option>\n        <option value=\"searchdmilan\">yuvan</option>\n      </select>\n    </span>\n    <span class=\"float-right col-1\">\n      <button class=\"btn btn-primary btn-sm float-right\" (click)=\"addToList()\">Add</button>\n    </span>\n  </div>\n  <!-- <div class=\"card-body\">\n    <div *ngIf=\"currentFileUpload\" class=\"progress\">\n      <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" attr.aria-valuenow=\"{{progress.percentage}}\"\n        aria-valuemin=\"0\" aria-valuemax=\"100\" [ngStyle]=\"{width:progress.percentage+'%'}\">\n        {{progress.percentage}}%</div>\n    </div>\n    <label class=\"btn btn-default\">\n      <input type=\"file\" placeholder=\"Host Validation\" (change)=\"selectFile($event)\"\n        style=\"background-color: lightgrey\">\n    </label>\n    <button class=\"btn i-color\" [disabled]=\"!selectedFiles\" (click)=\"upload()\">Upload</button>\n  </div> -->\n  <!-- Displays data which is retrived from database -->\n  <table class=\"table\" id=\"table_id\" *ngIf=\"ykList.length\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>Full Name</th>\n        <th>Role</th>\n        <th>Contact</th>\n        <th>DOB</th>\n      </tr>\n    </thead>\n    <tbody id=\"table_id\">\n      <tr *ngFor=\"let yk of ykList;let i = index\">\n          <td>\n              <span>{{yk.name}}</span>\n            </td>\n            <td>\n              <span>{{yk.role}}</span>\n            </td>\n            <td>\n              <span>{{yk.phone}}</span>\n            </td>\n            <td>\n              <span>{{yk.dob | date}}</span>\n            </td>\n      </tr>\n    </tbody>\n  </table>\n\n</div>"

/***/ }),

/***/ "./src/app/searchdmilan/searchdmilan.component.ts":
/*!********************************************************!*\
  !*** ./src/app/searchdmilan/searchdmilan.component.ts ***!
  \********************************************************/
/*! exports provided: SearchdmilanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchdmilanComponent", function() { return SearchdmilanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SearchdmilanComponent = /** @class */ (function () {
    function SearchdmilanComponent(http, router) {
        this.http = http;
        this.router = router;
        this.ykPush = [];
        this.ykTemp = { name: "", phone: "", dob: new Date(), role: "" };
        this.ykList = [];
        this.progress = { percentage: 0 };
    }
    //gets data from database
    SearchdmilanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.getReq('yuvan/getAll').subscribe(function (resp) {
            _this.ykList = resp;
        });
    };
    //navigates to next page
    SearchdmilanComponent.prototype.addToList = function () {
        // if (this.ykInput) {
        //   let temp = this.ykInput.split(",");
        //   for (let i = 0; i < temp.length; i++) {
        //     this.searchInput(temp[i]);
        //   }
        //   this.http.create(this.ykPush, 'yuvan/create').subscribe(resp => {
        //     this.router.navigate(['/', 'searchdmilan'])
        //   })
        //   this.ykInput = null;
        //   this.ykPush = null;
        // }
        // else {
        //   this.router.navigate(['/', 'yuvan']);
        // }
        this.router.navigate(['/', 'yuvan']);
    };
    // searchInput(ykString) {
    //   let temp = ykString.split("\t");
    //   this.ykTemp.name = temp[7];
    //   this.ykTemp.contact = temp[8];
    //   this.ykTemp.jimmedari = temp[4];
    //   this.ykTemp.kendra = temp[2];
    //   this.ykTemp.kendraType = temp[3];
    //   this.ykTemp.middleName = temp[6];
    //   this.ykTemp.patti = temp[0];
    //   this.ykTemp.taluka = temp[0];
    //   this.ykTemp.surname = temp[5];
    //   this.ykTemp.residence = temp[17];
    //   this.ykTemp.videoKendra = temp[1];
    //   if (temp[9]) {
    //     let date = parseInt(temp[9] + temp[10]);
    //     this.ykTemp.dob.setDate(date);
    //     let month = parseInt(temp[11] + temp[12]);
    //     month -= 1;
    //     this.ykTemp.dob.setMonth(month);
    //     let year = parseInt(temp[13] + temp[14]);
    //     let currDate = new Date();
    //     let currYear = currDate.getFullYear() - 2000;
    //     if (year > 0 && year < currYear) {
    //       this.ykTemp.dob.setFullYear(2000 + year);
    //       console.log(this.ykTemp.dob.getFullYear());
    //     }
    //     else {
    //       this.ykTemp.dob.setFullYear(1900 + year);
    //     }
    //     console.log(this.ykTemp.dob);
    //   }
    //   if (temp[15]) {
    //     let age = parseInt(temp[15] + temp[16]);
    //     this.ykTemp.age = age;
    //   }
    //   this.ykPush.unshift(this.ykTemp);
    //   this.ykTemp = <YuvanModel>{ name: "", age: 0, contact: "", dob: new Date(), jimmedari: "", kendra: "", kendraType: "", middleName: "", patti: "", residence: "", surname: "", taluka: "", videoKendra: "" };
    // }
    //deletes the row based on index value
    SearchdmilanComponent.prototype.delete = function (index) {
        this.ykList.splice(index, 1);
    };
    SearchdmilanComponent.prototype.navigate = function (pth) {
        this.router.navigate(['/', pth]);
    };
    SearchdmilanComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    SearchdmilanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searchdmilan',
            template: __webpack_require__(/*! ./searchdmilan.component.html */ "./src/app/searchdmilan/searchdmilan.component.html"),
            styles: [__webpack_require__(/*! ./searchdmilan.component.css */ "./src/app/searchdmilan/searchdmilan.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SearchdmilanComponent);
    return SearchdmilanComponent;
}());



/***/ }),

/***/ "./src/app/yuvan/yuvan.component.css":
/*!*******************************************!*\
  !*** ./src/app/yuvan/yuvan.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pt10{\r\n    padding-top: 10px;\r\n\r\n}\r\n.quantity::-webkit-inner-spin-button, \r\n.quantity::-webkit-outer-spin-button { \r\n  -webkit-appearance: none; \r\n  margin: 0; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAveXV2YW4veXV2YW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjs7QUFFckI7QUFDQTs7RUFFRSx3QkFBd0I7RUFDeEIsU0FBUztBQUNYIiwiZmlsZSI6InNyYy9hcHAveXV2YW4veXV2YW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wdDEwe1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcblxyXG59XHJcbi5xdWFudGl0eTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgXHJcbi5xdWFudGl0eTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7IFxyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgXHJcbiAgbWFyZ2luOiAwOyBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/yuvan/yuvan.component.html":
/*!********************************************!*\
  !*** ./src/app/yuvan/yuvan.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Form to insert the details of a kendram person -->\n<form name=\"form\" (ngSubmit)=\" f.form.valid && addToList()\" #f=\"ngForm\" novalidate>\n  <!-- Name section in form -->\n  <div class=\"row pt10\">\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\">First and last name</span>\n      </div>\n      <input type=\"text\" class=\"form-control\" name=\"surName\" [(ngModel)]=\"surname\" #surName=\"ngModel\"\n        [ngClass]=\"{'is-invalid': f.submitted && surName.invalid}\" placeholder=\"Surname\" required />\n      <input type=\"text\" class=\"form-control\" name=\"middleName\" [(ngModel)]=\"middlename\" #middleName=\"ngModel\"\n        [ngClass]=\"{'is-invalid': f.submitted && middleName.invalid}\" placeholder=\"Middle Name\" required />\n      <input type=\"text\" class=\"form-control\" name=\"Name\" [(ngModel)]=\"name\" #Name=\"ngModel\"\n        [ngClass]=\"{'is-invalid': f.submitted && Name.invalid}\" placeholder=\"Name\" required />\n      <div class=\"invalid-feedback\">\n        Username is required field\n      </div>\n    </div>\n  </div>\n  <div class=\"row pt10\">\n    <!-- Role section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Role</span>\n      </div>\n      <select class=\"custom-select\" [(ngModel)]=\"ykCurrData.role\" placeholder=\"Role\" name=\"role\" #role=\"ngModel\">\n        <option *ngFor=\"let role of roleList\">{{role}}</option>\n      </select>\n    </div>\n    <!-- Contact section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Phone</span>\n      </div>\n      <input type=\"number\" class=\"form-control col quantity\" [(ngModel)]=\"ykCurrData.phone\" name=\"phone\"\n        #phone=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && phone.invalid }\" required minlength=\"10\"\n        maxlength=\"11\" />\n      <div *ngIf=\"f.submitted && phone.invalid\" class=\"invalid-feedback\">\n        <div *ngIf=\"phone.errors.required\">phone is required</div>\n      </div>\n      <div *ngIf=\"phone.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"phone.errors.minlength\">\n          Too short\n        </div>\n      </div>\n      <!-- <div [hidden]=\"!contact.errors.minlength\">\n          contact must be at least 10 characters long.\n        </div>\n        <div [hidden]=\"!contact.errors.maxlength\">\n          Name cannot be more than 11 characters long.\n        </div> -->\n    </div>\n    <!-- Dob section in form  -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">DoB</span>\n      </div>\n      <input type=\"date\" class=\"form-control col\" [(ngModel)]=\"ykCurrData.dob\" placeholder=\"dob\" name=\"dob\"\n        #dob=\"ngModel\" />\n    </div>\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <!-- <button class=\"btn btn-primary btn-sm\" (click)=\"addToList()\">Add</button>-->\n      <button [disabled]=\"loading\" class=\"tn btn-primary btn-sm\">Add</button>\n    </div>\n  </div>\n</form>\n<!-- Displaying all the filled details in the above form. -->\n<div class=\"mt-4\">\n  <table class=\"table\" id=\"table_id\" *ngIf=\"ykList.length\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>Full Name</th>\n        <th>Role</th>\n        <th>Contact</th>\n        <th>DOB</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <!-- displays details filled in form -->\n    <tbody id=\"table_id\">\n      <tr *ngFor=\"let yk of ykList;let i = index;let f= first;let l= last\">\n        <td>\n          <span>{{yk.name}}</span>\n        </td>\n        <td>\n          <span>{{yk.role}}</span>\n        </td>\n        <td>\n          <span>{{yk.phone}}</span>\n        </td>\n        <td>\n          <span>{{yk.dob | date}}</span>\n        </td>\n        <td>\n          <!-- Delete's the particular row data from the table -->\n          <button type=\"button\" (click)=\"delete(i)\" class=\"btn btn-primary btn-sm\">Delete</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <!-- Submits all the data of the row to database -->\n  <button *ngIf=\"ykList.length\" class=\"btn btn-primary btn-sm\" (click)=\"submit()\">Submit</button>\n</div>"

/***/ }),

/***/ "./src/app/yuvan/yuvan.component.ts":
/*!******************************************!*\
  !*** ./src/app/yuvan/yuvan.component.ts ***!
  \******************************************/
/*! exports provided: YuvanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YuvanComponent", function() { return YuvanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var YuvanComponent = /** @class */ (function () {
    function YuvanComponent(clientHttp, router, formBuilder) {
        this.clientHttp = clientHttp;
        this.router = router;
        this.formBuilder = formBuilder;
        this.ykList = [];
        this.ykCurrData = { name: "", phone: "", dob: new Date(), role: "" };
        this.selectedIndex = 0;
        this.roleList = ["Sanchalak", "Avekshak", "Jilla-sannidhata", "Taluka-sannidhata"];
    }
    YuvanComponent.prototype.ngOnInit = function () {
    };
    //addToList() pushes the data to the ykList array
    YuvanComponent.prototype.addToList = function (dMilanForm) {
        this.ykCurrData.name = this.surname + " " + this.middlename + " " + this.name;
        this.ykList.unshift(this.ykCurrData);
        this.ykCurrData = { name: "", phone: "", dob: new Date(), role: "" };
        this.name = null;
        this.middlename = null;
        this.name = null;
        console.log(this.ykList);
    };
    //delete() deletes the row based on index
    YuvanComponent.prototype.delete = function (index) {
        this.ykList.splice(index, 1);
    };
    //submit() submits all data to database and navigate to searchdmilan component
    YuvanComponent.prototype.submit = function () {
        var _this = this;
        this.clientHttp.create(this.ykList, 'yuvan/create').subscribe(function (resp) {
            _this.router.navigate(['/', 'searchdmilan']);
        });
    };
    YuvanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-yuvan',
            template: __webpack_require__(/*! ./yuvan.component.html */ "./src/app/yuvan/yuvan.component.html"),
            styles: [__webpack_require__(/*! ./yuvan.component.css */ "./src/app/yuvan/yuvan.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], YuvanComponent);
    return YuvanComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\anurag\office Tool\usktools.git\trunk\yk-parent\yk-web\src\main\web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map