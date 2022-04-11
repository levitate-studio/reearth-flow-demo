import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const LineChunk: LvtNodeDef = {
  _id: "LineChunk",
  ui: {
    title: "LineChunk",
    description: "Divides a LineString into chunks of a specified length. If the line is shorter than the segment length then the original line is returned.",
  },
  portsIn: [
    {
      name: "geojson",
      dataType: "Turf.(FeatureCollection|Geometry|Feature <(LineString|MultiLineString)>)",
    },{
      name: "segmentLength",
      dataType: "Turf.number",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "LineChunk",
      dataType: "Turf.FeatureCollection <LineString>",
    },
  ],
  rule: (_geojson: any, _segmentLength: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.lineChunk, [_geojson, _segmentLength, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "LineChunk", ["geojson", "segmentLength", "options"]);
    return node;
  },
};

export default LineChunk;