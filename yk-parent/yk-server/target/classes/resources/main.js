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
/* harmony import */ var _d_milan_d_milan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./d-milan/d-milan.component */ "./src/app/d-milan/d-milan.component.ts");
/* harmony import */ var _searchdmilan_searchdmilan_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./searchdmilan/searchdmilan.component */ "./src/app/searchdmilan/searchdmilan.component.ts");
/* harmony import */ var _k_level_k_level_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./k-level/k-level.component */ "./src/app/k-level/k-level.component.ts");







var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'searchdmilan', component: _searchdmilan_searchdmilan_component__WEBPACK_IMPORTED_MODULE_5__["SearchdmilanComponent"] },
    { path: 'd-milan', component: _d_milan_d_milan_component__WEBPACK_IMPORTED_MODULE_4__["DMilanComponent"] },
    { path: 'k-level', component: _k_level_k_level_component__WEBPACK_IMPORTED_MODULE_6__["KLevelComponent"] }
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
/* harmony import */ var _d_milan_d_milan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./d-milan/d-milan.component */ "./src/app/d-milan/d-milan.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _searchdmilan_searchdmilan_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./searchdmilan/searchdmilan.component */ "./src/app/searchdmilan/searchdmilan.component.ts");
/* harmony import */ var _k_level_k_level_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./k-level/k-level.component */ "./src/app/k-level/k-level.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _d_milan_d_milan_component__WEBPACK_IMPORTED_MODULE_6__["DMilanComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _searchdmilan_searchdmilan_component__WEBPACK_IMPORTED_MODULE_10__["SearchdmilanComponent"],
                _k_level_k_level_component__WEBPACK_IMPORTED_MODULE_11__["KLevelComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/d-milan/d-milan.component.css":
/*!***********************************************!*\
  !*** ./src/app/d-milan/d-milan.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pt10{\r\n    padding-top: 10px;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZC1taWxhbi9kLW1pbGFuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7O0FBRXJCIiwiZmlsZSI6InNyYy9hcHAvZC1taWxhbi9kLW1pbGFuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHQxMHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/d-milan/d-milan.component.html":
/*!************************************************!*\
  !*** ./src/app/d-milan/d-milan.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Form to insert the details of a kendram person -->\n<form name=\"form\" (ngSubmit)=\" f.form.valid && addToList()\" #f=\"ngForm\" novalidate>\n  <!-- Name section in form -->\n  <div class=\"row pt10\">\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\">First and last name</span>\n      </div>\n      <input type=\"text\" class=\"form-control\" name=\"surname\" [(ngModel)]=\"ykCurrData.surname\" #surname=\"ngModel\"\n        [ngClass]=\"{'is-invalid': f.submitted && surname.invalid}\" placeholder=\"Surname\" required />\n      <input type=\"text\" class=\"form-control\" name=\"middleName\" [(ngModel)]=\"ykCurrData.middleName\" #middleName=\"ngModel\"\n        [ngClass]=\"{'is-invalid': f.submitted && middleName.invalid}\" placeholder=\"Middle Name\" required />\n      <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"ykCurrData.name\" #name=\"ngModel\" [ngClass]=\"{'is-invalid': f.submitted && name.invalid}\"\n        placeholder=\"Name\" required />\n        <div class=\"invalid-feedback\">\n            Username is required field\n          </div>\n    </div>\n  </div>\n  <div class=\"row pt10\">\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <!-- Taluka Section in form -->\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Taluka</span>\n      </div>\n      <select class=\"form-control\" name=\"taluka\" [(ngModel)]=\"ykCurrData.taluka\" #taluka=\"ngModel\">\n        <option hidden selected></option>\n        <option *ngFor=\"let tl of thalukaList\">{{tl}}</option>\n      </select>\n      <!-- [ngClass]=\"{'is-invalid': f.submitted && taluka.invalid}\"\n        <div *ngIf=\"f.submitted && taluka.invalid\" class=\"invalid-feedback\">\n        <div *ngIf=\"taluka.errors.required\">Taluka is required</div>\n      </div> -->\n    </div>\n    <!-- Patti Section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Patti</span>\n      </div>\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"ykCurrData.patti\" name=\"patti\" #patti=\"ngModel\" />\n      <!-- [ngClass]=\"{'is-invalid': f.submitted && patti.invalid}\"\n        <div *ngIf=\"f.submitted && patti.invalid\" class=\"invalid-feedback\">\n          <div *ngIf=\"patti.errors.required\">Patti is required</div>\n        </div>-->\n    </div>\n    <!-- Video kendra section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Video Kendra</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"ykCurrData.videoKendra\" name=\"videoKendra\" #videoKendra=\"ngModel\" />\n      <!-- [ngClass]=\"{'is-invalid': f.submitted && videoKendra.invalid}\"\n        <div *ngIf=\"f.submitted && videoKendra.invalid\" class=\"invalid-feedback\">\n          <div *ngIf=\"videoKendra.errors.required\">Video Kendra is required</div>\n        </div> -->\n    </div>\n    <!-- Kenra section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Kendra</span>\n      </div>\n      <input class=\"form-control\" [(ngModel)]=\"ykCurrData.kendra\" name=\"kendra\" #kendra=\"ngModel\" />\n    </div>\n  </div>\n  <div class=\"row pt10\">\n    <!-- kendra type section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Kendra Type</span>\n      </div>\n      <select class=\"custom-select\" name=\"kendraType\" [(ngModel)]=\"ykCurrData.kendraType\" #kendraType=\"ngModel\">\n        <option *ngFor=\"let ktl of kendraTypeList\">{{ktl}}</option>\n      </select>\n    </div>\n    <!-- Jimmedari section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Jimmedari</span>\n      </div>\n      <select class=\"custom-select\" [(ngModel)]=\"ykCurrData.jimmedari\" placeholder=\"Jimmedari\" name=\"jimmedari\"\n        #jimmedari=\"ngModel\">\n        <option *ngFor=\"let jl of jimmedariList\">{{jl}}</option>\n      </select>\n    </div>\n    <!-- Contact section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Contact</span>\n      </div>\n      <input type=\"text\" class=\"form-control col\" [(ngModel)]=\"ykCurrData.contact\" name=\"contact\" #contact=\"ngModel\"\n        [ngClass]=\"{ 'is-invalid': f.submitted && contact.invalid }\" required minlength=\"10\" maxlength=\"11\" />\n       <div *ngIf=\"f.submitted && contact.invalid\" class=\"invalid-feedback\">\n        <div *ngIf=\"contact.errors.required\">Contact is required</div>\n      </div>\n      <div [hidden]=\"!name.errors.minlength\">\n          Name must be at least 10 characters long.\n        </div>\n        <div [hidden]=\"!name.errors.maxlength\">\n          Name cannot be more than 11 characters long.\n        </div>\n    </div>\n    <!-- Dob section in form  -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">DoB</span>\n      </div>\n      <input type=\"date\" class=\"form-control col\" [(ngModel)]=\"ykCurrData.dob\" (change)=\"getDob(ykCurrData)\"\n        placeholder=\"dob\" name=\"dob\" #dob=\"ngModel\" />\n    </div>\n  </div>\n  <div class=\"row pt10\">\n    <!-- Residence section section in form -->\n    <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Recidence</span>\n      </div>\n      <input class=\"form-control col\" [(ngModel)]=\"ykCurrData.residence\" name=\"residence\" #residence=\"ngModel\" />\n    </div>\n  </div>\n  <div class=\"input-group input-group-sm mb-3 col-sm-3\">\n    <!-- <button class=\"btn btn-primary btn-sm\" (click)=\"addToList()\">Add</button>-->\n    <button [disabled]=\"loading\" class=\"tn btn-primary btn-sm\">Add</button>\n  </div>\n</form>\n<!-- Displaying all the filled details in the above form. -->\n<div class=\"mt-4\">\n  <table class=\"table\" id=\"table_id\" *ngIf=\"ykList.length\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>Taluka</th>\n        <th>Patti</th>\n        <th>Video Kendra</th>\n        <th>Kendra</th>\n        <th>Kendra Type</th>\n        <th>Jimmedari</th>\n        <th colspan=\"3\">Full Name</th>\n        <th>Contact</th>\n        <th>DOB</th>\n        <th>Age</th>\n        <th>Residence</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <!-- displays details filled in form -->\n    <tbody id=\"table_id\">\n      <tr *ngFor=\"let yk of ykList;let i = index;let f= first;let l= last\">\n        <td>\n          <span>{{yk.taluka}}</span>\n        </td>\n        <td>\n          <span>{{yk.patti}}</span>\n        </td>\n        <td>\n          <span>{{yk.videoKendra}}</span>\n        </td>\n        <td>\n          <span>{{yk.kendra}}</span>\n        </td>\n        <td>\n          <span>{{yk.kendraType}}</span>\n        </td>\n        <td>\n          <span>{{yk.jimmedari}}</span>\n        </td>\n        <td>\n          <span>{{yk.surname}}</span>\n        </td>\n        <td>\n          <span>{{yk.middleName}}</span>\n        </td>\n        <td>\n          <span>{{yk.name}}</span>\n        </td>\n        <td>\n          <span>{{yk.contact}}</span>\n        </td>\n        <td>\n          <span>{{yk.dob | date}}</span>\n        </td>\n        <td>\n          <span>{{yk.age}}</span>\n        </td>\n        <td>\n          <span>{{yk.residence}}</span>\n        </td>\n        <td>\n          <!-- Delete's the particular row data from the table -->\n          <button type=\"button\" (click)=\"delete(i)\" class=\"btn btn-primary btn-sm\">Delete</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <!-- Submits all the data of the row to database -->\n  <button *ngIf=\"ykList.length\" class=\"btn btn-primary btn-sm\" (click)=\"submit()\">Submit</button>\n</div>\n"

/***/ }),

