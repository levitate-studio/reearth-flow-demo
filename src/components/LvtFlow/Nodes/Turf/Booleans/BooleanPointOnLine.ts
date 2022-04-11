import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const BooleanPointOnLine: LvtNodeDef = {
  _id: "BooleanPointOnLine",
  ui: {
    title: "BooleanPointOnLine",
    description: "Returns true if a point is on a line. Accepts a optional parameter to ignore the start and end vertices of the linestring.",
  },
  portsIn: [
    {
      name: "pt",
      dataType: "Turf.Coord",
    },{
      name: "line",
      dataType: "Turf.Feature <LineString>",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "BooleanPointOnLine",
      dataType: "Turf.boolean",
    },
  ],
  rule: (_pt: any, _line: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.booleanPointOnLine, [_pt, _line, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "BooleanPointOnLine", ["pt", "line", "options"]);
    return node;
  },
};

export default BooleanPointOnLine;