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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- <body> -->\r\n<!-- <div id=\"cesiumContainer\"></div>\r\n<div> -->\r\n  <!-- <div id=\"cesiumContainer\">\r\n  \t<div id=\"loadfile\">\r\n\t    <div class=\"version\" style=\"font-family:sans-serif;color:white;\"> v0.0.1</div>\r\n\t    <input type=\"file\" id=\"files\" name=\"files[]\" style=\"font-family:sans-serif;color:white;\" (change)=\"handleFileSelect($event)\" />\r\n\t</div>\r\n  </div> -->\r\n<!-- </div> -->\r\n<!-- </body> -->\r\n\r\n<div style=\"height: 100%\">\r\n\t<div id=\"loadfile\">\r\n      <div class=\"version\" style=\"font-family:sans-serif;color:white;\">v0.0.14&nbsp;&nbsp;</div>\r\n      <input type=\"file\" id=\"files\" name=\"files[]\" style=\"font-family:sans-serif;color:white;\" (change)=\"handleFileSelect($event)\" />\r\n  </div>\r\n\t<mobius-cesium [data]=\"gs_dummy_data\" [mode]=\"'editor'\"></mobius-cesium>\r\n</div>"

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
        //this.dataService.setGsModel(this.gs_dummy_data);
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
            //self.dataService.setGsModel(self.gs_dummy_data);
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


var DataService = /** @class */ (function () {
    function DataService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this._CheckInvert = false;
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
    DataService.prototype.setMode = function (mode) {
        this.mode = mode;
    };
    DataService.prototype.setGsModel = function (model) {
        this._jsonModel = model;
        if (this._jsonModel === undefined) {
            var viewer = new Cesium.Viewer(document.createElement("div"));
        }
        this.sendMessage("model_update");
    };
    DataService.prototype.getValue = function (model) {
        var propertyNames = Object.keys(model["features"][0].properties);
        var _ColorValue = propertyNames[0];
        propertyNames.sort();
        propertyNames.unshift("None");
        var feature_instance = model["features"][0];
        var _HeightKey = propertyNames.filter(function (prop_name) {
            var value = feature_instance.properties[prop_name];
            return (typeof (value) === "number");
        });
        var _HeightValue = _HeightKey[0];
        _HeightKey.sort();
        _HeightKey.unshift("None");
        var promise = this.cesiumpromise;
        var _Heighttexts = [];
        var _Colortexts = [];
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var _i = 0, entities_1 = entities; _i < entities_1.length; _i++) {
                var entity = entities_1[_i];
                if (entity.properties[_HeightValue] !== undefined) {
                    if (entity.properties[_HeightValue]._value !== " ") {
                        if (_Heighttexts.length === 0) {
                            _Heighttexts[0] = entity.properties[_HeightValue]._value;
                        }
                        else {
                            if (_Heighttexts.indexOf(entity.properties[_HeightValue]._value) === -1) {
                                _Heighttexts.push(entity.properties[_HeightValue]._value);
                            }
                        }
                    }
                }
                if (entity.properties[_ColorValue] !== undefined) {
                    if (entity.properties[_ColorValue]._value !== " ") {
                        if (_Colortexts.length === 0) {
                            _Colortexts[0] = entity.properties[_ColorValue]._value;
                        }
                        else {
                            if (_Colortexts.indexOf(entity.properties[_ColorValue]._value) === -1) {
                                _Colortexts.push(entity.properties[_ColorValue]._value);
                            }
                        }
                    }
                }
            }
        });
        var _MinColor = Math.min.apply(Math, _Colortexts);
        var _MaxColor = Math.max.apply(Math, _Colortexts);
        var _MinHeight = Math.min.apply(Math, _Heighttexts);
        var _MaxHeight = Math.max.apply(Math, _Heighttexts);
        var _Filter = [];
        var _HideNum = [];
        this.getViData(propertyNames, _Colortexts.sort(), _ColorValue, _MinColor, _MaxColor, false, _HeightKey, _Heighttexts.sort(), _HeightValue, _MinHeight, _MaxHeight, 1, false, false, _Filter, _HideNum);
    };
    DataService.prototype.LoadJSONData = function () {
        if (this._jsonModel["cesium"] !== undefined) {
            var cesiumData = this._jsonModel["cesium"];
            var _ColorDescr = void 0;
            var _ColorValue_1;
            var _MinColor = void 0;
            var _MaxColor = void 0;
            var _ColorInvert = void 0;
            var _HeightDescr = void 0;
            var _HeightKey = [];
            var _HeightValue_1;
            var _MinHeight = void 0;
            var _MaxHeight = void 0;
            var _HeightInvert = void 0;
            var _HeightScale = void 0;
            var _HeightLine = void 0;
            var _filters = void 0;
            var _ceisumData = [];
            var _propertyNames = [];
            var _HideNum = [];
            if (cesiumData["colour"] !== undefined) {
                if (cesiumData["colour"]["descr"] !== undefined) {
                    _ColorDescr = cesiumData["colour"]["descr"];
                }
                if (cesiumData["colour"]["attribs"] !== undefined) {
                    for (var _i = 0, _a = cesiumData["colour"]["attribs"]; _i < _a.length; _i++) {
                        var data = _a[_i];
                        _propertyNames.push(data["name"]);
                    }
                    _ColorValue_1 = _propertyNames[0];
                    _MinColor = cesiumData["colour"]["attribs"][0]["min"];
                    _MaxColor = cesiumData["colour"]["attribs"][0]["max"];
                    if (cesiumData["colour"]["attribs"][0]["invert"] === true) {
                        _ColorInvert = true;
                    }
                    else {
                        _ColorInvert = false;
                    }
                }
            }
            if (cesiumData["extrude"] !== undefined) {
                if (cesiumData["extrude"]["descr"] !== undefined) {
                    _HeightDescr = cesiumData["extrude"]["descr"];
                }
                if (cesiumData["extrude"]["attribs"] !== undefined) {
                    for (var _b = 0, _c = cesiumData["extrude"]["attribs"]; _b < _c.length; _b++) {
                        var data = _c[_b];
                        _HeightKey.push(data["name"]);
                    }
                    _HeightValue_1 = _HeightKey[0];
                    _MinHeight = cesiumData["extrude"]["attribs"][0]["min"];
                    _MaxHeight = cesiumData["extrude"]["attribs"][0]["max"];
                    if (cesiumData["extrude"]["attribs"][0]["invert"] === true) {
                        _HeightInvert = true;
                    }
                    else {
                        _HeightInvert = false;
                    }
                    if (cesiumData["extrude"]["attribs"][0]["line"] === true) {
                        _HeightLine = true;
                    }
                    else {
                        _HeightLine = false;
                    }
                    if (cesiumData["extrude"]["attribs"][0]["scale"] !== undefined) {
                        _HeightScale = cesiumData["extrude"]["attribs"][0]["scale"];
                    }
                    else {
                        _HeightScale = 1;
                    }
                }
            }
            if (cesiumData["filters"] !== undefined) {
                _filters = cesiumData["filters"];
            }
            var promise = this.cesiumpromise;
            var _Heighttexts_1 = [];
            var _Colortexts_1 = [];
            promise.then(function (dataSource) {
                var entities = dataSource.entities.values;
                for (var _i = 0, entities_2 = entities; _i < entities_2.length; _i++) {
                    var entity = entities_2[_i];
                    if (entity.properties[_HeightValue_1] !== undefined) {
                        if (entity.properties[_HeightValue_1]._value !== " ") {
                            if (_Heighttexts_1.length === 0) {
                                _Heighttexts_1[0] = entity.properties[_HeightValue_1]._value;
                            }
                            else {
                                if (_Heighttexts_1.indexOf(entity.properties[_HeightValue_1]._value) === -1) {
                                    _Heighttexts_1.push(entity.properties[_HeightValue_1]._value);
                                }
                            }
                        }
                    }
                    if (entity.properties[_ColorValue_1] !== undefined) {
                        if (entity.properties[_ColorValue_1]._value !== " ") {
                            if (_Colortexts_1.length === 0) {
                                _Colortexts_1[0] = entity.properties[_ColorValue_1]._value;
                            }
                            else {
                                if (_Colortexts_1.indexOf(entity.properties[_ColorValue_1]._value) === -1) {
                                    _Colortexts_1.push(entity.properties[_ColorValue_1]._value);
                                }
                            }
                        }
                    }
                }
            });
            this.getPuData(_ColorDescr, _propertyNames, _Colortexts_1.sort(), _ColorValue_1, _MinColor, _MaxColor, _ColorInvert, _HeightDescr, _HeightKey, _Heighttexts_1.sort(), _HeightValue_1, _MinHeight, _MaxHeight, _HeightScale, _HeightInvert, _HeightLine, _filters, _HideNum);
        }
    };
    /*public getPropertyNames() {
      return this.propertyNames;
    }
  
    public getColorValue(_ColorValue: string): void {
      this.ColorValue=_ColorValue;
    }
    public getHeightValue(_HeightValue: string): void {
      this.HeightValue=_HeightValue;
    }*/
    DataService.prototype.getViData = function (_ColorProperty, _ColorText, _ColorKey, _ColorMin, _ColorMax, _ColorInvert, _ExtrudeProperty, _ExtrudeText, _ExturdeValue, _ExtrudeMin, _ExtrudeMax, _Scale, _Invert, _HeightChart, _Filter, _HideNum) {
        this._ViData = { ColorProperty: _ColorProperty, ColorText: _ColorText, ColorKey: _ColorKey,
            ColorMin: _ColorMin, ColorMax: _ColorMax, ColorInvert: _ColorInvert,
            ExtrudeProperty: _ExtrudeProperty, ExtrudeText: _ExtrudeText, ExtrudeKey: _ExturdeValue,
            ExtrudeMin: _ExtrudeMin, ExtrudeMax: _ExtrudeMax, Scale: _Scale, Invert: _Invert,
            HeightChart: _HeightChart, Filter: _Filter, HideNum: _HideNum };
    };
    DataService.prototype.getPuData = function (_ColorDescr, _ColorProperty, _ColorText, _ColorKey, _ColorMin, _ColorMax, _ColorInvert, _ExtrudeDescr, _ExtrudeProperty, _ExtrudeText, _ExturdeValue, _ExtrudeMin, _ExtrudeMax, _Scale, _Invert, _HeightChart, _Filter, _HideNum) {
        this._PuData = { ColorDescr: _ColorDescr, ColorProperty: _ColorProperty, ColorText: _ColorText,
            ColorKey: _ColorKey, ColorMin: _ColorMin, ColorMax: _ColorMax, ColorInvert: _ColorInvert,
            ExtrudeDescr: _ExtrudeDescr, ExtrudeProperty: _ExtrudeProperty, ExtrudeText: _ExtrudeText,
            ExtrudeKey: _ExturdeValue, ExtrudeMin: _ExtrudeMin, ExtrudeMax: _ExtrudeMax,
            Scale: _Scale, Invert: _Invert, HeightChart: _HeightChart, Filter: _Filter, HideNum: _HideNum };
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])()
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/mobius-cesium/mobius-cesium.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"mobiuscesium\" style=\"height: 100%\">\r\n\t<!-- <split direction=\"horizontal\" style=\"background-color: #8aa8c0;\">\r\n\t\t<split-area [size]=\"0.5\" id=\"splitgroups\" style=\"overflow:hidden;\">\r\n\t\t    <app-toolwindow></app-toolwindow>\r\n\t\t</split-area>\r\n\t\t<split-area [size]=\"99.5\" id=\"splitviewer\">\r\n\t\t\t<cesium-viewer></cesium-viewer>\r\n\t\t</split-area>\r\n\t</split> -->\r\n\r\n\t<cesium-viewer></cesium-viewer>\r\n\t<div id=\"Toggle\" (click)=\"toggleSlider()\" ><span style=\"vertical-align: middle;\">▹</span></div>\r\n\t<div id=\"slide-nav\"  [@slide_in_out]=\"slider_state\" style=\"position: absolute;z-index: 101;top:0px;height: 100%\">\r\n  \t\t<!-- <app-toolwindow ></app-toolwindow> -->\r\n  \t\t<!-- <app-publish ></app-publish> -->\r\n  \t\t<app-setting ></app-setting>\r\n\t</div>\r\n\t\r\n\t\r\n\t\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/mobius-cesium.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\");\n@font-face {\n  font-family: \"FontAwesome\"; }\n.font-awesome-hand {\n  font-family: FontAwesome; }\n.font-awesome-hand::after {\n  font-family: FontAwesome; }\n#mobiuscesium {\n  height: 101%;\n  font-family: sans-serif !important;\n  margin: 0px !important;\n  padding: 0px !important;\n  font-size: 14px; }\n#button {\n  position: absolute;\n  z-index: 99; }\n#Toggle {\n  /* position: absolute;\r\n  top: calc(50% - 40px);\r\n  z-index: 100;\r\n  width: 30px;\r\n  height:100px;\r\n  font-family:sans-serif;\r\n  border-radius: 4px;\r\n  background-color: rgba(20,20,20,0.5); */\n  /* border: 1px solid gray; */\n  position: absolute;\n  top: calc(50% - 30px);\n  z-index: 200;\n  width: 30px;\n  height: 70px;\n  border-top: 1px solid gray;\n  border-right: 1px solid gray;\n  border-bottom: 1px solid gray;\n  border-radius: 4px;\n  background-color: rgba(20, 20, 20, 0.5);\n  color: #ddd;\n  text-align: center;\n  font-size: 32px;\n  line-height: 70px;\n  cursor: pointer; }\n/* split-area{\r\n  overflow-y: hidden !important;\r\n  height: 100% !important;\r\n}\r\n\r\nsplit-gutter{\r\n  border-right: 1px solid #8aa8c0 !important;\r\n  border-top: 1px solid #8aa8c0 !important;\r\n  background-color: #8aa8c0 !important;\r\n} */\n"

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
            // console.log("mode: ", this.mode);
        }
        catch (ex) {
            this.data = undefined;
            //console.error("Error generating model");
        }
    };
    MobiuscesiumComponent.prototype.ngOnInit = function () {
        this.setModel(this.data);
        // console.log("Setting", this.mode)
        this.dataService.setMode(this.mode);
        // console.log(this.data);
    };
    MobiuscesiumComponent.prototype.ngDoCheck = function () {
        if (this.dataService.getGsModel() !== this.data) {
            this.setModel(this.data);
            // console.log("data changed");
            // console.log("mode:", this.mode);
        }
    };
    MobiuscesiumComponent.prototype.toggleSlider = function () {
        // do something to change the animation_state variable
        this.slider_state = this.slider_state === 'slide_out' ? 'slide_in' : 'slide_out';
        var toggle = document.getElementById("Toggle");
        if (this.slider_state === 'slide_out') {
            toggle.style.left = "0px";
            toggle.innerHTML = "▹";
        }
        else if (this.slider_state === 'slide_in') {
            toggle.style.left = "280px";
            toggle.innerHTML = "◃";
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object)
    ], MobiuscesiumComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], MobiuscesiumComponent.prototype, "mode", void 0);
    MobiuscesiumComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'mobius-cesium',
            template: __webpack_require__("./src/app/mobius-cesium/mobius-cesium.component.html"),
            styles: [__webpack_require__("./src/app/mobius-cesium/mobius-cesium.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('slide_in_out', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('slide_in', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        width: '280px',
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_split__ = __webpack_require__("./node_modules/angular-split/esm5/angular-split.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_tabs__ = __webpack_require__("./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_tooltip__ = __webpack_require__("./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_slider__ = __webpack_require__("./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__setting_setting_component__ = __webpack_require__("./src/app/mobius-cesium/setting/setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__setting_visualise_component__ = __webpack_require__("./src/app/mobius-cesium/setting/visualise.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__setting_attributes_copmponent__ = __webpack_require__("./src/app/mobius-cesium/setting/attributes.copmponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__setting_publish_component__ = __webpack_require__("./src/app/mobius-cesium/setting/publish.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { ToolwindowComponent } from './toolwindow/toolwindow.component';
// import { PublishComponent } from './toolwindow/publish.component';











var MobiusCesium = /** @class */ (function () {
    function MobiusCesium() {
    }
    MobiusCesium_1 = MobiusCesium;
    MobiusCesium.forRoot = function () {
        return {
            ngModule: MobiusCesium_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__data_data_service__["a" /* DataService */],
            ],
        };
    };
    MobiusCesium = MobiusCesium_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular_split__["a" /* AngularSplitModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_tooltip__["a" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_slider__["a" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormsModule */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__mobius_cesium_component__["a" /* MobiuscesiumComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__mobius_cesium_component__["a" /* MobiuscesiumComponent */],
                __WEBPACK_IMPORTED_MODULE_3__viewer_viewer_component__["a" /* ViewerComponent */],
                /*ToolwindowComponent,
                PublishComponent,*/
                __WEBPACK_IMPORTED_MODULE_12__setting_setting_component__["a" /* SettingComponent */],
                __WEBPACK_IMPORTED_MODULE_13__setting_visualise_component__["a" /* VisualiseComponent */],
                __WEBPACK_IMPORTED_MODULE_14__setting_attributes_copmponent__["a" /* AttributesComponent */],
                __WEBPACK_IMPORTED_MODULE_15__setting_publish_component__["a" /* PublishComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__data_data_service__["a" /* DataService */]],
        })
    ], MobiusCesium);
    return MobiusCesium;
    var MobiusCesium_1;
}());



/***/ }),

