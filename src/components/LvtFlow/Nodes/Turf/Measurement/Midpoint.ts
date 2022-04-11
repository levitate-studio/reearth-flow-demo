import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Midpoint: LvtNodeDef = {
  _id: "Midpoint",
  ui: {
    title: "Midpoint",
    description: "Takes two points and returns a point midway between them. The midpoint is calculated geodesically, meaning the curvature of the earth is taken into account.",
  },
  portsIn: [
    {
      name: "point1",
      dataType: "Turf.Coord",
    },{
      name: "point2",
      dataType: "Turf.Coord",
    },
  ],
  portsOut: [
    {
      name: "Midpoint",
      dataType: "Turf.Feature <Point>",
    },
  ],
  rule: (_point1: any, _point2: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.midpoint, [_point1, _point2]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Midpoint", ["point1", "point2"]);
    return node;
  },
};

export default Midpoint;