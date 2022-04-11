import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const BboxClip: LvtNodeDef = {
  _id: "BboxClip",
  ui: {
    title: "BboxClip",
    description: "Takes a Feature and a bbox and clips the feature to the bbox using lineclip. May result in degenerate edges when clipping Polygons.",
  },
  portsIn: [
    {
      name: "feature",
      dataType: "Turf.Feature <(LineString|MultiLineString|Polygon|MultiPolygon)>",
    },{
      name: "bbox",
      dataType: "Turf.BBox",
    },
  ],
  portsOut: [
    {
      name: "BboxClip",
      dataType: "Turf.Feature <(LineString|MultiLineString|Polygon|MultiPolygon)>",
    },
  ],
  rule: (_feature: any, _bbox: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.bboxClip, [_feature, _bbox]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "BboxClip", ["feature", "bbox"]);
    return node;
  },
};

export default BboxClip;