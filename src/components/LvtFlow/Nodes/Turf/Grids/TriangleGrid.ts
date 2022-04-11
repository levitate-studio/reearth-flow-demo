import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const TriangleGrid: LvtNodeDef = {
  _id: "TriangleGrid",
  ui: {
    title: "TriangleGrid",
    description: "Takes a bounding box and a cell depth and returns a set of triangular polygons in a grid.",
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
      name: "TriangleGrid",
      dataType: "Turf.FeatureCollection <Polygon>",
    },
  ],
  rule: (_bbox: any, _cellSide: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.triangleGrid, [_bbox, _cellSide, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "TriangleGrid", ["bbox", "cellSide", "options"]);
    return node;
  },
};

export default TriangleGrid;