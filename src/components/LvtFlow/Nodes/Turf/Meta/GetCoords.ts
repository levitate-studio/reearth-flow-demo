import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const GetCoords: LvtNodeDef = {
  _id: "GetCoords",
  ui: {
    title: "GetCoords",
    description: "Unwrap coordinates from a Feature, Geometry Object or an Array",
  },
  portsIn: [
    {
      name: "coords",
      dataType: "Turf.(Array <any>|Geometry|Feature)",
    },
  ],
  portsOut: [
    {
      name: "GetCoords",
      dataType: "Turf.Array <any>",
    },
  ],
  rule: (_coords: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.getCoords, [_coords]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "GetCoords", ["coords"]);
    return node;
  },
};

export default GetCoords;