import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Sector: LvtNodeDef = {
  _id: "Sector",
  ui: {
    title: "Sector",
    description: "Creates a circular sector of a circle of given radius and center Point , between (clockwise) bearing1 and bearing2; 0 bearing is North of center point, positive clockwise.",
  },
  portsIn: [
    {
      name: "center",
      dataType: "Turf.Coord",
    },{
      name: "radius",
      dataType: "Turf.number",
    },{
      name: "bearing1",
      dataType: "Turf.number",
    },{
      name: "bearing2",
      dataType: "Turf.number",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "Sector",
      dataType: "Turf.Feature <Polygon>",
    },
  ],
  rule: (_center: any, _radius: any, _bearing1: any, _bearing2: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.sector, [_center, _radius, _bearing1, _bearing2, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Sector", ["center", "radius", "bearing1", "bearing2", "options"]);
    return node;
  },
};

export default Sector;