import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const BooleanConcave: LvtNodeDef = {
  _id: "BooleanConcave",
  ui: {
    title: "BooleanConcave",
    description: "Takes a polygon and return true or false as to whether it is concave or not.",
  },
  portsIn: [
    {
      name: "polygon",
      dataType: "Turf.Feature <Polygon>",
    },
  ],
  portsOut: [
    {
      name: "BooleanConcave",
      dataType: "Turf.boolean",
    },
  ],
  rule: (_polygon: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.booleanConcave, [_polygon]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "BooleanConcave", ["polygon"]);
    return node;
  },
};

export default BooleanConcave;