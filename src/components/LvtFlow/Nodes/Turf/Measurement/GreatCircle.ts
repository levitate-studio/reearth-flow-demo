import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const GreatCircle: LvtNodeDef = {
  _id: "GreatCircle",
  ui: {
    title: "GreatCircle",
    description: "Calculate great circles routes as LineString or MultiLineString. If the start and end points span the antimeridian, the resulting feature will be split into a MultiLineString .",
  },
  portsIn: [
    {
      name: "start",
      dataType: "Turf.Coord",
    },{
      name: "end",
      dataType: "Turf.Coord",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "GreatCircle",
      dataType: "Turf.Feature <(LineString|MultiLineString)>",
    },
  ],
  rule: (_start: any, _end: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.greatCircle, [_start, _end, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "GreatCircle", ["start", "end", "options"]);
    return node;
  },
};

export default GreatCircle;