import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const ClustersKmeans: LvtNodeDef = {
  _id: "ClustersKmeans",
  ui: {
    title: "ClustersKmeans",
    description: "Takes a set of points and partition them into clusters using the k-mean. It uses the k-means algorithm",
  },
  portsIn: [
    {
      name: "points",
      dataType: "Turf.FeatureCollection <Point>",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "ClustersKmeans",
      dataType: "Turf.FeatureCollection <Point>",
    },
  ],
  rule: (_points: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.clustersKmeans, [_points, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "ClustersKmeans", ["points", "options"]);
    return node;
  },
};

export default ClustersKmeans;