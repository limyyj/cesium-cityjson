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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- <body> -->\r\n<!-- <div id=\"cesiumContainer\"></div>\r\n<div> -->\r\n  <!-- <div id=\"cesiumContainer\">\r\n  \t<div id=\"loadfile\">\r\n\t    <div class=\"version\" style=\"font-family:sans-serif;color:white;\"> v0.0.1</div>\r\n\t    <input type=\"file\" id=\"files\" name=\"files[]\" style=\"font-family:sans-serif;color:white;\" (change)=\"handleFileSelect($event)\" />\r\n\t</div>\r\n  </div> -->\r\n<!-- </div> -->\r\n<!-- </body> -->\r\n\r\n<div style=\"height: 765px\">\r\n\t<div id=\"loadfile\">\r\n      <div class=\"version\" style=\"font-family:sans-serif;color:white;\">v0.0.4&nbsp;&nbsp;</div>\r\n      <input type=\"file\" id=\"files\" name=\"files[]\" style=\"font-family:sans-serif;color:white;\" (change)=\"handleFileSelect($event)\" />\r\n  </div>\r\n\t<mobius-cesium [data]=\"gs_dummy_data\"></mobius-cesium>\r\n</div>"

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

module.exports = "<div id=\"mobiuscesium\">\r\n\t<split direction=\"horizontal\" style=\"background-color: #8aa8c0;\">\r\n\t\t<split-area [size]=\"0.5\" id=\"splitgroups\" style=\"overflow-x:hidden;overflow-y: auto;\">\r\n\t\t    <app-toolwindow></app-toolwindow>\r\n\t\t</split-area>\r\n\t\t<split-area [size]=\"99.5\" id=\"splitviewer\">\r\n\t\t    <cesium-viewer></cesium-viewer>\r\n\t\t</split-area>\r\n\t</split>\r\n\t\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/mobius-cesium.component.scss":
/***/ (function(module, exports) {

module.exports = "#mobiuscesium {\n  height: 101%;\n  font-family: sans-serif !important;\n  margin: 0px !important;\n  padding: 0px !important;\n  font-size: 14px; }\n\n/* split-area{\r\n  overflow-y: hidden !important;\r\n  height: 100% !important;\r\n}\r\n\r\nsplit-gutter{\r\n  border-right: 1px solid #8aa8c0 !important;\r\n  border-top: 1px solid #8aa8c0 !important;\r\n  background-color: #8aa8c0 !important;\r\n} */\n"

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
                __WEBPACK_IMPORTED_MODULE_10__angular_material_tooltip__["a" /* MatTooltipModule */]
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

module.exports = "#toolwindow{\r\n  position: relative;\r\n  background-color: #F1F1F1 !important;\r\n  height: 100%;\r\n  width: 700px;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  font-size: 14px !important;\r\n  line-height: 14px;\r\n  overflow-x: hidden !important;\r\n}\r\n\r\n/deep/.mat-tab-label, /deep/.mat-tab-label-active{\r\n  min-width: 60px!important;\r\n  padding: 3px!important;\r\n  margin: 3px!important;\r\n  color:#395d73;\r\n}\r\n\r\n/deep/.mat-tab-label{\r\n  height: 30px !important;\r\n  width: 60px !important;\r\n}\r\n\r\n/deep/.mat-tab-labels{\r\n  margin-left: 5px;\r\n}\r\n\r\n/deep/.mat-tab-header-pagination-controls-enabled{\r\n  display: none !important;\r\n}\r\n\r\n/deep/.mat-ink-bar{\r\n  background-color: #395d73 !important;\r\n}\r\n\r\n/deep/.mat-tab{\r\n  min-width: 30px !important;\r\n}\r\n\r\n/deep/.mat-tab-body-content{\r\n  overflow: hidden !important;\r\n}\r\n\r\n/deep/.mat-header{\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  margin-left: 0px;\r\n  color:#395d73;\r\n  border: 0;\r\n  height: 20px;\r\n}\r\n\r\n/*/deep/.mat-tab-label .mat-ripple .ng-star-inserted .mat-tab-label-active{\r\n  width: 50px !important;\r\n}*/\r\n\r\n/deep/split-gutter{\r\n  background-color:rgb(138, 168, 192) !important;\r\n}\r\n\r\n.cesium-button {\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  color: white;\r\n  fill: #395D73;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  background: #395D73;\r\n}\r\n\r\n.cesium-option{\r\n  background-color: #395D73;\r\n  color: white;\r\n  border: 1px solid #8AA8C0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/toolwindow/toolwindow.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"toolwindow\">\r\n  <mat-tab-group class=\"mat-tab-group\">\r\n    <mat-tab label=\"Attributes\">\r\n  \t  <div id=\"AttribsView\"  style=\"margin-left: 5px;margin-top: 5px;\">\r\n        <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\">\r\n          <tr >\r\n            <th style=\"font-size: 12px;font-weight: normal;width: 85px;\"><div style=\"width: 85px;height:16px;background: #395D73;color:white;\">ID</div></th>\r\n            <th style=\"font-size: 12px;font-weight: normal;width: 85px\"><div style=\"width: 85px;height:16px;background: #395D73;color:white;\">{{ID}}</div></th>\r\n          </tr>\r\n        </table>\r\n        <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\">\r\n          <tr *ngFor=\"let Property of Properties\">\r\n            <th style=\"font-size: 12px;font-weight: normal;color:#395d73;width: 85px;height: 14px\"><div matTooltip={{Property.Name}} style=\"width: 85px;height:14px;text-align: left;cursor:pointer;\">{{Property.Name}}</div></th>\r\n            <th style=\"font-size: 12px;font-weight: normal;color:#395d73;width: 85px;height: 14px\"><div matTooltip={{Property.Value}} style=\"width: 85px;height:14px;text-align: left;cursor:pointer;\">{{Property.Value}}</div></th>\r\n          </tr>\r\n        </table>\r\n\t  </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"&nbsp;&nbsp;&nbsp;&nbsp;Key&nbsp;&nbsp;&nbsp;&nbsp;\" >\r\n  \t  <div id=\"KeyView\" style=\"margin-left: 5px;margin-top: 5px;\">\r\n        <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\">\r\n          <tr *ngFor=\"let Key of ColorKey\">\r\n            <th  style=\"width: 40px;\"><div [ngStyle]=\"{ 'background-color': Key.color}\" >&nbsp;&nbsp;&nbsp;</div></th>\r\n            <th  style=\"font-size: 12px;font-weight: normal;color:#395d73;width: 130px;height: 14px\"><div matTooltip={{Key.text}}  style=\"width: 130px;height:14px;text-align: left;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;\">{{Key.text}}</div></th>\r\n          </tr>\r\n        </table>\r\n\t  </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"&nbsp;Settings&nbsp;\" >\r\n  \t  <div id=\"SettingView\" style=\"margin-left: 5px;margin-top: 5px;\">\r\n        <table>\r\n          <tr>\r\n          <th class=\"colorkey\" style=\"width: 80px\"><div class=\"Hide\" style=\"width: 80px;color:#395d73;border:0;text-align: left;font-weight: normal;\">Hide<input type=\"checkbox\" id=\"CheckHide\" [checked]=\"CheckHide\" (click)=\"changeHide();checkHide()\"></div></th>\r\n          <th><div>\r\n            <select class=\"cesium-button\" >\r\n              <option class=\"cesium-option\" >1</option>\r\n              <option class=\"cesium-option\">2</option>\r\n              <option class=\"cesium-option\" >3</option>\r\n              <option class=\"cesium-option\">4</option>\r\n            </select>\r\n          </div></th>\r\n          </tr>\r\n          <tr>\r\n          <th class=\"colorkey\" style=\"width: 80px\"><div class=\"Hide\" style=\"width: 80px;color:#395d73;border:0;text-align: left;font-weight: normal;\">Color</div></th>\r\n          <th><div>\r\n            <select class=\"cesium-button\" (change)=\"onChangeColor($event.target.value)\">\r\n              <option class=\"cesium-option\"  *ngFor=\"let ColorName of ColorNames\" value={{ColorName}}>{{ColorName}}</option>\r\n            </select>\r\n          </div></th>\r\n          </tr>\r\n          <tr>\r\n          <th class=\"colorkey\" style=\"width: 80px\"><div class=\"Hide\" style=\"width: 80px;color:#395d73;border:0;text-align: left;font-weight: normal;\">Height</div></th>\r\n          <th><div>\r\n            <select class=\"cesium-button\" (change)=\"onChangeHeight($event.target.value)\">\r\n               <option class=\"cesium-option\"  *ngFor=\"let Height of HeightKey\" value={{Height}}>{{Height}}</option>\r\n            </select>\r\n          </div></th>\r\n          </tr>\r\n        </table>\r\n        <table>\r\n          <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#395d73;font-weight: normal;text-align: left;border:0;\">Min</div></th>\r\n          <th style=\"width:80px;height: 25px;\"><div style=\"width:80px;color:#395d73;font-weight: normal;text-align: left;border:0;\">{{Min}}</div></th></tr>  \r\n          </table>\r\n          <table >\r\n          <tr ><th style=\"width:80px;\"><div style=\"width: 80px;color:#395d73;font-weight: normal;text-align: left;border:0;\">Max</div></th>\r\n          <th style=\"width:80px;\"><div style=\"width: 80px;color:#395d73;font-weight: normal;text-align: left;border:0;\">{{Max}}</div></th></tr>\r\n      </table>\r\n\t    </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</div>"

/***/ }),

