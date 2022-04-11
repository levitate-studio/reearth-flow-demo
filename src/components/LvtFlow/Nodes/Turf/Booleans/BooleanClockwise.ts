import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const BooleanClockwise: LvtNodeDef = {
  _id: "BooleanClockwise",
  ui: {
    title: "BooleanClockwise",
    description: "Takes a ring and return true or false whether or not the ring is clockwise or counter-clockwise.",
  },
  portsIn: [
    {
      name: "line",
      dataType: "Turf.(Feature <LineString>|LineString|Array <Array <number>>)",
    },
  ],
  portsOut: [
    {
      name: "BooleanClockwise",
      dataType: "Turf.boolean",
    },
  ],
  rule: (_line: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.booleanClockwise, [_line]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "BooleanClockwise", ["line"]);
    return node;
  },
};

export default BooleanClockwise;