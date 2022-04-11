import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const RandomPoint: LvtNodeDef = {
  _id: "RandomPoint",
  ui: {
    title: "RandomPoint",
    description: "Returns a random point.",
  },
  portsIn: [
    {
      name: "count",
      dataType: "Turf.number",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "RandomPoint",
      dataType: "Turf.FeatureCollection <Point>",
    },
  ],
  rule: (_count: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.randomPoint, [_count, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "RandomPoint", ["count", "options"]);
    return node;
  },
};

export default RandomPoint;