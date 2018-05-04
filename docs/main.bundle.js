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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- <body> -->\r\n<!-- <div id=\"cesiumContainer\"></div>\r\n<div> -->\r\n  <!-- <div id=\"cesiumContainer\">\r\n  \t<div id=\"loadfile\">\r\n\t    <div class=\"version\" style=\"font-family:sans-serif;color:white;\"> v0.0.1</div>\r\n\t    <input type=\"file\" id=\"files\" name=\"files[]\" style=\"font-family:sans-serif;color:white;\" (change)=\"handleFileSelect($event)\" />\r\n\t</div>\r\n  </div> -->\r\n<!-- </div> -->\r\n<!-- </body> -->\r\n\r\n<div style=\"height: 100%\">\r\n\t<div id=\"loadfile\">\r\n      <div class=\"version\" style=\"font-family:sans-serif;color:white;\">v0.0.11&nbsp;&nbsp;</div>\r\n      <input type=\"file\" id=\"files\" name=\"files[]\" style=\"font-family:sans-serif;color:white;\" (change)=\"handleFileSelect($event)\" />\r\n  </div>\r\n\t<mobius-cesium [data]=\"gs_dummy_data\"></mobius-cesium>\r\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chroma_js__ = __webpack_require__("./node_modules/chroma-js/chroma.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chroma_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chroma_js__);
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
        this.CheckOpp = false;
        this.ScaleValue = 1;
        this.CheckScale = true;
        this.CheckExtrude = false;
        this.ChromaScale = __WEBPACK_IMPORTED_MODULE_2_chroma_js__["scale"]("SPECTRAL");
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

module.exports = "<div id=\"mobiuscesium\" style=\"height: 100%\">\r\n\t<!-- <split direction=\"horizontal\" style=\"background-color: #8aa8c0;\">\r\n\t\t<split-area [size]=\"0.5\" id=\"splitgroups\" style=\"overflow:hidden;\">\r\n\t\t    <app-toolwindow></app-toolwindow>\r\n\t\t</split-area>\r\n\t\t<split-area [size]=\"99.5\" id=\"splitviewer\">\r\n\t\t\t<cesium-viewer></cesium-viewer>\r\n\t\t</split-area>\r\n\t</split> -->\r\n\r\n\t<cesium-viewer></cesium-viewer>\r\n\t<button id=\"Toggle\" (click)=\"toggleSlider()\" ></button>\r\n\t<div id=\"slide-nav\"  [@slide_in_out]=\"slider_state\" style=\"position: absolute;z-index: 101;top:0px;height: 100%\">\r\n  \t\t<!-- <app-toolwindow ></app-toolwindow> -->\r\n  \t\t<app-publish ></app-publish>\r\n\t</div>\r\n\t\r\n\t\r\n\t\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/mobius-cesium.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\");\n@font-face {\n  font-family: \"FontAwesome\"; }\n.font-awesome-hand {\n  font-family: FontAwesome; }\n.font-awesome-hand::after {\n  font-family: FontAwesome; }\n#mobiuscesium {\n  height: 101%;\n  font-family: sans-serif !important;\n  margin: 0px !important;\n  padding: 0px !important;\n  font-size: 14px; }\n#button {\n  position: absolute;\n  z-index: 99; }\n#Toggle {\n  position: absolute;\n  top: calc(50% - 40px);\n  z-index: 100;\n  width: 30px;\n  height: 100px;\n  font-family: sans-serif;\n  background-color: gray;\n  opacity: 0.8;\n  border: 1px solid gray; }\n/* split-area{\r\n  overflow-y: hidden !important;\r\n  height: 100% !important;\r\n}\r\n\r\nsplit-gutter{\r\n  border-right: 1px solid #8aa8c0 !important;\r\n  border-top: 1px solid #8aa8c0 !important;\r\n  background-color: #8aa8c0 !important;\r\n} */\n"

/***/ }),

/***/ "./src/app/mobius-cesium/mobius-cesium.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobiuscesiumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_service__ = __webpack_require__("./src/app/mobius-cesium/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
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
        this.slider_state = "slide_out";
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
    MobiuscesiumComponent.prototype.toggleSlider = function () {
        // do something to change the animation_state variable
        this.slider_state = this.slider_state === 'slide_out' ? 'slide_in' : 'slide_out';
        var toggle = document.getElementById("Toggle");
        if (this.slider_state === 'slide_out') {
            toggle.style.left = "0px";
        }
        else if (this.slider_state === 'slide_in') {
            toggle.style.left = "250px";
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
            styles: [__webpack_require__("./src/app/mobius-cesium/mobius-cesium.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('slide_in_out', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('slide_in', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        width: '250px',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('slide_out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        width: '0px'
                        // css styles when the element is in slide_out
                    })),
                    // animation effect when transitioning from one state to another
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('slide_in <=> slide_out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(300))
                ]),
            ]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toolwindow_publish_component__ = __webpack_require__("./src/app/mobius-cesium/toolwindow/publish.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_split__ = __webpack_require__("./node_modules/angular-split/esm5/angular-split.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_tabs__ = __webpack_require__("./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_tooltip__ = __webpack_require__("./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_slider__ = __webpack_require__("./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
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
                __WEBPACK_IMPORTED_MODULE_7_angular_split__["a" /* AngularSplitModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_tooltip__["a" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_slider__["a" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["a" /* FormsModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__mobius_cesium_component__["a" /* MobiuscesiumComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__mobius_cesium_component__["a" /* MobiuscesiumComponent */],
                __WEBPACK_IMPORTED_MODULE_3__viewer_viewer_component__["a" /* ViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_5__toolwindow_toolwindow_component__["a" /* ToolwindowComponent */],
                __WEBPACK_IMPORTED_MODULE_6__toolwindow_publish_component__["a" /* PublishComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__data_data_service__["a" /* DataService */]],
        })
    ], MobiusCesium);
    return MobiusCesium;
    var MobiusCesium_1;
}());



/***/ }),

/***/ "./src/app/mobius-cesium/toolwindow/publish.component.css":
/***/ (function(module, exports) {

module.exports = "#toolwindow{\r\n  position: relative;\r\n  /*background-color: #F1F1F1 !important;*/\r\n  background-color: rgba(20,20,20,0.5);\r\n  height: 100%;\r\n  width: 100%;\r\n  color:#ddd !important;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  font-size: 14px !important;\r\n  line-height: 14px;\r\n  overflow-x: hidden !important;\r\n}\r\n\r\n/deep/.mat-tab-label, /deep/.mat-tab-label-active{\r\n  min-width: 60px!important;\r\n  padding: 3px!important;\r\n  margin: 3px!important;\r\n  color:#ddd !important;;\r\n  background-color: transparent !important;\r\n}\r\n\r\n/deep/.mat-tab-label{\r\n  height: 30px !important;\r\n  width: 60px !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n/deep/.mat-tab-labels{\r\n  margin-left: 5px;\r\n}\r\n\r\n/deep/.mat-tab-header{\r\n  width: 700px !important;\r\n}\r\n\r\n/deep/.mat-tab-header-pagination-controls-enabled{\r\n  display: none !important;\r\n}\r\n\r\n/deep/.mat-ink-bar{\r\n  background-color: #395d73 !important;\r\n}\r\n\r\n/deep/.mat-tab{\r\n  min-width: 30px !important;\r\n}\r\n\r\n/deep/.mat-tab-body-content{\r\n  overflow: hidden !important;\r\n}\r\n\r\n/deep/.mat-header{\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  margin-left: 0px;\r\n  color:#395d73;\r\n  border: 0;\r\n  height: 20px;\r\n  background-color: transparent !important;\r\n}\r\n\r\n/deep/split-gutter{\r\n  background-color:rgb(138, 168, 192) !important;\r\n}\r\n\r\n/deep/.mat-accent .mat-slider-thumb {\r\n    background-color: #395d73 !important;\r\n    cursor: -webkit-grab;\r\n}\r\n\r\n/deep/.mat-slider-track-fill{\r\n  background-color: #395d73 !important;\r\n}\r\n\r\n/deep/.mat-slider-thumb-label-text {\r\n    color: #395d73 !important;\r\n    font-size: 12px !important;\r\n}\r\n\r\n/deep/.mat-slider-thumb-label{\r\n    height: 15px !important;\r\n    width: 15px !important;\r\n    top: -20px !important;\r\n    right: -7px !important;\r\n    background-color: white !important;\r\n    border: 1px solid #395d73 !important;\r\n}\r\n\r\n.mat-slider{\r\n    width: 150px !important;\r\n}\r\n\r\n.cesium-button {\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  color: #395D73;\r\n  fill: #395D73;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  background: #F1F1F1;\r\n}\r\n\r\n.cesium-button-select{\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  fill: #395D73;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  color: #395D73;\r\n  font-family:sans-serif !important;\r\n  color: #395D73;\r\n  background-color: #F1F1F1;\r\n}\r\n\r\n.cesium-option{\r\n  background-color: #F1F1F1;\r\n  opacity: 0.8;\r\n  color: #395D73;\r\n  border: 1px solid #8AA8C0;\r\n}\r\n\r\nhr {\r\n  display: block;\r\n  height: 1px;\r\n  border: 0;\r\n  border-top: 1px solid #ddd !important;\r\n  padding: 0; \r\n  color:#ddd !important;\r\n  width: 100%;\r\n  background-color: #ddd !important;\r\n}"

/***/ }),

