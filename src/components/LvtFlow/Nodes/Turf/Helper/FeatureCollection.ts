import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const FeatureCollection: LvtNodeDef = {
  _id: "FeatureCollection",
  ui: {
    title: "FeatureCollection",
    description: "Takes one or more Features and creates a FeatureCollection.",
  },
  portsIn: [
    {
      name: "features",
      dataType: "Turf.Array <Feature>",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "FeatureCollection",
      dataType: "Turf.FeatureCollection",
    },
  ],
  rule: (_features: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.featureCollection, [_features, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "FeatureCollection", ["features", "options"]);
    return node;
  },
};

export default FeatureCollection;