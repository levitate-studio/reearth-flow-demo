import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const ClustersDbscan: LvtNodeDef = {
  _id: "ClustersDbscan",
  ui: {
    title: "ClustersDbscan",
    description: "Takes a set of points and partition them into clusters according to https://en.wikipedia.org/wiki/DBSCAN data clustering algorithm.",
  },
  portsIn: [
    {
      name: "points",
      dataType: "Turf.FeatureCollection <Point>",
    },{
      name: "maxDistance",
      dataType: "Turf.number",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "ClustersDbscan",
      dataType: "Turf.FeatureCollection <Point>",
    },
  ],
  rule: (_points: any, _maxDistance: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.clustersDbscan, [_points, _maxDistance, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "ClustersDbscan", ["points", "maxDistance", "options"]);
    return node;
  },
};

export default ClustersDbscan;