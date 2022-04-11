import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const BooleanCrosses: LvtNodeDef = {
  _id: "BooleanCrosses",
  ui: {
    title: "BooleanCrosses",
    description: "Boolean-Crosses returns True if the intersection results in a geometry whose dimension is one less than the maximum dimension of the two source geometries and the intersection set is interior to both source geometries.",
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
      name: "BooleanCrosses",
      dataType: "Turf.boolean",
    },
  ],
  rule: (_feature1: any, _feature2: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.booleanCrosses, [_feature1, _feature2]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "BooleanCrosses", ["feature1", "feature2"]);
    return node;
  },
};

export default BooleanCrosses;