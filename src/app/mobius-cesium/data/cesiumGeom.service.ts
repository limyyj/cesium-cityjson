import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import {Subject} from "rxjs/Subject";
import * as chroma from "chroma-js";
import proj4 from "proj4";
import * as earcut from "earcut";

@Injectable()
export class CesiumGeomService {
	private dataSource: any;
  private parent_ids: string[];
  private total_count: number;
  private prop_ids: object;

  /* Initialise datasource and other data
     Called by CityGMLservice and CityJSONservice when new file is loaded */
  public initialiseCesium(): void {
    // initialise and suspend datasource
    this.dataSource = new Cesium.CustomDataSource();
    this.suspendDataSource();
    // initialise/reset id arrays and counter
    this.parent_ids = [];
    this.total_count = 0;
    this.prop_ids = {};
  }

  /* Get datasource
     Returns: datasource
     Called by CityGMLservice and CityJSONservice when file completely generated */
  public getDataSource(): any {
    return this.dataSource;
  }

  /* Clears datasource after adding to viewer
     Called in viewer.component */
  public clearDataSource(): void {
    this.dataSource = null;
  }

  /* Suspend and resume tracking of datasource so that it doesn't update while adding entities
     Called by CityGMLservice and CityJSONservice when new file is loaded and completely generated respectively */
  public suspendDataSource(): void {
    this.dataSource.entities.suspendEvents();
  }
  public resumeDataSource(): void {
    this.dataSource.entities.resumeEvents();
  }

  /* Gets id arrays and counter
     Called by cityjson.component for filters */
  public getIds(): string[] {
    // return this.srftype_ids;
    return this.parent_ids;
  }
  public getCount(): number {
    // return this.srftype_count;
    return this.total_count;
  }
  public getPropIds(): object {
    return this.prop_ids;
  }

  /* Add ID of parent entity to a list and update polygon count
     - for looping through in filters because only parent entities have properties and control visibility (no need to look at children)
     Params: Surface type of element
             id of entity
             number of polygons in entity*/
  private addId(id,count): void {
    this.parent_ids.push(id);
    this.total_count += count;
  }

  /* Add key:value pairs (property_name : [property_value]) to prop_ids
     If key already exists, adds property value to array (string), replace min/max value if applicable (number)
     if property value already exists under same key, nothing is added
     - for selection dropdown boxes in filters
     Params: Object containing key:value pairs of properties*/
  private addPropId(props): void {
    const cats = Object.keys(props);
    for (let x of cats) {
      const ids = Object.keys(props[x]);
      for (let i of ids) {
        // Prop type is number:
        // if PropId doesn't exist in array, add pair
        if (typeof props[i] === "number") {
          if (this.prop_ids[i] === undefined) {
            this.prop_ids[i] = [props[x][i],props[x][i]];
          }
          // if it already exists then check min and max and replace
          else {
            if (props[x][i] < this.prop_ids[x][i][0]) {
              this.prop_ids[i][0] = props[x][i];
            } else if (props[x][i] > this.prop_ids[i][1]) {
              this.prop_ids[i][1] = props[x][i];
            }
          }
        }

        // Prop type is string:
        // if PropId doesn't exist in array, add it
        else {
          if (this.prop_ids[i] === undefined) {
            this.prop_ids[i] = [props[x][i]];
          }
          // if it already exists then push id to existing arr
          else {
            if (this.prop_ids[i].includes(props[x][i]) === false) {
              this.prop_ids[i].push(props[x][i]);
            }
          }
        } 
      }
    }
  }

  /* Creates and returns a color property that is linked to a time interval (from year 1000 to 3000)
     - allows color changes to update more quickly (than static color property)
     Params: Color Property (Static)
     Returns: Color Property (TimeInterval) */
  private timeIntervalColor(color): object {
    var property = new Cesium.TimeIntervalCollectionProperty(Cesium.Color);
    var timeInterval = new Cesium.TimeInterval({
        start : Cesium.JulianDate.fromDate(new Date(1000, 1, 1, 1)),
        stop : Cesium.JulianDate.fromDate(new Date(3000, 1, 1, 1)),
        isStartIncluded : true,
        isStopIncluded : false,
        data : color
    });
    property.intervals.addInterval(timeInterval);
    return new Cesium.ColorMaterialProperty(property);
  }