/***/ "./src/app/mobius-cesium/setting/attributes.component.css":
/***/ (function(module, exports) {

module.exports = "/*#attributes{\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n  color:#ddd !important;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  font-size: 14px !important;\r\n  line-height: 14px;\r\n  overflow-x: hidden !important;\r\n  border-right: 1px solid gray;\r\n}*/\r\n/deep/.mat-tab-label, /deep/.mat-tab-label-active{\r\n  min-width: 60px!important;\r\n  padding: 3px!important;\r\n  margin: 3px!important;\r\n  color:#ddd !important;\r\n  background-color: transparent !important;\r\n}\r\n/deep/.mat-tab-label{\r\n  height: 30px !important;\r\n  width: 60px !important;\r\n  background-color: transparent !important;\r\n}\r\n/deep/.mat-tab-labels{\r\n  background-color: rgba(20,20,20,0.5) !important;\r\n}\r\n/deep/.mat-tab-header{\r\n  width: 700px !important;\r\n}\r\n/deep/.mat-tab-header-pagination-controls-enabled{\r\n  display: none !important;\r\n}\r\n/deep/.mat-ink-bar{\r\n  background-color: #395d73 !important;\r\n}\r\n/deep/.mat-tab{\r\n  min-width: 30px !important;\r\n}\r\n/deep/.mat-tab-body-content{\r\n  overflow: hidden !important;\r\n}\r\n/deep/.mat-header{\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  margin-left: 0px;\r\n  color:#395d73;\r\n  border: 0;\r\n  height: 20px;\r\n  background-color: rgba(20,20,20,0.5) !important;\r\n}\r\n/deep/.mat-tab-body-wrapper{\r\n  height:100% !important;\r\n\r\n}\r\n/deep/split-gutter{\r\n  background-color:rgb(138, 168, 192) !important;\r\n}\r\n/deep/.mat-accent .mat-slider-thumb {\r\n    background-color: #395d73 !important;\r\n    cursor: -webkit-grab;\r\n}\r\n/deep/.mat-slider-track-fill{\r\n  background-color: #395d73 !important;\r\n}\r\n/deep/.mat-slider-thumb-label-text {\r\n    color: #395d73 !important;\r\n    font-size: 12px !important;\r\n}\r\n/deep/.mat-slider-thumb-label{\r\n    height: 15px !important;\r\n    width: 15px !important;\r\n    top: -20px !important;\r\n    right: -7px !important;\r\n    background-color: white !important;\r\n    border: 1px solid #395d73 !important;\r\n}\r\n/deep/.mat-slider-track-background{\r\n  background-color: #ddd !important;\r\n}\r\n.mat-slider{\r\n    width: 150px !important;\r\n}\r\n.cesium-button {\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  color: #395D73;\r\n  fill: #395D73;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  height:22px;\r\n  font-family:sans-serif !important;\r\n  background: #F1F1F1;\r\n}\r\n.cesium-button-select{\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  color: #395D73;\r\n  fill: #395D73;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  height:22px;\r\n  font-family:sans-serif !important;\r\n  background: #F1F1F1;\r\n}\r\n.cesium-option{\r\n  background-color: #F1F1F1;\r\n  /*opacity: 0.8;*/\r\n  color: #395D73;\r\n  border: 1px solid #8AA8C0;\r\n}\r\nhr {\r\n  display: block;\r\n  height: 1px;\r\n  border: 0;\r\n  border-top: 1px solid #ddd !important;\r\n  padding: 0; \r\n  color:#ddd !important;\r\n  width: 100%;\r\n  background-color: #ddd !important;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/setting/attributes.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"AttribsView\"  style=\"background-color: rgba(20,20,20,0.5);height: 100%;overflow-y:overlay;\"  >\r\n\t<table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\">\r\n\t  <tr >\r\n\t    <th style=\"font-size: 10px;font-weight: normal;width: 85px;\"><div style=\"width: 85px;height:16px;background: #395D73;color:white;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;\">ID</div></th>\r\n\t    <th style=\"font-size: 10px;font-weight: normal;width: 85px\"><div matTooltip={{ID}} style=\"width: 85px;height:16px;background: #395D73;color:white;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;\">{{ID}}</div></th>\r\n\t  </tr>\r\n\t</table>\r\n\t<table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\">\r\n\t  <tr *ngFor=\"let Property of _Properties\">\r\n\t    <th style=\"font-size: 10px;font-weight: normal;color:#ddd ;width: 85px;height: 14px\"><div matTooltip={{Property.Name}} style=\"width: 85px;height:14px;text-align: left;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;\">{{Property.Name}}</div></th>\r\n\t    <th style=\"font-size: 10px;font-weight: normal;color:#ddd ;width: 85px;height: 14px\"><div matTooltip={{Property.Value}} style=\"width: 85px;height:14px;text-align: left;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;\">{{Property.Value}}</div></th>\r\n\t  </tr>\r\n\t</table>\r\n</div>\r\n  "

/***/ }),

/***/ "./src/app/mobius-cesium/setting/attributes.copmponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttributesComponent; });
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


var AttributesComponent = /** @class */ (function (_super) {
    __extends(AttributesComponent, _super);
    function AttributesComponent(injector, myElement) {
        return _super.call(this, injector) || this;
    }
    AttributesComponent.prototype.ngOnInit = function () {
        this.data = this.dataService.getGsModel();
        this.mode = this.dataService.mode;
        this.viewer = this.dataService.viewer;
        this.dataArr = this.dataService._ViData;
    };
    AttributesComponent.prototype.notify = function (message) {
        if (message === "model_update") {
            this.data = this.dataService.getGsModel();
            this.mode = this.dataService.mode;
            this.viewer = this.dataService.viewer;
            this.dataArr = this.dataService._ViData;
        }
    };
    AttributesComponent.prototype.ngDoCheck = function () {
        if (this.viewer !== undefined && this.dataService._SelectedEntity !== undefined && this.mode === "editor") {
            if (this.ID !== this.dataService._SelectedEntity._id) {
                var _Property = void 0;
                this.ID = this.dataService._SelectedEntity._id;
                this._Properties = [];
                for (var _i = 0, _a = this.dataArr["ColorProperty"]; _i < _a.length; _i++) {
                    var _ColorPro = _a[_i];
                    if (_ColorPro !== "None") {
                        _Property = [];
                        _Property.Name = _ColorPro;
                        _Property.Value = this.dataService._SelectedEntity.properties[_Property.Name]._value;
                        this._Properties.push(_Property);
                    }
                }
            }
        }
    };
    AttributesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-attributes",
            template: __webpack_require__("./src/app/mobius-cesium/setting/attributes.component.html"),
            styles: [__webpack_require__("./src/app/mobius-cesium/setting/attributes.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], AttributesComponent);
    return AttributesComponent;
}(__WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__["a" /* DataSubscriber */]));



/***/ }),

