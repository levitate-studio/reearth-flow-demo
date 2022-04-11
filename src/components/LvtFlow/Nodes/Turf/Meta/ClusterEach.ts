import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const ClusterEach: LvtNodeDef = {
  _id: "ClusterEach",
  ui: {
    title: "ClusterEach",
    description: "clusterEach",
  },
  portsIn: [
    {
      name: "geojson",
      dataType: "Turf.FeatureCollection",
    },{
      name: "property",
      dataType: "Turf.(string|number)",
    },{
      name: "callback",
      dataType: "Turf.Function",
    },
  ],
  portsOut: [
    {
      name: "ClusterEach",
      dataType: "Turf.undefined",
    },
  ],
  rule: (_geojson: any, _property: any, _callback: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.clusterEach, [_geojson, _property, _callback]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "ClusterEach", ["geojson", "property", "callback"]);
    return node;
  },
};

export default ClusterEach;