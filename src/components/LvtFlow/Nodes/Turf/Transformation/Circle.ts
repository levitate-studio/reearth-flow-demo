import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Circle: LvtNodeDef = {
  _id: "Circle",
  ui: {
    title: "Circle",
    description: "Takes a Point and calculates the circle polygon given a radius in degrees, radians, miles, or kilometers; and steps for precision.",
  },
  portsIn: [
    {
      name: "center",
      dataType: "Turf.(Feature <Point>|Array <number>)",
    },{
      name: "radius",
      dataType: "Turf.number",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "Circle",
      dataType: "Turf.Feature <Polygon>",
    },
  ],
  rule: (_center: any, _radius: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.circle, [_center, _radius, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Circle", ["center", "radius", "options"]);
    return node;
  },
};

export default Circle;