/***/ "./src/app/mobius-cesium/setting/publish.component.css":
/***/ (function(module, exports) {

module.exports = "/*#publish{\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n  color:#ddd !important;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  font-size: 14px !important;\r\n  line-height: 14px;\r\n  overflow-x: hidden !important;\r\n  border-right: 1px solid gray;\r\n}*/\r\n#publishwindow{\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n  color:#ddd !important;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  font-size: 14px !important;\r\n  line-height: 14px;\r\n  overflow-x: hidden !important;\r\n}\r\n/deep/split-gutter{\r\n  background-color:rgb(138, 168, 192) !important;\r\n}\r\n/deep/.mat-accent .mat-slider-thumb {\r\n    background-color: #395d73 !important;\r\n    cursor: -webkit-grab;\r\n}\r\n/deep/.mat-slider-track-fill{\r\n  background-color: #395d73 !important;\r\n}\r\n/deep/.mat-slider-thumb-label-text {\r\n    color: #395d73 !important;\r\n    font-size: 12px !important;\r\n}\r\n/deep/.mat-slider-thumb-label{\r\n    height: 15px !important;\r\n    width: 15px !important;\r\n    top: -20px !important;\r\n    right: -7px !important;\r\n    background-color: white !important;\r\n    border: 1px solid #395d73 !important;\r\n}\r\n/deep/.mat-slider-track-background{\r\n  background-color: #ddd !important;\r\n}\r\n.mat-slider{\r\n    width: 150px !important;\r\n}\r\n.cesium-button {\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  color: #395D73;\r\n  fill: #395D73;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  background: #F1F1F1;\r\n}\r\n.cesium-button-select{\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  fill: #395D73;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  color: #395D73;\r\n  font-family:sans-serif !important;\r\n  color: #395D73;\r\n  background-color: #F1F1F1;\r\n}\r\n.cesium-option{\r\n  background-color: #F1F1F1;\r\n  /*opacity: 0.8;*/\r\n  color: #395D73;\r\n  border: 1px solid #8AA8C0;\r\n}\r\nhr {\r\n  display: block;\r\n  height: 1px;\r\n  border: 0;\r\n  border-top: 1px solid #ddd !important;\r\n  padding: 0; \r\n  color:#ddd !important;\r\n  width: 100%;\r\n  background-color: #ddd !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/setting/publish.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"publish\" style=\"background-color: rgba(20,20,20,0.5);height: 100%;overflow-y:overlay;\"  >\r\n\r\n<div id=\"publishwindow\" *ngIf=\"dataArr!==undefined\">\r\n     <!--  <div id=\"PublishView\" style=\"margin-left: 5px;margin-top: 5px;\" *ngIf=\"ceisumData!==undefined\"> -->\r\n        <div *ngIf=\"_ColorKey!==undefined\">\r\n        <table >\r\n          <tr>\r\n          <th class=\"colorkey\" style=\"width: 280px\" *ngIf=\"_ColorDescr!==undefined\"><div style=\"color:#ddd !important;border:0;text-align: justify;font-weight: normal;padding: 10px 10px 0px 10px;\">{{_ColorDescr}}</div></th></tr>\r\n        </table>\r\n        <table>\r\n          <tr>\r\n            <th class=\"colorkey\" style=\"width: 80px\"><div class=\"Hide\" style=\"width: 80px;color:#ddd !important;border:0;text-align: left;font-weight: normal;padding: 10px 10px 0px 10px;\">Color&nbsp;&nbsp;:</div></th>\r\n          <th><div>\r\n            <select class=\"cesium-button\" (change)=\"onChangeColor($event.target.value)\" [ngModel]=\"_ColorKey\">\r\n              <option class=\"cesium-option\"  *ngFor=\"let ColorName of _ColorProperty\" value={{ColorName}}>{{ColorName}}</option>\r\n            </select>\r\n          </div></th>\r\n          </tr>\r\n          </table>\r\n    </div>\r\n    <div *ngIf=\"_ExtrudeKey!==undefined\">\r\n        <hr>\r\n          <table >\r\n          <tr>\r\n          <th class=\"colorkey\" style=\"width: 280px\" *ngIf=\"_ExtrudeDescr!==undefined\"><div style=\"color:#ddd !important;border:0;text-align: justify;font-weight: normal;padding: 10px 10px 0px 10px;\">{{_ExtrudeDescr}}</div></th></tr>\r\n        </table>\r\n        <table>\r\n          <tr>\r\n            <th class=\"colorkey\" style=\"width: 80px\"><div class=\"Hide\" style=\"width: 80px;color:#ddd !important;border:0;text-align: left;font-weight: normal;padding: 10px 10px 0px 10px;\">Extrude&nbsp;&nbsp;:</div></th>\r\n          <th><div>\r\n            <select class=\"cesium-button\" (change)=\"onChangeHeight($event.target.value)\" [ngModel]=\"_ExtrudeKey\">\r\n               <option class=\"cesium-option\"  *ngFor=\"let Height of _ExtrudeProperty\" value={{Height}}>{{Height}}</option>\r\n            </select>\r\n          </div></th>\r\n          </tr>\r\n        </table>\r\n        <table>\r\n          <tr ><th style=\"width:40px;height: 25px;\"><div style=\"width: 40px;color:#ddd !important;font-weight: normal;text-align: left;border:0;padding: 10px 10px 0px 10px;\">Min&nbsp;&nbsp;:</div></th>\r\n          <th style=\"width:40px;\"><div style=\"width: 40px;color:#ddd !important;font-weight: normal;text-align: left;border:0;padding: 10px 10px 0px 10px;\" *ngIf=\"_ExtrudeMin!==undefined\">{{_ExtrudeMin}}</div></th></tr>\r\n\r\n          <tr><th style=\"width:40px;\"><div style=\"width: 40px;color:#ddd !important;font-weight: normal;text-align: left;border:0;padding: 10px 10px 0px 10px;\">Max&nbsp;&nbsp;:</div></th>\r\n          <th style=\"width:60px;\"><div style=\"width: 60px;color:#ddd !important;font-weight: normal;text-align: left;border:0;padding: 10px 10px 0px 10px;\" *ngIf=\"_ExtrudeMax!==undefined\">{{_ExtrudeMax}}</div></th></tr>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"_Filter!==undefined\">\r\n      <hr>\r\n      <div class=\"hide-container\" style=\"margin-top:5px;\">\r\n        <div *ngFor=\"let item of _Filter;\" id={{item.divid}}>\r\n      <table>\r\n        <tr >\r\n          <th style=\"width:280px;height: 25px;\"><div style=\"width:280px;color:#ddd !important;text-align: justify;vertical-align: middle;font-weight: normal;padding: 10px 10px 0px 10px;\">{{item.descr}}</div></th></tr>\r\n        </table>\r\n        <table>\r\n          <tr>\r\n            <th style=\"width:80px;height: 25px;\"><div style=\"width:80px;color:#ddd !important;text-align: left;vertical-align: middle;font-weight: normal;padding: 10px 10px 0px 10px;\">{{item.HeightHide}}</div></th>\r\n        <th *ngIf=\"item.type === 'number'\" style=\"width:40px;height: 25px;\">\r\n          <div style=\"width:40px;height: 25px;color:#ddd !important;vertical-align: middle;font-weight: normal;margin-top: 10px;\" *ngIf=\"item.RelaHide === 0\">></div>\r\n          <div style=\"width:40px;height: 25px;color:#ddd !important;vertical-align: middle;font-weight: normal;margin-top: 10px;\" *ngIf=\"item.RelaHide === 1\"><</div>\r\n          <div style=\"width:40px;height: 25px;color:#ddd !important;vertical-align: middle;font-weight: normal;margin-top: 10px;\" *ngIf=\"item.RelaHide === 2\">=</div></th>\r\n          <th *ngIf=\"item.type === 'category'\" style=\"width:40px;height: 25px;\">\r\n          <div style=\"width:40px;height: 25px;color:#ddd !important;vertical-align: middle;font-weight: normal;margin-top: 10px;\" *ngIf=\"item.RelaHide === 0\">none</div>\r\n          <div style=\"width:40px;height: 25px;color:#ddd !important;vertical-align: middle;font-weight: normal;margin-top: 10px;\" *ngIf=\"item.RelaHide === 1\">=</div>\r\n          <div style=\"width:40px;height: 25px;color:#ddd !important;vertical-align: middle;font-weight: normal;margin-top: 10px;\" *ngIf=\"item.RelaHide === 2\">!=</div></th>\r\n          <th *ngIf=\"item.type === 'number'\" style=\"width:80px;color:#395D73 !important;\"><input type=\"text\" id={{item.id}} value={{item.textHide}} (change)=\"Changetext($event.target.value,item.id)\" style=\"width:80px;color:#395D73 !important;\"></th>\r\n          <th *ngIf=\"item.type === 'category'\" style=\"width:73px;height: 25px;\"><div style=\"width:73px;height: 25px;\">\r\n          <select class=\"cesium-button-select\" [ngModel]=\"item.CategaryHide\" (change)=\"ChangeCategory($event.target.value,item.id,1)\" style=\"width:73px;height: 25px;\">\r\n            <option class=\"cesium-option\" *ngFor=\"let caty of item.Category\" value={{caty}}>{{caty}}</option>\r\n          </select></div></th>\r\n        <th style=\"width:20px;height: 25px;\" id={{item.id}}><span id={{item.id}} (click)=\"Disable(item.id)\" style=\"width:20px;height: 25px;cursor:pointer;\"><i class=\"material-icons\" style=\"color:#ddd;font-size:16px\">check_circle</i></span></th></tr>\r\n      </table>\r\n      <table>\r\n        <tr>\r\n        <th *ngIf=\"item.type === 'number'\" style=\"width:30px;height: 25px;vertical-align: top;padding-top: 10px;\"><div style=\"font-weight: normal;display: inline-block;color:#ddd !important;width:30px;\">{{item.HideMin}}</div></th>\r\n        <th *ngIf=\"item.type === 'number'\" style=\"width:150px;height: 25px;\"><div style=\"font-weight: normal;display: inline-block;width:150px;\"><mat-slider class=\"slider\" name=\"range\" id=\"0\" min={{item.HideMin}} max={{item.HideMax}} step=0.01 thumbLabel=true value={{item.textHide}} #textscale (change)=\"Changetext(textscale.value.toPrecision(2),item.id)\" >\r\n        </mat-slider></div></th>\r\n        <th *ngIf=\"item.type === 'number'\" style=\"width:30px;height: 25px;vertical-align: top;padding-top: 10px;\"><div style=\"font-weight: normal;display: inline-block;color:#ddd !important;width:30px;text-align: left;\">{{item.HideMax}}</div></th></tr>\r\n      </table><hr>\r\n        </div>\r\n      </div>\r\n      <div style=\"padding: 10px 10px 0px 10px;\">\r\n      <button style=\"background-color: #ddd ;color:#395D73;\" (click)=\"reset()\">Reset</button></div>\r\n      </div>\r\n    <!-- </div> -->\r\n</div>\r\n\r\n  "

/***/ }),

/***/ "./src/app/mobius-cesium/setting/publish.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublishComponent; });
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


var PublishComponent = /** @class */ (function (_super) {
    __extends(PublishComponent, _super);
    function PublishComponent(injector, myElement) {
        return _super.call(this, injector) || this;
    }
    PublishComponent.prototype.ngOnInit = function () {
        this.dataArr = this.dataService._PuData;
        if (this.dataArr !== undefined) {
            this.LoadData();
            this.addHide();
        }
    };
    PublishComponent.prototype.notify = function (message) {
        if (message === "model_update") {
            try {
                this.dataArr = this.dataService._PuData;
                if (this.dataArr !== undefined) {
                    this.LoadData();
                    this.addHide();
                }
            }
            catch (ex) {
                console.log(ex);
            }
        }
    };
    PublishComponent.prototype.LoadData = function () {
        this._ColorDescr = this.dataArr["ColorDescr"];
        this._ColorProperty = this.dataArr["ColorProperty"];
        this._ColorKey = this.dataArr["ColorKey"];
        this._ColorMax = this.dataArr["ColorMax"];
        this._ColorMin = this.dataArr["ColorMin"];
        this._ColorInvert = this.dataArr["ColorInvert"];
        this._ExtrudeDescr = this.dataArr["ExtrudeDescr"];
        this._ExtrudeProperty = this.dataArr["ExtrudeProperty"];
        this._ExtrudeKey = this.dataArr["ExtrudeKey"];
        this._ExtrudeMax = this.dataArr["ExtrudeMax"];
        this._ExtrudeMin = this.dataArr["ExtrudeMin"];
        this._HeightChart = this.dataArr["HeightChart"];
        this._Invert = this.dataArr["Invert"];
        this._Scale = this.dataArr["Scale"];
        this._HideNum = this.dataArr["HideNum"];
    };
    PublishComponent.prototype.addHide = function () {
        var _Filter = this.dataArr["Filter"];
        var lastnumber;
        this._Filter = [];
        this._HideNum = [];
        if (_Filter !== undefined && _Filter.length !== 0) {
            for (var _i = 0, _Filter_1 = _Filter; _i < _Filter_1.length; _i++) {
                var _filter = _Filter_1[_i];
                if (this._HideNum.length === 0) {
                    this._HideNum[0] = "0";
                    lastnumber = this._HideNum[0];
                }
                else {
                    for (var j = 0; j < this._HideNum.length + 1; j++) {
                        if (this._HideNum.indexOf(String(j)) === -1) {
                            this._HideNum.push(String(j));
                            lastnumber = String(j);
                            break;
                        }
                    }
                }
                var _propertyname = _filter["name"];
                var _relation = Number(_filter["relation"]);
                var _text = _filter["value"];
                var _descr = _filter["descr"];
                var _HideType = void 0;
                var _texts = void 0;
                if (typeof (_text) === "number") {
                    _HideType = "number";
                    _texts = this.Initial(_propertyname);
                }
                else if (typeof (_text) === "string") {
                    _HideType = "category";
                    _texts = this.Initial(_propertyname);
                    _texts = ["None"].concat(_texts);
                }
                this._Filter.push({ divid: String("addHide".concat(String(lastnumber))), id: lastnumber, HeightHide: _propertyname,
                    type: _HideType, Category: _texts, CategaryHide: _text, descr: _descr, RelaHide: _relation,
                    textHide: _text, HideMax: Math.ceil(Math.max.apply(Math, _texts)),
                    HideMin: Math.round(Math.min.apply(Math, _texts) * 100) / 100, Disabletext: null });
            }
        }
        this.dataArr["Filter"] = this._Filter;
        this.dataArr["HideNum"] = this._HideNum;
        this.dataService._PuData = this.dataArr;
    };
    PublishComponent.prototype.Disable = function (event) {
        var index = this._HideNum.indexOf(event);
        var divid = String("addHide".concat(String(event)));
        var addHide = document.getElementById(divid);
        if (this._Filter[index].Disabletext === null) {
            this._CheckDisable = true;
        }
        else {
            this._CheckDisable = false;
        }
        if (this._CheckDisable === true) {
            addHide.style.background = "grey";
            if (this._Filter[index].type === "number") {
                var textHide = this._Filter[index].textHide;
                this._Filter[index].Disabletext = Number(textHide);
                if (this._Filter[index].RelaHide === "0" || this._Filter[index].RelaHide === 0) {
                    this._Filter[index].textHide = this._Filter[index].HideMin;
                }
                if (this._Filter[index].RelaHide === "1" || this._Filter[index].RelaHide === 1) {
                    this._Filter[index].textHide = this._Filter[index].HideMax;
                }
            }
            else if (this._Filter[index].type === "category") {
                var textHide = this._Filter[index].RelaHide;
                this._Filter[index].Disabletext = Number(textHide);
                this._Filter[index].RelaHide = 0;
            }
        }
        else {
            addHide.style.background = null;
            if (this._Filter[index].type === "number") {
                this._Filter[index].textHide = this._Filter[index].Disabletext;
                this._Filter[index].Disabletext = null;
            }
            else if (this._Filter[index].type === "category") {
                this._Filter[index].RelaHide = this._Filter[index].Disabletext;
                this._Filter[index].Disabletext = null;
            }
        }
        this.dataArr["Filter"] = this._Filter;
        this.dataArr["HideNum"] = this._HideNum;
        this.dataService._PuData = this.dataArr;
    };
    PublishComponent.prototype.Initial = function (_HideValue) {
        var texts = [];
        var promise = this.dataService.cesiumpromise;
        var self = this;
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var _i = 0, entities_1 = entities; _i < entities_1.length; _i++) {
                var entity = entities_1[_i];
                if (entity.properties[_HideValue] !== undefined) {
                    if (entity.properties[_HideValue]._value !== " ") {
                        if (texts.length === 0) {
                            texts[0] = entity.properties[_HideValue]._value;
                        }
                        else {
                            if (texts.indexOf(entity.properties[_HideValue]._value) === -1) {
                                texts.push(entity.properties[_HideValue]._value);
                            }
                        }
                    }
                }
            }
        });
        return texts;
    };
    PublishComponent.prototype.ChangeCategory = function (categary, id, type) {
        var _index = this._HideNum.indexOf(id);
        if (type === 1) {
            this._Filter[_index].CategaryHide = categary;
        }
        if (type === 0) {
            this._Filter[_index].RelaHide = Number(categary);
        }
    };
    PublishComponent.prototype.Changetext = function (value, id) {
        var _index = this._HideNum.indexOf(id);
        this._Filter[_index].textHide = value;
    };
    PublishComponent.prototype.onChangeColor = function (value) {
        var data = this.dataService.getGsModel()["cesium"]["colour"]["attribs"];
        this.dataArr["ColorKey"] = value;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var _data = data_1[_i];
            if (_data["name"] === value) {
                this.dataArr["ColorMin"] = _data["min"];
                this.dataArr["ColorMax"] = _data["max"];
                this.dataArr["ColorInvert"] = _data["invert"];
            }
        }
        var promise = this.dataService.cesiumpromise;
        var _Colortexts = [];
        var self = this;
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var _i = 0, entities_2 = entities; _i < entities_2.length; _i++) {
                var entity = entities_2[_i];
                if (entity.properties[value] !== undefined) {
                    if (entity.properties[value]._value !== " ") {
                        if (_Colortexts.length === 0) {
                            _Colortexts[0] = entity.properties[value]._value;
                        }
                        else {
                            if (_Colortexts.indexOf(entity.properties[value]._value) === -1) {
                                _Colortexts.push(entity.properties[value]._value);
                            }
                        }
                    }
                }
            }
        });
        this.dataArr["ColorText"] = _Colortexts.sort();
        this.dataService._PuData = this.dataArr;
        this.LoadData();
    };
    PublishComponent.prototype.onChangeHeight = function (value) {
        var data = this.dataService.getGsModel()["cesium"]["extrude"]["attribs"];
        this.dataArr["ExtrudeKey"] = value;
        for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
            var _data = data_2[_i];
            if (_data["name"] === value) {
                this.dataArr["ExtrudeMin"] = _data["min"];
                this.dataArr["ExtrudeMax"] = _data["max"];
                this.dataArr["HeightChart"] = _data["line"];
                this.dataArr["Invert"] = _data["invert"];
                this.dataArr["Scale"] = _data["scale"];
            }
        }
        var promise = this.dataService.cesiumpromise;
        var _Heighttexts = [];
        var self = this;
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var _i = 0, entities_3 = entities; _i < entities_3.length; _i++) {
                var entity = entities_3[_i];
                if (entity.properties[value] !== undefined) {
                    if (entity.properties[value]._value !== " ") {
                        if (_Heighttexts.length === 0) {
                            _Heighttexts[0] = entity.properties[value]._value;
                        }
                        else {
                            if (_Heighttexts.indexOf(entity.properties[value]._value) === -1) {
                                _Heighttexts.push(entity.properties[value]._value);
                            }
                        }
                    }
                }
            }
        });
        this.dataArr["ExtrudeText"] = _Heighttexts.sort();
        this.dataService._PuData = this.dataArr;
        this.LoadData();
    };
    PublishComponent.prototype.reset = function () {
        this.dataService.LoadJSONData();
        this.dataArr = this.dataService._PuData;
        if (this.dataArr !== undefined) {
            this.LoadData();
            this.addHide();
        }
    };
    PublishComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-publish",
            template: __webpack_require__("./src/app/mobius-cesium/setting/publish.component.html"),
            styles: [__webpack_require__("./src/app/mobius-cesium/setting/publish.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], PublishComponent);
    return PublishComponent;
}(__WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__["a" /* DataSubscriber */]));



