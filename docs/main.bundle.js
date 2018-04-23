webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "html,body {\r\n  font-family: 'Open Sans', sans-serif;\r\n  margin: 0px !important;\r\n  padding: 0px !important;\r\n  border: 0px !important;\r\n  outline:0px !important;\r\n  overflow: hidden;\r\n  font-size: 14px;\r\n}\r\n\r\n#loadfile{\r\n  position: absolute;\r\n  width: 300px; \r\n  left: calc(50% - 150px);\r\n  top: 15px;\r\n  z-index: 100;\r\n  font-family:sans-serif;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex; \r\n  -webkit-box-orient: horizontal; \r\n  -webkit-box-direction: normal; \r\n      -ms-flex-direction: row; \r\n          flex-direction: row; \r\n  -webkit-box-pack: justify; \r\n      -ms-flex-pack: justify; \r\n          justify-content: space-between;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- <body> -->\r\n<!-- <div id=\"cesiumContainer\"></div>\r\n<div> -->\r\n  <!-- <div id=\"cesiumContainer\">\r\n  \t<div id=\"loadfile\">\r\n\t    <div class=\"version\" style=\"font-family:sans-serif;color:white;\"> v0.0.1</div>\r\n\t    <input type=\"file\" id=\"files\" name=\"files[]\" style=\"font-family:sans-serif;color:white;\" (change)=\"handleFileSelect($event)\" />\r\n\t</div>\r\n  </div> -->\r\n<!-- </div> -->\r\n<!-- </body> -->\r\n\r\n<div style=\"height: 100%\">\r\n\t<div id=\"loadfile\">\r\n      <div class=\"version\" style=\"font-family:sans-serif;color:white;\">v0.0.10&nbsp;&nbsp;</div>\r\n      <input type=\"file\" id=\"files\" name=\"files[]\" style=\"font-family:sans-serif;color:white;\" (change)=\"handleFileSelect($event)\" />\r\n  </div>\r\n\t<mobius-cesium [data]=\"gs_dummy_data\"></mobius-cesium>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mobius_cesium_data_data_service__ = __webpack_require__("./src/app/mobius-cesium/data/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.gs_dummy_data = undefined; //'https://raw.githubusercontent.com/wandererwillow/urbanenvironment/master/Data/Neighborhood%20Boundary%20Map_4326.json';
        this.dataService.setGsModel(this.gs_dummy_data);
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.handleFileSelect = function (evt) {
        var files = evt.target.files; // FileList object
        var fr = new FileReader();
        var self = this;
        fr.onload = function (text) {
            var js_data = JSON.parse(text.target["result"]);
            self.gs_dummy_data = js_data;
            self.dataService.setGsModel(self.gs_dummy_data);
        };
        fr.readAsText(files[0]);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__mobius_cesium_data_data_service__["a" /* DataService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mobius_cesium_mobius_cesium_module__ = __webpack_require__("./src/app/mobius-cesium/mobius-cesium.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__mobius_cesium_mobius_cesium_module__["a" /* MobiusCesium */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/mobius-cesium/data/DataSubscriber.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataSubscriber; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/mobius-cesium/data/data.service.ts");

var DataSubscriber = /** @class */ (function () {
    function DataSubscriber(injector) {
        var _this = this;
        this.dataService = injector.get(__WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]);
        this._subscription = this.dataService.getMessage().subscribe(function (message) {
            _this._message = message;
            _this.notify(message.text);
        });
    }
    DataSubscriber.prototype.notify = function (message) {
        console.warn("Notify function not Implemented");
    };
    return DataSubscriber;
}());



/***/ }),

/***/ "./src/app/mobius-cesium/data/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.ScaleValue = 1000;
        this.CheckScale = true;
    }
    DataService.prototype.sendMessage = function (message) {
        this.subject.next({ text: message });
    };
    DataService.prototype.clearMessage = function () {
        this.subject.next();
    };
    DataService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    DataService.prototype.getGsModel = function () {
        return this._jsonModel;
    };
    DataService.prototype.setGsModel = function (model) {
        this._jsonModel = model;
        if (this._jsonModel === undefined) {
            var viewer = new Cesium.Viewer(document.createElement("div"));
        }
        this.sendMessage("model_update");
    };
    DataService.prototype.getColorValue = function (ColorValue) {
        this.ColorValue = ColorValue;
    };
    DataService.prototype.getHeightValue = function (HeightValue) {
        this.HeightValue = HeightValue;
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/mobius-cesium/mobius-cesium.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"mobiuscesium\" style=\"height: 100%\">\r\n\t<split direction=\"horizontal\" style=\"background-color: #8aa8c0;\">\r\n\t\t<split-area [size]=\"0.5\" id=\"splitgroups\" style=\"overflow:hidden;\">\r\n\t\t    <app-toolwindow></app-toolwindow>\r\n\t\t</split-area>\r\n\t\t<split-area [size]=\"99.5\" id=\"splitviewer\">\r\n\t\t\t<cesium-viewer></cesium-viewer>\r\n\t\t   <!--  <cesium-viewer></cesium-viewer> -->\r\n\t\t</split-area>\r\n\r\n\t\t<!-- <mat-drawer-container autosize>\r\n\t\t  <mat-drawer #drawer mode=\"over\">\r\n\t\t    <p *ngIf=\"showFiller\"><app-toolwindow></app-toolwindow></p>\r\n\t\t  </mat-drawer>\r\n\t\t    <button type=\"button\" mat-button id=\"button\" (click)=\"showFiller=!showFiller\">\r\n\t\t      >\r\n\t\t    </button>\r\n\t\t    \r\n\t\t</mat-drawer-container>\r\n\t\t<cesium-viewer></cesium-viewer> -->\r\n\r\n\t</split>\r\n\t<<!--  cesium-viewer style=\"width: 100%;height: 100%\"></cesium-viewer>-->\r\n\t\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/mobius-cesium.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\");\n@font-face {\n  font-family: \"FontAwesome\"; }\n.font-awesome-hand {\n  font-family: FontAwesome; }\n.font-awesome-hand::after {\n  font-family: FontAwesome; }\n#mobiuscesium {\n  height: 101%;\n  font-family: sans-serif !important;\n  margin: 0px !important;\n  padding: 0px !important;\n  font-size: 14px; }\n#button {\n  position: absolute;\n  z-index: 99; }\n/* split-area{\r\n  overflow-y: hidden !important;\r\n  height: 100% !important;\r\n}\r\n\r\nsplit-gutter{\r\n  border-right: 1px solid #8aa8c0 !important;\r\n  border-top: 1px solid #8aa8c0 !important;\r\n  background-color: #8aa8c0 !important;\r\n} */\n"

/***/ }),

