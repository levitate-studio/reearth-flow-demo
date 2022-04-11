import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Simplify: LvtNodeDef = {
  _id: "Simplify",
  ui: {
    title: "Simplify",
    description: "Takes a GeoJSON object and returns a simplified version. Internally uses simplify-js to perform simplification using the Ramer-Douglas-Peucker algorithm.",
  },
  portsIn: [
    {
      name: "geojson",
      dataType: "Turf.GeoJSON",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "Simplify",
      dataType: "Turf.GeoJSON",
    },
  ],
  rule: (_geojson: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.simplify, [_geojson, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Simplify", ["geojson", "options"]);
    return node;
  },
};

export default Simplify;