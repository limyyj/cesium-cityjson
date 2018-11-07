# cesium-viewer

This is a viewer for CityJSON and CityGML files based on [Cesium](https://cesiumjs.org/).
This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

It aims to open and view models with the ability to:
* View models on a map (if location is provided)
* Select objects and view attributes
* Filter visible objects

## Supported CityGML Files

Currently the viewer can open CityGML files of up to about 50MB in size, containing up to about 70,000 polygons (after triangulation).

It supports only objects located within a cityObjectMember or featureMember and of types:
* WallSurface
* FloorSurface
* RoofSurface
* Room
* Window
* Door

It supports geometry in the form of:
* Triangle
* Polygon

Using coordinates in the form of:
* posList
* pos

CRS and Local Engineering CRS are supported if defined in the Envelope of CityModel.
* CRS supports EPSG lookup on [EPSG.io](http://epsg.io/)
* Local Engineering CRS is currently assumed to be defined in WGS84

Support for other native CityGML elements is in process.
ADE support is in process and taken to be all information outside of currently supported native CityGML elements.

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

## Test Build

https://limyyj.github.io/cesium-cityjson/
Built in examples available in the 'More' tab.
