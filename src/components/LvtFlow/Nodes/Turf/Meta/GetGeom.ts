import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const GetGeom: LvtNodeDef = {
  _id: "GetGeom",
  ui: {
    title: "GetGeom",
    description: "Get Geometry from Feature or Geometry Object",
  },
  portsIn: [
    {
      name: "geojson",
      dataType: "Turf.(Feature|Geometry)",
    },
  ],
  portsOut: [
    {
      name: "GetGeom",
      dataType: "Turf.(Geometry|null)",
    },
  ],
  rule: (_geojson: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.getGeom, [_geojson]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "GetGeom", ["geojson"]);
    return node;
  },
};

export default GetGeom;