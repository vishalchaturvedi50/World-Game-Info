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



var routes = [];
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-filters></app-filters>\r\n<app-results></app-results>\r\n\r\n<button class=\"static-button\" (click)=\"scrollToTopFn()\" *ngIf=\"gameService.currentScroll>0\">\r\n    <img src=\"./assets/arrowup.png\" />\r\n</button>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".static-button {\n  border-radius: 50%;\n  height: 3em;\n  width: 3em;\n  background: #00ceff;\n  border: none;\n  position: fixed;\n  bottom: 3px;\n  right: 13px;\n  outline: none; }\n  .static-button img {\n    max-width: 1.5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXFByb2plY3RzIGFuZCBMZWFybmluZ1xcYml6b25nb1xcdG9wLWdhbWVzL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWEsRUFBQTtFQVRmO0lBV0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdGljLWJ1dHRvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGhlaWdodDogM2VtO1xyXG4gIHdpZHRoOiAzZW07XHJcbiAgYmFja2dyb3VuZDogIzAwY2VmZjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogM3B4O1xyXG4gIHJpZ2h0OiAxM3B4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aDogMS41ZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/game.service */ "./src/app/services/game.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(gameService) {
        this.gameService = gameService;
    }
    /* SCROLL TO TOP FN */
    AppComponent.prototype.scrollToTopFn = function () {
        window.scrollTo(0, 0);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _searchresults_results_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./searchresults/results.component */ "./src/app/searchresults/results.component.ts");
/* harmony import */ var _filters_filters_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filters/filters.component */ "./src/app/filters/filters.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _searchresults_results_component__WEBPACK_IMPORTED_MODULE_8__["ResultsComponent"],
                _filters_filters_component__WEBPACK_IMPORTED_MODULE_9__["FiltersComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]
            ],
            providers: [_services_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/filters/filters.component.ts":
/*!**********************************************!*\
  !*** ./src/app/filters/filters.component.ts ***!
  \**********************************************/
/*! exports provided: FiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersComponent", function() { return FiltersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/filter */ "./src/app/model/filter.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/game.service */ "./src/app/services/game.service.ts");




var FiltersComponent = /** @class */ (function () {
    function FiltersComponent(gameService) {
        this.gameService = gameService;
        /* A variable to hold initial filters */
        this.filter = new _model_filter__WEBPACK_IMPORTED_MODULE_2__["FilterClass"]();
    }
    FiltersComponent.prototype.changeInFilterValueFn = function () {
        this.gameService.getDataAsPerUserSearchFn(this.filter);
    };
    FiltersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filters',
            template: __webpack_require__(/*! ./filters.html */ "./src/app/filters/filters.html"),
            styles: [__webpack_require__(/*! ./filters.scss */ "./src/app/filters/filters.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]])
    ], FiltersComponent);
    return FiltersComponent;
}());



/***/ }),

/***/ "./src/app/filters/filters.html":
/*!**************************************!*\
  !*** ./src/app/filters/filters.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <a class=\"navbar-brand\" href=\"#\">Game Search</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <span class=\"mr-auto\"></span>\r\n        <form class=\"form-inline\">\r\n            <select (change)=\"changeInFilterValueFn()\" [ngModelOptions]=\"{standalone: true}\"\r\n                [(ngModel)]=\"filter.sortType\" class=\"form-control mr-sm-2\">\r\n                <option value=\"1\">Sort By Rank</option>\r\n                <option value=\"2\">Sort By Year</option>\r\n            </select>\r\n            <input (change)=\"changeInFilterValueFn()\" [ngModelOptions]=\"{standalone: true}\"\r\n                [(ngModel)]=\"filter.searchText\" class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\"\r\n                aria-label=\"Search\">\r\n        </form>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/filters/filters.scss":
/*!**************************************!*\
  !*** ./src/app/filters/filters.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsdGVycy9FOlxcUHJvamVjdHMgYW5kIExlYXJuaW5nXFxiaXpvbmdvXFx0b3AtZ2FtZXMvc3JjXFxhcHBcXGZpbHRlcnNcXGZpbHRlcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZpbHRlcnMvZmlsdGVycy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/model/constant.ts":
/*!***********************************!*\
  !*** ./src/app/model/constant.ts ***!
  \***********************************/
/*! exports provided: projConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projConstants", function() { return projConstants; });
var projConstants = {
    csvFileLoc: './assets/games.csv',
    newLineDel: "\n",
    itemToAppend: 10
};


/***/ }),

