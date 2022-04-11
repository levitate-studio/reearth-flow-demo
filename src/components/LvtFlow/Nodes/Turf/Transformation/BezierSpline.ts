import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const BezierSpline: LvtNodeDef = {
  _id: "BezierSpline",
  ui: {
    title: "BezierSpline",
    description: "Takes a line and returns a curved version by applying a Bezier spline algorithm.",
  },
  portsIn: [
    {
      name: "line",
      dataType: "Turf.Feature <LineString>",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "BezierSpline",
      dataType: "Turf.Feature <LineString>",
    },
  ],
  rule: (_line: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.bezierSpline, [_line, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "BezierSpline", ["line", "options"]);
    return node;
  },
};

export default BezierSpline;