import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const LineOffset: LvtNodeDef = {
  _id: "LineOffset",
  ui: {
    title: "LineOffset",
    description: "Takes a line and returns a line at offset by the specified distance.",
  },
  portsIn: [
    {
      name: "geojson",
      dataType: "Turf.(Geometry|Feature <(LineString|MultiLineString)>)",
    },{
      name: "distance",
      dataType: "Turf.number",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "LineOffset",
      dataType: "Turf.Feature <(LineString|MultiLineString)>",
    },
  ],
  rule: (_geojson: any, _distance: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.lineOffset, [_geojson, _distance, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "LineOffset", ["geojson", "distance", "options"]);
    return node;
  },
};

export default LineOffset;