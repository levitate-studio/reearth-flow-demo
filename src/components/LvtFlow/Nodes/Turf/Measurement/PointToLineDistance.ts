import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const PointToLineDistance: LvtNodeDef = {
  _id: "PointToLineDistance",
  ui: {
    title: "PointToLineDistance",
    description: "Returns the minimum distance between a Point and a LineString , being the distance from a line the minimum distance between the point and any segment of the LineString.",
  },
  portsIn: [
    {
      name: "pt",
      dataType: "Turf.(Feature <Point>|Array <number>)",
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
      name: "PointToLineDistance",
      dataType: "Turf.number",
    },
  ],
  rule: (_pt: any, _line: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.pointToLineDistance, [_pt, _line, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "PointToLineDistance", ["pt", "line", "options"]);
    return node;
  },
};

export default PointToLineDistance;