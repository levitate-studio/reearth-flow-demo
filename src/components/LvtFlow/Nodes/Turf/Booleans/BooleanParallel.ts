import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const BooleanParallel: LvtNodeDef = {
  _id: "BooleanParallel",
  ui: {
    title: "BooleanParallel",
    description: "Boolean-Parallel returns True if each segment of line1 is parallel to the correspondent segment of line2",
  },
  portsIn: [
    {
      name: "line1",
      dataType: "Turf.(Geometry|Feature <LineString>)",
    },{
      name: "line2",
      dataType: "Turf.(Geometry|Feature <LineString>)",
    },
  ],
  portsOut: [
    {
      name: "BooleanParallel",
      dataType: "Turf.boolean",
    },
  ],
  rule: (_line1: any, _line2: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.booleanParallel, [_line1, _line2]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "BooleanParallel", ["line1", "line2"]);
    return node;
  },
};

export default BooleanParallel;