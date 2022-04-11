import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Interpolate: LvtNodeDef = {
  _id: "Interpolate",
  ui: {
    title: "Interpolate",
    description: "Takes a set of points and estimates their 'property' values on a grid using the Inverse Distance Weighting (IDW) method.",
  },
  portsIn: [
    {
      name: "points",
      dataType: "Turf.FeatureCollection <Point>",
    },{
      name: "cellSize",
      dataType: "Turf.number",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "Interpolate",
      dataType: "Turf.FeatureCollection <(Point|Polygon)>",
    },
  ],
  rule: (_points: any, _cellSize: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.interpolate, [_points, _cellSize, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Interpolate", ["points", "cellSize", "options"]);
    return node;
  },
};

export default Interpolate;