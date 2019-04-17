# cesium-viewer

This is a viewer for CityJSON and CityGML files based on [Cesium](https://cesiumjs.org/).
This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

It aims to open and view models with the ability to:
* View models on a map (if location is provided)
* Select objects and view attributes (including ade attributes)
* Filter visible objects

## Supported CityGML Files

Currently the viewer can open CityGML files of up to about 50MB in size, containing up to about 70,000 polygons (after triangulation).

It supports objects located within the Building Module of the CityGML schema:
* Rules have been generated for CityGML 2.0 as well as two snapshot versions of CityGML 3.0
* The respective rule can be specified in data.service.ts as needed

It supports viewing of attributes (including any ADE)
* Attributes are flattened where possible to expose more attributes for viewing when an object is selected (eg. address is flattened to remove its structure)
* ADE support is done by extracting any content outside of the CityGML schema as an attribute
* It cannot support reading references/xlinks as attributes at the moment 
* It cannot support ADE geometry at the moment
* In this altered version, if a node contains 2 attributes and no textContent, it is read as 1 property (where the 1st attribute is the name and the 2nd is the value)

It supports CRS in the form of EPSG and Local Engineering CRS
* CRS information is extracted from the envelope/boundedBy of the cityModel
* It does not support positioning using height datums
* In this altered version, the default value is for SVY21/EPSG:3414, and with conversion from milimeters to meters, to support the CityGML models we have

## Supported CityJSON Files

Currently the viewer can open CityJSON files of up to about 10MB in size, containing up to about 50,000 polygons (after triangulation).

It supports:
* BuildingPart and BuildingInstallation
* GeometryInstance (in uncompressed files)
* Transform (for compression)
* EPSG lookup on [EPSG.io](http://epsg.io/)

## Depends on

* [Cesium](https://cesiumjs.org/)
* [Proj4j](https://github.com/Proj4J/proj4j)
* [Earcut](https://github.com/mapbox/earcut)
