import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Point: LvtNodeDef = {
  _id: "Point",
  ui: {
    title: "Point",
    description: "Creates a Point Feature from a Position.",
  },
  portsIn: [
    {
      name: "coordinates",
      dataType: "Turf.Array <number>",
    },
    {
      name: "properties",
      dataType: "Turf.Object",
    },
    {
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "Point",
      dataType: "Turf.Feature <Point>",
    },
  ],
  rule: (_coordinates: any, _properties: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.point, [
        _coordinates,
        _properties,
        _options,
      ]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Point", ["coordinates", "properties", "options"]);
    return node;
  },
};

export default Point;
