import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const PolygonToLine: LvtNodeDef = {
  _id: "PolygonToLine",
  ui: {
    title: "PolygonToLine",
    description: "Converts a Polygon to (Multi)LineString or MultiPolygon to a FeatureCollection of (Multi)LineString.",
  },
  portsIn: [
    {
      name: "poly",
      dataType: "Turf.Feature <(Polygon|MultiPolygon)>",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "PolygonToLine",
      dataType: "Turf.(FeatureCollection|Feature <(LineString|MultiLinestring)>)",
    },
  ],
  rule: (_poly: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.polygonToLine, [_poly, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "PolygonToLine", ["poly", "options"]);
    return node;
  },
};

export default PolygonToLine;