import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Envelope: LvtNodeDef = {
  _id: "Envelope",
  ui: {
    title: "Envelope",
    description: "Takes any number of features and returns a rectangular Polygon that encompasses all vertices.",
  },
  portsIn: [
    {
      name: "geojson",
      dataType: "Turf.GeoJSON",
    },
  ],
  portsOut: [
    {
      name: "Envelope",
      dataType: "Turf.Feature <Polygon>",
    },
  ],
  rule: (_geojson: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.envelope, [_geojson]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Envelope", ["geojson"]);
    return node;
  },
};

export default Envelope;