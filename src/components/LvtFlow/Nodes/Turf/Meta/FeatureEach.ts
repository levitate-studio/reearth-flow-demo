import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const FeatureEach: LvtNodeDef = {
  _id: "FeatureEach",
  ui: {
    title: "FeatureEach",
    description: "Iterate over features in any GeoJSON object, similar to Array.forEach.",
  },
  portsIn: [
    {
      name: "geojson",
      dataType: "Turf.(FeatureCollection|Feature|Geometry)",
    },{
      name: "callback",
      dataType: "Turf.Function",
    },
  ],
  portsOut: [
    {
      name: "FeatureEach",
      dataType: "Turf.undefined",
    },
  ],
  rule: (_geojson: any, _callback: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.featureEach, [_geojson, _callback]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "FeatureEach", ["geojson", "callback"]);
    return node;
  },
};

export default FeatureEach;