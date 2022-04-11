import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const ToMercator: LvtNodeDef = {
  _id: "ToMercator",
  ui: {
    title: "ToMercator",
    description: "Converts a WGS84 GeoJSON object into Mercator (EPSG:900913) projection",
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
      name: "ToMercator",
      dataType: "Turf.GeoJSON",
    },
  ],
  rule: (_geojson: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.toMercator, [_geojson, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "ToMercator", ["geojson", "options"]);
    return node;
  },
};

export default ToMercator;