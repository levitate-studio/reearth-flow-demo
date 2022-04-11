import Combine from "./Combine"
import Explode from "./Explode"
import Flatten from "./Flatten"
import LineToPolygon from "./LineToPolygon"
import LineToPolygonOptions from "./LineToPolygonOptions"
import Polygonize from "./Polygonize"
import PolygonToLine from "./PolygonToLine"
import PolygonToLineOptions from "./PolygonToLineOptions"

export default {
  _id: "FeatureConversion",
  children: [
    Combine,
    Explode,
    Flatten,
    LineToPolygon,
    LineToPolygonOptions,
    Polygonize,
    PolygonToLine,
    PolygonToLineOptions
  ],
};
  