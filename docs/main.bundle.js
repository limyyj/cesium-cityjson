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

module.exports = "@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\");\r\n\r\n@font-face{\r\n  font-family: \"FontAwesome\";\r\n}\r\n\r\nhtml,body {\r\n  font-family: 'Open Sans', sans-serif;\r\n  margin: 0px !important;\r\n  padding: 0px !important;\r\n  border: 0px !important;\r\n  outline:0px !important;\r\n  overflow: hidden;\r\n  font-size: 14px;\r\n}\r\n\r\n#loadfile{\r\n  z-index: 99;\r\n  top: 5px;\r\n  position: absolute;\r\n  right: 86px;\r\n  width: 32px;\r\n  height: 32px;\r\n  font-family: sans-serif !important;\r\n  font-size: 16px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  border-radius: 14%;\r\n  padding: 0;\r\n  vertical-align: middle;\r\n}\r\n\r\n#overlay{\r\n  z-index: 250;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: none;\r\n}\r\n\r\n#loader {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  z-index: 260;\r\n  width: 150px;\r\n  height: 150px;\r\n  margin: -75px 0 0 -75px;\r\n  border: 16px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 16px solid #3498db;\r\n  width: 120px;\r\n  height: 120px;\r\n  -webkit-animation: spin 2s linear infinite;\r\n  animation: spin 2s linear infinite;\r\n  display: none;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n\r\n/*#drop_zone {\r\n  position: absolute;\r\n  left: calc(50% - 150px);\r\n  border: 5px solid blue;\r\n  width:  300px;\r\n  height: 100px;\r\n}*/\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100%\">\r\n\t<div id=\"loadfile\">\r\n      <!-- <div class=\"version\" style=\"font-family:sans-serif;color:white;\">v0.1.1&nbsp;&nbsp;</div> -->\r\n      <button  class=\"cesium-button\" onclick=\"document.getElementById('files').click();\" style=\"width: 32px; height: 32px; padding: 0px\"><i class=\"fa fa-file fa-lg\"></i></button>\r\n      <input type=\"file\" id=\"files\" name=\"files[]\" style=\"font-family:sans-serif;color:white;\" (change)=\"handleFileSelect($event)\" style=\"display: none;\"/>\r\n  \t</div>\r\n\t<mobius-cesium [data]=\"gs_dummy_data\" [mode]=\"'editor'\"></mobius-cesium>\r\n</div>\r\n\r\n<div id=\"overlay\"></div>\r\n<div id=\"loader\"></div>"

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
        this.gs_dummy_data = undefined;
        // this.dataService.setGsModel(this.gs_dummy_data);
    }
    AppComponent.prototype.handleFileSelect = function (evt) {
        var files = evt.target.files; // FileList object
        evt = null;
        var filetype = files[0].type;
        var fr = new FileReader();
        var self = this;
        fr.onload = function (text) {
            if (filetype === "application/json") {
                var js_data = JSON.parse(text.target["result"]);
                self.gs_dummy_data = js_data;
            }
            else {
                var parser = new DOMParser();
                var xmlDoc = parser.parseFromString(text.target["result"], "application/xml");
                self.gs_dummy_data = xmlDoc;
            }
        };
        fr.readAsText(files[0]);
        document.getElementById("overlay").style.display = "block";
        document.getElementById("loader").style.display = "block";
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-root",
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__readCityJSON_service__ = __webpack_require__("./src/app/mobius-cesium/data/readCityJSON.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__readCityGML_service__ = __webpack_require__("./src/app/mobius-cesium/data/readCityGML.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cesiumGeom_service__ = __webpack_require__("./src/app/mobius-cesium/data/cesiumGeom.service.ts");




var DataSubscriber = /** @class */ (function () {
    function DataSubscriber(injector) {
        var _this = this;
        this.dataService = injector.get(__WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]);
        this._subscription = this.dataService.getMessage().subscribe(function (message) {
            _this._message = message;
            _this.notify(message.text);
        });
        this.cityJSONService = injector.get(__WEBPACK_IMPORTED_MODULE_1__readCityJSON_service__["a" /* CityJSONService */]);
        this.cityGMLService = injector.get(__WEBPACK_IMPORTED_MODULE_2__readCityGML_service__["a" /* CityGMLService */]);
        this.cesiumGeomService = injector.get(__WEBPACK_IMPORTED_MODULE_3__cesiumGeom_service__["a" /* CesiumGeomService */]);
    }
    DataSubscriber.prototype.notify = function (message) {
        console.warn("Notify function not Implemented");
    };
    return DataSubscriber;
}());



/***/ }),

