import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Feature: LvtNodeDef = {
  _id: "Feature",
  ui: {
    title: "Feature",
    description: "Wraps a GeoJSON Geometry in a GeoJSON Feature.",
  },
  portsIn: [
    {
      name: "geometry",
      dataType: "Turf.Geometry",
    },{
      name: "properties",
      dataType: "Turf.Object",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "Feature",
      dataType: "Turf.Feature",
    },
  ],
  rule: (_geometry: any, _properties: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.feature, [_geometry, _properties, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Feature", ["geometry", "properties", "options"]);
    return node;
  },
};

export default Feature;