  /* Calculates and returns the max diff between list of values
     - finds the smallest and largest values
     - for determining axis and horizontal
     Params: Array of numbers
     Returns: Max difference between all input values */
  private maxDiff(values): number {
    let maxval = values[0];
    let minval = values[0];
    for (let i = 1 ; i < values.length ; i++) {
      if (values[i] > maxval) {
        maxval = values[i];
      }
      if (values[i] < minval) {
        minval = values[i];
      }
    }
    return (maxval - minval);
  }

  /* Determines axis/plane to use for earcut triangulation (takes the one with larger difference in coordinates)
     Params: Array of points (eg. [[0,0,0],[0,1,0],[0,1,1],[0,0,0]])
     Returns: 0 for xz plane, 1 for yz plane
     Uses: - maxDiff */
  private determineAxis(points): number {
    // split coords and determine plane
    const x = [];
    const y = [];
    points.forEach((coords) => {
      x.push(coords[0]);
      y.push(coords[1]);
    });

    if (this.maxDiff(x) > this.maxDiff(y)) {
      // x axis seems to be wider, use xz axis
      return 0;
    } else {
      // y axis seems to be wider, use yz axis
      return 1;
    }
  }

  /* Checks if a polygon is horizontal or not by the max difference in z coordinates
     Params: Array of points (eg. [[0,0,0],[0,1,0],[0,1,1],[0,0,0]])
     Returns: true if horizontal, false if not horizontal
     Uses: - maxDiff*/
  private checkHorizontal(ring): boolean {
    const z = [];
    ring.forEach((coords) => {
      z.push(coords[2]);
    });

    if (this.maxDiff(z) < 0.001) {
      return true;
    } else {
      return false;
    }
  }

  /* Creates and returns a flat list of coordinates from an array of points
     Params: Array of points (eg. [[0,0,0],[0,1,0],[0,1,1],[0,0,0]])
     Returns: Flat array of coordinates (eg. [0,0,0,0,1,0,0,1,1,0,0,0]) */
  private flatCoords(ring): number[] {
    const flat = [];
    ring.forEach((point) => {
      flat.push(...point);
    });
    return flat;
  }

  /* Determines and returns the color property for a polygon based on its surface type
     Params: Surface type
     Returns: Color Property (Static)
     Uses: - timeIntervalColor */
  private determineColor(surface_type): object {
    let colour = undefined;
    if (surface_type.includes("Wall")) {
      colour = this.timeIntervalColor(Cesium.Color.SILVER);
    } else if (surface_type.includes("Roof")) {
      colour = this.timeIntervalColor(Cesium.Color.RED);
    } else if (surface_type.includes("Room")) {
      colour = this.timeIntervalColor(Cesium.Color.WHITE.withAlpha(0.3));
    } else if (surface_type.includes("Window")) {
      colour = this.timeIntervalColor(Cesium.Color.LIGHTBLUE.withAlpha(0.5));
    } else if (surface_type.includes("Door")) {
      colour = this.timeIntervalColor(Cesium.Color.TAN);
    } else {
      colour = this.timeIntervalColor(Cesium.Color.WHITE);
    }
    return colour;
  }

  /* Adds a polygon entity to the datasource (sets color and parent)
     Params: Array of array of points (first array is outer ring, subsequent arrays are holes)
             Colour property (Static/TimeInterval)
             Parent entity
     Uses: - flatCoords */
  private addCesiumPoly(polygon, color, parent): void {
    // Create polygon heirarchy
    const ext = Cesium.Cartesian3.fromDegreesArrayHeights(this.flatCoords(polygon[0]));
    let p_hierarchy = new Cesium.PolygonHierarchy(ext);
    if (polygon.length > 0) {
      const int = [];
      for (let i = 1 ; i < polygon.length ; i++) {
        int.push(new Cesium.PolygonHierarchy(Cesium.Cartesian3.fromDegreesArrayHeights(this.flatCoords(polygon[i]))));
      }
      p_hierarchy = new Cesium.PolygonHierarchy(ext,int);
    }

    // Create polygon
    const poly = this.dataSource.entities.add({
      parent : parent,
      polygon : {
        hierarchy : p_hierarchy,
        perPositionHeight : true,
        material : color,
        outline : false,
      },
    });
  }

