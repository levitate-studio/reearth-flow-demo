import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const TransformScale: LvtNodeDef = {
  _id: "TransformScale",
  ui: {
    title: "TransformScale",
    description: "Scale a GeoJSON from a given point by a factor of scaling (ex: factor=2 would make the GeoJSON 200% larger). If a FeatureCollection is provided, the origin point will be calculated based on each individual Feature.",
  },
  portsIn: [
    {
      name: "geojson",
      dataType: "Turf.GeoJSON",
    },{
      name: "factor",
      dataType: "Turf.number",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "TransformScale",
      dataType: "Turf.GeoJSON",
    },
  ],
  rule: (_geojson: any, _factor: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.transformScale, [_geojson, _factor, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "TransformScale", ["geojson", "factor", "options"]);
    return node;
  },
};

export default TransformScale;