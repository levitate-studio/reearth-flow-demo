import Kinks from "./Kinks"
import LineArc from "./LineArc"
import LineArcOptions from "./LineArcOptions"
import LineChunk from "./LineChunk"
import LineChunkOptions from "./LineChunkOptions"
import LineIntersect from "./LineIntersect"
import LineOverlap from "./LineOverlap"
import LineOverlapOptions from "./LineOverlapOptions"
import LineSegment from "./LineSegment"
import LineSlice from "./LineSlice"
import LineSliceAlong from "./LineSliceAlong"
import LineSliceAlongOptions from "./LineSliceAlongOptions"
import LineSplit from "./LineSplit"
import Mask from "./Mask"
import NearestPointOnLine from "./NearestPointOnLine"
import NearestPointOnLineOptions from "./NearestPointOnLineOptions"
import Sector from "./Sector"
import SectorOptions from "./SectorOptions"
import ShortestPath from "./ShortestPath"
import ShortestPathOptions from "./ShortestPathOptions"
import UnkinkPolygon from "./UnkinkPolygon"

export default {
  _id: "Misc",
  children: [
    Kinks,
    LineArc,
    LineArcOptions,
    LineChunk,
    LineChunkOptions,
    LineIntersect,
    LineOverlap,
    LineOverlapOptions,
    LineSegment,
    LineSlice,
    LineSliceAlong,
    LineSliceAlongOptions,
    LineSplit,
    Mask,
    NearestPointOnLine,
    NearestPointOnLineOptions,
    Sector,
    SectorOptions,
    ShortestPath,
    ShortestPathOptions,
    UnkinkPolygon
  ],
};
  