/***/ }),

/***/ "./src/app/mobius-cesium/setting/setting.component.css":
/***/ (function(module, exports) {

module.exports = "#setting{\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n  color:#ddd !important;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  font-size: 14px !important;\r\n  line-height: 14px;\r\n  overflow-x: hidden !important;\r\n  border-right: 1px solid gray;\r\n}\r\n\r\n/deep/.mat-tab-label, /deep/.mat-tab-label-active{\r\n  min-width: 60px!important;\r\n  padding: 3px!important;\r\n  margin: 3px!important;\r\n  color:#ddd !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n/deep/.mat-tab-label{\r\n  height: 30px !important;\r\n  width: 60px !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n/deep/.mat-tab-labels{\r\n  background-color: rgba(20,20,20,0.5) !important;\r\n}\r\n\r\n/deep/.mat-tab-header{\r\n  width: 700px !important;\r\n}\r\n\r\n/deep/.mat-tab-header-pagination-controls-enabled{\r\n  display: none !important;\r\n}\r\n\r\n/deep/.mat-ink-bar{\r\n  background-color: #395d73 !important;\r\n}\r\n\r\n/deep/.mat-tab{\r\n  min-width: 30px !important;\r\n}\r\n\r\n/deep/.mat-tab-body-content{\r\n  overflow: hidden !important;\r\n}\r\n\r\n/deep/.mat-header{\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  margin-left: 0px;\r\n  color:#395d73;\r\n  border: 0;\r\n  height: 20px;\r\n  background-color: rgba(20,20,20,0.5) !important;\r\n}\r\n\r\n/deep/.mat-tab-body-wrapper{\r\n  height:100% !important;\r\n\r\n}\r\n\r\n/deep/split-gutter{\r\n  background-color:rgb(138, 168, 192) !important;\r\n}\r\n\r\n/deep/.mat-accent .mat-slider-thumb {\r\n    background-color: #395d73 !important;\r\n    cursor: -webkit-grab;\r\n}\r\n\r\n/deep/.mat-slider-track-fill{\r\n  background-color: #395d73 !important;\r\n}\r\n\r\n/deep/.mat-slider-thumb-label-text {\r\n    color: #395d73 !important;\r\n    font-size: 12px !important;\r\n}\r\n\r\n/deep/.mat-slider-thumb-label{\r\n    height: 15px !important;\r\n    width: 15px !important;\r\n    top: -20px !important;\r\n    right: -7px !important;\r\n    background-color: white !important;\r\n    border: 1px solid #395d73 !important;\r\n}\r\n\r\n/deep/.mat-slider-track-background{\r\n  background-color: #ddd !important;\r\n}\r\n\r\n.mat-slider{\r\n    width: 150px !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/setting/setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"setting\" >\r\n  <mat-tab-group class=\"mat-tab-group\" style=\"height: 100%;\" (selectedTabChange)=\"changedata($event.index)\">\r\n    <mat-tab label=\"&nbsp;Visualise&nbsp;\" >\r\n      <app-visualise  (change)=\"LoadViewer()\" (click)=\"LoadViewer()\"></app-visualise>\r\n    </mat-tab>\r\n    <mat-tab label=\"&nbsp;Attributes&nbsp;\">\r\n      <app-attributes ></app-attributes>\r\n    </mat-tab>\r\n    <mat-tab label=\"&nbsp;Publish&nbsp;\" >\r\n      <app-publish  (change)=\"LoadViewer()\" (click)=\"Reset();LoadViewer();\"></app-publish>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</div>"

/***/ }),

/***/ "./src/app/mobius-cesium/setting/setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
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



var SettingComponent = /** @class */ (function (_super) {
    __extends(SettingComponent, _super);
    function SettingComponent(injector, myElement) {
        return _super.call(this, injector) || this;
    }
    SettingComponent.prototype.ngOnInit = function () {
        this.data = this.dataService.getGsModel();
        this.mode = this.dataService.mode;
        this.viewer = this.dataService.viewer;
        if (this.mode === "viewer") {
            this.changedata(2);
        }
        else if (this.mode === "editor") {
            this.changedata(0);
        }
    };
    SettingComponent.prototype.notify = function (message) {
        if (message === "model_update") {
            this.data = this.dataService.getGsModel();
            this.mode = this.dataService.mode;
            this.viewer = this.dataService.viewer;
            try {
                if (this.data !== undefined && this.data["features"] !== undefined) {
                    if (this.mode === "viewer") {
                        this.changedata(2);
                    }
                    else if (this.mode === "editor") {
                        this.changedata(0);
                    }
                }
            }
            catch (ex) {
                console.log(ex);
            }
        }
    };
    SettingComponent.prototype.changedata = function (id) {
        this.dataService._index = id;
        if (id === 0) {
            this.dataArr = this.dataService._ViData;
        }
        else if (id === 2) {
            this.dataArr = this.dataService._PuData;
        }
        if (this.dataArr !== undefined) {
            this.LoadViewer();
        }
    };
    SettingComponent.prototype.Reset = function () {
        this.dataArr = this.dataService._PuData;
    };
    SettingComponent.prototype.LoadViewer = function () {
        var promise = this.dataService.cesiumpromise;
        var _ColorKey = this.dataArr["ColorKey"];
        var _ColorMax = this.dataArr["ColorMax"];
        var _ColorMin = this.dataArr["ColorMin"];
        var _ColorText = this.dataArr["ColorText"];
        var _ColorInvert = this.dataArr["ColorInvert"];
        var _ExtrudeKey = this.dataArr["ExtrudeKey"];
        var _ExtrudeMax = this.dataArr["ExtrudeMax"];
        var _ExtrudeMin = this.dataArr["ExtrudeMin"];
        var _HeightChart = this.dataArr["HeightChart"];
        var _Invert = this.dataArr["Invert"];
        var _Scale = this.dataArr["Scale"];
        var _Filter = this.dataArr["Filter"];
        var _ChromaScale = __WEBPACK_IMPORTED_MODULE_2_chroma_js__["scale"]("SPECTRAL");
        // const ColorNum: boolean=;
        if (_ColorInvert === true) {
            _ChromaScale = __WEBPACK_IMPORTED_MODULE_2_chroma_js__["scale"]("SPECTRAL").domain([1, 0]);
        }
        var self = this;
        var i = 0;
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var _i = 0, entities_1 = entities; _i < entities_1.length; _i++) {
                var entity = entities_1[_i];
                i = i + 1;
                var _CheckHide = void 0;
                if (_Filter.length !== 0) {
                    _CheckHide = self.Hide(_Filter, entity, _HeightChart);
                    if (_CheckHide === true) {
                        if (entity.polygon !== undefined) {
                            entity.polygon.extrudedHeight = 0;
                            entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                            if (_HeightChart === true) {
                                if (entity.polyline !== undefined) {
                                    entity.polyline.show = false;
                                }
                            }
                        }
                        if (entity.polyline !== undefined) {
                            entity.polyline.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                        }
                    }
                }
                if (_Filter.length === 0 || _CheckHide === false) {
                    if (typeof (_ColorText[0]) === "number") {
                        self.colorByNum(entity, _ColorMax, _ColorMin, _ColorKey, _ChromaScale);
                    }
                    else {
                        self.colorByCat(entity, _ColorText, _ColorKey, _ChromaScale);
                    }
                    if (_HeightChart === false) {
                        entity.polyline = undefined;
                        entity.polygon.extrudedHeight = self.ExtrudeHeight(entity.properties[_ExtrudeKey]._value, _ExtrudeMax, _ExtrudeMin, _Invert) * _Scale;
                    }
                    else {
                        entity.polygon.extrudedHeight = 0;
                        var center = self.dataService.poly_center[i];
                        entity.polyline = new Cesium.PolylineGraphics({
                            positions: new Cesium.Cartesian3.fromDegreesArrayHeights([center[0], center[1], 0, center[0], center[1],
                                self.ExtrudeHeight(entity.properties[_ExtrudeKey]._value, _ExtrudeMax, _ExtrudeMin, _Invert) * _Scale]),
                            width: center[2],
                            material: entity.polygon.material,
                            show: true,
                        });
                    }
                }
            }
        });
    };
    SettingComponent.prototype.Hide = function (_Filter, entity, _HeightChart) {
        var _CheckHide = false;
        for (var _i = 0, _Filter_1 = _Filter; _i < _Filter_1.length; _i++) {
            var filter = _Filter_1[_i];
            var value = entity.properties[filter.HeightHide]._value;
            if (value !== undefined) {
                if (typeof (value) === "number") {
                    if (this._compare(value, Number(filter.textHide), Number(filter.RelaHide))) {
                        _CheckHide = true;
                    }
                }
                else if (typeof (value) === "string") {
                    if (this._compareCat(value, filter.textHide, Number(filter.RelaHide))) {
                        _CheckHide = true;
                    }
                }
            }
        }
        return _CheckHide;
    };
    SettingComponent.prototype._compare = function (value, slider, relation) {
        switch (relation) {
            case 0:
                return value < slider;
            case 1:
                return value > slider;
            case 2:
                return value === slider;
        }
    };
    SettingComponent.prototype._compareCat = function (value, _Categary, relation) {
        switch (relation) {
            case 0:
                return value === undefined;
            case 1:
                return value !== _Categary;
            case 2:
                return value === _Categary;
        }
    };
    SettingComponent.prototype.ExtrudeHeight = function (value, _ExtrudeMax, _ExtrudeMin, _Invert) {
        var diff;
        if (_ExtrudeMin < 0) {
            diff = Math.abs(_ExtrudeMin);
        }
        else {
            diff = 0;
        }
        if (value > _ExtrudeMax) {
            value = _ExtrudeMax;
        }
        if (value < _ExtrudeMin) {
            value = _ExtrudeMin;
        }
        switch (_Invert) {
            case true:
                return _ExtrudeMax - value;
            case false:
                return value;
        }
    };
    SettingComponent.prototype.colorByNum = function (entity, max, min, _ColorKey, _ChromaScale) {
        if (entity.properties[_ColorKey] !== undefined) {
            var texts = entity.properties[_ColorKey]._value;
            var rgb = _ChromaScale(Number(((max - texts) / (max - min)).toFixed(2)))._rgb;
            if (entity.polygon !== undefined) {
                entity.polygon.material = Cesium.Color.fromBytes(rgb[0], rgb[1], rgb[2]);
            }
            if (entity.polyline !== undefined) {
                entity.polyline.material = Cesium.Color.fromBytes(rgb[0], rgb[1], rgb[2]);
            }
        }
    };
    SettingComponent.prototype.colorByCat = function (entity, _ColorText, _ColorKey, _ChromaScale) {
        if (entity.properties[_ColorKey] !== undefined) {
            var initial = false;
            for (var j = 0; j < _ColorText.length; j++) {
                if (entity.properties[_ColorKey]._value === _ColorText[j]) {
                    var rgb = _ChromaScale((j / _ColorText.length).toFixed(2));
                    entity.polygon.material = entity.polygon.material = Cesium.Color.fromBytes(rgb._rgb[0], rgb._rgb[1], rgb._rgb[2]);
                    initial = true;
                }
            }
            if (initial === false) {
                entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
            }
        }
    };
    SettingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-setting",
            template: __webpack_require__("./src/app/mobius-cesium/setting/setting.component.html"),
            styles: [__webpack_require__("./src/app/mobius-cesium/setting/setting.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], SettingComponent);
    return SettingComponent;
}(__WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__["a" /* DataSubscriber */]));



