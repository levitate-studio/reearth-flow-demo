import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const ShortestPath: LvtNodeDef = {
  _id: "ShortestPath",
  ui: {
    title: "ShortestPath",
    description: "Returns the shortest path from start to end without colliding with any Feature in obstacles",
  },
  portsIn: [
    {
      name: "start",
      dataType: "Turf.Coord",
    },{
      name: "end",
      dataType: "Turf.Coord",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "ShortestPath",
      dataType: "Turf.Feature <LineString>",
    },
  ],
  rule: (_start: any, _end: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.shortestPath, [_start, _end, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "ShortestPath", ["start", "end", "options"]);
    return node;
  },
};

export default ShortestPath;