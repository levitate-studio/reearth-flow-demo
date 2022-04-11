import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Tag: LvtNodeDef = {
  _id: "Tag",
  ui: {
    title: "Tag",
    description: "Takes a set of points and a set of polygons and/or multipolygons and performs a spatial join.",
  },
  portsIn: [
    {
      name: "points",
      dataType: "Turf.FeatureCollection <Point>",
    },{
      name: "polygons",
      dataType: "Turf.FeatureCollection <(Polygon|MultiPolygon)>",
    },{
      name: "field",
      dataType: "Turf.string",
    },{
      name: "outField",
      dataType: "Turf.string",
    },
  ],
  portsOut: [
    {
      name: "Tag",
      dataType: "Turf.FeatureCollection <Point>",
    },
  ],
  rule: (_points: any, _polygons: any, _field: any, _outField: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.tag, [_points, _polygons, _field, _outField]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Tag", ["points", "polygons", "field", "outField"]);
    return node;
  },
};

export default Tag;