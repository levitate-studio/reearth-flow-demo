import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const RandomLineString: LvtNodeDef = {
  _id: "RandomLineString",
  ui: {
    title: "RandomLineString",
    description: "Returns a random linestring.",
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
      name: "RandomLineString",
      dataType: "Turf.FeatureCollection <LineString>",
    },
  ],
  rule: (_count: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.randomLineString, [_count, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "RandomLineString", ["count", "options"]);
    return node;
  },
};

export default RandomLineString;