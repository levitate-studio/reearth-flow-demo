import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Isobands: LvtNodeDef = {
  _id: "Isobands",
  ui: {
    title: "Isobands",
    description: "Takes a square or rectangular grid FeatureCollection of Point features with z-values and an array of value breaks and generates filled contour isobands.",
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
      name: "Isobands",
      dataType: "Turf.FeatureCollection <MultiPolygon>",
    },
  ],
  rule: (_pointGrid: any, _breaks: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.isobands, [_pointGrid, _breaks, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Isobands", ["pointGrid", "breaks", "options"]);
    return node;
  },
};

export default Isobands;