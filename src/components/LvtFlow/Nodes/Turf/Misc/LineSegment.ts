import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const LineSegment: LvtNodeDef = {
  _id: "LineSegment",
  ui: {
    title: "LineSegment",
    description: "Creates a FeatureCollection of 2-vertex LineString segments from a (Multi)LineString or (Multi)Polygon.",
  },
  portsIn: [
    {
      name: "geojson",
      dataType: "Turf.GeoJSON",
    },
  ],
  portsOut: [
    {
      name: "LineSegment",
      dataType: "Turf.FeatureCollection <LineString>",
    },
  ],
  rule: (_geojson: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.lineSegment, [_geojson]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "LineSegment", ["geojson"]);
    return node;
  },
};

export default LineSegment;