import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const GetCoord: LvtNodeDef = {
  _id: "GetCoord",
  ui: {
    title: "GetCoord",
    description: "Unwrap a coordinate from a Point Feature, Geometry or a single coordinate.",
  },
  portsIn: [
    {
      name: "coord",
      dataType: "Turf.(Array <number>|Geometry <Point>|Feature <Point>)",
    },
  ],
  portsOut: [
    {
      name: "GetCoord",
      dataType: "Turf.Array <number>",
    },
  ],
  rule: (_coord: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.getCoord, [_coord]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "GetCoord", ["coord"]);
    return node;
  },
};

export default GetCoord;