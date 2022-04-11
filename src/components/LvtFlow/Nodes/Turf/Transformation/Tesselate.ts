import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Tesselate: LvtNodeDef = {
  _id: "Tesselate",
  ui: {
    title: "Tesselate",
    description: "Tesselates a Feature<Polygon> into a FeatureCollection<Polygon> of triangles using earcut.",
  },
  portsIn: [
    {
      name: "poly",
      dataType: "Turf.Feature <Polygon>",
    },
  ],
  portsOut: [
    {
      name: "Tesselate",
      dataType: "Turf.FeatureCollection <Polygon>",
    },
  ],
  rule: (_poly: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.tesselate, [_poly]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Tesselate", ["poly"]);
    return node;
  },
};

export default Tesselate;