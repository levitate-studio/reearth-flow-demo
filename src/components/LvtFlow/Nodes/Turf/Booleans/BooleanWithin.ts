import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const BooleanWithin: LvtNodeDef = {
  _id: "BooleanWithin",
  ui: {
    title: "BooleanWithin",
    description: "Boolean-within returns true if the first geometry is completely within the second geometry. The interiors of both geometries must intersect and, the interior and boundary of the primary (geometry a) must not intersect the exterior of the secondary (geometry b). Boolean-within returns the exact opposite result of the @turf/boolean-contains.",
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
      name: "BooleanWithin",
      dataType: "Turf.boolean",
    },
  ],
  rule: (_feature1: any, _feature2: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.booleanWithin, [_feature1, _feature2]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "BooleanWithin", ["feature1", "feature2"]);
    return node;
  },
};

export default BooleanWithin;