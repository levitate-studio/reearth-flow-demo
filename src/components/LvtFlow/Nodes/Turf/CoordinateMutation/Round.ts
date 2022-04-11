import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Round: LvtNodeDef = {
  _id: "Round",
  ui: {
    title: "Round",
    description: "Round number to precision",
  },
  portsIn: [
    {
      name: "num",
      dataType: "Turf.number",
    },{
      name: "precision",
      dataType: "Turf.number",
    },
  ],
  portsOut: [
    {
      name: "Round",
      dataType: "Turf.number",
    },
  ],
  rule: (_num: any, _precision: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.round, [_num, _precision]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Round", ["num", "precision"]);
    return node;
  },
};

export default Round;