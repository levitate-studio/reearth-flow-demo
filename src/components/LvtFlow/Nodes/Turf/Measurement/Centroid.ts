import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Centroid: LvtNodeDef = {
  _id: "Centroid",
  ui: {
    title: "Centroid",
    description: "Takes one or more features and calculates the centroid using the mean of all vertices. This lessens the effect of small islands and artifacts when calculating the centroid of a set of polygons.",
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
      name: "Centroid",
      dataType: "Turf.Feature <Point>",
    },
  ],
  rule: (_geojson: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.centroid, [_geojson, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Centroid", ["geojson", "options"]);
    return node;
  },
};

export default Centroid;