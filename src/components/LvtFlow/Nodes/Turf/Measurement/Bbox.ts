import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Bbox: LvtNodeDef = {
  _id: "Bbox",
  ui: {
    title: "Bbox",
    description: "Takes a set of features, calculates the bbox of all input features, and returns a bounding box.",
  },
  portsIn: [
    {
      name: "geojson",
      dataType: "Turf.GeoJSON",
    },
  ],
  portsOut: [
    {
      name: "Bbox",
      dataType: "Turf.BBox",
    },
  ],
  rule: (_geojson: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.bbox, [_geojson]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Bbox", ["geojson"]);
    return node;
  },
};

export default Bbox;