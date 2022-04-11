import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Destination: LvtNodeDef = {
  _id: "Destination",
  ui: {
    title: "Destination",
    description: "Takes a Point and calculates the location of a destination point given a distance in degrees, radians, miles, or kilometers; and bearing in degrees. This uses the Haversine formula to account for global curvature.",
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
      name: "Destination",
      dataType: "Turf.Feature <Point>",
    },
  ],
  rule: (_origin: any, _distance: any, _bearing: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.destination, [_origin, _distance, _bearing, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Destination", ["origin", "distance", "bearing", "options"]);
    return node;
  },
};

export default Destination;