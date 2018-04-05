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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <body> -->\n<!-- <div id=\"cesiumContainer\"></div>\n<div> -->\n  <!-- <div id=\"cesiumContainer\">\n  \t<div id=\"loadfile\">\n\t    <div class=\"version\" style=\"font-family:sans-serif;color:white;\"> v0.0.1</div>\n\t    <input type=\"file\" id=\"files\" name=\"files[]\" style=\"font-family:sans-serif;color:white;\" (change)=\"handleFileSelect($event)\" />\n\t</div>\n  </div> -->\n<!-- </div> -->\n<!-- </body> -->\n\n<div>\n\t<div id=\"loadfile\">\n      <div class=\"version\" style=\"font-family:sans-serif;color:white;\">v0.0.2&nbsp;&nbsp;</div>\n      <input type=\"file\" id=\"files\" name=\"files[]\" style=\"font-family:sans-serif;color:white;\" (change)=\"handleFileSelect($event)\" />\n  </div>\n\t<mobius-cesium [data]=\"gs_dummy_data\"></mobius-cesium>\n</div>"

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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/mobius-cesium/mobius-cesium.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"cesiumContainer\">\r\n  \t<div id=\"loadfile\">\r\n\t    <div class=\"version\" style=\"font-family:sans-serif;color:white;\"> v0.0.1</div>\r\n\t    <input type=\"file\" id=\"files\" name=\"files[]\" style=\"font-family:sans-serif;color:white;\" (change)=\"handleFileSelect($event)\" />\r\n\t</div>\r\n</div> -->\r\n<div id=\"mobiuscesium\">\r\n\t<cesium-viewer></cesium-viewer>\r\n</div>"

/***/ }),

/***/ "./src/app/mobius-cesium/mobius-cesium.component.scss":
/***/ (function(module, exports) {

module.exports = "#mobiuscesium {\n  height: 100%;\n  font-family: sans-serif !important;\n  margin: 0px !important;\n  padding: 0px !important;\n  font-size: 14px; }\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__mobius_cesium_component__["a" /* MobiuscesiumComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__mobius_cesium_component__["a" /* MobiuscesiumComponent */],
                __WEBPACK_IMPORTED_MODULE_3__viewer_viewer_component__["a" /* ViewerComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__data_data_service__["a" /* DataService */]],
        })
    ], MobiusCesium);
    return MobiusCesium;
    var MobiusCesium_1;
}());



/***/ }),

