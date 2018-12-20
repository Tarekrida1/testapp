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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_porfolio_porfolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/porfolio/porfolio.component */ "./src/app/components/porfolio/porfolio.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'porfolio', component: _components_porfolio_porfolio_component__WEBPACK_IMPORTED_MODULE_3__["PorfolioComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "/* No CSS *//*# sourceMappingURL=app.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSw2Q0FBNkMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- theme option   -->\n<div class=\"themes-menu background-dark\">\n    <span class=\"color-light\">Change Theme</span>\n    <div class=\"list\">\n        <div id=\"theme-1\" data-color=\"theme1\">\n            <div></div>\n        </div>\n        <div id=\"theme-2\" data-color=\"theme2\">\n            <div></div>\n        </div>\n        <div id=\"theme-3\" data-color=\"theme3\">\n            <div></div>\n        </div>\n        <div id=\"theme-4\" data-color=\"theme4\">\n            <div></div>\n        </div>\n        <div id=\"theme-5\" data-color=\"theme5\">\n            <div></div>\n        </div>\n\n    </div>\n\n    <button class=\"theme-click\" id=\"theme-click\">\n      <i class=\"i1 fa  fa-cog fa-spin\"></i>\n      <i class=\"i2 fa  fa-close\"></i>\n    </button>\n    <div class=\"dw\">\n        <div class=\"color-light\" id=\"dark\">Dark</div>\n        <div class=\"color-light\" id=\"light\">Light</div>\n    </div>\n</div>\n<!-- theme option   -->\n<!-- start nav -->\n<nav class=\"navbar\">\n    <div class=\"logo\"><span id=\"brand\" class=\"brand color1 font-italic\">TaReK</span><span class=\"lan gradient\" style=\"display: none;\"><a href=\"ar/index.html\">ع</a></span></div>\n    <input type=\"checkbox\" id=\"toggle\">\n    <label for=\"toggle\" class=\"click\">\n      <span></span>\n      <span></span>\n      <span></span>\n    </label>\n    <div class=\"menu\">\n        <a href=\"#\" class=\"menu-item active\" id=\"home\" routerLink=\"\">home</a>\n        <a href=\"#\" class=\"menu-item\" id=\"moree\" routerLink=\"\">About Me</a>\n        <a href=\"#\" class=\"menu-item\" routerLink=\"/porfolio\">Portfolio</a>\n        <a href=\"#\" class=\"menu-item\" id=\"Services\">Services</a>\n        <a href=\"#\" class=\"menu-item\" id=\"Contact\">Contact Me</a>\n    </div>\n    <div class=\"progress-page\">\n        <div class=\"prog background1\" id=\"myprog\"></div>\n    </div>\n</nav>\n<!-- end nav -->\n\n<router-outlet></router-outlet>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'tarek';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_porfolio_porfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/porfolio/porfolio.component */ "./src/app/components/porfolio/porfolio.component.ts");
/* harmony import */ var _directive_scroll_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directive/scroll.directive */ "./src/app/directive/scroll.directive.ts");
/* harmony import */ var _directive_mixitup_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directive/mixitup.directive */ "./src/app/directive/mixitup.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _components_porfolio_porfolio_component__WEBPACK_IMPORTED_MODULE_5__["PorfolioComponent"],
                _directive_scroll_directive__WEBPACK_IMPORTED_MODULE_6__["ScrollDirective"],
                _directive_mixitup_directive__WEBPACK_IMPORTED_MODULE_7__["MixitupDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* No CSS *//*# sourceMappingURL=home.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLDhDQUE4QyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- start wellcome -->\n<div class=\"wellcome\" id=\"home-content\">\n    <div class=\"overlay\"></div>\n    <div class=\"container\">\n        <div class=\"wellcome-text\">\n            <h6 class=\"hh background1\">TaReK RiDa</h6>\n            <h1 class=\"hh2 cd-headline clip is-full-width color1\">\n                <span class=\"cd-words-wrapper\">\n            <b class=\"is-visible\">Front End Developer</b>\n            <b class=\"is-hidden\">UI & UX Developer</b>\n          </span>\n                <span class=\"tt color1\">|</span>\n            </h1>\n\n\n        </div>\n    </div>\n    <div class=\"social\">\n        <div class=\"icon\">\n            <a href=\"https://www.facebook.com/tarek.rida1\">\n                <i class=\"fab fa-facebook-square\"></i>\n            </a>\n        </div>\n        <div class=\"icon\">\n            <a href=\"https://www.instagram.com/tarek.rida1/\">\n                <i class=\"fab fa-instagram\"></i>\n            </a>\n        </div>\n        <div class=\"icon\">\n            <a href=\"#\">\n                <i class=\"fab fa-twitter-square\"></i>\n            </a>\n        </div>\n        <div class=\"icon\">\n            <a href=\"https://github.com/Tarekrida1\">\n                <i class=\"fab fa-github-square\"></i>\n            </a>\n        </div>\n        <div class=\"icon\">\n            <a href=\"https://www.linkedin.com/in/tarekrida1\">\n                <i class=\"fab fa-linkedin\"></i>\n            </a>\n        </div>\n    </div>\n\n    <svg class=\"top-left\" version=\"1.1\" id=\"Layer_3\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 646.1 300\" style=\"enable-background:new 0 0 646.1 300;\" xml:space=\"preserve\">\n      <path class=\"st0\" d=\"M-17,314c0,0,137.6-115.4,287.6-98.9s57-114,208.5-79.5s192-279,192-279L8.1-92.4L-68.4,14\" />\n      <path class=\"st1\" d=\"M0,300c0,0,137.6-115.4,287.6-98.9s57-114,208.5-79.5s192-279,192-279l-663,51L-51.4,0\" />\n      <path class=\"st2\" d=\"M-0.6,299.9c0,0,133.9-119.7,284.3-107.9s53.4-115.7,205.9-86s183.1-284.9,183.1-284.9l-661,71.9L-61.4,1.7\" />\n    </svg>\n    <svg class=\"bottom\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 1280 400\" style=\"enable-background:new 0 0 1280 400;\" xml:space=\"preserve\">\n      <g id=\"Layer_1\">\n      </g>\n      <g id=\"Layer_2\">\n        <g>\n          <defs>\n            <rect id=\"SVGID_1_\" x=\"-0.1\" y=\"0.5\" width=\"1279.1\" height=\"400.5\" />\n          </defs>\n          <clipPath id=\"SVGID_2_\">\n            <use xlink:href=\"#SVGID_1_\" style=\"overflow:visible;\" />\n          </clipPath>\n          <path class=\"st0\" d=\"M-0.1,0.5c0,0,0.2,3.9,1.7,10.2c5.8,23.8,31.1,80.2,141.1,76c139.2-5.4,163.5-70.1,383.8-43.2\n    s228.4,36.6,318.9,0S1013-2.7,1080.6,27.1c67.6,29.7,141.4,38.1,164.4,16.3C1267.9,21.6,1279,0,1279,0v401H0\" />\n          <path class=\"st1\" d=\"M-5,17.5c0,0,0.2,3.9,1.8,10.2c5.9,23.8,31.8,80.2,144.2,76c142.2-5.4,167.2-70.1,392.3-43.2\n    s233.4,36.6,326,0s171.3-46.1,240.3-16.4s144.3,38.1,167.8,16.3C1290.8,38.6,1302,17,1302,17v401H-5\" />\n          <path class=\"st2\" d=\"M-7,38.5c0,0,0.2,3.9,1.8,10.2c5.9,23.8,31.7,80.2,143.8,76c141.8-5.4,166.6-70.1,391-43.2\n    s232.7,36.6,324.9,0s170.7-46.1,239.6-16.4s143.9,38.1,167.3,16.3S1296,38,1296,38v401H-7\" />\n        </g>\n      </g>\n    </svg>\n\n</div>\n<!-- end wellcome -->\n<!-- start more about me -->\n<div id=\"moree-content\"></div>\n<div class=\"moree border1\">\n    <div class=\"container\">\n        <div class=\"con\" data-aos=\"fade-up\">\n            <img class=\"border1\" src=\"../../assets/img/my-photo.jpg\" alt=\"profile imge\">\n            <h1 class=\"color1\">About Me</h1>\n            <p class=\"color-light\">\n                I am a front-end developer. I developing websites based on web standard technologies like HTML5, CSS, JavaScript And Make websites more interaction on any browser in any screen, And I Looking For More Experience In Web Development And Looking Forward\n                For More Challenge And learning, Do More Effort In a Variet Fields Like UI Design, Graphic Design And Web Development.\n            </p>\n        </div>\n        <div class=\"row\">\n            <div class=\"basic col-12\">\n                <h2 class=\"color2\" data-aos=\"fade-up\">PERSONAL INFORMATION</h2>\n                <div class=\"row\">\n                    <div class=\"col-md-6 col-sm-12\">\n                        <h4 class=\"color-light\" data-aos=\"fade-up\">Full Name :</h4>\n                        <P data-aos=\"fade-up\">Tarek Abd Elnasser Rida</P>\n                        <h4 class=\"color-light\" data-aos=\"fade-up\">Birth Day :</h4>\n                        <P data-aos=\"fade-up\">1, september, 1994</P>\n                        <h4 class=\"color-light\" data-aos=\"fade-up\">Job title :</h4>\n                        <P data-aos=\"fade-up\">Front End Developer</P>\n                    </div>\n                    <div class=\"col-md-6 col-sm-12\">\n                        <h4 class=\"color-light\" data-aos=\"fade-up\">Phone No :</h4>\n                        <P data-aos=\"fade-up\">01065596566</P>\n                        <h4 class=\"color-light\" data-aos=\"fade-up\">Email :</h4>\n                        <P data-aos=\"fade-up\">Tarek.rida1@Hotmail.com</P>\n                        <h4 class=\"color-light\" data-aos=\"fade-up\">Address :</h4>\n                        <P data-aos=\"fade-up\">Egypt, Cairo, naser city.</P>\n                    </div>\n                </div>\n            </div>\n            <div class=\"skills col-12\" data-aos=\"fade-right\">\n                <h2 class=\"color2\" data-aos=\"fade-up\">My Skills</h2>\n\n\n                <div class=\"progresss\">\n                    <ul>\n                        <div class=\"row\">\n                            <div class=\"col-md-6 col-sm-12\">\n                                <li>\n                                    <h4 class=\"color-light\" data-aos=\"fade-up\">Html5</h4>\n                                    <div class=\"prog_bar background2\" data-aos=\"fade-up\">\n                                        <div class=\"percent percent98 gradient\" id=\"percent\" appScroll>\n                                            <span class=\"gradient\">98%</span>\n                                            <span></span>\n                                        </div>\n                                    </div>\n                                </li>\n                                <li>\n                                    <h4 class=\"color-light\" data-aos=\"fade-up\">Css</h4>\n                                    <div class=\"prog_bar background2\" data-aos=\"fade-up\">\n                                        <div class=\"percent percent86 gradient\" appScroll>\n                                            <span class=\"gradient\">86%</span>\n                                            <span></span>\n                                        </div>\n                                    </div>\n                                </li>\n                                <li>\n                                    <h4 class=\"color-light\" data-aos=\"fade-up\" id=\"skillss\">Bootstrap</h4>\n                                    <div class=\"prog_bar background2\" data-aos=\"fade-up\">\n                                        <div class=\"percent percent89 gradient\" appScroll>\n                                            <span class=\"gradient\">89%</span>\n                                            <span></span>\n                                        </div>\n                                    </div>\n                                </li>\n                                <li>\n                                    <h4 class=\"color-light\" data-aos=\"fade-up\">JavaScript</h4>\n                                    <div class=\"prog_bar background2\" data-aos=\"fade-up\">\n                                        <div class=\"percent percent76 gradient\" appScroll>\n                                            <span class=\"gradient\">76%</span>\n                                            <span></span>\n                                        </div>\n                                    </div>\n                                </li>\n                            </div>\n                            <div class=\"col-md-6 col-sm-12\">\n                                <li>\n                                    <h4 class=\"color-light\" data-aos=\"fade-up\">Jquery</h4>\n                                    <div class=\"prog_bar background2\" data-aos=\"fade-up\">\n                                        <div class=\"percent percent83 gradient\" appScroll>\n                                            <span class=\"gradient\">83%</span>\n                                            <span></span>\n                                        </div>\n                                    </div>\n                                </li>\n                                <li>\n                                    <h4 class=\"color-light\" data-aos=\"fade-up\">Sass</h4>\n                                    <div class=\"prog_bar background2\" data-aos=\"fade-up\">\n                                        <div class=\"percent percent81 gradient\" appScroll>\n                                            <span class=\"gradient\">81%</span>\n                                            <span></span>\n                                        </div>\n                                    </div>\n                                </li>\n                                <li>\n                                    <h4 class=\"color-light\" data-aos=\"fade-up\">Adobe Photoshop</h4>\n                                    <div class=\"prog_bar background2\" data-aos=\"fade-up\">\n                                        <div class=\"percent percent80 gradient\" appScroll>\n                                            <span class=\"gradient\">80%</span>\n                                            <span></span>\n                                        </div>\n                                    </div>\n                                </li>\n                                <li>\n                                    <h4 class=\"color-light\" data-aos=\"fade-up\">WordPress</h4>\n                                    <div class=\"prog_bar background2\" data-aos=\"fade-up\">\n                                        <div class=\"percent percent58 gradient\" appScroll>\n                                            <span class=\"gradient\">58%</span>\n                                            <span></span>\n                                        </div>\n                                    </div>\n                                </li>\n                            </div>\n                        </div>\n                    </ul>\n\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"my-cv gradient btnn\" data-aos=\"fade-up\">\n        <div class=\"animate_btnn gradient\"></div>\n        <span>\n        <a href=\"https://onedrive.live.com/?cid=5e4f6dae2f8b84de&id=5E4F6DAE2F8B84DE%21118368&authkey=%21AKWAv7r97M8psso\"\n          target=\"_blank\">\n          <i class=\"fa fa-download\"></i> Resume</a>\n      </span>\n    </div>\n    <div id=\"Portfolio-content\"></div>\n</div>\n<!-- end more about me -->"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
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
    }
    HomeComponent.prototype.onWindowScroll = function () {
        // console.log(this.skk);
        //  const skills = this.skk.nativeElement;
        // const viewportoffset = skills.getBoundingClientRect;
        // const top = viewportoffset.top;
        // if (top >= 0) {
        // alert('yes');
        // }
        /*
      window.onscroll = function() {
        if ( window.scrollY > skills.offsetTop ) {
        // alert('a');
        console.log(skills.offsetTop);
        }
        };
        */
        /* $(function() {
           $(document).on('scroll', function() {
             if ($(this).scrollTop() >= $('#skillss').offset().top) {
                $('.moree .skills .progresss ul li .prog_bar .percent').removeClass('prog_width');
             } else {
                 $('.moree .skills .progresss ul li .prog_bar .percent').addClass('prog_width');
             }
         });
       
         });
         */
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        /*
          $(function() {
            $(document).on('scroll', function() {
              if ($(this).scrollTop() >= $('#skillss').offset().top) {
              //   $('.moree .skills .progresss ul li .prog_bar .percent').removeClass('prog_width');
              } else {
            //      $('.moree .skills .progresss ul li .prog_bar .percent').addClass('prog_width');
              }
          });
          });
          */
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('skk'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "skk", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "onWindowScroll", null);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/porfolio/porfolio.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/porfolio/porfolio.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9yZm9saW8vcG9yZm9saW8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/porfolio/porfolio.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/porfolio/porfolio.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- start gallery -->\n<script src=\"../../assets/js/mixitup.min.js\"></script>\n<div class=\"gallery\" appMixitup>\n    <h1 class=\"color1 aos-init aos-animate\" data-aos=\"fade-up\">Portfolio</h1>\n    <p class=\"color2 aos-init aos-animate\" data-aos=\"fade-up\">Most Important Websites I have developed them.</p>\n    <div class=\"controls\" data-aos=\"fade-up\">\n        <button type=\"button\" class=\"control color-light  gradient btnn\" data-filter=\"all\"><div class=\"animate_btnn background1\"></div> All</button>\n        <button type=\"button\" class=\"control color-light  gradient btnn\" data-filter=\".templates\"><div class=\"animate_btnn background1\"></div> templates</button>\n        <button type=\"button\" class=\"control color-light  gradient btnn\" data-filter=\".graphics\"><div class=\"animate_btnn background1\"></div> graphics</button>\n        <button type=\"button\" class=\"control color-light  gradient btnn\" data-filter=\".Photographs\"><div class=\"animate_btnn background1\"></div> Photographs</button>\n        <button type=\"button\" class=\"control color-light  gradient btnn\" data-filter=\".brands\"><div class=\"animate_btnn background1\"></div> brands</button>\n    </div>\n\n    <div class=\"protfolio\" data-aos=\"fade-up\" id=\"port\">\n        <div class=\"item mix Photographs\">\n            <img src=\"../../assets/img/mycamera/08.jpg\" alt=\"\" title=\"\">\n            <div class=\"overlay rgb1\">\n                <div class=\"over-text\">\n\n                    <a href=\"img/mycamera/08.jpg\" target=\"_blank\">\n                        <i class=\"fa fa-eye\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"item mix brands\">\n            <img src=\"../../assets/img/brands/1.jpg\" alt=\"\" title=\"\">\n            <div class=\"overlay rgb1\">\n                <div class=\"over-text\">\n\n                    <a href=\"img/brands/1.jpg\" target=\"_blank\">\n                        <i class=\"fa fa-eye\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"item mix graphics\">\n            <img src=\"../../assets/img/graphics/1.jpg\" alt=\"\" title=\"\">\n            <div class=\"overlay rgb1\">\n                <div class=\"over-text\">\n\n                    <a href=\"img/graphics/1.jpg\" target=\"_blank\">\n                        <i class=\"fa fa-eye\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"item mix graphics\">\n            <img src=\"../../assets/img/graphics/3.jpg\" alt=\"\" title=\"\">\n            <div class=\"overlay rgb1\">\n                <div class=\"over-text\">\n\n                    <a href=\"img/graphics/3.jpg\" target=\"_blank\">\n                        <i class=\"fa fa-eye\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"item mix brands\">\n            <img src=\"../../assets/img/brands/3.jpg\" alt=\"\" title=\"\">\n            <div class=\"overlay rgb1\">\n                <div class=\"over-text\">\n\n                    <a href=\"img/brands/3.jpg\" target=\"_blank\">\n                        <i class=\"fa fa-eye\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n\n\n        <div class=\"item mix Photographs\">\n            <img src=\"../../assets/img/mycamera/03.jpg\" alt=\"\" title=\"\">\n            <div class=\"overlay rgb1\">\n                <div class=\"over-text\">\n\n                    <a href=\"img/mycamera/03.jpg\" target=\"_blank\">\n                        <i class=\"fa fa-eye\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"item mix Photographs\">\n            <img src=\"../../assets/img/mycamera/04.jpg\" alt=\"\" title=\"\">\n            <div class=\"overlay rgb1\">\n                <div class=\"over-text\">\n\n                    <a href=\"img/mycamera/04.jpg\" target=\"_blank\">\n                        <i class=\"fa fa-eye\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"item mix Photographs\">\n            <img src=\"../../assets/img/mycamera/06.jpg\" alt=\"\" title=\"\">\n            <div class=\"overlay rgb1\">\n                <div class=\"over-text\">\n\n                    <a href=\"img/mycamera/06.jpg\" target=\"_blank\">\n                        <i class=\"fa fa-eye\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"item mix Photographs\">\n            <img src=\"../../assets/img/mycamera/16.jpg\" alt=\"\" title=\"\">\n            <div class=\"overlay rgb1\">\n                <div class=\"over-text\">\n\n                    <a href=\"img/mycamera/16.jpg\" target=\"_blank\">\n                        <i class=\"fa fa-eye\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"item mix Photographs\">\n            <img src=\"../../assets/img/mycamera/07.jpg\" alt=\"\" title=\"\">\n            <div class=\"overlay rgb1\">\n                <div class=\"over-text\">\n\n                    <a href=\"img/mycamera/07.jpg\" target=\"_blank\">\n                        <i class=\"fa fa-eye\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"item mix brands\">\n            <img src=\"../../assets/img/brands/2.JPG\" alt=\"\" title=\"\">\n            <div class=\"overlay rgb1\">\n                <div class=\"over-text\">\n\n                    <a href=\"img/brands/2.JPG\" target=\"_blank\">\n                        <i class=\"fa fa-eye\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"item mix graphics\">\n            <img src=\"../../assets/img/graphics/4.jpg\" alt=\"\" title=\"\">\n            <div class=\"overlay rgb1\">\n                <div class=\"over-text\">\n\n                    <a href=\"img/graphics/4.jpg\" target=\"_blank\">\n                        <i class=\"fa fa-eye\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"item mix Photographs\">\n            <img src=\"../../assets/img/mycamera/15.jpg\" alt=\"\" title=\"\">\n            <div class=\"overlay rgb1\">\n                <div class=\"over-text\">\n\n                    <a href=\"img/mycamera/15.jpg\" target=\"_blank\">\n                        <i class=\"fa fa-eye\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"item mix templates\">\n            <img src=\"../../assets/img/Screenshots/1.jpg\" alt=\"Personal Template\" title=\"Personal Template\">\n            <div class=\"overlay rgb1\">\n                <div class=\"over-text\">\n\n                    <a href=\"https://tarekrida1.github.io/project3/\" target=\"_blank\">\n                        <i class=\"fa fa-eye\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"item mix graphics\">\n            <img src=\"../../assets/img/graphics/2.jpg\" alt=\"\" title=\"\">\n            <div class=\"overlay rgb1\">\n                <div class=\"over-text\">\n\n                    <a href=\"img/graphics/2.jpg\" target=\"_blank\">\n                        <i class=\"fa fa-eye\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"item mix templates\">\n            <img src=\"../../assets/img/Screenshots/books.jpg\" alt=\"Books Template\" title=\"Books Template\">\n            <div class=\"overlay rgb1\">\n                <div class=\"over-text\">\n\n                    <a href=\"https://tarekrida1.github.io/books_web_page_NotCompletd/\" target=\"_blank\">\n                        <i class=\"fa fa-eye\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"item mix templates\">\n            <img src=\"../../assets/img/Screenshots/bootstrap.jpg\" alt=\"bootstrap 4 Template\" title=\"bootstrap 4 Template\">\n            <div class=\"overlay rgb1\">\n                <div class=\"over-text\">\n\n                    <a href=\"https://tarekrida1.github.io/bootstrab4/\" target=\"_blank\">\n                        <i class=\"fa fa-eye\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"item mix templates\">\n            <img src=\"../../assets/img/Screenshots/courses.jpg\" alt=\"Courses Template\" title=\"Courses Template\">\n            <div class=\"overlay rgb1\">\n                <div class=\"over-text\">\n\n                    <a href=\"https://tarekrida1.github.io/page_task/\" target=\"_blank\">\n                        <i class=\"fa fa-eye\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n\n\n        <div class=\"gap\"></div>\n        <div class=\"gap\"></div>\n        <div class=\"gap\"></div>\n    </div>\n</div>\n<!-- end gallery -->"

/***/ }),

