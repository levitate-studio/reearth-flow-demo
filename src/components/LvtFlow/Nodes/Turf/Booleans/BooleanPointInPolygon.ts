import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const BooleanPointInPolygon: LvtNodeDef = {
  _id: "BooleanPointInPolygon",
  ui: {
    title: "BooleanPointInPolygon",
    description: "Takes a Point and a Polygon or MultiPolygon and determines if the point resides inside the polygon. The polygon can be convex or concave. The function accounts for holes.",
  },
  portsIn: [
    {
      name: "point",
      dataType: "Turf.Coord",
    },{
      name: "polygon",
      dataType: "Turf.Feature <(Polygon|MultiPolygon)>",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "BooleanPointInPolygon",
      dataType: "Turf.boolean",
    },
  ],
  rule: (_point: any, _polygon: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.booleanPointInPolygon, [_point, _polygon, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "BooleanPointInPolygon", ["point", "polygon", "options"]);
    return node;
  },
};

export default BooleanPointInPolygon;