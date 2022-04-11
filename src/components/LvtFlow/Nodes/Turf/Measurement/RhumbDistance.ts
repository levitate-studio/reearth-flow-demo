import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const RhumbDistance: LvtNodeDef = {
  _id: "RhumbDistance",
  ui: {
    title: "RhumbDistance",
    description: "Calculates the distance along a rhumb line between two points in degrees, radians, miles, or kilometers.",
  },
  portsIn: [
    {
      name: "from",
      dataType: "Turf.Coord",
    },{
      name: "to",
      dataType: "Turf.Coord",
    },{
      name: "options",
      dataType: "Turf.(Object)",
    },
  ],
  portsOut: [
    {
      name: "RhumbDistance",
      dataType: "Turf.number",
    },
  ],
  rule: (_from: any, _to: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.rhumbDistance, [_from, _to, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "RhumbDistance", ["from", "to", "options"]);
    return node;
  },
};

export default RhumbDistance;