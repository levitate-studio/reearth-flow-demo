import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const MultiPolygon: LvtNodeDef = {
  _id: "MultiPolygon",
  ui: {
    title: "MultiPolygon",
    description: "Creates a Feature<MultiPolygon> based on a coordinate array. Properties can be added optionally.",
  },
  portsIn: [
    {
      name: "coordinates",
      dataType: "Turf.Array <Array <Array <Array <number>>>>",
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
      name: "MultiPolygon",
      dataType: "Turf.Feature <MultiPolygon>",
    },
  ],
  rule: (_coordinates: any, _properties: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.multiPolygon, [_coordinates, _properties, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "MultiPolygon", ["coordinates", "properties", "options"]);
    return node;
  },
};

export default MultiPolygon;