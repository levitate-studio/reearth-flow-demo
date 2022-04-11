import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const GeomEach: LvtNodeDef = {
  _id: "GeomEach",
  ui: {
    title: "GeomEach",
    description: "Iterate over each geometry in any GeoJSON object, similar to Array.forEach()",
  },
  portsIn: [
    {
      name: "geojson",
      dataType: "Turf.(FeatureCollection|Feature|Geometry)",
    },{
      name: "callback",
      dataType: "Turf.Function",
    },
  ],
  portsOut: [
    {
      name: "GeomEach",
      dataType: "Turf.undefined",
    },
  ],
  rule: (_geojson: any, _callback: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.geomEach, [_geojson, _callback]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "GeomEach", ["geojson", "callback"]);
    return node;
  },
};

export default GeomEach;