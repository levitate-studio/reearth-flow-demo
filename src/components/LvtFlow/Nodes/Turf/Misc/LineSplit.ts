import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const LineSplit: LvtNodeDef = {
  _id: "LineSplit",
  ui: {
    title: "LineSplit",
    description: "Split a LineString by another GeoJSON Feature.",
  },
  portsIn: [
    {
      name: "line",
      dataType: "Turf.Feature <LineString>",
    },{
      name: "splitter",
      dataType: "Turf.Feature <any>",
    },
  ],
  portsOut: [
    {
      name: "LineSplit",
      dataType: "Turf.FeatureCollection <LineString>",
    },
  ],
  rule: (_line: any, _splitter: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.lineSplit, [_line, _splitter]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "LineSplit", ["line", "splitter"]);
    return node;
  },
};

export default LineSplit;