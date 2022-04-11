import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const FlattenReduce: LvtNodeDef = {
  _id: "FlattenReduce",
  ui: {
    title: "FlattenReduce",
    description: "Reduce flattened features in any GeoJSON object, similar to Array.reduce().",
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
      name: "FlattenReduce",
      dataType: "Turf.*",
    },
  ],
  rule: (_geojson: any, _callback: any, _initialValue: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.flattenReduce, [_geojson, _callback, _initialValue]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "FlattenReduce", ["geojson", "callback", "initialValue"]);
    return node;
  },
};

export default FlattenReduce;