import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Truncate: LvtNodeDef = {
  _id: "Truncate",
  ui: {
    title: "Truncate",
    description: "Takes a GeoJSON Feature or FeatureCollection and truncates the precision of the geometry.",
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
      name: "Truncate",
      dataType: "Turf.GeoJSON",
    },
  ],
  rule: (_geojson: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.truncate, [_geojson, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Truncate", ["geojson", "options"]);
    return node;
  },
};

export default Truncate;