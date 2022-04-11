import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const NearestPoint: LvtNodeDef = {
  _id: "NearestPoint",
  ui: {
    title: "NearestPoint",
    description: "Takes a reference point and a FeatureCollection of Features with Point geometries and returns the point from the FeatureCollection closest to the reference. This calculation is geodesic.",
  },
  portsIn: [
    {
      name: "targetPoint",
      dataType: "Turf.Coord",
    },{
      name: "points",
      dataType: "Turf.FeatureCollection <Point>",
    },
  ],
  portsOut: [
    {
      name: "NearestPoint",
      dataType: "Turf.Feature <Point>",
    },
  ],
  rule: (_targetPoint: any, _points: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.nearestPoint, [_targetPoint, _points]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "NearestPoint", ["targetPoint", "points"]);
    return node;
  },
};

export default NearestPoint;