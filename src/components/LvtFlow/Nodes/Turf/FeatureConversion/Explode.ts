import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Explode: LvtNodeDef = {
  _id: "Explode",
  ui: {
    title: "Explode",
    description: "Takes a feature or set of features and returns all positions as points.",
  },
  portsIn: [
    {
      name: "geojson",
      dataType: "Turf.GeoJSON",
    },
  ],
  portsOut: [
    {
      name: "Explode",
      dataType: "Turf.FeatureCollection <point>",
    },
  ],
  rule: (_geojson: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.explode, [_geojson]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Explode", ["geojson"]);
    return node;
  },
};

export default Explode;