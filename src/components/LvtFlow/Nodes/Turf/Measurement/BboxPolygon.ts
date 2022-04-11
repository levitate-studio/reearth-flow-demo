import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const BboxPolygon: LvtNodeDef = {
  _id: "BboxPolygon",
  ui: {
    title: "BboxPolygon",
    description: "Takes a bbox and returns an equivalent polygon.",
  },
  portsIn: [
    {
      name: "bbox",
      dataType: "Turf.BBox",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "BboxPolygon",
      dataType: "Turf.Feature <Polygon>",
    },
  ],
  rule: (_bbox: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.bboxPolygon, [_bbox, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "BboxPolygon", ["bbox", "options"]);
    return node;
  },
};

export default BboxPolygon;