/***/ "./src/app/model/filter.ts":
/*!*********************************!*\
  !*** ./src/app/model/filter.ts ***!
  \*********************************/
/*! exports provided: FilterClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterClass", function() { return FilterClass; });
var FilterClass = /** @class */ (function () {
    function FilterClass() {
        this.sortType = 1;
        this.searchText = "";
    }
    return FilterClass;
}());



/***/ }),

/***/ "./src/app/model/game.ts":
/*!*******************************!*\
  !*** ./src/app/model/game.ts ***!
  \*******************************/
/*! exports provided: GameClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameClass", function() { return GameClass; });
var GameClass = /** @class */ (function () {
    function GameClass() {
    }
    return GameClass;
}());



/***/ }),

/***/ "./src/app/searchresults/results.component.ts":
/*!****************************************************!*\
  !*** ./src/app/searchresults/results.component.ts ***!
  \****************************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/game.service */ "./src/app/services/game.service.ts");



var ResultsComponent = /** @class */ (function () {
    function ResultsComponent(gameService) {
        var _this = this;
        this.gameService = gameService;
        /* All the game values being currently shown */
        this.gameValuesList = [];
        this.gameService.gameValsSubj.subscribe(function (resp) {
            var _a;
            if (_this.gameService.currentScroll > 0)
                (_a = _this.gameValuesList).push.apply(_a, resp);
            else
                _this.gameValuesList = resp;
        });
    }
    ResultsComponent.prototype.onScrollFn = function () {
        //We know there will be a body hence 
        var scrollTop = window.scrollY;
        var docHeight = document.getElementsByTagName("body")[0].scrollHeight;
        var winHeight = window.outerHeight;
        var scrollPercent = scrollTop / (docHeight - winHeight);
        if (scrollPercent > 0.8) {
            this.gameService.currentScroll++;
            this.gameService.getGameValuesByScrollFn();
        }
    };
    ResultsComponent.prototype.gameRankInItsDomainFn = function (item) {
        return this.gameService.gameRankInItsDomainFn(item);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ResultsComponent.prototype, "onScrollFn", null);
    ResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-results',
            template: __webpack_require__(/*! ./results.html */ "./src/app/searchresults/results.html"),
            styles: [__webpack_require__(/*! ./results.scss */ "./src/app/searchresults/results.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "./src/app/searchresults/results.html":
/*!********************************************!*\
  !*** ./src/app/searchresults/results.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex row flex-wrap host-div\">\r\n\r\n    <div class=\" col-12 col-md-4 p-2\" *ngFor=\"let item of gameValuesList;let id=index;\">\r\n        <div class=\"card  m-1\">\r\n            <img class=\" img-fluid cuisine-img card-img-top\" src=\"./assets/{{item.genre.toLowerCase()}}.jpg\"\r\n                alt=\"Card image cap\">\r\n            <div class=\"card-body\">\r\n                <!-- TITLE WITH GENRE -->\r\n                <div class=\"d-flex row justify-content-between\">\r\n                    <h5 class=\"card-title col-8\">{{item.name}}</h5>\r\n                    <div class=\"col-4 text-right\">\r\n                        <span class=\" chip\">{{item.genre}}</span>\r\n                    </div>\r\n                </div>\r\n\r\n                <p class=\"card-text\">\r\n                    <b>{{item.name}}</b> was launced in the year <b>{{item.year}}</b> on <b>{{item.platform}}</b>\r\n                    platform.\r\n                    This game further had in total <b>{{item.globalSales}}M</b> global sales and is currently ranked at\r\n                    <b>{{item.rank}}</b> globally and <b>{{gameRankInItsDomainFn(item)}}</b> in its own genre that is\r\n                    <b>{{item.genre}}</b>.\r\n                </p>\r\n\r\n                <p class=\"card-text text-right\">\r\n                    <a target=\"_blank\" href=\"https://www.google.com/search?q={{item.name}}\">Want to know more ?<img\r\n                            class=\"google-img\" src=\"https://img.icons8.com/bubbles/2x/google-logo.png\" /></a>\r\n                </p>\r\n\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/searchresults/results.scss":
/*!********************************************!*\
  !*** ./src/app/searchresults/results.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chip {\n  background-color: #5a575738;\n  font-size: 0.8em;\n  padding: 0.2em;\n  color: #565555; }\n\nb {\n  font-weight: 500; }\n\n.card-text a {\n  font-size: 0.8em; }\n\n.card-text a .google-img {\n    max-width: 10%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNocmVzdWx0cy9FOlxcUHJvamVjdHMgYW5kIExlYXJuaW5nXFxiaXpvbmdvXFx0b3AtZ2FtZXMvc3JjXFxhcHBcXHNlYXJjaHJlc3VsdHNcXHJlc3VsdHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFFSSxnQkFBZ0IsRUFBQTs7QUFGcEI7SUFJTSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2hyZXN1bHRzL3Jlc3VsdHMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGlwIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWE1NzU3Mzg7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxuICBwYWRkaW5nOiAwLjJlbTtcclxuICBjb2xvcjogIzU2NTU1NTtcclxufVxyXG5cclxuYiB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmNhcmQtdGV4dCB7XHJcbiAgYSB7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgLmdvb2dsZS1pbWcge1xyXG4gICAgICBtYXgtd2lkdGg6IDEwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/services/game.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/game.service.ts ***!
  \******************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _model_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/game */ "./src/app/model/game.ts");
/* harmony import */ var _model_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/constant */ "./src/app/model/constant.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var GameService = /** @class */ (function () {
    function GameService(http) {
        this.http = http;
        /* A VARIABLE TO HOLD VALUES FOR ALL THE GAMES */
        this.allGamesVals = [];
        /* A VARIABLE TO STORE CURRENT FILTERED ITEMS */
        this.currentFilteredItems = [];
        /* Subject to send new Values */
        this.gameValsSubj = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /* CURRENT SCROLL */
        this.currentScroll = 0;
        this.getAllGameValuesFromCSVFn();
    }
    /* A function to get all the game values from CSV */
    GameService.prototype.getAllGameValuesFromCSVFn = function () {
        var _this = this;
        var allGameValues = [];
        var allGen = [];
        this.http.get(_model_constant__WEBPACK_IMPORTED_MODULE_4__["projConstants"].csvFileLoc, { responseType: 'text' }).subscribe(function (resp) {
            var allLines = resp.split(_model_constant__WEBPACK_IMPORTED_MODULE_4__["projConstants"].newLineDel);
            allLines.splice(0, 1);
            allLines.forEach(function (line) {
                var temp = new _model_game__WEBPACK_IMPORTED_MODULE_3__["GameClass"]();
                var uqObj = line.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g);
                if (uqObj != null) {
                    temp.rank = parseInt(uqObj[0]);
                    temp.name = uqObj[1];
                    temp.platform = uqObj[2];
                    temp.year = parseInt(uqObj[3]);
                    temp.genre = uqObj[4];
                    temp.publisher = uqObj[5];
                    temp.globalSales = parseFloat(uqObj[6]);
                    allGameValues.push(temp);
                    if (allGen.indexOf(temp.genre) == -1)
                        allGen.push(temp.genre);
                }
            });
            _this.allGamesVals = allGameValues;
            _this.currentFilteredItems = JSON.parse(JSON.stringify(allGameValues));
            _this.getGameValuesByScrollFn();
        });
    };
    /* A Function to filter and send the values */
    GameService.prototype.getGameValuesByScrollFn = function () {
        var vals = this.currentFilteredItems.slice(this.currentScroll * _model_constant__WEBPACK_IMPORTED_MODULE_4__["projConstants"].itemToAppend, _model_constant__WEBPACK_IMPORTED_MODULE_4__["projConstants"].itemToAppend + this.currentScroll * _model_constant__WEBPACK_IMPORTED_MODULE_4__["projConstants"].itemToAppend);
        this.gameValsSubj.next(vals);
    };
    /* Find the item 'game' rank in it's own genre */
    GameService.prototype.gameRankInItsDomainFn = function (item) {
        var domainGames = this.allGamesVals.filter(function (x) { return x.genre == item.genre; });
        return domainGames.findIndex(function (x) { return x.rank == item.rank; }) + 1;
    };
    /* Filter the results based on change  */
    GameService.prototype.getDataAsPerUserSearchFn = function (filter) {
        var items = this.allGamesVals;
        if (filter.searchText.length > 0) {
            items = items.filter(function (x) { return x.name.toLowerCase().indexOf(filter.searchText.toLowerCase()) > -1; });
        }
        if (filter.sortType == 2) {
            items.sort(function (a, b) { return a.year - b.year; });
        }
        else if (filter.sortType == 1) {
        }
        this.currentFilteredItems = items;
        this.currentScroll = 0;
        window.scrollTo(0, 0);
        this.getGameValuesByScrollFn();
    };
    GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GameService);
    return GameService;
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

module.exports = __webpack_require__(/*! E:\Projects and Learning\bizongo\top-games\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map