/***/ "./src/app/components/porfolio/porfolio.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/porfolio/porfolio.component.ts ***!
  \***********************************************************/
/*! exports provided: PorfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PorfolioComponent", function() { return PorfolioComponent; });
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

var PorfolioComponent = /** @class */ (function () {
    function PorfolioComponent() {
    }
    PorfolioComponent.prototype.ngAfterViewInit = function () {
        /*
          $(function() {
           const mixer = mixitup($('#port'));
          });
          */
    };
    PorfolioComponent.prototype.ngOnInit = function () {
        /*
          $(function() {
            const mixer = mixitup($('#port'));
        });
      */
    };
    PorfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-porfolio',
            template: __webpack_require__(/*! ./porfolio.component.html */ "./src/app/components/porfolio/porfolio.component.html"),
            styles: [__webpack_require__(/*! ./porfolio.component.css */ "./src/app/components/porfolio/porfolio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PorfolioComponent);
    return PorfolioComponent;
}());

/*
$(function() {
  var containerEl = $('#port');
  var mixer = mixitup(containerEl);
});
*/


/***/ }),

/***/ "./src/app/directive/mixitup.directive.ts":
/*!************************************************!*\
  !*** ./src/app/directive/mixitup.directive.ts ***!
  \************************************************/
/*! exports provided: MixitupDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MixitupDirective", function() { return MixitupDirective; });
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

var MixitupDirective = /** @class */ (function () {
    function MixitupDirective(el) {
        this.el = el;
    }
    MixitupDirective.prototype.novingOn = function () {
        $(function () {
            var mixer = mixitup($('#port'));
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MixitupDirective.prototype, "novingOn", null);
    MixitupDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appMixitup]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], MixitupDirective);
    return MixitupDirective;
}());



/***/ }),

/***/ "./src/app/directive/scroll.directive.ts":
/*!***********************************************!*\
  !*** ./src/app/directive/scroll.directive.ts ***!
  \***********************************************/
/*! exports provided: ScrollDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDirective", function() { return ScrollDirective; });
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

var ScrollDirective = /** @class */ (function () {
    function ScrollDirective(el) {
        this.el = el;
        this.isRed = true;
    }
    ScrollDirective.prototype.novingOn = function () {
        var sss = document.getElementById('skillss');
        //  console.log(sss.offsetTop);
        if (window.scrollY > sss.offsetTop) {
            //  console.log();
            this.isRed = false;
        }
        else {
            this.isRed = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.prog_width'),
        __metadata("design:type", Object)
    ], ScrollDirective.prototype, "isRed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ScrollDirective.prototype, "novingOn", null);
    ScrollDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appScroll]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ScrollDirective);
    return ScrollDirective;
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

module.exports = __webpack_require__(/*! C:\Users\Tarek\tarek\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map