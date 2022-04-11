import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Isolines: LvtNodeDef = {
  _id: "Isolines",
  ui: {
    title: "Isolines",
    description: "Takes a grid FeatureCollection of Point features with z-values and an array of value breaks and generates isolines.",
  },
  portsIn: [
    {
      name: "pointGrid",
      dataType: "Turf.FeatureCollection <Point>",
    },{
      name: "breaks",
      dataType: "Turf.Array <number>",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "Isolines",
      dataType: "Turf.FeatureCollection <MultiLineString>",
    },
  ],
  rule: (_pointGrid: any, _breaks: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.isolines, [_pointGrid, _breaks, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Isolines", ["pointGrid", "breaks", "options"]);
    return node;
  },
};

export default Isolines;