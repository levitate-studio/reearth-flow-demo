import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const LineString: LvtNodeDef = {
  _id: "LineString",
  ui: {
    title: "LineString",
    description: "Creates a LineString Feature from an Array of Positions.",
  },
  portsIn: [
    {
      name: "coordinates",
      dataType: "Turf.Array <Array <number>>",
    },{
      name: "properties",
      dataType: "Turf.Object",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "LineString",
      dataType: "Turf.Feature <LineString>",
    },
  ],
  rule: (_coordinates: any, _properties: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.lineString, [_coordinates, _properties, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "LineString", ["coordinates", "properties", "options"]);
    return node;
  },
};

export default LineString;