/***/ "./src/app/mobius-cesium/data/cesiumGeom.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CesiumGeomService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_earcut__ = __webpack_require__("./node_modules/earcut/src/earcut.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_earcut___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_earcut__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CesiumGeomService = /** @class */ (function () {
    function CesiumGeomService() {
    }
    /* Initialise datasource and other data
       Called by CityGMLservice and CityJSONservice when new file is loaded */
    CesiumGeomService.prototype.initialiseCesium = function () {
        // initialise and suspend datasource
        this.dataSource = new Cesium.CustomDataSource();
        this.suspendDataSource();
        // initialise/reset id arrays and counter
        this.parent_ids = [];
        this.total_count = 0;
        this.prop_ids = {};
    };
    /* Get datasource
       Returns: datasource
       Called by CityGMLservice and CityJSONservice when file completely generated */
    CesiumGeomService.prototype.getDataSource = function () {
        return this.dataSource;
    };
    /* Clears datasource after adding to viewer
       Called in viewer.component */
    CesiumGeomService.prototype.clearDataSource = function () {
        this.dataSource = null;
    };
    /* Suspend and resume tracking of datasource so that it doesn't update while adding entities
       Called by CityGMLservice and CityJSONservice when new file is loaded and completely generated respectively */
    CesiumGeomService.prototype.suspendDataSource = function () {
        this.dataSource.entities.suspendEvents();
    };
    CesiumGeomService.prototype.resumeDataSource = function () {
        this.dataSource.entities.resumeEvents();
    };
    /* Gets id arrays and counter
       Called by cityjson.component for filters */
    CesiumGeomService.prototype.getIds = function () {
        // return this.srftype_ids;
        return this.parent_ids;
    };
    CesiumGeomService.prototype.getCount = function () {
        // return this.srftype_count;
        return this.total_count;
    };
    CesiumGeomService.prototype.getPropIds = function () {
        return this.prop_ids;
    };
    /* Add ID of parent entity to a list and update polygon count
       - for looping through in filters because only parent entities have properties and control visibility (no need to look at children)
       Params: Surface type of element
               id of entity
               number of polygons in entity*/
    CesiumGeomService.prototype.addId = function (id, count) {
        this.parent_ids.push(id);
        this.total_count += count;
    };
    /* Add key:value pairs (property_name : [property_value]) to prop_ids
       If key already exists, adds property value to array (string), replace min/max value if applicable (number)
       if property value already exists under same key, nothing is added
       - for selection dropdown boxes in filters
       Params: Object containing key:value pairs of properties*/
    CesiumGeomService.prototype.addPropId = function (props) {
        var cats = Object.keys(props);
        for (var _i = 0, cats_1 = cats; _i < cats_1.length; _i++) {
            var x = cats_1[_i];
            var ids = Object.keys(props[x]);
            for (var _a = 0, ids_1 = ids; _a < ids_1.length; _a++) {
                var i = ids_1[_a];
                // Prop type is number:
                // if PropId doesn't exist in array, add pair
                if (typeof props[i] === "number") {
                    if (this.prop_ids[i] === undefined) {
                        this.prop_ids[i] = [props[x][i], props[x][i]];
                    }
                    else {
                        if (props[x][i] < this.prop_ids[x][i][0]) {
                            this.prop_ids[i][0] = props[x][i];
                        }
                        else if (props[x][i] > this.prop_ids[i][1]) {
                            this.prop_ids[i][1] = props[x][i];
                        }
                    }
                }
                else {
                    if (this.prop_ids[i] === undefined) {
                        this.prop_ids[i] = [props[x][i]];
                    }
                    else {
                        if (this.prop_ids[i].includes(props[x][i]) === false) {
                            this.prop_ids[i].push(props[x][i]);
                        }
                    }
                }
            }
        }
    };
    /* Creates and returns a color property that is linked to a time interval (from year 1000 to 3000)
       - allows color changes to update more quickly (than static color property)
       Params: Color Property (Static)
       Returns: Color Property (TimeInterval) */
    CesiumGeomService.prototype.timeIntervalColor = function (color) {
        var property = new Cesium.TimeIntervalCollectionProperty(Cesium.Color);
        var timeInterval = new Cesium.TimeInterval({
            start: Cesium.JulianDate.fromDate(new Date(1000, 1, 1, 1)),
            stop: Cesium.JulianDate.fromDate(new Date(3000, 1, 1, 1)),
            isStartIncluded: true,
            isStopIncluded: false,
            data: color
        });
        property.intervals.addInterval(timeInterval);
        return new Cesium.ColorMaterialProperty(property);
    };
    /* Calculates and returns the max diff between list of values
       - finds the smallest and largest values
       - for determining axis and horizontal
       Params: Array of numbers
       Returns: Max difference between all input values */
    CesiumGeomService.prototype.maxDiff = function (values) {
        var maxval = values[0];
        var minval = values[0];
        for (var i = 1; i < values.length; i++) {
            if (values[i] > maxval) {
                maxval = values[i];
            }
            if (values[i] < minval) {
                minval = values[i];
            }
        }
        return (maxval - minval);
    };
    /* Determines axis/plane to use for earcut triangulation (takes the one with larger difference in coordinates)
       Params: Array of points (eg. [[0,0,0],[0,1,0],[0,1,1],[0,0,0]])
       Returns: 0 for xz plane, 1 for yz plane
       Uses: - maxDiff */
    CesiumGeomService.prototype.determineAxis = function (points) {
        // split coords and determine plane
        var x = [];
        var y = [];
        points.forEach(function (coords) {
            x.push(coords[0]);
            y.push(coords[1]);
        });
        if (this.maxDiff(x) > this.maxDiff(y)) {
            // x axis seems to be wider, use xz axis
            return 0;
        }
        else {
            // y axis seems to be wider, use yz axis
            return 1;
        }
    };
    /* Checks if a polygon is horizontal or not by the max difference in z coordinates
       Params: Array of points (eg. [[0,0,0],[0,1,0],[0,1,1],[0,0,0]])
       Returns: true if horizontal, false if not horizontal
       Uses: - maxDiff*/
    CesiumGeomService.prototype.checkHorizontal = function (ring) {
        var z = [];
        ring.forEach(function (coords) {
            z.push(coords[2]);
        });
        if (this.maxDiff(z) < 0.001) {
            return true;
        }
        else {
            return false;
        }
    };
    /* Creates and returns a flat list of coordinates from an array of points
       Params: Array of points (eg. [[0,0,0],[0,1,0],[0,1,1],[0,0,0]])
       Returns: Flat array of coordinates (eg. [0,0,0,0,1,0,0,1,1,0,0,0]) */
    CesiumGeomService.prototype.flatCoords = function (ring) {
        var flat = [];
        ring.forEach(function (point) {
            flat.push.apply(flat, point);
        });
        return flat;
    };
    /* Determines and returns the color property for a polygon based on its surface type
       Params: Surface type
       Returns: Color Property (Static)
       Uses: - timeIntervalColor */
    CesiumGeomService.prototype.determineColor = function (surface_type) {
        var colour = undefined;
        if (surface_type === "WallSurface") {
            colour = this.timeIntervalColor(Cesium.Color.SILVER);
        }
        else if (surface_type === "RoofSurface") {
            colour = this.timeIntervalColor(Cesium.Color.RED);
        }
        else if (surface_type === "Window") {
            colour = this.timeIntervalColor(Cesium.Color.LIGHTBLUE.withAlpha(0.5));
        }
        else if (surface_type === "Door") {
            colour = this.timeIntervalColor(Cesium.Color.TAN);
        }
        else {
            colour = this.timeIntervalColor(Cesium.Color.WHITE);
        }
        return colour;
    };
    /* Adds a polygon entity to the datasource (sets color and parent)
       Params: Array of array of points (first array is outer ring, subsequent arrays are holes)
               Colour property (Static/TimeInterval)
               Parent entity
       Uses: - flatCoords */
    CesiumGeomService.prototype.addCesiumPoly = function (polygon, color, parent) {
        // Create polygon heirarchy
        var ext = Cesium.Cartesian3.fromDegreesArrayHeights(this.flatCoords(polygon[0]));
        var p_hierarchy = new Cesium.PolygonHierarchy(ext);
        if (polygon.length > 0) {
            var int = [];
            for (var i = 1; i < polygon.length; i++) {
                int.push(new Cesium.PolygonHierarchy(Cesium.Cartesian3.fromDegreesArrayHeights(this.flatCoords(polygon[i]))));
            }
            p_hierarchy = new Cesium.PolygonHierarchy(ext, int);
        }
        // Create polygon
        var poly = this.dataSource.entities.add({
            parent: parent,
            polygon: {
                hierarchy: p_hierarchy,
                perPositionHeight: true,
                material: color,
                outline: false,
            },
        });
    };
    /* Triangulates polygon and adds a group of polygons to datsource
       Params: Array of array of points (first array is outer ring, subsequent arrays are holes)
               Colour property (Static/TimeInterval)
               Parent entity
       Uses: - determineAxis
             - earcut
             - addCesiumPoly */
    CesiumGeomService.prototype.addTriPoly = function (polygon, colour, parent) {
        // Determine if triangulation should be done on XZ or YZ plane (if X or Y axis have a larger range of values)
        // 0 for XZ, 1 for YZ
        var axis = this.determineAxis(polygon[0]);
        var other_axis = 0;
        if (axis === 0) {
            other_axis = 1;
        }
        // Get points from respective axes and put into earcut format
        var poly_vertices = [];
        var holes = [];
        var other_coords = [];
        var count = 0;
        for (var i = 0; i < polygon.length; i++) {
            polygon[i].forEach(function (coords) {
                poly_vertices.push(coords[axis], coords[2]);
                other_coords.push(coords[other_axis]);
                count++;
            });
            if (i !== (polygon.length - 1)) {
                holes.push(count);
            }
        }
        // Throw into earcut
        var tri_index = __WEBPACK_IMPORTED_MODULE_1_earcut__(poly_vertices, holes);
        // Create polys in Cesium
        for (var p = 0; p < tri_index.length; p = p + 3) {
            var points = [];
            //Get coordinates for each point
            for (var j = p; j < (p + 3); j++) {
                var i = tri_index[j];
                var coord = [undefined, undefined, undefined];
                coord[other_axis] = other_coords[i];
                coord[axis] = poly_vertices[i * 2];
                coord[2] = poly_vertices[(i * 2) + 1];
                points.push(coord);
            }
            this.addCesiumPoly([points], colour, parent);
        }
    };
    ////////////////////////// Main functions, TODO: better structure management ///////////////////////////
    // creates a parent entity containing all the entities that make up a multipolygon (called for JSON)
    CesiumGeomService.prototype.genMultiPoly = function (polygon, colour, properties) {
        // Create parent to hold polygon
        var parent = this.dataSource.entities.add(new Cesium.Entity());
        var CScolour = undefined;
        if (colour !== undefined) {
            CScolour = this.timeIntervalColor(colour);
        }
        else {
            CScolour = this.determineColor(properties["Surface Properties"]["Surface_Type"]);
        }
        // If horizontal use Cesium Polygon Entity API directly
        if (this.checkHorizontal(polygon[0]) === true) {
            this.addCesiumPoly(polygon, CScolour, parent);
        }
        else {
            this.addTriPoly(polygon, CScolour, parent);
        }
        // Add properties and add entity ID to respective group for filter
        parent.properties = new Cesium.PropertyBag(properties);
        this.addId(parent.id, parent._children.length);
        this.addPropId(properties);
    };
    // creates parent entities containing all the entities that make up each surface in a solid (called for JSON)
    CesiumGeomService.prototype.genSolid = function (solid, colour, surface_type, properties) {
        for (var i = 0; i < solid.length; i++) {
            // Create parent to hold polygons
            var parent_1 = this.dataSource.entities.add(new Cesium.Entity());
            var polygon = solid[i];
            var CScolour = undefined;
            if (colour[i] !== undefined) {
                CScolour = this.timeIntervalColor(colour[i]);
            }
            else {
                CScolour = this.determineColor(surface_type[i]);
            }
            // Edit properties
            properties["Surface Properties"].Surface_Type = surface_type[i];
            // If horizontal use Cesium Polygon Entity API directly
            if (this.checkHorizontal(polygon[0]) === true) {
                this.addCesiumPoly(polygon, CScolour, parent_1);
            }
            else {
                this.addTriPoly(polygon, CScolour, parent_1);
            }
            // Add properties and add entity ID to respective group for filter
            parent_1.properties = new Cesium.PropertyBag(properties);
            this.addId(parent_1.id, parent_1._children.length);
            this.addPropId(properties);
        }
    };
    // creates a parent entity containing all the entities that make up an element (eg. 1 wall) (called for GML)
    CesiumGeomService.prototype.genSolidGrouped = function (solid, colour, properties, srftype) {
        // Create parent to hold polygons
        var parent = this.dataSource.entities.add(new Cesium.Entity());
        var CScolour = undefined;
        if (colour !== undefined) {
            CScolour = this.timeIntervalColor(colour);
        }
        else {
            CScolour = this.determineColor(srftype);
        }
        for (var i = 0; i < solid.length; i++) {
            var polygon = solid[i];
            // If horizontal use Cesium Polygon Entity API directly
            if (this.checkHorizontal(polygon[0]) === true) {
                this.addCesiumPoly(polygon, CScolour, parent);
            }
            else {
                this.addTriPoly(polygon, CScolour, parent);
            }
        }
        // Add properties and add entity ID to respective group for filter
        parent.properties = new Cesium.PropertyBag(properties);
        this.addId(parent.id, parent._children.length);
        this.addPropId(properties);
    };
    CesiumGeomService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])()
    ], CesiumGeomService);
    return CesiumGeomService;
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
        // //convert json to ViData(editor version) to store every thing in setting
        // public getValue(model: JSON) {
        //   if(model !== undefined) {
        //     let propertyName = Object.keys(model["features"][0].properties);
        //     let feature_instance = model["features"][0];
        //     let _HeightKeys = propertyName.filter(function(prop_name) {
        //       const value =  feature_instance.properties[prop_name];
        //       return (typeof(value) === "number");
        //     });
        //     if(model["features"].length > 1){
        //       for(let i = 1 ;i<model["features"].length;i++){
        //         for(let properties of Object.keys(model["features"][i].properties)){
        //           if(propertyName.indexOf(String(properties))<0){
        //             propertyName.push(properties);
        //             if(typeof(model["features"][i].properties[properties]) === "number"){
        //               _HeightKeys.push(properties);
        //             }
        //           }
        //         }
        //       }
        //     }
        //     propertyName.sort();
        //     propertyName.unshift("None");
        //     const propertyNames = propertyName.filter(function(value) { 
        //       return value != 'TYPE'&& value != 'COLOR'&& value != 'HEIGHT'&&value != 'EXTRUDEDHEIGHT'
        //     });
        //     const _ColorValue = propertyNames[0];
        //     const _HeightKey = _HeightKeys.filter(function(value) { 
        //       return value != 'TYPE'&& value != 'COLOR'&& value != 'HEIGHT'&&value != 'EXTRUDEDHEIGHT'
        //     });
        //     _HeightKey.sort();
        //     _HeightKey.unshift("None");
        //     const _HeightValue = _HeightKey[0];
        //     const promise = this.cesiumpromise;
        //     const _Heighttexts: any[] = [];
        //     const _Colortexts: any[] = [];
        //     const _indexArr: number[] = [];
        //     const self = this;
        //     promise.then(function(dataSource) {
        //       const entities = dataSource.entities.values;
        //       for (const entity of entities) {
        //         if(entity.properties["TYPE"] === undefined||entity.properties["TYPE"]._value !== "STATIC"){
        //           if(entity.properties[_HeightValue] !== undefined) {
        //             if(entity.properties[_HeightValue]._value !== " ") {
        //               if(_Heighttexts.length === 0) {_Heighttexts[0]=entity.properties[_HeightValue]._value;
        //               } else { if(_Heighttexts.indexOf(entity.properties[_HeightValue]._value) === -1) {
        //                _Heighttexts.push(entity.properties[_HeightValue]._value);}
        //               }
        //             }
        //           }
        //           if(entity.properties[_ColorValue] !== undefined) {
        //             if(entity.properties[_ColorValue]._value !== " ") {
        //               if(_Colortexts.length === 0) {_Colortexts[0] = entity.properties[_ColorValue]._value;
        //               } else { if(_Colortexts.indexOf(entity.properties[_ColorValue]._value) === -1) {
        //                 _Colortexts.push(entity.properties[_ColorValue]._value);}
        //               }
        //             }
        //           }
        //           _indexArr.push(entities.indexOf(entity));
        //         } else {
        //           entity.polygon.height =  entity.properties["HEIGHT"];
        //           entity.polygon.extrudedHeight = entity.properties["EXTRUDEDHEIGHT"];
        //           const ColorValue = entity.properties["COLOR"]._value;
        //           entity.polygon.material = Cesium.Color.fromBytes(ColorValue[0], ColorValue[1], ColorValue[2], ColorValue[3]);
        //         }
        //         if(entity.polygon !== undefined) {
        //             entity.polygon.outlineColor = Cesium.Color.Black;
        //         }
        //         if(entity.billboard !== undefined) {
        //           entity.billboard = undefined;
        //           entity.point = new Cesium.PointGraphics({
        //             color: Cesium.Color.BLUE,
        //             pixelSize: 10,
        //           });
        //         }
        //       }
        //     });
        //     const _MinColor = Math.min.apply(Math, _Colortexts);
        //     const _MaxColor = Math.max.apply(Math, _Colortexts);
        //     const _MinHeight = Math.min.apply(Math, _Heighttexts);
        //     const _MaxHeight = Math.max.apply(Math, _Heighttexts);
        //     const _Filter: any[] = [];
        //     const _HideNum: any[] = [];
        //     this.getViData(propertyNames,_Colortexts.sort(),_ColorValue,_MinColor,_MaxColor,false,
        //                    _HeightKey,_Heighttexts.sort(),_HeightValue,_MinHeight,_MaxHeight,1,
        //                    false,false,_Filter,_HideNum,_indexArr);
        //   }
        // }
        // //get ViData(editor version)
        // public get_ViData(): object {
        //   return this._ViData;
        // }
        // //set ViData(editor version)
        // public set_ViData(_ViData): void {
        //   this._ViData = _ViData;
        // }
        // //convert geojson to PuData(publish version)
        // public LoadJSONData() {
        //   if(this._jsonModel !== undefined&&this._jsonModel["cesium"] !== undefined) {
        //     const cesiumData = this._jsonModel["cesium"];
        //     let _ColorDescr: string;
        //     let _ColorValue: string;
        //     let _MinColor: number;
        //     let _MaxColor: number;
        //     let _ColorInvert: boolean;
        //     let _HeightDescr: string;
        //     const _HeightKey: any[] = [];
        //     let _HeightValue: string;
        //     let _MinHeight: number;
        //     let _MaxHeight: number;
        //     let _HeightInvert: boolean;
        //     let _HeightScale: number;
        //     let _HeightLine: boolean;
        //     let _filters: any[];
        //     const _ceisumData: any[] = [];
        //     const _propertyNames: any[] = [];
        //     const _HideNum: any[] = [];
        //     const _indexArr: number[] = [];
        //     if(cesiumData["colour"] !== undefined) {
        //       if(cesiumData["colour"]["descr"] !== undefined) {
        //         _ColorDescr = cesiumData["colour"]["descr"];
        //       }
        //       if(cesiumData["colour"]["attribs"] !== undefined) {
        //         for(const data of cesiumData["colour"]["attribs"]) {
        //           _propertyNames.push(data["name"]);
        //         }
        //         _ColorValue = _propertyNames[0];
        //         _MinColor = cesiumData["colour"]["attribs"][0]["min"];
        //         _MaxColor = cesiumData["colour"]["attribs"][0]["max"];
        //         if(cesiumData["colour"]["attribs"][0]["invert"] === true) {_ColorInvert = true;} else {_ColorInvert = false;}
        //       }
        //     }
        //     if(cesiumData["extrude"] !== undefined) {
        //       if(cesiumData["extrude"]["descr"] !== undefined) {
        //         _HeightDescr = cesiumData["extrude"]["descr"];
        //       }
        //       if(cesiumData["extrude"]["attribs"] !== undefined) {
        //         for(const data of cesiumData["extrude"]["attribs"]) {
        //           _HeightKey.push(data["name"]);
        //         }
        //         _HeightValue = _HeightKey[0];
        //         _MinHeight = cesiumData["extrude"]["attribs"][0]["min"];
        //         _MaxHeight = cesiumData["extrude"]["attribs"][0]["max"];
        //         if(cesiumData["extrude"]["attribs"][0]["invert"] === true) {
        //           _HeightInvert = true;} else {_HeightInvert = false;}
        //         if(cesiumData["extrude"]["attribs"][0]["line"] === true) {_HeightLine = true;} else {_HeightLine = false;}
        //         if(cesiumData["extrude"]["attribs"][0]["scale"] !== undefined) {
        //           _HeightScale = cesiumData["extrude"]["attribs"][0]["scale"];
        //         } else {_HeightScale = 1;}
        //       }
        //     }
        //     const promise = this.cesiumpromise;
        //     const _Heighttexts = [];
        //     const _Colortexts = [];
        //     const self = this;
        //     promise.then(function(dataSource) {
        //       const entities = dataSource.entities.values;
        //       for (const entity of entities) {
        //         if(entity.properties[_HeightValue] !== undefined) {
        //           if(entity.properties[_HeightValue]._value !== " ") {
        //             if(_Heighttexts.length === 0) {_Heighttexts[0] = entity.properties[_HeightValue]._value;
        //             } else { if(_Heighttexts.indexOf(entity.properties[_HeightValue]._value) === -1) {
        //               _Heighttexts.push(entity.properties[_HeightValue]._value);}
        //             }
        //           }
        //         }
        //         if(entity.properties[_ColorValue] !== undefined) {
        //           if(entity.properties[_ColorValue]._value !== " ") {
        //             if(_Colortexts.length === 0) {_Colortexts[0] = entity.properties[_ColorValue]._value;
        //             } else { if(_Colortexts.indexOf(entity.properties[_ColorValue]._value) === -1) {
        //               _Colortexts.push(entity.properties[_ColorValue]._value);}
        //             }
        //           }
        //         }
        //         if(entity.polygon !== undefined) {
        //           entity.polygon.outlineColor = Cesium.Color.Black;
        //         }
        //         if(entity.billboard !== undefined) {
        //           entity.billboard = undefined;
        //           entity.point = new Cesium.PointGraphics({
        //             color: Cesium.Color.BLUE,
        //             pixelSize: 10,
        //           });
        //         }
        //         _indexArr.push(entities.indexOf(entity));
        //       }
        //     });
        //     if(cesiumData["filters"] !== undefined) {
        //       _filters = cesiumData["filters"];
        //       let lastnumber: string;
        //       this._Filter = [];
        //       this._HideNum = [];
        //       if(_filters !== undefined&&_filters.length !== 0) {
        //         for(const _filter of _filters) {
        //           if(this._HideNum.length === 0) {
        //             this._HideNum[0] = "0";
        //             lastnumber = this._HideNum[0];
        //           } else {
        //             for(let j = 0;j < this._HideNum.length + 1;j++) {
        //               if(this._HideNum.indexOf(String(j)) === -1) {
        //                 this._HideNum.push(String(j));
        //                 lastnumber = String(j);
        //                 break;
        //               }
        //             }
        //           }
        //           if(_filter["name"] !== undefined) {
        //             const _propertyname = _filter["name"];
        //             const _relation = Number(_filter["relation"]);
        //             const _text = _filter["value"];
        //             const _descr = _filter["descr"];
        //             let _HideType: string;
        //             let _texts: any[];
        //             if(typeof(_text) === "number") {
        //               _HideType = "number";
        //               _texts = this.Initial(_propertyname);
        //             } else if(typeof(_text) === "string") {
        //               _HideType = "category";
        //               _texts = this.Initial(_propertyname);
        //               _texts = ["None"].concat(_texts);
        //             }
        //             this._Filter.push({ divid:String("addHide".concat(String(lastnumber))),id: lastnumber,
        //                                 HeightHide:_propertyname,type:_HideType,Category:_texts,
        //                                 CategaryHide:_text,descr:_descr,RelaHide:_relation,
        //                                 textHide: _text,HideMax:Math.ceil(Math.max.apply(Math, _texts)),
        //                                 HideMin:Math.floor(Math.min.apply(Math, _texts)*100)/100,Disabletext:null});
        //           }
        //         }
        //       }
        //     } else {this._Filter = [];this._HideNum = [];}
        //     this.getPuData(_ColorDescr,_propertyNames,_Colortexts.sort(),_ColorValue,_MinColor,_MaxColor,_ColorInvert,
        //                       _HeightDescr,_HeightKey,_Heighttexts.sort(),_HeightValue,_MinHeight,_MaxHeight,
        //                       _HeightScale,_HeightInvert,_HeightLine,this._Filter,this._HideNum,_indexArr);
        //   }
        // }
        // //get text for the certain property
        // public  Initial(_HideValue: string): any[] {
        //   const texts=[];
        //   const promise = this.getcesiumpromise();
        //   const self = this;
        //   promise.then(function(dataSource) {
        //     const entities = dataSource.entities.values;
        //     for (const entity of entities) {
        //       if(entity.properties[_HideValue] !== undefined) {
        //         if(entity.properties[_HideValue]._value !== " ") {
        //           if(texts.length === 0) {texts[0] = entity.properties[_HideValue]._value;
        //           } else { if(texts.indexOf(entity.properties[_HideValue]._value) === -1) {
        //             texts.push(entity.properties[_HideValue]._value);}
        //           }
        //         }
        //       }
        //     }
        //   });
        //   return texts;
        // }
        // //get PuData
        // public get_PuData(): object {
        //   return this._PuData;
        // }
        // //set PuData
        // public set_PuData(_PuData): void {
        //   this._PuData = _PuData;
        // }
        // //create object of ViData
        // public getViData(_ColorProperty: any[],_ColorText: any[],_ColorKey: string,
        //                  _ColorMin: number,_ColorMax: number,_ColorInvert: boolean,
        //                  _ExtrudeProperty: any[],_ExtrudeText: any[],_ExturdeValue: string,
        //                  _ExtrudeMin: number,_ExtrudeMax: number,_Scale: number,_Invert: boolean,
        //                  _HeightChart: boolean,_Filter: any[],_HideNum: number[],_indexArr: number[]) {
        //   this._ViData = {ColorProperty:_ColorProperty,ColorText:_ColorText,ColorKey:_ColorKey,
        //                   ColorMin:_ColorMin,ColorMax:_ColorMax,ColorInvert:_ColorInvert,
        //                   ExtrudeProperty:_ExtrudeProperty,ExtrudeText:_ExtrudeText,ExtrudeKey:_ExturdeValue,
        //                   ExtrudeMin:_ExtrudeMin,ExtrudeMax:_ExtrudeMax,Scale:_Scale,Invert:_Invert,
        //                   HeightChart:_HeightChart,Filter:_Filter,HideNum:_HideNum,indexArr:_indexArr};
        // }
        // //create object of PuData
        // public getPuData(_ColorDescr: string,_ColorProperty: any[],_ColorText: any[],_ColorKey: string,
        //                  _ColorMin: number,_ColorMax: number,_ColorInvert: boolean,
        //                  _ExtrudeDescr: string,_ExtrudeProperty: any[],_ExtrudeText: any[],
        //                  _ExturdeValue: string,_ExtrudeMin: number,_ExtrudeMax: number,_Scale: number,_Invert: boolean,
        //                  _HeightChart: boolean,_Filter: any[],_HideNum: number[],_indexArr: number[]) {
        //   this._PuData = {ColorDescr:_ColorDescr,ColorProperty:_ColorProperty,ColorText:_ColorText,
        //                   ColorKey:_ColorKey,ColorMin:_ColorMin,ColorMax:_ColorMax,ColorInvert:_ColorInvert,
        //                   ExtrudeDescr:_ExtrudeDescr,ExtrudeProperty:_ExtrudeProperty,ExtrudeText:_ExtrudeText,
        //                   ExtrudeKey:_ExturdeValue,ExtrudeMin:_ExtrudeMin,ExtrudeMax:_ExtrudeMax,
        //                   Scale:_Scale,Invert:_Invert,HeightChart:_HeightChart,Filter:_Filter,HideNum:_HideNum,indexArr:_indexArr};
        // }
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
    DataService.prototype.readRules = function () {
        this.rules = new Promise(function (resolve) {
            var val = "";
            var xhttp = new XMLHttpRequest();
            xhttp.onload = function () {
                if (xhttp.readyState === 4 && xhttp.status === 200) {
                    val = JSON.parse(xhttp.responseText);
                    resolve(val);
                }
            };
            xhttp.open("GET", "./assets/rules/testnames1.json", true);
            xhttp.send();
        });
        var self = this;
        this.rules.then(function (file) {
            self.rules = file;
        });
    };
    DataService.prototype.getRules = function () {
        return this.rules;
    };
    //get geojson
    DataService.prototype.getGsModel = function () {
        return this._jsonModel;
    };
    //set mode 
    DataService.prototype.setMode = function (mode) {
        this.mode = mode;
    };
    //set new json file
    DataService.prototype.setGsModel = function (model) {
        delete this._jsonModel;
        var json = this._jsonModel;
        this._jsonModel = model;
        if (this._jsonModel !== undefined) {
            this.clearAll();
        }
        this.sendMessage("model_update");
    };
    //before loading geojson, clear all for last geojson
    DataService.prototype.clearAll = function () {
        // delete this.hideElementArr;
        // delete this._HideNum;
        // delete this._ViData;
        // delete this._PuData;
        delete this._index;
        delete this._Filter;
    };
    //get viewer
    DataService.prototype.getViewer = function () {
        return this.viewer;
    };
    //set viewer
    DataService.prototype.setViewer = function (_viewer) {
        this.viewer = _viewer;
    };
    //get selected entity
    DataService.prototype.get_SelectedEntity = function () {
        return this._SelectedEntity;
    };
    //set selected entity
    DataService.prototype.set_SelectedEntity = function (_SelectedEntity) {
        this._SelectedEntity = _SelectedEntity;
    };
    //get promise
    DataService.prototype.getcesiumpromise = function () {
        return this.cesiumpromise;
    };
    //set promise
    DataService.prototype.setcesiumpromise = function (cesiumpromise) {
        delete this.cesiumpromise;
        this.cesiumpromise = cesiumpromise;
    };
    // // get filter array
    // public gethideElementArr(): any {
    //   return this.hideElementArr;
    // }
    // //get filter number
    // public get_HideNum(): any[] {
    //   return this._HideNum;
    // }
    //get mode
    DataService.prototype.getmode = function () {
        return this.mode;
    };
    //get index after changing select, data, display, publish
    DataService.prototype.get_index = function () {
        return this._index;
    };
    //set index after changing select, data, display, publish
    DataService.prototype.set_index = function (_index) {
        this._index = _index;
    };
    //set sun true/false in Display
    DataService.prototype.set_Sun = function (_Sun) {
        this._Sun = _Sun;
    };
    //get sun true/false in Display
    DataService.prototype.get_Sun = function () {
        return this._Sun;
    };
    //set shadow true/false in Display
    DataService.prototype.set_Shadow = function (_Shadow) {
        this._Shadow = _Shadow;
    };
    //get shadow true/false in Display
    DataService.prototype.get_Shadow = function () {
        return this._Shadow;
    };
    //set date in Display
    DataService.prototype.set_Date = function (_Date) {
        this._Date = _Date;
    };
    //get date in Display
    DataService.prototype.get_Date = function () {
        return this._Date;
    };
    //set UTC in Display
    DataService.prototype.set_UTC = function (_UTC) {
        this._UTC = _UTC;
    };
    //get UTC in Display
    DataService.prototype.get_UTC = function () {
        return this._UTC;
    };
    //set imagery in Display
    DataService.prototype.set_Imagery = function (_Imagery) {
        this._Imagery = _Imagery;
    };
    //get imagery in Display
    DataService.prototype.get_Imagery = function () {
        return this._Imagery;
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])()
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/mobius-cesium/data/readCityGML.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityGMLService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_proj4__ = __webpack_require__("./node_modules/proj4/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cesiumGeom_service__ = __webpack_require__("./src/app/mobius-cesium/data/cesiumGeom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__("./src/app/mobius-cesium/data/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CityGMLService = /** @class */ (function () {
    function CityGMLService(cesiumGeomService, dataService) {
        this.cesiumGeomService = cesiumGeomService;
        this.dataService = dataService;
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    CityGMLService.prototype.sendMessage = function (message) {
        this.subject.next({ text: message });
    };
    CityGMLService.prototype.clearMessage = function () {
        this.subject.next();
    };
    CityGMLService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    /* Reads and sets EPSG value for Proj4 projection
       - looks up epsg.io if EPSG code is found
       - defaults to EPSG:3414 if undefined
  
       ** TODO: reads crs from citymodel envelope, need to confirm if this is intended behaviour */
    CityGMLService.prototype.setEPSG = function (crs) {
        this.epsg = new Promise(function (resolve) {
            var val = "";
            if (crs === undefined) {
                // if undefined, default is EPSG 3414 sweats (WGS84 causes our models to go crazy, with EPSG 3414 they at least show up)
                val = "+proj=tmerc +lat_0=1.366666666666667 +lon_0=103.8333333333333 +k=1 +x_0=28001.642 +y_0=38744.572 +ellps=WGS84 +units=m +no_defs";
                resolve(val);
            }
            else {
                // search EPSG.io
                var url = "https://epsg.io/" + crs + ".proj4";
                var xhttp_1 = new XMLHttpRequest();
                xhttp_1.onload = function () {
                    if (xhttp_1.readyState === 4 && xhttp_1.status === 200) {
                        val = xhttp_1.responseText;
                        if (val === undefined) {
                            val = "+proj=tmerc +lat_0=1.366666666666667 +lon_0=103.8333333333333 +k=1 +x_0=28001.642 +y_0=38744.572 +ellps=WGS84 +units=m +no_defs";
                        }
                        resolve(val);
                    }
                };
                xhttp_1.open("GET", url, true);
                xhttp_1.send();
            }
        });
    };
    CityGMLService.prototype.clearEPSG = function () {
        this.epsg = undefined;
    };
    /* Projects input point to WGS84
       Params: Array of coordinates for 1 point as obtained from file
       Returns: Array of coordinates for point in WGS84 + height
  
       ** TODO: SG's height datum? */
    CityGMLService.prototype.projectPtsToWGS84 = function (coords) {
        var projcoords = Object(__WEBPACK_IMPORTED_MODULE_2_proj4__["a" /* default */])(this.epsg, "WGS84", [coords[0], coords[1]]);
        var newcoords = [(projcoords[0]), (projcoords[1]), (coords[2])];
        if (this.epsg === "+proj=tmerc +lat_0=1.366666666666667 +lon_0=103.8333333333333 +k=1 +x_0=28001.642 +y_0=38744.572 +ellps=WGS84 +units=m +no_defs") {
            // newcoords[2] -= 104;
        }
        return newcoords;
    };
    /* Generates surfaces from an element as a group
       - Obtains coordinates and properties for all "Triangle" and "Polygon" surfaces in the element
       - Calls cesiumGeomService to generate entities
       Params: XML node for an element that contains surfaces to generate (eg. WallSurface / Room)
               Name of node (to be used as surface type for properties)
       Uses: - nextElement
             - getCoords
             - cesiumGeomService.genSolidGrouped */
    CityGMLService.prototype.genPoly = function (srf, props, srf_type) {
        while (srf !== null && srf.nodeName.split(":")[1] !== "surfaceMember") {
            srf = this.nextElement(srf.firstChild);
        }
        var solid = [];
        // loop through all surfaces in element
        while (srf !== null) {
            // get first Triangle or Polygon (depends on what the CityGML is using)
            var firstSrf = srf;
            while (firstSrf !== null && (firstSrf.nodeName.split(":")[1] !== "Triangle") && (firstSrf.nodeName.split(":")[1] !== "Polygon")) {
                firstSrf = this.nextElement(firstSrf.firstChild);
            }
            if (firstSrf === null) {
                srf = this.nextElement(srf.nextSibling);
                break;
            }
            // if Triangle, step into first child (exterior linear ring) and get coords
            // loop through all other triangles in surface
            if (firstSrf.nodeName.split(":")[1] === "Triangle") {
                while (firstSrf !== null) {
                    var poly = this.nextElement(firstSrf.firstChild);
                    solid.push(this.getCoords(poly));
                    firstSrf = this.nextElement(firstSrf.nextSibling);
                }
            }
            else if (firstSrf.nodeName.split(":")[1] === "Polygon") {
                firstSrf = this.nextElement(firstSrf.firstChild);
                solid.push(this.getCoords(firstSrf));
            }
            // extract and convert all coordinates for surface and push to solid
            srf = this.nextElement(srf.nextSibling);
        }
        // console.log(solid);
        this.cesiumGeomService.genSolidGrouped(solid, undefined, props, srf_type);
    };
    /* Obtains and prepares coordinates from the linear rings that make up ONE Triangle or Polygon
       - Also handles holes in polygons
       - First linear ring is exterior ring, subsequent are holes
       - Coordinates should be in "pos" or "posList" with dimension "3"
       Params: XML node for an element that contains coordinates
       Returns: Array of linear rings (eg. [ [[0,0,0],[0,0,1],[0,1,1],[0,0,0]] , [[0,0.2,0.2],[0,0.2,0.8],[0,0.8,0.8],[0,0.2,0.2]])
       Uses: - nextElement
             - projectPtsToWGS84 */
    CityGMLService.prototype.getCoords = function (node) {
        var polygon = [];
        var dimension;
        var coordinates;
        var coordsplit;
        // Loop through Linear rings
        while (node !== null) {
            // get coordinates
            var coords = this.nextElement(node.firstChild);
            while ((coords.nodeName.split(":")[1] !== "LinearRing")) {
                coords = this.nextElement(coords.firstChild);
            }
            coords = this.nextElement(coords.firstChild);
            // if positions are in posList, split and project to wgs84 in threes, then push to polygon
            if (coords.nodeName.split(":")[1] === "posList") {
                // get dimension if present, else default to "3"
                if (coords.getAttribute("srsDimension") !== null) {
                    dimension = coords.getAttribute("srsDimension");
                }
                else {
                    dimension = "3";
                }
                coordinates = coords.textContent;
                // replace linebreaks with spaces if any
                coordinates = coordinates.replace(/\n/g, " ");
                // split coordinates by " ", convert to number from string and project to wgs84
                coordsplit = coordinates.split(" ");
                var coord_arr = [];
                if (dimension === "3") {
                    for (var i = 0; i < coordsplit.length; i = i + 3) {
                        var arr = this.projectPtsToWGS84([(Number(coordsplit[i])), (Number(coordsplit[i + 1])), (Number(coordsplit[i + 2]))]);
                        coord_arr.push(arr);
                    }
                }
                // else if (dimension === "2") {
                //   for (let i = 0 ; i < coordsplit.length ; i = i + 2) {
                //     const arr = this.projectPtsToWGS84([(Number(coordsplit[i])),(Number(coordsplit[i+1])),0]);
                //     coord_arr.push(arr);
                //   }
                // }
                polygon.push(coord_arr);
                // if positions are in pos, loop through, split and project each one to wgs84, then push to polygon
            }
            else if (coords.nodeName.split(":")[1] === "pos") {
                var coord_arr = [];
                while (coords !== null) {
                    coordinates = coords.textContent;
                    // split coordinates by " ", convert to number from string and project to wgs84
                    coordsplit = coordinates.split(" ");
                    var arr = this.projectPtsToWGS84([(Number(coordsplit[0])), (Number(coordsplit[1])), (Number(coordsplit[2]))]);
                    coord_arr.push(arr);
                    coords = this.nextElement(coords.nextSibling);
                }
                polygon.push(coord_arr);
            }
            node = this.nextElement(node.nextSibling);
        }
        return polygon;
    };
    /* Finds the next sibling node that is an element
       Params: XML node to check
       Returns: XML node for next element if found, null if not found */
    CityGMLService.prototype.nextElement = function (node) {
        // if node is null, return null.
        if (node === null) {
            return null;
        }
        // Loops through siblings untill an element is found
        // If siblings end up returning null, return null.
        while (node.nodeType !== 1) {
            node = node.nextSibling;
            if (node === null) {
                return null;
            }
        }
        return node;
    };
    /* Gets the name of the given node, excluding namespace prefix if any
       Params: XML node to get name of
       Returns: Name of node without prefix */
    CityGMLService.prototype.getName = function (node) {
        var split = node.nodeName.split(":");
        var nodename = split[split.length - 1];
        return nodename;
    };
    // Checks the cityModel and extracts EPSG if any and excludes appearanceMember
    CityGMLService.prototype.checkCityModel = function (node) {
        var nodes = [];
        var citymodel_props = {};
        var citymodel_ade = {};
        while (node !== null) {
            var nodename = this.getName(node);
            // extract name
            if (nodename === "name") {
                var name_1 = node.textContent;
                citymodel_props[nodename] = name_1;
            }
            else if (nodename === "boundedBy") {
                // extract crs
                var envelope = this.nextElement(node.firstChild);
                if (envelope != null) {
                    citymodel_props["srsName"] = envelope.getAttribute("srsName");
                    var srs = void 0;
                    srs = (envelope.getAttribute("srsName")).split(",");
                    srs = srs[1].split(":");
                    var epsg = srs[srs.length - 1];
                    this.setEPSG(epsg);
                }
                // extract pos - TODO
            }
            else if (nodename === "cityObjectMember" ||
                nodename === "featureMember") {
                nodes.push(this.nextElement(node.firstChild));
            }
            else if (nodename === "appearanceMember") { }
            else {
                this.addProperties(node, citymodel_ade);
            }
            node = this.nextElement(node.nextSibling);
        }
        // console.log(nodes,citymodel_props,citymodel_ade);
        return [nodes, { "cityModel properties": citymodel_props, "cityModel ADE properties": citymodel_ade }];
    };
    /* Checks each node in input array against arrays of node names (this.rules).
       Updates properties and performs additional checks or generates geometry according to rules
       Params: Array of nodes to check
               Object containing properties objects accumulated so far
  
        *** RECURSIVE *** */
    CityGMLService.prototype.check = function (nodes, props) {
        var match = false;
        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
            var node = nodes_1[_i];
            // create new variables
            var check_nodes = [];
            var gen_nodes = [];
            var new_props = [];
            var new_ade = [];
            var node_name = this.getName(node);
            var sibling_name = node_name;
            if (node_name === "Building") {
                this.objCount = {};
            }
            if (node_name === "Building" ||
                node_name === "BuildingPart" ||
                node_name === "Storey") {
                this.addObjCount(node_name);
                new_props[node_name] = this.objCount[node_name];
            }
            node = this.nextElement(node.firstChild);
            while (node !== null) {
                match = false;
                // update sibling_name
                sibling_name = this.getName(node);
                // check
                var action_arr = this.rules[sibling_name];
                // console.log(sibling_name, action_arr);
                if (action_arr !== undefined) {
                    for (var _a = 0, action_arr_1 = action_arr; _a < action_arr_1.length; _a++) {
                        var action = action_arr_1[_a];
                        if (action === "check") {
                            var child = this.nextElement(node.firstChild);
                            if (child !== null) {
                                check_nodes.push(child);
                            }
                            match = true;
                        }
                        if (action === "prop") {
                            this.addProperties(node, new_props);
                            match = true;
                        }
                        if (action === "geom") {
                            var child = this.nextElement(node.firstChild);
                            if (child !== null) {
                                new_props["Surface_Type"] = node_name;
                                gen_nodes.push(child);
                            }
                            match = true;
                        }
                        if (match === false) {
                            if (action === "skip") {
                                match = true;
                            }
                        }
                    }
                }
                // ADE
                if (match === false) {
                    this.addProperties(node, new_ade);
                }
                node = this.nextElement(node.nextSibling);
            }
            // duplicate props and add properties from current node
            var updated_props = Object.assign({}, props);
            var add_props = {};
            add_props[node_name + " properties"] = new_props;
            add_props[node_name + " ADE properties"] = new_ade;
            updated_props = Object.assign(updated_props, add_props);
            // check and gengeom
            if (check_nodes.length > 0) {
                this.check(check_nodes, updated_props);
            }
            if (gen_nodes.length > 0) {
                for (var _b = 0, gen_nodes_1 = gen_nodes; _b < gen_nodes_1.length; _b++) {
                    var srf = gen_nodes_1[_b];
                    ;
                    this.genPoly(srf, updated_props, node_name);
                }
            }
        }
    };
    /* Adds all leaf nodes of specified node as key:value pair in specified properties object
       Params: Node to check and add to properties
               Object to add key:value pairs to (alters input)
  
       *** RECURSIVE *** */
    CityGMLService.prototype.addProperties = function (node, prop) {
        if (node === null) {
            return;
        }
        var name = this.getName(node);
        if (node.innerHTML === node.textContent) {
            prop[name] = node.textContent;
        }
        var child = this.nextElement(node.firstChild);
        while (child !== null) {
            this.addProperties(child, prop);
            child = this.nextElement(child.nextSibling);
        }
    };
    /* Updates counter for cityObjectMember/featureMember/Building/BuildingPart
       - adds new counter if not already present
       Params: name of counter to update (cityObjectMember/featureMember/Building/BuildingPart)*/
    CityGMLService.prototype.addObjCount = function (prop) {
        // if prop doesn't exist, add it
        if (this.objCount[prop] === undefined) {
            this.objCount[prop] = 0;
        }
        else {
            this.objCount[prop]++;
        }
    };
    /* Main function to read file and return datasource containing generated entities
       - Initialises, retrieves and clears data from cesiumGeomService
       Called in viewer.component LoadData
       Params: CityGML file
       Returns: Cesium datasource containing entities generated from input file */
    CityGMLService.prototype.genGeom = function (file) {
        var data = undefined;
        if (file !== undefined) {
            // Initialise dataSource and surface type ID arrays
            this.cesiumGeomService.initialiseCesium();
            this.objCount = {};
            this.currProps = {};
            this.rules = this.dataService.getRules();
            // this.rules = {
            //               "check": ["consistsOfBuildingPart","buildingSubdivision","outerBuildingInstallation","boundedBy","boundary","interiorRoom","opening"],
            //               "property": ["name","creationDate","externalReference","function","measuredHeight","address"],
            //               "geom": ["lod2MultiSurface","lod3MultiSurface","lod4MultiSurface","lod1Geometry","lod2Geometry","lod3Geometry","lod4Geometry","lod1Solid"],
            //               "skip": []
            //             };
            // Get properties of CityModel
            var member = this.nextElement(this.nextElement(file.firstChild).firstChild);
            var nodes_2 = this.checkCityModel(member);
            if (this.epsg === undefined) {
                this.setEPSG(undefined);
            }
            var context_1 = this;
            data = this.epsg.then(function (epsg) {
                context_1.epsg = epsg;
                context_1.check(nodes_2[0], nodes_2[1]);
                context_1.cesiumGeomService.resumeDataSource();
                context_1.clearEPSG();
                return context_1.cesiumGeomService.getDataSource();
            });
        }
        return data;
    };
    CityGMLService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__cesiumGeom_service__["a" /* CesiumGeomService */], __WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */]])
    ], CityGMLService);
    return CityGMLService;
}());



