import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const BooleanOverlap: LvtNodeDef = {
  _id: "BooleanOverlap",
  ui: {
    title: "BooleanOverlap",
    description: "Compares two geometries of the same dimension and returns true if their intersection set results in a geometry different from both but of the same dimension. It applies to Polygon/Polygon, LineString/LineString, Multipoint/Multipoint, MultiLineString/MultiLineString and MultiPolygon/MultiPolygon.",
  },
  portsIn: [
    {
      name: "feature1",
      dataType: "Turf.(Geometry|Feature <(LineString|MultiLineString|Polygon|MultiPolygon)>)",
    },{
      name: "feature2",
      dataType: "Turf.(Geometry|Feature <(LineString|MultiLineString|Polygon|MultiPolygon)>)",
    },
  ],
  portsOut: [
    {
      name: "BooleanOverlap",
      dataType: "Turf.boolean",
    },
  ],
  rule: (_feature1: any, _feature2: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.booleanOverlap, [_feature1, _feature2]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "BooleanOverlap", ["feature1", "feature2"]);
    return node;
  },
};

export default BooleanOverlap;