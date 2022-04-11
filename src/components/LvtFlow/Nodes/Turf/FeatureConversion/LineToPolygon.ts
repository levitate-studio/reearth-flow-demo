import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const LineToPolygon: LvtNodeDef = {
  _id: "LineToPolygon",
  ui: {
    title: "LineToPolygon",
    description: "Converts (Multi)LineString(s) to Polygon(s).",
  },
  portsIn: [
    {
      name: "lines",
      dataType: "Turf.(FeatureCollection|Feature <(LineString|MultiLineString)>)",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "LineToPolygon",
      dataType: "Turf.Feature <(Polygon|MultiPolygon)>",
    },
  ],
  rule: (_lines: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.lineToPolygon, [_lines, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "LineToPolygon", ["lines", "options"]);
    return node;
  },
};

export default LineToPolygon;