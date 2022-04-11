import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const ContainsNumber: LvtNodeDef = {
  _id: "ContainsNumber",
  ui: {
    title: "ContainsNumber",
    description: "Checks if coordinates contains a number",
  },
  portsIn: [
    {
      name: "coordinates",
      dataType: "Turf.Array <any>",
    },
  ],
  portsOut: [
    {
      name: "ContainsNumber",
      dataType: "Turf.boolean",
    },
  ],
  rule: (_coordinates: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.containsNumber, [_coordinates]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "ContainsNumber", ["coordinates"]);
    return node;
  },
};

export default ContainsNumber;