import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const ToWgs84: LvtNodeDef = {
  _id: "ToWgs84",
  ui: {
    title: "ToWgs84",
    description: "Converts a Mercator (EPSG:900913) GeoJSON object into WGS84 projection",
  },
  portsIn: [
    {
      name: "geojson",
      dataType: "Turf.(GeoJSON|Position)",
    },{
      name: "options",
      dataType: "Turf.(Object)",
    },
  ],
  portsOut: [
    {
      name: "ToWgs84",
      dataType: "Turf.GeoJSON",
    },
  ],
  rule: (_geojson: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.toWgs84, [_geojson, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "ToWgs84", ["geojson", "options"]);
    return node;
  },
};

export default ToWgs84;