import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Mask: LvtNodeDef = {
  _id: "Mask",
  ui: {
    title: "Mask",
    description: "Takes any type of polygon and an optional mask and returns a polygon exterior ring with holes.",
  },
  portsIn: [
    {
      name: "polygon",
      dataType: "Turf.(FeatureCollection|Feature <(Polygon|MultiPolygon)>)",
    },{
      name: "mask",
      dataType: "Turf.(Feature <Polygon>)",
    },
  ],
  portsOut: [
    {
      name: "Mask",
      dataType: "Turf.Feature <Polygon>",
    },
  ],
  rule: (_polygon: any, _mask: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.mask, [_polygon, _mask]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Mask", ["polygon", "mask"]);
    return node;
  },
};

export default Mask;