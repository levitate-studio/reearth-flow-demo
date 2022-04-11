import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Distance: LvtNodeDef = {
  _id: "Distance",
  ui: {
    title: "Distance",
    description: "Calculates the distance between two points in degrees, radians, miles, or kilometers. This uses the Haversine formula to account for global curvature.",
  },
  portsIn: [
    {
      name: "from",
      dataType: "Turf.(Coord|Point)",
    },{
      name: "to",
      dataType: "Turf.(Coord|Point)",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "Distance",
      dataType: "Turf.number",
    },
  ],
  rule: (_from: any, _to: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.distance, [_from, _to, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Distance", ["from", "to", "options"]);
    return node;
  },
};

export default Distance;