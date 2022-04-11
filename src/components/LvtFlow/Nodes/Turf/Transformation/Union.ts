import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Union: LvtNodeDef = {
  _id: "Union",
  ui: {
    title: "Union",
    description: "Takes two (Multi)Polygon(s) and returns a combined polygon. If the input polygons are not contiguous, this function returns a MultiPolygon feature.",
  },
  portsIn: [
    {
      name: "polygon1",
      dataType: "Turf.Feature <(Polygon|MultiPolygon)>",
    },{
      name: "polygon2",
      dataType: "Turf.Feature <(Polygon|MultiPolygon)>",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "Union",
      dataType: "Turf.Feature <(Polygon|MultiPolygon)>",
    },
  ],
  rule: (_polygon1: any, _polygon2: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.union, [_polygon1, _polygon2, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Union", ["polygon1", "polygon2", "options"]);
    return node;
  },
};

export default Union;