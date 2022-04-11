import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const TransformTranslate: LvtNodeDef = {
  _id: "TransformTranslate",
  ui: {
    title: "TransformTranslate",
    description: "Moves any geojson Feature or Geometry of a specified distance along a Rhumb Line on the provided direction angle.",
  },
  portsIn: [
    {
      name: "geojson",
      dataType: "Turf.GeoJSON",
    },{
      name: "distance",
      dataType: "Turf.number",
    },{
      name: "direction",
      dataType: "Turf.number",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "TransformTranslate",
      dataType: "Turf.GeoJSON",
    },
  ],
  rule: (_geojson: any, _distance: any, _direction: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.transformTranslate, [_geojson, _distance, _direction, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "TransformTranslate", ["geojson", "distance", "direction", "options"]);
    return node;
  },
};

export default TransformTranslate;