import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const BearingToAzimuth: LvtNodeDef = {
  _id: "BearingToAzimuth",
  ui: {
    title: "BearingToAzimuth",
    description: "Converts any bearing angle from the north line direction (positive clockwise) and returns an angle between 0-360 degrees (positive clockwise), 0 being the north line",
  },
  portsIn: [
    {
      name: "bearing",
      dataType: "Turf.number",
    },
  ],
  portsOut: [
    {
      name: "BearingToAzimuth",
      dataType: "Turf.number",
    },
  ],
  rule: (_bearing: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.bearingToAzimuth, [_bearing]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "BearingToAzimuth", ["bearing"]);
    return node;
  },
};

export default BearingToAzimuth;