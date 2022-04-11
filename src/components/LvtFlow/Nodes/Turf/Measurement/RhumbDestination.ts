import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const RhumbDestination: LvtNodeDef = {
  _id: "RhumbDestination",
  ui: {
    title: "RhumbDestination",
    description: "Returns the destination Point having travelled the given distance along a Rhumb line from the origin Point with the (varant) given bearing.",
  },
  portsIn: [
    {
      name: "origin",
      dataType: "Turf.Coord",
    },{
      name: "distance",
      dataType: "Turf.number",
    },{
      name: "bearing",
      dataType: "Turf.number",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "RhumbDestination",
      dataType: "Turf.Feature <Point>",
    },
  ],
  rule: (_origin: any, _distance: any, _bearing: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.rhumbDestination, [_origin, _distance, _bearing, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "RhumbDestination", ["origin", "distance", "bearing", "options"]);
    return node;
  },
};

export default RhumbDestination;