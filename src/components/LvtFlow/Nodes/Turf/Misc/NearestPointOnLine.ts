import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const NearestPointOnLine: LvtNodeDef = {
  _id: "NearestPointOnLine",
  ui: {
    title: "NearestPointOnLine",
    description: "Takes a Point and a LineString and calculates the closest Point on the (Multi)LineString.",
  },
  portsIn: [
    {
      name: "lines",
      dataType: "Turf.(Geometry|Feature <(LineString|MultiLineString)>)",
    },{
      name: "pt",
      dataType: "Turf.(Geometry|Feature <Point>|Array <number>)",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "NearestPointOnLine",
      dataType: "Turf.Feature <Point>",
    },
  ],
  rule: (_lines: any, _pt: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.nearestPointOnLine, [_lines, _pt, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "NearestPointOnLine", ["lines", "pt", "options"]);
    return node;
  },
};

export default NearestPointOnLine;