/***/ }),

/***/ "./src/app/mobius-cesium/setting/visualise.component.css":
/***/ (function(module, exports) {

module.exports = "#SettingView{\r\n  position: relative;\r\n  padding:0px;\r\n  height: 100%;\r\n  width: 100%;\r\n  color:#ddd !important;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  font-size: 14px !important;\r\n  line-height: 14px;\r\n  overflow-x: hidden !important;\r\n  /*border-right: 1px solid gray;*/\r\n  background-color: rgba(20,20,20,0.5);\r\n  overflow-y:overlay;\r\n}\r\n/deep/.mat-tab-label, /deep/.mat-tab-label-active{\r\n  min-width: 60px!important;\r\n  padding: 3px!important;\r\n  margin: 3px!important;\r\n  color:#ddd !important;\r\n  background-color: transparent !important;\r\n}\r\n/deep/.mat-tab-label{\r\n  height: 30px !important;\r\n  width: 60px !important;\r\n  background-color: transparent !important;\r\n}\r\n/deep/.mat-tab-labels{\r\n  background-color: rgba(20,20,20,0.5) !important;\r\n}\r\n/deep/.mat-tab-header{\r\n  width: 700px !important;\r\n}\r\n/deep/.mat-tab-header-pagination-controls-enabled{\r\n  display: none !important;\r\n}\r\n/deep/.mat-ink-bar{\r\n  background-color: #395d73 !important;\r\n}\r\n/deep/.mat-tab{\r\n  min-width: 30px !important;\r\n}\r\n/deep/.mat-tab-body-content{\r\n  overflow: hidden !important;\r\n}\r\n/deep/.mat-header{\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  margin-left: 0px;\r\n  color:#395d73;\r\n  border: 0;\r\n  height: 20px;\r\n  background-color: rgba(20,20,20,0.5) !important;\r\n}\r\n/deep/.mat-tab-body-wrapper{\r\n  height:100% !important;\r\n\r\n}\r\n/deep/split-gutter{\r\n  background-color:rgb(138, 168, 192) !important;\r\n}\r\n/deep/.mat-accent .mat-slider-thumb {\r\n    background-color: #395d73 !important;\r\n    cursor: -webkit-grab;\r\n}\r\n/deep/.mat-slider-track-fill{\r\n  background-color: #395d73 !important;\r\n}\r\n/deep/.mat-slider-thumb-label-text {\r\n    color: #395d73 !important;\r\n    font-size: 12px !important;\r\n}\r\n/deep/.mat-slider-thumb-label{\r\n    height: 15px !important;\r\n    width: 15px !important;\r\n    top: -20px !important;\r\n    right: -7px !important;\r\n    background-color: white !important;\r\n    border: 1px solid #395d73 !important;\r\n}\r\n/deep/.mat-slider-track-background{\r\n  background-color: #ddd !important;\r\n}\r\n.mat-slider{\r\n    width: 150px !important;\r\n}\r\n.cesium-button {\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  color: #395D73;\r\n  fill: #395D73;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  height:22px;\r\n  font-family:sans-serif !important;\r\n  background: #F1F1F1;\r\n}\r\n.cesium-button-select{\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  color: #395D73;\r\n  fill: #395D73;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  height:22px;\r\n  font-family:sans-serif !important;\r\n  background: #F1F1F1;\r\n}\r\n.cesium-option{\r\n  background-color: #F1F1F1;\r\n  /*opacity: 0.8;*/\r\n  color: #395D73;\r\n  border: 1px solid #8AA8C0;\r\n}\r\nhr {\r\n  display: block;\r\n  height: 1px;\r\n  border: 0;\r\n  border-top: 1px solid #ddd !important;\r\n  padding: 0; \r\n  color:#ddd !important;\r\n  width: 100%;\r\n  background-color: #ddd !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/setting/visualise.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"visualise\"> -->\r\n<div id=\"SettingView\" >\r\n    <table>\r\n      <tr>\r\n      <th class=\"colorkey\" style=\"width: 80px\"><div class=\"Hide\" style=\"width: 80px;color:#ddd !important;border:0;text-align: left;font-weight: normal;\">Imagery</div></th>\r\n      <th style=\"width:80px;height: 18px;\"><div style=\"width:80px;height: 18px;color:#ddd !important;font-weight: normal;text-align: left;border:0;\"><input type=\"button\" value=\"Disable\" style=\"color:#395d73;width: 80px;height: 22px;\" (click)=\"changeImagery()\"></div></th>\r\n    </tr>\r\n  </table>\r\n  <hr>\r\n    <table>\r\n      <tr>\r\n      <th class=\"colorkey\" style=\"width: 80px\"><div class=\"Hide\" style=\"width: 80px;color:#ddd !important;border:0;text-align: left;font-weight: normal;\">Color</div></th>\r\n      <th><div>\r\n        <select class=\"cesium-button\" (change)=\"onChangeColor($event.target.value)\" [ngModel]=\"_ColorKey\">\r\n          <option class=\"cesium-option\"  *ngFor=\"let ColorName of _ColorProperty\" value={{ColorName}}>{{ColorName}}</option>\r\n        </select>\r\n      </div></th>\r\n      </tr>\r\n      </table>\r\n      <table>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#ddd !important;font-weight: normal;text-align: left;border:0;\">Min</div></th>\r\n      <th style=\"width:80px;height: 18px;\"><input type=\"text\"  value={{_ColorMin}} style=\"width:80px;height: 18px;color:#395d73;font-weight: normal;text-align: left;border:0;\" (change)=\"changeColorMin($event.target.value)\"></th></tr>  \r\n      </table>\r\n      <table >\r\n      <tr ><th style=\"width:80px;\"><div style=\"width: 80px;color:#ddd !important;font-weight: normal;text-align: left;border:0;\">Max</div></th>\r\n      <th style=\"width:80px;height: 18px;\"><input type=\"text\" value={{_ColorMax}} style=\"width: 80px;height: 18px;color:#395d73;font-weight: normal;text-align: left;border:0;\" (change)=\"changeColorMax($event.target.value)\"></th></tr>\r\n  </table>\r\n    <hr>\r\n      <table>\r\n      <tr>\r\n      <th class=\"colorkey\" style=\"width: 80px\"><div class=\"Hide\" style=\"width: 80px;color:#ddd !important;border:0;text-align: left;font-weight: normal;\">Extrude</div></th>\r\n      <th><div>\r\n        <select class=\"cesium-button\" (change)=\"onChangeHeight($event.target.value)\" [ngModel]=\"_ExtrudeKey\">\r\n           <option class=\"cesium-option\"  *ngFor=\"let Height of _ExtrudeProperty\" value={{Height}}>{{Height}}</option>\r\n        </select>\r\n      </div></th>\r\n      </tr>\r\n    </table>\r\n    <table>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#ddd !important;font-weight: normal;text-align: left;border:0;\">Min</div></th>\r\n      <th style=\"width:80px;height: 18px;\"><input type=\"text\"  value={{_ExtrudeMin}} style=\"width:80px;height: 18px;color:#395d73;font-weight: normal;text-align: left;border:0;\" (change)=\"changeHeightMin($event.target.value)\"></th></tr>  \r\n      </table>\r\n      <table >\r\n      <tr ><th style=\"width:80px;\"><div style=\"width: 80px;color:#ddd !important;font-weight: normal;text-align: left;border:0;\">Max</div></th>\r\n      <th style=\"width:80px;height: 18px;\"><input type=\"text\" value={{_ExtrudeMax}} style=\"width: 80px;height: 18px;color:#395d73;font-weight: normal;text-align: left;border:0;\" (change)=\"changeHeightMax($event.target.value)\"></th></tr>\r\n  </table>\r\n   <table>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#ddd !important;font-weight: normal;text-align: left;border:0;\">Scale</div></th>\r\n        <!-- <th style=\"width:80px;height: 25px;\"><input type=\"text\"  value={{HeightMin}} style=\"width:80px;color:#395d73;font-weight: normal;text-align: left;border:0;\" (change)=\"changeHeightMin($event.target.value)\"></th> -->\r\n      <th style=\"width:80px;height: 18px;\"><input type=\"text\" value={{_Scale}} style=\"width:80px;height: 18px;color:#395d73;font-weight: normal;text-align: left;border:0;\" (change)=\"changescale($event.target.value)\" ></th>\r\n      <!-- <th style=\"width:80px;height: 25px;\"><div style=\"width:80px;color:#ddd !important;font-weight: normal;text-align: left;border:0;\"><input type=\"checkbox\" [checked]=\"CheckScale\" (click)=\"checkscale();changescale(ScaleValue)\"></div></th> --></tr>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#ddd !important;font-weight: normal;text-align: left;border:0;\">Invert</div></th>\r\n      <th style=\"width:80px;height: 25px;\"><div style=\"width:80px;color:#ddd !important;font-weight: normal;text-align: left;border:0;\"><input type=\"checkbox\" [checked]=\"_Invert\" (click)=\"changeopp()\"></div></th></tr>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#ddd !important;font-weight: normal;text-align: left;border:0;\">Height Chart</div></th>\r\n      <th style=\"width:80px;height: 25px;\"><div style=\"width:80px;color:#ddd !important;font-weight: normal;text-align: left;border:0;\"><input type=\"checkbox\" [checked]=\"_HeightChart\" (click)=\"changeExtrude();\"></div></th></tr>  \r\n  </table>\r\n  <hr>\r\n  <table>\r\n    <tr>\r\n    <th class=\"colorkey\" style=\"width: 75px;height: 22px;\"><div class=\"Hide\" style=\"width: 75px;height: 22;color:#ddd !important;border-color:#395d73;border:0;text-align: left;font-weight: normal;\"><input type=\"button\" value=\"Add Filter\" style=\"color:#395d73;width: 75px;height: 22px;\" (click)=\"addHide()\"></div></th>\r\n    <th style=\"width:20px;height: 22px;\"><div style=\"width:20px;height: 22px;margin-left: 10px\">\r\n      <select class=\"cesium-button-select\"  (change)=\"ChangeHeight($event.target.value)\">\r\n         <option class=\"cesium-option\"  *ngFor=\"let ColorName of _ColorProperty\" value={{ColorName}}>{{ColorName}}</option>\r\n      </select></div></th>\r\n    </tr>\r\n  </table>\r\n  <div class=\"hide-container\" style=\"margin-top:5px;\">\r\n    <div *ngFor=\"let item of _Filter;\" id={{item.divid}}>\r\n  <table>\r\n    <tr ><th style=\"width:85px;height: 22px;\"><div style=\"width:85px;color:#ddd !important;text-align: left;vertical-align: middle;font-weight: normal;\">{{item.HeightHide}}</div></th>\r\n    <th *ngIf=\"item.type === 'number'\" style=\"width:40px;height: 22px;\"><div style=\"width:40px;height: 22px;\">\r\n      <select class=\"cesium-button-select\" [ngModel]=\"item.RelaHide\" (change)=\"Changerelation($event.target.value,item.id)\" style=\"width:40px;height: 22px;\">\r\n         <option class=\"cesium-option\" value=0>></option>\r\n         <option class=\"cesium-option\" value=1><</option>\r\n         <option class=\"cesium-option\" value=2>=</option>\r\n      </select></div></th>\r\n      <th *ngIf=\"item.type === 'category'\" style=\"width:40px;height: 22px;\"><div style=\"width:40px;height: 22px;\">\r\n      <select class=\"cesium-button-select\" [ngModel]=\"item.RelaHide\" (change)=\"ChangeCategory($event.target.value,item.id,0)\" style=\"width:40px;height: 22px;\">\r\n        <option class=\"cesium-option\" value=0>none</option>\r\n        <option class=\"cesium-option\" value=1>=</option>\r\n        <option class=\"cesium-option\" value=2>!=</option>\r\n      </select></div></th>\r\n      <th *ngIf=\"item.type === 'number'\" style=\"width:70px;height: 20px;\"><input type=\"text\" id={{item.id}} value={{item.textHide}} (change)=\"Changetext($event.target.value,item.id)\" style=\"width:70px;height: 20px;\"></th>\r\n      <th *ngIf=\"item.type === 'category'\" style=\"width:73px;height: 22px;\"><div style=\"width:73px;height: 22px;\">\r\n      <select class=\"cesium-button-select\" [ngModel]=\"item.CategaryHide\" (change)=\"ChangeCategory($event.target.value,item.id,1)\" style=\"width:73px;height: 22px;\">\r\n        <option class=\"cesium-option\" *ngFor=\"let caty of item.Category\" value={{caty}}>{{caty}}</option>\r\n      </select></div></th>\r\n    <th style=\"width:20px;height: 22px;\" id={{item.id}}><span id={{item.id}} (click)=\"deleteHide(item.id)\" style=\"width:20px;height: 22px;cursor:pointer;\"><i class=\"material-icons\" style=\"color:#ddd;font-size:16px\">delete</i></span></th>\r\n    <th style=\"width:20px;height: 22px;\" id={{item.id}}><span id={{item.id}} (click)=\"Disable(item.id)\" style=\"width:20px;height: 22px;cursor:pointer;\"><i class=\"material-icons\" style=\"color:#ddd;font-size:16px\">check_circle</i></span></th></tr>\r\n  </table>\r\n  <table>\r\n    <tr>\r\n    <th *ngIf=\"item.type === 'number'\" style=\"width:30px;height: 22px;vertical-align: top;padding-top: 10px;\"><div style=\"font-weight: normal;display: inline-block;color:#ddd !important;width:30px;\">{{item.HideMin}}</div></th>\r\n    <th *ngIf=\"item.type === 'number'\" style=\"width:150px;height: 22px;\"><div style=\"font-weight: normal;display: inline-block;width:150px;\"><mat-slider class=\"slider\" name=\"range\" id=\"0\" min={{item.HideMin}} max={{item.HideMax}} step=0.01 thumbLabel=true value={{item.textHide}} #textscale (change)=\"Changetext(textscale.value.toPrecision(2),item.id)\" >\r\n    </mat-slider></div></th>\r\n    <th *ngIf=\"item.type === 'number'\" style=\"width:30px;height: 22px;vertical-align: top;padding-top: 10px;\"><div style=\"font-weight: normal;display: inline-block;color:#ddd !important;width:30px;text-align: left;\">{{item.HideMax}}</div></th></tr>\r\n  </table><hr>\r\n    </div>\r\n  </div>\r\n  </div>\r\n<!-- </div> -->\r\n  "

/***/ }),

