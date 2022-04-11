import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Buffer: LvtNodeDef = {
  _id: "Buffer",
  ui: {
    title: "Buffer",
    description: "Calculates a buffer for input features for a given radius. Units supported are miles, kilometers, and degrees.",
  },
  portsIn: [
    {
      name: "geojson",
      dataType: "Turf.(FeatureCollection|Geometry|Feature <any>)",
    },{
      name: "radius",
      dataType: "Turf.number",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "Buffer",
      dataType: "Turf.(FeatureCollection|Feature <(Polygon|MultiPolygon)>|undefined)",
    },
  ],
  rule: (_geojson: any, _radius: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.buffer, [_geojson, _radius, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Buffer", ["geojson", "radius", "options"]);
    return node;
  },
};

export default Buffer;