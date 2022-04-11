import FeatureCollection from "./FeatureCollection"
import FeatureCollectionOptions from "./FeatureCollectionOptions"
import Feature from "./Feature"
import FeatureOptions from "./FeatureOptions"
import GeometryCollection from "./GeometryCollection"
import GeometryCollectionOptions from "./GeometryCollectionOptions"
import LineString from "./LineString"
import LineStringOptions from "./LineStringOptions"
import MultiLineString from "./MultiLineString"
import MultiLineStringOptions from "./MultiLineStringOptions"
import MultiPoint from "./MultiPoint"
import MultiPointOptions from "./MultiPointOptions"
import MultiPolygon from "./MultiPolygon"
import MultiPolygonOptions from "./MultiPolygonOptions"
import Point from "./Point"
import PointOptions from "./PointOptions"
import Polygon from "./Polygon"
import PolygonOptions from "./PolygonOptions"

export default {
  _id: "Helper",
  children: [
    FeatureCollection,
    FeatureCollectionOptions,
    Feature,
    FeatureOptions,
    GeometryCollection,
    GeometryCollectionOptions,
    LineString,
    LineStringOptions,
    MultiLineString,
    MultiLineStringOptions,
    MultiPoint,
    MultiPointOptions,
    MultiPolygon,
    MultiPolygonOptions,
    Point,
    PointOptions,
    Polygon,
    PolygonOptions
  ],
};
  