/***/ "./src/app/mobius-cesium/setting/visualise.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualiseComponent; });
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


var VisualiseComponent = /** @class */ (function (_super) {
    __extends(VisualiseComponent, _super);
    function VisualiseComponent(injector, myElement) {
        return _super.call(this, injector) || this;
    }
    VisualiseComponent.prototype.ngOnInit = function () {
        this.dataArr = this.dataService._ViData;
        if (this.dataArr !== undefined) {
            this.LoadData();
        }
    };
    VisualiseComponent.prototype.notify = function (message) {
        if (message === "model_update") {
            try {
                this.dataArr = this.dataService._ViData;
                if (this.dataArr !== undefined) {
                    this.LoadData();
                }
            }
            catch (ex) {
                console.log(ex);
            }
        }
    };
    VisualiseComponent.prototype.LoadData = function () {
        this._ColorProperty = this.dataArr["ColorProperty"];
        this._ColorKey = this.dataArr["ColorKey"];
        this._ColorMax = this.dataArr["ColorMax"];
        this._ColorMin = this.dataArr["ColorMin"];
        this._ExtrudeProperty = this.dataArr["ExtrudeProperty"];
        this._ExtrudeKey = this.dataArr["ExtrudeKey"];
        this._ExtrudeMax = this.dataArr["ExtrudeMax"];
        this._ExtrudeMin = this.dataArr["ExtrudeMin"];
        this._HeightChart = this.dataArr["HeightChart"];
        this._Invert = this.dataArr["Invert"];
        this._Scale = this.dataArr["Scale"];
        this._Filter = this.dataArr["Filter"];
        this._HideNum = this.dataArr["HideNum"];
    };
    VisualiseComponent.prototype.onChangeColor = function (value) {
        this.dataArr["ColorKey"] = value;
        var promise = this.dataService.cesiumpromise;
        var _Colortexts = [];
        var self = this;
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var _i = 0, entities_1 = entities; _i < entities_1.length; _i++) {
                var entity = entities_1[_i];
                if (entity.properties[value] !== undefined) {
                    if (entity.properties[value]._value !== " ") {
                        if (_Colortexts.length === 0) {
                            _Colortexts[0] = entity.properties[value]._value;
                        }
                        else {
                            if (_Colortexts.indexOf(entity.properties[value]._value) === -1) {
                                _Colortexts.push(entity.properties[value]._value);
                            }
                        }
                    }
                }
            }
        });
        this.dataArr["ColorMin"] = Math.min.apply(Math, _Colortexts);
        this.dataArr["ColorMax"] = Math.max.apply(Math, _Colortexts);
        this.dataArr["ColorText"] = _Colortexts.sort();
        this.dataService._ViData = this.dataArr;
        this.LoadData();
    };
    VisualiseComponent.prototype.changeColorMin = function (_Min) {
        this.dataArr["ColorMin"] = Number(_Min);
        this._ColorMin = this.dataArr["ColorMin"];
        this.dataService._ViData = this.dataArr;
    };
    VisualiseComponent.prototype.changeColorMax = function (_Max) {
        this.dataArr["ColorMax"] = Number(_Max);
        this._ColorMax = this.dataArr["ColorMax"];
        this.dataService._ViData = this.dataArr;
    };
    VisualiseComponent.prototype.onChangeHeight = function (value) {
        this.dataArr["ExtrudeKey"] = value;
        var promise = this.dataService.cesiumpromise;
        var _Heighttexts = [];
        var self = this;
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var _i = 0, entities_2 = entities; _i < entities_2.length; _i++) {
                var entity = entities_2[_i];
                if (entity.properties[value] !== undefined) {
                    if (entity.properties[value]._value !== " ") {
                        if (_Heighttexts.length === 0) {
                            _Heighttexts[0] = entity.properties[value]._value;
                        }
                        else {
                            if (_Heighttexts.indexOf(entity.properties[value]._value) === -1) {
                                _Heighttexts.push(entity.properties[value]._value);
                            }
                        }
                    }
                }
            }
        });
        this.dataArr["ExtrudeMin"] = Math.min.apply(Math, _Heighttexts);
        this.dataArr["ExtrudeMax"] = Math.max.apply(Math, _Heighttexts);
        this.dataArr["ExtrudeText"] = _Heighttexts.sort();
        this.dataService._ViData = this.dataArr;
        this.LoadData();
    };
    VisualiseComponent.prototype.changeHeightMin = function (_Min) {
        this.dataArr["ExtrudeMin"] = Number(_Min);
        this._ExtrudeMin = this.dataArr["ExtrudeMin"];
        this.dataService._ViData = this.dataArr;
    };
    VisualiseComponent.prototype.changeHeightMax = function (_Max) {
        this.dataArr["ExtrudeMax"] = Number(_Max);
        this._ExtrudeMax = this.dataArr["ExtrudeMax"];
        this.dataService._ViData = this.dataArr;
    };
    VisualiseComponent.prototype.changescale = function (_ScaleValue) {
        this.dataArr["Scale"] = Number(_ScaleValue);
        this._Scale = this.dataArr["Scale"];
        this.dataService._ViData = this.dataArr;
    };
    VisualiseComponent.prototype.changeopp = function () {
        this._Invert = !this._Invert;
        this.dataArr["Invert"] = this._Invert;
        this.dataService._ViData = this.dataArr;
    };
    VisualiseComponent.prototype.changeExtrude = function () {
        this._HeightChart = !this._HeightChart;
        this.dataArr["HeightChart"] = this._HeightChart;
        this.dataService._ViData = this.dataArr;
    };
    VisualiseComponent.prototype.addHide = function () {
        var lastnumber;
        if (this.dataArr["HideNum"] !== undefined) {
            this._HideNum = this.dataArr["HideNum"];
            this._Filter = this.dataArr["Filter"];
        }
        if (this._HideNum === null || this._HideNum.length === 0) {
            this._HideNum[0] = "0";
            lastnumber = this._HideNum[0];
        }
        else {
            for (var i = 0; i < this._HideNum.length + 1; i++) {
                if (this._HideNum.indexOf(String(i)) === -1) {
                    this._HideNum.push(String(i));
                    lastnumber = String(i);
                    break;
                }
            }
        }
        if (this._HideValue === undefined) {
            this._HideValue = this._ColorProperty[0];
        }
        var texts = this.Initial(this._HideValue);
        var _HideType;
        if (typeof (texts[0]) === "number") {
            _HideType = "number";
        }
        else if (typeof (texts[0]) === "string") {
            _HideType = "category";
        }
        this._Filter.push({ divid: String("addHide".concat(String(lastnumber))), id: lastnumber,
            HeightHide: this._HideValue, type: _HideType, Category: texts, CategaryHide: texts[0],
            RelaHide: 0, textHide: Math.round(Math.min.apply(Math, texts) * 100) / 100,
            HideMax: Math.ceil(Math.max.apply(Math, texts)),
            HideMin: Math.round(Math.min.apply(Math, texts) * 100) / 100, Disabletext: null });
        this.dataArr["Filter"] = this._Filter;
        this.dataArr["HideNum"] = this._HideNum;
        this.dataService._ViData = this.dataArr;
    };
    VisualiseComponent.prototype.deleteHide = function (event) {
        var index = this._HideNum.indexOf(event);
        var divid = String("addHide".concat(String(event)));
        var addHide = document.getElementById(divid);
        var hidecontainer = document.getElementsByClassName("hide-container")[0];
        hidecontainer.removeChild(addHide);
        if (this._Filter[index].type === "number") {
            if (this._Filter[index].RelaHide === "0" || this._Filter[index].RelaHide === 0) {
                this._Filter[index].textHide = this._Filter[index].HideMin;
            }
            if (this._Filter[index].RelaHide === "1" || this._Filter[index].RelaHide === 1) {
                this._Filter[index].textHide = this._Filter[index].HideMax;
            }
        }
        else if (this._Filter[index].type === "category") {
            this._Filter[index].RelaHide = 0;
        }
        this._Filter.splice(index, 1);
        this._HideNum.splice(index, 1);
        this.dataArr["Filter"] = this._Filter;
        this.dataArr["HideNum"] = this._HideNum;
        this.dataService._ViData = this.dataArr;
    };
    VisualiseComponent.prototype.Disable = function (event) {
        var index = this._HideNum.indexOf(event);
        var divid = String("addHide".concat(String(event)));
        var addHide = document.getElementById(divid);
        if (this._Filter[index].Disabletext === null) {
            this._CheckDisable = true;
        }
        else {
            this._CheckDisable = false;
        }
        if (this._CheckDisable === true) {
            addHide.style.background = "grey";
            if (this._Filter[index].type === "number") {
                var textHide = this._Filter[index].textHide;
                this._Filter[index].Disabletext = Number(textHide);
                if (this._Filter[index].RelaHide === "0" || this._Filter[index].RelaHide === 0) {
                    this._Filter[index].textHide = this._Filter[index].HideMin;
                }
                if (this._Filter[index].RelaHide === "1" || this._Filter[index].RelaHide === 1) {
                    this._Filter[index].textHide = this._Filter[index].HideMax;
                }
            }
            else if (this._Filter[index].type === "category") {
                var textHide = this._Filter[index].RelaHide;
                this._Filter[index].Disabletext = Number(textHide);
                this._Filter[index].RelaHide = 0;
            }
        }
        else {
            addHide.style.background = null;
            if (this._Filter[index].type === "number") {
                this._Filter[index].textHide = this._Filter[index].Disabletext;
                this._Filter[index].Disabletext = null;
            }
            else if (this._Filter[index].type === "category") {
                this._Filter[index].RelaHide = this._Filter[index].Disabletext;
                this._Filter[index].Disabletext = null;
            }
        }
        this.dataArr["Filter"] = this._Filter;
        this.dataArr["HideNum"] = this._HideNum;
        this.dataService._ViData = this.dataArr;
    };
    VisualiseComponent.prototype.ChangeHeight = function (_HeightHide) {
        this._HideValue = _HeightHide;
    };
    VisualiseComponent.prototype.Changerelation = function (_RelaHide, id) {
        var index = this._HideNum.indexOf(id);
        var HeightHide = this._Filter[index].HeightHide;
        this._Filter[index].RelaHide = _RelaHide;
        var texts = [];
        var promise = this.dataService.cesiumpromise;
        var self = this;
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var _i = 0, entities_3 = entities; _i < entities_3.length; _i++) {
                var entity = entities_3[_i];
                if (entity.properties[HeightHide] !== undefined) {
                    if (entity.properties[HeightHide]._value !== " ") {
                        if (texts.length === 0) {
                            texts[0] = entity.properties[HeightHide]._value;
                        }
                        else {
                            if (texts.indexOf(entity.properties[HeightHide]._value) === -1) {
                                texts.push(entity.properties[HeightHide]._value);
                            }
                        }
                    }
                }
            }
        });
        this._Filter[index].HideMax = Math.ceil(Math.max.apply(Math, texts));
        this._Filter[index].HideMin = Math.round(Math.min.apply(Math, texts) * 100) / 100;
        if (_RelaHide === "0" || _RelaHide === 0) {
            this._Filter[index].textHide = this._Filter[index].HideMin;
        }
        if (_RelaHide === "1" || _RelaHide === 1) {
            this._Filter[index].textHide = this._Filter[index].HideMax;
        }
    };
    VisualiseComponent.prototype.ChangeCategory = function (categary, id, type) {
        var index = this._HideNum.indexOf(id);
        if (type === 1) {
            this._Filter[index].CategaryHide = categary;
        }
        if (type === 0) {
            this._Filter[index].RelaHide = Number(categary);
        }
    };
    VisualiseComponent.prototype.Changetext = function (value, id) {
        var index = this._HideNum.indexOf(id);
        this._Filter[index].textHide = value;
    };
    VisualiseComponent.prototype.Initial = function (_HideValue) {
        var texts = [];
        var promise = this.dataService.cesiumpromise;
        var self = this;
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var _i = 0, entities_4 = entities; _i < entities_4.length; _i++) {
                var entity = entities_4[_i];
                if (entity.properties[_HideValue] !== undefined) {
                    if (entity.properties[_HideValue]._value !== " ") {
                        if (texts.length === 0) {
                            texts[0] = entity.properties[_HideValue]._value;
                        }
                        else {
                            if (texts.indexOf(entity.properties[_HideValue]._value) === -1) {
                                texts.push(entity.properties[_HideValue]._value);
                            }
                        }
                    }
                }
            }
        });
        return texts;
    };
    VisualiseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-visualise",
            template: __webpack_require__("./src/app/mobius-cesium/setting/visualise.component.html"),
            styles: [__webpack_require__("./src/app/mobius-cesium/setting/visualise.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], VisualiseComponent);
    return VisualiseComponent;
}(__WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__["a" /* DataSubscriber */]));



