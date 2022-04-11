import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const RandomPolygon: LvtNodeDef = {
  _id: "RandomPolygon",
  ui: {
    title: "RandomPolygon",
    description: "Returns a random polygon.",
  },
  portsIn: [
    {
      name: "count",
      dataType: "Turf.number",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "RandomPolygon",
      dataType: "Turf.FeatureCollection <Polygon>",
    },
  ],
  rule: (_count: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.randomPolygon, [_count, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "RandomPolygon", ["count", "options"]);
    return node;
  },
};

export default RandomPolygon;