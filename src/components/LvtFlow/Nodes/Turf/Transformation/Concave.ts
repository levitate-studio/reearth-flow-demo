import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Concave: LvtNodeDef = {
  _id: "Concave",
  ui: {
    title: "Concave",
    description: "Takes a set of points and returns a concave hull Polygon or MultiPolygon. Internally, this uses turf-tin to generate geometries.",
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
      name: "Concave",
      dataType: "Turf.(Feature <(Polygon|MultiPolygon)>|null)",
    },
  ],
  rule: (_points: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.concave, [_points, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Concave", ["points", "options"]);
    return node;
  },
};

export default Concave;