/***/ "./src/app/mobius-cesium/mobius-cesium.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobiuscesiumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_service__ = __webpack_require__("./src/app/mobius-cesium/data/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MobiuscesiumComponent = /** @class */ (function () {
    function MobiuscesiumComponent(dataService) {
        this.dataService = dataService;
    }
    ;
    MobiuscesiumComponent.prototype.setModel = function (data) {
        try {
            this.dataService.setGsModel(data);
        }
        catch (ex) {
            this.data = undefined;
            //console.error("Error generating model");
        }
    };
    MobiuscesiumComponent.prototype.ngOnInit = function () {
        this.setModel(this.data);
    };
    MobiuscesiumComponent.prototype.ngDoCheck = function () {
        if (this.dataService.getGsModel() !== this.data) {
            this.setModel(this.data);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object)
    ], MobiuscesiumComponent.prototype, "data", void 0);
    MobiuscesiumComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'mobius-cesium',
            template: __webpack_require__("./src/app/mobius-cesium/mobius-cesium.component.html"),
            styles: [__webpack_require__("./src/app/mobius-cesium/mobius-cesium.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_data_service__["a" /* DataService */]])
    ], MobiuscesiumComponent);
    return MobiuscesiumComponent;
}());



/***/ }),

/***/ "./src/app/mobius-cesium/mobius-cesium.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobiusCesium; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mobius_cesium_component__ = __webpack_require__("./src/app/mobius-cesium/mobius-cesium.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewer_viewer_component__ = __webpack_require__("./src/app/mobius-cesium/viewer/viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_data_service__ = __webpack_require__("./src/app/mobius-cesium/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toolwindow_toolwindow_component__ = __webpack_require__("./src/app/mobius-cesium/toolwindow/toolwindow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_split__ = __webpack_require__("./node_modules/angular-split/esm5/angular-split.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_tabs__ = __webpack_require__("./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_tooltip__ = __webpack_require__("./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_slider__ = __webpack_require__("./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var MobiusCesium = /** @class */ (function () {
    function MobiusCesium() {
    }
    MobiusCesium_1 = MobiusCesium;
    MobiusCesium.forRoot = function () {
        return {
            ngModule: MobiusCesium_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__data_data_service__["a" /* DataService */]
            ]
        };
    };
    MobiusCesium = MobiusCesium_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular_split__["a" /* AngularSplitModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_tooltip__["a" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_slider__["a" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["a" /* FormsModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__mobius_cesium_component__["a" /* MobiuscesiumComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__mobius_cesium_component__["a" /* MobiuscesiumComponent */],
                __WEBPACK_IMPORTED_MODULE_3__viewer_viewer_component__["a" /* ViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_5__toolwindow_toolwindow_component__["a" /* ToolwindowComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__data_data_service__["a" /* DataService */]],
        })
    ], MobiusCesium);
    return MobiusCesium;
    var MobiusCesium_1;
}());



/***/ }),

/***/ "./src/app/mobius-cesium/toolwindow/toolwindow.component.css":
/***/ (function(module, exports) {

module.exports = "#toolwindow{\r\n  position: relative;\r\n  background-color: #F1F1F1 !important;\r\n  height: 100%;\r\n  width: 100%;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  font-size: 14px !important;\r\n  line-height: 14px;\r\n  overflow-x: hidden !important;\r\n}\r\n\r\n/deep/.mat-tab-label, /deep/.mat-tab-label-active{\r\n  min-width: 60px!important;\r\n  padding: 3px!important;\r\n  margin: 3px!important;\r\n  color:#395d73;\r\n  background-color: transparent !important;\r\n}\r\n\r\n/deep/.mat-tab-label{\r\n  height: 30px !important;\r\n  width: 60px !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n/deep/.mat-tab-labels{\r\n  margin-left: 5px;\r\n}\r\n\r\n/deep/.mat-tab-header{\r\n  width: 700px !important;\r\n}\r\n\r\n/deep/.mat-tab-header-pagination-controls-enabled{\r\n  display: none !important;\r\n}\r\n\r\n/deep/.mat-ink-bar{\r\n  background-color: #395d73 !important;\r\n}\r\n\r\n/deep/.mat-tab{\r\n  min-width: 30px !important;\r\n}\r\n\r\n/deep/.mat-tab-body-content{\r\n  overflow: hidden !important;\r\n}\r\n\r\n/deep/.mat-header{\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  margin-left: 0px;\r\n  color:#395d73;\r\n  border: 0;\r\n  height: 20px;\r\n  background-color: transparent !important;\r\n}\r\n\r\n/deep/split-gutter{\r\n  background-color:rgb(138, 168, 192) !important;\r\n}\r\n\r\n/deep/.mat-accent .mat-slider-thumb {\r\n    background-color: #395d73 !important;\r\n    cursor: -webkit-grab;\r\n}\r\n\r\n/deep/.mat-slider-track-fill{\r\n  background-color: #395d73 !important;\r\n}\r\n\r\n/deep/.mat-slider-thumb-label-text {\r\n    color: #395d73 !important;\r\n    font-size: 12px !important;\r\n}\r\n\r\n/deep/.mat-slider-thumb-label{\r\n    height: 15px !important;\r\n    width: 15px !important;\r\n    top: -20px !important;\r\n    right: -7px !important;\r\n    background-color: white !important;\r\n    border: 1px solid #395d73 !important;\r\n}\r\n\r\n.mat-slider{\r\n    width: 150px !important;\r\n}\r\n\r\n.cesium-button {\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  color: #395D73;\r\n  fill: #395D73;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  background: #F1F1F1;\r\n}\r\n\r\n.cesium-button-select{\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  color: #395D73;\r\n  fill: #395D73;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  background: #F1F1F1;\r\n}\r\n\r\n.cesium-option{\r\n  background-color: #F1F1F1;\r\n  color: #395D73;\r\n  border: 1px solid #8AA8C0;\r\n}\r\n\r\nhr {\r\n  display: block;\r\n  height: 1px;\r\n  border: 0;\r\n  border-top: 1px solid #ccc;\r\n  padding: 0; \r\n  color:#395d73;\r\n  width: 100%;\r\n  background-color: #395d73;\r\n}"

/***/ }),