/***/ }),

/***/ "./src/app/mobius-cesium/data/readCityJSON.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityJSONService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_proj4__ = __webpack_require__("./node_modules/proj4/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cesiumGeom_service__ = __webpack_require__("./src/app/mobius-cesium/data/cesiumGeom.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CityJSONService = /** @class */ (function () {
    function CityJSONService(cesiumGeomService) {
        this.cesiumGeomService = cesiumGeomService;
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    CityJSONService.prototype.sendMessage = function (message) {
        this.subject.next({ text: message });
    };
    CityJSONService.prototype.clearMessage = function () {
        this.subject.next();
    };
    CityJSONService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    /* Clears stored data after file has been completely generated */
    CityJSONService.prototype.clearData = function () {
        this.file = undefined;
        this.epsg = undefined;
        this.vertices = undefined;
        this.materials = undefined;
        this.templates = undefined;
        this.template_vertices = undefined;
        this.scale = undefined;
        this.translate = undefined;
    };
    /* Reads and sets EPSG value for Proj4 projection
       - looks up epsg.io if EPSG code is found
       - defaults to EPSG:3414 if undefined*/
    CityJSONService.prototype.setEPSG = function () {
        var meta = this.file["metadata"];
        this.epsg = new Promise(function (resolve) {
            var val = "";
            if (meta["crs"] === undefined || meta["crs"]["epsg"] === undefined) {
                // if undefined, default is EPSG 3414 sweats (WGS84 causes our models to go crazy, with EPSG 3414 they at least show up)
                val = "+proj=tmerc +lat_0=1.366666666666667 +lon_0=103.8333333333333 +k=1 +x_0=28001.642 +y_0=38744.572 +ellps=WGS84 +units=m +no_defs";
                resolve(val);
            }
            else {
                // search EPSG.io
                var url = "https://epsg.io/" + meta["crs"]["epsg"] + ".proj4";
                var xhttp_1 = new XMLHttpRequest();
                xhttp_1.onload = function () {
                    if (xhttp_1.readyState === 4 && xhttp_1.status === 200) {
                        val = xhttp_1.responseText;
                        if (val === undefined) {
                            val = "+proj=tmerc +lat_0=1.366666666666667 +lon_0=103.8333333333333 +k=1 +x_0=28001.642 +y_0=38744.572 +ellps=WGS84 +units=m +no_defs";
                        }
                        resolve(val);
                    }
                };
                xhttp_1.open("GET", url, true);
                xhttp_1.send();
            }
        });
    };
    /* Reads and sets shared vertices for regular geometry (not geometry templates) */
    CityJSONService.prototype.setVertices = function () {
        if (this.file["vertices"] !== undefined) {
            this.vertices = this.file["vertices"];
        }
    };
    /* Reads and converts materials into cesium color properties */
    CityJSONService.prototype.setMaterials = function () {
        var materials = [];
        if (this.file["appearance"] === undefined || this.file["appearance"]["materials"] == undefined) {
            this.materials = undefined;
        }
        else {
            this.file["appearance"]["materials"].forEach(function (mat) {
                var color = mat["diffuseColor"];
                color.push(mat["transparency"]);
                materials.push(new ((_a = Cesium.Color).bind.apply(_a, [void 0].concat(color)))());
                var _a;
            });
            this.materials = materials;
        }
    };
    /* Reads and sets geometry templates and shared vertices (geometry templates) */
    CityJSONService.prototype.setTemplates = function () {
        if (this.file["geometry-templates"] === undefined) {
            this.templates = undefined;
        }
        else {
            var templates_1 = [];
            if (this.file["geometry-templates"]["templates"] !== undefined) {
                this.file["geometry-templates"]["templates"].forEach(function (temp) {
                    if (temp.lod < 3) {
                        templates_1.push(undefined);
                    }
                    else {
                        templates_1.push(temp);
                    }
                });
            }
            if (this.file["geometry-templates"]["vertices-templates"] !== undefined) {
                this.template_vertices = this.file["geometry-templates"]["vertices-templates"];
            }
            this.templates = templates_1;
        }
    };
    /* Reads and sets translation and scale for transformaing model from compressed values */
    CityJSONService.prototype.setTransform = function () {
        if (this.file["transform"] !== undefined) {
            this.scale = this.file["transform"].scale;
            this.translate = this.file["transform"].translate;
        }
        else {
            this.scale = undefined;
            this.translate = undefined;
        }
    };
    /* Projects input point to WGS84
       Params: Array of coordinates for 1 point as obtained from file
       Returns: Array of coordinates for point in WGS84 + height */
    CityJSONService.prototype.projectPtsToWGS84 = function (coords) {
        var projcoords = Object(__WEBPACK_IMPORTED_MODULE_2_proj4__["a" /* default */])(this.epsg, "WGS84", [coords[0], coords[1]]);
        var newcoords = [projcoords[0], projcoords[1], coords[2]];
        return newcoords;
    };
    /* Transformaing template point from local coords to coords in model
       Params: Array of coordinates for 1 point as obtained from geometry template
       Returns: Array of coordinates for point in intended position in model */
    CityJSONService.prototype.transformTemplate = function (coord, transform) {
        var pt = Cesium.Cartesian3.fromArray(coord);
        var t = Cesium.Matrix4.multiplyByPoint(transform.temp_matrix, pt, new Cesium.Cartesian3());
        var coord2 = [(t["x"] + transform.refpt[0]), (t["y"] + transform.refpt[1]), (t["z"] + transform.refpt[2])];
        return coord2;
    };
    /* Transformaing point from compressed values to intended values
       Params: Array of coordinates for 1 point as obtained from file
       Returns: Array of coordinates for point in intended position in model before compression */
    CityJSONService.prototype.transformCityJSON = function (coord) {
        var pt = [undefined, undefined, undefined];
        pt[0] = (coord[0] * this.scale[0]) + this.translate[0];
        pt[1] = (coord[1] * this.scale[1]) + this.translate[1];
        pt[2] = (coord[2] * this.scale[2]) + this.translate[2];
        return pt;
    };
    /* Main function to read file and return datasource containing generated entities
       - Initialises, retrieves and clears data from cesiumGeomService
       Called in viewer.component LoadData
       Params: CityJSON file
       Returns: Cesium datasource containing entities generated from input file */
    CityJSONService.prototype.genGeom = function (file) {
        var data = undefined;
        if (file !== undefined) {
            this.file = file;
            file = null;
            if (this.file["metadata"] !== undefined) {
                this.setEPSG();
                this.setVertices();
                this.setMaterials();
                this.setTemplates();
                this.setTransform();
                // Initialise dataSource and surface type ID arrays
                this.cesiumGeomService.initialiseCesium();
                var context_1 = this;
                data = this.epsg.then(function (epsg) {
                    context_1.epsg = epsg;
                    context_1.readFile();
                    context_1.clearData();
                    context_1.cesiumGeomService.resumeDataSource();
                    return context_1.cesiumGeomService.getDataSource();
                });
            }
        }
        return data;
    };
    /* Reads file and calls cesiumGeomService
       - obtains and prepares coordinates and properties
       - passes data to cesiumGeomService to generate entities */
    CityJSONService.prototype.readFile = function () {
        var _this = this;
        // Loop through CityObjects
        var city_object_keys = Object.keys(this.file["CityObjects"]);
        var city_object = this.file["CityObjects"];
        this.file = undefined;
        var _loop_1 = function (obj_index) {
            var obj = city_object[city_object_keys[obj_index]];
            // Get object type if type is BuildingPart or BuildingInstallation, skip because we'll reference it from a building.
            var cityobj_type = obj.type;
            if (cityobj_type === "BuildingPart" || cityobj_type === "BuildingInstallation") {
                return "continue";
            }
            // Get object attributes
            var cityobj_attrib = obj.attributes;
            // Get object parts & installations
            var cityobj_parts_ID = [];
            if (obj.Parts !== undefined) {
                cityobj_parts_ID.push.apply(cityobj_parts_ID, obj.Parts);
            }
            if (obj.Installations !== undefined) {
                cityobj_parts_ID.push.apply(cityobj_parts_ID, obj.Installations);
            }
            var cityobj_parts_geom = [];
            var cityobj_parts_attrib = [];
            var cityobj_parts_type = [];
            if (cityobj_parts_ID !== undefined) {
                cityobj_parts_ID.forEach(function (ID) {
                    cityobj_parts_geom.push.apply(cityobj_parts_geom, city_object[ID].geometry);
                    cityobj_parts_attrib.push(city_object[ID].attributes);
                    cityobj_parts_type.push(city_object[ID].type);
                });
            }
            var all_geom = obj.geometry.concat(cityobj_parts_geom);
            var parts_start = obj.geometry.length;
            var parts_index = 0;
            var _loop_2 = function (geom_index) {
                var geom = all_geom[geom_index];
                if (geom == undefined) {
                    return "continue";
                }
                // Check LOD
                var lod = geom.lod;
                // if (lod !== undefined && lod < 3) {
                //   continue;
                // }
                // Set values to use for polygon generation
                //   vertex_arr: array of vertices in the file to refer to (vertices or template_vertices)
                //   boundaries: array of vertex position indexes to refer to (boundaries from geometry or template)
                //   transfrom: object containing transformation matrix (temp_matrix) and reference point (refpt) of the geometry instance
                var vertex_arr = this_1.vertices;
                var boundaries = geom.boundaries;
                var transform = { temp_matrix: undefined, refpt: undefined };
                // Check geometry type
                var geom_type = geom.type;
                if (geom_type === "GeometryInstance") {
                    if (this_1.templates[geom.template] !== undefined) {
                        vertex_arr = this_1.template_vertices;
                        boundaries = this_1.templates[geom.template].boundaries;
                        geom_type = this_1.templates[geom.template].type;
                        lod = this_1.templates[geom.template].lod;
                        transform.temp_matrix = Cesium.Matrix4.fromArray(geom.transformationMatrix);
                        transform.refpt = this_1.vertices[geom.boundaries[0]];
                    }
                }
                if (boundaries === undefined) {
                    return "continue";
                }
                // Pull out array of semantics values & surfaces
                var values = void 0;
                var surfaces;
                if (geom["semantics"] !== undefined) {
                    values = geom["semantics"]["values"];
                    surfaces = geom["semantics"]["surfaces"];
                }
                // Pull out materials values
                var mats = void 0;
                if (geom["material"] !== undefined) {
                    mats = geom["material"][""]["values"];
                }
                var _loop_3 = function (srf_index) {
                    if (boundaries[srf_index][0] === undefined) {
                        return "continue";
                    }
                    // Extract surface type and materials
                    var surface_type = ["None"];
                    var colour = [];
                    if (geom_type === "MultiSurface") {
                        if (values !== undefined && values[srf_index] !== null && values[srf_index] !== undefined) {
                            surface_type = [(surfaces[values[srf_index]]["type"])];
                        }
                        if (mats !== undefined) {
                            colour.push(this_1.materials[mats[srf_index]]);
                        }
                    }
                    else if (geom_type === "Solid") {
                        surface_type = [];
                        if (values !== undefined && values[srf_index] !== null && values[srf_index] !== undefined) {
                            values[srf_index].forEach(function (value) {
                                surface_type.push(surfaces[value]["type"]);
                            });
                        }
                        if (mats !== undefined) {
                            mats[srf_index].forEach(function (value) {
                                colour.push(_this.materials[value]);
                            });
                        }
                    }
                    // Create property bag (with parent information if obj is building part)
                    var props = { "Surface Properties": { Object_ID: city_object_keys[obj_index],
                            Object_Type: cityobj_type,
                            Geom_Type: geom_type,
                            Surface_Type: surface_type[0],
                            LOD: lod
                        },
                        "Parent Properties": { Parent_ID: "None",
                            Parent_Type: "None" }
                    };
                    if (geom_index >= parts_start) {
                        props["Surface Properties"].Object_ID = cityobj_parts_ID[parts_index];
                        props["Surface Properties"].Object_Type = cityobj_parts_type[parts_index];
                        props["Parent Properties"].Parent_ID = city_object_keys[obj_index];
                        props["Parent Properties"].Parent_Type = cityobj_type;
                    }
                    if (props["Surface Properties"].Surface_Type === undefined) {
                        props["Surface Properties"].Surface_Type = "None";
                    }
                    // Add attributes from parent to properties
                    if (cityobj_attrib !== undefined) {
                        Object.keys(cityobj_attrib).forEach(function (name) {
                            props["Parent Properties"][name] = cityobj_attrib[name];
                        });
                    }
                    // Add attributes from parent to properties
                    if (cityobj_parts_attrib[parts_index] !== undefined) {
                        Object.keys(cityobj_parts_attrib[parts_index]).forEach(function (name) {
                            props["Parent Properties"][name] = cityobj_parts_attrib[parts_index][name];
                        });
                    }
                    ///////////////////////////////// Geom Generation, TODO: better geom_type management //////////////////////////////////////
                    ///////// MULTISURFACE
                    if (geom_type === "MultiSurface") {
                        // polygon: nested array of coordinates that make up a polygon.
                        // polygon[0] contains the points for the outer ring.
                        // polygon[1]... contain the points for the holes.
                        var polygon_1 = [];
                        boundaries[srf_index].forEach(function (ring) {
                            var ringpts = [];
                            ring.forEach(function (ID) {
                                var coord = vertex_arr[ID];
                                // if object is a geometry instance, multiply by transformation matrix and add reference point
                                if (transform.refpt !== undefined) {
                                    coord = _this.transformTemplate(coord, transform);
                                }
                                // transform coordinates if transform specification exists in file
                                if (_this.scale !== undefined) {
                                    coord = _this.transformCityJSON(coord);
                                }
                                // project to wgs84
                                coord = _this.projectPtsToWGS84(coord);
                                ringpts.push(coord);
                            });
                            polygon_1.push(ringpts);
                        });
                        // create polygon in Cesium
                        this_1.cesiumGeomService.genMultiPoly(polygon_1, colour[0], props);
                        // i++ 
                    }
                    else if (geom_type === "Solid") {
                        var solid_1 = [];
                        boundaries[srf_index].forEach(function (shell) {
                            var polygon = [];
                            shell.forEach(function (ring) {
                                var ringpts = [];
                                ring.forEach(function (ID) {
                                    var coord = vertex_arr[ID];
                                    // if object is a geometry instance, multiply by transformation matrix and add reference point
                                    if (transform.refpt !== undefined) {
                                        coord = _this.transformTemplate(coord, transform);
                                    }
                                    // transform coordinates if transform specification exists in file
                                    if (_this.scale !== undefined) {
                                        coord = _this.transformCityJSON(coord);
                                    }
                                    // project to wgs84
                                    coord = _this.projectPtsToWGS84(coord);
                                    ringpts.push(coord);
                                });
                                polygon.push(ringpts);
                            });
                            solid_1.push(polygon);
                        });
                        // create solid in cesium
                        this_1.cesiumGeomService.genSolid(solid_1, colour, surface_type, props);
                    }
                };
                // // Loop through surfaces
                for (var srf_index = 0; srf_index < boundaries.length; srf_index++) {
                    _loop_3(srf_index);
                }
            };
            // Loop through geometry (typically used for different LOD but not necessarily, may contain multiple)
            for (var geom_index = all_geom.length - 1; geom_index >= 0; geom_index--) {
                _loop_2(geom_index);
            }
            if (parts_index >= parts_start) {
                parts_index++;
            }
        };
        var this_1 = this;
        for (var obj_index = city_object_keys.length - 1; obj_index >= 0; obj_index--) {
            _loop_1(obj_index);
        }
    };
    CityJSONService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__cesiumGeom_service__["a" /* CesiumGeomService */]])
    ], CityJSONService);
    return CityJSONService;
}());



