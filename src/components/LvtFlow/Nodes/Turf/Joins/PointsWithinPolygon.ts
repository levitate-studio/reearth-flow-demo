import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const PointsWithinPolygon: LvtNodeDef = {
  _id: "PointsWithinPolygon",
  ui: {
    title: "PointsWithinPolygon",
    description: "Finds Points or MultiPoint coordinate positions that fall within (Multi)Polygon(s).",
  },
  portsIn: [
    {
      name: "points",
      dataType: "Turf.(Feature|FeatureCollection <(Point|MultiPoint)>)",
    },{
      name: "polygons",
      dataType: "Turf.(FeatureCollection|Geometry|Feature <(Polygon|MultiPolygon)>)",
    },
  ],
  portsOut: [
    {
      name: "PointsWithinPolygon",
      dataType: "Turf.FeatureCollection <(Point|MultiPoint)>",
    },
  ],
  rule: (_points: any, _polygons: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.pointsWithinPolygon, [_points, _polygons]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "PointsWithinPolygon", ["points", "polygons"]);
    return node;
  },
};

export default PointsWithinPolygon;