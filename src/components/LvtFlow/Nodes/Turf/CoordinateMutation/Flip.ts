import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Flip: LvtNodeDef = {
  _id: "Flip",
  ui: {
    title: "Flip",
    description: "Takes input features and flips all of their coordinates from [x, y] to [y, x].",
  },
  portsIn: [
    {
      name: "geojson",
      dataType: "Turf.GeoJSON",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "Flip",
      dataType: "Turf.GeoJSON",
    },
  ],
  rule: (_geojson: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.flip, [_geojson, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Flip", ["geojson", "options"]);
    return node;
  },
};

export default Flip;