/***/ }),

/***/ "./src/app/mobius-cesium/mobius-cesium.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"mobiuscesium\" style=\"height: 100%\">\r\n\t<cesium-viewer></cesium-viewer>\r\n\t<div id=\"Toggle\" (click)=\"toggleSlider()\" ><span style=\"vertical-align: middle;\">▹</span></div>\r\n\t<div id=\"slide-nav\"  [@slide_in_out]=\"slider_state\" style=\"position: absolute;z-index: 101;top:0px;height: 100%\">\r\n  \t\t<app-setting ></app-setting>\r\n\t</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/mobius-cesium.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\");\n@font-face {\n  font-family: \"FontAwesome\"; }\n.font-awesome-hand {\n  font-family: FontAwesome; }\n.font-awesome-hand::after {\n  font-family: FontAwesome; }\n#mobiuscesium {\n  height: 101%;\n  font-family: sans-serif !important;\n  margin: 0px !important;\n  padding: 0px !important;\n  font-size: 14px; }\n#button {\n  position: absolute;\n  z-index: 99; }\n#Toggle {\n  position: absolute;\n  top: calc(50% - 30px);\n  z-index: 200;\n  width: 30px;\n  height: 70px;\n  border-top: 1px solid gray;\n  border-right: 1px solid gray;\n  border-bottom: 1px solid gray;\n  background-color: rgba(20, 20, 20, 0.5);\n  color: #ddd;\n  text-align: center;\n  font-size: 32px;\n  line-height: 70px;\n  cursor: pointer; }\n"

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
        //create slider to switch setting
        this.slider_state = "slide_out";
    }
    ;
    //pass data to dataService
    MobiuscesiumComponent.prototype.setModel = function (data) {
        try {
            this.dataService.setGsModel(data);
        }
        catch (ex) {
            this.data = undefined;
        }
    };
    //pass data to dataService
    MobiuscesiumComponent.prototype.ngOnInit = function () {
        this.setModel(this.data);
        this.dataService.setMode(this.mode);
    };
    MobiuscesiumComponent.prototype.ngDoCheck = function () {
        if (this.dataService.getGsModel() !== this.data) {
            this.setModel(this.data);
        }
    };
    MobiuscesiumComponent.prototype.toggleSlider = function () {
        // do something to change the animation_state variable
        this.slider_state = this.slider_state === "slide_out" ? "slide_in" : "slide_out";
        var toggle = document.getElementById("Toggle");
        if (this.slider_state === "slide_out") {
            toggle.style.left = "0px";
            toggle.innerHTML = "▹";
        }
        else if (this.slider_state === "slide_in") {
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
            selector: "mobius-cesium",
            template: __webpack_require__("./src/app/mobius-cesium/mobius-cesium.component.html"),
            styles: [__webpack_require__("./src/app/mobius-cesium/mobius-cesium.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])("slide_in_out", [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])("slide_in", Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        width: "280px",
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])("slide_out", Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        width: "0px"
                        // css styles when the element is in slide_out
                    })),
                    // animation effect when transitioning from one state to another
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])("slide_in <=> slide_out", Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(300))
                ]),
            ],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_readCityJSON_service__ = __webpack_require__("./src/app/mobius-cesium/data/readCityJSON.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_readCityGML_service__ = __webpack_require__("./src/app/mobius-cesium/data/readCityGML.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_cesiumGeom_service__ = __webpack_require__("./src/app/mobius-cesium/data/cesiumGeom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_split__ = __webpack_require__("./node_modules/angular-split/esm5/angular-split.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_tabs__ = __webpack_require__("./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_tooltip__ = __webpack_require__("./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_slider__ = __webpack_require__("./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__setting_setting_component__ = __webpack_require__("./src/app/mobius-cesium/setting/setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__setting_visualise_component__ = __webpack_require__("./src/app/mobius-cesium/setting/visualise.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__setting_attributes_component__ = __webpack_require__("./src/app/mobius-cesium/setting/attributes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__setting_publish_component__ = __webpack_require__("./src/app/mobius-cesium/setting/publish.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__setting_display_copmponent__ = __webpack_require__("./src/app/mobius-cesium/setting/display.copmponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__setting_filter_component__ = __webpack_require__("./src/app/mobius-cesium/setting/filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__setting_about_component__ = __webpack_require__("./src/app/mobius-cesium/setting/about.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_4__data_data_service__["a" /* DataService */],
            ],
        };
    };
    MobiusCesium = MobiusCesium_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular_split__["a" /* AngularSplitModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_tooltip__["a" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_slider__["a" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["a" /* FormsModule */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__mobius_cesium_component__["a" /* MobiuscesiumComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__mobius_cesium_component__["a" /* MobiuscesiumComponent */],
                __WEBPACK_IMPORTED_MODULE_3__viewer_viewer_component__["a" /* ViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_15__setting_setting_component__["a" /* SettingComponent */],
                __WEBPACK_IMPORTED_MODULE_16__setting_visualise_component__["a" /* DataComponent */],
                __WEBPACK_IMPORTED_MODULE_17__setting_attributes_component__["a" /* SelectComponent */],
                __WEBPACK_IMPORTED_MODULE_18__setting_publish_component__["a" /* PublishComponent */],
                __WEBPACK_IMPORTED_MODULE_19__setting_display_copmponent__["a" /* DisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_20__setting_filter_component__["a" /* FilterComponent */],
                __WEBPACK_IMPORTED_MODULE_21__setting_about_component__["a" /* AboutComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__data_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_5__data_readCityJSON_service__["a" /* CityJSONService */],
                __WEBPACK_IMPORTED_MODULE_6__data_readCityGML_service__["a" /* CityGMLService */],
                __WEBPACK_IMPORTED_MODULE_7__data_cesiumGeom_service__["a" /* CesiumGeomService */],
            ],
        })
    ], MobiusCesium);
    return MobiusCesium;
    var MobiusCesium_1;
}());



/***/ }),

/***/ "./src/app/mobius-cesium/setting/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"about\"  style=\"background-color: rgba(20,20,20,0.9);height: 100%;overflow-y:overlay;\"  >\r\n\tVersion 0.2.1\r\n</div>\r\n  "

/***/ }),

/***/ "./src/app/mobius-cesium/setting/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-about",
            template: __webpack_require__("./src/app/mobius-cesium/setting/about.component.html"),
            styles: [__webpack_require__("./src/app/mobius-cesium/setting/attributes.component.css")],
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/mobius-cesium/setting/attributes.component.css":
/***/ (function(module, exports) {

module.exports = "/deep/.mat-tab-label, /deep/.mat-tab-label-active{\r\n  min-width: 60px!important;\r\n  padding: 3px!important;\r\n  margin: 3px!important;\r\n  color:#D3D3D3 !important;\r\n  background-color: transparent !important;\r\n}\r\n/deep/.mat-tab-label{\r\n  height: 30px !important;\r\n  width: 60px !important;\r\n  background-color: transparent !important;\r\n}\r\n/deep/.mat-tab-labels{\r\n  background-color: rgba(20,20,20,0.9) !important;\r\n}\r\n/deep/.mat-tab-header{\r\n  width: 700px !important;\r\n}\r\n/deep/.mat-tab-header-pagination-controls-enabled{\r\n  display: none !important;\r\n}\r\n/deep/.mat-ink-bar{\r\n  background-color: #395d73 !important;\r\n}\r\n/deep/.mat-tab{\r\n  min-width: 30px !important;\r\n}\r\n/deep/.mat-tab-body-content{\r\n  overflow: hidden !important;\r\n}\r\n/deep/.mat-header{\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  margin-left: 0px;\r\n  color:#395d73;\r\n  border: 0;\r\n  height: 20px;\r\n  background-color: rgba(20,20,20,0.9) !important;\r\n}\r\n/deep/.mat-tab-body-wrapper{\r\n  height:100% !important;\r\n\r\n}\r\n/deep/split-gutter{\r\n  background-color:rgb(138, 168, 192) !important;\r\n}\r\n/deep/.mat-accent .mat-slider-thumb {\r\n    background-color: #8AA8C0 !important;\r\n    cursor: -webkit-grab;\r\n}\r\n/deep/.mat-slider-thumb{\r\n  width: 5px !important;\r\n  right: -5px !important;\r\n}\r\n/deep/.mat-slider-track-fill{\r\n  background-color: #F0BFA0 !important;\r\n}\r\n/deep/.mat-slider-thumb-label-text {\r\n    color: #395d73 !important;\r\n    font-size: 12px !important;\r\n}\r\n/deep/.mat-slider-thumb-label{\r\n    height: 15px !important;\r\n    width: 15px !important;\r\n    top: -20px !important;\r\n    right: -7px !important;\r\n    background-color: white !important;\r\n    border: 1px solid #395d73 !important;\r\n}\r\n/deep/.mat-slider-track-background{\r\n  background-color: #D3D3D3 !important;\r\n}\r\n.mat-slider{\r\n    width: 150px !important;\r\n}\r\n.cesium-button {\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  color: #D3D3D3;\r\n  fill: #8AA8C0;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  background: transparent;\r\n}\r\n.cesium-button-select{\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  fill: #8AA8C0;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  color: #D3D3D3;\r\n  background: transparent;\r\n}\r\n.cesium-option{\r\n  background-color: #F1F1F1;\r\n  /*opacity: 0.8;*/\r\n  color: #8AA8C0;\r\n  border: 1px solid #8AA8C0;\r\n}\r\nhr {\r\n  display: block;\r\n  height: 1px;\r\n  border: 0;\r\n  border-top: 1px solid #D3D3D3 !important;\r\n  padding: 0; \r\n  color:#D3D3D3 !important;\r\n  width: 100%;\r\n  background-color: #D3D3D3 !important;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/setting/attributes.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"AttribsView\"  style=\"background-color: rgba(20,20,20,0.9);height: 100%;overflow-y:overlay;\"  >\r\n\t<table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" *ngFor=\"let Category of keys\">\r\n\t  <tr >\r\n\t    <th style=\"font-size: 10px;font-weight: normal;width: 135px;\" colspan=\"2\"><div style=\"height:16px;background: #395D73;color:white;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;\">{{Category}}</div></th>\r\n\t  </tr>\r\n\t  <tr *ngFor=\"let Property of _Properties[Category]\">\r\n\t  \t<th style=\"font-size: 10px;font-weight: normal;color:#D3D3D3 ;width: 135px;height: 14px\"><div matTooltip={{Property.Name}} style=\"width: 135px;height:14px;text-align: left;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;\">{{Property.Name}}</div></th>\r\n\t    <th style=\"font-size: 10px;font-weight: normal;color:#D3D3D3 ;width: 135px;height: 14px\"><div matTooltip={{Property.Value}} style=\"width: 135px;height:14px;text-align: left;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;\">{{Property.Value}}</div></th>\r\n\t\t</tr>\r\n\t</table>\r\n</div>\r\n  "

/***/ }),

/***/ "./src/app/mobius-cesium/setting/attributes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectComponent; });
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


var SelectComponent = /** @class */ (function (_super) {
    __extends(SelectComponent, _super);
    function SelectComponent(injector, myElement) {
        return _super.call(this, injector) || this;
    }
    SelectComponent.prototype.ngOnInit = function () {
        // this.data = this.dataService.getGsModel();
        // this.mode = this.dataService.getmode();
        this.viewer = this.dataService.getViewer();
        // this.dataArr = this.dataService.get_ViData();
    };
    SelectComponent.prototype.notify = function (message) {
        if (message === "model_update") {
            // this.data = this.dataService.getGsModel();
            // this.mode = this.dataService.getmode();
            // this.dataArr = this.dataService.get_ViData();
        }
    };
    //check whether ID is changed or not and show in  Select tab
    SelectComponent.prototype.ngDoCheck = function () {
        if (this.viewer !== undefined && this.dataService.get_SelectedEntity() !== undefined) {
            var selected = this.dataService.get_SelectedEntity();
            if (this.ID !== selected._id) {
                var _Property = void 0;
                this.keys = [];
                this.ID = selected._id;
                this._Properties = {};
                var categories = selected.properties.propertyNames;
                for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
                    var categoryname = categories_1[_i];
                    if (categoryname !== "None") {
                        var propnames = Object.keys(selected.properties[categoryname]._value);
                        var categoryprops = [];
                        for (var _a = 0, propnames_1 = propnames; _a < propnames_1.length; _a++) {
                            var propname = propnames_1[_a];
                            _Property = {};
                            _Property.Name = propname;
                            _Property.Value = selected.properties[categoryname]._value[propname];
                            categoryprops.push(_Property);
                        }
                        if (categoryprops.length > 0) {
                            this.keys.push(categoryname);
                            this._Properties[categoryname] = categoryprops;
                        }
                    }
                }
                // console.log(this._Properties);
            }
        }
        else if (this.viewer !== undefined && this.dataService.get_SelectedEntity() === undefined) {
            this.ID = undefined;
            this.keys = [];
            this._Properties = [];
        }
    };
    SelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-select",
            template: __webpack_require__("./src/app/mobius-cesium/setting/attributes.component.html"),
            styles: [__webpack_require__("./src/app/mobius-cesium/setting/attributes.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], SelectComponent);
    return SelectComponent;
}(__WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__["a" /* DataSubscriber */]));



/***/ }),

