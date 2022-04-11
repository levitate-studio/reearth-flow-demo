import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const BooleanDisjoint: LvtNodeDef = {
  _id: "BooleanDisjoint",
  ui: {
    title: "BooleanDisjoint",
    description: "Boolean-disjoint returns (TRUE) if the intersection of the two geometries is an empty set.",
  },
  portsIn: [
    {
      name: "feature1",
      dataType: "Turf.(Geometry|Feature <any>)",
    },{
      name: "feature2",
      dataType: "Turf.(Geometry|Feature <any>)",
    },
  ],
  portsOut: [
    {
      name: "BooleanDisjoint",
      dataType: "Turf.boolean",
    },
  ],
  rule: (_feature1: any, _feature2: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.booleanDisjoint, [_feature1, _feature2]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "BooleanDisjoint", ["feature1", "feature2"]);
    return node;
  },
};

export default BooleanDisjoint;