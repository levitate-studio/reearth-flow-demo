import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Polygon: LvtNodeDef = {
  _id: "Polygon",
  ui: {
    title: "Polygon",
    description: "Creates a Polygon Feature from an Array of LinearRings.",
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
      name: "Polygon",
      dataType: "Turf.Feature <Polygon>",
    },
  ],
  rule: (_coordinates: any, _properties: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.polygon, [_coordinates, _properties, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Polygon", ["coordinates", "properties", "options"]);
    return node;
  },
};

export default Polygon;