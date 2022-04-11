import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const BooleanContains: LvtNodeDef = {
  _id: "BooleanContains",
  ui: {
    title: "BooleanContains",
    description: "Boolean-contains returns True if the second geometry is completely contained by the first geometry. The interiors of both geometries must intersect and, the interior and boundary of the secondary (geometry b) must not intersect the exterior of the primary (geometry a). Boolean-contains returns the exact opposite result of the @turf/boolean-within.",
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
      name: "BooleanContains",
      dataType: "Turf.boolean",
    },
  ],
  rule: (_feature1: any, _feature2: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.booleanContains, [_feature1, _feature2]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "BooleanContains", ["feature1", "feature2"]);
    return node;
  },
};

export default BooleanContains;