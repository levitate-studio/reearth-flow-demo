import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const HexGrid: LvtNodeDef = {
  _id: "HexGrid",
  ui: {
    title: "HexGrid",
    description: "Takes a bounding box and the diameter of the cell and returns a FeatureCollection of flat-topped hexagons or triangles ( Polygon features) aligned in an `odd-q` vertical grid as described in Hexagonal Grids.",
  },
  portsIn: [
    {
      name: "bbox",
      dataType: "Turf.BBox",
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
      name: "HexGrid",
      dataType: "Turf.FeatureCollection <Polygon>",
    },
  ],
  rule: (_bbox: any, _cellSide: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.hexGrid, [_bbox, _cellSide, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "HexGrid", ["bbox", "cellSide", "options"]);
    return node;
  },
};

export default HexGrid;