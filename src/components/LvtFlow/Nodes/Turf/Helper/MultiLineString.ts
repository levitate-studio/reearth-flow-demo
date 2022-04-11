import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const MultiLineString: LvtNodeDef = {
  _id: "MultiLineString",
  ui: {
    title: "MultiLineString",
    description: "Creates a Feature<MultiLineString> based on a coordinate array. Properties can be added optionally.",
  },
  portsIn: [
    {
      name: "coordinates",
      dataType: "Turf.Array <Array <Array <number>>>",
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
      name: "MultiLineString",
      dataType: "Turf.Feature <MultiLineString>",
    },
  ],
  rule: (_coordinates: any, _properties: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.multiLineString, [_coordinates, _properties, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "MultiLineString", ["coordinates", "properties", "options"]);
    return node;
  },
};

export default MultiLineString;