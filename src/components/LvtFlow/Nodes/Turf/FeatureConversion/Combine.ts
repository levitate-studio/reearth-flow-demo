import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Combine: LvtNodeDef = {
  _id: "Combine",
  ui: {
    title: "Combine",
    description: "Combines a FeatureCollection of Point , LineString , or Polygon features into MultiPoint , MultiLineString , or MultiPolygon features.",
  },
  portsIn: [
    {
      name: "fc",
      dataType: "Turf.FeatureCollection <(Point|LineString|Polygon)>",
    },
  ],
  portsOut: [
    {
      name: "Combine",
      dataType: "Turf.FeatureCollection <(MultiPoint|MultiLineString|MultiPolygon)>",
    },
  ],
  rule: (_fc: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.combine, [_fc]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Combine", ["fc"]);
    return node;
  },
};

export default Combine;