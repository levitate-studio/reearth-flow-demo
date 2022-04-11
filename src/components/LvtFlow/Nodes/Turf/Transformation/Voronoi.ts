import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Voronoi: LvtNodeDef = {
  _id: "Voronoi",
  ui: {
    title: "Voronoi",
    description: "Takes a FeatureCollection of points, and a bounding box, and returns a FeatureCollection of Voronoi polygons.",
  },
  portsIn: [
    {
      name: "points",
      dataType: "Turf.FeatureCollection <Point>",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "Voronoi",
      dataType: "Turf.FeatureCollection <Polygon>",
    },
  ],
  rule: (_points: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.voronoi, [_points, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Voronoi", ["points", "options"]);
    return node;
  },
};

export default Voronoi;