/***/ "./src/app/mobius-cesium/toolwindow/toolwindow.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"toolwindow\">\r\n  <mat-tab-group class=\"mat-tab-group\">\r\n    <mat-tab label=\"Attributes\">\r\n      <div id=\"AttribsView\"  style=\"margin-left: 5px;margin-top: 5px;\">\r\n        <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\">\r\n          <tr >\r\n            <th style=\"font-size: 12px;font-weight: normal;width: 85px;\"><div style=\"width: 85px;height:16px;background: #395D73;color:white;\">ID</div></th>\r\n            <th style=\"font-size: 12px;font-weight: normal;width: 85px\"><div style=\"width: 85px;height:16px;background: #395D73;color:white;\">{{ID}}</div></th>\r\n          </tr>\r\n        </table>\r\n        <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\">\r\n          <tr *ngFor=\"let Property of Properties\">\r\n            <th style=\"font-size: 12px;font-weight: normal;color:#395d73;width: 85px;height: 14px\"><div matTooltip={{Property.Name}} style=\"width: 85px;height:14px;text-align: left;cursor:pointer;\">{{Property.Name}}</div></th>\r\n            <th style=\"font-size: 12px;font-weight: normal;color:#395d73;width: 85px;height: 14px\"><div matTooltip={{Property.Value}} style=\"width: 85px;height:14px;text-align: left;cursor:pointer;\">{{Property.Value}}</div></th>\r\n          </tr>\r\n        </table>\r\n    </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"&nbsp;&nbsp;&nbsp;&nbsp;Key&nbsp;&nbsp;&nbsp;&nbsp;\" >\r\n      <div id=\"KeyView\" style=\"margin-left: 5px;margin-top: 5px;\">\r\n        <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\">\r\n          <tr *ngFor=\"let Key of ColorKey\">\r\n            <th  style=\"width: 40px;\"><div [ngStyle]=\"{ 'background-color': Key.color}\" >&nbsp;&nbsp;&nbsp;</div></th>\r\n            <th  style=\"font-size: 12px;font-weight: normal;color:#395d73;width: 130px;height: 14px\"><div matTooltip={{Key.text}}  style=\"width: 130px;height:14px;text-align: left;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;\">{{Key.text}}</div></th>\r\n          </tr>\r\n        </table>\r\n    </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"&nbsp;Settings&nbsp;\" >\r\n      <div id=\"SettingView\" style=\"margin-left: 5px;margin-top: 5px;\">\r\n        <table>\r\n          <tr>\r\n          <th class=\"colorkey\" style=\"width: 60px\"><div class=\"Hide\" style=\"width: 60px;color:#395d73;border:0;text-align: left;font-weight: normal;\">Color</div></th>\r\n          <th><div>\r\n            <select class=\"cesium-button\" (change)=\"onChangeColor($event.target.value)\" [ngModel]=\"selectColor\">\r\n              <option class=\"cesium-option\"  *ngFor=\"let ColorName of ColorNames\" value={{ColorName}}>{{ColorName}}</option>\r\n            </select>\r\n          </div></th>\r\n          </tr>\r\n          </table>\r\n        <hr>\r\n          <table>\r\n          <tr>\r\n          <th class=\"colorkey\" style=\"width: 60px\"><div class=\"Hide\" style=\"width: 60px;color:#395d73;border:0;text-align: left;font-weight: normal;\">Height</div></th>\r\n          <th><div>\r\n            <select class=\"cesium-button\" (change)=\"onChangeHeight($event.target.value)\" [ngModel]=\"selectHeight\">\r\n               <option class=\"cesium-option\"  *ngFor=\"let Height of HeightKey\" value={{Height}}>{{Height}}</option>\r\n            </select>\r\n          </div></th>\r\n          </tr>\r\n        </table>\r\n        <table>\r\n          <tr ><th style=\"width:60px;height: 25px;\"><div style=\"width: 60px;color:#395d73;font-weight: normal;text-align: left;border:0;\">Min</div></th>\r\n          <th style=\"width:60px;height: 25px;\"><div style=\"width:60px;color:#395d73;font-weight: normal;text-align: left;border:0;\">{{Min}}</div></th></tr>  \r\n          </table>\r\n          <table >\r\n          <tr ><th style=\"width:60px;\"><div style=\"width: 60px;color:#395d73;font-weight: normal;text-align: left;border:0;\">Max</div></th>\r\n          <th style=\"width:60px;\"><div style=\"width: 60px;color:#395d73;font-weight: normal;text-align: left;border:0;\">{{Max}}</div></th></tr>\r\n      </table>\r\n       <table>\r\n          <tr ><th style=\"width:60px;height: 25px;\"><div style=\"width: 60px;color:#395d73;font-weight: normal;text-align: left;border:0;\">Scale</div></th>\r\n          <th style=\"width:80px;height: 25px;\"><div style=\"width:80px;color:#395d73;font-weight: normal;text-align: left;border:0;\"><input type=\"text\" value={{ScaleValue}} (change)=\"changescale($event.target.value)\" style=\"width:80px\"></div></th>\r\n          <th style=\"width:85px;height: 25px;\"><div style=\"width:85px;color:#395d73;font-weight: normal;text-align: left;border:0;\"><input type=\"checkbox\" [checked]=\"CheckScale\" (click)=\"checkscale();changescale(ScaleValue)\"></div></th></tr>\r\n          <tr ><th style=\"width:60px;height: 25px;\"><div style=\"width: 60px;color:#395d73;font-weight: normal;text-align: left;border:0;\">Invert</div></th>\r\n          <th style=\"width:80px;height: 25px;\"><div style=\"width:80px;color:#395d73;font-weight: normal;text-align: left;border:0;\"><input type=\"checkbox\" [checked]=\"CheckOpp\" (click)=\"checkopp();changeopp()\"></div></th></tr>  \r\n      </table>\r\n      <hr>\r\n      <table>\r\n        <tr>\r\n        <th class=\"colorkey\" style=\"width: 80px;height: 25px;\"><div class=\"Hide\" style=\"width: 80px;height: 25px;color:#395d73;border-color:#395d73;border:0;text-align: left;font-weight: normal;\"><input type=\"button\" value=\"Add Filter\" style=\"color:#395d73;width: 80px;height: 25px;\" (click)=\"addHide()\"></div></th>\r\n        <th style=\"width:20px;height: 25px;\"><div style=\"width:20px;height: 25px;margin-left: 10px\">\r\n          <select class=\"cesium-button-select\"  (change)=\"ChangeHeight($event.target.value)\">\r\n             <option class=\"cesium-option\"  *ngFor=\"let ColorName of ColorNames\" value={{ColorName}}>{{ColorName}}</option>\r\n          </select></div></th>\r\n        </tr>\r\n      </table>\r\n      <div class=\"hide-container\" style=\"margin-top:5px;\">\r\n        <div *ngFor=\"let item of hideElementArr;\" id={{item.divid}}>\r\n      <table>\r\n        <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width:80px;color:#395d73;text-align: left;vertical-align: middle;font-weight: normal;\">{{item.HeightHide}}</div></th>\r\n        <th *ngIf=\"item.type === 'number'\" style=\"width:40px;height: 25px;\"><div style=\"width:40px;height: 25px;\">\r\n          <select class=\"cesium-button-select\" (change)=\"Changerelation($event.target.value,item.id)\" style=\"width:40px;height: 25px;\">\r\n             <option class=\"cesium-option\" value=0>></option>\r\n             <option class=\"cesium-option\" value=1><</option>\r\n             <option class=\"cesium-option\" value=2>=</option>\r\n          </select></div></th>\r\n          <th *ngIf=\"item.type === 'category'\" style=\"width:40px;height: 25px;\"><div style=\"width:40px;height: 25px;\">\r\n          <select class=\"cesium-button-select\" (change)=\"ChangeCategory($event.target.value,item.id,0)\" style=\"width:40px;height: 25px;\">\r\n            <option class=\"cesium-option\" value=0>none</option>\r\n            <option class=\"cesium-option\" value=1>=</option>\r\n            <option class=\"cesium-option\" value=2>!=</option>\r\n          </select></div></th>\r\n          <th *ngIf=\"item.type === 'number'\" style=\"width:70px;height: 20px;\"><input type=\"text\" id={{item.id}} value={{item.textHide}} (change)=\"Changetext($event.target.value,item.id)\" style=\"width:70px;height: 20px;\"></th>\r\n          <th *ngIf=\"item.type === 'category'\" style=\"width:73px;height: 25px;\"><div style=\"width:73px;height: 25px;\">\r\n          <select class=\"cesium-button-select\" (change)=\"ChangeCategory($event.target.value,item.id,1)\" style=\"width:73px;height: 25px;\">\r\n            <option class=\"cesium-option\" *ngFor=\"let caty of item.Category\" value={{caty}}>{{caty}}</option>\r\n          </select></div></th>\r\n        <th style=\"width:30px;height: 25px;\" id={{item.id}}><button class=\"button\"  style=\"width:30px;height: 25px;\" (click)=\"deleteHide(item.id)\"><span id={{item.id}} ><i class=\"fa fa-trash\"  style=\"color:#395d73;\"></i></span></button></th></tr>\r\n      </table>\r\n      <table>\r\n        <tr>\r\n        <th *ngIf=\"item.type === 'number'\" style=\"width:30px;height: 25px;\"><div style=\"font-weight: normal;display: inline-block;color:#395d73;width:30px;\">{{item.HideMin}}</div></th>\r\n        <th *ngIf=\"item.type === 'number'\" style=\"width:150px;height: 25px;\"><div style=\"font-weight: normal;display: inline-block;width:150px;\"><mat-slider class=\"slider\" name=\"range\" id=\"0\" min={{item.HideMin}} max={{item.HideMax}} step=0.01 thumbLabel=true value={{item.textHide}} #textscale (change)=\"Changetext(textscale.value.toPrecision(2),item.id)\" >\r\n        </mat-slider></div></th>\r\n        <th *ngIf=\"item.type === 'number'\"><div style=\"font-weight: normal;display: inline-block;color:#395d73;width:30px;text-align: left;\">{{item.HideMax}}</div></th></tr>\r\n      </table><hr>\r\n        </div>\r\n      </div>\r\n      </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</div>"

