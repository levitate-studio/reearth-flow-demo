import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const RhumbBearing: LvtNodeDef = {
  _id: "RhumbBearing",
  ui: {
    title: "RhumbBearing",
    description: "Takes two points and finds the bearing angle between them along a Rhumb line i.e. the angle measured in degrees start the north line (0 degrees)",
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
      dataType: "Turf.(Object)",
    },
  ],
  portsOut: [
    {
      name: "RhumbBearing",
      dataType: "Turf.number",
    },
  ],
  rule: (_start: any, _end: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.rhumbBearing, [_start, _end, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "RhumbBearing", ["start", "end", "options"]);
    return node;
  },
};

export default RhumbBearing;