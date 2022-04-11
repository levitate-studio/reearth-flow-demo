import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const LineOverlap: LvtNodeDef = {
  _id: "LineOverlap",
  ui: {
    title: "LineOverlap",
    description: "Takes any LineString or Polygon and returns the overlapping lines between both features.",
  },
  portsIn: [
    {
      name: "line1",
      dataType: "Turf.(Geometry|Feature <(LineString|MultiLineString|Polygon|MultiPolygon)>)",
    },{
      name: "line2",
      dataType: "Turf.(Geometry|Feature <(LineString|MultiLineString|Polygon|MultiPolygon)>)",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "LineOverlap",
      dataType: "Turf.FeatureCollection <LineString>",
    },
  ],
  rule: (_line1: any, _line2: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.lineOverlap, [_line1, _line2, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "LineOverlap", ["line1", "line2", "options"]);
    return node;
  },
};

export default LineOverlap;