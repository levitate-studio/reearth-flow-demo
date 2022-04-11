import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const RandomPosition: LvtNodeDef = {
  _id: "RandomPosition",
  ui: {
    title: "RandomPosition",
    description: "Returns a random position within a box.",
  },
  portsIn: [
    {
      name: "bbox",
      dataType: "Turf.Array <number>",
    },
  ],
  portsOut: [
    {
      name: "RandomPosition",
      dataType: "Turf.Array <number>",
    },
  ],
  rule: (_bbox: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.randomPosition, [_bbox]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "RandomPosition", ["bbox"]);
    return node;
  },
};

export default RandomPosition;