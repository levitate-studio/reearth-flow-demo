import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Kinks: LvtNodeDef = {
  _id: "Kinks",
  ui: {
    title: "Kinks",
    description: "Takes a linestring , multi-linestring , multi-polygon or polygon and returns points at all self-intersections.",
  },
  portsIn: [
    {
      name: "featureIn",
      dataType: "Turf.Feature <(LineString|MultiLineString|MultiPolygon|Polygon)>",
    },
  ],
  portsOut: [
    {
      name: "Kinks",
      dataType: "Turf.FeatureCollection <Point>",
    },
  ],
  rule: (_featureIn: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.kinks, [_featureIn]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Kinks", ["featureIn"]);
    return node;
  },
};

export default Kinks;