/***/ "./src/app/mobius-cesium/toolwindow/publish.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"toolwindow\">\r\n      <div id=\"SettingView\" style=\"margin-left: 5px;margin-top: 5px;\" *ngIf=\"ceisumData!==undifined\">\r\n        <div *ngIf=\"ceisumData.colorDefault!==undifined\">\r\n        <table >\r\n          <tr>\r\n          <th class=\"colorkey\" style=\"width: 100px\" *ngIf=\"ceisumData.colorDescr!==undifined\"><div style=\"width: 100px;color:#ddd !important;border:0;text-align: left;font-weight: normal\">{{ceisumData.colorDescr}}</div></th></tr>\r\n        </table>\r\n        <table>\r\n          <tr>\r\n            <th class=\"colorkey\" style=\"width: 60px\"><div class=\"Hide\" style=\"width: 60px;color:#ddd !important;border:0;text-align: left;font-weight: normal;\">Color&nbsp;&nbsp;:</div></th>\r\n          <th><div>\r\n            <select class=\"cesium-button\" (change)=\"onChangeColor($event.target.value)\" [ngModel]=\"ColorValue\">\r\n              <option class=\"cesium-option\"  *ngFor=\"let ColorName of ColorNames\" value={{ColorName}}>{{ColorName}}</option>\r\n            </select>\r\n          </div></th>\r\n          </tr>\r\n          </table>\r\n    </div>\r\n    <div *ngIf=\"ceisumData.heightDefault!==undifined\">\r\n        <hr>\r\n          <table >\r\n          <tr>\r\n          <th class=\"colorkey\" style=\"width: 100px\" *ngIf=\"ceisumData.heightDescr!==undifined\"><div style=\"width: 100px;color:#ddd !important;border:0;text-align: left;font-weight: normal;\">{{ceisumData.heightDescr}}</div></th></tr>\r\n        </table>\r\n        <table>\r\n          <tr>\r\n            <th class=\"colorkey\" style=\"width: 60px\"><div class=\"Hide\" style=\"width: 60px;color:#ddd !important;border:0;text-align: left;font-weight: normal;\">Extrude&nbsp;&nbsp;:</div></th>\r\n          <th><div>\r\n            <select class=\"cesium-button\" (change)=\"onChangeHeight($event.target.value)\" [ngModel]=\"HeightValue\">\r\n               <option class=\"cesium-option\"  *ngFor=\"let Height of HeightKey\" value={{Height}}>{{Height}}</option>\r\n            </select>\r\n          </div></th>\r\n          </tr>\r\n        </table>\r\n        <table>\r\n          <tr ><th style=\"width:40px;height: 25px;\"><div style=\"width: 40px;color:#ddd !important;font-weight: normal;text-align: left;border:0;\">Min&nbsp;&nbsp;:</div></th>\r\n          <th style=\"width:60px;\"><div style=\"width: 60px;color:#ddd !important;font-weight: normal;text-align: left;border:0;\" *ngIf=\"ceisumData.heightMin!==undifined\">{{ceisumData.heightMin}}</div></th>\r\n\r\n          <th style=\"width:40px;\"><div style=\"width: 40px;color:#ddd !important;font-weight: normal;text-align: left;border:0;\">Max&nbsp;&nbsp;:</div></th>\r\n          <th style=\"width:60px;\"><div style=\"width: 60px;color:#ddd !important;font-weight: normal;text-align: left;border:0;\" *ngIf=\"ceisumData.heightMax!==undifined\">{{ceisumData.heightMax}}</div></th></tr>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"ceisumData.filter!==undifined\">\r\n      <hr>\r\n      <div class=\"hide-container\" style=\"margin-top:5px;\">\r\n        <div *ngFor=\"let item of hideElementArr;\" id={{item.divid}}>\r\n      <table>\r\n        <tr >\r\n          <th style=\"width:100px;height: 25px;\"><div style=\"width:100px;color:#ddd !important;text-align: left;vertical-align: middle;font-weight: normal;\">{{item.descr}}</div></th></tr>\r\n        </table>\r\n        <table>\r\n          <tr>\r\n            <th style=\"width:90px;height: 25px;\"><div style=\"width:90px;color:#ddd !important;text-align: left;vertical-align: middle;font-weight: normal;\">{{item.HeightHide}}</div></th>\r\n        <th *ngIf=\"item.type === 'number'\" style=\"width:40px;height: 25px;\">\r\n          <div style=\"width:40px;height: 25px;color:#ddd !important;vertical-align: middle;font-weight: normal;margin-top: 10px;\" *ngIf=\"item.RelaHide === 0\">></div>\r\n          <div style=\"width:40px;height: 25px;color:#ddd !important;vertical-align: middle;font-weight: normal;margin-top: 10px;\" *ngIf=\"item.RelaHide === 1\"><</div>\r\n          <div style=\"width:40px;height: 25px;color:#ddd !important;vertical-align: middle;font-weight: normal;margin-top: 10px;\" *ngIf=\"item.RelaHide === 2\">=</div></th>\r\n          <th *ngIf=\"item.type === 'category'\" style=\"width:40px;height: 25px;\">\r\n          <div style=\"width:40px;height: 25px;color:#ddd !important;vertical-align: middle;font-weight: normal;margin-top: 10px;\" *ngIf=\"item.RelaHide === 0\">none</div>\r\n          <div style=\"width:40px;height: 25px;color:#ddd !important;vertical-align: middle;font-weight: normal;margin-top: 10px;\" *ngIf=\"item.RelaHide === 1\">=</div>\r\n          <div style=\"width:40px;height: 25px;color:#ddd !important;vertical-align: middle;font-weight: normal;margin-top: 10px;\" *ngIf=\"item.RelaHide === 2\">!=</div></th>\r\n          <th *ngIf=\"item.type === 'number'\" style=\"width:70px;height: 20px;color:#395D73 !important;\"><input type=\"text\" id={{item.id}} value={{item.textHide}} (change)=\"Changetext($event.target.value,item.id)\" style=\"width:70px;height: 20px;color:#395D73 !important;\"></th>\r\n          <th *ngIf=\"item.type === 'category'\" style=\"width:73px;height: 25px;\"><div style=\"width:73px;height: 25px;\">\r\n          <select class=\"cesium-button-select\" [ngModel]=\"item.CategaryHide\" (change)=\"ChangeCategory($event.target.value,item.id,1)\" style=\"width:73px;height: 25px;\">\r\n            <option class=\"cesium-option\" *ngFor=\"let caty of item.Category\" value={{caty}}>{{caty}}</option>\r\n          </select></div></th></tr>\r\n      </table>\r\n      <table>\r\n        <tr>\r\n        <th *ngIf=\"item.type === 'number'\" style=\"width:30px;height: 25px;padding-top: 10px;\"><div style=\"font-weight: normal;display: inline-block;color:#ddd !important;width:30px;\">{{item.HideMin}}</div></th>\r\n        <th *ngIf=\"item.type === 'number'\" style=\"width:150px;height: 25px;\"><div style=\"font-weight: normal;display: inline-block;width:150px;\"><mat-slider class=\"slider\" name=\"range\" id=\"0\" min={{item.HideMin}} max={{item.HideMax}} step=0.01 thumbLabel=true value={{item.textHide}} #textscale (change)=\"Changetext(textscale.value.toPrecision(2),item.id)\" >\r\n        </mat-slider></div></th>\r\n        <th *ngIf=\"item.type === 'number'\" style=\"width:30px;height: 25px;padding-top: 10px;\"><div style=\"font-weight: normal;display: inline-block;color:#ddd !important;width:30px;text-align: left;\">{{item.HideMax}}</div></th></tr>\r\n      </table><hr>\r\n        </div>\r\n      </div>\r\n      <button style=\"background-color: #ddd ;color:#395D73;\" (click)=\"reset()\">Reset</button>\r\n      </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/mobius-cesium/toolwindow/publish.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublishComponent; });
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



