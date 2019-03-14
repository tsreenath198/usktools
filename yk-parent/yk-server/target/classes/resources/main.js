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

module.exports = "<form name=\"form\" (ngSubmit)=\" addToList()\" #f=\"ngForm\" novalidate>\n  <div class=\"row pt10\">\n    <!-- Jilla Name section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Jilla Name</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"klCurrent.jillaName\" placeholder=\"Jilla Name\" name=\"jillaName\"\n        #jillaName=\"ngModel\" />\n    </div>\n    <!-- Jilla Sannidhata section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Jilla Sannidhata</span>\n      </div>\n      <select class=\"custom-select\" name=\"jillaSannidhata\" [(ngModel)]=\"klCurrent.jillaSannidhata\"\n        #jillaSannidhata=\"ngModel\" (change)=\"setName(klCurrent.jillaSannidhata,'jilla')\">\n        <option hidden selected></option>\n        <option *ngFor=\"let jsl of jSannidhataList\" [ngValue]=\"jsl.id\">{{jsl.name}}</option>\n      </select>\n    </div>\n    <!-- Jilla Name section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Jilla Sannidhata DOB</span>\n      </div>\n      <input class=\"form-control\" type=\"date\" [(ngModel)]=\"klCurrent.jillaSannidhataDOB\" placeholder=\"Jilla Name\"\n        name=\"jillaSannidhataDOB\" #jillaSannidhataDOB=\"ngModel\" readonly />\n    </div>\n    <!-- Jilla Name section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Jilla Sannidhata Contact</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"klCurrent.jillaSannidhataContact\" placeholder=\"Jilla Name\"\n        name=\"jillaSannidhataContact\" #jillaSannidhataContact=\"ngModel\" readonly />\n    </div>\n  </div>\n  <div class=\"row pt10\">\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <!-- Taluka Name Section in form -->\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Taluka Name</span>\n      </div>\n      <input class=\"form-control\" type=\"text\" placeholder=\"Taluka Name\" [(ngModel)]=\"klCurrent.talukaName\"\n        name=\"talukaName\" #talukaName=\"ngModel\" />\n    </div>\n    <!-- Taluka Sannidhata Section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Taluka Sannidhata</span>\n      </div>\n      <select class=\"custom-select\" name=\"talukaSannidhata\" [(ngModel)]=\"klCurrent.talukaSannidhata\"\n        #talukaSannidhata=\"ngModel\" (change)=\"setName(klCurrent.talukaSannidhata,'taluka')\">\n        <option hidden selected></option>\n        <option *ngFor=\"let tsl of tSannidhataList\" [ngValue]=\"tsl.id\">{{tsl.name}}</option>\n      </select>\n    </div>\n    <!-- Jilla Name section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Taluka Sannidhata DOB</span>\n      </div>\n      <input class=\"form-control\" type=\"date\" [(ngModel)]=\"klCurrent.talukaSannidhataDOB\" placeholder=\"Jilla Name\"\n        name=\"talukaSannidhataDOB\" #talukaSannidhataDOB=\"ngModel\" readonly />\n    </div>\n    <!-- Jilla Name section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Taluka Sannidhata Contact</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"klCurrent.talukaSannidhataContact\" placeholder=\"Jilla Name\"\n        name=\"talukaSannidhataContact\" #talukaSannidhataContact=\"ngModel\" readonly />\n    </div>\n  </div>\n  <div class=\"row pt10\">\n    <!-- Group Name section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Group Name</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"klCurrent.groupName\" placeholder=\"Group Name\" name=\"groupName\"\n        #groupName=\"ngModel\" />\n    </div>\n    <!-- Avekshak Name section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Avekshak</span>\n      </div>\n      <select class=\"custom-select\" name=\"avekshakName\" (change)=\"setName(klCurrent.avekshakName,'avekshak')\"\n        [(ngModel)]=\"klCurrent.avekshakName\" #avekshakName=\"ngModel\">\n        <option hidden selected></option>\n        <option *ngFor=\"let avl of avekshakList\" [ngValue]=\"avl.id\">{{avl.name}}</option>\n      </select>\n    </div>\n    <!-- Jilla Name section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Avekshak DOB</span>\n      </div>\n      <input class=\"form-control\" type=\"date\" [(ngModel)]=\"klCurrent.avekshakDOB\" placeholder=\"Jilla Name\"\n        name=\"avekshakDOB\" #avekshakDOB=\"ngModel\" readonly />\n    </div>\n    <!-- Jilla Name section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Avekshak Contact</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"klCurrent.avekshakContact\" placeholder=\"Jilla Name\"\n        name=\"avekshakContact\" #avekshakContact=\"ngModel\" readonly />\n    </div>\n  </div>\n  <div class=\"row pt10\">\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <!-- Country Section in form -->\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Country</span>\n      </div>\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"klCurrent.country\" name=\"country\" #country=\"ngModel\" />\n    </div>\n    <!-- State Section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Sanghat/State</span>\n      </div>\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"klCurrent.state\" name=\"state\" #state=\"ngModel\" />\n    </div>\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <!-- Kendra Name Section in form -->\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Kendra Name</span>\n      </div>\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"klCurrent.kendraName\" name=\"kendraName\"\n        #kendraName=\"ngModel\" />\n    </div>\n    <!-- Kendra Type Section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Kendra Type</span>\n      </div>\n      <select class=\"custom-select\" name=\"kendraType\" [(ngModel)]=\"klCurrent.kendraType\" #kendraType=\"ngModel\">\n        <option hidden selected></option>\n        <option *ngFor=\"let ktl of kendraTypeList\">{{ktl}}</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"row pt10\">\n    <!-- yuva/yuvati section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">gender</span>\n      </div>\n      <select class=\"custom-select\" name=\"yuvaYuvati\" [(ngModel)]=\"klCurrent.yuvaYuvati\" #yuvaYuvati=\"ngModel\">\n        <option hidden selected></option>\n        <option *ngFor=\"let gt of genderType\">{{gt}}</option>\n      </select>\n    </div>\n    <!-- Category section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Category</span>\n      </div>\n      <select class=\"custom-select\" name=\"category\" [(ngModel)]=\"klCurrent.category\" #category=\"ngModel\">\n        <option hidden selected></option>\n        <option *ngFor=\"let cat of categoryList\">{{cat}}</option>\n      </select>\n    </div>\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <!-- Kendra Number Section in form -->\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Kendra No.</span>\n      </div>\n      <input class=\"form-control quantity\" type=\"number\" [(ngModel)]=\"klCurrent.kendraNumber\" name=\"kendraNumber\"\n        #kendraNumber=\"ngModel\" />\n    </div>\n    <!-- Status Section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Status</span>\n      </div>\n      <select class=\"custom-select\" name=\"status\" [(ngModel)]=\"klCurrent.status\" #status=\"ngModel\">\n        <option hidden selected></option>\n        <option *ngFor=\"let stat of statusList\">{{stat}}</option>\n      </select>\n    </div>\n  </div>\n\n\n\n  <div class=\"row pt10\">\n    <!-- sanchalak1 section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Sanchalak1</span>\n      </div>\n      <select class=\"custom-select\" name=\"sanchalak1\" (change)=\"setName(klCurrent.sanchalak1,'s1')\"\n        [(ngModel)]=\"klCurrent.sanchalak1\" #sanchalak1=\"ngModel\">\n        <option hidden selected></option>\n        <option *ngFor=\"let sck of sanchalakList\" [ngValue]=\"sck.id\">{{sck.name}}</option>\n      </select>\n    </div>\n    <!-- merged to section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Sanchalak1 DOB</span>\n      </div>\n      <input class=\"form-control\" type=\"date\" [(ngModel)]=\"klCurrent.sanchalak1DOB\" placeholder=\"Merged To\"\n        name=\"sanchalak1DOB\" #sanchalak1DOB=\"ngModel\" readonly />\n    </div>\n    <!-- merged to section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Sanchalak1 Contact</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"klCurrent.sanchalak1Contact\" placeholder=\"Merged To\"\n        name=\"sanchalak1Contact\" #sanchalak1Contact=\"ngModel\" readonly />\n    </div>\n  </div>\n\n  <div class=\"row pt10\">\n\n\n    <!-- sanchalak2 section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Sanchalak2</span>\n      </div>\n      <select class=\"custom-select\" name=\"sanchalak2\" (change)=\"setName(klCurrent.sanchalak2,'s2')\"\n        [(ngModel)]=\"klCurrent.sanchalak2\" #sanchalak2=\"ngModel\">\n        <option hidden selected></option>\n        <option *ngFor=\"let sck of sanchalakList\" [ngValue]=\"sck.id\">{{sck.name}}</option>\n      </select>\n    </div>\n    <!-- merged to section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Sanchalak2 DOB</span>\n      </div>\n      <input class=\"form-control\" type=\"date\" [(ngModel)]=\"klCurrent.sanchalak2DOB\" placeholder=\"Merged To\"\n        name=\"sanchalak2DOB\" #sanchalak2DOB=\"ngModel\" readonly />\n    </div>\n    <!-- merged to section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Sanchalak2 Contact</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"klCurrent.sanchalak2Contact\" placeholder=\"Merged To\"\n        name=\"sanchalak2Contact\" #sanchalak2Contact=\"ngModel\" readonly />\n    </div>\n  </div>\n  <div class=\"row pt10\">\n    <!-- Minimum Attendance section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Attendance</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"klCurrent.minAttendance\" placeholder=\"Min Attendance\"\n        name=\"minAttendance\" #minAttendance=\"ngModel\" />\n    </div>\n    <!-- Maxium Attendance section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Attendance</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"klCurrent.maxAttendance\" placeholder=\"Max Attendance\"\n        name=\"maxAttendance\" #maxAttendance=\"ngModel\" />\n    </div>\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <!-- Yuva kendra conducted in Section in form -->\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Conducted Place</span>\n      </div>\n      <select class=\"custom-select\" name=\"conductedIn\" [(ngModel)]=\"klCurrent.YKConducted\" #conductedIn=\"ngModel\">\n        <option hidden selected></option>\n        <option *ngFor=\"let con of conducted\">{{con}}</option>\n      </select>\n    </div>\n    <!-- Name of Village of Yuvakendra Section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Village</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"klCurrent.villageOfYK\" placeholder=\"Village Of YK\" name=\"villageOfYK\"\n        #villageOfYK=\"ngModel\" />\n    </div>\n  </div>\n\n\n\n\n  <div class=\"row pt10\">\n\n    <!-- Land Mark section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Land Mark</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"klCurrent.landMark\" placeholder=\"Nearest Place\" name=\"landMark\"\n        #landMark=\"ngModel\" />\n    </div>\n    <!-- Day Of Yuvakendra section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Day Of YK</span>\n      </div>\n      <select class=\"custom-select\" name=\"weekDay\" [(ngModel)]=\"klCurrent.dayOfYK\" #weekDay=\"ngModel\">\n        <option hidden selected></option>\n        <option *ngFor=\"let day of daysList\">{{day}}</option>\n      </select>\n    </div>\n    <!-- Time Of Yuvakendra section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Time of YK</span>\n      </div>\n      <input type=\"time\" class=\"form-control\" [(ngModel)]=\"klCurrent.timeOfYK\" name=\"timeOfYK\" #timeOfYK=\"ngModel\" />\n    </div>\n    <!-- Swadhyay Kendra based on Area/Village/Vistar section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Swadhyay Kendra</span>\n      </div>\n      <input class=\"form-control\" placeholder=\"Area/Village/Vistar\" [(ngModel)]=\"klCurrent.swadhyayLoc\"\n        name=\"swadhyayLoc\" #swadhyayLoc=\"ngModel\" />\n    </div>\n  </div>\n\n\n  <div class=\"row pt10\">\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Year of Kendra</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"klCurrent.yearOfKendra\" placeholder=\"Year Merged\" name=\"yearOfKendra\"\n        #yearOfKendra=\"ngModel\" />\n    </div>\n    <!-- year merged section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Year</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"klCurrent.yearMerged\" placeholder=\"Year Merged\" name=\"yearMerged\"\n        #yearMerged=\"ngModel\" />\n    </div>\n    <!-- merged to section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Merge</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"klCurrent.mergedTo\" placeholder=\"Merged To\" name=\"mergedTo\"\n        #mergedTo=\"ngModel\" />\n    </div>\n    <!--  Village (As Per Swadhyay Kendra) section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\"> Village </span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"klCurrent.swadhyayVillage\" placeholder=\"(As Per Swadhyay Kendra)\"\n        name=\"swadhyayVillage\" #swadhyayVillage=\"ngModel\" />\n    </div>\n  </div>\n\n  <div class=\"row pt10\">\n    <!-- YK Sthal Pincode section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Pincode</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"klCurrent.yKSthalPin\" name=\"yKSthalPin\" #yKSthalPin=\"ngModel\" />\n    </div>\n    <!-- Yuvakendra Sthal - Complete postal Address section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Address</span>\n      </div>\n      <textarea class=\"form-control\" [(ngModel)]=\"klCurrent.yKSthal\"\n        placeholder=\"Yuvakendra Sthal - Complete postal Address \" name=\"yKSthal\" #yKSthal=\"ngModel\"></textarea>\n    </div>\n\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <button [disabled]=\"loading\" class=\"tn btn-primary btn-sm\">Add</button>\n    </div>\n  </div>\n</form>\n\n\n<div class=\"mt-4\">\n  <table class=\"table\" id=\"table_id\" *ngIf=\"klList.length\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>Jilla Name</th>\n        <th>action</th>\n      </tr>\n    </thead>\n    <!-- displays details filled in form -->\n    <tbody id=\"table_id\">\n      <tr *ngFor=\"let kl of klList;let i = index;let f= first;let l= last\">\n        <td>\n          <span>{{kl.jillaName}}</span>\n        </td>\n        <td>\n          <!-- Delete's the particular row data from the table -->\n          <button type=\"button\" (click)=\"delete(i)\" class=\"btn btn-primary btn-sm\">Delete</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <!-- Submits all the data of the row to database -->\n  <button *ngIf=\"klList.length\" class=\"btn btn-primary btn-sm\" (click)=\"submit()\">Submit</button>\n</div>\n<!--\n  country - i/p box /\n  sanghat/state - i/p box\n  jllla name - i/p box\n  jilla sannidhata - select box (from json)\n  taluka name - i/p box\n  taluka sannidhata - select box (from json)\n  groupname - i/p box\n  avekshak name - select box (from json)\n  kendra name - i/p \n  kendra type - select (Yuva kendra / DPC )\n  YuvaYuvati - selecct (Yuva / Yuvati)\n  Year in which kendra Started - 1997\n  category - select (Village , City Vistar)\n  Kendra number - i/p (only digits)\n  status - selct (Active,Merged,Inactive)\n  year merged - i/p\n  merged to - i/p\n  sanchalak1 - select (from json)\n  sanchalak2 - select (from json)\n  min attendence - i/p\n  max attendance - i/p\n  Yuva kendra conducted in - selct (Home,School or College,Classes,Others)\n  Name of Village of Yuvakendra - i/p \n  Name of Nearest Bus Stand Or Main Road (Land Mark) - i/p\n  Day Of Yuvakendra - Weekday - slect (from json)\n\n\n\n\n  Time Of Yuvakendra - i/p (Placeholder \"format HH:MM AM/PM\")\n  Swadhyay Kendra based on Area/Village/Vistar - i/p\n  Village (As Per Swadhyay Kendra) - i/p\n  Yuvakendra Sthal - Complete postal Address (compulsory) - textarea\n  Yuva Kendra Sthal - Pincode (compulsory) - i/p (only digits)\n  \n-->\n<!-- year merged section in form -->"

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




