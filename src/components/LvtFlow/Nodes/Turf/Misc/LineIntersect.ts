import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const LineIntersect: LvtNodeDef = {
  _id: "LineIntersect",
  ui: {
    title: "LineIntersect",
    description: "Takes any LineString or Polygon GeoJSON and returns the intersecting point(s).",
  },
  portsIn: [
    {
      name: "line1",
      dataType: "Turf.GeoJSON",
    },{
      name: "line2",
      dataType: "Turf.GeoJSON",
    },
  ],
  portsOut: [
    {
      name: "LineIntersect",
      dataType: "Turf.FeatureCollection <Point>",
    },
  ],
  rule: (_line1: any, _line2: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.lineIntersect, [_line1, _line2]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "LineIntersect", ["line1", "line2"]);
    return node;
  },
};

export default LineIntersect;