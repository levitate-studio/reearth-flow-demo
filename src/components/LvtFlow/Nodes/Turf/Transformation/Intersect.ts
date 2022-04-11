import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Intersect: LvtNodeDef = {
  _id: "Intersect",
  ui: {
    title: "Intersect",
    description: "Takes two polygon or multi-polygon geometries and finds their polygonal intersection. If they don't intersect, returns null.",
  },
  portsIn: [
    {
      name: "poly1",
      dataType: "Turf.Feature <(Polygon|MultiPolygon)>",
    },{
      name: "poly2",
      dataType: "Turf.Feature <(Polygon|MultiPolygon)>",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "Intersect",
      dataType: "Turf.(Feature|null)",
    },
  ],
  rule: (_poly1: any, _poly2: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.intersect, [_poly1, _poly2, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Intersect", ["poly1", "poly2", "options"]);
    return node;
  },
};

export default Intersect;