/***/ "./src/app/mobius-cesium/setting/display.copmponent.css":
/***/ (function(module, exports) {

module.exports = "/*/deep/.mat-tab-label, /deep/.mat-tab-label-active{\r\n  min-width: 60px!important;\r\n  padding: 3px!important;\r\n  margin: 3px!important;\r\n  color:#D3D3D3 !important;\r\n  background-color: transparent !important;\r\n}\r\n/deep/.mat-tab-label{\r\n  height: 30px !important;\r\n  width: 60px !important;\r\n  background-color: transparent !important;\r\n}\r\n/deep/.mat-tab-labels{\r\n  background-color: rgba(20,20,20,0.9) !important;\r\n}\r\n/deep/.mat-tab-header{\r\n  width: 700px !important;\r\n}\r\n/deep/.mat-tab-header-pagination-controls-enabled{\r\n  display: none !important;\r\n}\r\n\r\n/deep/.mat-ink-bar{\r\n  background-color: #395d73 !important;\r\n}\r\n\r\n/deep/.mat-tab{\r\n  min-width: 30px !important;\r\n}\r\n/deep/.mat-tab-body-content{\r\n  overflow: hidden !important;\r\n}\r\n\r\n/deep/.mat-header{\r\n  flex-direction: row;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  margin-left: 0px;\r\n  color:#395d73;\r\n  border: 0;\r\n  height: 20px;\r\n  background-color: rgba(20,20,20,0.9) !important;\r\n}\r\n/deep/.mat-tab-body-wrapper{\r\n  height:100% !important;\r\n\r\n}\r\n\r\n\r\n/deep/split-gutter{\r\n  background-color:rgb(138, 168, 192) !important;\r\n}\r\n\r\n/deep/.mat-accent .mat-slider-thumb {\r\n    background-color: #8AA8C0 !important;\r\n    cursor: -webkit-grab;\r\n}\r\n/deep/.mat-slider-thumb{\r\n  width: 5px !important;\r\n  right: -5px !important;\r\n}\r\n\r\n/deep/.mat-slider-track-fill{\r\n  background-color: #F0BFA0 !important;\r\n}\r\n\r\n/deep/.mat-slider-thumb-label-text {\r\n    color: #395d73 !important;\r\n    font-size: 12px !important;\r\n}\r\n/deep/.mat-slider-thumb-label{\r\n    height: 15px !important;\r\n    width: 15px !important;\r\n    top: -20px !important;\r\n    right: -7px !important;\r\n    background-color: white !important;\r\n    border: 1px solid #395d73 !important;\r\n}\r\n/deep/.mat-slider-track-background{\r\n  background-color: #D3D3D3 !important;\r\n}\r\n.mat-slider{\r\n    width: 150px !important;\r\n}*/\r\n\r\n.cesium-button {\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  color: #D3D3D3;\r\n  fill: #8AA8C0;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  background: transparent;\r\n}\r\n\r\n.cesium-button-select{\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  fill: #8AA8C0;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  color: #D3D3D3;\r\n  background: transparent;\r\n}\r\n\r\n.cesium-option{\r\n  background-color: #F1F1F1;\r\n  /*opacity: 0.8;*/\r\n  color: #8AA8C0;\r\n  border: 1px solid #8AA8C0;\r\n}\r\n\r\nhr {\r\n  display: block;\r\n  height: 1px;\r\n  border: 0;\r\n  border-top: 1px solid #D3D3D3 !important;\r\n  padding: 0; \r\n  color:#D3D3D3 !important;\r\n  width: 100%;\r\n  background-color: #D3D3D3 !important;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/setting/display.copmponent.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"DisplayView\"  style=\"background-color: rgba(20,20,20,0.9);height: 100%;overflow-y:overlay;\"  >\r\n\t<table>\r\n      <tr>\r\n      <th class=\"colorkey\" style=\"width: 80px\"><div class=\"Hide\" style=\"width: 80px;color:#D3D3D3 !important;border:0;text-align: left;font-weight: normal;\">Imagery</div></th>\r\n      <th><div>\r\n        <select class=\"cesium-button\" (change)=\"onChangeImagery($event.target.value)\" [ngModel]=\"_Imagery\">\r\n          <option class=\"cesium-option\"  *ngFor=\"let Imagery of _ImageryList\" value={{Imagery}}>{{Imagery}}</option>\r\n        </select>\r\n      </div></th>\r\n      </tr>\r\n    </table>\r\n    <table>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Sun</div></th>\r\n      <th style=\"width:80px;height: 25px;\"><div style=\"width:80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\"><input type=\"checkbox\" [checked]=\"_Sun\" (click)=\"changeSun()\"></div></th></tr>\r\n    </table>\r\n    <table>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Shadows</div></th>\r\n      <th style=\"width:80px;height: 25px;\"><div style=\"width:80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\"><input type=\"checkbox\" [checked]=\"_Shadow\" (click)=\"changeShadow()\"></div></th></tr>\r\n    </table>\r\n    <table>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Date</div></th>\r\n      <th style=\"width:80px;height: 18px;\"><input type=\"text\"  value={{_Date}} style=\"width:80px;height: 18px;background:transparent;color:#D3D3D3;border:1px solid #8AA8C0;font-weight: normal;text-align: left\" (change)=\"changeDate($event.target.value,_UTC)\"></th></tr>  \r\n    </table>\r\n    <table>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">UTC</div></th>\r\n      <th style=\"width:80px;height: 18px;\"><input type=\"text\"  value={{_UTC}} style=\"width:80px;height: 18px;background:transparent;color:#D3D3D3;border:1px solid #8AA8C0;font-weight: normal;text-align: left\" (change)=\"changeDate(_Date,$event.target.value)\"></th></tr>  \r\n    </table>\r\n    \r\n</div>\r\n  "

/***/ }),

/***/ "./src/app/mobius-cesium/setting/display.copmponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayComponent; });
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


var DisplayComponent = /** @class */ (function (_super) {
    __extends(DisplayComponent, _super);
    function DisplayComponent(injector, myElement) {
        return _super.call(this, injector) || this;
    }
    DisplayComponent.prototype.ngOnInit = function () {
        this.data = this.dataService.getGsModel();
        this._ImageryList = ["Disable", "Stamen Toner", "Stamen Toner(Lite)", "Terrain(Standard)", "Terrain(Background)",
            "OpenStreetMap", "Earth at Night", "Natural Earth\u00a0II", "Blue Marble"];
        if (this._Imagery === undefined) {
            this._Imagery = this._ImageryList[0];
            this.onChangeImagery(this._Imagery);
        }
        else {
            this._Imagery = this.dataService.get_Imagery();
        }
        if (this._Sun === undefined) {
            this._Sun = false;
            this.dataService.set_Sun(this._Sun);
        }
        else {
            this._Sun = this.dataService.get_Sun();
        }
        if (this._Shadow === undefined) {
            this._Shadow = false;
            this.dataService.set_Shadow(this._Shadow);
        }
        else {
            this._Shadow = this.dataService.get_Shadow();
        }
        this._UTC = +8;
        this.dataService.set_UTC(this._UTC);
        if (this._Date === undefined) {
            var today = new Date();
            var year = today.getFullYear();
            var month = String(today.getMonth() + 1).padStart(2, "0");
            var day = String(today.getDate()).padStart(2, "0");
            this._Date = year + "-" + month + "-" + day;
        }
        else {
            this._Date = this.dataService.get_Date();
            this.changeDate(this._Date, this._UTC);
        }
        this.dataService.set_Date(this._Date);
    };
    DisplayComponent.prototype.notify = function (message) {
    };
    //chanage imagery in Display tab
    DisplayComponent.prototype.onChangeImagery = function (_Imagery) {
        this._Imagery = _Imagery;
        this.dataService.set_Imagery(_Imagery);
        var layers = this.dataService.getViewer().scene.imageryLayers;
        if (_Imagery === this._ImageryList[0]) {
            layers.removeAll();
            this.dataService.getViewer().scene.globe.baseColor = Cesium.Color.GRAY;
        }
        else if (_Imagery === this._ImageryList[1]) {
            layers.removeAll();
            var blackMarble = layers.addImageryProvider(Cesium.createOpenStreetMapImageryProvider({
                url: "https://stamen-tiles.a.ssl.fastly.net/toner/"
            }));
        }
        else if (_Imagery === this._ImageryList[2]) {
            layers.removeAll();
            var blackMarble = layers.addImageryProvider(Cesium.createOpenStreetMapImageryProvider({
                url: "https://stamen-tiles.a.ssl.fastly.net/toner-lite/"
            }));
        }
        else if (_Imagery === this._ImageryList[3]) {
            layers.removeAll();
            var blackMarble = layers.addImageryProvider(Cesium.createOpenStreetMapImageryProvider({
                url: "https://stamen-tiles.a.ssl.fastly.net/terrain/"
            }));
        }
        else if (_Imagery === this._ImageryList[4]) {
            layers.removeAll();
            var blackMarble = layers.addImageryProvider(Cesium.createOpenStreetMapImageryProvider({
                url: "https://stamen-tiles.a.ssl.fastly.net/terrain-background/"
            }));
        }
        else if (_Imagery === this._ImageryList[5]) {
            layers.removeAll();
            var blackMarble = layers.addImageryProvider(Cesium.createOpenStreetMapImageryProvider({
                url: "https://a.tile.openstreetmap.org/"
            }));
        }
        else if (_Imagery === this._ImageryList[6]) {
            layers.removeAll();
            var blackMarble = layers.addImageryProvider(new Cesium.IonImageryProvider({ assetId: 3812 }));
        }
        else if (_Imagery === this._ImageryList[7]) {
            layers.removeAll();
            var blackMarble = layers.addImageryProvider(Cesium.createTileMapServiceImageryProvider({
                url: Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII"),
            }));
        }
        else if (_Imagery === this._ImageryList[8]) {
            layers.removeAll();
            var blackMarble = layers.addImageryProvider(new Cesium.IonImageryProvider({ assetId: 3845 }));
        }
    };
    //change sun
    DisplayComponent.prototype.changeSun = function () {
        var viewer = this.dataService.getViewer();
        this._Sun = !this._Sun;
        if (this._Sun === true) {
            viewer.terrainShadows = Cesium.ShadowMode.ENABLED;
            viewer.scene.globe.enableLighting = true;
            viewer.scene.sun.show = true;
        }
        else {
            viewer.terrainShadows = undefined;
            viewer.scene.globe.enableLighting = false;
            viewer.scene.sun.show = false;
        }
        this.dataService.set_Sun(this._Sun);
    };
    //change shadow
    DisplayComponent.prototype.changeShadow = function () {
        this._Shadow = !this._Shadow;
        var promise = this.dataService.getcesiumpromise();
        if (this._Shadow === true) {
            promise.then(function (dataSource) {
                var entities = dataSource.entities.values;
                for (var _i = 0, entities_1 = entities; _i < entities_1.length; _i++) {
                    var entity = entities_1[_i];
                    if (entity.polygon !== undefined) {
                        entity.polygon.shadows = Cesium.ShadowMode.ENABLED;
                        console.log(entity);
                    }
                }
            });
        }
        else {
            promise.then(function (dataSource) {
                var entities = dataSource.entities.values;
                for (var _i = 0, entities_2 = entities; _i < entities_2.length; _i++) {
                    var entity = entities_2[_i];
                    if (entity.polygon !== undefined) {
                        entity.polygon.shadows = undefined;
                    }
                }
            });
        }
        this.dataService.set_Shadow(this._Shadow);
    };
    //change date
    DisplayComponent.prototype.changeDate = function (_Date, _UTC) {
        this._Date = _Date;
        this._UTC = _UTC;
        var viewer = this.dataService.getViewer();
        var now = new Cesium.JulianDate.fromIso8601(this._Date);
        var tomorrow = now.clone();
        tomorrow.dayNumber = tomorrow.dayNumber + 1;
        viewer.clock.currentTime = Cesium.JulianDate.addHours(now, this._UTC, now);
        viewer.clock.startTime = now.clone();
        viewer.clock.stopTime = tomorrow.clone();
        viewer.timeline.zoomTo(viewer.clock.startTime, viewer.clock.stopTime);
        this.dataService.set_Date(this._Date);
        this.dataService.set_UTC(this._UTC);
        viewer.timeline.updateFromClock();
    };
    DisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-display",
            template: __webpack_require__("./src/app/mobius-cesium/setting/display.copmponent.html"),
            styles: [__webpack_require__("./src/app/mobius-cesium/setting/display.copmponent.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], DisplayComponent);
    return DisplayComponent;
}(__WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__["a" /* DataSubscriber */]));



/***/ }),

/***/ "./src/app/mobius-cesium/setting/filter.component.css":
/***/ (function(module, exports) {

module.exports = "#CityJSONView{\r\n  position: relative;\r\n  padding:0px;\r\n  height: 100%;\r\n  width: 100%;\r\n  color:#D3D3D3 !important;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  font-size: 14px !important;\r\n  line-height: 14px;\r\n  overflow-x: hidden !important;\r\n  background-color: rgba(20,20,20,0.9);\r\n  overflow-y:overlay;\r\n}\r\n/deep/.mat-tab-label, /deep/.mat-tab-label-active{\r\n  min-width: 60px!important;\r\n  padding: 3px!important;\r\n  margin: 3px!important;\r\n  color:#D3D3D3 !important;\r\n  background-color: transparent !important;\r\n}\r\n/deep/.mat-tab-label{\r\n  height: 30px !important;\r\n  width: 60px !important;\r\n  background-color: transparent !important;\r\n}\r\n/deep/.mat-tab-labels{\r\n  background-color: rgba(20,20,20,0.9) !important;\r\n}\r\n/deep/.mat-tab-header{\r\n  width: 700px !important;\r\n}\r\n/deep/.mat-tab-header-pagination-controls-enabled{\r\n  display: none !important;\r\n}\r\n/deep/.mat-ink-bar{\r\n  background-color: #395d73 !important;\r\n}\r\n/deep/.mat-tab{\r\n  min-width: 30px !important;\r\n}\r\n/deep/.mat-tab-body-content{\r\n  overflow: hidden !important;\r\n}\r\n/deep/.mat-header{\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  margin-left: 0px;\r\n  color:#395d73;\r\n  border: 0;\r\n  height: 20px;\r\n  background-color: rgba(20,20,20,0.9) !important;\r\n}\r\n/deep/.mat-tab-body-wrapper{\r\n  height:100% !important;\r\n\r\n}\r\n/deep/split-gutter{\r\n  background-color:rgb(138, 168, 192) !important;\r\n}\r\n/deep/.mat-accent .mat-slider-thumb {\r\n    background-color: #8AA8C0 !important;\r\n    cursor: -webkit-grab;\r\n}\r\n/deep/.mat-slider-thumb{\r\n  width: 5px !important;\r\n  right: -5px !important;\r\n}\r\n/deep/.mat-slider-track-fill{\r\n  background-color: #F0BFA0 !important;\r\n}\r\n/deep/.mat-slider-thumb-label-text {\r\n    color: #8AA8C0 !important;\r\n    font-size: 12px !important;\r\n}\r\n/deep/.mat-slider-thumb-label{\r\n    height: 15px !important;\r\n    width: 15px !important;\r\n    top: -20px !important;\r\n    right: -7px !important;\r\n    background-color: white !important;\r\n    border: 1px solid #8AA8C0 !important;\r\n}\r\n/deep/.mat-slider-track-background{\r\n  background-color: #D3D3D3 !important;\r\n}\r\n.mat-slider{\r\n    width: 150px !important;\r\n}\r\n.cesium-button {\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  color: #D3D3D3;\r\n  fill: #8AA8C0;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  background: transparent;\r\n}\r\n.cesium-button-select{\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  fill: #8AA8C0;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  color: #D3D3D3;\r\n  background: transparent;\r\n}\r\n.cesium-option{\r\n  background-color: #F1F1F1;\r\n  /*opacity: 0.8;*/\r\n  color: #8AA8C0;\r\n  border: 1px solid #8AA8C0;\r\n}\r\nhr {\r\n  display: block;\r\n  height: 1px;\r\n  border: 0;\r\n  border-top: 1px solid #D3D3D3 !important;\r\n  padding: 0; \r\n  color:#D3D3D3 !important;\r\n  width: 100%;\r\n  background-color: #8AA8C0 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/setting/filter.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"CityJSONView\" >\r\n  <div class=\"filter-container\">\r\n    Show geometry with property:<br><br>\r\n    <div>\r\n      <table>\r\n        <tr><th class=\"addFilter\" style=\"width: 75px;height: 25px;\">\r\n            <input type=\"button\" value=\"Add Filter\" style=\"color:#D3D3D3;border:1px solid #8AA8C0;width: 75px;height: 25px;background-color: transparent;cursor:pointer;\" (click)=\"addFilter()\">\r\n        </th>\r\n        <th>\r\n          <select class=\"filter-button\" (change)=\"changeFilterSelect($event.target.value)\">\r\n            <option class=\"filter-option\"  *ngFor=\"let item of prop_keys\" value={{item}}>{{item}}</option>\r\n          </select>\r\n        </th></tr>\r\n      </table>\r\n    </div><br><br>\r\n    <div *ngFor=\"let item of filters;\" id={{item.id}}>\r\n      <table>\r\n        <tr>\r\n          <th style=\"width:85px;height: 20px;\">\r\n            <div style=\"width:85px;color:#D3D3D3 !important;text-align: left;vertical-align: middle;font-weight: normal;\">{{item.name}}</div>\r\n          </th>\r\n          <th *ngIf=\"item.type === 'number'\" style=\"width:40px;height: 22px;\">\r\n            <div style=\"width:40px;height: 22px;\">\r\n              <select class=\"cesium-button-select\" (change)=\"changeRelation(item.id,$event.target.value)\" style=\"width:40px;height: 22px;\"> <!-- [ngModel]=\"item.RelaHide\" --> \r\n                 <option class=\"cesium-option\" value=0>></option>\r\n                 <option class=\"cesium-option\" value=1><</option>\r\n                 <option class=\"cesium-option\" value=2>=</option>\r\n              </select>\r\n            </div>\r\n          </th>\r\n          <th *ngIf=\"item.type === 'string'\" style=\"width:40px;height: 22px;\">\r\n            <div style=\"width:40px;height: 22px;\">\r\n              <select class=\"cesium-button-select\" (change)=\"changeRelation(item.id,$event.target.value)\" style=\"width:40px;height: 22px;\"> <!-- [ngModel]=\"item.RelaHide\" -->\r\n                <option class=\"cesium-option\" value=0>=</option>\r\n                <option class=\"cesium-option\" value=1>!=</option>\r\n              </select>\r\n            </div>\r\n          </th>\r\n           <th *ngIf=\"item.type === 'number'\" style=\"width:70px;height: 20px;\">\r\n            <input type=\"text\" id={{item.id}} value={{item.textHide}} (change)=\"changeNum(item.id,$event.target.value)\" style=\"width:70px;height: 20px;background:transparent;color:#D3D3D3;border:1px solid #8AA8C0;\">\r\n          </th>\r\n          <th *ngIf=\"item.type === 'string'\" style=\"width:73px;height: 22px;\">\r\n            <div style=\"width:73px;height: 22px;\">\r\n              <select class=\"cesium-button-select\" (change)=\"changeText(item.id,$event.target.value)\" style=\"width:73px;height: 22px;\"> <!-- [ngModel]=\"item.CategaryHide\" -->\r\n                <option class=\"cesium-option\" *ngFor=\"let val of item.values\" value={{val}}>{{val}}</option>\r\n              </select>\r\n            </div>\r\n          </th>\r\n          <th style=\"width:20px;height: 22px;\" id={{item.id}}>\r\n            <span id={{item.id}} (click)=\"deleteFilter(item.id)\" style=\"width:20px;height: 22px;cursor:pointer;\">\r\n              <i class=\"material-icons\" style=\"color:#D3D3D3;font-size:16px\">delete</i>\r\n            </span>\r\n          </th>\r\n          <th style=\"width:20px;height: 25px;\" id={{item.id}}>\r\n            <input type=\"checkbox\" id={{item.id}} checked=\"checked\" (click)=\"changeDisable(item.id,$event.target.checked)\" tyle=\"width:20px;height: 25px;cursor:pointer;\">\r\n          </th>\r\n          <th></th>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div>\r\n      <table>\r\n        <tr><th class=\"addFilter\" style=\"width: 75px;height: 25px;\">\r\n          <input type=\"button\" value=\"Apply filters\" style=\"color:#D3D3D3;border:1px solid #8AA8C0;width: 85px;height: 25px;background-color: transparent;cursor:pointer;\" (click)=\"applyFilter()\">\r\n        </th></tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n  "

/***/ }),

