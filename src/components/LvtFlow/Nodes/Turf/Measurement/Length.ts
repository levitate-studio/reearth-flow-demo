import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Length: LvtNodeDef = {
  _id: "Length",
  ui: {
    title: "Length",
    description: "Takes a GeoJSON and measures its length in the specified units, (Multi)Point 's distance are ignored.",
  },
  portsIn: [
    {
      name: "geojson",
      dataType: "Turf.Feature <(LineString|MultiLineString)>",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "Length",
      dataType: "Turf.number",
    },
  ],
  rule: (_geojson: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.length, [_geojson, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Length", ["geojson", "options"]);
    return node;
  },
};

export default Length;