var KLevelComponent = /** @class */ (function () {
    function KLevelComponent(http) {
        this.http = http;
        this.klList = [];
        this.klCurrent = {
            country: "",
            state: "",
            jillaName: "",
            jillaSannidhata: "",
            jillaSannidhataDOB: new Date(),
            jillaSannidhataContact: "",
            talukaName: "",
            talukaSannidhata: "",
            talukaSannidhataDOB: new Date(),
            talukaSannidhataContact: "",
            groupName: "",
            avekshakName: "",
            avekshakDOB: new Date(),
            avekshakContact: "",
            kendraName: "",
            kendraType: "",
            yuvaYuvati: "",
            yearOfKendra: "",
            category: "",
            kendraNumber: "",
            status: "",
            yearMerged: "",
            mergedTo: "",
            sanchalak1: "",
            sanchalak1DOB: new Date(),
            sanchalak1Contact: "",
            sanchalak2: "",
            sanchalak2DOB: new Date(),
            sanchalak2Contact: "",
            minAttendance: "",
            maxAttendance: "",
            YKConducted: "",
            villageOfYK: "",
            landMark: "",
            yKSthal: "",
            yKSthalPin: "",
            dayOfYK: "",
            timeOfYK: "",
            swadhyayLoc: "",
            swadhyayVillage: ""
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
            _this.jSannidhataList = resultList[2];
            _this.tSannidhataList = resultList[3];
            _this.daysList = resultList[4];
        });
    };
    KLevelComponent.prototype.addToList = function () {
        this.klList.unshift(this.klCurrent);
        this.klCurrent = {
            country: "",
            state: "",
            jillaName: "",
            jillaSannidhata: "",
            jillaSannidhataDOB: new Date(),
            jillaSannidhataContact: "",
            talukaName: "",
            talukaSannidhata: "",
            talukaSannidhataDOB: new Date(),
            talukaSannidhataContact: "",
            groupName: "",
            avekshakName: "",
            avekshakDOB: new Date(),
            avekshakContact: "",
            kendraName: "",
            kendraType: "",
            yuvaYuvati: "",
            yearOfKendra: "",
            category: "",
            kendraNumber: "",
            status: "",
            yearMerged: "",
            mergedTo: "",
            sanchalak1: "",
            sanchalak1DOB: new Date(),
            sanchalak1Contact: "",
            sanchalak2: "",
            sanchalak2DOB: new Date(),
            sanchalak2Contact: "",
            minAttendance: "",
            maxAttendance: "",
            YKConducted: "",
            villageOfYK: "",
            landMark: "",
            yKSthal: "",
            yKSthalPin: "",
            dayOfYK: "",
            timeOfYK: "",
            swadhyayLoc: "",
            swadhyayVillage: ""
        };
        console.log(this.klList);
    };
    KLevelComponent.prototype.setName = function (value, role) {
        var temp;
        switch (role) {
            case "jilla": {
                temp = this.jSannidhataList.filter(function (t) { return t.id == value; });
                this.klCurrent.jillaSannidhataContact = temp[0].contact;
                this.klCurrent.jillaSannidhataDOB = new Date(temp[0].dob);
                break;
            }
            case "taluka": {
                temp = this.tSannidhataList.filter(function (t) { return t.id == value; });
                this.klCurrent.talukaSannidhataContact = temp[0].contact;
                this.klCurrent.talukaSannidhataDOB = new Date(temp[0].dob);
                break;
            }
            case "avekshak": {
                temp = this.avekshakList.filter(function (t) { return t.id == value; });
                this.klCurrent.avekshakContact = temp[0].contact;
                this.klCurrent.avekshakDOB = new Date(temp[0].dob);
                break;
            }
            case "s1": {
                temp = this.sanchalakList.filter(function (t) { return t.id == value; });
                this.klCurrent.sanchalak1Contact = temp[0].contact;
                this.klCurrent.sanchalak1DOB = new Date(temp[0].dob);
                break;
            }
            case "s2": {
                temp = this.sanchalakList.filter(function (t) { return t.id == value; });
                this.klCurrent.sanchalak2Contact = temp[0].contact;
                this.klCurrent.sanchalak2DOB = new Date(temp[0].dob);
                break;
            }
        }
    };
    KLevelComponent.prototype.submit = function () {
        console.log(this.klList);
        this.http.create(this.klList, 'kendra/create').subscribe(function (resp) {
        });
    };
    KLevelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-k-level',
            template: __webpack_require__(/*! ./k-level.component.html */ "./src/app/k-level/k-level.component.html"),
            styles: [__webpack_require__(/*! ./k-level.component.css */ "./src/app/k-level/k-level.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
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

module.exports = "<div class=\" mt-4\">\n    <div class=\"clearfix\">\n      <span class=\"float-left form-group col-3\">\n        <!-- inputfield helps to add the data in the list -->\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"klInput\" placeholder=\"Add K Detail\">\n      </span>\n      <span class=\"float-right col-1\">\n        <button class=\"btn btn-primary btn-sm float-right\" (click)=\"addToList()\">Add</button>\n      </span>\n    </div>\n    <!-- Displays data which is retrived from database -->\n    <table class=\"table\" id=\"table_id\" *ngIf=\"klList.length\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th>Jilla Name</th>\n          <th>Taluka Name</th>\n          <th>Group Name</th>\n          <th>Country</th>\n          <th>State</th>\n          <th>Action</th>\n        </tr>\n      </thead>\n      <tbody id=\"table_id\">\n        <tr *ngFor=\"let kl of klList;let i = index\">\n  \n          <td>\n            <span>{{kl.jillaName}}</span>\n          </td>\n          <td>\n            <span>{{kl.talukaName}}</span>\n          </td>\n          <td>\n            <span>{{kl.groupName}}</span>\n          </td>\n          <td>\n            <span>{{kl.country}}</span>\n          </td>\n          <td>\n            <span>{{kl.state}}</span>\n          </td>\n          <td>\n            <!-- Delete's the particular row data from the table -->\n            <button type=\"button\" (click)=\"delete(i)\" class=\"btn btn-primary btn-sm\">Delete</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  \n  </div>\n"

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



var SearchklevelComponent = /** @class */ (function () {
    function SearchklevelComponent(http) {
        this.http = http;
        this.klList = [];
    }
    SearchklevelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.getReq('kendra/getAll').subscribe(function (resp) {
            _this.klList = resp;
        });
    };
    SearchklevelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searchklevel',
            template: __webpack_require__(/*! ./searchklevel.component.html */ "./src/app/k-level/search/searchklevel/searchklevel.component.html"),
            styles: [__webpack_require__(/*! ./searchklevel.component.css */ "./src/app/k-level/search/searchklevel/searchklevel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaGRtaWxhbi9zZWFyY2hkbWlsYW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/searchdmilan/searchdmilan.component.html":
/*!**********************************************************!*\
  !*** ./src/app/searchdmilan/searchdmilan.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" mt-4\">\n  <div class=\"clearfix\">\n    <span class=\"float-left form-group col-3\">\n      <!-- inputfield helps to add the data in the list -->\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ykInput\" placeholder=\"Add Y Detail\">\n    </span>\n    <span class=\"float-right col-1\">\n      <button class=\"btn btn-primary btn-sm float-right\" (click)=\"addToList()\">Add</button>\n    </span>\n  </div>\n  <!-- Displays data which is retrived from database -->\n  <table class=\"table\" id=\"table_id\" *ngIf=\"ykList.length\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>Taluka</th>\n        <th>Patti</th>\n        <th>Video Kendra</th>\n        <th>Kendra</th>\n        <th>Kendra Type</th>\n        <th>Jimmedari</th>\n        <th colspan=\"3\">Full Name</th>\n        <th>Role</th>\n        <th>Contact</th>\n        <th>DOB</th>\n        <th>Age</th>\n        <th>Residence</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody id=\"table_id\">\n      <tr *ngFor=\"let yk of ykList;let i = index\">\n\n        <td>\n          <span>{{yk.taluka}}</span>\n        </td>\n        <td>\n          <span>{{yk.patti}}</span>\n        </td>\n        <td>\n          <span>{{yk.videoKendra}}</span>\n        </td>\n        <td>\n          <span>{{yk.kendra}}</span>\n        </td>\n        <td>\n          <span>{{yk.kendraType}}</span>\n        </td>\n        <td>\n          <span>{{yk.jimmedari}}</span>\n        </td>\n        <td>\n          <span>{{yk.surname}}</span>\n        </td>\n        <td>\n          <span>{{yk.middleName}}</span>\n        </td>\n        <td>\n          <span>{{yk.name}}</span>\n        </td>\n        <td>\n          <span>{{yk.role}}</span>\n        </td>\n        <td>\n          <span>{{yk.contact}}</span>\n        </td>\n        <td>\n          <span>{{yk.dob | date}}</span>\n        </td>\n        <td>\n          <span>{{yk.age}}</span>\n        </td>\n        <td>\n          <span>{{yk.residence}}</span>\n        </td>\n        <td>\n          <!-- Delete's the particular row data from the table -->\n          <button type=\"button\" (click)=\"delete(i)\" class=\"btn btn-primary btn-sm\">Delete</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n</div>"

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
        this.ykTemp = { name: "", age: 0, contact: "", dob: new Date(), jimmedari: "", kendra: "", kendraType: "", middleName: "", patti: "", residence: "", surname: "", taluka: "", videoKendra: "" };
        this.ykList = [];
    }
    //gets data from database
    SearchdmilanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.getReq('getAll').subscribe(function (resp) {
            _this.ykList = resp;
        });
    };
    //navigates to next page
    SearchdmilanComponent.prototype.addToList = function () {
        if (this.ykInput) {
            this.searchInput();
        }
        else {
            this.router.navigate(['/', 'yuvan']);
        }
    };
    SearchdmilanComponent.prototype.searchInput = function () {
        var _this = this;
        var temp;
        temp = this.ykInput.split("\t");
        this.ykTemp.name = temp[7];
        this.ykTemp.contact = temp[8];
        this.ykTemp.jimmedari = temp[4];
        this.ykTemp.kendra = temp[2];
        this.ykTemp.kendraType = temp[3];
        this.ykTemp.middleName = temp[6];
        this.ykTemp.patti = temp[0];
        this.ykTemp.taluka = temp[0];
        this.ykTemp.surname = temp[5];
        this.ykTemp.residence = temp[17];
        this.ykTemp.videoKendra = temp[1];
        if (temp[9]) {
            var date = parseInt(temp[9] + temp[10]);
            this.ykTemp.dob.setDate(date);
            var month = parseInt(temp[11] + temp[12]);
            month -= 1;
            this.ykTemp.dob.setMonth(month);
            var year = parseInt(temp[13] + temp[14]);
            var currDate = new Date();
            var currYear = currDate.getFullYear() - 2000;
            if (year > 0 && year < currYear) {
                this.ykTemp.dob.setFullYear(2000 + year);
                console.log(this.ykTemp.dob.getFullYear());
            }
            else {
                this.ykTemp.dob.setFullYear(1900 + year);
            }
            console.log(this.ykTemp.dob);
        }
        if (temp[15]) {
            var age = parseInt(temp[15] + temp[16]);
            this.ykTemp.age = age;
        }
        this.ykPush.unshift(this.ykTemp);
        this.http.create(this.ykPush, 'yuvan/create').subscribe(function (resp) {
            _this.router.navigate(['/', 'searchdmilan']);
        });
        this.ykTemp = { name: "", age: 0, contact: "", dob: new Date(), jimmedari: "", kendra: "", kendraType: "", middleName: "", patti: "", residence: "", surname: "", taluka: "", videoKendra: "" };
        this.ykInput = null;
        this.ykPush = null;
    };
    //deletes the row based on index value
    SearchdmilanComponent.prototype.delete = function (index) {
        this.ykList.splice(index, 1);
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

module.exports = "<!-- Form to insert the details of a kendram person -->\n<form name=\"form\" (ngSubmit)=\" f.form.valid && addToList()\" #f=\"ngForm\" novalidate>\n  <!-- Name section in form -->\n  <div class=\"row pt10\">\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\">First and last name</span>\n      </div>\n      <input type=\"text\" class=\"form-control\" name=\"surname\" [(ngModel)]=\"ykCurrData.surname\" #surname=\"ngModel\"\n        [ngClass]=\"{'is-invalid': f.submitted && surname.invalid}\" placeholder=\"Surname\" required />\n      <input type=\"text\" class=\"form-control\" name=\"middleName\" [(ngModel)]=\"ykCurrData.middleName\"\n        #middleName=\"ngModel\" [ngClass]=\"{'is-invalid': f.submitted && middleName.invalid}\" placeholder=\"Middle Name\"\n        required />\n      <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"ykCurrData.name\" #name=\"ngModel\"\n        [ngClass]=\"{'is-invalid': f.submitted && name.invalid}\" placeholder=\"Name\" required />\n      <div class=\"invalid-feedback\">\n        Username is required field\n      </div>\n    </div>\n  </div>\n  <div class=\"row pt10\">\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <!-- Taluka Section in form -->\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Taluka</span>\n      </div>\n      <select class=\"form-control\" name=\"taluka\" [(ngModel)]=\"ykCurrData.taluka\" #taluka=\"ngModel\">\n        <option hidden selected></option>\n        <option *ngFor=\"let tl of thalukaList\">{{tl}}</option>\n      </select>\n      <!-- [ngClass]=\"{'is-invalid': f.submitted && taluka.invalid}\"\n        <div *ngIf=\"f.submitted && taluka.invalid\" class=\"invalid-feedback\">\n        <div *ngIf=\"taluka.errors.required\">Taluka is required</div>\n      </div> -->\n    </div>\n    <!-- Patti Section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Patti</span>\n      </div>\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"ykCurrData.patti\" name=\"patti\" #patti=\"ngModel\" />\n      <!-- [ngClass]=\"{'is-invalid': f.submitted && patti.invalid}\"\n        <div *ngIf=\"f.submitted && patti.invalid\" class=\"invalid-feedback\">\n          <div *ngIf=\"patti.errors.required\">Patti is required</div>\n        </div>-->\n    </div>\n    <!-- Video kendra section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Video Kendra</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"ykCurrData.videoKendra\" name=\"videoKendra\" #videoKendra=\"ngModel\" />\n      <!-- [ngClass]=\"{'is-invalid': f.submitted && videoKendra.invalid}\"\n        <div *ngIf=\"f.submitted && videoKendra.invalid\" class=\"invalid-feedback\">\n          <div *ngIf=\"videoKendra.errors.required\">Video Kendra is required</div>\n        </div> -->\n    </div>\n    <!-- Kenra section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Kendra</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"ykCurrData.kendra\" name=\"kendra\" #kendra=\"ngModel\" />\n    </div>\n  </div>\n  <div class=\"row pt10\">\n    <!-- Role section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Role</span>\n      </div>\n      <select class=\"custom-select\" [(ngModel)]=\"ykCurrData.role\" placeholder=\"Role\" name=\"role\"\n        #role=\"ngModel\">\n        <option *ngFor=\"let role of roleList\">{{role}}</option>\n      </select>\n    </div>\n    <!-- kendra type section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Kendra Type</span>\n      </div>\n      <select class=\"custom-select\" name=\"kendraType\" [(ngModel)]=\"ykCurrData.kendraType\" #kendraType=\"ngModel\">\n        <option *ngFor=\"let ktl of kendraTypeList\">{{ktl}}</option>\n      </select>\n    </div>\n    <!-- Jimmedari section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Jimmedari</span>\n      </div>\n      <select class=\"custom-select\" [(ngModel)]=\"ykCurrData.jimmedari\" placeholder=\"Jimmedari\" name=\"jimmedari\"\n        #jimmedari=\"ngModel\">\n        <option *ngFor=\"let jl of jimmedariList\">{{jl}}</option>\n      </select>\n    </div>\n    <!-- Contact section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Contact</span>\n      </div>\n      <input type=\"number\" class=\"form-control col quantity\" [(ngModel)]=\"ykCurrData.contact\" name=\"contact\"\n        #contact=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && contact.invalid }\" required minlength=\"10\"\n        maxlength=\"11\" />\n      <div *ngIf=\"f.submitted && contact.invalid\" class=\"invalid-feedback\">\n        <div *ngIf=\"contact.errors.required\">Contact is required</div>\n      </div>\n      <div *ngIf=\"contact.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"contact.errors.minlength\">\n          Too short\n        </div>\n      </div>\n      <!-- <div [hidden]=\"!contact.errors.minlength\">\n          contact must be at least 10 characters long.\n        </div>\n        <div [hidden]=\"!contact.errors.maxlength\">\n          Name cannot be more than 11 characters long.\n        </div> -->\n    </div>\n\n  </div>\n  <div class=\"row pt10\">\n    <!-- Dob section in form  -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">DoB</span>\n      </div>\n      <input type=\"date\" class=\"form-control col\" [(ngModel)]=\"ykCurrData.dob\" (change)=\"getDob(ykCurrData)\"\n        placeholder=\"dob\" name=\"dob\" #dob=\"ngModel\" />\n    </div>\n    <!-- Residence section section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Recidence</span>\n      </div>\n      <input class=\"form-control col\" [(ngModel)]=\"ykCurrData.residence\" name=\"residence\" #residence=\"ngModel\" />\n    </div>\n  </div>\n  <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n    <!-- <button class=\"btn btn-primary btn-sm\" (click)=\"addToList()\">Add</button>-->\n    <button [disabled]=\"loading\" class=\"tn btn-primary btn-sm\">Add</button>\n  </div>\n</form>\n<!-- Displaying all the filled details in the above form. -->\n<div class=\"mt-4\">\n  <table class=\"table\" id=\"table_id\" *ngIf=\"ykList.length\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>Taluka</th>\n        <th>Patti</th>\n        <th>Video Kendra</th>\n        <th>Kendra</th>\n        <th>Kendra Type</th>\n        <th>Jimmedari</th>\n        <th colspan=\"3\">Full Name</th>\n        <th>Contact</th>\n        <th>DOB</th>\n        <th>Age</th>\n        <th>Residence</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <!-- displays details filled in form -->\n    <tbody id=\"table_id\">\n      <tr *ngFor=\"let yk of ykList;let i = index;let f= first;let l= last\">\n        <td>\n          <span>{{yk.taluka}}</span>\n        </td>\n        <td>\n          <span>{{yk.patti}}</span>\n        </td>\n        <td>\n          <span>{{yk.videoKendra}}</span>\n        </td>\n        <td>\n          <span>{{yk.kendra}}</span>\n        </td>\n        <td>\n          <span>{{yk.kendraType}}</span>\n        </td>\n        <td>\n          <span>{{yk.jimmedari}}</span>\n        </td>\n        <td>\n          <span>{{yk.surname}}</span>\n        </td>\n        <td>\n          <span>{{yk.middleName}}</span>\n        </td>\n        <td>\n          <span>{{yk.name}}</span>\n        </td>\n        <td>\n          <span>{{yk.contact}}</span>\n        </td>\n        <td>\n          <span>{{yk.dob | date}}</span>\n        </td>\n        <td>\n          <span>{{yk.age}}</span>\n        </td>\n        <td>\n          <span>{{yk.residence}}</span>\n        </td>\n        <td>\n          <!-- Delete's the particular row data from the table -->\n          <button type=\"button\" (click)=\"delete(i)\" class=\"btn btn-primary btn-sm\">Delete</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <!-- Submits all the data of the row to database -->\n  <button *ngIf=\"ykList.length\" class=\"btn btn-primary btn-sm\" (click)=\"submit()\">Submit</button>\n</div>"

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
        this.ykCurrData = { name: "", age: 0, contact: "", dob: new Date(), jimmedari: "", kendra: "", kendraType: "", middleName: "", patti: "", residence: "", surname: "", taluka: "", videoKendra: "", role: "" };
        this.selectedIndex = 0;
        this.kendraTypeList = ["YK", "DPC"];
        this.jimmedariList = ["Sanchalak", "Sahasanchalak"];
        this.thalukaList = ["Armoor", "Bheemgal", "Bodhan", "Banswada", "Kamareddy", "Domakonda", "Nizamabad", "Yellareddy", "Madnoor"];
        this.roleList = ["Sanchalak", "Avekshak", "Jilla-sannidhata", "Taluka-sannidhata"];
    }
    YuvanComponent.prototype.ngOnInit = function () {
    };
    //addToList() pushes the data to the ykList array
    YuvanComponent.prototype.addToList = function (dMilanForm) {
        this.ykList.unshift(this.ykCurrData);
        this.ykCurrData = { name: "", age: 0, contact: "", dob: new Date(), jimmedari: "", kendra: "", kendraType: "", middleName: "", patti: "", residence: "", surname: "", taluka: "", videoKendra: "", role: "" };
        console.log(this.ykList);
    };
    //delete() deletes the row based on index
    YuvanComponent.prototype.delete = function (index) {
        this.ykList.splice(index, 1);
    };
    //getDob() calculates the age based on date of birth
    YuvanComponent.prototype.getDob = function (yuvn) {
        var timeDiff = Math.abs(new Date().getTime() - new Date(yuvn.dob).getTime());
        yuvn.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
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

module.exports = __webpack_require__(/*! C:\Users\Sreenath\git\usktools\yk-parent\yk-web\src\main\web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map