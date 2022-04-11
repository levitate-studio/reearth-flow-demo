import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Square: LvtNodeDef = {
  _id: "Square",
  ui: {
    title: "Square",
    description: "Takes a bounding box and calculates the minimum square bounding box that would contain the input.",
  },
  portsIn: [
    {
      name: "bbox",
      dataType: "Turf.BBox",
    },
  ],
  portsOut: [
    {
      name: "Square",
      dataType: "Turf.BBox",
    },
  ],
  rule: (_bbox: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.square, [_bbox]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Square", ["bbox"]);
    return node;
  },
};

export default Square;