/***/ "./src/app/mobius-cesium/toolwindow/toolwindow.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolwindowComponent; });
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


var ToolwindowComponent = /** @class */ (function (_super) {
    __extends(ToolwindowComponent, _super);
    function ToolwindowComponent(injector, myElement) {
        var _this = _super.call(this, injector) || this;
        _this.ColorStore = ["LIGHTCORAL", "RED", "CORAL", "CRIMSON", "ROYALBLUE", "AQUA", "BROWN", "CADETBLUE", "CHARTREUSE",
            "DARKORCHID", "DARKRED", "DARKSEAGREEN", "DARKTURQUOISE", "DEEPPINK", "FORESTGREEN", "GOLDENROD", "CRIMSON", "CRIMSON"];
        return _this;
    }
    ToolwindowComponent.prototype.ngOnInit = function () {
        if (this.CheckHide == undefined) {
            this.CheckHide = false;
        }
        else {
            this.CheckHide = this.dataService.CheckHide;
        }
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
                this.onChangeColor(this.ColorValue);
            }
            if (this.HeightValue !== this.dataService.HeightValue) {
                this.HeightValue = this.dataService.HeightValue;
                this.HeightKey = this.dataService.HeightKey;
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
        if (this.CheckHide === true)
            this.Hide();
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
            var Colortext = [">=" + (min + 0.8 * (max - min)).toFixed(2), (min + 0.8 * (max - min)).toFixed(2) + " - " + (min + 0.6 * (max - min)).toFixed(2), (min + 0.6 * (max - min)).toFixed(2) + " - " + (min + 0.4 * (max - min)).toFixed(2),
                (min + 0.4 * (max - min)).toFixed(2) + " - " + (min + 0.2 * (max - min)).toFixed(2), "<=" + (min + 0.2 * (max - min)).toFixed(2)];
            for (var j = 0; j < Colortext.length; j++) {
                var ColorKey = [];
                ColorKey.text = Colortext[j];
                ColorKey.color = this.ColorStore[j];
                this.ColorKey.push(ColorKey);
            }
            this.dataService.Colortexts = this.ColorKey;
            this.dataService.MaxColor = max;
            this.dataService.MinColor = min;
            this.colorByNum();
        }
        else {
            for (var j = 0; j < texts.length; j++) {
                var ColorKey = [];
                ColorKey.text = texts[j];
                ColorKey.color = this.ColorStore[j];
                this.ColorKey.push(ColorKey);
            }
            this.dataService.Colortexts = this.ColorKey;
            this.colorByCat();
        }
        if (this.CheckHide === true)
            this.Hide();
        this.dataService.getColorValue(this.ColorValue);
    };
    ToolwindowComponent.prototype.colorByNum = function () {
        var max = Math.max.apply(Math, this.texts);
        var min = Math.min.apply(Math, this.texts);
        var promise = this.dataService.cesiumpromise;
        var self = this;
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];
                if (entity.properties[self.ColorValue] !== undefined) {
                    if (entity.properties[self.ColorValue] >= min + 0.8 * (max - min))
                        entity.polygon.material = Cesium.Color.LIGHTCORAL.withAlpha(1);
                    else if (entity.properties[self.ColorValue] >= min + 0.6 * (max - min))
                        entity.polygon.material = Cesium.Color.RED.withAlpha(1);
                    else if (entity.properties[self.ColorValue] >= min + 0.4 * (max - min))
                        entity.polygon.material = Cesium.Color.CORAL.withAlpha(1);
                    else if (entity.properties[self.ColorValue] >= min + 0.2 * (max - min))
                        entity.polygon.material = Cesium.Color.CRIMSON.withAlpha(1);
                    else {
                        entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
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
        var promise = this.dataService.cesiumpromise;
        promise.then(function (dataSource) {
            var self = this;
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];
                if (entity.properties[Name]._value === texts[0]) {
                    entity.polygon.material = Cesium.Color.LIGHTCORAL.withAlpha(1);
                }
                else if (entity.properties[Name]._value === texts[1]) {
                    entity.polygon.material = Cesium.Color.RED.withAlpha(1);
                }
                else if (entity.properties[Name]._value === texts[2]) {
                    entity.polygon.material = Cesium.Color.CORAL.withAlpha(1);
                }
                else if (entity.properties[Name]._value === texts[3]) {
                    entity.polygon.material = Cesium.Color.CRIMSON.withAlpha(1);
                }
                else if (entity.properties[Name]._value === texts[4]) {
                    entity.polygon.material = Cesium.Color.ROYALBLUE.withAlpha(1);
                }
                else if (entity.properties[Name]._value === texts[5]) {
                    entity.polygon.material = Cesium.Color.AQUA.withAlpha(1);
                }
                else if (entity.properties[Name]._value === texts[6]) {
                    entity.polygon.material = Cesium.Color.BROWN.withAlpha(1);
                }
                else if (entity.properties[Name]._value === texts[7]) {
                    entity.polygon.material = Cesium.Color.CADETBLUE.withAlpha(1);
                }
                else if (entity.properties[Name]._value === texts[8]) {
                    entity.polygon.material = Cesium.Color.CHARTREUSE.withAlpha(1);
                }
                else if (entity.properties[Name]._value === texts[9]) {
                    entity.polygon.material = Cesium.Color.DARKORCHID.withAlpha(1);
                }
                else if (entity.properties[Name]._value === texts[10]) {
                    entity.polygon.material = Cesium.Color.DARKRED.withAlpha(1);
                }
                else if (entity.properties[Name]._value === texts[11]) {
                    entity.polygon.material = Cesium.Color.DARKSEAGREEN.withAlpha(1);
                }
                else if (entity.properties[Name]._value === texts[12]) {
                    entity.polygon.material = Cesium.Color.DARKTURQUOISE.withAlpha(1);
                }
                else if (entity.properties[Name]._value === texts[13]) {
                    entity.polygon.material = Cesium.Color.DEEPPINK.withAlpha(1);
                }
                else if (entity.properties[Name]._value === texts[14]) {
                    entity.polygon.material = Cesium.Color.FORESTGREEN.withAlpha(1);
                }
                else if (entity.properties[Name]._value === texts[15]) {
                    entity.polygon.material = Cesium.Color.GOLDENROD.withAlpha(1);
                }
                else if (entity.properties[Name]._value === texts[16]) {
                    entity.polygon.material = Cesium.Color.CRIMSON.withAlpha(1);
                }
                else if (entity.properties[Name]._value === texts[17]) {
                    entity.polygon.material = Cesium.Color.CRIMSON.withAlpha(1);
                }
                else {
                    entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                }
            }
        });
    };
    ToolwindowComponent.prototype.checkHide = function () {
        if (this.CheckHide === true) {
            this.Hide();
        }
        else {
            this.onChangeHeight(this.HeightValue);
            this.onChangeColor(this.ColorValue);
        }
        this.dataService.CheckHide = this.CheckHide;
    };
    ToolwindowComponent.prototype.Hide = function () {
        var promise = this.dataService.cesiumpromise;
        var self = this;
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];
                if (entity.properties.HIDE._value !== undefined && entity.properties.HIDE._value === 1) {
                    entity.polygon.extrudedHeight = 0;
                    entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                }
            }
        });
    };
    ToolwindowComponent.prototype.changeHide = function () {
        this.CheckHide = !this.CheckHide;
        this.dataService.CheckHide = this.CheckHide;
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

module.exports = "<div id=\"cesiumContainer\" (click)=\"select()\">\r\n\t<!-- <div id=\"ColorandHeight\">\r\n\t\t<div id=\"toolbar\">\r\n\t\t<div id=\"Hidediv\" style=\"width: 110px;height:83px;display:inline-block;border-style: solid;border-color:#395D73;word-wrap:break-word;overflow: hidden !important;text-overflow: ellipsis !important;table-layout:fixed !important;white-space: nowrap !important;\">\r\n\t\t\t<table><tr>\r\n\t\t\t\t\t<th class=\"colorkey\" style=\"width: 100%\"><div class=\"Hide\" style=\"width: 110px;color:white;text-shadow: 0px 0px 3px black;border:0;text-align: left;background: transparent;\">Seleted<input type=\"checkbox\" id=\"CheckHide\" [checked]=\"CheckHide\" (click)=\"changeHide();checkHide()\"></div></th>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th class=\"colorkey\" style=\"width: 100%\"><div class=\"Hide\" style=\"width: 110px;color:white;text-shadow: 0px 0px 3px black;border:0;text-align: left;background: transparent;\">Committed<input type=\"checkbox\" id=\"CheckHide\" [checked]=\"CheckCom\" (click)=\"changeCom();checkHide()\"></div></th>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th class=\"colorkey\" style=\"width: 100%\"><div class=\"Hide\" style=\"width: 110px;color:white;text-shadow: 0px 0px 3px black;border:0;text-align: left;background: transparent;\">Occupied<input type=\"checkbox\" id=\"CheckHide\" [checked]=\"CheckOcc\" (click)=\"changeOcc();checkHide()\"></div></th>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t\t<div style=\"width: calc(100% - 345px);display:inline-block;border-style: solid;border-color:#395D73;word-wrap:break-word;overflow: hidden !important;text-overflow: ellipsis !important;table-layout:fixed !important;white-space: nowrap !important;\">\r\n\t\t<div style=\"width: 80px;display:inline-block;height:80px;word-wrap:break-word;\">\r\n\t\t\t<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\">\r\n\t\t\t\t<tr >\r\n          \t\t<td ><div class=\"Hide\" style=\"text-align: left;border:0;background-color:transparent;color:white;text-shadow: 0px 0px 3px black;\">Color</div></td>\r\n          \t\t</tr>\r\n\t\t\t\t<tr>\r\n          \t\t<th><div>\r\n\t\t\t\t<select class=\"cesium-button\" (change)=\"onChangeColor($event.target.value)\">\r\n\t\t\t\t\t<option class=\"cesium-option\"  *ngFor=\"let propertyName of propertyNames\" value={{propertyName}}>{{propertyName}}</option>\r\n\t\t\t\t\t<option class=\"cesium-option\" value=\"Status_Cat\">Status_Cat</option>\r\n\t\t\t\t\t<option class=\"cesium-option\" value=\"DIST_EWL\">DIST_EWL</option>\r\n\t\t\t\t\t<option class=\"cesium-option\" value=\"DIST_TRUNK\">DIST_TRUNK</option>\r\n\t\t\t\t\t<option class=\"cesium-option\" value=\"AVAILABLE\">AVAILABLE</option>\r\n\t\t\t\t\t<option class=\"cesium-option\" value=\"AGG_POT\">AGG_POT</option>\r\n\t\t\t\t\t<option class=\"cesium-option\" value=\"GPR\">GPR</option>\r\n\t\t\t\t\t<option class=\"cesium-option\" value=\"HB_LIMIT\">HB_LIMIT</option> -->\r\n\t\t\t\t<!-- </select>\r\n\t\t\t\t</div></th>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t\t<div id=\"color\" style=\"width:calc(100% - 90px);display:inline-block;position: relative;height:80px;word-wrap:break-word;\">\r\n\t\t\t<table style=\"width: 100%\">\r\n\t\t\t\t<tr >\r\n          \t\t<td *ngFor=\"let Color of Colors\" style=\"width: 40px;\"><div [ngStyle]=\"{ 'background-color': Color}\" >&nbsp;&nbsp;&nbsp;</div></td>\r\n          \t\t</tr>\r\n          \t\t<tr >\r\n          \t\t<td class=\"colorkey\" *ngFor=\"let text of texts\" style=\"width: 40px;\"><div class=\"table_text\">{{text}}</div></td>\r\n          \t\t</tr>\r\n\t\t\t</table>\r\n\t\t</div> \r\n\t\t</div>\r\n\t\t<div style=\"width: 200px;display:inline-block;border-style: solid;border-color:#395D73;word-wrap:break-word;overflow: hidden !important;text-overflow: ellipsis !important;table-layout:fixed !important;white-space: nowrap !important;\">\r\n\t\t<div style=\"width: 80px;display:inline-block;position: relative;height:80px;word-wrap:break-word;\">\r\n\t\t\t<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\">\r\n\t\t\t\t<tr >\r\n          \t\t<td ><div class=\"Hide\" style=\"text-align: left;border:0;background-color:transparent;color:white;text-shadow: 0px 0px 3px black;\">Height</div></td>\r\n          \t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t<tr>\r\n\t          \t<th><div >\r\n\t\t\t\t<select class=\"cesium-button\" (change)=\"onChangeHeight($event.target.value)\">\r\n\t\t\t\t\t<option class=\"cesium-option\"  *ngFor=\"let propertyName of propertyNames\" value={{propertyName}}>{{propertyName}}</option> -->\r\n\t\t\t\t\t<!-- <option class=\"cesium-option\" value=\"Status_Cat\">Status_Cat</option>\r\n\t\t\t\t\t<option class=\"cesium-option\" value=\"DIST_EWL\">DIST_EWL</option>\r\n\t\t\t\t\t<option class=\"cesium-option\" value=\"DIST_TRUNK\">DIST_TRUNK</option>\r\n\t\t\t\t\t<option class=\"cesium-option\" value=\"AVAILABLE\">AVAILABLE</option>\r\n\t\t\t\t\t<option class=\"cesium-option\" value=\"AGG_POT\">AGG_POT</option>\r\n\t\t\t\t\t<option class=\"cesium-option\" value=\"GPR\">GPR</option>\r\n\t\t\t\t\t<option class=\"cesium-option\" value=\"HB_LIMIT\">HB_LIMIT</option> -->\r\n\t\t<!-- \t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t</th>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t\t<div style=\"width: 100px;display:inline-block;position: relative;color:white;height:80px\">\r\n\t\t\t<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" style=\"width: 100%;height: 25px\">\r\n\t\t\t<tr ><th style=\"width:50px;\"><div style=\"width: 100%;color:white;text-shadow: 0px 0px 3px black;font-weight: normal;text-align: left;\">Min</div></th>\r\n\t\t\t<th style=\"width:50px;\"><div style=\"width:100%;color:white;text-shadow: 0px 0px 3px black;font-weight: normal;text-align: left;\">{{Minimum}}</div></th></tr>\t\r\n\t\t\t</table>\r\n\t\t\t<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" style=\"width: 100%;height: 25px;\">\r\n\t\t\t<tr ><th style=\"width:50px;\"><div style=\"width: 100%;color:white;text-shadow: 0px 0px 3px black;font-weight: normal;text-align: left;\">Max</div></th>\r\n\t\t\t<th style=\"width:50px;\"><div style=\"width: 100%;color:white;text-shadow: 0px 0px 3px black;font-weight: normal;text-align: left;\">{{Maximum}}</div></th></tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n\t</div> -->\r\n</div>"

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
        //this.ColorValue="Status_Cat";
        //this.HeightValue="HB_LIMIT";
        /*if(this.ColorValue == undefined) {
            this.ColorValue = "Status_Cat";
        } else {
          this.ColorValue=this.dataService.ColorValue;
        }
        if(this.HeightValue == undefined) {
            this.HeightValue = "Status_Cat";
        } else {
          this.HeightValue=this.dataService.HeightValue;
        }
        if(this.CheckHide == undefined) {
            this.CheckHide = false;
        } else {
          this.CheckHide=this.dataService.CheckHide;
        }
        if(this.CheckCom == undefined) {
            this.CheckCom = false;
        } else {
          this.CheckCom=this.dataService.CheckCom;
        }
        if(this.CheckOcc == undefined) {
            this.CheckOcc = false;
        } else {
          this.CheckOcc=this.dataService.CheckOcc;
        }*/
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
        this.ColorValue = this.propertyNames[0];
        this.HeightValue = HeightKey[0];
        this.dataService.ColorValue = this.ColorValue;
        this.dataService.HeightValue = this.HeightValue;
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
        for (var i = 0; i < this.propertyNames.length; i++) {
            if (this.ColorValue === this.propertyNames[i]) {
                if (typeof (entity.properties[this.ColorValue]._value) === "number") {
                    var max = this.dataService.MaxColor;
                    var min = this.dataService.MinColor;
                    if (entity.properties[this.ColorValue] >= min + 0.8 * (max - min))
                        entity.polygon.material = Cesium.Color.LIGHTCORAL.withAlpha(1);
                    else if (entity.properties[this.ColorValue] >= min + 0.6 * (max - min))
                        entity.polygon.material = Cesium.Color.RED.withAlpha(1);
                    else if (entity.properties[this.ColorValue] >= min + 0.4 * (max - min))
                        entity.polygon.material = Cesium.Color.CORAL.withAlpha(1);
                    else if (entity.properties[this.ColorValue] >= min + 0.2 * (max - min))
                        entity.polygon.material = Cesium.Color.CRIMSON.withAlpha(1);
                    else {
                        entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                    }
                }
                else {
                    var Colortexts = this.dataService.Colortexts;
                    var intitial = true;
                    for (var j = 0; j < Colortexts.length; j++) {
                        if (entity.properties[this.ColorValue]._value === Colortexts[j].text) {
                            var color = Colortexts[j].color;
                            entity.polygon.material = Cesium.Color[color].withAlpha(1);
                            intitial = false;
                        }
                    }
                    if (intitial === true) {
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

/*onChangeColor(ColorValue){
  this.ColorValue=ColorValue;*/
/*if(this.ColorValue==="Status_Cat"||undefined){
  this.colorByStatus_Cat(this.cesiumpromise,this.cesiumviewer);
}else if(this.ColorValue==="DIST_EWL"){
  this.colorByDIST_EWL(this.cesiumpromise,this.cesiumviewer);
}else if(this.ColorValue==="DIST_TRUNK"){
  this.colorByDIST_TRUNK(this.cesiumpromise,this.cesiumviewer);
}else if(this.ColorValue==="AVAILABLE"){
  this.colorByAVAILABLE(this.cesiumpromise,this.cesiumviewer);
}else if(this.ColorValue==="AGG_POT"){
  this.colorByAGG_POT(this.cesiumpromise,this.cesiumviewer);
}else if(this.ColorValue==="GPR"){
  this.colorByGPR(this.cesiumpromise,this.cesiumviewer);
}else if(this.ColorValue==="HB_LIMIT"){
  this.colorByHB_LIMIT(this.cesiumpromise,this.cesiumviewer);
}*/
/*var texts=[];
this.texts=[];
this.Colors=[];
for(var j=0;j<this.propertyNames.length;j++){
  if(this.ColorValue===this.propertyNames[j]){
    this.Name=this.propertyNames[j];
    var self= this;
    this.cesiumpromise.then(function(dataSource) {
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if(entity.properties[self.Name]!==undefined){
          if(entity.properties[self.Name]._value!==" "){
            if(texts.length===0) {texts[0]=entity.properties[self.Name]._value;}
            else{if(texts.indexOf(entity.properties[self.Name]._value)===-1) texts.push(entity.properties[self.Name]._value);}
            }
          }
        }
    });
  }
}
for(var j=0;j<texts.length;j++){
  this.Colors.push(this.ColorStore[j]);
}
this.texts=texts;
if(typeof(texts[0])==="number") {
  this.colorByNum();
}else{this.colorByCat();}
if(this.CheckHide===true) this.Hide();
if(this.CheckCom===true) this.Commited();
if(this.CheckOcc===true) this.Occupied();
this.dataService.getColorValue(this.ColorValue);
}
colorByCat(){
var Name=this.ColorValue;
var texts=this.texts;
this.cesiumpromise.then(function(dataSource) {
  var self= this;
  var entities = dataSource.entities.values;
  for (var i = 0; i < entities.length; i++) {
    var entity = entities[i];
    if(entity.properties[Name]._value===texts[0]){ entity.polygon.material=Cesium.Color.LIGHTCORAL.withAlpha(1);}
    else if(entity.properties[Name]._value===texts[1]){ entity.polygon.material=Cesium.Color.RED.withAlpha(1);}
    else if(entity.properties[Name]._value===texts[2]){ entity.polygon.material=Cesium.Color.CORAL.withAlpha(1);}
    else if(entity.properties[Name]._value===texts[3]){ entity.polygon.material=Cesium.Color.CRIMSON.withAlpha(1);}
    else if(entity.properties[Name]._value===texts[4]){ entity.polygon.material=Cesium.Color.ROYALBLUE.withAlpha(1);}
    else if(entity.properties[Name]._value===texts[5]){ entity.polygon.material=Cesium.Color.AQUA.withAlpha(1);}
    else if(entity.properties[Name]._value===texts[6]){ entity.polygon.material=Cesium.Color.BROWN.withAlpha(1);}
    else if(entity.properties[Name]._value===texts[7]){ entity.polygon.material=Cesium.Color.CADETBLUE.withAlpha(1);}
    else if(entity.properties[Name]._value===texts[8]){ entity.polygon.material=Cesium.Color.CHARTREUSE.withAlpha(1);}
    else if(entity.properties[Name]._value===texts[9]){ entity.polygon.material=Cesium.Color.DARKORCHID.withAlpha(1);}
    else if(entity.properties[Name]._value===texts[10]){ entity.polygon.material=Cesium.Color.DARKTURQUOISE.withAlpha(1);}
    else if(entity.properties[Name]._value===texts[11]){ entity.polygon.material=Cesium.Color.DEEPPINK.withAlpha(1);}
    else if(entity.properties[Name]._value===texts[12]){ entity.polygon.material=Cesium.Color.FORESTGREEN.withAlpha(1);}
    else if(entity.properties[Name]._value===texts[13]){ entity.polygon.material=Cesium.Color.GOLDENROD.withAlpha(1);}
    else{entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
  }
});
}


colorByNum(){
var max = Math.max.apply(Math, this.texts);
var min = Math.min.apply(Math, this.texts);
console.log(max,min);

}

colorByStatus_Cat(promise,viewer) {
this.Colors=["lightcoral","red","coral","crimson","ROYALBLUE","lightslategray"];
this.texts=["Available","Prime","Remnant","Estate under active master / infra planning","Others","0 OR NULL"];
promise.then(function(dataSource) {
  var entities = dataSource.entities.values;
  for (var i = 0; i < entities.length; i++) {
    var entity = entities[i];
      if(entity.properties.Status_Cat!==undefined){
        if(entity.properties.Status_Cat._value==="Available") entity.polygon.material=Cesium.Color.LIGHTCORAL.withAlpha(1);
        else if(entity.properties.Status_Cat._value==="Prime") entity.polygon.material=Cesium.Color.RED.withAlpha(1);
        else if(entity.properties.Status_Cat._value==="Remnant") entity.polygon.material=Cesium.Color.CORAL.withAlpha(1);
        else if(entity.properties.Status_Cat._value==="Estate under active master / infra planning") entity.polygon.material=Cesium.Color.CRIMSON.withAlpha(1);
        else if(entity.properties.Status_Cat._value==="0"||null) entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
        else {entity.polygon.material=Cesium.Color.ROYALBLUE.withAlpha(1);}
      }
  }
});


}

colorByDIST_TRUNK(promise,viewer) {
this.Colors=["DARKCYAN","MEDIUMTURQUOISE","KHAKI","GOLD","CORAL","LIGHTSLATEGRAY"];
this.texts=[">= 239","238 - 151","150 - 96","95 - 61","<= 60","0 OR NULL"];
promise.then(function(dataSource) {
  var entities = dataSource.entities.values;
  for (var i = 0; i < entities.length; i++) {
    var entity = entities[i];
      if(entity.properties.DIST_TRUNK!==undefined){
        if(entity.properties.DIST_TRUNK>=239) entity.polygon.material=Cesium.Color.DARKCYAN .withAlpha(1);
        else if(entity.properties.DIST_TRUNK>=151) entity.polygon.material=Cesium.Color.MEDIUMTURQUOISE.withAlpha(1);
        else if(entity.properties.DIST_TRUNK>=96) entity.polygon.material=Cesium.Color.KHAKI.withAlpha(1);
        else if(entity.properties.DIST_TRUNK>=61) entity.polygon.material=Cesium.Color.GOLD.withAlpha(1);
        else if(entity.properties.DIST_TRUNK===0||null) entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
        else entity.polygon.material=Cesium.Color.CORAL.withAlpha(1);
      }
  }
});
}

colorByDIST_EWL(promise,viewer) {
this.Colors=["DARKCYAN","MEDIUMTURQUOISE","KHAKI","GOLD","CORAL","LIGHTSLATEGRAY"];
this.texts=[">= 715","714 - 451","450 - 286","285 - 181","<= 180","0 OR NULL"];
promise.then(function(dataSource) {
  var entities = dataSource.entities.values;
  for (var i = 0; i < entities.length; i++) {
    var entity = entities[i];
      if(entity.properties.DIST_EWL!==undefined){
        if(entity.properties.DIST_EWL>=715) entity.polygon.material=Cesium.Color.DARKCYAN .withAlpha(1);
        else if(entity.properties.DIST_EWL>=451) entity.polygon.material=Cesium.Color.MEDIUMTURQUOISE.withAlpha(1);
        else if(entity.properties.DIST_EWL>=286) entity.polygon.material=Cesium.Color.KHAKI.withAlpha(1);
        else if(entity.properties.DIST_EWL>=181) entity.polygon.material=Cesium.Color.GOLD.withAlpha(1);
        else if(entity.properties.DIST_EWL===0||null) entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
        else entity.polygon.material=Cesium.Color.CORAL.withAlpha(1);
      }
  }
});
}

colorByAVAILABLE(promise,viewer) {
this.Colors=["RED","ROYALBLUE","LIGHTSLATEGRAY"];
this.texts=["AVAILABLE","COMMITTED","OCCUPIED"];
promise.then(function(dataSource) {
  var entities = dataSource.entities.values;
  for (var i = 0; i < entities.length; i++) {
    var entity = entities[i];
      if(entity.properties.AVAILABLE!==undefined){
        if(entity.properties.AVAILABLE._value==="AVAILABLE") entity.polygon.material=Cesium.Color.RED.withAlpha(1);
        else if(entity.properties.AVAILABLE._value==="COMMITTED") entity.polygon.material=Cesium.Color.ROYALBLUE.withAlpha(1);
        else if(entity.properties.AVAILABLE._value==="OCCUPIED") entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
      }
  }
});
}

colorByAGG_POT(promise,viewer) {
this.Colors=["CORAL","GOLD","KHAKI","MEDIUMTURQUOISE","DARKCYAN","LIGHTSLATEGRAY"];
this.texts=[">= 0.79","0.789 - 0.67","0.669 - 0.56","0.559 - 0.38","<= 0.379","0 OR NULL"];
promise.then(function(dataSource) {
  var entities = dataSource.entities.values;
  for (var i = 0; i < entities.length; i++) {
    var entity = entities[i];
      if(entity.properties.AGG_POT!==undefined){
        if(entity.properties.AGG_POT>=0.79) entity.polygon.material=Cesium.Color.CORAL .withAlpha(1);
        else if(entity.properties.AGG_POT>=0.67) entity.polygon.material=Cesium.Color.GOLD.withAlpha(1);
        else if(entity.properties.AGG_POT>=0.56) entity.polygon.material=Cesium.Color.KHAKI.withAlpha(1);
        else if(entity.properties.AGG_POT>=0.38) entity.polygon.material=Cesium.Color.MEDIUMTURQUOISE.withAlpha(1);
        else if(entity.properties.AGG_POT===0||null) entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
        else entity.polygon.material=Cesium.Color.DARKCYAN.withAlpha(1);
      }
  }
});
}

colorByGPR(promise,viewer) {
this.Colors=["YELLOW","DARKORANGE","RED","LIGHTSLATEGRAY"];
this.texts=["0.9 - 1.7","2.0 - 2.8","3.0 - 3.5","0 OR NULL"];
promise.then(function(dataSource) {
  var entities = dataSource.entities.values;
  for (var i = 0; i < entities.length; i++) {
    var entity = entities[i];
    if(entity.properties.GPR!==undefined){
      if(entity.properties.GPR._value==="0.0"||entity.properties.GPR._value===0.0||entity.properties.GPR._value===0||entity.properties.GPR._value===null) entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
      else if(entity.properties.GPR._value==="0.9"||entity.properties.GPR._value===0.9||entity.properties.GPR._value==="1.0"||entity.properties.GPR._value==="1"||entity.properties.GPR._value===1.0||entity.properties.GPR._value===1
        ||entity.properties.GPR._value==="1.4"||entity.properties.GPR._value===1.4||entity.properties.GPR._value==="1.7"||entity.properties.GPR._value===1.7)
        entity.polygon.material=Cesium.Color.YELLOW.withAlpha(1);
      else if(entity.properties.GPR._value==="2"||entity.properties.GPR._value==="2.0"||entity.properties.GPR._value===2.0||entity.properties.GPR._value===2||entity.properties.GPR._value==="2.1"||entity.properties.GPR._value===2.1||
        entity.properties.GPR._value==="2.3"||entity.properties.GPR._value===2.3||entity.properties.GPR._value==="2.5"||entity.properties.GPR._value===2.5||
        entity.properties.GPR._value==="2.8"||entity.properties.GPR._value===2.8) entity.polygon.material=Cesium.Color.DARKORANGE.withAlpha(1);
      else if(entity.properties.GPR._value==="3.0"||entity.properties.GPR._value==="3"||entity.properties.GPR._value===3.0||entity.properties.GPR._value===3||entity.properties.GPR._value==="3.2"||entity.properties.GPR._value===3.2||
        entity.properties.GPR._value==="3.5"||entity.properties.GPR._value===3.5) entity.polygon.material=Cesium.Color.RED.withAlpha(1);
      else {entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
    }
  }
});
}

colorByHB_LIMIT(promise,viewer) {
this.Colors=["RED","ORANGERED","DARKORANGE","YELLOW","LIGHTSLATEGRAY"];
this.texts=[">= 93","92 - 86","85 - 77","76 - 63","<= 62"];
promise.then(function(dataSource) {
  var entities = dataSource.entities.values;
  for (var i = 0; i < entities.length; i++) {
    var entity = entities[i];
      if(entity.properties.HB_LIMIT!==undefined){
        if(entity.properties.HB_LIMIT>=93) entity.polygon.material=Cesium.Color.RED.withAlpha(1);
        else if(entity.properties.HB_LIMIT>=86) entity.polygon.material=Cesium.Color.ORANGERED.withAlpha(1);
        else if(entity.properties.HB_LIMIT>=77) entity.polygon.material=Cesium.Color.DARKORANGE.withAlpha(1);
        else if(entity.properties.HB_LIMIT>=63) entity.polygon.material=Cesium.Color.YELLOW.withAlpha(1);
        else if(entity.properties.HB_LIMIT===0||null) entity.polygon.material=Cesium.Color.WHITE.withAlpha(1);
        else entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
      }
  }
});
}

onChangeHeight(HeightValue){
this.HeightValue=HeightValue;
if(this.HeightValue==="Status_Cat"){
  this.HeightByStatus_Cat(this.cesiumpromise,this.cesiumviewer);
}else if(this.HeightValue==="DIST_EWL"){
  this.HeightByDIST_EWL(this.cesiumpromise,this.cesiumviewer);
}else if(this.HeightValue==="DIST_TRUNK"){
  this.HeightByDIST_TRUNK(this.cesiumpromise,this.cesiumviewer);
}else if(this.HeightValue==="AVAILABLE"){
  this.HeightByAVAILABLE(this.cesiumpromise,this.cesiumviewer);
}else if(this.HeightValue==="AGG_POT"){
  this.HeightByAGG_POT(this.cesiumpromise,this.cesiumviewer);
}else if(this.HeightValue==="GPR"){
  this.HeightByGPR(this.cesiumpromise,this.cesiumviewer);
}else if(this.HeightValue==="HB_LIMIT"){
  this.HeightByHB_LIMIT(this.cesiumpromise,this.cesiumviewer);
}
if(this.CheckHide===true) this.Hide();
if(this.CheckCom===true) this.Commited();
if(this.CheckOcc===true) this.Occupied();
this.dataService.getHeightValue(this.HeightValue);
}

HeightByStatus_Cat(promise,viewer) {
this.Maximum=500;
this.Minimum=25;
promise.then(function(dataSource) {
  var entities = dataSource.entities.values;
  for (var i = 0; i < entities.length; i++) {
    var entity = entities[i];
    //if(entity.properties.TRANSPAREN._value===1){
      if(entity.properties.Status_Cat!==undefined){
        if(entity.properties.Status_Cat._value==="Available") entity.polygon.extrudedHeight = 100*5;
        else if(entity.properties.Status_Cat._value==="Prime") entity.polygon.extrudedHeight = 100*5;
        else if(entity.properties.Status_Cat._value==="Remnant") entity.polygon.extrudedHeight = 100*5;
        else if(entity.properties.Status_Cat._value==="Estate under active master / infra planning") entity.polygon.extrudedHeight = 100*5;
        else if(entity.properties.Status_Cat._value==="0"||null) entity.polygon.extrudedHeight = 5*5;
        else{entity.polygon.extrudedHeight = 50*5;}*/
/*var center = Cesium.BoundingSphere.fromPoints(entity.polygon.hierarchy.getValue().positions).center;
center=Cesium.Ellipsoid.WGS84.scaleToGeodeticSurface(center, center);
viewer.entities.add({
    name : 'Glowing blue line on the surface',
    polyline : {
        positions : Cesium.Cartesian3.fromDegreesArrayHeights([103.63626290332934,1.3333570541789537,0,
                                                        103.63660236586097,1.33303363743232,1000]),

        width : 10,
        material : new Cesium.PolylineGlowMaterialProperty({
            glowPower : 0.2,
            color : Cesium.Color.BLUE
        })
    }
});
viewer.zoomTo(viewer.entities);*/
/* }
}
});
}*/
/*HeightByDIST_EWL(promise,viewer) {
  this.Maximum=1500;
  this.Minimum=25;
  promise.then(function(dataSource) {
    var entities = dataSource.entities.values;
    for (var i = 0; i < entities.length; i++) {
      var entity = entities[i];
        if(entity.properties.DIST_EWL!==undefined){
          if(entity.properties.DIST_EWL>=715) entity.polygon.extrudedHeight = 5*5;
          else if(entity.properties.DIST_EWL>=451) entity.polygon.extrudedHeight = 20*5;
          else if(entity.properties.DIST_EWL>=286) entity.polygon.extrudedHeight = 50*5;
          else if(entity.properties.DIST_EWL>=181) entity.polygon.extrudedHeight = 80*5;
          else if(entity.properties.DIST_EWL===0||null) entity.polygon.extrudedHeight = 5*5;
          else entity.polygon.extrudedHeight = 100*5;
        }
    }
  });
}

HeightByDIST_TRUNK(promise,viewer) {
  this.Maximum=500;
  this.Minimum=25;
  promise.then(function(dataSource) {
    var entities = dataSource.entities.values;
    for (var i = 0; i < entities.length; i++) {
      var entity = entities[i];
        if(entity.properties.DIST_TRUNK!==undefined){
          if(entity.properties.DIST_TRUNK>=239) entity.polygon.extrudedHeight = 5*5;
          else if(entity.properties.DIST_TRUNK>=151) entity.polygon.extrudedHeight = 20*5;
          else if(entity.properties.DIST_TRUNK>=96) entity.polygon.extrudedHeight = 50*5;
          else if(entity.properties.DIST_TRUNK>=61) entity.polygon.extrudedHeight = 80*5;
          else if(entity.properties.DIST_TRUNK===0||null) entity.polygon.extrudedHeight = 5*5;
          else entity.polygon.extrudedHeight = 100*5;
        }
    }
  });
}

HeightByAVAILABLE(promise,viewer) {
  this.Maximum=500;
  this.Minimum=25;
  promise.then(function(dataSource) {
    var entities = dataSource.entities.values;
    for (var i = 0; i < entities.length; i++) {
      var entity = entities[i];
        if(entity.properties.AVAILABLE!==undefined){
          if(entity.properties.AVAILABLE._value==="AVAILABLE") entity.polygon.extrudedHeight = 100*5;
          else if(entity.properties.AVAILABLE._value==="COMMITTED") entity.polygon.extrudedHeight = 50*5;
          else{entity.polygon.extrudedHeight = 5*5;}
        }
    }
  });
}

HeightByAGG_POT(promise,viewer) {
  this.Maximum=500;
  this.Minimum=25;
  promise.then(function(dataSource) {
    var entities = dataSource.entities.values;
    for (var i = 0; i < entities.length; i++) {
      var entity = entities[i];
        if(entity.properties.AGG_POT!==undefined){
          if(entity.properties.AGG_POT>=0.79) entity.polygon.extrudedHeight = 100*5;
          else if(entity.properties.AGG_POT>=0.67) entity.polygon.extrudedHeight = 80*5;
          else if(entity.properties.AGG_POT>=0.56) entity.polygon.extrudedHeight = 50*5;
          else if(entity.properties.AGG_POT>=0.38) entity.polygon.extrudedHeight = 20*5;
          else if(entity.properties.AGG_POT===0||null) entity.polygon.extrudedHeight = 5*5;
          else {entity.polygon.extrudedHeight = 5*5;}
        }
    }
  });
}

HeightByGPR(promise,viewer) {
  this.Maximum=600;
  this.Minimum=25;
  promise.then(function(dataSource) {
    var entities = dataSource.entities.values;
    for (var i = 0; i < entities.length; i++) {
      var entity = entities[i];
      if(entity.properties.GPR!==undefined){
        if(entity.properties.GPR._value==="0.0"||entity.properties.GPR._value===null||entity.properties.GPR._value===0||entity.properties.GPR._value==="0")
          entity.polygon.extrudedHeight = 5*5;
        else if(entity.properties.GPR._value==="0.9"||entity.properties.GPR._value===0.9) entity.polygon.extrudedHeight = 9*5;
        else if(entity.properties.GPR._value==="1.0"||entity.properties.GPR._value===1.0||entity.properties.GPR._value===1||entity.properties.GPR._value==="1")
          entity.polygon.extrudedHeight = 10*5;
        else if(entity.properties.GPR._value==="1.4"||entity.properties.GPR._value===1.4) entity.polygon.extrudedHeight = 15*5;
        else if(entity.properties.GPR._value==="1.7"||entity.properties.GPR._value===1.7) entity.polygon.extrudedHeight = 30*5;
        else if(entity.properties.GPR._value==="2.0"||entity.properties.GPR._value===2.0||entity.properties.GPR._value===2||entity.properties.GPR._value==="2")
          entity.polygon.extrudedHeight = 60*5;
        else if(entity.properties.GPR._value==="2.1"||entity.properties.GPR._value===2.1) entity.polygon.extrudedHeight = 70*5;
        else if(entity.properties.GPR._value==="2.3"||entity.properties.GPR._value===2.3) entity.polygon.extrudedHeight = 85*5;
        else if(entity.properties.GPR._value==="2.5"||entity.properties.GPR._value===2.5) entity.polygon.extrudedHeight = 90*5;
        else if(entity.properties.GPR._value==="2.8"||entity.properties.GPR._value===2.8) entity.polygon.extrudedHeight = 95*5;
        else if(entity.properties.GPR._value==="3.0"||entity.properties.GPR._value===3.0||entity.properties.GPR._value===3||entity.properties.GPR._value==="3")
          entity.polygon.extrudedHeight = 105*5;
        else if(entity.properties.GPR._value==="3.2"||entity.properties.GPR._value===3.2) entity.polygon.extrudedHeight = 110*5;
        else if(entity.properties.GPR._value==="3.5"||entity.properties.GPR._value===3.5) entity.polygon.extrudedHeight = 120*5;
        else{entity.polygon.extrudedHeight = 30*5;}
      }else{entity.polygon.extrudedHeight = 5*5;}
    }
  });
}


HeightByHB_LIMIT(promise,viewer) {
  var height:Array<any>=[];
  this.Maximum=0;
  this.Minimum=0;
  var max:number=0;
  promise.then(function(dataSource) {
    var entities = dataSource.entities.values;
    for (var i = 0; i < entities.length; i++) {
      var entity = entities[i];
        if(entity.properties.HB_LIMIT!==undefined){
          entity.polygon.extrudedHeight = entity.properties.HB_LIMIT;
          height.push(Number(entity.properties.HB_LIMIT._value));
        }else{entity.polygon.extrudedHeight =0;}

    }
  });
  this.Maximum=Math.max(...height);
}

checkHide(){
  if(this.CheckHide===true) {this.Hide();}else{this.onChangeHeight(this.HeightValue);this.onChangeColor(this.ColorValue);}
  if(this.CheckCom===true) {this.Commited();}else{this.onChangeHeight(this.HeightValue);this.onChangeColor(this.ColorValue);}
  if(this.CheckOcc===true) {this.Occupied();}else{this.onChangeHeight(this.HeightValue);this.onChangeColor(this.ColorValue);}
  this.dataService.CheckHide=this.CheckHide;
  this.dataService.CheckCom=this.CheckCom;
  this.dataService.CheckOcc=this.CheckOcc;
}
changeHide(){
  this.CheckHide=!this.CheckHide;
  this.dataService.CheckHide=this.CheckHide;
}
changeCom(){
  this.CheckCom=!this.CheckCom;
  this.dataService.CheckCom=this.CheckCom;
}
changeOcc(){
  this.CheckOcc=!this.CheckOcc;
  this.dataService.CheckOcc=this.CheckOcc;
}

Hide(){
  this.cesiumpromise.then(function(dataSource) {
    var entities = dataSource.entities.values;
    for (var i = 0; i < entities.length; i++) {
      var entity = entities[i];
      if(entity.properties.HIDE._value!==undefined&&entity.properties.HIDE._value===1){
        entity.polygon.extrudedHeight = 0;
        entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
      }
    }
  });
}
Commited(){
  this.cesiumpromise.then(function(dataSource) {
    var entities = dataSource.entities.values;
    for (var i = 0; i < entities.length; i++) {
      var entity = entities[i];
      if(entity.properties.AVAILABLE._value==="COMMITTED"){
        entity.polygon.extrudedHeight = 0;
        entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
      }
    }
  });
}
Occupied(){
  this.cesiumpromise.then(function(dataSource) {
    var entities = dataSource.entities.values;
    for (var i = 0; i < entities.length; i++) {
      var entity = entities[i];
      if(entity.properties.AVAILABLE._value==="OCCUPIED"){
        entity.polygon.extrudedHeight = 0;
        entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
      }
    }
  });
}
select(){
  var viewer=this.viewer;
  if(this.selectEntity!==null) {this.ColorSelect(this.selectEntity);}
  if(viewer.selectedEntity!==undefined&&viewer.selectedEntity.polygon!==null) {
    this.dataService.SelectedEntity=viewer.selectedEntity;
      const material=viewer.selectedEntity.polygon.material;
      viewer.selectedEntity.polygon.material=Cesium.Color.WHITE;
      this.selectEntity=viewer.selectedEntity;
      this.material=material;
  }else{
      this.selectEntity=null;
      this.material=null;
  }
  
}

ColorSelect(entity){
  if(this.ColorValue==="Status_Cat"){
    if(entity.properties.Status_Cat!==undefined){
      if(entity.properties.Status_Cat._value==="Available") entity.polygon.material=Cesium.Color.LIGHTCORAL.withAlpha(1);
      else if(entity.properties.Status_Cat._value==="Prime") entity.polygon.material=Cesium.Color.RED.withAlpha(1);
      else if(entity.properties.Status_Cat._value==="Remnant") entity.polygon.material=Cesium.Color.CORAL.withAlpha(1);
      else if(entity.properties.Status_Cat._value==="Estate under active master / infra planning") entity.polygon.material=Cesium.Color.CRIMSON.withAlpha(1);
      else if(entity.properties.Status_Cat._value==="0"||null) entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
      else {entity.polygon.material=Cesium.Color.ROYALBLUE.withAlpha(1);}
    }
  }else if(this.ColorValue==="DIST_EWL"){
    if(entity.properties.DIST_EWL!==undefined){
      if(entity.properties.DIST_EWL>=715) entity.polygon.material=Cesium.Color.DARKCYAN .withAlpha(1);
      else if(entity.properties.DIST_EWL>=451) entity.polygon.material=Cesium.Color.MEDIUMTURQUOISE.withAlpha(1);
      else if(entity.properties.DIST_EWL>=286) entity.polygon.material=Cesium.Color.KHAKI.withAlpha(1);
      else if(entity.properties.DIST_EWL>=181) entity.polygon.material=Cesium.Color.GOLD.withAlpha(1);
      else if(entity.properties.DIST_EWL===0||null) entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
      else entity.polygon.material=Cesium.Color.CORAL.withAlpha(1);
    }
  }else if(this.ColorValue==="DIST_TRUNK"){
    if(entity.properties.DIST_TRUNK!==undefined){
      if(entity.properties.DIST_TRUNK>=239) entity.polygon.material=Cesium.Color.DARKCYAN .withAlpha(1);
      else if(entity.properties.DIST_TRUNK>=151) entity.polygon.material=Cesium.Color.MEDIUMTURQUOISE.withAlpha(1);
      else if(entity.properties.DIST_TRUNK>=96) entity.polygon.material=Cesium.Color.KHAKI.withAlpha(1);
      else if(entity.properties.DIST_TRUNK>=61) entity.polygon.material=Cesium.Color.GOLD.withAlpha(1);
      else if(entity.properties.DIST_TRUNK===0||null) entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
      else entity.polygon.material=Cesium.Color.CORAL.withAlpha(1);
    }
  }else if(this.ColorValue==="AVAILABLE"){
    if(entity.properties.AVAILABLE!==undefined){
      if(entity.properties.AVAILABLE._value==="AVAILABLE") entity.polygon.material=Cesium.Color.RED.withAlpha(1);
      else if(entity.properties.AVAILABLE._value==="COMMITTED") entity.polygon.material=Cesium.Color.ROYALBLUE.withAlpha(1);
      else if(entity.properties.AVAILABLE._value==="OCCUPIED") entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
    }
  }else if(this.ColorValue==="AGG_POT"){
    if(entity.properties.AGG_POT!==undefined){
      if(entity.properties.AGG_POT>=0.79) entity.polygon.material=Cesium.Color.CORAL .withAlpha(1);
      else if(entity.properties.AGG_POT>=0.67) entity.polygon.material=Cesium.Color.GOLD.withAlpha(1);
      else if(entity.properties.AGG_POT>=0.56) entity.polygon.material=Cesium.Color.KHAKI.withAlpha(1);
      else if(entity.properties.AGG_POT>=0.38) entity.polygon.material=Cesium.Color.MEDIUMTURQUOISE.withAlpha(1);
      else if(entity.properties.AGG_POT===0||null) entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
      else entity.polygon.material=Cesium.Color.DARKCYAN.withAlpha(1);
    }
  }else if(this.ColorValue==="GPR"){
    if(entity.properties.GPR!==undefined){
        if(entity.properties.GPR._value==="0.0"||entity.properties.GPR._value===0.0||entity.properties.GPR._value===0||entity.properties.GPR._value===null) entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
        else if(entity.properties.GPR._value==="0.9"||entity.properties.GPR._value===0.9||entity.properties.GPR._value==="1.0"||entity.properties.GPR._value==="1"||entity.properties.GPR._value===1.0||entity.properties.GPR._value===1
          ||entity.properties.GPR._value==="1.4"||entity.properties.GPR._value===1.4||entity.properties.GPR._value==="1.7"||entity.properties.GPR._value===1.7)
          entity.polygon.material=Cesium.Color.YELLOW.withAlpha(1);
        else if(entity.properties.GPR._value==="2"||entity.properties.GPR._value==="2.0"||entity.properties.GPR._value===2.0||entity.properties.GPR._value===2||entity.properties.GPR._value==="2.1"||entity.properties.GPR._value===2.1||
          entity.properties.GPR._value==="2.3"||entity.properties.GPR._value===2.3||entity.properties.GPR._value==="2.5"||entity.properties.GPR._value===2.5||
          entity.properties.GPR._value==="2.8"||entity.properties.GPR._value===2.8) entity.polygon.material=Cesium.Color.DARKORANGE.withAlpha(1);
        else if(entity.properties.GPR._value==="3.0"||entity.properties.GPR._value==="3"||entity.properties.GPR._value===3.0||entity.properties.GPR._value===3||entity.properties.GPR._value==="3.2"||entity.properties.GPR._value===3.2||
          entity.properties.GPR._value==="3.5"||entity.properties.GPR._value===3.5) entity.polygon.material=Cesium.Color.RED.withAlpha(1);
        else {entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
      }
  }else if(this.ColorValue==="HB_LIMIT"){
    if(entity.properties.HB_LIMIT!==undefined){
      if(entity.properties.HB_LIMIT>=93) entity.polygon.material=Cesium.Color.RED.withAlpha(1);
      else if(entity.properties.HB_LIMIT>=86) entity.polygon.material=Cesium.Color.ORANGERED.withAlpha(1);
      else if(entity.properties.HB_LIMIT>=77) entity.polygon.material=Cesium.Color.DARKORANGE.withAlpha(1);
      else if(entity.properties.HB_LIMIT>=63) entity.polygon.material=Cesium.Color.YELLOW.withAlpha(1);
      else if(entity.properties.HB_LIMIT===0||null) entity.polygon.material=Cesium.Color.WHITE.withAlpha(1);
      else entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
    }
  }
  if(this.CheckHide===true){
    if(entity.properties.HIDE._value!==undefined&&entity.properties.HIDE._value===1){
      entity.polygon.material=Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
    }
  }

}*/ 


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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* enableProdMode */])();
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