/***/ "./src/app/d-milan/d-milan.component.ts":
/*!**********************************************!*\
  !*** ./src/app/d-milan/d-milan.component.ts ***!
  \**********************************************/
/*! exports provided: DMilanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DMilanComponent", function() { return DMilanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var DMilanComponent = /** @class */ (function () {
    function DMilanComponent(clientHttp, router, formBuilder) {
        this.clientHttp = clientHttp;
        this.router = router;
        this.formBuilder = formBuilder;
        this.ykList = [];
        this.ykCurrData = { name: "", age: 0, contact: "", dob: new Date(), jimmedari: "", kendra: "", kendraType: "", middleName: "", patti: "", residence: "", surname: "", taluka: "", videoKendra: "" };
        this.selectedIndex = 0;
        this.kendraTypeList = ["YK", "DPC"];
        this.jimmedariList = ["Sanchalak", "Sahasanchalak"];
        this.thalukaList = ["Armoor", "Bheemgal", "Bodhan", "Banswada", "Kamareddy", "Domakonda", "Nizamabad", "Yellareddy", "Madnoor"];
    }
    DMilanComponent.prototype.ngOnInit = function () {
    };
    //addToList() pushes the data to the ykList array
    DMilanComponent.prototype.addToList = function (dMilanForm) {
        this.ykList.unshift(this.ykCurrData);
        this.ykCurrData = { name: "", age: 0, contact: "", dob: new Date(), jimmedari: "", kendra: "", kendraType: "", middleName: "", patti: "", residence: "", surname: "", taluka: "", videoKendra: "" };
        console.log(this.ykList);
        dMilanForm.form.reset;
    };
    //delete() deletes the row based on index
    DMilanComponent.prototype.delete = function (index) {
        this.ykList.splice(index, 1);
    };
    //getDob() calculates the age based on date of birth
    DMilanComponent.prototype.getDob = function (yuvn) {
        var timeDiff = Math.abs(new Date().getTime() - new Date(yuvn.dob).getTime());
        yuvn.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    };
    //submit() submits all data to database and navigate to searchdmilan component
    DMilanComponent.prototype.submit = function () {
        var _this = this;
        this.clientHttp.create(this.ykList, 'create').subscribe(function (resp) {
            _this.router.navigate(['/', 'searchdmilan']);
        });
    };
    DMilanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-d-milan',
            template: __webpack_require__(/*! ./d-milan.component.html */ "./src/app/d-milan/d-milan.component.html"),
            styles: [__webpack_require__(/*! ./d-milan.component.css */ "./src/app/d-milan/d-milan.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], DMilanComponent);
    return DMilanComponent;
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
        this.configUrl = "http://106.0.37.69:8282/api/yuvan/";
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

module.exports = "<p>\n  k-level works!\n</p>\n\n<!--\n  country - i/p box\n  sanghat/state - i/p box\n  jllla name - i/p box\n  jilla sannidhata - select box (from json)\n  taluka name - i/p box\n  taluka sannidhata - select box (from json)\n  groupname - i/p box\n  avekshak name - select box (from json)\n  kendra name - i/p \n  kendra type - select (Yuva kendra / DPC )\n  YuvaYuvati - selecct (Yuva / Yuvati)\n  Year in which kendra Started - 1997\n  category - select (Village , City Vistar)\n  Kendra number - i/p (only digits)\n  status - selct (Active,Merged,Inactive)\n  year merged - i/p\n  merged to - i/p\n  sanchalak1 - select (from json)\n  sanchalak2 - select (from json)\n  min attendence - i/p\n  max attendance - i/p\n  Yuva kendra conducted in - selct (Home,School or College,Classes,Others)\n  Name of Village of Yuvakendra - i/p \n  Name of Nearest Bus Stand Or Main Road (Land Mark) - i/p\n  Yuvakendra Sthal - Complete postal Address (compulsory) - textarea\n  Yuva Kendra Sthal - Pincode (compulsory) - i/p (only digits)\n  Day Of Yuvakendra - Weekday - slect (from json)\n  Time Of Yuvakendra - i/p (Placeholder \"format HH:MM AM/PM\")\n  Swadhyay Kendra based on Area/Village/Vistar - i/p\n  Village (As Per Swadhyay Kendra) - i/p\n-->\n"

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


var KLevelComponent = /** @class */ (function () {
    function KLevelComponent() {
    }
    KLevelComponent.prototype.ngOnInit = function () {
    };
    KLevelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-k-level',
            template: __webpack_require__(/*! ./k-level.component.html */ "./src/app/k-level/k-level.component.html"),
            styles: [__webpack_require__(/*! ./k-level.component.css */ "./src/app/k-level/k-level.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], KLevelComponent);
    return KLevelComponent;
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

module.exports = "<div class=\" mt-4\">\n    <div class=\"clearfix\">\n        <span class=\"float-left form-group col-3\">\n          <!-- inputfield helps to add the data in the list -->\n          <input  type=\"text\" class=\"form-control\" [(ngModel)]=\"yInput\" placeholder=\"Add Y Detail\">\n        </span>\n        <span class=\"float-right col-1\">\n          <button class=\"btn btn-primary btn-sm float-right\" (click)=\"addToList()\">Add</button>\n        </span>\n      </div>\n      <!-- Displays data which is retrived from database -->\n  <table class=\"table\" id=\"table_id\" *ngIf=\"ykList.length\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>Taluka</th>\n        <th>Patti</th>\n        <th>Video Kendra</th>\n        <th>Kendra</th>\n        <th>Kendra Type</th>\n        <th>Jimmedari</th>\n        <th colspan=\"3\">Full Name</th>\n        <th>Contact</th>\n        <th>DOB</th>\n        <th>Age</th>\n        <th>Residence</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody id=\"table_id\">\n      <tr *ngFor=\"let yk of ykList;let i = index\">\n\n        <td>\n          <span >{{yk.taluka}}</span>\n        </td>\n        <td>\n          <span >{{yk.patti}}</span>\n        </td>\n        <td>\n          <span >{{yk.videoKendra}}</span>\n        </td>\n        <td>\n          <span >{{yk.kendra}}</span>\n        </td>\n        <td>\n          <span >{{yk.kendraType}}</span>\n        </td>\n        <td>\n          <span >{{yk.jimmedari}}</span>\n        </td>\n        <td>\n          <span >{{yk.surname}}</span>\n        </td>\n        <td>\n          <span >{{yk.middleName}}</span>\n        </td>\n        <td>\n          <span >{{yk.name}}</span>\n        </td>\n        <td>\n          <span >{{yk.contact}}</span>\n        </td>\n        <td>\n          <span >{{yk.dob | date}}</span>\n        </td>\n        <td>\n          <span>{{yk.age}}</span>\n        </td>\n        <td>\n          <span >{{yk.residence}}</span>\n        </td>\n        <td>\n            <!-- Delete's the particular row data from the table -->\n            <button type=\"button\" (click)=\"delete(i)\" class=\"btn btn-primary btn-sm\">Delete</button>\n          </td>\n      </tr>\n    </tbody>\n  </table>\n\n</div>\n"

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
        this.ykCurrData = { name: "", age: 0, contact: "", dob: new Date(), jimmedari: "", kendra: "", kendraType: "", middleName: "", patti: "", residence: "", surname: "", taluka: "", videoKendra: "" };
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
        if (this.yInput) {
            var temp = void 0;
            temp = this.yInput.split(" ");
            console.log(temp);
        }
        else {
            this.router.navigate(['/', 'd-milan']);
        }
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