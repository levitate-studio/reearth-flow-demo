import CoordAll from "./CoordAll"
import CoordEach from "./CoordEach"
import CoordReduce from "./CoordReduce"
import FeatureEach from "./FeatureEach"
import FeatureReduce from "./FeatureReduce"
import FlattenReduce from "./FlattenReduce"
import GetCoord from "./GetCoord"
import GetCoords from "./GetCoords"
import GetGeom from "./GetGeom"
import GetType from "./GetType"
import GeomEach from "./GeomEach"
import GeomReduce from "./GeomReduce"
import PropEach from "./PropEach"
import PropReduce from "./PropReduce"
import SegmentEach from "./SegmentEach"
import SegmentReduce from "./SegmentReduce"
import GetCluster from "./GetCluster"
import ClusterEach from "./ClusterEach"
import ClusterReduce from "./ClusterReduce"

export default {
  _id: "Meta",
  children: [
    CoordAll,
    CoordEach,
    CoordReduce,
    FeatureEach,
    FeatureReduce,
    FlattenReduce,
    GetCoord,
    GetCoords,
    GetGeom,
    GetType,
    GeomEach,
    GeomReduce,
    PropEach,
    PropReduce,
    SegmentEach,
    SegmentReduce,
    GetCluster,
    ClusterEach,
    ClusterReduce
  ],
};
  