/***/ "./src/app/mobius-cesium/viewer/viewer.component.css":
/***/ (function(module, exports) {

module.exports = "#cesiumContainer{\r\n height: 100%;\r\n width: 100%; \r\n font-family: sans-serif !important;\r\n margin: 0px !important;\r\n padding: 0px !important;\r\n font-size: 14px;\r\n}\r\n.cesium-button {\r\n  display: inline-block;\r\n  position: relative;\r\n  background: #303336;\r\n  border: 0px solid #444;\r\n  color: #edffff;\r\n  fill: #edffff;\r\n  border-radius: 0px;\r\n  padding: 5px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 100%;\r\n  font-family:sans-serif !important;\r\n}\r\n.cesium-infoBox-iframe{\r\n  font-family: sans-serif !important;\r\n}\r\n.cesium-infoBox-title{\r\n  font-family: sans-serif !important;\r\n  font-size: 14px !important;\r\n}\r\n.cesium-infoBox-defaultTable{\r\n  font-family: sans-serif !important;\r\n  font-size: 10px !important;\r\n}\r\n#ColorandHeight{\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  z-index: 98;\r\n  height: 80px;\r\n  display:inline-block;\r\n}\r\n#toolbar{\r\n  z-index:99;\r\n  margin: 5px;\r\n  width: 100%;\r\n  padding: 2px 5px;\r\n  position: absolute;\r\n  display:inline-block;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/viewer/viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"cesiumContainer\">\r\n\t<div id=\"ColorandHeight\">\r\n\t\t<div id=\"toolbar\">\r\n\t\t<div style=\"width: 74%;display:inline-block;\">\r\n\t\t<div style=\"width: 10%;display:inline-block;height:80px\">\r\n\t\t\t<table>\r\n\t\t\t\t<tr>\r\n          \t\t<th><div>\r\n\t\t\t\t<select class=\"cesium-button\" (change)=\"onChangeColor($event.target.value)\">\r\n\t\t\t\t\t<option value=\"Status_Cat\">Status_Cat</option>\r\n\t\t\t\t\t<option value=\"DIST_EWL\">DIST_EWL</option>\r\n\t\t\t\t\t<option value=\"DIST_TRUNK\">DIST_TRUNK</option>\r\n\t\t\t\t\t<option value=\"AVAILABLE\">AVAILABLE</option>\r\n\t\t\t\t\t<option value=\"AGG_POT\">AGG_POT</option>\r\n\t\t\t\t\t<option value=\"GPR\">GPR</option>\r\n\t\t\t\t\t<option value=\"HB_LIMIT\">HB_LIMIT</option>\r\n\t\t\t\t</select>\r\n\t\t\t\t</div></th>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t\t<div id=\"color\" style=\"width:85%;display:inline-block;position: relative;height:80px;\">\r\n\t\t\t<table style=\"width: 100%\">\r\n\t\t\t\t<tr >\r\n          \t\t<th *ngFor=\"let Color of Colors\" style=\"width: 10%\"><div [ngStyle]=\"{ 'background-color': Color}\" >&nbsp;&nbsp;&nbsp;</div></th>\r\n          \t\t</tr>\r\n          \t\t<tr >\r\n          \t\t<th *ngFor=\"let text of texts\" style=\"width: 10%\"><div style=\"color:white;text-shadow: 0px 0px 3px black;\">&nbsp;{{text}}&nbsp;</div></th>\r\n          \t\t</tr>\r\n\t\t\t</table>\r\n\t\t</div> \r\n\t\t</div>\r\n\t\t<div style=\"width: 23%;display:inline-block;\">\r\n\t\t<div style=\"width: 40%;display:inline-block;position: relative;height:80px\">\r\n\t\t\t<table>\r\n\t\t\t\t<tr>\r\n\t          \t<th><div >\r\n\t\t\t\t<select class=\"cesium-button\" (change)=\"onChangeHeight($event.target.value)\">\r\n\t\t\t\t\t<option value=\"Status_Cat\">Status_Cat</option>\r\n\t\t\t\t\t<option value=\"DIST_EWL\">DIST_EWL</option>\r\n\t\t\t\t\t<option value=\"DIST_TRUNK\">DIST_TRUNK</option>\r\n\t\t\t\t\t<option value=\"AVAILABLE\">AVAILABLE</option>\r\n\t\t\t\t\t<option value=\"AGG_POT\">AGG_POT</option>\r\n\t\t\t\t\t<option value=\"GPR\">GPR</option>\r\n\t\t\t\t\t<option value=\"HB_LIMIT\">HB_LIMIT</option>\r\n\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t</th>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t\t<div style=\"width: 50%;display:inline-block;position: relative;color:white;height:80px\">\r\n\t\t\t<table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" style=\"width: 100%;;\">\r\n\t\t\t<tr ><th style=\"width:50px;\"><div style=\"width: 100%;color:white;text-shadow: 0px 0px 3px black;\">Min</div></th>\r\n\t\t\t<th style=\"width:50px;\"><div style=\"width: 100%;color:white;text-shadow: 0px 0px 3px black;\">Max</div></th></tr>\r\n\t\t\t</table>\r\n\t\t\t<table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" style=\"width: 100%;border-top: none !important;\">\r\n\t\t\t<tr ><th style=\"width:50px;\"><div style=\"width:100%;color:white;text-shadow: 0px 0px 3px black;\">{{Minimum}}</div></th>\r\n\t\t\t<th style=\"width:50px;\"><div style=\"width: 100%;color:white;text-shadow: 0px 0px 3px black;\">{{Maximum}}</div></th></tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n\t</div>\r\n</div>"

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
        _this.myElement = myElement;
        return _this;
    }
    ViewerComponent.prototype.ngOnInit = function () {
        //this.ColorValue="Status_Cat";
        //this.HeightValue="HB_LIMIT";
        if (this.ColorValue == undefined) {
            this.ColorValue = "Status_Cat";
        }
        else {
            this.ColorValue = this.dataService.ColorValue;
        }
        if (this.HeightValue == undefined) {
            this.HeightValue = "Status_Cat";
        }
        else {
            this.HeightValue = this.dataService.HeightValue;
        }
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
            imageryProvider: Cesium.createOpenStreetMapImageryProvider({
                url: 'https://stamen-tiles.a.ssl.fastly.net/toner/',
            })
        });
        document.getElementsByClassName('cesium-viewer-bottom')[0].remove();
        document.getElementsByClassName('cesium-viewer-animationContainer')[0].remove();
        document.getElementsByClassName('cesium-viewer-timelineContainer')[0].remove();
        document.getElementsByClassName('cesium-viewer-fullscreenContainer')[0].remove();
        this.data = data;
        var promise = Cesium.GeoJsonDataSource.load(this.data);
        promise.then(function (dataSource) {
            viewer.dataSources.add(dataSource);
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];
                entity.polygon.outline = false;
            }
        });
        viewer.zoomTo(promise);
        this.cesiumviewer = viewer;
        this.cesiumpromise = promise;
        this.onChangeColor(this.ColorValue);
        this.onChangeHeight(this.HeightValue);
    };
    ViewerComponent.prototype.onChangeColor = function (ColorValue) {
        this.ColorValue = ColorValue;
        if (this.ColorValue === "Status_Cat" || undefined) {
            this.colorByStatus_Cat(this.cesiumpromise, this.cesiumviewer);
        }
        else if (this.ColorValue === "DIST_EWL") {
            this.colorByDIST_EWL(this.cesiumpromise, this.cesiumviewer);
        }
        else if (this.ColorValue === "DIST_TRUNK") {
            this.colorByDIST_TRUNK(this.cesiumpromise, this.cesiumviewer);
        }
        else if (this.ColorValue === "AVAILABLE") {
            this.colorByAVAILABLE(this.cesiumpromise, this.cesiumviewer);
        }
        else if (this.ColorValue === "AGG_POT") {
            this.colorByAGG_POT(this.cesiumpromise, this.cesiumviewer);
        }
        else if (this.ColorValue === "GPR") {
            this.colorByGPR(this.cesiumpromise, this.cesiumviewer);
        }
        else if (this.ColorValue === "HB_LIMIT") {
            this.colorByHB_LIMIT(this.cesiumpromise, this.cesiumviewer);
        }
        this.dataService.getColorValue(this.ColorValue);
    };
    ViewerComponent.prototype.colorByStatus_Cat = function (promise, viewer) {
        this.Colors = ["lightcoral", "red", "coral", "crimson", "ROYALBLUE", "lightslategray"];
        this.texts = ["Available", "Prime", "Remnant", "Estate under active master / infra planning", "Others", "0 OR NULL"];
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];
                //if(entity.properties.TRANSPAREN._value===1){
                if (entity.properties.Status_Cat !== undefined) {
                    if (entity.properties.Status_Cat._value === "Available")
                        entity.polygon.material = Cesium.Color.LIGHTCORAL.withAlpha(1);
                    else if (entity.properties.Status_Cat._value === "Prime")
                        entity.polygon.material = Cesium.Color.RED.withAlpha(1);
                    else if (entity.properties.Status_Cat._value === "Remnant")
                        entity.polygon.material = Cesium.Color.CORAL.withAlpha(1);
                    else if (entity.properties.Status_Cat._value === "Estate under active master / infra planning")
                        entity.polygon.material = Cesium.Color.CRIMSON.withAlpha(1);
                    else if (entity.properties.Status_Cat._value === "0" || null)
                        entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                    else {
                        entity.polygon.material = Cesium.Color.ROYALBLUE.withAlpha(1);
                    }
                }
                /*}else{
                  entity.polygon.material=Cesium.Color.GREY.withAlpha(1);
                }*/
            }
        });
    };
    ViewerComponent.prototype.colorByDIST_TRUNK = function (promise, viewer) {
        this.Colors = ["DARKCYAN", "MEDIUMTURQUOISE", "KHAKI", "GOLD", "CORAL", "LIGHTSLATEGRAY"];
        this.texts = [">= 239", "238 - 151", "150 - 96", "95 - 61", "<= 60", "0 OR NULL"];
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];
                //if(entity.properties.TRANSPAREN._value===1){
                if (entity.properties.DIST_TRUNK !== undefined) {
                    if (entity.properties.DIST_TRUNK >= 239)
                        entity.polygon.material = Cesium.Color.DARKCYAN.withAlpha(1);
                    else if (entity.properties.DIST_TRUNK >= 151)
                        entity.polygon.material = Cesium.Color.MEDIUMTURQUOISE.withAlpha(1);
                    else if (entity.properties.DIST_TRUNK >= 96)
                        entity.polygon.material = Cesium.Color.KHAKI.withAlpha(1);
                    else if (entity.properties.DIST_TRUNK >= 61)
                        entity.polygon.material = Cesium.Color.GOLD.withAlpha(1);
                    else if (entity.properties.DIST_TRUNK === 0 || null)
                        entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                    else
                        entity.polygon.material = Cesium.Color.CORAL.withAlpha(1);
                }
                /*}else{
                  entity.polygon.material=Cesium.Color.GREY.withAlpha(1);
                } */
            }
        });
    };
    ViewerComponent.prototype.colorByDIST_EWL = function (promise, viewer) {
        this.Colors = ["DARKCYAN", "MEDIUMTURQUOISE", "KHAKI", "GOLD", "CORAL", "LIGHTSLATEGRAY"];
        this.texts = [">= 715", "714 - 451", "450 - 286", "285 - 181", "<= 180", "0 OR NULL"];
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];
                //if(entity.properties.TRANSPAREN._value===1){
                if (entity.properties.DIST_EWL !== undefined) {
                    if (entity.properties.DIST_EWL >= 715)
                        entity.polygon.material = Cesium.Color.DARKCYAN.withAlpha(1);
                    else if (entity.properties.DIST_EWL >= 451)
                        entity.polygon.material = Cesium.Color.MEDIUMTURQUOISE.withAlpha(1);
                    else if (entity.properties.DIST_EWL >= 286)
                        entity.polygon.material = Cesium.Color.KHAKI.withAlpha(1);
                    else if (entity.properties.DIST_EWL >= 181)
                        entity.polygon.material = Cesium.Color.GOLD.withAlpha(1);
                    else if (entity.properties.DIST_EWL === 0 || null)
                        entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                    else
                        entity.polygon.material = Cesium.Color.CORAL.withAlpha(1);
                }
                /*}else{
                  entity.polygon.material=Cesium.Color.GREY.withAlpha(1);
                }*/
            }
        });
    };
    ViewerComponent.prototype.colorByAVAILABLE = function (promise, viewer) {
        this.Colors = ["RED", "ROYALBLUE", "LIGHTSLATEGRAY"];
        this.texts = ["AVAILABLE", "COMMITTED", "OCCUPIED"];
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];
                //if(entity.properties.TRANSPAREN._value===1){
                if (entity.properties.AVAILABLE !== undefined) {
                    if (entity.properties.AVAILABLE._value === "AVAILABLE")
                        entity.polygon.material = Cesium.Color.RED.withAlpha(1);
                    else if (entity.properties.AVAILABLE._value === "COMMITTED")
                        entity.polygon.material = Cesium.Color.ROYALBLUE.withAlpha(1);
                    else if (entity.properties.AVAILABLE._value === "OCCUPIED")
                        entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                }
                /*}else{
                  entity.polygon.material=Cesium.Color.GREY.withAlpha(1);
                } */
            }
        });
    };
    ViewerComponent.prototype.colorByAGG_POT = function (promise, viewer) {
        this.Colors = ["CORAL", "GOLD", "KHAKI", "MEDIUMTURQUOISE", "DARKCYAN", "LIGHTSLATEGRAY"];
        this.texts = [">= 0.79", "0.789 - 0.67", "0.669 - 0.56", "0.559 - 0.38", "<= 0.379", "0 OR NULL"];
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];
                //if(entity.properties.TRANSPAREN._value===1){
                if (entity.properties.AGG_POT !== undefined) {
                    if (entity.properties.AGG_POT >= 0.79)
                        entity.polygon.material = Cesium.Color.CORAL.withAlpha(1);
                    else if (entity.properties.AGG_POT >= 0.67)
                        entity.polygon.material = Cesium.Color.GOLD.withAlpha(1);
                    else if (entity.properties.AGG_POT >= 0.56)
                        entity.polygon.material = Cesium.Color.KHAKI.withAlpha(1);
                    else if (entity.properties.AGG_POT >= 0.38)
                        entity.polygon.material = Cesium.Color.MEDIUMTURQUOISE.withAlpha(1);
                    else if (entity.properties.AGG_POT === 0 || null)
                        entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                    else
                        entity.polygon.material = Cesium.Color.DARKCYAN.withAlpha(1);
                }
                /*}else{
                  entity.polygon.material=Cesium.Color.GREY.withAlpha(1);
                } */
            }
        });
    };
    ViewerComponent.prototype.colorByGPR = function (promise, viewer) {
        this.Colors = ["LIGHTSLATEGRAY", "YELLOW", "DARKORANGE", "RED", "LIGHTSLATEGRAY"];
        this.texts = ["0 OR NULL", "0.9 - 1.7", "2.0 - 2.8", "3.0 - 3.5", "Others"];
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];
                if (entity.properties.GPR !== undefined) {
                    if (entity.properties.GPR._value === "0.0" || entity.properties.GPR._value === 0.0 || entity.properties.GPR._value === 0 || entity.properties.GPR._value === null)
                        entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                    else if (entity.properties.GPR._value === "0.9" || entity.properties.GPR._value === 0.9 || entity.properties.GPR._value === "1.0" || entity.properties.GPR._value === "1" || entity.properties.GPR._value === 1.0 || entity.properties.GPR._value === 1
                        || entity.properties.GPR._value === "1.4" || entity.properties.GPR._value === 1.4 || entity.properties.GPR._value === "1.7" || entity.properties.GPR._value === 1.7)
                        entity.polygon.material = Cesium.Color.YELLOW.withAlpha(1);
                    else if (entity.properties.GPR._value === "2" || entity.properties.GPR._value === "2.0" || entity.properties.GPR._value === 2.0 || entity.properties.GPR._value === 2 || entity.properties.GPR._value === "2.1" || entity.properties.GPR._value === 2.1 ||
                        entity.properties.GPR._value === "2.3" || entity.properties.GPR._value === 2.3 || entity.properties.GPR._value === "2.5" || entity.properties.GPR._value === 2.5 ||
                        entity.properties.GPR._value === "2.8" || entity.properties.GPR._value === 2.8)
                        entity.polygon.material = Cesium.Color.DARKORANGE.withAlpha(1);
                    else if (entity.properties.GPR._value === "3.0" || entity.properties.GPR._value === "3" || entity.properties.GPR._value === 3.0 || entity.properties.GPR._value === 3 || entity.properties.GPR._value === "3.2" || entity.properties.GPR._value === 3.2 ||
                        entity.properties.GPR._value === "3.5" || entity.properties.GPR._value === 3.5)
                        entity.polygon.material = Cesium.Color.RED.withAlpha(1);
                    else {
                        entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                    }
                }
            }
        });
    };
    ViewerComponent.prototype.colorByHB_LIMIT = function (promise, viewer) {
        this.Colors = ["RED", "ORANGERED", "DARKORANGE", "YELLOW", "LIGHTSLATEGRAY"];
        this.texts = [">= 93", "92 - 86", "85 - 77", "76 - 63", "<= 62"];
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];
                //if(entity.properties.TRANSPAREN._value===1){
                if (entity.properties.HB_LIMIT !== undefined) {
                    if (entity.properties.HB_LIMIT >= 93)
                        entity.polygon.material = Cesium.Color.RED.withAlpha(1);
                    else if (entity.properties.HB_LIMIT >= 86)
                        entity.polygon.material = Cesium.Color.ORANGERED.withAlpha(1);
                    else if (entity.properties.HB_LIMIT >= 77)
                        entity.polygon.material = Cesium.Color.DARKORANGE.withAlpha(1);
                    else if (entity.properties.HB_LIMIT >= 63)
                        entity.polygon.material = Cesium.Color.YELLOW.withAlpha(1);
                    else if (entity.properties.HB_LIMIT === 0 || null)
                        entity.polygon.material = Cesium.Color.WHITE.withAlpha(1);
                    else
                        entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                }
                /*}else{
                  entity.polygon.material=Cesium.Color.GREY.withAlpha(1);
                }*/
            }
        });
    };
    ViewerComponent.prototype.onChangeHeight = function (HeightValue) {
        this.HeightValue = HeightValue;
        if (this.HeightValue === "Status_Cat") {
            this.HeightByStatus_Cat(this.cesiumpromise, this.cesiumviewer);
        }
        else if (this.HeightValue === "DIST_EWL") {
            this.HeightByDIST_EWL(this.cesiumpromise, this.cesiumviewer);
        }
        else if (this.HeightValue === "DIST_TRUNK") {
            this.HeightByDIST_TRUNK(this.cesiumpromise, this.cesiumviewer);
        }
        else if (this.HeightValue === "AVAILABLE") {
            this.HeightByAVAILABLE(this.cesiumpromise, this.cesiumviewer);
        }
        else if (this.HeightValue === "AGG_POT") {
            this.HeightByAGG_POT(this.cesiumpromise, this.cesiumviewer);
        }
        else if (this.HeightValue === "GPR") {
            this.HeightByGPR(this.cesiumpromise, this.cesiumviewer);
        }
        else if (this.HeightValue === "HB_LIMIT") {
            this.HeightByHB_LIMIT(this.cesiumpromise, this.cesiumviewer);
        }
        this.dataService.getHeightValue(this.HeightValue);
    };
    ViewerComponent.prototype.HeightByStatus_Cat = function (promise, viewer) {
        this.Maximum = 100;
        this.Minimum = 5;
        //this.centers=[];
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];
                //if(entity.properties.TRANSPAREN._value===1){
                if (entity.properties.Status_Cat !== undefined) {
                    if (entity.properties.Status_Cat._value === "Available")
                        entity.polygon.extrudedHeight = 100;
                    else if (entity.properties.Status_Cat._value === "Prime")
                        entity.polygon.extrudedHeight = 100;
                    else if (entity.properties.Status_Cat._value === "Remnant")
                        entity.polygon.extrudedHeight = 100;
                    else if (entity.properties.Status_Cat._value === "Estate under active master / infra planning")
                        entity.polygon.extrudedHeight = 100;
                    else if (entity.properties.Status_Cat._value === "0" || null)
                        entity.polygon.extrudedHeight = 5;
                    else {
                        entity.polygon.extrudedHeight = 50;
                    }
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
                }
            }
        });
        /*console.log(Cesium.GeoJsonDataSource.crsNames['EPSG:4326'] );
        Cesium.GeoJsonDataSource.crsNames['EPSG:4326'] = function(coordinates){
        return coordinates;
        };*/
    };
    ViewerComponent.prototype.HeightByDIST_EWL = function (promise, viewer) {
        this.Maximum = 120;
        this.Minimum = 5;
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];
                //if(entity.properties.TRANSPAREN._value===1){
                if (entity.properties.DIST_EWL !== undefined) {
                    if (entity.properties.DIST_EWL >= 715)
                        entity.polygon.extrudedHeight = 5;
                    else if (entity.properties.DIST_EWL >= 451)
                        entity.polygon.extrudedHeight = 20;
                    else if (entity.properties.DIST_EWL >= 286)
                        entity.polygon.extrudedHeight = 50;
                    else if (entity.properties.DIST_EWL >= 181)
                        entity.polygon.extrudedHeight = 80;
                    else if (entity.properties.DIST_EWL === 0 || null)
                        entity.polygon.extrudedHeight = 5;
                    else
                        entity.polygon.extrudedHeight = 100;
                }
                /*}else{
                  entity.polygon.extrudedHeight = 5;
                } */
            }
        });
    };
    ViewerComponent.prototype.HeightByDIST_TRUNK = function (promise, viewer) {
        this.Maximum = 100;
        this.Minimum = 5;
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];
                //if(entity.properties.TRANSPAREN._value===1){
                if (entity.properties.DIST_TRUNK !== undefined) {
                    if (entity.properties.DIST_TRUNK >= 239)
                        entity.polygon.extrudedHeight = 5;
                    else if (entity.properties.DIST_TRUNK >= 151)
                        entity.polygon.extrudedHeight = 20;
                    else if (entity.properties.DIST_TRUNK >= 96)
                        entity.polygon.extrudedHeight = 50;
                    else if (entity.properties.DIST_TRUNK >= 61)
                        entity.polygon.extrudedHeight = 80;
                    else if (entity.properties.DIST_TRUNK === 0 || null)
                        entity.polygon.extrudedHeight = 5;
                    else
                        entity.polygon.extrudedHeight = 100;
                }
                /*}else{
                  entity.polygon.extrudedHeight = 5;
                } */
            }
        });
    };
    ViewerComponent.prototype.HeightByAVAILABLE = function (promise, viewer) {
        this.Maximum = 100;
        this.Minimum = 5;
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];
                //if(entity.properties.TRANSPAREN._value===1){
                if (entity.properties.AVAILABLE !== undefined) {
                    if (entity.properties.AVAILABLE._value === "AVAILABLE")
                        entity.polygon.extrudedHeight = 100;
                    else if (entity.properties.AVAILABLE._value === "COMMITTED")
                        entity.polygon.extrudedHeight = 50;
                    else {
                        entity.polygon.extrudedHeight = 5;
                    }
                }
                /*}else{
                  entity.polygon.extrudedHeight = 5;
                }*/
            }
        });
    };
    ViewerComponent.prototype.HeightByAGG_POT = function (promise, viewer) {
        this.Maximum = 100;
        this.Minimum = 5;
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];
                //if(entity.properties.TRANSPAREN._value===1){
                if (entity.properties.AGG_POT !== undefined) {
                    if (entity.properties.AGG_POT >= 0.79)
                        entity.polygon.extrudedHeight = 100;
                    else if (entity.properties.AGG_POT >= 0.67)
                        entity.polygon.extrudedHeight = 80;
                    else if (entity.properties.AGG_POT >= 0.56)
                        entity.polygon.extrudedHeight = 50;
                    else if (entity.properties.AGG_POT >= 0.38)
                        entity.polygon.extrudedHeight = 20;
                    else if (entity.properties.AGG_POT === 0 || null)
                        entity.polygon.extrudedHeight = 5;
                    else {
                        entity.polygon.extrudedHeight = 5;
                    }
                }
                /*}else{
                  entity.polygon.extrudedHeight = 5;
                }*/
            }
        });
    };
    ViewerComponent.prototype.HeightByGPR = function (promise, viewer) {
        this.Maximum = 120;
        this.Minimum = 5;
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];
                if (entity.properties.GPR !== undefined) {
                    if (entity.properties.GPR._value === "0.0" || entity.properties.GPR._value === null || entity.properties.GPR._value === 0 || entity.properties.GPR._value === "0")
                        entity.polygon.extrudedHeight = 5;
                    else if (entity.properties.GPR._value === "0.9" || entity.properties.GPR._value === 0.9)
                        entity.polygon.extrudedHeight = 9;
                    else if (entity.properties.GPR._value === "1.0" || entity.properties.GPR._value === 1.0 || entity.properties.GPR._value === 1 || entity.properties.GPR._value === "1")
                        entity.polygon.extrudedHeight = 10;
                    else if (entity.properties.GPR._value === "1.4" || entity.properties.GPR._value === 1.4)
                        entity.polygon.extrudedHeight = 15;
                    else if (entity.properties.GPR._value === "1.7" || entity.properties.GPR._value === 1.7)
                        entity.polygon.extrudedHeight = 30;
                    else if (entity.properties.GPR._value === "2.0" || entity.properties.GPR._value === 2.0 || entity.properties.GPR._value === 2 || entity.properties.GPR._value === "2")
                        entity.polygon.extrudedHeight = 60;
                    else if (entity.properties.GPR._value === "2.1" || entity.properties.GPR._value === 2.1)
                        entity.polygon.extrudedHeight = 70;
                    else if (entity.properties.GPR._value === "2.3" || entity.properties.GPR._value === 2.3)
                        entity.polygon.extrudedHeight = 85;
                    else if (entity.properties.GPR._value === "2.5" || entity.properties.GPR._value === 2.5)
                        entity.polygon.extrudedHeight = 90;
                    else if (entity.properties.GPR._value === "2.8" || entity.properties.GPR._value === 2.8)
                        entity.polygon.extrudedHeight = 95;
                    else if (entity.properties.GPR._value === "3.0" || entity.properties.GPR._value === 3.0 || entity.properties.GPR._value === 3 || entity.properties.GPR._value === "3")
                        entity.polygon.extrudedHeight = 105;
                    else if (entity.properties.GPR._value === "3.2" || entity.properties.GPR._value === 3.2)
                        entity.polygon.extrudedHeight = 110;
                    else if (entity.properties.GPR._value === "3.5" || entity.properties.GPR._value === 3.5)
                        entity.polygon.extrudedHeight = 120;
                    else {
                        entity.polygon.extrudedHeight = 30;
                    }
                }
                else {
                    entity.polygon.extrudedHeight = 5;
                }
            }
        });
    };
    ViewerComponent.prototype.HeightByHB_LIMIT = function (promise, viewer) {
        var height = [];
        this.Maximum = 0;
        this.Minimum = 0;
        var max = 0;
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];
                //if(entity.properties.TRANSPAREN._value===1){
                if (entity.properties.HB_LIMIT !== undefined) {
                    entity.polygon.extrudedHeight = entity.properties.HB_LIMIT;
                    height.push(Number(entity.properties.HB_LIMIT._value));
                }
                else {
                    entity.polygon.extrudedHeight = 0;
                }
                /*}else{
                  entity.polygon.extrudedHeight = 0;
                }*/
            }
        });
        this.Maximum = Math.max.apply(Math, height);
    };
    ViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cesium-viewer',
            template: __webpack_require__("./src/app/mobius-cesium/viewer/viewer.component.html"),
            styles: [__webpack_require__("./src/app/mobius-cesium/viewer/viewer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]])
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
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