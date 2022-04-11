import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const DegreesToRadians: LvtNodeDef = {
  _id: "DegreesToRadians",
  ui: {
    title: "DegreesToRadians",
    description: "Converts an angle in degrees to radians",
  },
  portsIn: [
    {
      name: "degrees",
      dataType: "Turf.number",
    },
  ],
  portsOut: [
    {
      name: "DegreesToRadians",
      dataType: "Turf.number",
    },
  ],
  rule: (_degrees: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.degreesToRadians, [_degrees]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "DegreesToRadians", ["degrees"]);
    return node;
  },
};

export default DegreesToRadians;