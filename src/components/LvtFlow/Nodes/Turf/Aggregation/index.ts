import Collect from "./Collect"
import ClustersDbscan from "./ClustersDbscan"
import ClustersDbscanOptions from "./ClustersDbscanOptions"
import ClustersKmeans from "./ClustersKmeans"
import ClustersKmeansOptions from "./ClustersKmeansOptions"

export default {
  _id: "Aggregation",
  children: [
    Collect,
    ClustersDbscan,
    ClustersDbscanOptions,
    ClustersKmeans,
    ClustersKmeansOptions
  ],
};
  