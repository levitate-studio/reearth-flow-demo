import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const MultiPoint: LvtNodeDef = {
  _id: "MultiPoint",
  ui: {
    title: "MultiPoint",
    description: "Creates a Feature<MultiPoint> based on a coordinate array. Properties can be added optionally.",
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
      name: "MultiPoint",
      dataType: "Turf.Feature <MultiPoint>",
    },
  ],
  rule: (_coordinates: any, _properties: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.multiPoint, [_coordinates, _properties, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "MultiPoint", ["coordinates", "properties", "options"]);
    return node;
  },
};

export default MultiPoint;