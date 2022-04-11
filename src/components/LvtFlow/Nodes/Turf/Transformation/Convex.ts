import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Convex: LvtNodeDef = {
  _id: "Convex",
  ui: {
    title: "Convex",
    description: "Takes a Feature or a FeatureCollection and returns a convex hull Polygon.",
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
      name: "Convex",
      dataType: "Turf.Feature <Polygon>",
    },
  ],
  rule: (_geojson: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.convex, [_geojson, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Convex", ["geojson", "options"]);
    return node;
  },
};

export default Convex;