import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const PolygonTangents: LvtNodeDef = {
  _id: "PolygonTangents",
  ui: {
    title: "PolygonTangents",
    description: "Finds the tangents of a (Multi)Polygon from a Point.",
  },
  portsIn: [
    {
      name: "pt",
      dataType: "Turf.Coord",
    },{
      name: "polygon",
      dataType: "Turf.Feature <(Polygon|MultiPolygon)>",
    },
  ],
  portsOut: [
    {
      name: "PolygonTangents",
      dataType: "Turf.FeatureCollection <Point>",
    },
  ],
  rule: (_pt: any, _polygon: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.polygonTangents, [_pt, _polygon]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "PolygonTangents", ["pt", "polygon"]);
    return node;
  },
};

export default PolygonTangents;