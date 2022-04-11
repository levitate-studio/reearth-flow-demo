import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const TransformRotate: LvtNodeDef = {
  _id: "TransformRotate",
  ui: {
    title: "TransformRotate",
    description: "Rotates any geojson Feature or Geometry of a specified angle, around its centroid or a given pivot point.",
  },
  portsIn: [
    {
      name: "geojson",
      dataType: "Turf.GeoJSON",
    },{
      name: "angle",
      dataType: "Turf.number",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "TransformRotate",
      dataType: "Turf.GeoJSON",
    },
  ],
  rule: (_geojson: any, _angle: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.transformRotate, [_geojson, _angle, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "TransformRotate", ["geojson", "angle", "options"]);
    return node;
  },
};

export default TransformRotate;