/***/ "./src/app/mobius-cesium/setting/filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterComponent; });
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


var FilterComponent = /** @class */ (function (_super) {
    __extends(FilterComponent, _super);
    function FilterComponent(injector, myElement) {
        return _super.call(this, injector) || this;
    }
    /* Initialises and gets parent IDs and properties
       Extracts keys for display in dropdown
       Uses: - initialise
             - dataService.getcesiumpromise
             - cesiumGeomService.getIds
             - cesiumGeomService.getPropIds
             - setKeys */
    FilterComponent.prototype.ngOnInit = function () {
        this.intialise();
        this.all_ids = this.cesiumGeomService.getIds();
        this.prop_ids = this.cesiumGeomService.getPropIds();
        this.setKeys();
        this.filter_select = this.prop_keys[0];
    };
    FilterComponent.prototype.notify = function (message) {
        var _this = this;
        if (message === "model_update") {
            try {
                this.intialise();
                this.dataService.getcesiumpromise().then(function () {
                    _this.all_ids = _this.cesiumGeomService.getIds();
                    _this.prop_ids = _this.cesiumGeomService.getPropIds();
                    _this.setKeys();
                    _this.filter_select = _this.prop_keys[0];
                });
            }
            catch (ex) {
                console.log(ex);
            }
        }
    };
    /* Initialise arrays/reset values */
    FilterComponent.prototype.intialise = function () {
        this.filter_index = 0;
        this.srfcount = null;
        this.filters = [];
        this.prop_keys = null;
        this.all_ids = null;
    };
    /* Get list of keys for properties (for displaying in the dropdown list) */
    FilterComponent.prototype.setKeys = function () {
        var keys2 = [];
        for (var key in this.prop_ids) {
            // keys.push(key);
            keys2.push(key);
        }
        this.prop_keys = keys2;
    };
    /* Hides all entities from list of ids
       Params: Array of entities to check for id and hide
               Array of ids to check for and hide
       Called in: applyFilter */
    FilterComponent.prototype.hide = function (entities, ids) {
        ids.forEach(function (id) {
            entities.getById(id).show = false;
        });
    };
    /* Shows all entities from list of ids
       Params: Array of entities to check for id and show
               Array of ids to check for and show
       Called in: applyFilter */
    FilterComponent.prototype.show = function (entities, ids) {
        ids.forEach(function (id) {
            entities.getById(id).show = true;
        });
    };
    /* Adds a filter option based on the current selected property (this.filter_select) when user clicks button */
    FilterComponent.prototype.addFilter = function () {
        var proptype = typeof (this.prop_ids[this.filter_select][0]);
        var text = 0;
        if (proptype === "string") {
            text = this.prop_ids[this.filter_select][0];
        }
        var filter = { id: this.filter_index,
            name: this.filter_select,
            type: proptype,
            values: this.prop_ids[this.filter_select],
            disable: false,
            relation: 0,
            text: text // typed/selected value to use in filter
        };
        this.filters.push(filter);
        this.filter_index++;
    };
    /* Changes the currently selected property when the user selects a value from the dropdown box
       Params: Property name selected by user */
    FilterComponent.prototype.changeFilterSelect = function (name) {
        this.filter_select = name;
    };
    /* Changes the currently selected relation for a filter when user selects a value from the dropdown box
       Params: ID number of filter to change
               Number representing selected relation */
    FilterComponent.prototype.changeRelation = function (id, relation) {
        for (var i = 0; i < this.filters.length; i++) {
            if (this.filters[i].id === id) {
                this.filters[i].relation = Number(relation);
                break;
            }
        }
    };
    /* Changes the currently selected value for a filter when user selects a value from the dropdown box (string)
       Params: ID number of filter to change
               Value selected by user */
    FilterComponent.prototype.changeText = function (id, text) {
        for (var i = 0; i < this.filters.length; i++) {
            if (this.filters[i].id === id) {
                this.filters[i].text = text;
                break;
            }
        }
    };
    /* Changes the currently selected value for a filter when user types a value (number)
       Params: ID number of filter to change
               Value typed by user */
    FilterComponent.prototype.changeNum = function (id, text) {
        for (var i = 0; i < this.filters.length; i++) {
            if (this.filters[i].id === id) {
                this.filters[i].text = Number(text);
                break;
            }
        }
    };
    /* Toggles the disable value for a filter when user clicks on checkbox
       Params: ID number of filter to change
               Boolean representing checkbox status (true for checked, false for unchecked) */
    FilterComponent.prototype.changeDisable = function (id, check) {
        for (var i = 0; i < this.filters.length; i++) {
            if (this.filters[i].id === id) {
                if (check === true) {
                    this.filters[i].disable = false;
                }
                else {
                    this.filters[i].disable = true;
                }
                break;
            }
        }
    };
    /* Removes a filter from the list when user clicks delete
       Params: ID number of filter to delete */
    FilterComponent.prototype.deleteFilter = function (id) {
        for (var i = 0; i < this.filters.length; i++) {
            if (this.filters[i].id === id) {
                this.filters.splice(i, 1);
                break;
            }
        }
    };
    FilterComponent.prototype.getPropValue = function (props, name) {
        var cats = props.propertyNames;
        for (var _i = 0, cats_1 = cats; _i < cats_1.length; _i++) {
            var x = cats_1[_i];
            var ids = Object.keys(props[x]._value);
            for (var _a = 0, ids_1 = ids; _a < ids_1.length; _a++) {
                var i = ids_1[_a];
                if (i === name) {
                    return props[x]._value[i];
                }
            }
        }
        return null;
    };
    /* Applies all filter settings to view when user clicks button
       - Checks if filter is disabled, skips is true
       - Checks relation and separates parent IDs into 2 arrays, show and hide, based on relation and entered value (text)
       - Filter applies the rules using "and"
           - eg. given 2 properties: property1 < 6, property2 = "A"
                 shown entities will be entities that satisfy ((property1 < 6) && (property2 = "A"))
       Uses: - show
             - hide
      *** TODO: better relation if-else */
    FilterComponent.prototype.applyFilter = function () {
        var _this = this;
        var entities = this.dataService.getViewer().dataSources.get(0).entities;
        var show = this.all_ids;
        var hide = [];
        this.filters.forEach(function (filter) {
            var newshow = [];
            // skip if filter is disabled
            if (filter.disable === true) {
                return;
            }
            if (filter.type === "number") {
                if (filter.relation === 0) {
                    // >
                    show.forEach(function (id) {
                        if (_this.getPropValue(entities.getById(id).properties, filter.name) > filter.text) {
                            newshow.push(id);
                        }
                        else {
                            hide.push(id);
                        }
                    });
                }
                else if (filter.relation === 1) {
                    // <
                    show.forEach(function (id) {
                        if (_this.getPropValue(entities.getById(id).properties, filter.name) < filter.text) {
                            newshow.push(id);
                        }
                        else {
                            hide.push(id);
                        }
                    });
                }
                else {
                    // =
                    show.forEach(function (id) {
                        if (_this.getPropValue(entities.getById(id).properties, filter.name) === filter.text) {
                            newshow.push(id);
                        }
                        else {
                            hide.push(id);
                        }
                    });
                }
            }
            else {
                if (filter.relation === 0) {
                    // =
                    show.forEach(function (id) {
                        if (_this.getPropValue(entities.getById(id).properties, filter.name) === filter.text) {
                            newshow.push(id);
                        }
                        else {
                            hide.push(id);
                        }
                    });
                }
                else {
                    // !=
                    show.forEach(function (id) {
                        if (_this.getPropValue(entities.getById(id).properties, filter.name) !== filter.text) {
                            newshow.push(id);
                        }
                        else {
                            hide.push(id);
                        }
                    });
                }
            }
            show = newshow;
        });
        this.show(entities, show);
        this.hide(entities, hide);
    };
    FilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-filter",
            template: __webpack_require__("./src/app/mobius-cesium/setting/filter.component.html"),
            styles: [__webpack_require__("./src/app/mobius-cesium/setting/filter.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], FilterComponent);
    return FilterComponent;
}(__WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__["a" /* DataSubscriber */]));



/***/ }),

