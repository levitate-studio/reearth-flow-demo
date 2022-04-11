import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const LineSliceAlong: LvtNodeDef = {
  _id: "LineSliceAlong",
  ui: {
    title: "LineSliceAlong",
    description: "Takes a line , a specified distance along the line to a start Point , and a specified distance along the line to a stop point and returns a subsection of the line in-between those points.",
  },
  portsIn: [
    {
      name: "line",
      dataType: "Turf.(Feature <LineString>|LineString)",
    },{
      name: "startDist",
      dataType: "Turf.number",
    },{
      name: "stopDist",
      dataType: "Turf.number",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "LineSliceAlong",
      dataType: "Turf.Feature <LineString>",
    },
  ],
  rule: (_line: any, _startDist: any, _stopDist: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.lineSliceAlong, [_line, _startDist, _stopDist, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "LineSliceAlong", ["line", "startDist", "stopDist", "options"]);
    return node;
  },
};

export default LineSliceAlong;