var PublishComponent = /** @class */ (function (_super) {
    __extends(PublishComponent, _super);
    function PublishComponent(injector, myElement) {
        var _this = _super.call(this, injector) || this;
        _this.Filter = false;
        _this.HeightInti = false;
        _this.ColorInti = false;
        _this.hideElementArr = [];
        _this.ChromaScale = __WEBPACK_IMPORTED_MODULE_2_chroma_js__["scale"]("SPECTRAL");
        _this.HideNum = [];
        _this.ScaleValue = _this.dataService.ScaleValue;
        _this.CheckScale = _this.dataService.CheckScale;
        _this.CheckOpp = _this.dataService.CheckOpp;
        if (_this.dataService.HideNum !== undefined) {
            _this.HideNum = _this.dataService.HideNum;
            _this.hideElementArr = _this.dataService.hideElementArr;
        }
        return _this;
    }
    PublishComponent.prototype.ngOnInit = function () {
    };
    PublishComponent.prototype.notify = function (message) {
        if (message == "model_update") {
            this.data = this.dataService.getGsModel();
            try {
                if (this.data !== undefined && this.data["features"] !== undefined) {
                    this.LoadData(this.data);
                }
            }
            catch (ex) {
                console.log(ex);
            }
        }
    };
    PublishComponent.prototype.LoadData = function (data) {
        if (data["features"] !== undefined) {
            this.PropertyNames = Object.getOwnPropertyNames(data["features"][0].properties);
            this.PropertyNames.sort();
            this.viewer = this.dataService.viewer;
            if (this.data.crs.cesium !== undefined) {
                this.LoadJSONData();
            }
        }
    };
    PublishComponent.prototype.LoadJSONData = function () {
        var cesiumData = this.data.crs.cesium;
        var data = [];
        this.ceisumData = [];
        this.ColorNames = [];
        this.HeightKey = [];
        if (cesiumData["colour"] !== undefined && cesiumData["colour"]["attribs"] !== undefined) {
            for (var i = 0; i < cesiumData["colour"]["attribs"].length; i++) {
                this.ColorNames.push(cesiumData["colour"]["attribs"][i]["default"]);
            }
            this.ColorValue = this.ColorNames[0];
        }
        if (cesiumData["extrude"] !== undefined && cesiumData["extrude"]["attribs"] !== undefined) {
            for (var i = 0; i < cesiumData["extrude"]["attribs"].length; i++) {
                this.HeightKey.push(cesiumData["extrude"]["attribs"][i]["default"]);
            }
            this.HeightValue = this.HeightKey[0];
        }
        if (cesiumData["colour"] !== undefined) {
            if (cesiumData["colour"].descr !== undefined)
                data.colorDescr = cesiumData["colour"].descr;
            if (cesiumData["colour"]["attribs"] !== undefined) {
                data.colorDefault = cesiumData["colour"]["attribs"][0]["default"];
                if (cesiumData["colour"]["attribs"][0]["min"] !== undefined) {
                    data.colorMin = cesiumData["colour"]["attribs"][0]["min"];
                }
                if (cesiumData["colour"]["attribs"][0]["max"] !== undefined) {
                    data.colorMax = cesiumData["colour"]["attribs"][0]["max"];
                }
                if (cesiumData["colour"]["attribs"][0]["invert"] === true) {
                    data.colorInvert = true;
                    this.ChromaScale = __WEBPACK_IMPORTED_MODULE_2_chroma_js__["scale"]("SPECTRAL").domain([1, 0]);
                }
                else {
                    data.colorInvert = false;
                    this.ChromaScale = __WEBPACK_IMPORTED_MODULE_2_chroma_js__["scale"]("SPECTRAL").domain([0, 1]);
                }
            }
        }
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
        if (cesiumData["extrude"] !== undefined) {
            if (cesiumData["extrude"].descr !== undefined)
                data.heightDescr = cesiumData["extrude"].descr;
            if (cesiumData["extrude"]["attribs"] !== undefined) {
                data.heightDefault = cesiumData["extrude"]["attribs"][0]["default"];
                if (cesiumData["extrude"]["attribs"][0]["min"] !== undefined) {
                    data.heightMin = cesiumData["extrude"]["attribs"][0]["min"];
                }
                else {
                    data.heightMin = Math.min.apply(Math, texts);
                }
                if (cesiumData["extrude"]["attribs"][0]["max"] !== undefined) {
                    data.heightMax = cesiumData["extrude"]["attribs"][0]["max"];
                }
                else {
                    data.heightMax = Math.max.apply(Math, texts);
                }
                if (cesiumData["extrude"]["attribs"][0]["invert"] === true) {
                    data.heightInvert = true;
                }
                else {
                    data.heightInvert = false;
                }
                if (cesiumData["extrude"]["attribs"][0]["line"] === true) {
                    data.heightLine = true;
                }
                else {
                    data.heightLine = false;
                }
                if (cesiumData["extrude"]["attribs"][0]["scale"] !== undefined) {
                    data.heightScale = cesiumData["extrude"]["attribs"][0]["scale"];
                }
                else {
                    data.heightScale = 1;
                }
            }
        }
        this.dataService.MinColor = data.colorMin;
        this.dataService.MaxColor = data.colorMax;
        this.dataService.MinHeight = data.heightMin;
        this.dataService.MaxHeight = data.heightMax;
        this.dataService.ChromaScale = this.ChromaScale;
        if (data.heightLine !== undefined) {
            this.CheckExtrude = data.heightLine;
        }
        else {
            this.CheckExtrude = false;
        }
        this.dataService.CheckExtrude = this.CheckExtrude;
        if (data.heightInvert !== undefined) {
            this.CheckOpp = data.heightInvert;
        }
        else {
            this.CheckOpp = false;
        }
        this.dataService.CheckOpp = this.CheckOpp;
        if (data.heightScale !== undefined) {
            this.ScaleValue = data.heightScale;
        }
        else {
            this.ScaleValue = 1;
        }
        this.dataService.ScaleValue = this.ScaleValue;
        this.dataService.propertyNames = this.ColorNames;
        this.dataService.ColorValue = this.ColorValue;
        this.dataService.HeightKey = this.HeightKey;
        this.dataService.HeightValue = this.HeightValue;
        if (cesiumData["Filter"] !== undefined && cesiumData["Filter"].length !== 0) {
            data.filter = cesiumData["Filter"];
        }
        this.ceisumData = data;
        this.dataService.ceisumData = this.ceisumData;
        this.onChangeColor(this.ColorValue);
        if (cesiumData["Filter"] !== undefined) {
            this.addHide();
        }
    };
    PublishComponent.prototype.ngDoCheck = function () {
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
    };
    PublishComponent.prototype.onChangeHeight = function (HeightValue) {
        this.HeightValue = HeightValue;
        this.ceisumData["heightDefault"] = this.HeightValue;
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
            else if (this.HeightValue === "None") {
                var self = this;
                promise.then(function (dataSource) {
                    var entities = dataSource.entities.values;
                    for (var i = 0; i < entities.length; i++) {
                        var entity = entities[i];
                        entity.polygon.extrudedHeight = 0;
                    }
                });
            }
        }
        for (var i = 0; i < this.data.crs.cesium["extrude"]["attribs"].length; i++) {
            if (this.data.crs.cesium["extrude"]["attribs"][i]["default"] === this.HeightValue) {
                if (this.data.crs.cesium["extrude"]["attribs"][i]["min"] !== undefined) {
                    this.ceisumData["heightMin"] = this.data.crs.cesium["extrude"]["attribs"][i]["min"];
                }
                else {
                    this.ceisumData["heightMin"] = Math.min.apply(Math, texts);
                }
                if (this.data.crs.cesium["extrude"]["attribs"][i]["max"] !== undefined) {
                    this.ceisumData["heightMax"] = this.data.crs.cesium["extrude"]["attribs"][i]["max"];
                }
                else {
                    this.ceisumData["heightMax"] = Math.max.apply(Math, texts);
                }
                if (this.data.crs.cesium["extrude"]["attribs"][i]["scale"] !== undefined) {
                    this.ceisumData["heightScale"] = this.data.crs.cesium["extrude"]["attribs"][i]["scale"];
                }
                else {
                    this.ceisumData["heightScale"] = 1;
                }
                if (this.data.crs.cesium["extrude"]["attribs"][i]["invert"] === true) {
                    this.ceisumData["heightInvert"] = true;
                }
                else {
                    this.ceisumData["heightInvert"] = false;
                }
                if (this.data.crs.cesium["extrude"]["attribs"][i]["line"] === true) {
                    this.ceisumData["heightLine"] = true;
                }
                else {
                    this.ceisumData["heightLine"] = false;
                }
                this.dataService.MinHeight = this.ceisumData["heightMin"];
                this.dataService.MaxHeight = this.ceisumData["heightMax"];
                break;
            }
        }
        this.HeightMax = this.dataService.MinHeight;
        this.HeightMin = this.dataService.MaxHeight;
        this.CheckExtrude = this.ceisumData["heightLine"];
        this.dataService.CheckExtrude = this.CheckExtrude;
        this.CheckOpp = this.ceisumData["heightInvert"];
        this.dataService.CheckOpp = this.CheckOpp;
        this.ScaleValue = this.ceisumData["heightScale"];
        this.dataService.ScaleValue = this.ScaleValue;
        this.dataService.ceisumData = this.ceisumData;
        this.Hide();
        this.dataService.getHeightValue(this.HeightValue);
    };
    PublishComponent.prototype.onChangeColor = function (ColorValue) {
        this.ColorValue = ColorValue;
        this.ceisumData["colorDefault"] = this.ColorValue;
        if (this.data.crs.cesium["colour"] !== undefined) {
            for (var i = 0; i < this.data.crs.cesium["colour"]["attribs"].length; i++) {
                if (this.data.crs.cesium["colour"]["attribs"][i]["default"] === this.ColorValue) {
                    if (this.data.crs.cesium["colour"]["attribs"][i]["min"] !== undefined && this.data.crs.cesium["colour"]["attribs"][i]["max"] !== undefined) {
                        this.ceisumData["colorMin"] = this.data.crs.cesium["colour"]["attribs"][i]["min"];
                        this.ceisumData["colorMax"] = this.data.crs.cesium["colour"]["attribs"][i]["max"];
                    }
                    else {
                        this.ceisumData["colorMin"] = null;
                        this.ceisumData["colorMax"] = null;
                    }
                    if (this.data.crs.cesium["colour"]["attribs"][i]["invert"] === true) {
                        this.ceisumData["colorInvert"] = true;
                        this.ChromaScale = __WEBPACK_IMPORTED_MODULE_2_chroma_js__["scale"]("SPECTRAL").domain([1, 0]);
                    }
                    else {
                        this.ceisumData["colorInvert"] = false;
                        this.ChromaScale = __WEBPACK_IMPORTED_MODULE_2_chroma_js__["scale"]("SPECTRAL").domain([0, 1]);
                    }
                    this.dataService.MinColor = this.ceisumData["colorMin"];
                    this.dataService.MaxColor = this.ceisumData["colorMax"];
                    this.dataService.ChromaScale = this.ChromaScale;
                    this.dataService.ceisumData = this.ceisumData;
                    break;
                }
            }
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
                else if (this.ColorValue === "None") {
                    var self = this;
                    promise.then(function (dataSource) {
                        var entities = dataSource.entities.values;
                        for (var i = 0; i < entities.length; i++) {
                            var entity = entities[i];
                            entity.polygon.material = Cesium.Color.White;
                        }
                    });
                }
            }
            if (typeof (texts[0]) === "number") {
                this.texts = texts;
                var max = this.dataService.MaxColor; //Math.max.apply(Math, texts);
                var min = this.dataService.MinColor; //Math.min.apply(Math, texts);
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
                    var Color = this.ChromaScale((j / Colortext.length).toFixed(2));
                    ColorKey.color = Color;
                    this.ColorKey.push(ColorKey);
                }
                this.dataService.Colortexts = this.ColorKey;
                if (max === null) {
                    max = Math.max.apply(Math, texts);
                }
                if (min === null) {
                    max = Math.max.apply(Math, texts);
                }
                this.dataService.MaxColor = max;
                this.dataService.MinColor = min;
                this.Max = max;
                this.Min = min;
                this.colorByNum();
            }
            else if (typeof (texts[0]) === "string") {
                this.texts = texts;
                for (var j = 0; j < texts.length; j++) {
                    var ColorKey = [];
                    ColorKey.text = texts[j];
                    var Color = this.ChromaScale((j / texts.length).toFixed(2));
                    ColorKey.color = Color;
                    this.ColorKey.push(ColorKey);
                    this.Max = null;
                    this.Min = null;
                }
                this.dataService.Colortexts = this.ColorKey;
                this.colorByCat();
            }
            this.Hide();
            this.dataService.getColorValue(this.ColorValue);
        }
        else {
            var promise = this.dataService.cesiumpromise;
            var self = this;
            promise.then(function (dataSource) {
                var entities = dataSource.entities.values;
                for (var i = 0; i < entities.length; i++) {
                    var entity = entities[i];
                    entity.polygon.material = Cesium.Color.White;
                }
            });
        }
    };
    PublishComponent.prototype.colorByNum = function () {
        var max = this.dataService.MaxColor;
        var min = this.dataService.MinColor;
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
    PublishComponent.prototype.colorByCat = function () {
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
    PublishComponent.prototype.addHide = function () {
        var lastnumber;
        this.hideElementArr = [];
        this.HideNum = [];
        if (this.data.crs.cesium !== undefined && this.data.crs.cesium.length !== 0) {
            for (var i = 0; i < this.ceisumData.filter.length; i++) {
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
                var propertyname = this.ceisumData.filter[i]["name"];
                var relation = Number(this.ceisumData.filter[i]["relation"]);
                var text = this.ceisumData.filter[i]["text"];
                var descr = this.ceisumData.filter[i]["descr"];
                if (typeof (text) === "number") {
                    this.HideType = "number";
                    var texts = this.Initial(propertyname);
                }
                else if (typeof (text) === "string") {
                    this.HideType = "category";
                    var texts = this.Initial(propertyname);
                    texts = ["None"].concat(texts);
                }
                this.hideElementArr.push({ divid: String("addHide".concat(String(lastnumber))), id: lastnumber, HeightHide: propertyname, type: this.HideType, Category: texts, CategaryHide: text, descr: descr, RelaHide: relation, textHide: text,
                    HideMax: Math.ceil(Math.max.apply(Math, texts)), HideMin: Math.round(Math.min.apply(Math, texts) * 100) / 100 });
            }
        }
        this.dataService.hideElementArr = this.hideElementArr;
        this.dataService.HideNum = this.HideNum;
        this.Hide();
    };
    PublishComponent.prototype.Initial = function (HideValue) {
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
    PublishComponent.prototype.ChangeCategory = function (categary, id, type) {
        var scale = this.ScaleValue / this.Max;
        var index = this.HideNum.indexOf(id);
        var promise = this.dataService.cesiumpromise;
        if (type === 1) {
            this.hideElementArr[index].CategaryHide = categary;
        }
        if (type === 0) {
            this.hideElementArr[index].RelaHide = Number(categary);
        }
        this.Hide();
        this.dataService.hideElementArr = this.hideElementArr;
    };
    PublishComponent.prototype.Changetext = function (value, id) {
        var index = this.HideNum.indexOf(id);
        this.hideElementArr[index].textHide = value;
        this.Hide();
        this.dataService.hideElementArr = this.hideElementArr;
    };
    PublishComponent.prototype._compare = function (value, slider, relation) {
        switch (relation) {
            case 0:
                return value < slider;
            case 1:
                return value > slider;
            case 2:
                return value === slider;
        }
    };
    PublishComponent.prototype._compareCat = function (value, Categary, relation) {
        switch (relation) {
            case 0:
                return value === undefined;
            case 1:
                return value !== Categary;
            case 2:
                return value === Categary;
        }
    };
    PublishComponent.prototype.Hide = function () {
        var promise = this.dataService.cesiumpromise;
        var propertyname = [];
        var relation = [];
        var text = [];
        var scale = this.ScaleValue;
        var Max;
        if (this.ceisumData["heightMax"] !== undefined) {
            Max = this.ceisumData["heightMax"];
        }
        else {
            Max = 0;
        }
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
                                if (self.CheckExtrude === true) {
                                    if (entity.polyline !== undefined && entity.polyline.show !== undefined)
                                        entity.polyline.show = false;
                                }
                                break;
                            }
                            else {
                                self.ColorByNumCat(entity);
                                if (self.CheckScale === true) {
                                    if (self.CheckOpp === true) {
                                        if (self.CheckExtrude === true) {
                                            var center = self.dataService.poly_center[i];
                                            entity.polyline = new Cesium.PolylineGraphics({
                                                positions: new Cesium.Cartesian3.fromDegreesArrayHeights([center[0], center[1], 0, center[0], center[1], (Max - Math.min((entity.properties[self.HeightValue]._value), Max)) * scale]),
                                                width: center[2],
                                                material: entity.polygon.material,
                                                show: true
                                            });
                                        }
                                        else {
                                            if (entity.polyline !== undefined && entity.polyline.show !== undefined)
                                                entity.polyline.show = false;
                                            if (self.HeightValue !== undefined) {
                                                entity.polygon.extrudedHeight = (Max - Math.min((entity.properties[self.HeightValue]._value), Max)) * scale;
                                            }
                                            else {
                                                entity.polygon.extrudedHeight = 0;
                                            }
                                        }
                                    }
                                    else {
                                        if (self.CheckExtrude === true) {
                                            var center = self.dataService.poly_center[i];
                                            entity.polyline = new Cesium.PolylineGraphics({
                                                positions: new Cesium.Cartesian3.fromDegreesArrayHeights([center[0], center[1], 0, center[0], center[1], (Math.min((entity.properties[self.HeightValue]._value), Max)) * scale]),
                                                width: center[2],
                                                material: entity.polygon.material,
                                                show: true
                                            });
                                        }
                                        else {
                                            if (entity.polyline !== undefined && entity.polyline.show !== undefined)
                                                entity.polyline.show = false;
                                            if (self.HeightValue !== undefined) {
                                                entity.polygon.extrudedHeight = (Math.min((entity.properties[self.HeightValue]._value), Max)) * scale;
                                            }
                                            else {
                                                entity.polygon.extrudedHeight = 0;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        else if (typeof (value) === "string") {
                            if (text[j_1] !== "None") {
                                if (self._compareCat(value, text[j_1], relation[j_1])) {
                                    entity.polygon.extrudedHeight = 0;
                                    entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                                    if (self.CheckExtrude === true) {
                                        if (entity.polyline !== undefined && entity.polyline.show !== undefined)
                                            entity.polyline.show = false;
                                    }
                                    break;
                                }
                                else {
                                    self.ColorByNumCat(entity);
                                    if (self.CheckScale === true) {
                                        if (self.CheckOpp === true) {
                                            if (self.CheckExtrude === true) {
                                                entity.polygon.extrudedHeight = 0;
                                                var center = self.dataService.poly_center[i];
                                                entity.polyline = new Cesium.PolylineGraphics({
                                                    positions: new Cesium.Cartesian3.fromDegreesArrayHeights([center[0], center[1], 0, center[0], center[1], (Max - Math.min((entity.properties[self.HeightValue]._value), Max)) * scale]),
                                                    width: center[2],
                                                    material: entity.polygon.material,
                                                    show: true
                                                });
                                            }
                                            else {
                                                if (entity.polyline !== undefined && entity.polyline.show !== undefined)
                                                    entity.polyline.show = false;
                                                if (self.HeightValue !== undefined) {
                                                    entity.polygon.extrudedHeight = (Max - Math.min((entity.properties[self.HeightValue]._value), Max)) * scale;
                                                }
                                                else {
                                                    entity.polygon.extrudedHeight = 0;
                                                }
                                            }
                                        }
                                        else {
                                            if (self.CheckExtrude === true) {
                                                entity.polygon.extrudedHeight = 0;
                                                var center = self.dataService.poly_center[i];
                                                entity.polyline = new Cesium.PolylineGraphics({
                                                    positions: new Cesium.Cartesian3.fromDegreesArrayHeights([center[0], center[1], 0, center[0], center[1], (Math.min((entity.properties[self.HeightValue]._value), Max)) * scale]),
                                                    width: center[2],
                                                    material: entity.polygon.material,
                                                    show: true
                                                });
                                            }
                                            else {
                                                if (entity.polyline !== undefined && entity.polyline.show !== undefined)
                                                    entity.polyline.show = false;
                                                if (self.HeightValue !== undefined) {
                                                    entity.polygon.extrudedHeight = Math.min((entity.properties[self.HeightValue]._value), Max) * scale;
                                                }
                                                else {
                                                    entity.polygon.extrudedHeight = 0;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
    };
    PublishComponent.prototype.ColorByNumCat = function (entity) {
        if (this.ColorKey !== undefined) {
            var ChromaScale = this.ChromaScale;
            var ColorKey = this.ColorKey;
            var range = ColorKey.length;
            var self = this;
            if (typeof (self.texts[0]) === "number") {
                var max = self.dataService.MaxColor;
                var min = self.dataService.MinColor;
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
                        entity.polygon.material = Cesium.Color.fromBytes(rgb._rgb[0], rgb._rgb[1], rgb._rgb[2]);
                        initial = true;
                    }
                }
                if (initial === false) {
                    entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                }
            }
        }
        else {
            entity.polygon.material = Cesium.Color.White;
        }
    };
    PublishComponent.prototype.reset = function () {
        if (this.data.crs.cesium !== undefined) {
            this.LoadData(this.data);
        }
    };
    PublishComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-publish',
            template: __webpack_require__("./src/app/mobius-cesium/toolwindow/publish.component.html"),
            styles: [__webpack_require__("./src/app/mobius-cesium/toolwindow/publish.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], PublishComponent);
    return PublishComponent;
}(__WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__["a" /* DataSubscriber */]));



/***/ }),

/***/ "./src/app/mobius-cesium/toolwindow/toolwindow.component.css":
/***/ (function(module, exports) {

module.exports = "#toolwindow{\r\n  position: relative;\r\n  /*background-color: #F1F1F1 !important;*/\r\n  background-color: rgba(20,20,20,0.5);\r\n  opacity:0.8;\r\n  height: 100%;\r\n  width: 100%;\r\n  color:#ddd !important;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  font-size: 14px !important;\r\n  line-height: 14px;\r\n  overflow-x: hidden !important;\r\n}\r\n\r\n/deep/.mat-tab-label, /deep/.mat-tab-label-active{\r\n  min-width: 60px!important;\r\n  padding: 3px!important;\r\n  margin: 3px!important;\r\n  color:#ddd !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n/deep/.mat-tab-label{\r\n  height: 30px !important;\r\n  width: 60px !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n/deep/.mat-tab-labels{\r\n  margin-left: 5px;\r\n}\r\n\r\n/deep/.mat-tab-header{\r\n  width: 700px !important;\r\n}\r\n\r\n/deep/.mat-tab-header-pagination-controls-enabled{\r\n  display: none !important;\r\n}\r\n\r\n/deep/.mat-ink-bar{\r\n  background-color: #395d73 !important;\r\n}\r\n\r\n/deep/.mat-tab{\r\n  min-width: 30px !important;\r\n}\r\n\r\n/deep/.mat-tab-body-content{\r\n  overflow: hidden !important;\r\n}\r\n\r\n/deep/.mat-header{\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  margin-left: 0px;\r\n  color:#395d73;\r\n  border: 0;\r\n  height: 20px;\r\n  background-color: transparent !important;\r\n}\r\n\r\n/deep/split-gutter{\r\n  background-color:rgb(138, 168, 192) !important;\r\n}\r\n\r\n/deep/.mat-accent .mat-slider-thumb {\r\n    background-color: #395d73 !important;\r\n    cursor: -webkit-grab;\r\n}\r\n\r\n/deep/.mat-slider-track-fill{\r\n  background-color: #395d73 !important;\r\n}\r\n\r\n/deep/.mat-slider-thumb-label-text {\r\n    color: #395d73 !important;\r\n    font-size: 12px !important;\r\n}\r\n\r\n/deep/.mat-slider-thumb-label{\r\n    height: 15px !important;\r\n    width: 15px !important;\r\n    top: -20px !important;\r\n    right: -7px !important;\r\n    background-color: white !important;\r\n    border: 1px solid #395d73 !important;\r\n}\r\n\r\n.mat-slider{\r\n    width: 150px !important;\r\n}\r\n\r\n.cesium-button {\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  color: #395D73;\r\n  fill: #395D73;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  background: #F1F1F1;\r\n}\r\n\r\n.cesium-button-select{\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  color: #395D73;\r\n  fill: #395D73;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  background: #F1F1F1;\r\n}\r\n\r\n.cesium-option{\r\n  background-color: #F1F1F1;\r\n  opacity: 0.8;\r\n  color: #395D73;\r\n  border: 1px solid #8AA8C0;\r\n}\r\n\r\nhr {\r\n  display: block;\r\n  height: 1px;\r\n  border: 0;\r\n  border-top: 1px solid #ddd !important;\r\n  padding: 0; \r\n  color:#ddd !important;\r\n  width: 100%;\r\n  background-color: #ddd !important;\r\n}"

/***/ }),

/***/ "./src/app/mobius-cesium/toolwindow/toolwindow.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"toolwindow\">\r\n  <mat-tab-group class=\"mat-tab-group\">\r\n    \r\n    <!-- <mat-tab label=\"&nbsp;&nbsp;&nbsp;&nbsp;Key&nbsp;&nbsp;&nbsp;&nbsp;\" >\r\n      <div id=\"KeyView\" style=\"margin-left: 5px;margin-top: 5px;\">\r\n        <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\">\r\n          <tr *ngFor=\"let Key of ColorKey\">\r\n            <th  style=\"width: 40px;\"><div [ngStyle]=\"{ 'background-color': Key.color}\" >&nbsp;&nbsp;&nbsp;</div></th>\r\n            <th  style=\"font-size: 10px;font-weight: normal;color:#395d73;width: 130px;height: 14px\"><div matTooltip={{Key.text}}  style=\"width: 130px;height:14px;text-align: left;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;\">{{Key.text}}</div></th>\r\n          </tr>\r\n        </table>\r\n    </div>\r\n    </mat-tab> -->\r\n    <mat-tab label=\"&nbsp;Settings&nbsp;\" >\r\n      <div id=\"SettingView\" style=\"margin-left: 5px;margin-top: 5px;\">\r\n        <table>\r\n          <tr>\r\n          <th class=\"colorkey\" style=\"width: 60px\"><div class=\"Hide\" style=\"width: 60px;color:#ddd !important;border:0;text-align: left;font-weight: normal;\">Color</div></th>\r\n          <th><div>\r\n            <select class=\"cesium-button\" (change)=\"onChangeColor($event.target.value)\" [ngModel]=\"selectColor\">\r\n              <option class=\"cesium-option\"  *ngFor=\"let ColorName of ColorNames\" value={{ColorName}}>{{ColorName}}</option>\r\n            </select>\r\n          </div></th>\r\n          </tr>\r\n          </table>\r\n          <table>\r\n          <tr ><th style=\"width:60px;height: 25px;\"><div style=\"width: 60px;color:#ddd !important;font-weight: normal;text-align: left;border:0;\">Min</div></th>\r\n          <th style=\"width:60px;height: 25px;\"><input type=\"text\"  value={{Min}} style=\"width:80px;color:#395d73;font-weight: normal;text-align: left;border:0;\" (change)=\"changeColorMin($event.target.value)\"></th></tr>  \r\n          </table>\r\n          <table >\r\n          <tr ><th style=\"width:60px;\"><div style=\"width: 60px;color:#ddd !important;font-weight: normal;text-align: left;border:0;\">Max</div></th>\r\n          <th style=\"width:60px;\"><input type=\"text\" value={{Max}} style=\"width: 80px;color:#395d73;font-weight: normal;text-align: left;border:0;\" (change)=\"changeColorMax($event.target.value)\"></th></tr>\r\n      </table>\r\n        <hr>\r\n          <table>\r\n          <tr>\r\n          <th class=\"colorkey\" style=\"width: 60px\"><div class=\"Hide\" style=\"width: 60px;color:#ddd !important;border:0;text-align: left;font-weight: normal;\">Height</div></th>\r\n          <th><div>\r\n            <select class=\"cesium-button\" (change)=\"onChangeHeight($event.target.value)\" [ngModel]=\"selectHeight\">\r\n               <option class=\"cesium-option\"  *ngFor=\"let Height of HeightKey\" value={{Height}}>{{Height}}</option>\r\n            </select>\r\n          </div></th>\r\n          </tr>\r\n        </table>\r\n        <table>\r\n          <tr ><th style=\"width:60px;height: 25px;\"><div style=\"width: 60px;color:#ddd !important;font-weight: normal;text-align: left;border:0;\">Min</div></th>\r\n          <th style=\"width:60px;height: 25px;\"><input type=\"text\"  value={{HeightMin}} style=\"width:80px;color:#395d73;font-weight: normal;text-align: left;border:0;\" (change)=\"changeHeightMin($event.target.value)\"></th></tr>  \r\n          </table>\r\n          <table >\r\n          <tr ><th style=\"width:60px;\"><div style=\"width: 60px;color:#ddd !important;font-weight: normal;text-align: left;border:0;\">Max</div></th>\r\n          <th style=\"width:60px;\"><input type=\"text\" value={{HeightMax}} style=\"width: 80px;color:#395d73;font-weight: normal;text-align: left;border:0;\" (change)=\"changeHeightMax($event.target.value)\"></th></tr>\r\n      </table>\r\n       <table>\r\n          <tr ><th style=\"width:60px;height: 25px;\"><div style=\"width: 60px;color:#ddd !important;font-weight: normal;text-align: left;border:0;\">Scale</div></th>\r\n          <th style=\"width:80px;height: 25px;\"><div style=\"width:80px;color:#395d73;font-weight: normal;text-align: left;border:0;\"><input type=\"text\" value={{ScaleValue}} (change)=\"changescale($event.target.value)\" style=\"width:80px;color:#395d73;\"></div></th>\r\n          <th style=\"width:85px;height: 25px;\"><div style=\"width:85px;color:#ddd !important;font-weight: normal;text-align: left;border:0;\"><input type=\"checkbox\" [checked]=\"CheckScale\" (click)=\"checkscale();changescale(ScaleValue)\"></div></th></tr>\r\n          <tr ><th style=\"width:60px;height: 25px;\"><div style=\"width: 60px;color:#ddd !important;font-weight: normal;text-align: left;border:0;\">Invert</div></th>\r\n          <th style=\"width:80px;height: 25px;\"><div style=\"width:80px;color:#ddd !important;font-weight: normal;text-align: left;border:0;\"><input type=\"checkbox\" [checked]=\"CheckOpp\" (click)=\"checkopp();changeopp()\"></div></th></tr>\r\n          <tr ><th style=\"width:60px;height: 25px;\"><div style=\"width: 60px;color:#ddd !important;font-weight: normal;text-align: left;border:0;\">Height Chart</div></th>\r\n          <th style=\"width:85px;height: 25px;\"><div style=\"width:85px;color:#ddd !important;font-weight: normal;text-align: left;border:0;\"><input type=\"checkbox\" [checked]=\"CheckExtrude\" (click)=\"checkExtrude();changeExtrude();Hide()\"></div></th></tr>  \r\n      </table>\r\n      <hr>\r\n      <table>\r\n        <tr>\r\n        <th class=\"colorkey\" style=\"width: 80px;height: 25px;\"><div class=\"Hide\" style=\"width: 80px;height: 25px;color:#ddd !important;border-color:#395d73;border:0;text-align: left;font-weight: normal;\"><input type=\"button\" value=\"Add Filter\" style=\"color:#395d73;width: 80px;height: 25px;\" (click)=\"addHide()\"></div></th>\r\n        <th style=\"width:20px;height: 25px;\"><div style=\"width:20px;height: 25px;margin-left: 10px\">\r\n          <select class=\"cesium-button-select\"  (change)=\"ChangeHeight($event.target.value)\">\r\n             <option class=\"cesium-option\"  *ngFor=\"let ColorName of ColorNames\" value={{ColorName}}>{{ColorName}}</option>\r\n          </select></div></th>\r\n        </tr>\r\n      </table>\r\n      <div class=\"hide-container\" style=\"margin-top:5px;\">\r\n        <div *ngFor=\"let item of hideElementArr;\" id={{item.divid}}>\r\n      <table>\r\n        <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width:80px;color:#ddd !important;text-align: left;vertical-align: middle;font-weight: normal;\">{{item.HeightHide}}</div></th>\r\n        <th *ngIf=\"item.type === 'number'\" style=\"width:40px;height: 25px;\"><div style=\"width:40px;height: 25px;\">\r\n          <select class=\"cesium-button-select\" [ngModel]=\"item.RelaHide\" (change)=\"Changerelation($event.target.value,item.id)\" style=\"width:40px;height: 25px;\">\r\n             <option class=\"cesium-option\" value=0>></option>\r\n             <option class=\"cesium-option\" value=1><</option>\r\n             <option class=\"cesium-option\" value=2>=</option>\r\n          </select></div></th>\r\n          <th *ngIf=\"item.type === 'category'\" style=\"width:40px;height: 25px;\"><div style=\"width:40px;height: 25px;\">\r\n          <select class=\"cesium-button-select\" [ngModel]=\"item.RelaHide\" (change)=\"ChangeCategory($event.target.value,item.id,0)\" style=\"width:40px;height: 25px;\">\r\n            <option class=\"cesium-option\" value=0>none</option>\r\n            <option class=\"cesium-option\" value=1>=</option>\r\n            <option class=\"cesium-option\" value=2>!=</option>\r\n          </select></div></th>\r\n          <th *ngIf=\"item.type === 'number'\" style=\"width:70px;height: 20px;\"><input type=\"text\" id={{item.id}} value={{item.textHide}} (change)=\"Changetext($event.target.value,item.id)\" style=\"width:70px;height: 20px;\"></th>\r\n          <th *ngIf=\"item.type === 'category'\" style=\"width:73px;height: 25px;\"><div style=\"width:73px;height: 25px;\">\r\n          <select class=\"cesium-button-select\" [ngModel]=\"item.CategaryHide\" (change)=\"ChangeCategory($event.target.value,item.id,1)\" style=\"width:73px;height: 25px;\">\r\n            <option class=\"cesium-option\" *ngFor=\"let caty of item.Category\" value={{caty}}>{{caty}}</option>\r\n          </select></div></th>\r\n        <th style=\"width:30px;height: 25px;\" id={{item.id}}><button class=\"button\"  style=\"width:30px;height: 25px;\" (click)=\"deleteHide(item.id)\"><span id={{item.id}} ><i class=\"fa fa-trash\"  style=\"color:#395d73;\"></i></span></button></th></tr>\r\n      </table>\r\n      <table>\r\n        <tr>\r\n        <th *ngIf=\"item.type === 'number'\" style=\"width:30px;height: 25px;vertical-align: top;padding-top: 10px;\"><div style=\"font-weight: normal;display: inline-block;color:#ddd !important;width:30px;\">{{item.HideMin}}</div></th>\r\n        <th *ngIf=\"item.type === 'number'\" style=\"width:150px;height: 25px;\"><div style=\"font-weight: normal;display: inline-block;width:150px;\"><mat-slider class=\"slider\" name=\"range\" id=\"0\" min={{item.HideMin}} max={{item.HideMax}} step=0.01 thumbLabel=true value={{item.textHide}} #textscale (change)=\"Changetext(textscale.value.toPrecision(2),item.id)\" >\r\n        </mat-slider></div></th>\r\n        <th *ngIf=\"item.type === 'number'\" style=\"width:30px;height: 25px;vertical-align: top;padding-top: 10px;\"><div style=\"font-weight: normal;display: inline-block;color:#ddd !important;width:30px;text-align: left;\">{{item.HideMax}}</div></th></tr>\r\n      </table><hr>\r\n        </div>\r\n      </div>\r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Attributes\">\r\n      <div id=\"AttribsView\"  style=\"margin-left: 5px;margin-top: 5px;\">\r\n        <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\">\r\n          <tr >\r\n            <th style=\"font-size: 10px;font-weight: normal;width: 85px;\"><div style=\"width: 85px;height:16px;background: #395D73;color:white;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;\">ID</div></th>\r\n            <th style=\"font-size: 10px;font-weight: normal;width: 85px\"><div matTooltip={{ID}} style=\"width: 85px;height:16px;background: #395D73;color:white;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;\">{{ID}}</div></th>\r\n          </tr>\r\n        </table>\r\n        <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\">\r\n          <tr *ngFor=\"let Property of Properties\">\r\n            <th style=\"font-size: 10px;font-weight: normal;color:#395d73;width: 85px;height: 14px\"><div matTooltip={{Property.Name}} style=\"width: 85px;height:14px;text-align: left;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;ccursor:pointer;\">{{Property.Name}}</div></th>\r\n            <th style=\"font-size: 10px;font-weight: normal;color:#395d73;width: 85px;height: 14px\"><div matTooltip={{Property.Value}} style=\"width: 85px;height:14px;text-align: left;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;ccursor:pointer;\">{{Property.Value}}</div></th>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</div>"

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
        _this.Filter = false;
        _this.hideElementArr = [];
        _this.ChromaScale = __WEBPACK_IMPORTED_MODULE_2_chroma_js__["scale"]("SPECTRAL");
        _this.HideNum = [];
        _this.ScaleValue = _this.dataService.ScaleValue;
        _this.CheckScale = _this.dataService.CheckScale;
        _this.CheckOpp = _this.dataService.CheckOpp;
        if (_this.dataService.HideNum !== undefined) {
            _this.HideNum = _this.dataService.HideNum;
            _this.hideElementArr = _this.dataService.hideElementArr;
        }
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
            if (this.ColorValue !== this.dataService.ColorValue || this.ColorNames !== this.dataService.propertyNames) {
                this.ColorValue = this.dataService.ColorValue;
                this.ColorNames = this.dataService.propertyNames;
                this.ColorNames.sort();
                this.ColorNames = ["None"].concat(this.ColorNames);
                this.dataService.propertyNames = this.ColorNames;
                this.selectColor = this.ColorValue;
                this.onChangeColor(this.ColorValue);
            }
            if (this.HeightValue !== this.dataService.HeightValue || this.HeightKey !== this.dataService.HeightKey) {
                this.HeightValue = this.dataService.HeightValue;
                this.HeightKey = this.dataService.HeightKey;
                this.HeightKey.sort();
                this.HeightKey = ["None"].concat(this.HeightKey);
                this.dataService.HeightKey = this.HeightKey;
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
            else if (this.HeightValue === "None") {
                var self = this;
                promise.then(function (dataSource) {
                    var entities = dataSource.entities.values;
                    for (var i = 0; i < entities.length; i++) {
                        var entity = entities[i];
                        entity.polygon.extrudedHeight = 0;
                    }
                });
            }
        }
        /*this.Max = Math.max.apply(Math, texts);
        this.Min= Math.min.apply(Math, texts);*/
        this.HeightMax = Math.max.apply(Math, texts);
        this.HeightMin = Math.min.apply(Math, texts);
        //if(this.CheckHide===true) this.Hide();
        this.changescale(this.ScaleValue);
        /*if(this.CheckScale!==undefined&&this.CheckOpp!==undefined&&this.CheckExtrude!==undefined){
          this.changeExtrude();
        }*/
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
            else if (this.ColorValue === "None") {
                var self = this;
                promise.then(function (dataSource) {
                    var entities = dataSource.entities.values;
                    for (var i = 0; i < entities.length; i++) {
                        var entity = entities[i];
                        entity.polygon.material = Cesium.Color.White;
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
            this.Max = max;
            this.Min = min;
            this.colorByNum();
        }
        else if (typeof (texts[0]) === "string") {
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
            this.Max = null;
            this.Min = null;
        }
        /*if(this.CheckScale!==undefined&&this.CheckOpp!==undefined&&this.CheckExtrude!==undefined){
          this.changeExtrude();
        }*/
        //this.changeExtrude();
        /*if(this.data.crs.cesium!==undefined&&this.data.crs.cesium.length!==0){
          this.addHide();
        }*/
        if (this.dataService.hideElementArr === undefined || this.dataService.hideElementArr.length === 0) {
            this.changeExtrude();
        }
        else {
            this.Hide();
        }
        this.dataService.getColorValue(this.ColorValue);
    };
    ToolwindowComponent.prototype.changeColorMin = function (Min) {
        this.Min = Number(Min);
        this.dataService.MinColor = Number(Min);
        //this.changeExtrude();
        //this.Hide();
        if (this.dataService.hideElementArr === undefined || this.dataService.hideElementArr.length === 0) {
            this.changeExtrude();
        }
        else {
            this.Hide();
        }
    };
    ToolwindowComponent.prototype.changeColorMax = function (Max) {
        this.Max = Number(Max);
        this.dataService.MaxColor = Number(Max);
        //this.changeExtrude();
        //this.Hide();
        if (this.dataService.hideElementArr === undefined || this.dataService.hideElementArr.length === 0) {
            this.changeExtrude();
        }
        else {
            this.Hide();
        }
    };
    ToolwindowComponent.prototype.changeHeightMin = function (Min) {
        this.HeightMin = Number(Min);
        this.dataService.MinHeight = Number(Min);
        //this.changeExtrude();
        //this.Hide();
        if (this.dataService.hideElementArr === undefined || this.dataService.hideElementArr.length === 0) {
            this.changeExtrude();
        }
        else {
            this.Hide();
        }
    };
    ToolwindowComponent.prototype.changeHeightMax = function (Max) {
        this.HeightMax = Number(Max);
        this.dataService.MaxHeight = Number(Max);
        //this.changeExtrude();
        /*console.log(this.dataService.hideElementArr);
        this.Hide();*/
        if (this.dataService.hideElementArr === undefined || this.dataService.hideElementArr.length === 0) {
            this.changeExtrude();
        }
        else {
            this.Hide();
        }
    };
    ToolwindowComponent.prototype.colorByNum = function () {
        var max = this.dataService.MaxColor;
        var min = this.dataService.MinColor;
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
        //var Max=Math.max.apply(Math, this.texts);
        var Max = this.HeightMax;
        this.ScaleValue = Number(ScaleValue);
        /*var scale:number=this.ScaleValue;
        if(this.CheckScale===true){
          var promise=this.dataService.cesiumpromise;
          var self= this;
          if(self.CheckOpp===false){
            promise.then(function(dataSource) {
              var entities = dataSource.entities.values;
              for (var i = 0; i < entities.length; i++) {
                var entity=entities[i];
                if(entity.properties[self.HeightValue]!==undefined){
                if(entity.properties[self.HeightValue]._value!==" "){
                  entity.polygon.extrudedHeight =Math.min(entity.properties[self.HeightValue]._value,Max)*scale;
                }
                }
              }
            });
          }else{
            promise.then(function(dataSource) {
              var entities = dataSource.entities.values;
              for (var i = 0; i < entities.length; i++) {
                var entity=entities[i];
                if(entity.properties[self.HeightValue]!==undefined){
                if(entity.properties[self.HeightValue]._value!==" "){
                  entity.polygon.extrudedHeight =(Max-Math.min((entity.properties[self.HeightValue]._value),Max))*scale;
                }
                }
              }
            });
          }
          /*this.Hide();*/
        /*}else{
          var promise=this.dataService.cesiumpromise;
          var self= this;
          if(self.CheckOpp===false){
            promise.then(function(dataSource) {
              var entities = dataSource.entities.values;
              for (var i = 0; i < entities.length; i++) {
                var entity=entities[i];
                if(entity.properties[self.HeightValue]!==undefined){
                if(entity.properties[self.HeightValue]._value!==" "){
                  entity.polygon.extrudedHeight =Math.min(entity.properties[self.HeightValue]._value,Max);
                }
                }
              }
            });
          }else{
            promise.then(function(dataSource) {
              var entities = dataSource.entities.values;
              for (var i = 0; i < entities.length; i++) {
                var entity=entities[i];
                if(entity.properties[self.HeightValue]!==undefined){
                if(entity.properties[self.HeightValue]._value!==" "){
                  entity.polygon.extrudedHeight =Max-Math.min((entity.properties[self.HeightValue]._value),Max);
                }
                }
              }
            });
          }
        }*/
        //this.changeExtrude();
        /*if(this.CheckScale!==undefined&&this.CheckOpp!==undefined&&this.CheckExtrude!==undefined){
          this.changeExtrude();
        }else{
          //this.ScaleValue=Number(ScaleValue);
          var scale:number=this.ScaleValue;
          if(this.CheckScale===true){
            var promise=this.dataService.cesiumpromise;
            var self= this;
            if(self.CheckOpp===false){
              promise.then(function(dataSource) {
                var entities = dataSource.entities.values;
                for (var i = 0; i < entities.length; i++) {
                  var entity=entities[i];
                  if(entity.properties[self.HeightValue]!==undefined){
                  if(entity.properties[self.HeightValue]._value!==" "){
                    entity.polygon.extrudedHeight =Math.min(entity.properties[self.HeightValue]._value,Max)*scale;
                  }
                  }
                }
              });
            }else{
              promise.then(function(dataSource) {
                var entities = dataSource.entities.values;
                for (var i = 0; i < entities.length; i++) {
                  var entity=entities[i];
                  if(entity.properties[self.HeightValue]!==undefined){
                  if(entity.properties[self.HeightValue]._value!==" "){
                    entity.polygon.extrudedHeight =(Max-Math.min((entity.properties[self.HeightValue]._value),Max))*scale;
                  }
                  }
                }
              });
            }
            /*this.Hide();*/
        /*}else{
          var promise=this.dataService.cesiumpromise;
          var self= this;
          if(self.CheckOpp===false){
            promise.then(function(dataSource) {
              var entities = dataSource.entities.values;
              for (var i = 0; i < entities.length; i++) {
                var entity=entities[i];
                if(entity.properties[self.HeightValue]!==undefined){
                if(entity.properties[self.HeightValue]._value!==" "){
                  entity.polygon.extrudedHeight =Math.min(entity.properties[self.HeightValue]._value,Max);
                }
                }
              }
            });
          }else{
            promise.then(function(dataSource) {
              var entities = dataSource.entities.values;
              for (var i = 0; i < entities.length; i++) {
                var entity=entities[i];
                if(entity.properties[self.HeightValue]!==undefined){
                if(entity.properties[self.HeightValue]._value!==" "){
                  entity.polygon.extrudedHeight =Max-Math.min((entity.properties[self.HeightValue]._value),Max);
                }
                }
              }
            });
          }
        }
      }*/
        if (this.dataService.hideElementArr === undefined || this.dataService.hideElementArr.length === 0) {
            this.changeExtrude();
        }
        else {
            this.Hide();
        }
        //this.Hide();
        this.dataService.ScaleValue = this.ScaleValue;
    };
    ToolwindowComponent.prototype.checkscale = function () {
        this.CheckScale = !this.CheckScale;
        this.dataService.CheckScale = this.CheckScale;
    };
    ToolwindowComponent.prototype.addHide = function () {
        var lastnumber;
        /* if(this.data.crs.cesium!==undefined&&this.data.crs.cesium.length!==0){
           if(this.Filter===false){
             for(var i=0;i<this.data.crs.cesium.Filter.length;i++){
               if(this.HideNum.length===0) {this.HideNum[0]="0";lastnumber=this.HideNum[0]}
               else{
                 for(var i=0;i<this.HideNum.length+1;i++){
                   if(this.HideNum.indexOf(String(i))===-1){
                     this.HideNum.push(String(i));
                     lastnumber=String(i);
                     break;
                   }
                 }
               }
               var propertyname=this.data.crs.cesium.Filter[i].name;
               var relation=Number(this.data.crs.cesium.Filter[i].relation);
               var text=this.data.crs.cesium.Filter[i].text;
               if(typeof(text)==="number"){this.HideType="number";var texts=this.Initial(propertyname);}else if(typeof(text)==="string"){this.HideType="category";var texts=this.Initial(propertyname);}
               this.hideElementArr.push({divid:String("addHide".concat(String(lastnumber))),id: lastnumber,HeightHide:propertyname,type:this.HideType,Category:texts,CategaryHide:text,RelaHide:relation,textHide: text,
                                     HideMax:Math.ceil(Math.max.apply(Math, texts)),HideMin:Math.round(Math.min.apply(Math, texts)*100)/100});
             }
     
           }
           this.Hide();
         }*/
        //if(this.Filter===true){
        if (this.dataService.HideNum !== undefined) {
            this.HideNum = this.dataService.HideNum;
            this.hideElementArr = this.dataService.hideElementArr;
        }
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
        else if (typeof (texts[0]) === "string") {
            this.HideType = "category";
        }
        this.hideElementArr.push({ divid: String("addHide".concat(String(lastnumber))), id: lastnumber, HeightHide: this.HideValue, type: this.HideType, Category: texts, CategaryHide: texts[0], RelaHide: 0, textHide: Math.round(Math.min.apply(Math, texts) * 100) / 100,
            HideMax: Math.ceil(Math.max.apply(Math, texts)), HideMin: Math.round(Math.min.apply(Math, texts) * 100) / 100 });
        //return;
        //}
        this.dataService.hideElementArr = this.hideElementArr;
        this.dataService.HideNum = this.HideNum;
        this.Filter = true;
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
        this.dataService.hideElementArr = this.hideElementArr;
        this.dataService.HideNum = this.HideNum;
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
        this.dataService.hideElementArr = this.hideElementArr;
    };
    ToolwindowComponent.prototype.ChangeCategory = function (categary, id, type) {
        var scale = this.ScaleValue / this.Max;
        var index = this.HideNum.indexOf(id);
        var promise = this.dataService.cesiumpromise;
        if (type === 1) {
            this.hideElementArr[index].CategaryHide = categary;
        }
        if (type === 0) {
            this.hideElementArr[index].RelaHide = Number(categary);
        }
        this.Hide();
        this.dataService.hideElementArr = this.hideElementArr;
    };
    ToolwindowComponent.prototype.Changetext = function (value, id) {
        var index = this.HideNum.indexOf(id);
        this.hideElementArr[index].textHide = value;
        this.Hide();
        this.dataService.hideElementArr = this.hideElementArr;
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
                return value === undefined;
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
        var scale = this.ScaleValue;
        var Max = this.HeightMax;
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
                                if (self.CheckExtrude === true) {
                                    if (entity.polyline.show !== undefined)
                                        entity.polyline.show = false;
                                }
                                break;
                            }
                            else {
                                self.ColorByNumCat(entity);
                                if (self.CheckScale === true) {
                                    if (self.CheckOpp === true) {
                                        if (self.CheckExtrude === true) {
                                            var center = self.dataService.poly_center[i];
                                            entity.polyline = new Cesium.PolylineGraphics({
                                                positions: new Cesium.Cartesian3.fromDegreesArrayHeights([center[0], center[1], 0, center[0], center[1], (Math.min((Max - entity.properties[self.HeightValue]._value), Max)) * scale]),
                                                width: center[2],
                                                material: entity.polygon.material,
                                                show: true
                                            });
                                        }
                                        else {
                                            entity.polygon.extrudedHeight = (Math.min((Max - entity.properties[self.HeightValue]._value), Max)) * scale; //(self.HeightMax-entity.properties[self.HeightValue]._value)*scale;
                                        }
                                    }
                                    else {
                                        if (self.CheckExtrude === true) {
                                            var center = self.dataService.poly_center[i];
                                            entity.polyline = new Cesium.PolylineGraphics({
                                                positions: new Cesium.Cartesian3.fromDegreesArrayHeights([center[0], center[1], 0, center[0], center[1], (Math.min((entity.properties[self.HeightValue]._value), Max)) * scale]),
                                                width: center[2],
                                                material: entity.polygon.material,
                                                show: true
                                            });
                                        }
                                        else {
                                            entity.polygon.extrudedHeight = (Math.min((entity.properties[self.HeightValue]._value), Max)) * scale; //entity.properties[self.HeightValue]._value*scale;
                                        }
                                    }
                                }
                                else {
                                    if (self.CheckOpp === true) {
                                        if (self.CheckExtrude === true) {
                                            var center = self.dataService.poly_center[i];
                                            entity.polyline = new Cesium.PolylineGraphics({
                                                positions: new Cesium.Cartesian3.fromDegreesArrayHeights([center[0], center[1], 0, center[0], center[1], (Math.min((Max - entity.properties[self.HeightValue]._value), Max))]),
                                                width: center[2],
                                                material: entity.polygon.material,
                                                show: true
                                            });
                                        }
                                        else {
                                            entity.polygon.extrudedHeight = (Math.min((Max - entity.properties[self.HeightValue]._value), Max)); //self.HeightMax-entity.properties[self.HeightValue]._value;
                                        }
                                    }
                                    else {
                                        if (self.CheckExtrude === true) {
                                            var center = self.dataService.poly_center[i];
                                            entity.polyline = new Cesium.PolylineGraphics({
                                                positions: new Cesium.Cartesian3.fromDegreesArrayHeights([center[0], center[1], 0, center[0], center[1], (Math.min((entity.properties[self.HeightValue]._value), Max))]),
                                                width: center[2],
                                                material: entity.polygon.material,
                                                show: true
                                            });
                                        }
                                        else {
                                            entity.polygon.extrudedHeight = (Math.min(entity.properties[self.HeightValue]._value, Max));
                                        }
                                    }
                                }
                            }
                        }
                        else if (typeof (value) === "string") {
                            if (self._compareCat(value, text[j_1], relation[j_1])) {
                                entity.polygon.extrudedHeight = 0;
                                entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                                if (self.CheckExtrude === true) {
                                    if (entity.polyline.show !== undefined)
                                        entity.polyline.show = false;
                                }
                                break;
                            }
                            else {
                                self.ColorByNumCat(entity);
                                if (self.CheckScale === true) {
                                    if (self.CheckOpp === true) {
                                        if (self.CheckExtrude === true) {
                                            var center = self.dataService.poly_center[i];
                                            entity.polyline = new Cesium.PolylineGraphics({
                                                positions: new Cesium.Cartesian3.fromDegreesArrayHeights([center[0], center[1], 0, center[0], center[1], (Math.min((Max - entity.properties[self.HeightValue]._value), Max)) * scale]),
                                                width: center[2],
                                                material: entity.polygon.material,
                                                show: true
                                            });
                                        }
                                        else {
                                            entity.polygon.extrudedHeight = (self.HeightMax - entity.properties[self.HeightValue]._value) * scale;
                                        }
                                    }
                                    else {
                                        if (self.CheckExtrude === true) {
                                            var center = self.dataService.poly_center[i];
                                            entity.polyline = new Cesium.PolylineGraphics({
                                                positions: new Cesium.Cartesian3.fromDegreesArrayHeights([center[0], center[1], 0, center[0], center[1], (Math.min((entity.properties[self.HeightValue]._value), Max)) * scale]),
                                                width: center[2],
                                                material: entity.polygon.material,
                                                show: true
                                            });
                                        }
                                        else {
                                            entity.polygon.extrudedHeight = Math.min((entity.properties[self.HeightValue]._value), Max) * scale;
                                        }
                                    }
                                }
                                else {
                                    if (self.CheckOpp === true) {
                                        if (self.CheckExtrude === true) {
                                            var center = self.dataService.poly_center[i];
                                            entity.polyline = new Cesium.PolylineGraphics({
                                                positions: new Cesium.Cartesian3.fromDegreesArrayHeights([center[0], center[1], 0, center[0], center[1], (Math.min((Max - entity.properties[self.HeightValue]._value), Max))]),
                                                width: center[2],
                                                material: entity.polygon.material,
                                                show: true
                                            });
                                        }
                                        else {
                                            entity.polygon.extrudedHeight = (Math.min((Max - entity.properties[self.HeightValue]._value), Max)); //self.HeightMax-entity.properties[self.HeightValue]._value;
                                        }
                                    }
                                    else {
                                        if (self.CheckExtrude === true) {
                                            var center = self.dataService.poly_center[i];
                                            entity.polyline = new Cesium.PolylineGraphics({
                                                positions: new Cesium.Cartesian3.fromDegreesArrayHeights([center[0], center[1], 0, center[0], center[1], (Math.min(entity.properties[self.HeightValue]._value, Max))]),
                                                width: center[2],
                                                material: entity.polygon.material,
                                                show: true
                                            });
                                        }
                                        else {
                                            entity.polygon.extrudedHeight = Math.min(entity.properties[self.HeightValue]._value, Max); //entity.properties[self.HeightValue]._value;
                                        }
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
            //var max = Math.max.apply(Math, self.texts);
            //var min = Math.min.apply(Math, self.texts);
            var max = this.dataService.MaxColor;
            var min = this.dataService.MinColor;
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
        /*var Max=this.HeightMax;
        var scale:number=Number(this.ScaleValue);
        if(this.CheckOpp===true){
          var promise=this.dataService.cesiumpromise;
          var self= this;
          if(self.CheckScale===true){
            //var scale:number=self.ScaleValue;
            if(self.CheckExtrude===false){
              promise.then(function(dataSource) {
                var entities = dataSource.entities.values;
                for (var i = 0; i < entities.length; i++) {
                  var entity=entities[i];
                  entity.polylin.show=false;
                  if(entity.properties[self.HeightValue]!==undefined){
                    if(entity.properties[self.HeightValue]._value!==" "){
                      entity.polygon.extrudedHeight =(Math.min((self.HeightMax-entity.properties[self.HeightValue]._value),Max))*scale;
                    }
                  }
                }
              });
            }else{
              promise.then(function(dataSource) {
                var entities = dataSource.entities.values;
                for (var i = 0; i < entities.length; i++) {
                  var entity=entities[i];
                  if(entity.properties[self.HeightValue]!==undefined){
                    if(entity.properties[self.HeightValue]._value!==" "){
                      entity.polygon.extrudedHeight =(Math.min(Max-entity.properties[self.HeightValue]._value,Max))*scale;
                    }
                  }
                }
              });
            }
          }else{
            promise.then(function(dataSource) {
              var entities = dataSource.entities.values;
              for (var i = 0; i < entities.length; i++) {
                var entity=entities[i];
                if(entity.properties[self.HeightValue]!==undefined){
                if(entity.properties[self.HeightValue]._value!==" "){
                  entity.polygon.extrudedHeight =Math.min(Max-entity.properties[self.HeightValue]._value,Max);
                }
                }
              }
            });
          }
        }else{
          this.changescale(this.ScaleValue);
        }*/
        //this.changeExtrude();
        //this.Hide();
        if (this.dataService.hideElementArr === undefined || this.dataService.hideElementArr.length === 0) {
            this.changeExtrude();
        }
        else {
            this.Hide();
        }
    };
    ToolwindowComponent.prototype.checkopp = function () {
        this.CheckOpp = !this.CheckOpp;
        this.dataService.CheckOpp = this.CheckOpp;
        /*this.changeExtrude();*/
        //this.Hide();
        if (this.dataService.hideElementArr === undefined || this.dataService.hideElementArr.length === 0) {
            this.changeExtrude();
        }
        else {
            this.Hide();
        }
    };
    ToolwindowComponent.prototype.changeExtrude = function () {
        if (typeof (this.texts[0]) === "number") {
            this.colorByNum();
        }
        //var Max=Math.max.apply(Math, this.texts);
        var Max = this.HeightMax;
        var scale = Number(this.ScaleValue);
        if (this.CheckExtrude === true) {
            if (this.CheckScale === true) {
                if (this.CheckOpp === true) {
                    var promise = this.dataService.cesiumpromise;
                    var self = this;
                    promise.then(function (dataSource) {
                        var entities = dataSource.entities.values;
                        for (var i = 0; i < entities.length; i++) {
                            var entity = entities[i];
                            entity.polygon.extrudedHeight = 0;
                            var center = self.dataService.poly_center[i];
                            entity.polyline = new Cesium.PolylineGraphics({
                                positions: new Cesium.Cartesian3.fromDegreesArrayHeights([center[0], center[1], 0, center[0], center[1], (Max - Math.min((entity.properties[self.HeightValue]._value), Max)) * scale]),
                                width: center[2],
                                material: entity.polygon.material,
                                show: true
                            });
                        }
                    });
                }
                else {
                    var promise = this.dataService.cesiumpromise;
                    var self = this;
                    promise.then(function (dataSource) {
                        var entities = dataSource.entities.values;
                        for (var i = 0; i < entities.length; i++) {
                            var entity = entities[i];
                            entity.polygon.extrudedHeight = 0;
                            var center = self.dataService.poly_center[i];
                            entity.polyline = new Cesium.PolylineGraphics({
                                positions: new Cesium.Cartesian3.fromDegreesArrayHeights([center[0], center[1], 0, center[0], center[1], (Math.min(entity.properties[self.HeightValue]._value, Max)) * scale]),
                                width: center[2],
                                material: entity.polygon.material,
                                show: true
                            });
                        }
                    });
                }
            }
            else {
                if (this.CheckOpp === true) {
                    var promise = this.dataService.cesiumpromise;
                    var self = this;
                    promise.then(function (dataSource) {
                        var entities = dataSource.entities.values;
                        for (var i = 0; i < entities.length; i++) {
                            var entity = entities[i];
                            entity.polygon.extrudedHeight = 0;
                            var center = self.dataService.poly_center[i];
                            entity.polyline = new Cesium.PolylineGraphics({
                                positions: new Cesium.Cartesian3.fromDegreesArrayHeights([center[0], center[1], 0, center[0], center[1], (Max - Math.min((entity.properties[self.HeightValue]._value), Max))]),
                                width: center[2],
                                material: entity.polygon.material,
                                show: true
                            });
                        }
                    });
                }
                else {
                    var promise = this.dataService.cesiumpromise;
                    var self = this;
                    promise.then(function (dataSource) {
                        var entities = dataSource.entities.values;
                        for (var i = 0; i < entities.length; i++) {
                            var entity = entities[i];
                            entity.polygon.extrudedHeight = 0;
                            var center = self.dataService.poly_center[i];
                            entity.polyline = new Cesium.PolylineGraphics({
                                positions: new Cesium.Cartesian3.fromDegreesArrayHeights([center[0], center[1], 0, center[0], center[1], (Math.min(entity.properties[self.HeightValue]._value, Max))]),
                                width: center[2],
                                material: entity.polygon.material,
                                show: true
                            });
                        }
                    });
                }
            }
        }
        else {
            var promise = this.dataService.cesiumpromise;
            var self = this;
            /*promise.then(function(dataSource) {
              var entities = dataSource.entities.values;
              for (var i = 0; i < entities.length; i++) {
                var entity=entities[i];
                entity.polyline.show=false;*/
            if (self.CheckScale === true) {
                if (self.CheckOpp === true) {
                    promise.then(function (dataSource) {
                        var entities = dataSource.entities.values;
                        for (var i = 0; i < entities.length; i++) {
                            var entity = entities[i];
                            if (entity.polyline !== undefined)
                                entity.polyline.show = false;
                            entity.polygon.extrudedHeight = (Max - Math.min((entity.properties[self.HeightValue]._value), Max)) * scale;
                        }
                    });
                }
                else {
                    promise.then(function (dataSource) {
                        var entities = dataSource.entities.values;
                        for (var i = 0; i < entities.length; i++) {
                            var entity = entities[i];
                            if (entity.polyline !== undefined)
                                entity.polyline.show = false;
                            entity.polygon.extrudedHeight = (Math.min(entity.properties[self.HeightValue]._value, Max)) * scale;
                        }
                    });
                }
            }
            else {
                if (self.CheckOpp === true) {
                    promise.then(function (dataSource) {
                        var entities = dataSource.entities.values;
                        for (var i = 0; i < entities.length; i++) {
                            var entity = entities[i];
                            if (entity.polyline !== undefined)
                                entity.polyline.show = false;
                            entity.polygon.extrudedHeight = (Max - Math.min((entity.properties[self.HeightValue]._value), Max));
                        }
                    });
                }
                else {
                    promise.then(function (dataSource) {
                        var entities = dataSource.entities.values;
                        for (var i = 0; i < entities.length; i++) {
                            var entity = entities[i];
                            if (entity.polyline !== undefined)
                                entity.polyline.show = false;
                            entity.polygon.extrudedHeight = (Math.min(entity.properties[self.HeightValue]._value, Max));
                        }
                    });
                }
            }
        }
        /*});
  
  
      }*/
    };
    ToolwindowComponent.prototype.checkExtrude = function () {
        this.CheckExtrude = !this.CheckExtrude;
        this.dataService.CheckExtrude = this.CheckExtrude;
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

module.exports = "body{\r\n  background: red;\r\n}\r\n\r\n\r\n#cesiumContainer{\r\n height: 100%;\r\n width: 100%; \r\n font-family: sans-serif !important;\r\n margin: 0px !important;\r\n padding: 0px !important;\r\n font-size: 14px;\r\n}\r\n\r\n\r\n#ColorBar{\r\n  z-index:99;\r\n  margin: 5px;\r\n  width: 100%;\r\n  padding: 2px 5px;\r\n  position: absolute;\r\n  display:inline-block;\r\n  bottom: 1px;\r\n  overflow: hidden !important;\r\n  text-overflow: ellipsis !important;\r\n  table-layout:fixed !important;\r\n  white-space: nowrap !important;\r\n}\r\n\r\n\r\n/*.cesium-button {\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  color: white;\r\n  fill: #395D73;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  background: #395D73;\r\n}\r\n.cesium-option,.Hide{\r\n  background-color: #395D73;\r\n  color: white;\r\n  border: 1px solid #8AA8C0;\r\n}\r\n.Hide{\r\n  margin: auto;\r\n  width:80px;\r\n  height: 20px;\r\n  word-wrap:break-word;\r\n  font-weight: normal;\r\n  color:white;\r\n  font-family:sans-serif !important;\r\n  font-size: 14px !important;\r\n}\r\n\r\n.cesium-infoBox-title{\r\n  height:14px;\r\n  background: #395D73;\r\n}\r\n.cesium-viewer{\r\n  font-size: 14px !important;\r\n}\r\nbody{\r\n  font-size: 10px;\r\n}\r\n\r\n.cesium-infoBox-description{\r\n  background-color: red !important;\r\n}\r\n\r\n.cesium-infoBox-description table{\r\n  background-color: #F1F1F1;\r\n}\r\n.cesium-infoBox-iframe{\r\n  max-height: 300px !important;\r\n  height:650px !important;\r\n}\r\n#ColorandHeight{\r\n  position: absolute;\r\n  bottom: 10px;\r\n  width: 100%;\r\n  z-index: 98;\r\n  height: 60px;\r\n  display:inline-block;\r\n}\r\n#toolbar{\r\n  z-index:99;\r\n  margin: 5px;\r\n  width: 100%;\r\n  padding: 2px 5px;\r\n  position: absolute;\r\n  display:inline-block;\r\n  bottom: 1px;\r\n  overflow: hidden !important;\r\n  text-overflow: ellipsis !important;\r\n  table-layout:fixed !important;\r\n  white-space: nowrap !important;\r\n}\r\n.colorkey{\r\n  overflow: hidden !important;\r\n  text-overflow: ellipsis !important;\r\n  table-layout:fixed !important;\r\n  white-space: nowrap !important;\r\n}\r\n.table_text{\r\n  margin: auto;\r\n  width:40px;\r\n  word-wrap:break-word;\r\n  font-weight: normal;\r\n  color:white;\r\n  text-shadow: 0px 0px 3px black;\r\n}*/\r\n\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/viewer/viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"cesiumContainer\" (click)=\"select();showAttribs($event);\">\r\n  <div id=\"ColorBar\" *ngIf=\"texts!==undefined\">\r\n  \t<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" style=\"width: 88%;margin-left: 9%\">\r\n       <tr >\r\n          <th *ngFor=\"let text of texts;\" style=\"text-align:right;width: 7%\"><div  style=\"width: 8%;vertical-align: text-top;color:white;text-shadow: 0px 0px 3px black;\">{{text}}</div></th><!-- writing-mode:vertical-lr; -->\r\n        </tr>\r\n    </table>\r\n\t<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" style=\"width: 80%;margin: 0 auto;\">\r\n       <tr>\r\n          <th  *ngFor=\"let color of Colorbar;let indx=index\" style=\"width: 0.5px;\" ><div [ngStyle]=\"{ 'background-color': color}\" ><div *ngIf=\"indx%8===0\" style=\"border-left: #FFFFFF 1px solid;border-color: black\">&nbsp;</div><div *ngIf=\"indx%8!==0\">&nbsp;</div></div></th>\r\n        </tr>\r\n    </table>\r\n  </div>\r\n  <div id=\"ColorBar\" *ngIf=\"Cattexts!==undefined\" style=\"width: 100%;text-align: center\">\r\n    <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" *ngFor=\"let cattext of Cattexts\" style=\"display:inline-block;overflow: hidden !important;text-overflow: ellipsis !important;table-layout:fixed !important;white-space: nowrap !important; \">\r\n          <tr >\r\n            <th  style=\"width:80px;display:inline-block;overflow: hidden !important;text-overflow: ellipsis !important;table-layout:fixed !important;white-space: nowrap !important; \"><div [ngStyle]=\"{ 'background-color': cattext.color}\" >&nbsp;&nbsp;&nbsp;</div></th>\r\n        </tr>\r\n        <tr>\r\n            <th><div matTooltip={{cattext.text}}  style=\"width:80px;text-align: left;white-space: nowrap;display:inline-block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;color:white;text-shadow: 0px 0px 3px black;\">{{cattext.text}}</div></th>\r\n          </tr>\r\n        </table>\r\n  </div>\r\n  <div>\r\n    <table id=\"cesium-infoBox-defaultTable\" style=\"width: 140px;position:absolute;padding:4px;background-color:white;display: none;\">\r\n       <tr *ngFor=\"let pickupArr of pickupArrs\"><th style=\"font-size: 10px;font-weight: normal;color:#395d73;width: 60px;height: 14px\"><div matTooltip={{pickupArr.name}} style=\"width: 60px;height:14px;text-align: left;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;\">{{pickupArr.name}}</div></th><th style=\"font-size: 10px;font-weight: normal;color:#395d73;width: 80px;height: 14px\"><div matTooltip={{pickupArr.data}} style=\"width: 80px;height:14px;text-align: left;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;\">{{pickupArr.data}}</div></th></tr>\r\n       </table>\r\n     </div>\r\n</div>"

/***/ }),

/***/ "./src/app/mobius-cesium/viewer/viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewerComponent; });
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



var ViewerComponent = /** @class */ (function (_super) {
    __extends(ViewerComponent, _super);
    function ViewerComponent(injector, myElement) {
        var _this = _super.call(this, injector) || this;
        _this.selectEntity = null;
        _this.myElement = myElement;
        _this.Colorbar = [];
        _this.ChromaScale = __WEBPACK_IMPORTED_MODULE_2_chroma_js__["scale"]("SPECTRAL");
        for (var i = 79; i > -1; i--) {
            _this.Colorbar.push(_this.ChromaScale(i / 80));
        }
        return _this;
    }
    ViewerComponent.prototype.ngDoCheck = function () {
        if (this.ColorValue !== this.dataService.ColorValue) {
            this.ColorValue = this.dataService.ColorValue;
            this.ChromaScale = this.dataService.ChromaScale;
            this.Colorbar = [];
            for (var i = 79; i > -1; i--) {
                this.Colorbar.push(this.ChromaScale(i / 80));
            }
            this.Colortext();
        }
        if (this.Max !== this.dataService.MaxColor) {
            this.Max = this.dataService.MaxColor;
            this.Colortext();
        }
        if (this.Min !== this.dataService.MinColor) {
            this.Min = this.dataService.MinColor;
            this.Colortext();
        }
    };
    ViewerComponent.prototype.ngOnInit = function () {
    };
    ViewerComponent.prototype.notify = function (message) {
        if (message == "model_update") {
            this.data = this.dataService.getGsModel();
            try {
                //if(this.data!==undefined){
                this.LoadData(this.data);
                //}
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
            infoBox: false,
            imageryProvider: Cesium.createOpenStreetMapImageryProvider({
                url: 'https://stamen-tiles.a.ssl.fastly.net/toner/'
            }),
            timeline: false,
            fullscreenButton: false,
            automaticallyTrackDataSourceClocks: false,
            animation: false
        });
        viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function (e) {
            e.cancel = true;
            viewer.zoomTo(promise);
        });
        document.getElementsByClassName('cesium-viewer-bottom')[0].remove();
        if (this.data !== undefined) {
            this.viewer = viewer;
            this.dataService.viewer = this.viewer;
            this.data = data;
            this.poly_center = [];
            var promise = Cesium.GeoJsonDataSource.load(this.data);
            var self = this;
            var HeightKey = [];
            promise.then(function (dataSource) {
                viewer.dataSources.add(dataSource);
                var entities = dataSource.entities.values;
                for (var i = 0; i < entities.length; i++) {
                    var texts = [];
                    var poly_center = [];
                    var entity = entities[i];
                    entity.polygon.outlineColor = Cesium.Color.Black;
                    var center = Cesium.BoundingSphere.fromPoints(entity.polygon.hierarchy.getValue().positions).center;
                    var radius = Math.round(Cesium.BoundingSphere.fromPoints(entity.polygon.hierarchy.getValue().positions).radius / 100);
                    var longitudeString = Cesium.Math.toDegrees(Cesium.Ellipsoid.WGS84.cartesianToCartographic(center).longitude).toFixed(10);
                    var latitudeString = Cesium.Math.toDegrees(Cesium.Ellipsoid.WGS84.cartesianToCartographic(center).latitude).toFixed(10);
                    poly_center = [longitudeString, latitudeString, radius];
                    self.poly_center.push(poly_center);
                }
                self.dataService.poly_center = self.poly_center;
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
            if (this.dataService.ColorValue === undefined) {
                this.ColorValue = this.propertyNames.sort()[0];
                this.dataService.ColorValue = this.ColorValue;
            }
            else if (this.propertyNames.indexOf(this.dataService.ColorValue) === -1) {
                this.ColorValue = this.propertyNames.sort()[0];
                this.dataService.ColorValue = this.ColorValue;
            }
            else {
                this.ColorValue = this.dataService.ColorValue;
            }
            if (this.dataService.HeightValue === undefined) {
                this.HeightValue = HeightKey.sort()[0];
                this.dataService.HeightValue = this.HeightValue;
            }
            else if (HeightKey.indexOf(this.dataService.HeightValue) === -1) {
                this.HeightValue = HeightKey.sort()[0];
                this.dataService.HeightValue = this.HeightValue;
            }
            else {
                this.HeightValue = this.dataService.HeightValue;
            }
            viewer.zoomTo(promise);
            this.Colortext();
        }
    };
    ViewerComponent.prototype.Colortext = function () {
        this.texts = undefined;
        this.Cattexts = undefined;
        var propertyname = this.ColorValue;
        var texts = [];
        var promise = this.dataService.cesiumpromise;
        var self = this;
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];
                if (entity.properties[propertyname] !== undefined) {
                    if (entity.properties[propertyname]._value !== " " && typeof (entity.properties[propertyname]._value) === "number") {
                        if (texts.length === 0) {
                            texts[0] = entity.properties[propertyname]._value;
                        }
                        else {
                            if (texts.indexOf(entity.properties[propertyname]._value) === -1)
                                texts.push(entity.properties[propertyname]._value);
                        }
                    }
                    else if (entity.properties[propertyname]._value !== " " && typeof (entity.properties[propertyname]._value) === "string") {
                        if (texts.length === 0) {
                            texts[0] = entity.properties[propertyname]._value;
                        }
                        else {
                            if (texts.indexOf(entity.properties[propertyname]._value) === -1)
                                texts.push(entity.properties[propertyname]._value);
                        }
                    }
                }
            }
        });
        if (typeof (texts[0]) === "number") {
            this.ChromaScale = __WEBPACK_IMPORTED_MODULE_2_chroma_js__["scale"]("SPECTRAL");
            if (this.dataService.MaxColor === undefined) {
                this.Max = Math.max.apply(Math, texts);
                this.Min = Math.min.apply(Math, texts);
                var Max = this.Max;
                var Min = this.Min;
            }
            else {
                var Max = this.Max;
                var Min = this.Min;
            }
            if (Max <= 1) {
                this.texts = [Min];
                for (var i = 1; i < 10; i++) {
                    this.texts.push((Min + (Max - Min) * (i / 10)).toFixed(3));
                }
                this.texts.push(Max);
            }
            else if (Max > 1000) {
                var number = String((Min / 1000).toFixed(2)).concat("K");
                this.texts = [number];
                for (var i = 1; i < 10; i++) {
                    var number = String(((Min + (Max - Min) * (i / 10)) / 1000).toFixed(2)).concat("K");
                    this.texts.push(number);
                }
                var number = String((Max / 1000).toFixed(2)).concat("K");
                this.texts.push(number);
            }
            else if (Max > 1000000) {
                var number = String((Min / 1000000).toFixed(2)).concat("M");
                this.texts = [number];
                for (var i = 1; i < 10; i++) {
                    var number = String(((Min + (Max - Min) * (i / 10)) / 1000000).toFixed(2)).concat("M");
                    this.texts.push(number);
                }
                var number = String((Max / 1000000).toFixed(2)).concat("M");
                this.texts.push(number);
            }
            else if (Max > 1000000000) {
                var number = String((Min / 1000000000).toFixed(2)).concat("B");
                this.texts = [number];
                for (var i = 1; i < 10; i++) {
                    var number = String(((Min + (Max - Min) * (i / 10)) / 1000000000).toFixed(2)).concat("B");
                    this.texts.push(number);
                }
                var number = String((Max / 1000000000).toFixed(2)).concat("B");
                this.texts.push(number);
            }
            else if (Max >= 1 && Max <= 1000) {
                this.texts = [Math.round(Min)];
                for (var i = 1; i < 10; i++) {
                    this.texts.push(Math.round(Min + (Max - Min) * (i / 10)));
                }
                this.texts.push(Math.round(Max));
            }
        }
        if (typeof (texts[0]) === "string") {
            this.Cattexts = [];
            for (var j = 0; j < texts.length; j++) {
                var ColorKey = [];
                ColorKey.text = texts[j];
                this.ChromaScale = __WEBPACK_IMPORTED_MODULE_2_chroma_js__["scale"]("SPECTRAL");
                ColorKey.color = this.ChromaScale((j / texts.length).toFixed(2));
                this.Cattexts.push(ColorKey);
            }
        }
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
        var propertyname = [];
        var relation = [];
        var text = [];
        for (var j = 0; j < this.dataService.hideElementArr.length; j++) {
            if (this.dataService.hideElementArr[j] !== undefined) {
                propertyname.push(this.dataService.hideElementArr[j].HeightHide);
                relation.push(Number(this.dataService.hideElementArr[j].RelaHide));
                if (this.dataService.hideElementArr[j].type === "number") {
                    text.push(Number(this.dataService.hideElementArr[j].textHide));
                }
                else if (this.dataService.hideElementArr[j].type === "category") {
                    text.push(String(this.dataService.hideElementArr[j].CategaryHide));
                }
            }
        }
        for (var j_1 = 0; j_1 < propertyname.length; j_1++) {
            var value = entity.properties[propertyname[j_1]]._value;
            if (value !== undefined) {
                if (typeof (value) === "number") {
                    if (this._compare(value, text[j_1], relation[j_1])) {
                        entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                    }
                }
                else if (typeof (value) === "string") {
                    if (text[j_1] !== "None") {
                        if (this._compareCat(value, text[j_1], relation[j_1])) {
                            entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                        }
                    }
                }
            }
        }
    };
    ViewerComponent.prototype._compare = function (value, slider, relation) {
        switch (relation) {
            case 0:
                return value < slider;
            case 1:
                return value > slider;
            case 2:
                return value === slider;
        }
    };
    ViewerComponent.prototype._compareCat = function (value, Categary, relation) {
        switch (relation) {
            case 0:
                return value === undefined;
            case 1:
                return value !== Categary;
            case 2:
                return value === Categary;
        }
    };
    ViewerComponent.prototype.showAttribs = function (event) {
        if (this.data["crs"] !== undefined && this.data["crs"].cesium !== undefined) {
            if (this.data["crs"].cesium.select !== undefined) {
                if (this.viewer.selectedEntity !== undefined) {
                    var pickup = this.viewer.scene.pick(new Cesium.Cartesian2(event.clientX, event.clientY));
                    this.pickupArrs = [];
                    this.pickupArrs.push({ name: "ID", data: pickup.id.id });
                    for (var i = 0; i < this.data["crs"].cesium.select.length; i++) {
                        var propertyName = this.data["crs"].cesium.select[i];
                        this.pickupArrs.push({ name: propertyName, data: this.dataService.SelectedEntity.properties[propertyName]._value });
                    }
                    var nameOverlay = document.getElementById("cesium-infoBox-defaultTable");
                    this.viewer.container.appendChild(nameOverlay);
                    nameOverlay.style.bottom = this.viewer.canvas.clientHeight - event.clientY + 'px';
                    nameOverlay.style.left = event.clientX + 'px';
                    nameOverlay.style.display = 'block';
                }
                else {
                    document.getElementById("cesium-infoBox-defaultTable").style.display = 'none';
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