/***/ "./src/app/mobius-cesium/setting/publish.component.css":
/***/ (function(module, exports) {

module.exports = "#publishwindow{\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n  color:#D3D3D3 !important;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  font-size: 14px !important;\r\n  line-height: 16px;\r\n  overflow-x: hidden !important;\r\n}\r\n\r\n/deep/split-gutter{\r\n  background-color:rgb(138, 168, 192) !important;\r\n}\r\n\r\n/deep/.mat-accent .mat-slider-thumb {\r\n    background-color: #8AA8C0 !important;\r\n    cursor: -webkit-grab;\r\n    padding: 0px;\r\n    height: 24px;\r\n    /*min-width: 50px;*/\r\n    -webkit-box-flex: 1;\r\n    -ms-flex-positive: 1;\r\n    flex-grow: 1;\r\n    -ms-touch-action: none;\r\n        touch-action: none;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    -webkit-user-drag: none;\r\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n/deep/.mat-slider-thumb{\r\n  width: 5px !important;\r\n  right: -5px !important;\r\n}\r\n\r\n/deep/.mat-slider-track-fill{\r\n  background-color: #F0BFA0 !important;\r\n}\r\n\r\n/deep/.mat-slider-thumb-label-text {\r\n    color: #395d73 !important;\r\n    font-size: 12px !important;\r\n}\r\n\r\n/deep/.mat-slider-thumb-label{\r\n    height: 15px !important;\r\n    width: 15px !important;\r\n    top: -20px !important;\r\n    right: -7px !important;\r\n    background-color: white !important;\r\n    border: 1px solid #395d73 !important;\r\n}\r\n\r\n/deep/.mat-slider-track-background{\r\n  background-color: #D3D3D3 !important;\r\n}\r\n\r\n.mat-slider{\r\n    width: 100%;\r\n    display: inline-block;\r\n    position: relative;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    outline: 0;\r\n    vertical-align: middle;\r\n}\r\n\r\n.cesium-button {\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  color: #D3D3D3;\r\n  fill: #8AA8C0;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  background: transparent;\r\n}\r\n\r\n.cesium-button-select{\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  fill: #8AA8C0;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  color: #D3D3D3;\r\n  background: transparent;\r\n}\r\n\r\n.cesium-option{\r\n  background-color: #F1F1F1;\r\n  /*opacity: 0.8;*/\r\n  color: #8AA8C0;\r\n  border: 1px solid #8AA8C0;\r\n}\r\n\r\nhr {\r\n  display: block;\r\n  height: 1px;\r\n  border: 0;\r\n  border-top: 1px solid #D3D3D3 !important;\r\n  padding: 0; \r\n  color:#D3D3D3 !important;\r\n  width: 100%;\r\n  background-color: #D3D3D3 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/setting/publish.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"publish\" style=\"background-color: rgba(20,20,20,0.9);height: 100%;overflow-y:overlay;\"  >\r\n\r\n<div id=\"publishwindow\" *ngIf=\"dataArr!==undefined\">\r\n        <div *ngIf=\"_ColorKey!==undefined\">\r\n        <table >\r\n          <tr>\r\n          <th class=\"colorkey\" style=\"width: 280px\" *ngIf=\"_ColorDescr!==undefined\"><div style=\"color:#D3D3D3 !important;border:0;text-align: left;font-weight: normal;font-size:14px;line-height:16px;\">{{_ColorDescr}}</div></th></tr>\r\n        </table>\r\n        <table>\r\n          <tr>\r\n            <th class=\"colorkey\" style=\"width: 80px\"><div class=\"Hide\" style=\"width: 80px;color:#D3D3D3 !important;border:0;text-align: left;font-weight: normal;\">Color&nbsp;&nbsp;:</div></th>\r\n          <th><div>\r\n            <select class=\"cesium-button\" (change)=\"onChangeColor($event.target.value)\" [ngModel]=\"_ColorKey\">\r\n              <option class=\"cesium-option\"  *ngFor=\"let ColorName of _ColorProperty\" value={{ColorName}}>{{ColorName}}</option>\r\n            </select>\r\n          </div></th>\r\n          </tr>\r\n          </table>\r\n    </div>\r\n    <div *ngIf=\"_ExtrudeKey!==undefined\">\r\n        <hr>\r\n          <table >\r\n          <tr>\r\n          <th class=\"colorkey\" style=\"width: 280px\" *ngIf=\"_ExtrudeDescr!==undefined\"><div style=\"color:#D3D3D3 !important;border:0;text-align: left;font-weight: normal;font-size:14px;line-height:16px;\">{{_ExtrudeDescr}}</div></th></tr>\r\n        </table>\r\n        <table>\r\n          <tr>\r\n            <th class=\"colorkey\" style=\"width: 80px\"><div class=\"Hide\" style=\"width: 80px;color:#D3D3D3 !important;border:0;text-align: left;font-weight: normal;\">Extrude&nbsp;&nbsp;:</div></th>\r\n          <th><div>\r\n            <select class=\"cesium-button\" (change)=\"onChangeHeight($event.target.value)\" [ngModel]=\"_ExtrudeKey\">\r\n               <option class=\"cesium-option\"  *ngFor=\"let Height of _ExtrudeProperty\" value={{Height}}>{{Height}}</option>\r\n            </select>\r\n          </div></th>\r\n          </tr>\r\n        </table>\r\n        <table>\r\n          <tr ><th style=\"width:40px;height: 25px;\"><div style=\"width: 40px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Min&nbsp;&nbsp;:</div></th>\r\n          <th style=\"width:40px;\"><div style=\"width: 40px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\" *ngIf=\"_ExtrudeMin!==undefined\">{{_ExtrudeMin}}</div></th></tr>\r\n\r\n          <tr><th style=\"width:40px;\"><div style=\"width: 40px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Max&nbsp;&nbsp;:</div></th>\r\n          <th style=\"width:60px;\"><div style=\"width: 60px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\" *ngIf=\"_ExtrudeMax!==undefined\">{{_ExtrudeMax}}</div></th></tr>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"_Filter!==undefined\">\r\n      <hr>\r\n      <div class=\"hide-container\" style=\"margin-top:5px;\">\r\n        <div *ngFor=\"let item of _Filter;\" id={{item.divid}}>\r\n      <table>\r\n        <tr >\r\n          <th style=\"width:280px;height: 25px;\"><div style=\"color:#D3D3D3 !important;text-align: left;vertical-align: middle;font-weight: normal;font-size:14px;line-height:16px;\">{{item.descr}}</div></th></tr>\r\n        </table>\r\n        <table>\r\n          <tr>\r\n            <th style=\"max-width: 80px;height: 25px;\"><div matTooltip={{item.HeightHide}} style=\"max-width: 80px;color:#D3D3D3 !important;text-align: left;vertical-align: middle;font-weight: normal;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;\">{{item.HeightHide}}</div></th>\r\n        <th *ngIf=\"item.type === 'number'\" style=\"width:20px;height: 25px;\">\r\n          <div style=\"width:20px;height: 25px;color:#D3D3D3 !important;vertical-align: middle;font-weight: normal;margin-top: 10px;\" *ngIf=\"item.RelaHide === 0\">></div>\r\n          <div style=\"width:20px;height: 25px;color:#D3D3D3 !important;vertical-align: middle;font-weight: normal;margin-top: 10px;\" *ngIf=\"item.RelaHide === 1\"><</div>\r\n          <div style=\"width:20px;height: 25px;color:#D3D3D3 !important;vertical-align: middle;font-weight: normal;margin-top: 10px;\" *ngIf=\"item.RelaHide === 2\">=</div></th>\r\n          <th *ngIf=\"item.type === 'category'\" style=\"width:30px;height: 25px;\">\r\n          <div style=\"width:20px;height: 25px;color:#D3D3D3 !important;vertical-align: middle;font-weight: normal;margin-top: 10px;\" *ngIf=\"item.RelaHide === 0\">none</div>\r\n          <div style=\"width:20px;height: 25px;color:#D3D3D3 !important;vertical-align: middle;font-weight: normal;margin-top: 10px;\" *ngIf=\"item.RelaHide === 1\">=</div>\r\n          <div style=\"width:20px;height: 25px;color:#D3D3D3 !important;vertical-align: middle;font-weight: normal;margin-top: 10px;\" *ngIf=\"item.RelaHide === 2\">!=</div></th>\r\n          <th *ngIf=\"item.type === 'number'\" style=\"width:80px;color:#395D73 !important;\"><input type=\"text\" id={{item.id}} value={{item.textHide}} (change)=\"Changetext($event.target.value,item.id)\" style=\"width:80px;background:transparent;color:#D3D3D3;border:1px solid #8AA8C0;\"></th>\r\n          <th *ngIf=\"item.type === 'category'\" style=\"width:73px;height: 25px;\"><div style=\"width:73px;height: 25px;\">\r\n          <select class=\"cesium-button-select\" [ngModel]=\"item.CategaryHide\" (change)=\"ChangeCategory($event.target.value,item.id,1)\" style=\"width:73px;height: 25px;\">\r\n            <option class=\"cesium-option\" *ngFor=\"let caty of item.Category\" value={{caty}}>{{caty}}</option>\r\n          </select></div></th>\r\n        <th style=\"width:20px;height: 22px;\" id={{item.id}}><input type=\"checkbox\" id={{item.id}} checked=\"checked\" (click)=\"Disable(item.id)\" style=\"width:20px;height: 22px;cursor:pointer;\"></th></tr>\r\n      </table>\r\n      <table>\r\n        <tr>\r\n        <th *ngIf=\"item.type === 'number'\" style=\"max-width: 30px;height: 25px;vertical-align: top;padding-top: 10px;\"><div style=\"font-weight: normal;display: inline-block;color:#D3D3D3 !important;text-align: left;max-width: 30px;\">{{item.HideMin}}</div></th>\r\n        <th *ngIf=\"item.type === 'number'\" style=\"width:200px;height: 25px;\"><div style=\"font-weight: normal;display: inline-block;width:200px;\"><mat-slider class=\"slider\" name=\"range\" id=\"0\" min={{item.HideMin}} max={{item.HideMax}} step=0.01 thumbLabel=true value={{item.textHide}} #textscale (change)=\"Changetext(textscale.value.toPrecision(2),item.id)\" >\r\n        </mat-slider></div></th>\r\n        <th *ngIf=\"item.type === 'number'\" style=\"max-width: 30px;height: 25px;vertical-align: top;padding-top: 10px;\"><div style=\"font-weight: normal;display: inline-block;color:#D3D3D3 !important;max-width: 30px;text-align: left;\">{{item.HideMax}}</div></th></tr>\r\n      </table><hr>\r\n        </div>\r\n      </div>\r\n      <div>\r\n      <button style=\"color:#D3D3D3;border:2px solid #8AA8C0;background-color: transparent;cursor:pointer;\" (click)=\"reset()\">Reset</button></div>\r\n      </div>\r\n</div>\r\n\r\n  "

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
        var _this = _super.call(this, injector) || this;
        _this._CheckDisable = false;
        return _this;
    }
    PublishComponent.prototype.ngOnInit = function () {
        this.mode = this.dataService.getmode();
        // this.dataArr = this.dataService.get_PuData();
        if (this.dataArr !== undefined) {
            this.LoadData();
        }
    };
    PublishComponent.prototype.notify = function (message) {
        if (message === "model_update") {
            try {
                // this.dataArr = this.dataService.get_PuData();
                // if(this.dataArr !== undefined) {this.LoadData();}
            }
            catch (ex) {
                console.log(ex);
            }
        }
    };
    //load data in publish version
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
        this._Filter = this.dataArr["Filter"];
    };
    //disable button in publish version
    PublishComponent.prototype.Disable = function (event) {
        var index = this._HideNum.indexOf(event);
        var divid = String("addHide".concat(String(event)));
        var addHide = document.getElementById(divid);
        if (this._Filter[index].Disabletext === null) {
            this._CheckDisable = false;
        }
        else {
            this._CheckDisable = true;
        }
        if (this._CheckDisable === false) {
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
        // this.dataService.set_PuData(this.dataArr);
    };
    //change category in filter
    PublishComponent.prototype.ChangeCategory = function (categary, id, type) {
        var _index = this._HideNum.indexOf(id);
        if (type === 1) {
            this._Filter[_index].CategaryHide = categary;
        }
        if (type === 0) {
            this._Filter[_index].RelaHide = Number(categary);
        }
    };
    //change text in filter
    PublishComponent.prototype.Changetext = function (value, id) {
        var _index = this._HideNum.indexOf(id);
        this._Filter[_index].textHide = value;
    };
    //change color property in publish version
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
        var promise = this.dataService.getcesiumpromise();
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
        this.dataArr["ColorText"] = _Colortexts.sort();
        // this.dataService.set_PuData(this.dataArr);
        this.LoadData();
    };
    //change extrudeheight property in publish version
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
        var promise = this.dataService.getcesiumpromise();
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
        this.dataArr["ExtrudeText"] = _Heighttexts.sort();
        // this.dataService.set_PuData(this.dataArr);
        this.LoadData();
    };
    //reset button to load again
    PublishComponent.prototype.reset = function () {
        // this.dataService.LoadJSONData();
        // this.dataArr = this.dataService.get_PuData();
        if (this.dataArr !== undefined) {
            this.LoadData();
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

module.exports = "#setting{\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n  color:#D3D3D3 !important;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  font-size: 14px !important;\r\n  line-height: 14px;\r\n  overflow-x: hidden !important;\r\n  border-right: 1px solid gray;\r\n}\r\n\r\n/deep/.mat-tab-label, /deep/.mat-tab-label-active{\r\n  min-width: 60px!important;\r\n  padding: 3px!important;\r\n  margin: 3px!important;\r\n  color:#D3D3D3 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n/deep/.mat-tab-label{\r\n  height: 30px !important;\r\n  width: 60px !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n/deep/.mat-tab-labels{\r\n  background-color: rgba(20,20,20,0.9) !important;\r\n}\r\n\r\n/deep/.mat-tab-header{\r\n  width: 700px !important;\r\n}\r\n\r\n/deep/.mat-tab-header-pagination-controls-enabled{\r\n  display: none !important;\r\n}\r\n\r\n/deep/.mat-ink-bar{\r\n  background-color: #395d73 !important;\r\n}\r\n\r\n/deep/.mat-tab{\r\n  min-width: 30px !important;\r\n}\r\n\r\n/deep/.mat-tab-body-content{\r\n  overflow: hidden !important;\r\n}\r\n\r\n/deep/.mat-header{\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  margin-left: 0px;\r\n  color:#395d73;\r\n  border: 0;\r\n  height: 20px;\r\n  background-color: rgba(20,20,20,0.9) !important;\r\n}\r\n\r\n/deep/.mat-tab-body-wrapper{\r\n  height:100% !important;\r\n\r\n}\r\n\r\n/deep/split-gutter{\r\n  background-color:rgb(138, 168, 192) !important;\r\n}\r\n\r\n/deep/.mat-accent .mat-slider-thumb {\r\n    background-color: #8AA8C0 !important;\r\n    cursor: -webkit-grab;\r\n}\r\n\r\n/deep/.mat-slider-thumb{\r\n  width: 5px !important;\r\n  right: -5px !important;\r\n}\r\n\r\n/deep/.mat-slider-track-fill{\r\n  background-color: #F0BFA0 !important;\r\n}\r\n\r\n/deep/.mat-slider-thumb-label-text {\r\n    color: #395d73 !important;\r\n    font-size: 12px !important;\r\n}\r\n\r\n/deep/.mat-slider-thumb-label{\r\n    height: 15px !important;\r\n    width: 15px !important;\r\n    top: -20px !important;\r\n    right: -7px !important;\r\n    background-color: white !important;\r\n    border: 1px solid #395d73 !important;\r\n}\r\n\r\n/deep/.mat-slider-track-background{\r\n  background-color: #D3D3D3 !important;\r\n}\r\n\r\n.mat-slider{\r\n    width: 150px !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/setting/setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"setting\" >\r\n  <mat-tab-group class=\"mat-tab-group\" style=\"height: 100%;\" (selectedTabChange)=\"changedata($event.index)\" *ngIf=\"mode==='editor'\" >\r\n    <mat-tab label=\"&nbsp;Attributes&nbsp;\">\r\n      <app-select></app-select>\r\n    </mat-tab>\r\n    <mat-tab label=\"&nbsp;Filters&nbsp;\" >\r\n      <app-filter></app-filter>\r\n    </mat-tab>\r\n    <mat-tab label=\"&nbsp;Display&nbsp;\" >\r\n      <app-display></app-display>\r\n    </mat-tab>\r\n    <mat-tab label=\"&nbsp;About&nbsp;\" >\r\n      <app-about></app-about>\r\n    </mat-tab>\r\n<!--     <mat-tab label=\"&nbsp;Data&nbsp;\" >\r\n      <app-data (change)=\"LoadViewer()\" (click)=\"LoadViewer()\"></app-data>\r\n    </mat-tab> -->\r\n<!--     <mat-tab label=\"&nbsp;Publish&nbsp;\" >\r\n      <app-publish  (change)=\"LoadViewer()\" (click)=\"Reset();LoadViewer();\"></app-publish>\r\n    </mat-tab> -->\r\n  </mat-tab-group>\r\n    <app-publish *ngIf=\"mode==='viewer'\" (change)=\"LoadViewer()\" (click)=\"Reset();LoadViewer();\"></app-publish>\r\n</div>"

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
    //get data and mode
    SettingComponent.prototype.ngOnInit = function () {
        this.data = this.dataService.getGsModel();
        this.mode = this.dataService.getmode();
        if (this.mode === "viewer") {
            this.changedata(3);
        }
        else if (this.mode === "editor") {
            this.changedata(1);
        }
    };
    //change data and load new data
    SettingComponent.prototype.notify = function (message) {
        if (message === "model_update") {
            this.data = this.dataService.getGsModel();
            this.mode = this.dataService.getmode();
            try {
                if (this.data !== undefined && this.data["features"] !== undefined) {
                    if (this.mode === "viewer") {
                        this.changedata(3);
                    }
                    else if (this.mode === "editor") {
                        this.changedata(1);
                    }
                }
            }
            catch (ex) {
                console.log(ex);
            }
        }
    };
    //change index from editor version to publish version
    SettingComponent.prototype.changedata = function (id) {
        this.dataService.set_index(id);
        if (id === 1) {
            // this.dataArr = this.dataService.get_ViData();
        }
        else if (id === 3) {
            // this.dataArr = this.dataService.get_PuData();
        }
        if (this.dataArr !== undefined) {
            this.LoadViewer();
        }
    };
    //reset button to reset everthing in publish version
    SettingComponent.prototype.Reset = function () {
        // this.dataArr = this.dataService.get_PuData();
    };
    //change color and extrudeHeight of entity
    SettingComponent.prototype.LoadViewer = function () {
        var promise = this.dataService.getcesiumpromise();
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
        var _indexArr = this.dataArr["indexArr"];
        var _Filter;
        if (this.dataArr["Filter"] !== undefined && this.dataArr["Filter"].length !== 0) {
            _Filter = this.dataArr["Filter"];
        }
        else {
            _Filter = [];
        }
        var _ChromaScale = __WEBPACK_IMPORTED_MODULE_2_chroma_js__["scale"]("SPECTRAL");
        if (_ColorInvert === true) {
            _ChromaScale = __WEBPACK_IMPORTED_MODULE_2_chroma_js__["scale"]("SPECTRAL").domain([1, 0]);
        }
        var self = this;
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var _i = 0, _indexArr_1 = _indexArr; _i < _indexArr_1.length; _i++) {
                var i = _indexArr_1[_i];
                var entity = entities[i];
                var _CheckHide = void 0;
                if (entity.polygon !== undefined) {
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
                        if (_ColorKey !== "None") {
                            if (typeof (_ColorText[0]) === "number") {
                                self.colorByNum(entity, _ColorMax, _ColorMin, _ColorKey, _ChromaScale);
                            }
                            else {
                                self.colorByCat(entity, _ColorText, _ColorKey, _ChromaScale);
                            }
                        }
                        else {
                            entity.polygon.material = Cesium.Color.DARKGREY;
                        }
                        if (_ExtrudeKey !== "None") {
                            if (_HeightChart === false) {
                                entity.polyline = undefined;
                                if (entity.properties[_ExtrudeKey] !== undefined) {
                                    entity.polygon.extrudedHeight = self.ExtrudeHeight(entity.properties[_ExtrudeKey]._value, _ExtrudeMax, _ExtrudeMin, _Invert) * _Scale;
                                }
                                else {
                                    entity.polygon.extrudedHeight = 0;
                                }
                            }
                            else {
                                entity.polygon.extrudedHeight = 0;
                                var center = Cesium.BoundingSphere.fromPoints(entity.polygon.hierarchy.getValue().positions).center;
                                var radius = Math.min(Math.round(Cesium.BoundingSphere.fromPoints(entity.polygon.hierarchy.getValue().positions).radius / 100), 10);
                                var longitudeString = Cesium.Math.toDegrees(Cesium.Ellipsoid.WGS84.
                                    cartesianToCartographic(center).longitude).toFixed(10);
                                var latitudeString = Cesium.Math.toDegrees(Cesium.Ellipsoid.WGS84.cartesianToCartographic(center).
                                    latitude).toFixed(10);
                                entity.polyline = new Cesium.PolylineGraphics({
                                    positions: new Cesium.Cartesian3.fromDegreesArrayHeights([longitudeString, latitudeString, 0, longitudeString,
                                        latitudeString, self.ExtrudeHeight(entity.properties[_ExtrudeKey]._value, _ExtrudeMax, _ExtrudeMin, _Invert) * _Scale]),
                                    width: radius,
                                    material: entity.polygon.material,
                                    show: true,
                                });
                            }
                        }
                        else {
                            entity.polyline = undefined;
                            entity.polygon.extrudedHeight = 0;
                        }
                    }
                }
                else if (entity.polyline !== undefined) {
                    if (_ColorKey !== "None") {
                        if (typeof (_ColorText[0]) === "number") {
                            self.colorByNum(entity, _ColorMax, _ColorMin, _ColorKey, _ChromaScale);
                        }
                        else {
                            self.colorByCat(entity, _ColorText, _ColorKey, _ChromaScale);
                        }
                    }
                    else {
                        entity.polyline.material = Cesium.Color.DARKGREY;
                    }
                }
                else if (entity.point !== undefined) {
                    if (_ColorKey !== "None") {
                        if (typeof (_ColorText[0]) === "number") {
                            self.colorByNum(entity, _ColorMax, _ColorMin, _ColorKey, _ChromaScale);
                        }
                        else {
                            self.colorByCat(entity, _ColorText, _ColorKey, _ChromaScale);
                        }
                    }
                    else {
                        entity.point.color = Cesium.Color.DARKGREY;
                    }
                }
            }
        });
    };
    //check whether entity should be hided or not
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
                    if (this._compareCat(value, filter.CategaryHide, Number(filter.RelaHide))) {
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
                return value !== slider;
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
    //caculate the extrudeHeight of entity
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
                var newColor = new Cesium.Color.fromBytes(rgb[0], rgb[1], rgb[2]);
                entity.polyline.material.color.setValue(newColor);
            }
            if (entity.point !== undefined) {
                var newColor = new Cesium.Color.fromBytes(rgb[0], rgb[1], rgb[2]);
                entity.point.color = newColor;
            }
        }
        else {
            if (entity.polygon !== undefined) {
                entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
            }
            if (entity.polyline !== undefined) {
                entity.polyline.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
            }
            if (entity.point !== undefined) {
                entity.point.color = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
            }
        }
    };
    SettingComponent.prototype.colorByCat = function (entity, _ColorText, _ColorKey, _ChromaScale) {
        if (entity.properties[_ColorKey] !== undefined) {
            var initial = false;
            for (var j = 0; j < _ColorText.length; j++) {
                if (entity.properties[_ColorKey]._value === _ColorText[j]) {
                    var rgb = _ChromaScale(1 - (j / _ColorText.length));
                    if (entity.polygon !== undefined) {
                        entity.polygon.material = Cesium.Color.fromBytes(rgb._rgb[0], rgb._rgb[1], rgb._rgb[2]);
                    }
                    if (entity.polyline !== undefined) {
                        var newColor = new Cesium.Color.fromBytes(rgb[0], rgb[1], rgb[2]);
                        entity.polyline.material.color.setValue(newColor);
                    }
                    if (entity.point !== undefined) {
                        var newColor = new Cesium.Color.fromBytes(rgb[0], rgb[1], rgb[2]);
                        entity.point.color = newColor;
                    }
                    initial = true;
                }
            }
            if (initial === false) {
                if (entity.polygon !== undefined) {
                    entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                }
                if (entity.polyline !== undefined) {
                    entity.polyline.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                }
                if (entity.point !== undefined) {
                    entity.point.color = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                }
            }
        }
        else {
            if (entity.polygon !== undefined) {
                entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
            }
            if (entity.polyline !== undefined) {
                entity.polyline.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
            }
            if (entity.point !== undefined) {
                entity.point.color = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
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

module.exports = "#SettingView{\r\n  position: relative;\r\n  padding:0px;\r\n  height: 100%;\r\n  width: 100%;\r\n  color:#D3D3D3 !important;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  font-size: 14px !important;\r\n  line-height: 14px;\r\n  overflow-x: hidden !important;\r\n  background-color: rgba(20,20,20,0.9);\r\n  overflow-y:overlay;\r\n}\r\n/deep/.mat-tab-label, /deep/.mat-tab-label-active{\r\n  min-width: 60px!important;\r\n  padding: 3px!important;\r\n  margin: 3px!important;\r\n  color:#D3D3D3 !important;\r\n  background-color: transparent !important;\r\n}\r\n/deep/.mat-tab-label{\r\n  height: 30px !important;\r\n  width: 60px !important;\r\n  background-color: transparent !important;\r\n}\r\n/deep/.mat-tab-labels{\r\n  background-color: rgba(20,20,20,0.9) !important;\r\n}\r\n/deep/.mat-tab-header{\r\n  width: 700px !important;\r\n}\r\n/deep/.mat-tab-header-pagination-controls-enabled{\r\n  display: none !important;\r\n}\r\n/deep/.mat-ink-bar{\r\n  background-color: #395d73 !important;\r\n}\r\n/deep/.mat-tab{\r\n  min-width: 30px !important;\r\n}\r\n/deep/.mat-tab-body-content{\r\n  overflow: hidden !important;\r\n}\r\n/deep/.mat-header{\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  margin-left: 0px;\r\n  color:#395d73;\r\n  border: 0;\r\n  height: 20px;\r\n  background-color: rgba(20,20,20,0.9) !important;\r\n}\r\n/deep/.mat-tab-body-wrapper{\r\n  height:100% !important;\r\n\r\n}\r\n/deep/split-gutter{\r\n  background-color:rgb(138, 168, 192) !important;\r\n}\r\n/deep/.mat-accent .mat-slider-thumb {\r\n    background-color: #8AA8C0 !important;\r\n    cursor: -webkit-grab;\r\n}\r\n/deep/.mat-slider-thumb{\r\n  width: 5px !important;\r\n  right: -5px !important;\r\n}\r\n/deep/.mat-slider-track-fill{\r\n  background-color: #F0BFA0 !important;\r\n}\r\n/deep/.mat-slider-thumb-label-text {\r\n    color: #8AA8C0 !important;\r\n    font-size: 12px !important;\r\n}\r\n/deep/.mat-slider-thumb-label{\r\n    height: 15px !important;\r\n    width: 15px !important;\r\n    top: -20px !important;\r\n    right: -7px !important;\r\n    background-color: white !important;\r\n    border: 1px solid #8AA8C0 !important;\r\n}\r\n/deep/.mat-slider-track-background{\r\n  background-color: #D3D3D3 !important;\r\n}\r\n.mat-slider{\r\n    width: 150px !important;\r\n}\r\n.cesium-button {\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  color: #D3D3D3;\r\n  fill: #8AA8C0;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  background: transparent;\r\n}\r\n.cesium-button-select{\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  fill: #8AA8C0;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  color: #D3D3D3;\r\n  background: transparent;\r\n}\r\n.cesium-option{\r\n  background-color: #F1F1F1;\r\n  /*opacity: 0.8;*/\r\n  color: #8AA8C0;\r\n  border: 1px solid #8AA8C0;\r\n}\r\nhr {\r\n  display: block;\r\n  height: 1px;\r\n  border: 0;\r\n  border-top: 1px solid #D3D3D3 !important;\r\n  padding: 0; \r\n  color:#D3D3D3 !important;\r\n  width: 100%;\r\n  background-color: #8AA8C0 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/setting/visualise.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"SettingView\" >\r\n    <table>\r\n      <tr>\r\n      <th class=\"colorkey\" style=\"width: 80px\"><div class=\"Hide\" style=\"width: 80px;color:#D3D3D3 !important;border:0;text-align: left;font-weight: normal;\">Color</div></th>\r\n      <th><div>\r\n        <select class=\"cesium-button\" (change)=\"onChangeColor($event.target.value)\" [ngModel]=\"_ColorKey\">\r\n          <option class=\"cesium-option\"  *ngFor=\"let ColorName of _ColorProperty\" value={{ColorName}}>{{ColorName}}</option>\r\n        </select>\r\n      </div></th>\r\n      </tr>\r\n      </table>\r\n      <table>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Min</div></th>\r\n      <th style=\"width:80px;height: 18px;\"><input type=\"text\"  value={{_ColorMin}} style=\"width:80px;height: 18px;background:transparent;color:#D3D3D3;border:1px solid #8AA8C0;font-weight: normal;text-align: left;\" (change)=\"changeColorMin($event.target.value)\"></th></tr>  \r\n      </table>\r\n      <table >\r\n      <tr ><th style=\"width:80px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Max</div></th>\r\n      <th style=\"width:80px;height: 18px;\"><input type=\"text\" value={{_ColorMax}} style=\"width: 80px;height: 18px;background:transparent;color:#D3D3D3;border:1px solid #8AA8C0;font-weight: normal;text-align: left;\" (change)=\"changeColorMax($event.target.value)\"></th></tr>\r\n  </table>\r\n    <table>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Invert</div></th>\r\n      <th style=\"width:80px;height: 25px;\"><div style=\"width:80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\"><input type=\"checkbox\" [checked]=\"_ColorInvert\" (click)=\"changeColorInvert()\"></div></th></tr>\r\n    </table>\r\n    <hr>\r\n      <table>\r\n      <tr>\r\n      <th class=\"colorkey\" style=\"width: 80px\"><div class=\"Hide\" style=\"width: 80px;color:#D3D3D3 !important;border:0;text-align: left;font-weight: normal;\">Extrude</div></th>\r\n      <th><div>\r\n        <select class=\"cesium-button\" (change)=\"onChangeHeight($event.target.value)\" [ngModel]=\"_ExtrudeKey\">\r\n           <option class=\"cesium-option\"  *ngFor=\"let Height of _ExtrudeProperty\" value={{Height}}>{{Height}}</option>\r\n        </select>\r\n      </div></th>\r\n      </tr>\r\n    </table>\r\n    <table>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Min</div></th>\r\n      <th style=\"width:80px;height: 18px;\"><input type=\"text\"  value={{_ExtrudeMin}} style=\"width:80px;height: 18px;background:transparent;color:#D3D3D3;border:1px solid #8AA8C0;font-weight: normal;text-align: left\" (change)=\"changeHeightMin($event.target.value)\"></th></tr>  \r\n      </table>\r\n      <table >\r\n      <tr ><th style=\"width:80px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Max</div></th>\r\n      <th style=\"width:80px;height: 18px;\"><input type=\"text\" value={{_ExtrudeMax}} style=\"width: 80px;height: 18px;background:transparent;color:#D3D3D3;border:1px solid #8AA8C0;font-weight: normal;text-align: left;\" (change)=\"changeHeightMax($event.target.value)\"></th></tr>\r\n  </table>\r\n   <table>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Scale</div></th>\r\n      <th style=\"width:80px;height: 18px;\"><input type=\"text\" value={{_Scale}} style=\"width:80px;height: 18px;background:transparent;color:#D3D3D3;border:1px solid #8AA8C0;font-weight: normal;text-align: left;\" (change)=\"changescale($event.target.value)\" ></th></tr>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Invert</div></th>\r\n      <th style=\"width:80px;height: 25px;\"><div style=\"width:80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\"><input type=\"checkbox\" [checked]=\"_Invert\" (click)=\"changeopp()\"></div></th></tr>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Height Chart</div></th>\r\n      <th style=\"width:80px;height: 25px;\"><div style=\"width:80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\"><input type=\"checkbox\" [checked]=\"_HeightChart\" (click)=\"changeExtrude();\"></div></th></tr>  \r\n  </table>\r\n  <hr>\r\n  <table>\r\n    <tr>\r\n    <th class=\"colorkey\" style=\"width: 75px;height: 25px;\"><div class=\"Hide\" style=\"width: 75px;height: 25;color:#D3D3D3 !important;border-color:#395d73;border:0;text-align: left;font-weight: normal;\"><input type=\"button\" value=\"Add Filter\" style=\"color:#D3D3D3;border:1px solid #8AA8C0;width: 75px;height: 25px;background-color: transparent;cursor:pointer;\" (click)=\"addHide()\"></div></th>\r\n    <th style=\"width:20px;height: 22px;\"><div style=\"width:20px;height: 22px;margin-left: 10px\">\r\n      <select class=\"cesium-button-select\"  (change)=\"ChangeHeight($event.target.value)\">\r\n         <option class=\"cesium-option\"  *ngFor=\"let ColorName of _ColorProperty\" value={{ColorName}}>{{ColorName}}</option>\r\n      </select></div></th>\r\n    </tr>\r\n  </table>\r\n  <div class=\"hide-container\" style=\"margin-top:5px;\">\r\n    <div *ngFor=\"let item of _Filter;\" id={{item.divid}}>\r\n  <table>\r\n    <tr ><th style=\"width:85px;height: 22px;\"><div style=\"width:85px;color:#D3D3D3 !important;text-align: left;vertical-align: middle;font-weight: normal;\">{{item.HeightHide}}</div></th>\r\n    <th *ngIf=\"item.type === 'number'\" style=\"width:40px;height: 22px;\"><div style=\"width:40px;height: 22px;\">\r\n      <select class=\"cesium-button-select\" [ngModel]=\"item.RelaHide\" (change)=\"Changerelation($event.target.value,item.id)\" style=\"width:40px;height: 22px;\">\r\n         <option class=\"cesium-option\" value=0>></option>\r\n         <option class=\"cesium-option\" value=1><</option>\r\n         <option class=\"cesium-option\" value=2>=</option>\r\n      </select></div></th>\r\n      <th *ngIf=\"item.type === 'category'\" style=\"width:40px;height: 22px;\"><div style=\"width:40px;height: 22px;\">\r\n      <select class=\"cesium-button-select\" [ngModel]=\"item.RelaHide\" (change)=\"ChangeCategory($event.target.value,item.id,0)\" style=\"width:40px;height: 22px;\">\r\n        <option class=\"cesium-option\" value=0>none</option>\r\n        <option class=\"cesium-option\" value=1>=</option>\r\n        <option class=\"cesium-option\" value=2>!=</option>\r\n      </select></div></th>\r\n      <th *ngIf=\"item.type === 'number'\" style=\"width:70px;height: 20px;\"><input type=\"text\" id={{item.id}} value={{item.textHide}} (change)=\"Changetext($event.target.value,item.id)\" style=\"width:70px;height: 20px;background:transparent;color:#D3D3D3;border:1px solid #8AA8C0;\"></th>\r\n      <th *ngIf=\"item.type === 'category'\" style=\"width:73px;height: 22px;\"><div style=\"width:73px;height: 22px;\">\r\n      <select class=\"cesium-button-select\" [ngModel]=\"item.CategaryHide\" (change)=\"ChangeCategory($event.target.value,item.id,1)\" style=\"width:73px;height: 22px;\">\r\n        <option class=\"cesium-option\" *ngFor=\"let caty of item.Category\" value={{caty}}>{{caty}}</option>\r\n      </select></div></th>\r\n    <th style=\"width:20px;height: 22px;\" id={{item.id}}><span id={{item.id}} (click)=\"deleteHide(item.id)\" style=\"width:20px;height: 22px;cursor:pointer;\"><i class=\"material-icons\" style=\"color:#D3D3D3;font-size:16px\">delete</i></span></th>\r\n    <th style=\"width:20px;height: 25px;\" id={{item.id}}><input type=\"checkbox\" id={{item.id}} checked=\"checked\" (click)=\"Disable(item.id)\" tyle=\"width:20px;height: 25px;cursor:pointer;\"></th></tr>\r\n  </table>\r\n  <table>\r\n    <tr>\r\n    <th *ngIf=\"item.type === 'number'\" style=\"width:50px;height: 25px;vertical-align: top;padding-top: 10px;\"><div style=\"font-weight: normal;display: inline-block;color:#D3D3D3 !important;width:30px;\">{{item.HideMin}}</div></th>\r\n    <th *ngIf=\"item.type === 'number'\" style=\"width:150px;height: 22px;\"><div style=\"font-weight: normal;display: inline-block;width:150px;\"><mat-slider class=\"slider\" name=\"range\" id=\"0\" min={{item.HideMin}} max={{item.HideMax}} step=0.01 thumbLabel=true value={{item.textHide}} #textscale (change)=\"Changetext(textscale.value.toPrecision(2),item.id)\" >\r\n    </mat-slider></div></th>\r\n    <th *ngIf=\"item.type === 'number'\" style=\"width:50px;height: 25px;vertical-align: top;padding-top: 10px;\"><div style=\"font-weight: normal;display: inline-block;color:#D3D3D3 !important;width:30px;text-align: left;\">{{item.HideMax}}</div></th></tr>\r\n  </table><hr>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/mobius-cesium/setting/visualise.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataComponent; });
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


var DataComponent = /** @class */ (function (_super) {
    __extends(DataComponent, _super);
    // private _ColorProperty: any[];
    // private _ColorKey: string;
    // private _ColorMax: number;
    // private _ColorMin: number;
    // private _ExtrudeProperty: any[];
    // private _ExtrudeKey: string;
    // private _ExtrudeMax: number;
    // private _ExtrudeMin: number;
    // private _HeightChart: boolean;
    // private _Invert: boolean;
    // private _ColorInvert: boolean;
    // private _Scale: number;
    // private _Filter: any[];
    // private _HideNum: any[];
    // private _HideValue: string;
    // private _CheckDisable: boolean = true;
    function DataComponent(injector, myElement) {
        return _super.call(this, injector) || this;
    }
    DataComponent.prototype.ngOnInit = function () {
        // this.dataArr = this.dataService.get_ViData();
        // if(this.dataArr !== undefined) {this.LoadData();}
    };
    DataComponent.prototype.notify = function (message) {
        if (message === "model_update") {
            try {
                // this.dataArr = this.dataService.get_ViData();
                // if(this.dataArr !== undefined) {this.LoadData();}
            }
            catch (ex) {
                console.log(ex);
            }
        }
    };
    DataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-data",
            template: __webpack_require__("./src/app/mobius-cesium/setting/visualise.component.html"),
            styles: [__webpack_require__("./src/app/mobius-cesium/setting/visualise.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], DataComponent);
    return DataComponent;
}(__WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__["a" /* DataSubscriber */]));



/***/ }),

/***/ "./src/app/mobius-cesium/viewer/viewer.component.css":
/***/ (function(module, exports) {

module.exports = "body{\r\n  background: red;\r\n}\r\n#cesiumContainer{\r\n height: 100%;\r\n width: 100%; \r\n font-family: sans-serif !important;\r\n margin: 0px !important;\r\n padding: 0px !important;\r\n font-size: 14px;\r\n}\r\n#ColorBar{\r\n  z-index:99;\r\n  margin: 5px;\r\n  width: 100%;\r\n  padding: 2px 5px;\r\n  position: absolute;\r\n  display:inline-block;\r\n  bottom: 7%;\r\n  overflow: hidden !important;\r\n  text-overflow: ellipsis !important;\r\n  table-layout:fixed !important;\r\n  white-space: nowrap !important;\r\n}\r\n#ColorKey{\r\n  z-index:99;\r\n  margin: 5px;\r\n  width: 100%;\r\n  padding: 2px 5px;\r\n  position: absolute;\r\n  display:inline-block;\r\n  bottom: 2%;\r\n  overflow: hidden !important;\r\n  text-overflow: ellipsis !important;\r\n  table-layout:fixed !important;\r\n  white-space: nowrap !important;\r\n}\r\n#Download{\r\n  z-index: 99;\r\n  top: 5px;\r\n  position: absolute;\r\n  right: 120px;\r\n  width: 32px;\r\n  height: 32px;\r\n  font-size: 16px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  border-radius: 14%;\r\n  padding: 0;\r\n  vertical-align: middle;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/viewer/viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"cesiumContainer\" (click)=\"select();showAttribs($event)\" (mousemove)=\"Colortext();\"> -->\r\n<div id=\"cesiumContainer\" (click)=\"select()\">\r\n  <!-- <button class=\"cesium-button cesium-button-toolbar\" (click)=\"save_geojson()\" id=\"Download\"><i class=\"fa fa-download\"></i></button> -->\r\n</div>"

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
    // private mode: string;
    // private _index: number;
    // private _ShowColorBar: boolean;
    // private _ColorKey: string;
    // private _ExtrudeKey: string;
    function ViewerComponent(injector, myElement) {
        var _this = _super.call(this, injector) || this;
        _this.selectEntity = null;
        _this.myElement = myElement;
        return _this;
    }
    ViewerComponent.prototype.ngOnInit = function () {
        // //pass mode to dataService
        // this.mode = this.dataService.getmode();
        if (this.dataService.getViewer() === undefined) {
            this.CreateViewer();
        }
        // get rules
        this.dataService.readRules();
        // //pass data to dataService
        this.data = this.dataService.getGsModel();
        // //load data
        this.LoadData(this.data);
    };
    ViewerComponent.prototype.notify = function (message) {
        if (message === "model_update") {
            this.data = this.dataService.getGsModel();
            try {
                if (this.dataService.getViewer() === undefined) {
                    this.CreateViewer();
                }
                this.LoadData(this.data);
            }
            catch (ex) {
                console.log(ex);
            }
        }
    };
    //create cesium viewer and change home button funciton
    ViewerComponent.prototype.CreateViewer = function () {
        var viewer = new Cesium.Viewer("cesiumContainer", {
            infoBox: false,
            showRenderLoopErrors: false,
            orderIndependentTranslucency: false,
            baseLayerPicker: false,
            fullscreenButton: false,
            automaticallyTrackDataSourceClocks: false,
            animation: false,
            shadows: true,
            scene3DOnly: true,
            selectionIndicator: false,
            geocoder: false,
        });
        viewer.scene.imageryLayers.removeAll();
        viewer.scene.globe.baseColor = Cesium.Color.GRAY;
        // viewer.scene.contextOptions = {webgl: {antialias: false}};
        document.getElementsByClassName("cesium-viewer-bottom")[0].remove();
        var self = this;
        viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function (e) {
            e.cancel = true;
            viewer.zoomTo(self.dataService.getcesiumpromise());
        });
        this.dataService.setViewer(viewer);
    };
    //Cesium geoJson to load data and check mode
    ViewerComponent.prototype.LoadData = function (data) {
        if (this.data !== undefined) {
            // console.log("Gen geom");
            /////// INITIALISING VIEWER ////////
            var viewer_1 = this.dataService.getViewer();
            viewer_1.dataSources.removeAll({ destroy: true });
            /////// OBTAINING DATA ////////
            var context_1 = this;
            var promise_1 = context_1.cityJSONService.genGeom(data);
            if (promise_1 === undefined) {
                promise_1 = context_1.cityGMLService.genGeom(data);
            }
            promise_1.then(function (datasource) {
                // console.log(context.cityGMLService.getCount());
                context_1.cesiumGeomService.clearDataSource();
                context_1.data = null;
                viewer_1.dataSources.add(datasource);
                console.log("Done");
            });
            this.dataService.setcesiumpromise(promise_1);
            var promise2_1 = viewer_1.zoomTo(promise_1);
            promise2_1.then(function () {
                document.getElementById("overlay").style.display = "none";
                document.getElementById("loader").style.display = "none";
                promise2_1 = null;
            });
            var _HeightKey = [];
            /////// THIS IS FOR THE ZOOM TO HOME BUTTON ///////
            viewer_1.homeButton.viewModel.command.beforeExecute.addEventListener(function (e) {
                e.cancel = true;
                // document.getElementById("overlay").style.display = "block";
                // document.getElementById("loader").style.display = "block";
                // console.log("block")
                promise2_1 = viewer_1.zoomTo(promise_1);
                // console.log("zoom")
                // promise2.then(()=>{
                //   document.getElementById("overlay").style.display = "none";
                //   document.getElementById("loader").style.display = "none";
                //   console.log("none")
                //   promise2 = null;
                // })
            });
            // if(this.mode === "editor") {
            //   this._ShowColorBar = false;
            //   this._index = 1;
            // }
            // if(this.mode === "viewer") {
            //   // this.dataService.LoadJSONData();
            //   // this.dataArr = this.dataService.get_PuData();
            //   this._index = 3;
            // }
            // if(this.mode === "cityjson") {
            //   this._ShowColorBar = false;
            //   this._index = 1;
            // }
            // this.Colortext();
        }
    };
    //create color bar and text at bottom of viewer
    // public Colortext() {
    //   if(this.dataArr !== undefined) {
    //     if(this._index !== this.dataService.get_index()) {
    //       this._index = this.dataService.get_index();
    //       // if(this._index === 1) {this.dataArr = this.dataService.get_ViData();
    //       // } else if(this._index === 3) {this.dataArr = this.dataService.get_PuData();}
    //     }
    //     const propertyname = this.dataArr["ColorKey"];
    //     const texts = this.dataArr["ColorText"].sort();
    //     const _Max: number = this.dataArr["ColorMax"];
    //     const _Min: number = this.dataArr["ColorMin"];
    //     if(this.mode === "viewer") {
    //       this._ColorKey = this.dataArr["ColorKey"];
    //       this._ExtrudeKey = this.dataArr["ExtrudeKey"];
    //     }
    //     this.texts = undefined;
    //     this._Cattexts = [];
    //     this._CatNumtexts = [];
    //     let _ColorKey: any;
    //     let _ChromaScale = chroma.scale("SPECTRAL");
    //     if(this.dataArr["ColorInvert"] === true) {_ChromaScale = chroma.scale("SPECTRAL").domain([1,0]);}
    //     this._Colorbar = [];
    //     for(let i = 79;i>-1;i--) {
    //       this._Colorbar.push(_ChromaScale(i/80));
    //     }
    //     if(typeof(texts[0]) === "number") {
    //       this.texts = [Number(_Min.toFixed(2))];
    //       for(let i = 1;i<10;i++) {
    //         this.texts.push(Number((_Min+(_Max-_Min)*(i/10)).toFixed(2)));
    //       }
    //       this.texts.push(Number(_Max.toFixed(2)));
    //       for(let i = 0;i<this.texts.length;i++) {
    //         if(this.texts[i]/1000000000>1) {
    //           this.texts[i] = String(Number((this.texts[i]/1000000000).toFixed(3))).concat("B");
    //         } else if(this.texts[i]/1000000>1) {
    //           this.texts[i] = String(Number((this.texts[i]/1000000).toFixed(3))).concat("M");
    //         } else if(this.texts[i]/1000>1) {
    //           this.texts[i] = String(Number(((this.texts[i]/1000)).toFixed(3))).concat("K");
    //         }
    //       }
    //     }
    //     if(typeof(texts[0]) === "string") {
    //       if(texts.length<=12) {
    //         for(let j = 0;j<texts.length;j++) {
    //           _ColorKey = [];
    //           _ColorKey.text = texts[j];
    //           _ColorKey.color = _ChromaScale (1 - (j / texts.length));//_ChromaScale(j/texts.length);
    //           this._Cattexts.push(_ColorKey);
    //         }
    //       } else {
    //         for(let j = 0;j<this._Colorbar.length;j++) {
    //           _ColorKey = [];
    //           if(j === 0) {_ColorKey.text = texts[j];} else if(j === this._Colorbar.length-1) {
    //             if(texts[texts.length-1] !== null) {_ColorKey.text = texts[texts.length-1];
    //             } else {_ColorKey.text = texts[texts.length-2];}
    //           } else { _ColorKey.text = null;}
    //           _ColorKey.color = this._Colorbar[j];
    //           this._CatNumtexts.push(_ColorKey);
    //         }
    //       }
    //     }
    //   }
    //   if(this._ShowColorBar === false) {
    //     this._Cattexts = undefined;
    //     this._Colorbar = undefined;
    //   }
    // }
    //click building to select and  pass whole entity to dataService
    ViewerComponent.prototype.select = function () {
        event.stopPropagation();
        var viewer = this.dataService.getViewer(); //this.viewer;
        if (this.selectEntity !== undefined && this.selectEntity !== null) {
            this.selectEntity._children[0].polygon.material.color.intervals.get(0).data = this.material;
        }
        if (viewer.selectedEntity !== undefined && viewer.selectedEntity.polygon !== null) {
            this.dataService.set_SelectedEntity(viewer.selectedEntity._parent);
            this.selectEntity = viewer.selectedEntity._parent;
            this.material = this.selectEntity._children[0].polygon.material.color.intervals.get(0).data;
            this.selectEntity._children[0].polygon.material.color.intervals.get(0).data = Cesium.Color.BLUE.withAlpha(this.material.alpha);
            //get properties
        }
        else {
            this.dataService.set_SelectedEntity(undefined);
            this.selectEntity = undefined;
            this.material = undefined;
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