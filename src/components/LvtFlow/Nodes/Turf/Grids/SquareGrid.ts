import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const SquareGrid: LvtNodeDef = {
  _id: "SquareGrid",
  ui: {
    title: "SquareGrid",
    description: "Creates a square grid from a bounding box.",
  },
  portsIn: [
    {
      name: "bbox",
      dataType: "Turf.Array <number>",
    },{
      name: "cellSide",
      dataType: "Turf.number",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "SquareGrid",
      dataType: "Turf.FeatureCollection <Polygon>",
    },
  ],
  rule: (_bbox: any, _cellSide: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.squareGrid, [_bbox, _cellSide, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "SquareGrid", ["bbox", "cellSide", "options"]);
    return node;
  },
};

export default SquareGrid;