/***/ }),

/***/ "./src/app/mobius-cesium/viewer/viewer.component.css":
/***/ (function(module, exports) {

module.exports = "body{\r\n  background: red;\r\n}\r\n\r\n\r\n#cesiumContainer{\r\n height: 100%;\r\n width: 100%; \r\n font-family: sans-serif !important;\r\n margin: 0px !important;\r\n padding: 0px !important;\r\n font-size: 14px;\r\n}\r\n\r\n\r\n#ColorBar{\r\n  z-index:99;\r\n  margin: 5px;\r\n  width: 100%;\r\n  padding: 2px 5px;\r\n  position: absolute;\r\n  display:inline-block;\r\n  bottom: 60px;\r\n  overflow: hidden !important;\r\n  text-overflow: ellipsis !important;\r\n  table-layout:fixed !important;\r\n  white-space: nowrap !important;\r\n}\r\n\r\n\r\n#Colortext{\r\n  z-index:99;\r\n  margin: 5px;\r\n  width: 100%;\r\n  padding: 2px 5px;\r\n  position: absolute;\r\n  display:inline-block;\r\n  bottom: 30px;\r\n  overflow: hidden !important;\r\n  text-overflow: ellipsis !important;\r\n  table-layout:fixed !important;\r\n  white-space: nowrap !important;\r\n}\r\n\r\n\r\n/*.cesium-button {\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  color: white;\r\n  fill: #395D73;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  background: #395D73;\r\n}\r\n.cesium-option,.Hide{\r\n  background-color: #395D73;\r\n  color: white;\r\n  border: 1px solid #8AA8C0;\r\n}\r\n.Hide{\r\n  margin: auto;\r\n  width:80px;\r\n  height: 20px;\r\n  word-wrap:break-word;\r\n  font-weight: normal;\r\n  color:white;\r\n  font-family:sans-serif !important;\r\n  font-size: 14px !important;\r\n}\r\n\r\n.cesium-infoBox-title{\r\n  height:14px;\r\n  background: #395D73;\r\n}\r\n.cesium-viewer{\r\n  font-size: 14px !important;\r\n}\r\nbody{\r\n  font-size: 10px;\r\n}\r\n\r\n.cesium-infoBox-description{\r\n  background-color: red !important;\r\n}\r\n\r\n.cesium-infoBox-description table{\r\n  background-color: #F1F1F1;\r\n}\r\n.cesium-infoBox-iframe{\r\n  max-height: 300px !important;\r\n  height:650px !important;\r\n}\r\n#ColorandHeight{\r\n  position: absolute;\r\n  bottom: 10px;\r\n  width: 100%;\r\n  z-index: 98;\r\n  height: 60px;\r\n  display:inline-block;\r\n}\r\n#toolbar{\r\n  z-index:99;\r\n  margin: 5px;\r\n  width: 100%;\r\n  padding: 2px 5px;\r\n  position: absolute;\r\n  display:inline-block;\r\n  bottom: 1px;\r\n  overflow: hidden !important;\r\n  text-overflow: ellipsis !important;\r\n  table-layout:fixed !important;\r\n  white-space: nowrap !important;\r\n}\r\n.colorkey{\r\n  overflow: hidden !important;\r\n  text-overflow: ellipsis !important;\r\n  table-layout:fixed !important;\r\n  white-space: nowrap !important;\r\n}\r\n.table_text{\r\n  margin: auto;\r\n  width:40px;\r\n  word-wrap:break-word;\r\n  font-weight: normal;\r\n  color:white;\r\n  text-shadow: 0px 0px 3px black;\r\n}*/\r\n\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/viewer/viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"cesiumContainer\" (click)=\"select();showAttribs($event);Colortext();\" >\r\n  <div id=\"ColorBar\" *ngIf=\"texts!==undefined\">\r\n  \t<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" style=\"width: 88%;margin-left: 9%\">\r\n       <tr >\r\n          <th *ngFor=\"let text of texts;\" style=\"text-align:right;width: 7%\"><div  style=\"width: 8%;vertical-align: text-top;color:white;text-shadow: 0px 0px 3px black;\">{{text}}</div></th><!-- writing-mode:vertical-lr; -->\r\n        </tr>\r\n    </table>\r\n\t<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" style=\"width: 80%;margin: 0 auto;\">\r\n       <tr>\r\n          <th  *ngFor=\"let color of _Colorbar;let indx=index\" style=\"width: 0.5px;\" ><div [ngStyle]=\"{ 'background-color': color}\" ><div *ngIf=\"indx%8===0\" style=\"border-left: #FFFFFF 1px solid;border-color: black\">&nbsp;</div><div *ngIf=\"indx%8!==0\">&nbsp;</div></div></th>\r\n        </tr>\r\n    </table>\r\n  </div>\r\n  <div id=\"ColorBar\" *ngIf=\"_Cattexts!==undefined\" style=\"width: 100%;text-align: center\">\r\n    <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" *ngFor=\"let cattext of _Cattexts\" style=\"display:inline-block;overflow: hidden !important;text-overflow: ellipsis !important;table-layout:fixed !important;white-space: nowrap !important; \">\r\n          <tr >\r\n            <th  style=\"width:80px;display:inline-block;overflow: hidden !important;text-overflow: ellipsis !important;table-layout:fixed !important;white-space: nowrap !important; \"><div [ngStyle]=\"{ 'background-color': cattext.color}\" >&nbsp;&nbsp;&nbsp;</div></th>\r\n        </tr>\r\n        <tr>\r\n            <th><div matTooltip={{cattext.text}}  style=\"width:80px;text-align: left;white-space: nowrap;display:inline-block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;color:white;text-shadow: 0px 0px 3px black;\">{{cattext.text}}</div></th>\r\n          </tr>\r\n        </table>\r\n  </div>\r\n   <div id=\"ColorBar\" *ngIf=\"_CatNumtexts!==undefined\" >\r\n        <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" style=\"width: 82%;margin: 0 auto;\">\r\n       <tr >\r\n          <th *ngFor=\"let cattext of _CatNumtexts;\" style=\"text-align:left;max-width: 3%\"><div *ngIf=\"cattext.text!==null\" style=\"width: 0.5px;vertical-align: text-top;color:white;text-shadow: 0px 0px 3px black;\">{{cattext.text}}</div><div *ngIf=\"cattext.text===null\" style=\"width: 0.5px;vertical-align: text-top;color:white;text-shadow: 0px 0px 3px black;\">&nbsp;&nbsp;&nbsp;</div></th>\r\n        </tr>\r\n    </table>\r\n  <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" style=\"width: 80%;margin: 0 auto;\">\r\n       <tr>\r\n          <th  *ngFor=\"let cattext of _CatNumtexts;let indx=index\" style=\"width: 0.5px;\" ><div [ngStyle]=\"{ 'background-color': cattext.color}\" ><div style=\"border-color: black\">&nbsp;</div></div></th>\r\n        </tr>\r\n    </table>\r\n  </div>\r\n  <div>\r\n    <table id=\"cesium-infoBox-defaultTable\" style=\"width: 140px;position:absolute;padding:4px;background-color:white;display: none;\">\r\n       <tr *ngFor=\"let pickupArr of pickupArrs\"><th style=\"font-size: 10px;font-weight: normal;color:#395d73;width: 60px;height: 14px\"><div matTooltip={{pickupArr.name}} style=\"width: 60px;height:14px;text-align: left;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;\">{{pickupArr.name}}</div></th><th style=\"font-size: 10px;font-weight: normal;color:#395d73;width: 80px;height: 14px\"><div matTooltip={{pickupArr.data}} style=\"width: 80px;height:14px;text-align: left;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;\">{{pickupArr.data}}</div></th></tr>\r\n       </table>\r\n        \r\n     </div>\r\n     <!-- <div id=\"Colortext\" *ngIf=\"mode==='viewer'\" >\r\n          <div>Color: </div>\r\n        </div> -->\r\n     \r\n</div>"

/***/ }),

