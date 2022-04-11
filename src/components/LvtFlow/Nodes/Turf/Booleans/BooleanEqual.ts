import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const BooleanEqual: LvtNodeDef = {
  _id: "BooleanEqual",
  ui: {
    title: "BooleanEqual",
    description: "Determine whether two geometries of the same type have identical X,Y coordinate values. See http://edndoc.esri.com/arcsde/9.0/general_topics/understand_spatial_relations.htm",
  },
  portsIn: [
    {
      name: "feature1",
      dataType: "Turf.(Geometry|Feature)",
    },{
      name: "feature2",
      dataType: "Turf.(Geometry|Feature)",
    },
  ],
  portsOut: [
    {
      name: "BooleanEqual",
      dataType: "Turf.boolean",
    },
  ],
  rule: (_feature1: any, _feature2: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.booleanEqual, [_feature1, _feature2]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "BooleanEqual", ["feature1", "feature2"]);
    return node;
  },
};

export default BooleanEqual;