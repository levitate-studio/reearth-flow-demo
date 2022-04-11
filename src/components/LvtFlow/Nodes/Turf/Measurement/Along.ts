import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Along: LvtNodeDef = {
  _id: "Along",
  ui: {
    title: "Along",
    description: "Takes a LineString and returns a Point at a specified distance along the line.",
  },
  portsIn: [
    {
      name: "line",
      dataType: "Turf.Feature <LineString>",
    },{
      name: "distance",
      dataType: "Turf.number",
    },{
      name: "options",
      dataType: "Turf.(Object)",
    },
  ],
  portsOut: [
    {
      name: "Along",
      dataType: "Turf.Feature <Point>",
    },
  ],
  rule: (_line: any, _distance: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.along, [_line, _distance, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Along", ["line", "distance", "options"]);
    return node;
  },
};

export default Along;