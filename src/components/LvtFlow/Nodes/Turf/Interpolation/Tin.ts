import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Tin: LvtNodeDef = {
  _id: "Tin",
  ui: {
    title: "Tin",
    description: "Takes a set of points and creates a Triangulated Irregular Network , or a TIN for short, returned as a collection of Polygons. These are often used for developing elevation contour maps or stepped heat visualizations.",
  },
  portsIn: [
    {
      name: "points",
      dataType: "Turf.FeatureCollection <Point>",
    },{
      name: "z",
      dataType: "Turf.(String)",
    },
  ],
  portsOut: [
    {
      name: "Tin",
      dataType: "Turf.FeatureCollection <Polygon>",
    },
  ],
  rule: (_points: any, _z: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.tin, [_points, _z]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Tin", ["points", "z"]);
    return node;
  },
};

export default Tin;