import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const PointGrid: LvtNodeDef = {
  _id: "PointGrid",
  ui: {
    title: "PointGrid",
    description: "Creates a Point grid from a bounding box, FeatureCollection or Feature.",
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
      name: "PointGrid",
      dataType: "Turf.FeatureCollection <Point>",
    },
  ],
  rule: (_bbox: any, _cellSide: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.pointGrid, [_bbox, _cellSide, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "PointGrid", ["bbox", "cellSide", "options"]);
    return node;
  },
};

export default PointGrid;