import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Difference: LvtNodeDef = {
  _id: "Difference",
  ui: {
    title: "Difference",
    description: "Finds the difference between two polygons by clipping the second polygon from the first.",
  },
  portsIn: [
    {
      name: "polygon1",
      dataType: "Turf.Feature <(Polygon|MultiPolygon)>",
    },{
      name: "polygon2",
      dataType: "Turf.Feature <(Polygon|MultiPolygon)>",
    },
  ],
  portsOut: [
    {
      name: "Difference",
      dataType: "Turf.(Feature <(Polygon|MultiPolygon)>|null)",
    },
  ],
  rule: (_polygon1: any, _polygon2: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.difference, [_polygon1, _polygon2]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Difference", ["polygon1", "polygon2"]);
    return node;
  },
};

export default Difference;