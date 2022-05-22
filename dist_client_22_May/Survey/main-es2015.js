(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");





const routes = [
    {
        path: 'home/:id',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'Survey';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var src_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [src_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                ],
                providers: [src_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function HomeComponent_label_79_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_label_79_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_label_79_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_label_79_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_label_79_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_label_79_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.currentQuestion.ansList.answer = $event; })("change", function HomeComponent_label_79_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r5 = ctx.index; const answer_r4 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.radioBtnChange(i_r5, answer_r4.ansId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "circle", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_label_79_span_8_Template, 2, 0, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_label_79_span_9_Template, 2, 0, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_label_79_span_10_Template, 2, 0, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_label_79_span_11_Template, 2, 0, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "rdo-", i_r5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "rdo-", i_r5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.currentQuestion.ansList.answer)("value", answer_r4.ansId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", answer_r4.ansText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r5 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r5 == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r5 == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r5 == 3);
} }
function HomeComponent_div_302_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_302_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.skipQuestion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Skip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_303_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_303_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.previewQuestion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_303_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.nextQuestion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(apiService, activatedRoute) {
        this.apiService = apiService;
        this.activatedRoute = activatedRoute;
        this.activeControl = 2;
        this.questionList = [];
        this.skipLogic = [];
        this.displayLogic = [];
        this.questionSet = [];
        this.originalQuestionSet = {};
        this.complete = false;
        this.activatedRoute.params.subscribe((paramsId) => {
            console.log(paramsId);
            this.id = paramsId.id;
        });
    }
    ngOnInit() {
        // setTimeout(() => {
        //   this.activeControl = 'radio'
        // }, 10000);
        this.apiService.post("getSurveyDetails/" + this.id, "").subscribe((succ) => {
            console.log(succ);
            this.originalQuestionSet.question = succ;
            this.questionList = succ.ques;
            let sortFn2 = (obj1, obj2) => { return obj1.quesOrder - obj2.quesOrder; };
            this.questionList = this.questionList.sort(sortFn2);
            for (let qun of this.questionList) {
                if (qun.skipLogic != "string")
                    console.log(JSON.parse(qun.skipLogic));
                if (qun.displayLogic != "string")
                    console.log(JSON.parse(qun.displayLogic));
            }
            this.activeControl = this.questionList[0].quesTypeId;
            this.currentQuestionId = 0;
            this.currentQuestion = this.questionList[0];
            this.questionSet.push(this.currentQuestion);
        }, (err) => { });
        this.apiService.getIp().subscribe((succ) => {
            console.log(succ);
            this.originalQuestionSet.ipAddress = succ;
        }, (err) => { });
        var OSName = "Unknown";
        if (window.navigator.userAgent.indexOf("Windows NT 10.0") != -1)
            OSName = "Windows 10";
        if (window.navigator.userAgent.indexOf("Windows NT 6.3") != -1)
            OSName = "Windows 8.1";
        if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1)
            OSName = "Windows 8";
        if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1)
            OSName = "Windows 7";
        if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1)
            OSName = "Windows Vista";
        if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1)
            OSName = "Windows XP";
        if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1)
            OSName = "Windows 2000";
        if (window.navigator.userAgent.indexOf("Mac") != -1)
            OSName = "Mac/iOS";
        if (window.navigator.userAgent.indexOf("X11") != -1)
            OSName = "UNIX";
        if (window.navigator.userAgent.indexOf("Linux") != -1)
            OSName = "Linux";
        this.originalQuestionSet.OSName = OSName;
        if ((navigator.userAgent.indexOf("Opera") ||
            navigator.userAgent.indexOf("OPR")) != -1) {
            this.originalQuestionSet.browserName = "Opera";
        }
        else if (navigator.userAgent.indexOf("Chrome") != -1) {
            this.originalQuestionSet.browserName = "Chrome";
        }
        else if (navigator.userAgent.indexOf("Safari") != -1) {
            this.originalQuestionSet.browserName = "Safari";
        }
        else if (navigator.userAgent.indexOf("Firefox") != -1) {
            this.originalQuestionSet.browserName = "Firefox";
        }
        else if (navigator.userAgent.indexOf("MSIE") != -1) {
            //IF IE > 10
            this.originalQuestionSet.browserName = "IE";
        }
        else {
            this.originalQuestionSet.browserName = "unknown";
        }
    }
    previewQuestion() {
        if (this.currentQuestionId < this.questionList.length - 1) {
            if (this.currentQuestionId == 0)
                return;
            console.log(this.questionSet);
            let prev = this.questionSet[this.questionSet.length - 2];
            this.currentQuestionId = prev.currentQuestionId;
            // this.currentQuestionId--;
            this.activeControl = this.questionList[this.currentQuestionId].quesTypeId;
            this.currentQuestion = this.questionList[this.currentQuestionId];
            this.questionSet.splice(this.questionSet.length - 1);
            console.log(this.questionSet);
            console.log(this.currentQuestionId);
            if (this.currentQuestion.skipLogic) {
                this.skipLogic = JSON.parse(this.currentQuestion.skipLogic);
            }
            else {
                this.skipLogic = [];
            }
            if (this.currentQuestion.displayLogic) {
                this.displayLogic = JSON.parse(this.currentQuestion.displayLogic);
            }
            else {
                this.displayLogic = [];
            }
        }
        else {
            // console.log("qustion done")
            // this.activeControl = 0;
        }
    }
    nextQuestion(isSkip) {
        if (!isSkip) {
            this.currentQuestion.skipped = "false";
            if (this.activeControl == 8) {
                if (this.currentQuestion.phoneNo == "" || !this.currentQuestion.phoneNo) {
                    alert("pls give answer");
                    return;
                }
            }
            else if ((this.currentQuestion.answer == "" || !this.currentQuestion.answer) && this.activeControl != 9) {
                alert("pls give answer");
                return;
            }
        }
        if (this.activeControl == 8) {
            this.currentQuestion.answer = this.currentQuestion.countryCode + "-" + this.currentQuestion.phoneNo;
        }
        console.log(JSON.stringify(this.currentQuestion));
        this.currentQuestion.currentQuestionId = this.currentQuestionId;
        let currentQuestionId = this.currentQuestionId;
        if (this.currentQuestion.skipped == "true") {
            //do nothing
        }
        else {
            this.currentQuestion.skipped = "false";
        }
        if (this.currentQuestionId < this.questionList.length - 1) {
            // currentQuestionId++;
            // check skip
            let skipTo = 0;
            for (let i = 0; i < this.skipLogic.length; i++) {
                if (this.skipLogic[i].ansId == this.currentQuestion.answer) {
                    skipTo = this.skipLogic[i].skipTo;
                }
                if (this.skipLogic[i].data == this.currentQuestion.answer) {
                    skipTo = this.skipLogic[i].skipTo;
                }
            }
            if (skipTo == 0) {
                currentQuestionId++;
            }
            else {
                currentQuestionId = -1;
                for (let i = 0; i < this.questionList.length; i++) {
                    currentQuestionId++;
                    if (this.questionList[i].quesId == skipTo) {
                        break;
                    }
                }
            }
            let checkDisplay = 1;
            do {
                if (currentQuestionId >= this.questionList.length) {
                    break;
                }
                let currentQuestion = this.questionList[currentQuestionId];
                let displayLogic = [];
                checkDisplay = 1;
                displayLogic = JSON.parse(currentQuestion.displayLogic);
                if (displayLogic.length == 0) {
                    checkDisplay = 0;
                }
                else if (currentQuestion.displayLogic) {
                    if (currentQuestion.displayLogic == "string") {
                        checkDisplay = 0;
                    }
                    else {
                        displayLogic = JSON.parse(currentQuestion.displayLogic);
                        let singleLogic = 0;
                        if (displayLogic.length < 2) {
                            singleLogic = 1;
                        }
                        else {
                            singleLogic = 0;
                        }
                        if (singleLogic == 1) {
                            for (let i = 0; i < this.questionList.length; i++) {
                                if (this.questionList[i].quesId == displayLogic[0].quesId) {
                                    if (this.questionList[i].skipped == "true") {
                                    }
                                    else {
                                        if (this.questionList[i].answer == displayLogic[0].ansId) {
                                            checkDisplay = 0;
                                            break;
                                        }
                                        if (this.questionList[i].answer == displayLogic[0].data) {
                                            checkDisplay = 0;
                                            break;
                                        }
                                        if (this.questionList[i].answer == displayLogic[0].logics) {
                                            checkDisplay = 0;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                        else {
                            //  this.originalQuestionSet.OSName="multiple")
                            let str = "";
                            for (let i = 0; i < displayLogic.length; i++) {
                                let q = this.questionList.filter((que) => {
                                    return que.quesId == displayLogic[i].quesId;
                                });
                                if (displayLogic[i].ansId)
                                    str += q[0].answer + "==" + displayLogic[i].ansId;
                                if (displayLogic[i].data)
                                    str +=
                                        "'" + q[0].answer + "'=='" + displayLogic[i].data + "'";
                                if (displayLogic[i].logics)
                                    str +=
                                        "'" + q[0].answer + "'=='" + displayLogic[i].logics + "'";
                                if (displayLogic.length - 1 == i)
                                    continue;
                                if (displayLogic[i].compartor == "AND") {
                                    str += "&&";
                                }
                                else
                                    str += "||";
                            }
                            console.log(str);
                            function isValid(expr) {
                                try {
                                    return eval(expr);
                                }
                                catch (_a) {
                                    return false;
                                }
                            }
                            // Valid ; Correct syntax and return true
                            console.log(isValid(str));
                            console.log(isValid("5==5&&'Yes'=='Yes'"));
                            console.log(displayLogic);
                            if (isValid(str)) {
                                checkDisplay = 0;
                            }
                        }
                    }
                }
                else {
                    checkDisplay = 0;
                }
                if (checkDisplay) {
                    this.questionList[currentQuestionId].skipped = "true";
                    currentQuestionId++;
                }
            } while (checkDisplay);
            if (currentQuestionId >= this.questionList.length) {
                console.log("qustion done");
                this.activeControl = 0;
                this.currentQuestion = this.questionList[this.questionList.length - 1];
                this.currentQuestionId = this.questionList.length - 1;
            }
            else {
                this.activeControl = this.questionList[currentQuestionId].quesTypeId;
                this.currentQuestion = this.questionList[currentQuestionId];
                this.currentQuestionId = currentQuestionId;
                if (this.activeControl == 8) {
                    this.currentQuestion.countryCode = "+91";
                }
            }
            this.questionSet.push(this.currentQuestion);
            console.log(this.currentQuestion);
            // console.log("current question id", this.currentQuestionId)
            // console.log("skip logic", JSON.parse(this.currentQuestion.skipLogic))
            // console.log("skip logic", this.currentQuestion.skipLogic)
            if (this.currentQuestion.skipLogic) {
                this.skipLogic = JSON.parse(this.currentQuestion.skipLogic);
            }
            else {
                this.skipLogic = [];
            }
            if (this.currentQuestion.displayLogic) {
                this.displayLogic = JSON.parse(this.currentQuestion.displayLogic);
            }
            else {
                this.displayLogic = [];
            }
        }
        else {
            console.log("qustion done");
            this.activeControl = 0;
            this.currentQuestion = this.questionList[this.questionList.length - 1];
            // this.questionSet.push(this.currentQuestion);
            this.currentQuestionId = this.questionList.length - 1;
            console.log(this.questionSet);
            let request = {
                responseId: 0,
                // surveyId: 111,
                response: [],
            };
            // request.response = [];
            for (let i = 0; i < this.questionSet.length; i++) {
                this.questionSet[i].ans = this.questionSet[i].answer;
                //this.questionSet[i].skipped="false"
                this.questionSet[i].timeTaken = 0;
                // request.response.push(this.questionSet[i])
            }
            request.response = JSON.stringify(this.questionSet);
            request.surveyId = this.originalQuestionSet.question.survey.surveyId;
            request.responseDate = new Date().toString();
            request.ip = this.originalQuestionSet.ipAddress.IPv4;
            request.os = this.originalQuestionSet.OSName;
            request.browser = this.originalQuestionSet.browserName;
            console.log(request);
            this.complete = true;
            // show loader
            this.apiService.post("response", request).subscribe((succ) => {
                console.log(succ);
                //hide loader
            }, err => {
                console.log(err);
            });
        }
        // console.log(this.radioSelected);
    }
    radioBtnChange(index, value) {
        this.currentQuestion.answer = value;
    }
    getPercentage() {
        let per = (this.currentQuestionId / (this.questionList.length - 1)) * 100;
        // console.log(per);
        // $(".progress-bar").each(function () {
        //   var each_bar_width = $(this).attr('aria-valuenow');
        //   $(this).width(Math.floor(per) + '%');
        // });
        return Math.floor(per);
    }
    skipQuestion() {
        this.currentQuestion.skipped = "true";
        this.nextQuestion(true);
    }
    asampe() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 312, vars: 59, consts: [[1, "logo"], ["width", "140", "height", "29", "viewBox", "0 0 140 29", "fill", "none", 1, "ss-branding-logo-new"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M0.759845 12.3735L2.72311 12.7666C0.849922 12.1852 -0.316981 10.2711 0.0760814 8.3078L0.131356 8.03552L10.4492 10.1155C13.2273 10.6703 15.3216 13.1228 15.3216 16.0646C15.3216 19.4159 12.6049 22.1325 9.25367 22.1325C5.99044 22.1325 3.33113 19.5572 3.19192 16.3287C1.48046 15.9787 0.372925 14.3102 0.716854 12.5967L0.759845 12.3735ZM10.83 14.3081C11.0592 14.0829 11.4257 14.087 11.6509 14.3163C11.8761 14.5456 11.872 14.9141 11.6447 15.1393L8.91173 17.8129C8.79914 17.9235 8.65379 17.9787 8.50639 17.9787C8.36104 17.9787 8.21364 17.9235 8.10104 17.8129L6.80312 16.5457C6.57383 16.3226 6.56974 15.9541 6.79288 15.7248C7.01603 15.4955 7.38452 15.4914 7.61381 15.7145L8.50434 16.5846L10.83 14.3081Z", "fill", "#19BA84"], ["d", "M32.4117 21.4832C31.9388 21.4832 31.4823 21.4136 31.038 21.2765C30.5938 21.1393 30.1823 20.9346 29.8036 20.6582C29.4248 20.3839 29.0932 20.0441 28.8086 19.6387C28.5241 19.2334 28.305 18.7605 28.1494 18.2241L29.9264 17.4994C30.0021 17.8065 30.1147 18.0951 30.2642 18.3633C30.4116 18.6335 30.5938 18.8649 30.8067 19.0634C31.0196 19.26 31.2612 19.4176 31.5314 19.5323C31.7996 19.6469 32.0985 19.7042 32.4281 19.7042C32.7024 19.7042 32.9665 19.6694 33.2183 19.5978C33.4701 19.5261 33.6891 19.4197 33.8775 19.2764C34.0638 19.1331 34.2153 18.959 34.3299 18.7502C34.4445 18.5414 34.5019 18.2998 34.5019 18.0255C34.5019 17.7839 34.4589 17.5649 34.3708 17.3663C34.2828 17.1698 34.1457 16.9876 33.9594 16.8238C33.7731 16.66 33.5254 16.5024 33.2183 16.355C32.9112 16.2076 32.5427 16.0561 32.1148 15.9026L31.3738 15.6385C31.0544 15.5279 30.7289 15.3846 30.3952 15.2024C30.0615 15.0223 29.7585 14.8012 29.4903 14.5453C29.2221 14.2873 29.0031 13.9823 28.8332 13.6322C28.6633 13.2822 28.5773 12.8707 28.5773 12.3978C28.5773 11.9597 28.6674 11.5441 28.8496 11.1551C29.0297 10.7662 29.2856 10.4222 29.6152 10.1274C29.9448 9.83058 30.3358 9.5972 30.7923 9.42729C31.2468 9.25737 31.7484 9.17139 32.2991 9.17139C32.8703 9.17139 33.3718 9.25123 33.8058 9.41091C34.2398 9.57059 34.6042 9.77122 34.9011 10.0107C35.1979 10.2523 35.4354 10.5184 35.6176 10.8091C35.7998 11.0998 35.9329 11.3721 36.0209 11.6239L34.3422 12.3323C34.2869 12.1685 34.2071 12.0006 34.1047 11.8307C34.0003 11.6608 33.8652 11.5093 33.7014 11.3783C33.5356 11.2472 33.3411 11.1367 33.118 11.0487C32.8928 10.9606 32.6328 10.9176 32.3359 10.9176C32.0718 10.9176 31.8262 10.9524 31.5948 11.0241C31.3656 11.0958 31.1649 11.1981 30.995 11.3291C30.8251 11.4602 30.69 11.6137 30.5917 11.7898C30.4935 11.9658 30.4443 12.1582 30.4443 12.365C30.4443 12.7826 30.6163 13.1204 30.9623 13.3763C31.3082 13.6343 31.8159 13.8779 32.4833 14.1092L33.2244 14.3733C33.685 14.5269 34.1068 14.707 34.4916 14.9158C34.8765 15.1246 35.2102 15.3744 35.4948 15.6651C35.7793 15.9558 36.0025 16.2936 36.1621 16.6785C36.3198 17.0633 36.4017 17.5076 36.4017 18.0112C36.4017 18.6253 36.2788 19.1494 36.0311 19.5834C35.7834 20.0174 35.4681 20.3757 35.0853 20.6603C34.7004 20.9469 34.2726 21.1536 33.8017 21.2867C33.3227 21.4157 32.8621 21.4832 32.4117 21.4832Z", "fill", "black"], ["d", "M43.3232 20.132H43.225C42.9834 20.5169 42.6415 20.8362 42.1973 21.0942C41.753 21.3521 41.2515 21.4811 40.6926 21.4811C39.671 21.4811 38.9095 21.1761 38.4038 20.5681C37.8982 19.96 37.6464 19.1493 37.6464 18.1401V13.1552H39.4725V17.8944C39.4725 18.5966 39.6342 19.0879 39.9576 19.3684C40.2811 19.6489 40.7069 19.7881 41.2331 19.7881C41.5401 19.7881 41.8165 19.7226 42.0642 19.5915C42.3119 19.4605 42.5228 19.2824 42.6968 19.0572C42.8729 18.832 43.0039 18.5741 43.0919 18.2834C43.1799 17.9927 43.2229 17.6876 43.2229 17.3703V13.1552H45.049V21.2191H43.3212V20.132H43.3232Z", "fill", "black"], ["d", "M46.8955 13.1552H48.6233V14.3733H48.7216C48.8199 14.1645 48.955 13.97 49.1249 13.7898C49.2948 13.6097 49.4873 13.4541 49.7002 13.3272C49.9151 13.2002 50.1383 13.0958 50.3757 13.0139C50.6112 12.9321 50.8384 12.8911 51.0595 12.8911C51.3236 12.8911 51.5488 12.9157 51.7351 12.9648C51.9214 13.0139 52.0913 13.0835 52.2448 13.1695L51.7187 14.8319C51.5979 14.7766 51.4649 14.7356 51.3154 14.709C51.168 14.6824 50.9879 14.6681 50.7811 14.6681C50.4842 14.6681 50.214 14.7295 49.9663 14.8503C49.7186 14.9711 49.5016 15.1369 49.3153 15.3457C49.129 15.5566 48.9836 15.8043 48.8792 16.0909C48.7748 16.3775 48.7237 16.6805 48.7237 16.9998V21.2171H46.8976V13.1552H46.8955Z", "fill", "black"], ["d", "M52.5397 13.1552H54.5971L56.7712 18.8484H56.8531L59.0743 13.1552H61.0826L57.7088 21.2191H55.8807L52.5397 13.1552Z", "fill", "black"], ["d", "M69.2959 19.2926C68.9561 19.919 68.4729 20.439 67.8465 20.8567C67.2221 21.2743 66.4523 21.4831 65.5413 21.4831C64.9374 21.4831 64.3806 21.3767 63.8708 21.1617C63.3611 20.9467 62.9189 20.6479 62.5463 20.265C62.1737 19.8802 61.883 19.4298 61.6742 18.9077C61.4654 18.3857 61.361 17.8125 61.361 17.1881C61.361 16.6067 61.4592 16.056 61.6578 15.534C61.8564 15.014 62.1328 14.5574 62.489 14.1685C62.8452 13.7795 63.2771 13.4683 63.7807 13.239C64.2864 13.0077 64.8453 12.8931 65.4594 12.8931C66.0859 12.8931 66.6427 12.9975 67.13 13.2063C67.6172 13.4151 68.0328 13.7058 68.3726 14.0784C68.7124 14.451 68.9724 14.9014 69.1546 15.4275C69.3348 15.9536 69.4269 16.5309 69.4269 17.1553V17.3027C69.4167 17.358 69.4105 17.4071 69.4105 17.4501C69.4003 17.4952 69.3942 17.5382 69.3942 17.5811H63.1891C63.2219 17.966 63.316 18.2997 63.4696 18.5843C63.6231 18.8688 63.8135 19.1063 64.0366 19.2926C64.2618 19.4789 64.5116 19.6161 64.7859 19.7041C65.0602 19.7921 65.3284 19.8351 65.5925 19.8351C66.1186 19.8351 66.5527 19.7082 66.8925 19.4564C67.2323 19.2046 67.5128 18.8914 67.7318 18.5188L69.2959 19.2926ZM67.5988 16.1829C67.5763 16.0191 67.5251 15.8349 67.4432 15.6322C67.3613 15.4295 67.2344 15.2432 67.0645 15.0733C66.8945 14.9034 66.6755 14.7581 66.4053 14.6373C66.1371 14.5165 65.8095 14.4571 65.4267 14.4571C64.9006 14.4571 64.4481 14.6127 64.0694 14.9259C63.6907 15.2392 63.4368 15.6588 63.3038 16.185H67.5988V16.1829Z", "fill", "black"], ["d", "M73.1468 20.7584L69.7894 13.1552H71.8284L74.0517 18.5024H74.1336L76.2893 13.1552H78.314L73.2615 24.775H71.3187L73.1468 20.7584Z", "fill", "black"], ["d", "M83.0367 21.4832C82.5638 21.4832 82.1072 21.4136 81.663 21.2765C81.2188 21.1393 80.8073 20.9346 80.4285 20.6582C80.0498 20.3839 79.7182 20.0441 79.4336 19.6387C79.1491 19.2334 78.928 18.7605 78.7744 18.2241L80.5514 17.4994C80.6271 17.8065 80.7397 18.0951 80.8892 18.3633C81.0366 18.6335 81.2188 18.8649 81.4317 19.0634C81.6446 19.26 81.8862 19.4176 82.1564 19.5323C82.4246 19.6469 82.7235 19.7042 83.0531 19.7042C83.3274 19.7042 83.5915 19.6694 83.8433 19.5978C84.0951 19.5261 84.3141 19.4197 84.5025 19.2764C84.6888 19.1331 84.8403 18.959 84.9549 18.7502C85.0695 18.5414 85.1269 18.2998 85.1269 18.0255C85.1269 17.7839 85.0839 17.5649 84.9958 17.3663C84.9078 17.1698 84.7707 16.9876 84.5844 16.8238C84.3981 16.66 84.1504 16.5024 83.8433 16.355C83.5362 16.2076 83.1697 16.0561 82.7398 15.9026L81.9988 15.6385C81.6794 15.5279 81.3539 15.3846 81.0202 15.2024C80.6865 15.0223 80.3835 14.8012 80.1153 14.5453C79.8471 14.2873 79.6281 13.9823 79.4582 13.6322C79.2883 13.2822 79.2023 12.8707 79.2023 12.3978C79.2023 11.9597 79.2924 11.5441 79.4746 11.1551C79.6547 10.7662 79.9106 10.4222 80.2402 10.1274C80.5698 9.83058 80.9608 9.5972 81.4173 9.42729C81.8718 9.25737 82.3734 9.17139 82.922 9.17139C83.4932 9.17139 83.9948 9.25123 84.4288 9.41091C84.8628 9.57059 85.2272 9.77122 85.524 10.0107C85.8209 10.2523 86.0583 10.5184 86.2405 10.8091C86.4227 11.0998 86.5558 11.3721 86.6438 11.6239L84.9651 12.3323C84.9099 12.1685 84.83 12.0006 84.7277 11.8307C84.6233 11.6608 84.4881 11.5093 84.3244 11.3783C84.1606 11.2472 83.9641 11.1367 83.7409 11.0487C83.5157 10.9606 83.2557 10.9176 82.9589 10.9176C82.6948 10.9176 82.4491 10.9524 82.2178 11.0241C81.9865 11.0958 81.7879 11.1981 81.618 11.3291C81.4481 11.4602 81.3129 11.6137 81.2147 11.7898C81.1164 11.9658 81.0673 12.1582 81.0673 12.365C81.0673 12.7826 81.2392 13.1204 81.5852 13.3763C81.9312 13.6343 82.4389 13.8779 83.1083 14.1092L83.8494 14.3733C84.31 14.5269 84.7318 14.707 85.1166 14.9158C85.5015 15.1246 85.8352 15.3744 86.1198 15.6651C86.4043 15.9558 86.6275 16.2936 86.7871 16.6785C86.9468 17.0633 87.0267 17.5076 87.0267 18.0112C87.0267 18.6253 86.9038 19.1494 86.6561 19.5834C86.4084 20.0174 86.0931 20.3757 85.7103 20.6603C85.3254 20.9469 84.8976 21.1536 84.4267 21.2867C83.9477 21.4157 83.4871 21.4832 83.0367 21.4832Z", "fill", "black"], ["d", "M88.5192 13.1552H90.247V14.1911H90.3453C90.5643 13.841 90.9001 13.536 91.3484 13.278C91.7988 13.0201 92.3351 12.8911 92.9616 12.8911C93.4775 12.8911 93.9688 12.9976 94.4356 13.2125C94.9023 13.4275 95.3097 13.7264 95.6618 14.1092C96.014 14.4941 96.2924 14.9465 96.5012 15.4665C96.71 15.9885 96.8144 16.5617 96.8144 17.1861C96.8144 17.8105 96.71 18.3858 96.5012 18.9058C96.2924 19.4278 96.0119 19.8802 95.6618 20.2631C95.3118 20.6479 94.9023 20.9468 94.4356 21.1597C93.9688 21.3747 93.4775 21.4812 92.9616 21.4812C92.3372 21.4812 91.7988 21.3522 91.3484 21.0942C90.898 20.8363 90.5643 20.5333 90.3453 20.1812H90.247L90.3453 21.301V24.773H88.5192V13.1552ZM92.6156 19.7881C92.9227 19.7881 93.2216 19.7288 93.5123 19.608C93.803 19.4872 94.0548 19.3152 94.2697 19.09C94.4827 18.8648 94.6567 18.5946 94.7877 18.2752C94.9187 17.9579 94.9863 17.5956 94.9863 17.1882C94.9863 16.7828 94.9208 16.4205 94.7877 16.1011C94.6567 15.7838 94.4827 15.5115 94.2697 15.2863C94.0568 15.0611 93.803 14.8892 93.5123 14.7684C93.2216 14.6476 92.9227 14.5882 92.6156 14.5882C92.2962 14.5882 91.9953 14.6497 91.7107 14.7684C91.4262 14.8892 91.1764 15.0591 90.9615 15.2781C90.7486 15.4972 90.5746 15.7695 90.4435 16.0929C90.3125 16.4164 90.247 16.7808 90.247 17.1882C90.247 17.5935 90.3125 17.96 90.4435 18.2834C90.5746 18.6069 90.7486 18.8792 90.9615 19.0982C91.1764 19.3173 91.4241 19.4872 91.7107 19.608C91.9974 19.7267 92.2983 19.7881 92.6156 19.7881Z", "fill", "black"], ["d", "M103.298 20.2323H103.2C102.958 20.5516 102.645 20.8382 102.262 21.0962C101.877 21.3541 101.39 21.4831 100.796 21.4831C100.368 21.4831 99.967 21.4156 99.5944 21.2763C99.2219 21.1392 98.8984 20.9467 98.6241 20.7011C98.3498 20.4534 98.1328 20.1647 97.9731 19.829C97.8134 19.4953 97.7356 19.1247 97.7356 18.7173C97.7356 18.2895 97.8195 17.9046 97.9894 17.5648C98.1594 17.2249 98.3948 16.9383 98.6978 16.709C99.0008 16.4798 99.359 16.2996 99.7767 16.1747C100.194 16.0478 100.643 15.9864 101.126 15.9864C101.664 15.9864 102.113 16.0396 102.475 16.142C102.837 16.2464 103.112 16.3426 103.298 16.4306V16.1174C103.298 15.8758 103.245 15.6506 103.142 15.4418C103.038 15.233 102.895 15.0549 102.714 14.9075C102.532 14.7601 102.327 14.6434 102.096 14.5615C101.867 14.4796 101.625 14.4387 101.371 14.4387C100.966 14.4387 100.6 14.5185 100.276 14.6782C99.9527 14.8379 99.6641 15.0918 99.4123 15.4439L97.9649 14.4899C98.3498 13.9638 98.8267 13.5666 99.3959 13.2964C99.967 13.0282 100.614 12.8931 101.339 12.8931C102.534 12.8931 103.46 13.1899 104.113 13.7816C104.766 14.3732 105.091 15.2187 105.091 16.316V21.2211H103.298V20.2323ZM103.298 17.8616C103.056 17.7183 102.788 17.6037 102.491 17.5156C102.194 17.4276 101.855 17.3846 101.472 17.3846C100.901 17.3846 100.446 17.5156 100.106 17.7797C99.7664 18.0438 99.5965 18.3611 99.5965 18.7337C99.5965 18.9303 99.6395 19.1043 99.7275 19.2517C99.8156 19.3991 99.9281 19.528 100.065 19.6386C100.202 19.7491 100.362 19.831 100.542 19.8842C100.722 19.9395 100.907 19.9661 101.093 19.9661C101.39 19.9661 101.672 19.9088 101.941 19.7921C102.209 19.6775 102.442 19.5239 102.641 19.3315C102.837 19.1391 102.997 18.918 103.118 18.6641C103.236 18.4164 103.298 18.1462 103.298 17.8616Z", "fill", "black"], ["d", "M106.803 13.1552H108.531V14.3733H108.629C108.727 14.1645 108.862 13.97 109.032 13.7898C109.202 13.6097 109.394 13.4541 109.607 13.3272C109.822 13.2002 110.045 13.0958 110.283 13.0139C110.518 12.9321 110.748 12.8911 110.967 12.8911C111.231 12.8911 111.456 12.9157 111.642 12.9648C111.829 13.0139 111.999 13.0835 112.152 13.1695L111.626 14.8319C111.505 14.7766 111.372 14.7356 111.223 14.709C111.075 14.6824 110.895 14.6681 110.688 14.6681C110.391 14.6681 110.121 14.7295 109.874 14.8503C109.626 14.9711 109.409 15.1369 109.223 15.3457C109.036 15.5566 108.891 15.8043 108.786 16.0909C108.682 16.3775 108.631 16.6805 108.631 16.9998V21.2171H106.805V13.1552H106.803Z", "fill", "black"], ["d", "M113.141 13.1552H114.869V14.3733H114.967C115.065 14.1645 115.2 13.97 115.37 13.7898C115.54 13.6097 115.733 13.4541 115.945 13.3272C116.16 13.2002 116.384 13.0958 116.621 13.0139C116.856 12.9321 117.084 12.8911 117.305 12.8911C117.569 12.8911 117.794 12.9157 117.98 12.9648C118.167 13.0139 118.337 13.0835 118.49 13.1695L117.964 14.8319C117.843 14.7766 117.71 14.7356 117.561 14.709C117.413 14.6824 117.233 14.6681 117.026 14.6681C116.73 14.6681 116.459 14.7295 116.212 14.8503C115.964 14.9711 115.747 15.1369 115.561 15.3457C115.374 15.5566 115.229 15.8043 115.125 16.0909C115.02 16.3775 114.969 16.6805 114.969 16.9998V21.2171H113.143V13.1552H113.141Z", "fill", "black"], ["d", "M122.736 12.8911C123.35 12.8911 123.915 12.9976 124.431 13.2125C124.947 13.4275 125.391 13.7264 125.764 14.1092C126.136 14.4941 126.427 14.9485 126.636 15.4747C126.845 16.0008 126.949 16.572 126.949 17.1861C126.949 17.8003 126.845 18.3715 126.636 18.8976C126.427 19.4237 126.136 19.8802 125.764 20.2631C125.391 20.6479 124.947 20.9468 124.431 21.1597C123.915 21.3747 123.35 21.4812 122.736 21.4812C122.122 21.4812 121.557 21.3747 121.041 21.1597C120.525 20.9448 120.081 20.6459 119.708 20.2631C119.336 19.8802 119.045 19.4237 118.836 18.8976C118.627 18.3715 118.523 17.8003 118.523 17.1861C118.523 16.572 118.627 16.0008 118.836 15.4747C119.045 14.9485 119.336 14.492 119.708 14.1092C120.081 13.7243 120.525 13.4254 121.041 13.2125C121.555 12.9976 122.12 12.8911 122.736 12.8911ZM122.736 19.7881C123.043 19.7881 123.34 19.7288 123.624 19.608C123.909 19.4872 124.165 19.3173 124.39 19.0982C124.615 18.8792 124.793 18.6069 124.924 18.2834C125.055 17.96 125.121 17.5956 125.121 17.1882C125.121 16.7828 125.055 16.4184 124.924 16.0929C124.793 15.7695 124.613 15.4972 124.39 15.2781C124.165 15.0591 123.911 14.8892 123.624 14.7684C123.34 14.6476 123.043 14.5882 122.736 14.5882C122.429 14.5882 122.132 14.6497 121.847 14.7684C121.563 14.8892 121.307 15.0591 121.082 15.2781C120.857 15.4972 120.679 15.7695 120.548 16.0929C120.416 16.4164 120.351 16.7808 120.351 17.1882C120.351 17.5935 120.416 17.96 120.548 18.2834C120.679 18.6069 120.857 18.8792 121.082 19.0982C121.307 19.3173 121.563 19.4872 121.847 19.608C122.132 19.7267 122.429 19.7881 122.736 19.7881Z", "fill", "black"], ["d", "M127.312 13.1552H129.301L130.865 18.7338H130.931L132.743 13.1552H134.634L136.43 18.7338H136.495L138.041 13.1552H140L137.416 21.2191H135.49L133.664 15.5729H133.598L131.819 21.2191H129.895L127.312 13.1552Z", "fill", "black"], ["d", "M18.2695 10.3569C19.3238 12.0111 19.9359 13.9764 19.9359 16.0829C19.9359 19.9501 17.8785 23.3382 14.7975 25.2094C14.7258 25.2523 14.6501 25.2974 14.5764 25.3404C14.2836 25.5082 13.9847 25.6638 13.6756 25.803C13.1966 26.02 12.6991 26.2022 12.1873 26.3476C12.1013 26.3722 12.0174 26.3947 11.9314 26.4172C11.7615 26.4602 11.5895 26.5011 11.4155 26.5359C11.3725 26.5441 11.3295 26.5544 11.2865 26.5605C11.1555 26.5871 11.0245 26.6096 10.8914 26.6301C10.3612 26.7099 9.81868 26.7529 9.26594 26.7529C9.17381 26.7529 9.08169 26.7509 8.98956 26.7488C8.83193 26.7448 8.6743 26.7386 8.51871 26.7263C8.45729 26.7222 8.39588 26.7181 8.33446 26.712C8.25872 26.7059 8.18092 26.6977 8.10518 26.6895C7.83699 26.6608 7.57086 26.6219 7.30677 26.5728C7.24535 26.5625 7.18598 26.5503 7.12457 26.538C7.0263 26.5175 6.92599 26.497 6.82772 26.4745C6.74993 26.4561 6.67418 26.4377 6.59844 26.4172C6.52269 26.3967 6.4449 26.3763 6.36915 26.3537C6.13782 26.2903 5.90853 26.2166 5.68539 26.1367L2.92372 28.8964C2.2072 28.5442 1.52344 28.1327 0.880615 27.666L3.49079 25.0558L5.18587 23.3628L5.19406 23.3833C6.40191 24.0568 7.78991 24.4396 9.26594 24.4396C13.8987 24.4396 17.6676 20.6707 17.6676 16.0379V15.61C17.6717 14.6827 17.4097 13.7758 17.1476 13.1043C16.8856 12.4369 16.6256 11.9988 16.6256 11.9988C16.6256 11.9988 17.6717 10.9568 18.2695 10.3569Z", "fill", "#19BA84"], ["d", "M20.1591 8.46751L18.2695 10.3571C18.1406 8.64153 16.7096 7.29242 14.9613 7.29242C14.1588 7.29242 13.4238 7.57698 12.8506 8.04989C12.8404 8.05603 12.8322 8.06422 12.8219 8.07445C12.7544 8.12973 12.6889 8.1891 12.6274 8.25256H12.6254C11.8638 7.92501 11.047 7.70391 10.1913 7.60974C10.6458 6.89322 11.2579 6.28111 11.9826 5.83072C12.0092 5.81435 12.0338 5.79797 12.0604 5.78364C12.8015 5.3394 13.6531 5.06098 14.5702 4.99956C16.5683 4.86445 18.3985 5.79387 19.5019 7.30061H21.3055L20.155 8.45933C20.155 8.46137 20.157 8.46547 20.1591 8.46751Z", "fill", "#19BA84"], ["d", "M39.656 2.288H40.288L42.352 7.432L44.448 2.288H45.048V8H44.592V3.104C44.5653 3.152 44.48 3.35733 44.336 3.72C44.272 3.87467 44.192 4.072 44.096 4.312C44 4.54667 43.88 4.83733 43.736 5.184C43.5973 5.52533 43.432 5.928 43.24 6.392C43.048 6.856 42.8267 7.392 42.576 8H42.112L40.112 3.136V8H39.656V2.288ZM48.8871 7.416C48.8178 7.50133 48.7351 7.58667 48.6391 7.672C48.5431 7.752 48.4338 7.824 48.3111 7.888C48.1885 7.952 48.0525 8.00267 47.9031 8.04C47.7591 8.07733 47.5991 8.096 47.4231 8.096C46.9911 8.096 46.6445 7.992 46.3831 7.784C46.1218 7.576 45.9911 7.26667 45.9911 6.856C45.9911 6.57867 46.0498 6.352 46.1671 6.176C46.2845 6 46.4391 5.86133 46.6311 5.76C46.8285 5.65867 47.0498 5.58933 47.2951 5.552C47.5458 5.50933 47.8045 5.48267 48.0711 5.472L48.8711 5.44V5.312C48.8711 4.90667 48.7911 4.61067 48.6311 4.424C48.4765 4.23733 48.1965 4.144 47.7911 4.144C47.5938 4.144 47.4258 4.16 47.2871 4.192C47.1538 4.224 47.0418 4.272 46.9511 4.336C46.8605 4.39467 46.7885 4.46667 46.7351 4.552C46.6818 4.632 46.6418 4.72267 46.6151 4.824L46.1911 4.76C46.3405 4.088 46.8791 3.752 47.8071 3.752C48.0951 3.752 48.3378 3.78667 48.5351 3.856C48.7325 3.92533 48.8898 4.02667 49.0071 4.16C49.1298 4.288 49.2178 4.448 49.2711 4.64C49.3245 4.82667 49.3511 5.04267 49.3511 5.288V8H48.8871V7.416ZM48.8791 5.808L48.1191 5.84C47.8098 5.85067 47.5511 5.88 47.3431 5.928C47.1351 5.97067 46.9671 6.03467 46.8391 6.12C46.7111 6.2 46.6178 6.30133 46.5591 6.424C46.5058 6.54133 46.4791 6.68267 46.4791 6.848C46.4791 7.09867 46.5485 7.30133 46.6871 7.456C46.8311 7.60533 47.0791 7.68 47.4311 7.68C47.6071 7.68 47.7805 7.66133 47.9511 7.624C48.1271 7.58133 48.2711 7.51467 48.3831 7.424C48.4791 7.35467 48.5565 7.288 48.6151 7.224C48.6791 7.16 48.7298 7.09067 48.7671 7.016C48.8098 6.936 48.8391 6.848 48.8551 6.752C48.8711 6.656 48.8791 6.544 48.8791 6.416V5.808ZM53.5303 7.384C53.3543 7.61333 53.1516 7.79467 52.9223 7.928C52.6983 8.06133 52.4236 8.128 52.0983 8.128C51.7943 8.128 51.5303 8.06933 51.3063 7.952C51.0876 7.83467 50.9063 7.67733 50.7623 7.48C50.6183 7.28267 50.5116 7.056 50.4423 6.8C50.3729 6.53867 50.3383 6.26667 50.3383 5.984C50.3383 5.28 50.5009 4.73333 50.8263 4.344C51.1569 3.94933 51.6103 3.752 52.1863 3.752C52.4103 3.752 52.6396 3.8 52.8743 3.896C53.1089 3.992 53.3276 4.17333 53.5303 4.44V2.288H53.9943V8H53.5303V7.384ZM53.5543 5.776C53.5543 5.58933 53.5436 5.42933 53.5223 5.296C53.5009 5.15733 53.4689 5.03733 53.4263 4.936C53.3836 4.82933 53.3249 4.736 53.2503 4.656C53.1809 4.576 53.0983 4.49867 53.0023 4.424C52.8743 4.328 52.7463 4.25867 52.6183 4.216C52.4956 4.17333 52.3543 4.152 52.1943 4.152C51.9969 4.152 51.8156 4.18667 51.6503 4.256C51.4849 4.32 51.3409 4.424 51.2183 4.568C51.1009 4.712 51.0076 4.89867 50.9383 5.128C50.8689 5.35733 50.8343 5.63733 50.8343 5.968C50.8343 6.304 50.8716 6.58667 50.9463 6.816C51.0263 7.04 51.1276 7.22133 51.2503 7.36C51.3729 7.49333 51.5089 7.58933 51.6583 7.648C51.8129 7.70133 51.9676 7.728 52.1223 7.728C52.2876 7.728 52.4343 7.70933 52.5623 7.672C52.6956 7.63467 52.8316 7.56533 52.9703 7.464C53.1569 7.32533 53.3009 7.14933 53.4023 6.936C53.5036 6.72267 53.5543 6.456 53.5543 6.136V5.776ZM58.5547 6.92C58.4907 7.27733 58.32 7.568 58.0427 7.792C57.7654 8.016 57.3707 8.128 56.8587 8.128C56.2667 8.128 55.8054 7.93867 55.4747 7.56C55.1494 7.176 54.9867 6.65067 54.9867 5.984C54.9867 5.62133 55.032 5.30133 55.1227 5.024C55.2187 4.74667 55.3494 4.51467 55.5147 4.328C55.6854 4.136 55.8827 3.992 56.1067 3.896C56.336 3.8 56.5867 3.752 56.8587 3.752C57.1787 3.752 57.4507 3.80533 57.6747 3.912C57.8987 4.01333 58.08 4.15467 58.2187 4.336C58.3627 4.512 58.4667 4.72267 58.5307 4.968C58.5947 5.21333 58.6267 5.47733 58.6267 5.76V6.056H55.4587C55.4587 6.29067 55.488 6.512 55.5467 6.72C55.6054 6.92267 55.6934 7.10133 55.8107 7.256C55.928 7.40533 56.0747 7.52533 56.2507 7.616C56.4267 7.70133 56.6294 7.744 56.8587 7.744C57.0667 7.744 57.2427 7.72533 57.3867 7.688C57.5307 7.64533 57.6507 7.58667 57.7467 7.512C57.8427 7.43733 57.9174 7.352 57.9707 7.256C58.0294 7.15467 58.0747 7.04267 58.1067 6.92H58.5547ZM58.1467 5.656C58.1467 5.432 58.1227 5.22667 58.0747 5.04C58.0267 4.85333 57.952 4.69333 57.8507 4.56C57.7494 4.42133 57.616 4.31467 57.4507 4.24C57.2854 4.16533 57.088 4.128 56.8587 4.128C56.4587 4.128 56.1387 4.25333 55.8987 4.504C55.6587 4.75467 55.5147 5.13867 55.4667 5.656H58.1467ZM60.8845 3.88H61.3965L62.3565 7.48L63.4045 3.904H63.9485L64.9725 7.48L65.9325 3.88H66.4285L65.2205 8H64.6845L63.6525 4.4L62.6125 8H62.0765L60.8845 3.88ZM67.084 3.88H67.548V8H67.084V3.88ZM67.052 2.288H67.58V2.984H67.052V2.288ZM68.9248 4.264H68.2848V3.88H68.9248V2.744H69.3888V3.88H70.5568V4.264H69.3888V6.96C69.3888 7.16267 69.4315 7.336 69.5168 7.48C69.6021 7.61867 69.7515 7.688 69.9648 7.688C70.1035 7.688 70.2208 7.67733 70.3168 7.656C70.4128 7.63467 70.4981 7.61067 70.5728 7.584L70.6688 7.96C70.5888 7.992 70.4901 8.02133 70.3728 8.048C70.2608 8.07467 70.1115 8.088 69.9248 8.088C69.6901 8.088 69.5061 8.048 69.3728 7.968C69.2395 7.888 69.1381 7.784 69.0688 7.656C69.0048 7.52267 68.9648 7.37067 68.9488 7.2C68.9328 7.02933 68.9248 6.85067 68.9248 6.664V4.264ZM71.3334 2.288H71.7974V4.552C72.0214 4.26933 72.2588 4.06667 72.5094 3.944C72.7654 3.816 73.0374 3.752 73.3254 3.752C73.7948 3.752 74.1414 3.88267 74.3654 4.144C74.5894 4.40533 74.7014 4.776 74.7014 5.256V8H74.2374V5.384C74.2374 4.952 74.1601 4.64267 74.0054 4.456C73.8508 4.264 73.6054 4.168 73.2694 4.168C73.1094 4.168 72.9388 4.2 72.7574 4.264C72.5814 4.32267 72.4214 4.41867 72.2774 4.552C72.1174 4.69067 71.9974 4.83467 71.9174 4.984C71.8374 5.128 71.7974 5.328 71.7974 5.584V8H71.3334V2.288Z", "fill", "black"], [1, "container-w"], ["id", "form1", "name", "form1"], ["form", "ngForm"], ["id", "carouselExampleControls", "data-interval", "false", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "form-bdy"], [1, "item"], [1, "form-group", "animated", "fadeInUp"], ["for", "select", 1, "normal-label"], [1, "vertical-align"], [1, "btns"], ["checked", "", "name", "button-group", "type", "radio", "value", "1", 3, "ngModel", "ngModelChange"], [1, "btn", "first"], ["name", "button-group", "type", "radio", "value", "2", 3, "ngModel", "ngModelChange"], [1, "btn"], ["name", "button-group", "type", "radio", "value", "3", 3, "ngModel", "ngModelChange"], ["name", "button-group", "type", "radio", "value", "4", 3, "ngModel", "ngModelChange"], ["name", "button-group", "type", "radio", "value", "5", 3, "ngModel", "ngModelChange"], ["name", "button-group", "type", "radio", "value", "6", 3, "ngModel", "ngModelChange"], ["name", "button-group", "type", "radio", "value", "7", 3, "ngModel", "ngModelChange"], ["name", "button-group", "type", "radio", "value", "8", 3, "ngModel", "ngModelChange"], ["name", "button-group", "type", "radio", "value", "9", 3, "ngModel", "ngModelChange"], ["name", "button-group", "type", "radio", "value", "10", 3, "ngModel", "ngModelChange"], [1, "btn", "last"], [1, "form-radio", "inline-radio"], ["class", "btn-radio", 3, "for", 4, "ngFor", "ngForOf"], [1, "star-rating"], ["type", "radio", "id", "5-stars", "name", "rating", "value", "5", 3, "ngModel", "ngModelChange"], ["for", "5-stars", 1, "star"], ["type", "radio", "id", "4-stars", "name", "rating", "value", "4", 3, "ngModel", "ngModelChange"], ["for", "4-stars", 1, "star"], ["type", "radio", "id", "3-stars", "name", "rating", "value", "3", 3, "ngModel", "ngModelChange"], ["for", "3-stars", 1, "star"], ["type", "radio", "id", "2-stars", "name", "rating", "value", "2", 3, "ngModel", "ngModelChange"], ["for", "2-stars", 1, "star"], ["type", "radio", "id", "1-star", "name", "rating", "value", "1", 3, "ngModel", "ngModelChange"], ["for", "1-star", 1, "star"], [1, "animated", "fadeInUp"], [1, "normal-label"], [1, "form-group"], ["type", "text", "id", "input1", "name", "input1", "required", "required", 3, "ngModel", "ngModelChange"], ["for", "input", 1, "control-label"], [1, "bar"], [1, "learn-more"], ["aria-hidden", "true", 1, "circle"], [1, "icon", "arrow"], [1, "button-text", 3, "click"], ["type", "text", "id", "email", "name", "email", "required", "required", 3, "ngModel", "ngModelChange"], [1, "form-radio"], [1, "img-radio"], ["for", "rdo-21", 1, "btn-radio"], ["type", "radio", "id", "rdo-21", "name", "radio-grp", 3, "ngModel", "ngModelChange"], [1, "check-in"], ["src", "https://images.unsplash.com/photo-1604537466608-109fa2f16c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXw4MDMyOHwxfDF8c2VhcmNofDF8fG5hdHVyZXxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=400"], ["data-toggle", "tooltip", "title", "Key", 1, "key-radio"], ["for", "rdo-22", 1, "btn-radio"], ["type", "radio", "id", "rdo-22", "name", "radio-grp", 3, "ngModel", "ngModelChange"], [1, "img-radio", "svg-radio"], ["for", "rdo-31", 1, "btn-radio"], ["type", "radio", "value", "Yes", "id", "rdo-31", "name", "radio-grp", 3, "ngModel", "ngModelChange"], ["xmlns", "http://www.w3.org/2000/svg", "width", "52", "height", "52", "viewBox", "0 0 42 42"], ["fill", "currentColor"], ["d", "M9.841 42h-6.53a3.287 3.287 0 01-3.283-3.284V19.034A3.287 3.287 0 013.31 15.75h6.531a3.289 3.289 0 013.284 3.284v19.682A3.288 3.288 0 019.841 42zm-6.53-23.625a.659.659 0 00-.658.659v19.682a.66.66 0 00.657.659h6.531a.66.66 0 00.659-.659V19.034a.66.66 0 00-.659-.659h-6.53z"], ["d", "M33.898 42H17.99c-.81 0-1.62-.192-2.345-.554l-4.42-2.21a1.313 1.313 0 011.174-2.348l4.42 2.21a2.63 2.63 0 001.171.277h15.908c.479 0 .925-.259 1.164-.676l1.482-2.593a21.526 21.526 0 002.831-10.662v-4.441a2.63 2.63 0 00-2.628-2.628h-9.879a2.618 2.618 0 01-2.432-3.592 25.25 25.25 0 001.814-9.421V3.84c0-.669-.545-1.215-1.215-1.215h-.817c-.54 0-1.02.362-1.168.88l-.514 1.8A29.96 29.96 0 0117.1 15.833a6.735 6.735 0 01-5.288 2.542H7.874a1.313 1.313 0 010-2.625h3.938a4.129 4.129 0 003.239-1.558 27.35 27.35 0 004.96-9.609l.514-1.8A3.858 3.858 0 0124.218 0h.817a3.844 3.844 0 013.84 3.84v1.522c0 3.579-.675 7.077-2.002 10.396l9.874-.008A5.258 5.258 0 0142 21.003v4.441a24.15 24.15 0 01-3.178 11.965l-1.481 2.593A3.975 3.975 0 0133.898 42z"], ["cx", "6.563", "cy", "35.438", "r", "1.313"], [1, "bottom-lt"], ["for", "rdo-32", 1, "btn-radio"], ["type", "radio", "value", "No", "id", "rdo-32", "name", "radio-grp", 3, "ngModel", "ngModelChange"], [1, "phone-number", "animated", "fadeInUp"], [1, "left-sl"], ["data-role", "autosuggest", "id", "select", "name", "select", 3, "ngModel", "ngModelChange"], ["selected", "selected"], [1, "right-sl"], ["type", "number", "required", "required", "id", "number", "name", "number", 3, "ngModel", "ngModelChange"], [1, "row"], [1, "col-xs-12"], ["type", "checkbox", "id", "id-name--1", "name", "set-name", 1, "switch-input"], ["for", "id-name--1", 1, "switch-label"], [1, "toggle--on"], [1, "toggle--off"], ["type", "checkbox", "id", "id-name--2", "name", "set-name", 1, "switch-input"], ["for", "id-name--2", 1, "switch-label"], ["data-role", "autosuggest"], [1, "form-group", "boxes"], ["type", "checkbox", "id", "box-1"], ["for", "box-1"], ["data-toggle", "tooltip", "title", "Key", 1, "key-check"], ["type", "text", "required", "required"], [1, "submit-btn"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24"], ["d", "M0 11c2.761.575 6.312 1.688 9 3.438 3.157-4.23 8.828-8.187 15-11.438-5.861 5.775-10.711 12.328-14 18.917-2.651-3.766-5.547-7.271-10-10.917z"], [1, "form-group", "success-sc"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 130.2 130.2"], ["fill", "none", "stroke", "#19ba84", "stroke-width", "6", "stroke-miterlimit", "10", "cx", "65.1", "cy", "65.1", "r", "62.1", 1, "path", "circle"], ["fill", "none", "stroke", "#19ba84", "stroke-width", "6", "stroke-linecap", "round", "stroke-miterlimit", "10", "points", "100.2,40.2 51.5,88.8 29.8,67.5 ", 1, "path", "check"], ["class", "button-container", 3, "click", 4, "ngIf"], ["class", "nx-prev", 4, "ngIf"], [1, "progress", 3, "percentage"], [1, "progress-left"], [1, "progress-bar"], [1, "progress-right"], [1, "progress-value"], [1, "btn-radio", 3, "for"], ["type", "radio", "name", "radio-grp", 3, "id", "ngModel", "value", "ngModelChange", "change"], ["width", "20px", "height", "20px", "viewBox", "0 0 20 20"], ["cx", "10", "cy", "10", "r", "9"], ["d", "M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z", 1, "inner"], ["d", "M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z", 1, "outer"], ["class", "key-radio", "data-toggle", "tooltip", "title", "Key", 4, "ngIf"], [1, "button-container", 3, "click"], ["type", "button", 1, "default"], [1, "nx-prev"], ["role", "button", "data-toggle", "tooltip", "title", "Previous", 1, "d-flex", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "9", "viewBox", "0 0 14 9"], ["fill", "none", "stroke", "#888589", "stroke-width", "2", "d", "M13.333 7.667L7.037 1.37.741 7.667", 1, "svgColor"], ["role", "button", "data-toggle", "tooltip", "title", "Next", 1, "d-flex", 3, "click"], ["fill", "none", "stroke", "#888589", "stroke-width", "2", "d", "M.667 1.333L6.963 7.63l6.296-6.296", 1, "svgColor"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_35_listener($event) { return ctx.currentQuestion.answer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_39_listener($event) { return ctx.currentQuestion.answer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_43_listener($event) { return ctx.currentQuestion.answer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_47_listener($event) { return ctx.currentQuestion.answer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_51_listener($event) { return ctx.currentQuestion.answer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_55_listener($event) { return ctx.currentQuestion.answer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_59_listener($event) { return ctx.currentQuestion.answer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_63_listener($event) { return ctx.currentQuestion.answer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_67_listener($event) { return ctx.currentQuestion.answer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_71_listener($event) { return ctx.currentQuestion.answer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, HomeComponent_label_79_Template, 12, 9, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_85_listener($event) { return ctx.currentQuestion.answer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\u2605");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_90_listener($event) { return ctx.currentQuestion.answer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\u2605");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_95_listener($event) { return ctx.currentQuestion.answer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\u2605");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_100_listener($event) { return ctx.currentQuestion.answer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\u2605");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_105_listener($event) { return ctx.currentQuestion.answer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\u2605");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_115_listener($event) { return ctx.currentQuestion.answer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Please enter your response");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_span_click_122_listener() { return ctx.nextQuestion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_129_listener($event) { return ctx.currentQuestion.answer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Please enter an email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_span_click_136_listener() { return ctx.nextQuestion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_145_listener($event) { return ctx.currentQuestion.answer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "span", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "label", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_152_listener($event) { return ctx.currentQuestion.answer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "label", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "input", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_164_listener($event) { return ctx.currentQuestion.answer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "svg", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "g", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "path", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "path", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "circle", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "span", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "label", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "input", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_177_listener($event) { return ctx.currentQuestion.answer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "svg", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "g", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "path", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "path", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "circle", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "span", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "span", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "N");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "select", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_select_ngModelChange_194_listener($event) { return ctx.currentQuestion.countryCode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "option", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "+91");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "+98");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "input", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_200_listener($event) { return ctx.currentQuestion.phoneNo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_span_click_207_listener() { return ctx.nextQuestion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Please enter your age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "input", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_214_listener($event) { return ctx.currentQuestion.answer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Please enter a number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_span_click_221_listener() { return ctx.nextQuestion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_span_click_230_listener() { return ctx.nextQuestion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Enter your answer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "input", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "label", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, " Statement \u00A01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "span", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "True");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "span", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "False");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "input", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "label", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, " Statement\u00A0 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "span", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "True");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "span", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "False");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_span_click_256_listener() { return ctx.nextQuestion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Choose one of the options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "select", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Please agree to our terms and conditions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "input", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "label", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "I agree to the terms and conditions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "span", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "Please enter your website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "input", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "button", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "svg", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "path", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "svg", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "circle", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](299, "polyline", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Thank you for your time!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](302, HomeComponent_div_302_Template, 3, 0, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](303, HomeComponent_div_303_Template, 7, 0, "div", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "span", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "span", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "span", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](308, "span", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Question ", ctx.currentQuestionId + 1, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activeControl == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentQuestion.quesText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentQuestion.answer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentQuestion.answer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentQuestion.answer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentQuestion.answer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentQuestion.answer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentQuestion.answer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentQuestion.answer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentQuestion.answer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentQuestion.answer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentQuestion.answer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activeControl == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentQuestion.quesText, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentQuestion.ansList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activeControl == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentQuestion.quesText, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentQuestion.answer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentQuestion.answer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentQuestion.answer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentQuestion.answer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentQuestion.answer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activeControl == 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentQuestion.quesText, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentQuestion.answer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activeControl == 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentQuestion.quesText, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentQuestion.answer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activeControl == 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentQuestion.quesText, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentQuestion.answer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentQuestion.answer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activeControl == 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentQuestion.quesText, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentQuestion.answer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentQuestion.answer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activeControl == 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentQuestion.quesText, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentQuestion.countryCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentQuestion.phoneNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentQuestion.answer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activeControl == 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentQuestion.quesText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activeControl == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentQuestion.required != 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.complete);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("percentage", ctx.getPercentage());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.getPercentage(), "%");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-home",
                templateUrl: "./home.component.html",
                styleUrls: ["./home.component.css"],
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/services/api.service.ts":
/*!*************************************!*\
  !*** ./src/services/api.service.ts ***!
  \*************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class ApiService {
    constructor(http) {
        this.http = http;
        this.sessionToken = "";
        this.baseUrl = 'http://65.1.225.191:8080/survey';
    }
    //baseUrl = 'http://localhost:8087/survey/';
    get(entity, data) {
        return this.http.get(this.baseUrl + entity, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    post(entity, data) {
        console.log("d");
        return this.http.post(this.baseUrl + entity, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getIp() {
        return this.http.get('https://geolocation-db.com/json/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    put(entity, data) {
        return this.http.post("https://chat.fieldpower.com/" + entity, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    delete(entity, data) {
        return this.http.delete(this.baseUrl + entity, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    handleError(error) {
        console.log("error");
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Personal\Umesh\Survey\CodeBase\UI\Guna\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map