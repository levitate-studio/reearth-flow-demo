import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const PointOnFeature: LvtNodeDef = {
  _id: "PointOnFeature",
  ui: {
    title: "PointOnFeature",
    description: "Takes a Feature or FeatureCollection and returns a Point guaranteed to be on the surface of the feature.",
  },
  portsIn: [
    {
      name: "geojson",
      dataType: "Turf.GeoJSON",
    },
  ],
  portsOut: [
    {
      name: "PointOnFeature",
      dataType: "Turf.Feature <Point>",
    },
  ],
  rule: (_geojson: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.pointOnFeature, [_geojson]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "PointOnFeature", ["geojson"]);
    return node;
  },
};

export default PointOnFeature;