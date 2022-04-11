import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const ClusterReduce: LvtNodeDef = {
  _id: "ClusterReduce",
  ui: {
    title: "ClusterReduce",
    description: "Reduce clusters in GeoJSON Features, similar to Array.reduce()",
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
    },{
      name: "initialValue",
      dataType: "Turf.(*)",
    },
  ],
  portsOut: [
    {
      name: "ClusterReduce",
      dataType: "Turf.*",
    },
  ],
  rule: (_geojson: any, _property: any, _callback: any, _initialValue: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.clusterReduce, [_geojson, _property, _callback, _initialValue]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "ClusterReduce", ["geojson", "property", "callback", "initialValue"]);
    return node;
  },
};

export default ClusterReduce;