/***/ }),

/***/ "./src/app/mobius-cesium/toolwindow/toolwindow.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolwindowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__ = __webpack_require__("./src/app/mobius-cesium/data/DataSubscriber.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chroma_js__ = __webpack_require__("./node_modules/chroma-js/chroma.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chroma_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chroma_js__);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToolwindowComponent = /** @class */ (function (_super) {
    __extends(ToolwindowComponent, _super);
    function ToolwindowComponent(injector, myElement) {
        var _this = _super.call(this, injector) || this;
        _this.hideElementArr = [];
        _this.ChromaScale = __WEBPACK_IMPORTED_MODULE_2_chroma_js__["scale"]("SPECTRAL");
        _this.HideNum = [];
        _this.ScaleValue = _this.dataService.ScaleValue;
        _this.CheckScale = _this.dataService.CheckScale;
        _this.CheckOpp = _this.dataService.CheckOpp;
        return _this;
    }
    ToolwindowComponent.prototype.ngOnInit = function () {
    };
    ToolwindowComponent.prototype.notify = function (message) {
        if (message == "model_update") {
            this.data = this.dataService.getGsModel();
            try {
                this.LoadData(this.data);
            }
            catch (ex) {
                console.log(ex);
            }
        }
    };
    ToolwindowComponent.prototype.LoadData = function (data) {
        if (data["features"] !== undefined) {
            this.PropertyNames = Object.getOwnPropertyNames(data["features"][0].properties);
            this.PropertyNames.sort();
            this.viewer = this.dataService.viewer;
        }
    };
    ToolwindowComponent.prototype.ngDoCheck = function () {
        if (this.viewer !== undefined && this.dataService.SelectedEntity !== undefined) {
            if (this.ID !== this.dataService.SelectedEntity._id) {
                this.ID = this.dataService.SelectedEntity._id;
                this.Properties = [];
                for (var i = 0; i < this.PropertyNames.length; i++) {
                    var Properties = [];
                    Properties.Name = this.PropertyNames[i];
                    Properties.Value = this.dataService.SelectedEntity.properties[this.PropertyNames[i]]._value;
                    this.Properties.push(Properties);
                }
            }
        }
        if (this.viewer !== undefined) {
            if (this.ColorValue !== this.dataService.ColorValue) {
                this.ColorValue = this.dataService.ColorValue;
                this.ColorNames = this.dataService.propertyNames;
                this.ColorNames.sort();
                this.selectColor = this.ColorValue;
                this.onChangeColor(this.ColorValue);
            }
            if (this.HeightValue !== this.dataService.HeightValue) {
                this.HeightValue = this.dataService.HeightValue;
                this.HeightKey = this.dataService.HeightKey;
                this.HeightKey.sort();
                this.selectHeight = this.HeightValue;
                this.onChangeHeight(this.HeightValue);
            }
        }
    };
    ToolwindowComponent.prototype.onChangeHeight = function (HeightValue) {
        this.HeightValue = HeightValue;
        var texts = [];
        var promise = this.dataService.cesiumpromise;
        for (var j = 0; j < this.HeightKey.length; j++) {
            if (this.HeightValue === this.HeightKey[j]) {
                var self = this;
                promise.then(function (dataSource) {
                    var entities = dataSource.entities.values;
                    for (var i = 0; i < entities.length; i++) {
                        var entity = entities[i];
                        if (entity.properties[self.HeightValue] !== undefined) {
                            if (entity.properties[self.HeightValue]._value !== " ") {
                                entity.polygon.extrudedHeight = entity.properties[self.HeightValue]._value;
                                if (texts.length === 0) {
                                    texts[0] = entity.properties[self.HeightValue]._value;
                                }
                                else {
                                    if (texts.indexOf(entity.properties[self.HeightValue]._value) === -1)
                                        texts.push(entity.properties[self.HeightValue]._value);
                                }
                            }
                        }
                    }
                });
            }
        }
        this.Max = Math.max.apply(Math, texts);
        this.Min = Math.min.apply(Math, texts);
        //if(this.CheckHide===true) this.Hide();
        this.changescale(this.ScaleValue);
        this.dataService.getHeightValue(this.HeightValue);
    };
    ToolwindowComponent.prototype.onChangeColor = function (ColorValue) {
        this.ColorValue = ColorValue;
        var texts = [];
        this.ColorKey = [];
        var promise = this.dataService.cesiumpromise;
        for (var j = 0; j < this.ColorNames.length; j++) {
            if (this.ColorValue === this.ColorNames[j]) {
                this.Name = this.ColorNames[j];
                var self = this;
                promise.then(function (dataSource) {
                    var entities = dataSource.entities.values;
                    for (var i = 0; i < entities.length; i++) {
                        var entity = entities[i];
                        if (entity.properties[self.Name] !== undefined) {
                            if (entity.properties[self.Name]._value !== " ") {
                                if (texts.length === 0) {
                                    texts[0] = entity.properties[self.Name]._value;
                                }
                                else {
                                    if (texts.indexOf(entity.properties[self.Name]._value) === -1)
                                        texts.push(entity.properties[self.Name]._value);
                                }
                            }
                        }
                    }
                });
            }
        }
        if (typeof (texts[0]) === "number") {
            this.texts = texts;
            var max = Math.max.apply(Math, texts);
            var min = Math.min.apply(Math, texts);
            var range = 12;
            var Colortext = [];
            Colortext.push(">=" + (min + ((range - 1) / range) * (max - min)).toFixed(2));
            for (var i = range - 2; i > 0; i--) {
                Colortext.push((min + (i / range) * (max - min)).toFixed(2) + " - " + (min + ((i + 1) / range) * (max - min)).toFixed(2));
            }
            Colortext.push("<=" + (min + (1 / range) * (max - min)).toFixed(2));
            for (var j = 0; j < Colortext.length; j++) {
                var ColorKey = [];
                ColorKey.text = Colortext[j];
                //ColorKey.color=this.ColorStore[j];
                var Color = this.ChromaScale((j / Colortext.length).toFixed(2));
                ColorKey.color = Color;
                this.ColorKey.push(ColorKey);
            }
            this.dataService.Colortexts = this.ColorKey;
            this.dataService.MaxColor = max;
            this.dataService.MinColor = min;
            this.colorByNum();
        }
        else {
            this.texts = texts;
            for (var j = 0; j < texts.length; j++) {
                var ColorKey = [];
                ColorKey.text = texts[j];
                //ColorKey.color=this.ColorStore[j];
                var Color = this.ChromaScale((j / texts.length).toFixed(2));
                ColorKey.color = Color;
                this.ColorKey.push(ColorKey);
            }
            this.dataService.Colortexts = this.ColorKey;
            this.colorByCat();
        }
        this.Hide();
        this.dataService.getColorValue(this.ColorValue);
    };
    ToolwindowComponent.prototype.colorByNum = function () {
        var max = Math.max.apply(Math, this.texts);
        var min = Math.min.apply(Math, this.texts);
        var promise = this.dataService.cesiumpromise;
        var ChromaScale = this.ChromaScale;
        var ColorKey = this.ColorKey;
        var range = ColorKey.length;
        var self = this;
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];
                if (entity.properties[self.ColorValue] !== undefined) {
                    for (var j = 1; j < range; j++) {
                        if (entity.properties[self.ColorValue]._value >= (min + (j / range) * (max - min)).toFixed(2)) {
                            var rgb = ColorKey[range - j].color._rgb;
                            entity.polygon.material = Cesium.Color.fromBytes(rgb[0], rgb[1], rgb[2]);
                        }
                        else if (entity.properties[self.ColorValue]._value < (min + (1 / range) * (max - min)).toFixed(2)) {
                            var rgb = ColorKey[range - 1].color._rgb;
                            entity.polygon.material = Cesium.Color.fromBytes(rgb[0], rgb[1], rgb[2]);
                        }
                    }
                }
            }
        });
    };
    ToolwindowComponent.prototype.colorByCat = function () {
        var Name = this.ColorValue;
        var texts = [];
        for (var i = 0; i < this.ColorKey.length; i++) {
            texts.push(this.ColorKey[i].text);
        }
        var ChromaScale = this.ChromaScale;
        var promise = this.dataService.cesiumpromise;
        promise.then(function (dataSource) {
            var self = this;
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];
                if (entity.properties[Name] !== undefined) {
                    var initial = false;
                    for (var j = 0; j < texts.length; j++) {
                        if (entity.properties[Name]._value === texts[j]) {
                            var rgb = ChromaScale((j / texts.length).toFixed(2));
                            entity.polygon.material = entity.polygon.material = Cesium.Color.fromBytes(rgb._rgb[0], rgb._rgb[1], rgb._rgb[2]);
                            initial = true;
                        }
                    }
                    if (initial === false) {
                        entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                    }
                }
            }
        });
    };
    ToolwindowComponent.prototype.changescale = function (ScaleValue) {
        this.ScaleValue = ScaleValue;
        var scale = this.ScaleValue / this.Max;
        if (this.CheckScale === true) {
            var promise = this.dataService.cesiumpromise;
            var self = this;
            if (self.CheckOpp === false) {
                promise.then(function (dataSource) {
                    var entities = dataSource.entities.values;
                    for (var i = 0; i < entities.length; i++) {
                        var entity = entities[i];
                        if (entity.properties[self.HeightValue] !== undefined) {
                            if (entity.properties[self.HeightValue]._value !== " ") {
                                entity.polygon.extrudedHeight = entity.properties[self.HeightValue]._value * scale;
                            }
                        }
                    }
                });
            }
            else {
                promise.then(function (dataSource) {
                    var entities = dataSource.entities.values;
                    for (var i = 0; i < entities.length; i++) {
                        var entity = entities[i];
                        if (entity.properties[self.HeightValue] !== undefined) {
                            if (entity.properties[self.HeightValue]._value !== " ") {
                                entity.polygon.extrudedHeight = (self.Max - entity.properties[self.HeightValue]._value) * scale;
                            }
                        }
                    }
                });
            }
            /*this.Hide();*/
        }
        else {
            var promise = this.dataService.cesiumpromise;
            var self = this;
            if (self.CheckOpp === false) {
                promise.then(function (dataSource) {
                    var entities = dataSource.entities.values;
                    for (var i = 0; i < entities.length; i++) {
                        var entity = entities[i];
                        if (entity.properties[self.HeightValue] !== undefined) {
                            if (entity.properties[self.HeightValue]._value !== " ") {
                                entity.polygon.extrudedHeight = entity.properties[self.HeightValue]._value;
                            }
                        }
                    }
                });
            }
            else {
                promise.then(function (dataSource) {
                    var entities = dataSource.entities.values;
                    for (var i = 0; i < entities.length; i++) {
                        var entity = entities[i];
                        if (entity.properties[self.HeightValue] !== undefined) {
                            if (entity.properties[self.HeightValue]._value !== " ") {
                                entity.polygon.extrudedHeight = self.Max - entity.properties[self.HeightValue]._value;
                            }
                        }
                    }
                });
            }
        }
        this.Hide();
    };
    ToolwindowComponent.prototype.checkscale = function () {
        this.CheckScale = !this.CheckScale;
        this.dataService.CheckScale = this.CheckScale;
    };
    ToolwindowComponent.prototype.addHide = function () {
        var lastnumber;
        if (this.HideNum.length === 0) {
            this.HideNum[0] = "0";
            lastnumber = this.HideNum[0];
        }
        else {
            for (var i = 0; i < this.HideNum.length + 1; i++) {
                if (this.HideNum.indexOf(String(i)) === -1) {
                    this.HideNum.push(String(i));
                    lastnumber = String(i);
                    break;
                }
            }
        }
        if (this.HideValue === undefined)
            this.HideValue = this.ColorNames[0];
        var texts = this.Initial(this.HideValue);
        if (typeof (texts[0]) === "number") {
            this.HideType = "number";
        }
        else {
            this.HideType = "category";
        }
        this.hideElementArr.push({ divid: String("addHide".concat(String(lastnumber))), id: lastnumber, HeightHide: this.HideValue, type: this.HideType, Category: texts, CategaryHide: texts[0], RelaHide: 0, textHide: Math.round(Math.min.apply(Math, texts) * 100) / 100,
            HideMax: Math.ceil(Math.max.apply(Math, texts)), HideMin: Math.round(Math.min.apply(Math, texts) * 100) / 100 });
        return;
    };
    ToolwindowComponent.prototype.deleteHide = function (event) {
        var index = this.HideNum.indexOf(event);
        var divid = String("addHide".concat(String(event)));
        var addHide = document.getElementById(divid);
        var hidecontainer = document.getElementsByClassName("hide-container")[0];
        hidecontainer.removeChild(addHide);
        if (this.hideElementArr[index].type === "number") {
            if (this.hideElementArr[index].RelaHide === "0" || this.hideElementArr[index].RelaHide === 0)
                this.hideElementArr[index].textHide = this.hideElementArr[index].HideMin;
            if (this.hideElementArr[index].RelaHide === "1" || this.hideElementArr[index].RelaHide === 1)
                this.hideElementArr[index].textHide = this.hideElementArr[index].HideMax;
        }
        else if (this.hideElementArr[index].type === "category") {
            this.hideElementArr[index].RelaHide = 0;
        }
        this.Hide();
        this.hideElementArr.splice(index, 1);
        this.HideNum.splice(index, 1);
    };
    ToolwindowComponent.prototype.Initial = function (HideValue) {
        var texts = [];
        var promise = this.dataService.cesiumpromise;
        var self = this;
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];
                if (entity.properties[HideValue] !== undefined) {
                    if (entity.properties[HideValue]._value !== " ") {
                        if (texts.length === 0) {
                            texts[0] = entity.properties[HideValue]._value;
                        }
                        else {
                            if (texts.indexOf(entity.properties[HideValue]._value) === -1)
                                texts.push(entity.properties[HideValue]._value);
                        }
                    }
                }
            }
        });
        return texts;
    };
    ToolwindowComponent.prototype.ChangeHeight = function (HeightHide) {
        this.HideValue = HeightHide;
    };
    ToolwindowComponent.prototype.Changerelation = function (RelaHide, id) {
        var index = this.HideNum.indexOf(id);
        var HeightHide = this.hideElementArr[index].HeightHide;
        this.hideElementArr[index].RelaHide = RelaHide;
        var texts = [];
        var promise = this.dataService.cesiumpromise;
        var self = this;
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];
                if (entity.properties[HeightHide] !== undefined) {
                    if (entity.properties[HeightHide]._value !== " ") {
                        if (texts.length === 0) {
                            texts[0] = entity.properties[HeightHide]._value;
                        }
                        else {
                            if (texts.indexOf(entity.properties[HeightHide]._value) === -1)
                                texts.push(entity.properties[HeightHide]._value);
                        }
                    }
                }
            }
        });
        this.hideElementArr[index].HideMax = Math.ceil(Math.max.apply(Math, texts));
        this.hideElementArr[index].HideMin = Math.round(Math.min.apply(Math, texts) * 100) / 100;
        if (RelaHide === "0" || RelaHide === 0)
            this.hideElementArr[index].textHide = this.hideElementArr[index].HideMin;
        if (RelaHide === "1" || RelaHide === 1)
            this.hideElementArr[index].textHide = this.hideElementArr[index].HideMax;
        this.Hide();
    };
    ToolwindowComponent.prototype.ChangeCategory = function (categary, id, type) {
        var scale = this.ScaleValue / this.Max;
        var index = this.HideNum.indexOf(id);
        var promise = this.dataService.cesiumpromise;
        var self = this;
        if (type === 1) {
            self.hideElementArr[index].CategaryHide = categary;
        }
        if (type === 0) {
            self.hideElementArr[index].RelaHide = Number(categary);
        }
        self.Hide();
    };
    ToolwindowComponent.prototype.Changetext = function (value, id) {
        var index = this.HideNum.indexOf(id);
        this.hideElementArr[index].textHide = value;
        this.Hide();
    };
    ToolwindowComponent.prototype._compare = function (value, slider, relation) {
        switch (relation) {
            case 0:
                return value < slider;
            case 1:
                return value > slider;
            case 2:
                return value === slider;
        }
    };
    ToolwindowComponent.prototype._compareCat = function (value, Categary, relation) {
        switch (relation) {
            case 0:
                return value === null;
            case 1:
                return value !== Categary;
            case 2:
                return value === Categary;
        }
    };
    ToolwindowComponent.prototype.Hide = function () {
        var promise = this.dataService.cesiumpromise;
        var propertyname = [];
        var relation = [];
        var text = [];
        var scale = this.ScaleValue / this.Max;
        for (var j = 0; j < this.hideElementArr.length; j++) {
            if (this.hideElementArr[j] !== undefined) {
                propertyname.push(this.hideElementArr[j].HeightHide);
                relation.push(Number(this.hideElementArr[j].RelaHide));
                if (this.hideElementArr[j].type === "number") {
                    text.push(Number(this.hideElementArr[j].textHide));
                }
                else if (this.hideElementArr[j].type === "category") {
                    text.push(String(this.hideElementArr[j].CategaryHide));
                }
            }
        }
        var self = this;
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];
                for (var j_1 = 0; j_1 < propertyname.length; j_1++) {
                    var value = entity.properties[propertyname[j_1]]._value;
                    if (value !== undefined) {
                        if (typeof (value) === "number") {
                            if (self._compare(value, text[j_1], relation[j_1])) {
                                entity.polygon.extrudedHeight = 0;
                                entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                                break;
                            }
                            else {
                                self.ColorByNumCat(entity);
                                if (self.CheckScale === true) {
                                    if (self.CheckOpp === true) {
                                        entity.polygon.extrudedHeight = (self.Max - entity.properties[self.HeightValue]._value) * scale;
                                    }
                                    else {
                                        entity.polygon.extrudedHeight = entity.properties[self.HeightValue]._value * scale;
                                    }
                                }
                                else {
                                    if (self.CheckOpp === true) {
                                        entity.polygon.extrudedHeight = self.Max - entity.properties[self.HeightValue]._value;
                                    }
                                    else {
                                        entity.polygon.extrudedHeight = entity.properties[self.HeightValue]._value;
                                    }
                                }
                            }
                        }
                        else if (typeof (value) === "string") {
                            if (self._compareCat(value, text[j_1], relation[j_1])) {
                                entity.polygon.extrudedHeight = 0;
                                entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                                break;
                            }
                            else {
                                self.ColorByNumCat(entity);
                                if (self.CheckScale === true) {
                                    if (self.CheckOpp === true) {
                                        entity.polygon.extrudedHeight = (self.Max - entity.properties[self.HeightValue]._value) * scale;
                                    }
                                    else {
                                        entity.polygon.extrudedHeight = entity.properties[self.HeightValue]._value * scale;
                                    }
                                }
                                else {
                                    if (self.CheckOpp === true) {
                                        entity.polygon.extrudedHeight = self.Max - entity.properties[self.HeightValue]._value;
                                    }
                                    else {
                                        entity.polygon.extrudedHeight = entity.properties[self.HeightValue]._value;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
    };
    ToolwindowComponent.prototype.ColorByNumCat = function (entity) {
        var ChromaScale = this.ChromaScale;
        var ColorKey = this.ColorKey;
        var range = ColorKey.length;
        var self = this;
        if (typeof (self.texts[0]) === "number") {
            var max = Math.max.apply(Math, self.texts);
            var min = Math.min.apply(Math, self.texts);
            var ChromaScale = self.ChromaScale;
            for (var j = 1; j < range; j++) {
                if (entity.properties[self.ColorValue]._value >= (min + (j / range) * (max - min)).toFixed(2)) {
                    var rgb = ColorKey[range - j].color._rgb;
                    entity.polygon.material = Cesium.Color.fromBytes(rgb[0], rgb[1], rgb[2]);
                }
                else if (entity.properties[self.ColorValue]._value < (min + (1 / range) * (max - min)).toFixed(2)) {
                    var rgb = ColorKey[range - 1].color._rgb;
                    entity.polygon.material = Cesium.Color.fromBytes(rgb[0], rgb[1], rgb[2]);
                }
            }
        }
        else {
            var Colortexts = self.dataService.Colortexts;
            var initial = false;
            for (var j = 0; j < Colortexts.length; j++) {
                if (entity.properties[self.ColorValue]._value === Colortexts[j].text) {
                    var rgb = ChromaScale((j / Colortexts.length).toFixed(2));
                    entity.polygon.material = entity.polygon.material = Cesium.Color.fromBytes(rgb._rgb[0], rgb._rgb[1], rgb._rgb[2]);
                    initial = true;
                }
            }
            if (initial === false) {
                entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
            }
        }
    };
    ToolwindowComponent.prototype.changeopp = function () {
        if (this.CheckOpp === true) {
            var promise = this.dataService.cesiumpromise;
            var self = this;
            if (self.CheckScale === true) {
                var scale = self.ScaleValue / self.Max;
                promise.then(function (dataSource) {
                    var entities = dataSource.entities.values;
                    for (var i = 0; i < entities.length; i++) {
                        var entity = entities[i];
                        if (entity.properties[self.HeightValue] !== undefined) {
                            if (entity.properties[self.HeightValue]._value !== " ") {
                                entity.polygon.extrudedHeight = (self.Max - entity.properties[self.HeightValue]._value) * scale;
                            }
                        }
                    }
                });
            }
            else {
                promise.then(function (dataSource) {
                    var entities = dataSource.entities.values;
                    for (var i = 0; i < entities.length; i++) {
                        var entity = entities[i];
                        if (entity.properties[self.HeightValue] !== undefined) {
                            if (entity.properties[self.HeightValue]._value !== " ") {
                                entity.polygon.extrudedHeight = self.Max - entity.properties[self.HeightValue]._value;
                            }
                        }
                    }
                });
            }
        }
        else {
            this.changescale(this.ScaleValue);
        }
        this.Hide();
    };
    ToolwindowComponent.prototype.checkopp = function () {
        this.CheckOpp = !this.CheckOpp;
        this.dataService.CheckOpp = this.CheckOpp;
    };
    ToolwindowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-toolwindow',
            template: __webpack_require__("./src/app/mobius-cesium/toolwindow/toolwindow.component.html"),
            styles: [__webpack_require__("./src/app/mobius-cesium/toolwindow/toolwindow.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], ToolwindowComponent);
    return ToolwindowComponent;
}(__WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__["a" /* DataSubscriber */]));



/***/ }),

/***/ "./src/app/mobius-cesium/viewer/viewer.component.css":
/***/ (function(module, exports) {

module.exports = "body{\r\n  background: red;\r\n}\r\n\r\n\r\n#cesiumContainer{\r\n height: 100%;\r\n width: 100%; \r\n font-family: sans-serif !important;\r\n margin: 0px !important;\r\n padding: 0px !important;\r\n font-size: 14px;\r\n}\r\n\r\n\r\n.cesium-button {\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  color: white;\r\n  fill: #395D73;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  background: #395D73;\r\n}\r\n\r\n\r\n.cesium-option,.Hide{\r\n  background-color: #395D73;\r\n  color: white;\r\n  border: 1px solid #8AA8C0;\r\n}\r\n\r\n\r\n.Hide{\r\n  margin: auto;\r\n  width:80px;\r\n  height: 20px;\r\n  word-wrap:break-word;\r\n  font-weight: normal;\r\n  color:white;\r\n  font-family:sans-serif !important;\r\n  font-size: 14px !important;\r\n}\r\n\r\n\r\n.cesium-infoBox-title{\r\n  height:14px;\r\n  background: #395D73;\r\n}\r\n\r\n\r\n.cesium-viewer{\r\n  font-size: 14px !important;\r\n}\r\n\r\n\r\nbody{\r\n  font-size: 10px;\r\n}\r\n\r\n\r\n.cesium-infoBox-description{\r\n  background-color: red !important;\r\n}\r\n\r\n\r\n.cesium-infoBox-description table{\r\n  background-color: #F1F1F1;\r\n}\r\n\r\n\r\n.cesium-infoBox-iframe{\r\n  max-height: 300px !important;\r\n  height:650px !important;\r\n}\r\n\r\n\r\n#ColorandHeight{\r\n  position: absolute;\r\n  bottom: 10px;\r\n  width: 100%;\r\n  z-index: 98;\r\n  height: 60px;\r\n  display:inline-block;\r\n}\r\n\r\n\r\n#toolbar{\r\n  z-index:99;\r\n  margin: 5px;\r\n  width: 100%;\r\n  padding: 2px 5px;\r\n  position: absolute;\r\n  display:inline-block;\r\n  bottom: 1px;\r\n  overflow: hidden !important;\r\n  text-overflow: ellipsis !important;\r\n  table-layout:fixed !important;\r\n  white-space: nowrap !important;\r\n}\r\n\r\n\r\n.colorkey{\r\n  overflow: hidden !important;\r\n  text-overflow: ellipsis !important;\r\n  table-layout:fixed !important;\r\n  white-space: nowrap !important;\r\n}\r\n\r\n\r\n.table_text{\r\n  margin: auto;\r\n  width:40px;\r\n  word-wrap:break-word;\r\n  font-weight: normal;\r\n  color:white;\r\n  text-shadow: 0px 0px 3px black;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/viewer/viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"cesiumContainer\" (click)=\"select()\">\r\n</div>"

/***/ }),

/***/ "./src/app/mobius-cesium/viewer/viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__ = __webpack_require__("./src/app/mobius-cesium/data/DataSubscriber.ts");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewerComponent = /** @class */ (function (_super) {
    __extends(ViewerComponent, _super);
    function ViewerComponent(injector, myElement) {
        var _this = _super.call(this, injector) || this;
        _this.tileset = new Cesium.Cesium3DTileset({});
        _this.selectEntity = null;
        _this.myElement = myElement;
        return _this;
    }
    ViewerComponent.prototype.ngOnInit = function () {
    };
    ViewerComponent.prototype.notify = function (message) {
        if (message == "model_update") {
            this.data = this.dataService.getGsModel();
            try {
                this.LoadData(this.data);
            }
            catch (ex) {
                console.log(ex);
            }
        }
    };
    ViewerComponent.prototype.LoadData = function (data) {
        if (document.getElementsByClassName('cesium-viewer').length !== 0) {
            document.getElementsByClassName('cesium-viewer')[0].remove();
        }
        var viewer = new Cesium.Viewer('cesiumContainer', {
            infoBox: true,
            imageryProvider: Cesium.createOpenStreetMapImageryProvider({
                url: 'https://stamen-tiles.a.ssl.fastly.net/toner/',
            })
        });
        document.getElementsByClassName('cesium-viewer-bottom')[0].remove();
        document.getElementsByClassName('cesium-viewer-animationContainer')[0].remove();
        document.getElementsByClassName('cesium-viewer-timelineContainer')[0].remove();
        document.getElementsByClassName('cesium-viewer-fullscreenContainer')[0].remove();
        document.getElementsByClassName('cesium-viewer-infoBoxContainer')[0].remove();
        this.viewer = viewer;
        this.dataService.viewer = this.viewer;
        this.data = data;
        var promise = Cesium.GeoJsonDataSource.load(this.data);
        ;
        var self = this;
        var HeightKey = [];
        promise.then(function (dataSource) {
            viewer.dataSources.add(dataSource);
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];
                entity.polygon.outline = false;
            }
            self.propertyNames = entities[0].properties.propertyNames;
            for (var i = 0; i < self.propertyNames.length; i++) {
                if (self.propertyNames[i].indexOf("ID") !== -1 || self.propertyNames[i].indexOf("id") !== -1) {
                    self.propertyNames.splice(i, 1);
                    i = i - 1;
                }
                else {
                    if (typeof (entity.properties[self.propertyNames[i]]._value) === "number") {
                        HeightKey.push(self.propertyNames[i]);
                    }
                }
            }
        });
        this.dataService.cesiumpromise = promise;
        this.dataService.propertyNames = this.propertyNames;
        this.dataService.HeightKey = HeightKey;
        if (this.dataService.ColorValue !== undefined) {
            this.ColorValue = this.dataService.ColorValue;
        }
        else {
            this.ColorValue = this.propertyNames.sort()[0];
            this.dataService.ColorValue = this.ColorValue;
        }
        if (this.dataService.HeightValue !== undefined) {
            this.HeightValue = this.dataService.HeightValue;
        }
        else {
            this.HeightValue = HeightKey.sort()[0];
            this.dataService.HeightValue = this.HeightValue;
        }
        // this.ColorValue=this.propertyNames.sort()[0];
        // this.HeightValue=HeightKey.sort()[0]
        // this.dataService.ColorValue=this.ColorValue;
        // this.dataService.HeightValue=this.HeightValue;
        viewer.zoomTo(promise);
    };
    ViewerComponent.prototype.select = function () {
        var viewer = this.viewer;
        if (this.selectEntity !== undefined && this.selectEntity !== null) {
            this.ColorSelect(this.selectEntity);
        }
        if (viewer.selectedEntity !== undefined && viewer.selectedEntity.polygon !== null) {
            this.dataService.SelectedEntity = viewer.selectedEntity;
            var material = viewer.selectedEntity.polygon.material;
            viewer.selectedEntity.polygon.material = Cesium.Color.WHITE;
            this.selectEntity = viewer.selectedEntity;
            this.material = material;
        }
        else {
            this.dataService.SelectedEntity = undefined;
            this.selectEntity = undefined;
            this.material = undefined;
        }
    };
    ViewerComponent.prototype.ColorSelect = function (entity) {
        this.ColorValue = this.dataService.ColorValue;
        var ColorKey = this.dataService.Colortexts;
        var range = ColorKey.length;
        for (var i = 0; i < this.propertyNames.length; i++) {
            if (this.ColorValue === this.propertyNames[i]) {
                if (typeof (entity.properties[this.ColorValue]._value) === "number") {
                    var max = this.dataService.MaxColor;
                    var min = this.dataService.MinColor;
                    var ChromaScale = this.ChromaScale;
                    for (var j = 1; j < range; j++) {
                        if (entity.properties[this.ColorValue]._value >= (min + (j / range) * (max - min)).toFixed(2)) {
                            var rgb = ColorKey[range - j].color._rgb;
                            entity.polygon.material = Cesium.Color.fromBytes(rgb[0], rgb[1], rgb[2]);
                        }
                        else if (entity.properties[this.ColorValue]._value < (min + (1 / range) * (max - min)).toFixed(2)) {
                            var rgb = ColorKey[range - 1].color._rgb;
                            entity.polygon.material = Cesium.Color.fromBytes(rgb[0], rgb[1], rgb[2]);
                        }
                    }
                }
                else {
                    var ChromaScale = this.ChromaScale;
                    var Colortexts = this.dataService.Colortexts;
                    var initial = false;
                    for (var j = 0; j < Colortexts.length; j++) {
                        if (entity.properties[this.ColorValue]._value === Colortexts[j].text) {
                            var rgb = ChromaScale((j / Colortexts.length).toFixed(2));
                            entity.polygon.material = entity.polygon.material = Cesium.Color.fromBytes(rgb._rgb[0], rgb._rgb[1], rgb._rgb[2]);
                            initial = true;
                        }
                    }
                    if (initial === false) {
                        entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                    }
                }
            }
        }
    };
    ViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cesium-viewer',
            template: __webpack_require__("./src/app/mobius-cesium/viewer/viewer.component.html"),
            styles: [__webpack_require__("./src/app/mobius-cesium/viewer/viewer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], ViewerComponent);
    return ViewerComponent;
}(__WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__["a" /* DataSubscriber */]));



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* enableProdMode */])();
}
window['CESIUM_BASE_URL'] = 'assets/cesium';
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map