import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const RadiansToDegrees: LvtNodeDef = {
  _id: "RadiansToDegrees",
  ui: {
    title: "RadiansToDegrees",
    description: "Converts an angle in radians to degrees",
  },
  portsIn: [
    {
      name: "radians",
      dataType: "Turf.number",
    },
  ],
  portsOut: [
    {
      name: "RadiansToDegrees",
      dataType: "Turf.number",
    },
  ],
  rule: (_radians: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.radiansToDegrees, [_radians]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "RadiansToDegrees", ["radians"]);
    return node;
  },
};

export default RadiansToDegrees;