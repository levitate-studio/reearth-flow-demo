import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const LineSlice: LvtNodeDef = {
  _id: "LineSlice",
  ui: {
    title: "LineSlice",
    description: "Takes a line , a start Point , and a stop point and returns a subsection of the line in-between those points. The start & stop points don't need to fall exactly on the line.",
  },
  portsIn: [
    {
      name: "startPt",
      dataType: "Turf.Coord",
    },{
      name: "stopPt",
      dataType: "Turf.Coord",
    },{
      name: "line",
      dataType: "Turf.(Feature <LineString>|LineString)",
    },
  ],
  portsOut: [
    {
      name: "LineSlice",
      dataType: "Turf.Feature <LineString>",
    },
  ],
  rule: (_startPt: any, _stopPt: any, _line: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.lineSlice, [_startPt, _stopPt, _line]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "LineSlice", ["startPt", "stopPt", "line"]);
    return node;
  },
};

export default LineSlice;