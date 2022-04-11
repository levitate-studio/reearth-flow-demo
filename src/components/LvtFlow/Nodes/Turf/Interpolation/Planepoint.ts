import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Planepoint: LvtNodeDef = {
  _id: "Planepoint",
  ui: {
    title: "Planepoint",
    description: "Takes a triangular plane as a Polygon and a Point within that triangle and returns the z-value at that point. The Polygon should have properties a , b , and c that define the values at its three corners. Alternatively, the z-values of each triangle point can be provided by their respective 3rd coordinate if their values are not provided as properties.",
  },
  portsIn: [
    {
      name: "point",
      dataType: "Turf.Coord",
    },{
      name: "triangle",
      dataType: "Turf.Feature <Polygon>",
    },
  ],
  portsOut: [
    {
      name: "Planepoint",
      dataType: "Turf.number",
    },
  ],
  rule: (_point: any, _triangle: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.planepoint, [_point, _triangle]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Planepoint", ["point", "triangle"]);
    return node;
  },
};

export default Planepoint;