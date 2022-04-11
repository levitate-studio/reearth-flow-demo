import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Bearing: LvtNodeDef = {
  _id: "Bearing",
  ui: {
    title: "Bearing",
    description: "Takes two points and finds the geographic bearing between them, i.e. the angle measured in degrees from the north line (0 degrees)",
  },
  portsIn: [
    {
      name: "start",
      dataType: "Turf.Coord",
    },{
      name: "end",
      dataType: "Turf.Coord",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "Bearing",
      dataType: "Turf.number",
    },
  ],
  rule: (_start: any, _end: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.bearing, [_start, _end, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Bearing", ["start", "end", "options"]);
    return node;
  },
};

export default Bearing;