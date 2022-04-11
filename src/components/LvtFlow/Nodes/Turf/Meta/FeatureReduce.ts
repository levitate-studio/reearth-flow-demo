import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const FeatureReduce: LvtNodeDef = {
  _id: "FeatureReduce",
  ui: {
    title: "FeatureReduce",
    description: "Reduce features in any GeoJSON object, similar to Array.reduce().",
  },
  portsIn: [
    {
      name: "geojson",
      dataType: "Turf.(FeatureCollection|Feature|Geometry)",
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
      name: "FeatureReduce",
      dataType: "Turf.*",
    },
  ],
  rule: (_geojson: any, _callback: any, _initialValue: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.featureReduce, [_geojson, _callback, _initialValue]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "FeatureReduce", ["geojson", "callback", "initialValue"]);
    return node;
  },
};

export default FeatureReduce;