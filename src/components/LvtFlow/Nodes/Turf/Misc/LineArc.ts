import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const LineArc: LvtNodeDef = {
  _id: "LineArc",
  ui: {
    title: "LineArc",
    description: "Creates a circular arc, of a circle of the given radius and center point, between bearing1 and bearing2; 0 bearing is North of center point, positive clockwise.",
  },
  portsIn: [
    {
      name: "center",
      dataType: "Turf.Coord",
    },{
      name: "radius",
      dataType: "Turf.number",
    },{
      name: "bearing1",
      dataType: "Turf.number",
    },{
      name: "bearing2",
      dataType: "Turf.number",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "LineArc",
      dataType: "Turf.Feature <LineString>",
    },
  ],
  rule: (_center: any, _radius: any, _bearing1: any, _bearing2: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.lineArc, [_center, _radius, _bearing1, _bearing2, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "LineArc", ["center", "radius", "bearing1", "bearing2", "options"]);
    return node;
  },
};

export default LineArc;