/***/ "./src/app/mobius-cesium/viewer/viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__ = __webpack_require__("./src/app/mobius-cesium/data/DataSubscriber.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_array__ = __webpack_require__("./node_modules/d3-array/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chroma_js__ = __webpack_require__("./node_modules/chroma-js/chroma.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chroma_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chroma_js__);
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
        _this._ShowColorBar = false;
        _this.myElement = myElement;
        return _this;
    }
    ViewerComponent.prototype.ngOnInit = function () {
        this.mode = this.dataService.mode;
    };
    ViewerComponent.prototype.notify = function (message) {
        if (message === "model_update") {
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
        if (document.getElementsByClassName("cesium-viewer").length !== 0) {
            document.getElementsByClassName("cesium-viewer")[0].remove();
        }
        var imageryViewModels = [];
        imageryViewModels.push(new Cesium.ProviderViewModel({
            name: "Stamen Toner",
            iconUrl: Cesium.buildModuleUrl("Widgets/Images/ImageryProviders/stamenToner.png"),
            tooltip: "A high contrast black and white map.\nhttp://www.maps.stamen.com/",
            creationFunction: function () {
                return Cesium.createOpenStreetMapImageryProvider({
                    url: "https://stamen-tiles.a.ssl.fastly.net/toner/",
                });
            },
        }));
        imageryViewModels.push(new Cesium.ProviderViewModel({
            name: "Stamen Toner(Lite)",
            iconUrl: Cesium.buildModuleUrl("Widgets/Images/ImageryProviders/stamenToner.png"),
            tooltip: "A high contrast black and white map(Lite).\nhttp://www.maps.stamen.com/",
            creationFunction: function () {
                return Cesium.createOpenStreetMapImageryProvider({
                    url: "https://stamen-tiles.a.ssl.fastly.net/toner-lite/",
                });
            },
        }));
        imageryViewModels.push(new Cesium.ProviderViewModel({
            name: "Terrain(Standard)",
            iconUrl: Cesium.buildModuleUrl("Widgets/Images/TerrainProviders/CesiumWorldTerrain.png"),
            tooltip: "A high contrast black and white map(Standard).\nhttp://www.maps.stamen.com/",
            creationFunction: function () {
                return Cesium.createOpenStreetMapImageryProvider({
                    url: "https://stamen-tiles.a.ssl.fastly.net/terrain/",
                });
            },
        }));
        imageryViewModels.push(new Cesium.ProviderViewModel({
            name: "Terrain(Background)",
            iconUrl: Cesium.buildModuleUrl("Widgets/Images/TerrainProviders/CesiumWorldTerrain.png"),
            tooltip: "A high contrast black and white map(Background).\nhttp://www.maps.stamen.com/",
            creationFunction: function () {
                return Cesium.createOpenStreetMapImageryProvider({
                    url: "https://stamen-tiles.a.ssl.fastly.net/terrain-background/",
                });
            },
        }));
        imageryViewModels.push(new Cesium.ProviderViewModel({
            name: "Open\u00adStreet\u00adMap",
            iconUrl: Cesium.buildModuleUrl("Widgets/Images/ImageryProviders/openStreetMap.png"),
            tooltip: "OpenStreetMap (OSM) is a collaborative project to create a free editable \
             map of the world.\nhttp://www.openstreetmap.org",
            creationFunction: function () {
                return Cesium.createOpenStreetMapImageryProvider({
                    url: "https://a.tile.openstreetmap.org/",
                });
            },
        }));
        imageryViewModels.push(new Cesium.ProviderViewModel({
            name: "Earth at Night",
            iconUrl: Cesium.buildModuleUrl("Widgets/Images/ImageryProviders/earthAtNight.png"),
            tooltip: "The lights of cities and villages trace the outlines of civilization \
                 in this global view of the Earth at night as seen by NASA/NOAA\'s Suomi NPP satellite.",
            creationFunction: function () {
                return new Cesium.IonImageryProvider({ assetId: 3812 });
            },
        }));
        imageryViewModels.push(new Cesium.ProviderViewModel({
            name: "Natural Earth\u00a0II",
            iconUrl: Cesium.buildModuleUrl("Widgets/Images/ImageryProviders/naturalEarthII.png"),
            tooltip: "Natural Earth II, darkened for contrast.\nhttp://www.naturalearthdata.com/",
            creationFunction: function () {
                return Cesium.createTileMapServiceImageryProvider({
                    url: Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII"),
                });
            },
        }));
        imageryViewModels.push(new Cesium.ProviderViewModel({
            name: "Blue Marble",
            iconUrl: Cesium.buildModuleUrl("Widgets/Images/ImageryProviders/blueMarble.png"),
            tooltip: "Blue Marble Next Generation July, 2004 imagery from NASA.",
            creationFunction: function () {
                return new Cesium.IonImageryProvider({ assetId: 3845 });
            },
        }));
        var viewer = new Cesium.Viewer("cesiumContainer", {
            infoBox: false,
            imageryProviderViewModels: imageryViewModels,
            selectedImageryProviderViewModel: imageryViewModels[0],
            timeline: false,
            fullscreenButton: false,
            automaticallyTrackDataSourceClocks: false,
            animation: false,
        });
        document.getElementsByClassName("cesium-viewer-bottom")[0].remove();
        if (this.data !== undefined) {
            this.viewer = viewer;
            this.dataService.viewer = this.viewer;
            this.data = data;
            this.poly_center = [];
            var promise_1 = Cesium.GeoJsonDataSource.load(this.data);
            var self_1 = this;
            var _HeightKey = [];
            promise_1.then(function (dataSource) {
                viewer.dataSources.add(dataSource);
                var entities = dataSource.entities.values;
                for (var _i = 0, entities_1 = entities; _i < entities_1.length; _i++) {
                    var entity = entities_1[_i];
                    var poly_center = [];
                    if (entity.polygon !== undefined) {
                        entity.polygon.outlineColor = Cesium.Color.Black;
                        var center = Cesium.BoundingSphere.fromPoints(entity.polygon.hierarchy.getValue().positions).center;
                        var radius = Math.min(Math.round(Cesium.BoundingSphere.fromPoints(entity.polygon.hierarchy.getValue().positions).radius / 100), 10);
                        var longitudeString = Cesium.Math.toDegrees(Cesium.Ellipsoid.WGS84.
                            cartesianToCartographic(center).longitude).toFixed(10);
                        var latitudeString = Cesium.Math.toDegrees(Cesium.Ellipsoid.WGS84.cartesianToCartographic(center).
                            latitude).toFixed(10);
                        poly_center = [longitudeString, latitudeString, radius];
                        self_1.poly_center.push(poly_center);
                    }
                    if (entity.billboard !== undefined) {
                        entity.billboard = undefined;
                        entity.point = new Cesium.PointGraphics({
                            color: Cesium.Color.BLUE,
                            pixelSize: 10,
                        });
                    }
                }
                if (entities[0].polygon !== undefined) {
                    self_1._ShowColorBar = true;
                }
                else {
                    self_1._ShowColorBar = false;
                }
                self_1.dataService.poly_center = self_1.poly_center;
            });
            this.dataService.cesiumpromise = promise_1;
            if (this.mode === "editor") {
                this.dataService.getValue(this.data);
                this.dataService.LoadJSONData();
                this.dataArr = this.dataService._ViData;
                this._index = 0;
            }
            if (this.mode === "viewer") {
                this._index = 2;
            }
            viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function (e) {
                e.cancel = true;
                viewer.zoomTo(promise_1);
            });
            viewer.zoomTo(promise_1);
            this.Colortext();
        }
    };
    ViewerComponent.prototype.Colortext = function () {
        this.texts = undefined;
        this._Cattexts = [];
        this._CatNumtexts = [];
        var _ColorKey;
        var propertyname = this.dataArr["ColorKey"];
        var texts = this.dataArr["ColorText"].sort();
        var _Max = this.dataArr["ColorMax"];
        var _Min = this.dataArr["ColorMin"];
        var _ChromaScale = __WEBPACK_IMPORTED_MODULE_3_chroma_js__["scale"]("SPECTRAL");
        if (this.dataArr["ColorInvert"] === true) {
            _ChromaScale = __WEBPACK_IMPORTED_MODULE_3_chroma_js__["scale"]("SPECTRAL").domain([1, 0]);
        }
        this._Colorbar = [];
        for (var i = 79; i > -1; i--) {
            this._Colorbar.push(_ChromaScale(i / 80));
        }
        if (typeof (texts[0]) === "number") {
            if (_Max < 20) {
                this.texts = [_Min];
                for (var i = 1; i < 10; i++) {
                    this.texts.push(Number((_Min + (_Max - _Min) * (i / 10)).toFixed(2)));
                }
                this.texts.push(_Max);
            }
            else {
                this.texts = __WEBPACK_IMPORTED_MODULE_2_d3_array__["a" /* ticks */](_Min, _Max, 10);
            }
            for (var i = 0; i < this.texts.length; i++) {
                if (this.texts[i] / 1000000000 > 1) {
                    this.texts[i] = String(Number((this.texts[i] / 1000000000).toFixed(3))).concat("B");
                }
                else if (this.texts[i] / 1000000 > 1) {
                    this.texts[i] = String(Number((this.texts[i] / 1000000).toFixed(3))).concat("M");
                }
                else if (this.texts[i] / 1000 > 1) {
                    this.texts[i] = String(Number(((this.texts[i] / 1000)).toFixed(3))).concat("K");
                }
            }
        }
        if (typeof (texts[0]) === "string") {
            if (texts.length <= 12) {
                for (var j = 0; j < texts.length; j++) {
                    _ColorKey = [];
                    _ColorKey.text = texts[j];
                    _ColorKey.color = _ChromaScale(j / texts.length);
                    this._Cattexts.push(_ColorKey);
                }
            }
            else {
                for (var j = 0; j < this._Colorbar.length; j++) {
                    _ColorKey = [];
                    if (j === 0) {
                        _ColorKey.text = texts[j];
                    }
                    else if (j === this._Colorbar.length - 1) {
                        if (texts[texts.length - 1] !== null) {
                            _ColorKey.text = texts[texts.length - 1];
                        }
                        else {
                            _ColorKey.text = texts[texts.length - 2];
                        }
                    }
                    else {
                        _ColorKey.text = null;
                    }
                    _ColorKey.color = this._Colorbar[j];
                    this._CatNumtexts.push(_ColorKey);
                }
            }
        }
        /*if(this._ShowColorBar===false) {
          this._Cattexts=undefined;
          this._Colorbar=undefined;
        }*/
    };
    ViewerComponent.prototype.select = function () {
        event.stopPropagation();
        var viewer = this.viewer;
        if (this.dataArr !== undefined) {
            if (this.selectEntity !== undefined && this.selectEntity !== null) {
                this.ColorSelect(this.selectEntity);
            }
            if (viewer.selectedEntity !== undefined && viewer.selectedEntity.polygon !== null) {
                this.dataService._SelectedEntity = viewer.selectedEntity;
                var material = void 0;
                if (viewer.selectedEntity.polygon !== undefined) {
                    material = viewer.selectedEntity.polygon.material;
                    viewer.selectedEntity.polygon.material = Cesium.Color.WHITE;
                }
                if (viewer.selectedEntity.polyline !== undefined) {
                    material = viewer.selectedEntity.polyline.material;
                    viewer.selectedEntity.polyline.material = Cesium.Color.WHITE;
                }
                this.selectEntity = viewer.selectedEntity;
                this.material = material;
            }
            else {
                this.dataService._SelectedEntity = undefined;
                this.selectEntity = undefined;
                this.material = undefined;
            }
        }
    };
    ViewerComponent.prototype.ColorSelect = function (entity) {
        var promise = this.dataService.cesiumpromise;
        var _ColorKey = this.dataArr["ColorKey"];
        var _ColorMax = this.dataArr["ColorMax"];
        var _ColorMin = this.dataArr["ColorMin"];
        var _ColorText = this.dataArr["ColorText"];
        var _ColorInvert = this.dataArr["ColorInvert"];
        var _ExtrudeKey = this.dataArr["ExtrudeKey"];
        var _ExtrudeMax = this.dataArr["ExtrudeMax"];
        var _ExtrudeMin = this.dataArr["ExtrudeMin"];
        var _HeightChart = this.dataArr["HeightChart"];
        var _Invert = this.dataArr["Invert"];
        var _Scale = this.dataArr["Scale"];
        var _Filter = this.dataArr["Filter"];
        var _ChromaScale = __WEBPACK_IMPORTED_MODULE_3_chroma_js__["scale"]("SPECTRAL");
        if (_ColorInvert === true) {
            _ChromaScale = __WEBPACK_IMPORTED_MODULE_3_chroma_js__["scale"]("SPECTRAL").domain([1, 0]);
        }
        var _CheckHide;
        if (_Filter.length !== 0) {
            _CheckHide = this.Hide(_Filter, entity, _HeightChart);
            if (_CheckHide === true) {
                if (entity.polygon !== undefined) {
                    entity.polygon.extrudedHeight = 0;
                    entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                    if (_HeightChart === true) {
                        if (entity.polyline !== undefined) {
                            entity.polyline.show = false;
                        }
                    }
                }
                if (entity.polyline !== undefined) {
                    entity.polyline.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                }
            }
        }
        if (_Filter.length === 0 || _CheckHide === false) {
            if (typeof (_ColorText[0]) === "number") {
                this.colorByNum(entity, _ColorMax, _ColorMin, _ColorKey, _ChromaScale);
            }
            else {
                this.colorByCat(entity, _ColorText, _ColorKey, _ChromaScale);
            }
        }
    };
    ViewerComponent.prototype.Hide = function (_Filter, entity, _HeightChart) {
        var _CheckHide = false;
        for (var _i = 0, _Filter_1 = _Filter; _i < _Filter_1.length; _i++) {
            var filter = _Filter_1[_i];
            var value = entity.properties[filter.HeightHide]._value;
            if (value !== undefined) {
                if (typeof (value) === "number") {
                    if (this._compare(value, Number(filter.textHide), Number(filter.RelaHide))) {
                        _CheckHide = true;
                    }
                }
                else if (typeof (value) === "string") {
                    if (this._compareCat(value, filter.textHide, Number(filter.RelaHide))) {
                        _CheckHide = true;
                    }
                }
            }
        }
        return _CheckHide;
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
    ViewerComponent.prototype._compareCat = function (value, _Categary, relation) {
        switch (relation) {
            case 0:
                return value === undefined;
            case 1:
                return value !== _Categary;
            case 2:
                return value === _Categary;
        }
    };
    ViewerComponent.prototype.colorByNum = function (entity, max, min, _ColorKey, _ChromaScale) {
        if (entity.properties[_ColorKey] !== undefined) {
            var texts = entity.properties[_ColorKey]._value;
            var rgb = _ChromaScale(Number(((max - texts) / (max - min)).toFixed(2)))._rgb;
            if (entity.polygon !== undefined) {
                entity.polygon.material = Cesium.Color.fromBytes(rgb[0], rgb[1], rgb[2]);
            }
            if (entity.polyline !== undefined) {
                entity.polyline.material = Cesium.Color.fromBytes(rgb[0], rgb[1], rgb[2]);
            }
        }
    };
    ViewerComponent.prototype.colorByCat = function (entity, _ColorText, _ColorKey, _ChromaScale) {
        if (entity.properties[_ColorKey] !== undefined) {
            var initial = false;
            for (var j = 0; j < _ColorText.length; j++) {
                if (entity.properties[_ColorKey]._value === _ColorText[j]) {
                    var rgb = _ChromaScale((j / _ColorText.length).toFixed(2));
                    entity.polygon.material = entity.polygon.material = Cesium.Color.fromBytes(rgb._rgb[0], rgb._rgb[1], rgb._rgb[2]);
                    initial = true;
                }
            }
            if (initial === false) {
                entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
            }
        }
    };
    ViewerComponent.prototype.showAttribs = function (event) {
        if (this.data !== undefined && this.mode === "viewer") {
            if (this.data["cesium"] !== undefined) {
                if (this.data["cesium"].select !== undefined) {
                    if (this.viewer.selectedEntity !== undefined) {
                        var pickup = this.viewer.scene.pick(new Cesium.Cartesian2(event.clientX, event.clientY));
                        this.pickupArrs = [];
                        this.pickupArrs.push({ name: "ID", data: pickup.id.id });
                        for (var i = 0; i < this.data["cesium"].select.length; i++) {
                            var propertyName = this.data["cesium"].select[i];
                            this.pickupArrs.push({ name: propertyName, data: this.dataService._SelectedEntity.properties[propertyName]._value });
                        }
                        var nameOverlay = document.getElementById("cesium-infoBox-defaultTable");
                        this.viewer.container.appendChild(nameOverlay);
                        nameOverlay.style.bottom = this.viewer.canvas.clientHeight - event.clientY + "px";
                        nameOverlay.style.left = event.clientX + "px";
                        nameOverlay.style.display = "block";
                    }
                    else {
                        document.getElementById("cesium-infoBox-defaultTable").style.display = "none";
                    }
                }
            }
        }
    };
    ViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "cesium-viewer",
            template: __webpack_require__("./src/app/mobius-cesium/viewer/viewer.component.html"),
            styles: [__webpack_require__("./src/app/mobius-cesium/viewer/viewer.component.css")],
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