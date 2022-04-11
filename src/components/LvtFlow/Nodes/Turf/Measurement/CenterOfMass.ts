import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const CenterOfMass: LvtNodeDef = {
  _id: "CenterOfMass",
  ui: {
    title: "CenterOfMass",
    description: "Takes any Feature or a FeatureCollection and returns its center of mass using this formula: Centroid of Polygon.",
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
      name: "CenterOfMass",
      dataType: "Turf.Feature <Point>",
    },
  ],
  rule: (_geojson: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.centerOfMass, [_geojson, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "CenterOfMass", ["geojson", "options"]);
    return node;
  },
};

export default CenterOfMass;