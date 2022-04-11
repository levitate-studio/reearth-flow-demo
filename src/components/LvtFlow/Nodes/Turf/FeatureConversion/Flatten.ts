import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Flatten: LvtNodeDef = {
  _id: "Flatten",
  ui: {
    title: "Flatten",
    description: "Flattens any GeoJSON to a FeatureCollection inspired by geojson-flatten.",
  },
  portsIn: [
    {
      name: "geojson",
      dataType: "Turf.GeoJSON",
    },
  ],
  portsOut: [
    {
      name: "Flatten",
      dataType: "Turf.FeatureCollection <any>",
    },
  ],
  rule: (_geojson: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.flatten, [_geojson]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Flatten", ["geojson"]);
    return node;
  },
};

export default Flatten;