  /* Triangulates polygon and adds a group of polygons to datsource
     Params: Array of array of points (first array is outer ring, subsequent arrays are holes)
             Colour property (Static/TimeInterval)
             Parent entity
     Uses: - determineAxis
           - earcut
           - addCesiumPoly */
  private addTriPoly(polygon, colour, parent): void {
    // Determine if triangulation should be done on XZ or YZ plane (if X or Y axis have a larger range of values)
    // 0 for XZ, 1 for YZ
    const axis = this.determineAxis(polygon[0]);
    let other_axis = 0;
    if (axis === 0) {
      other_axis = 1;
    }

    // Get points from respective axes and put into earcut format
    const poly_vertices = [];
    const holes = [];
    const other_coords = [];
    let count = 0;
    for (let i = 0 ; i < polygon.length ; i++) {
      polygon[i].forEach((coords) => {
        poly_vertices.push(coords[axis],coords[2]);
        other_coords.push(coords[other_axis]);
        count++;
      });
      if (i !== (polygon.length - 1)) {
        holes.push(count);
      }
    }

    // Throw into earcut
    const tri_index = earcut(poly_vertices,holes);

    // Create polys in Cesium
    for (let p = 0 ; p < tri_index.length ; p = p + 3) {
      const points = [];

      //Get coordinates for each point
      for (let j = p; j < (p + 3) ; j++) {
        const i = tri_index[j];
        let coord = [undefined,undefined,undefined];
        coord[other_axis] = other_coords[i];
        coord[axis] = poly_vertices[i*2];
        coord[2] = poly_vertices[(i*2) + 1];
        points.push(coord);
      }
      this.addCesiumPoly([points], colour, parent);
    }
  }

////////////////////////// Main functions, TODO: better structure management ///////////////////////////

  // creates a parent entity containing all the entities that make up a multipolygon (called for JSON)
  public genMultiPoly(polygon, colour, properties): void {
    // Create parent to hold polygon
    const parent = this.dataSource.entities.add(new Cesium.Entity());
    let CScolour = undefined;
    if (colour !== undefined) {
      CScolour = this.timeIntervalColor(colour);
    } else {
      CScolour = this.determineColor(properties["Surface Properties"]["Surface_Type"]);
    }
    // If horizontal use Cesium Polygon Entity API directly
    if (this.checkHorizontal(polygon[0]) === true) {
      this.addCesiumPoly(polygon, CScolour, parent);
    }
    // If not, triangulate with earcut into individual entities
    else {
      this.addTriPoly(polygon, CScolour, parent);
    }
    // Add properties and add entity ID to respective group for filter
    parent.properties = new Cesium.PropertyBag(properties);
    this.addId(parent.id,parent._children.length);
    this.addPropId(properties);
  }

  // creates parent entities containing all the entities that make up each surface in a solid (called for JSON)
  public genSolid(solid, colour, surface_type, properties): void {
    for (var i = 0 ; i < solid.length ; i++) {
      // Create parent to hold polygons
      const parent = this.dataSource.entities.add(new Cesium.Entity());
      const polygon = solid[i];
      let CScolour = undefined;
      if (colour[i] !== undefined) {
        CScolour = this.timeIntervalColor(colour[i]);
      } else {
        CScolour = this.determineColor(surface_type[i]);
      }
      // Edit properties
      properties["Surface Properties"].Surface_Type = surface_type[i];
      // If horizontal use Cesium Polygon Entity API directly
      if (this.checkHorizontal(polygon[0]) === true) {
        this.addCesiumPoly(polygon, CScolour, parent);
      }
      // If not, triangulate with earcut into individual entities
      else {
        this.addTriPoly(polygon, CScolour, parent);
      }
      // Add properties and add entity ID to respective group for filter
      parent.properties = new Cesium.PropertyBag(properties);
      this.addId(parent.id,parent._children.length);
      this.addPropId(properties);
    }
  }

  // creates a parent entity containing all the entities that make up an element (eg. 1 wall) (called for GML)
  public genSolidGrouped(solid, colour, properties, srftype): void {
    // Create parent to hold polygons
    const parent = this.dataSource.entities.add(new Cesium.Entity());
    let CScolour = undefined;
    if (colour !== undefined) {
      CScolour = this.timeIntervalColor(colour);
    } else {
      CScolour = this.determineColor(srftype);
    }
    for (var i = 0 ; i < solid.length ; i++) {
      const polygon = solid[i];
      // If horizontal use Cesium Polygon Entity API directly
      if (this.checkHorizontal(polygon[0]) === true) {
        this.addCesiumPoly(polygon, CScolour, parent);
      }
      // If not, triangulate with earcut into individual entities
      else {
        this.addTriPoly(polygon, CScolour, parent);
      }
    }
    // Add properties and add entity ID to respective group for filter
    parent.properties = new Cesium.PropertyBag(properties);
    this.addId(parent.id,parent._children.length);
    this.addPropId(properties);
  }
}
