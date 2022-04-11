import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const GetType: LvtNodeDef = {
  _id: "GetType",
  ui: {
    title: "GetType",
    description: "Get GeoJSON object's type, Geometry type is prioritize.",
  },
  portsIn: [
    {
      name: "geojson",
      dataType: "Turf.GeoJSON",
    },{
      name: "undefined",
      dataType: "Turf.undefined",
    },{
      name: "name",
      dataType: "Turf.string",
    },
  ],
  portsOut: [
    {
      name: "GetType",
      dataType: "Turf.string",
    },
  ],
  rule: (_geojson: any, _undefined: any, _name: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.getType, [_geojson, _undefined, _name]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "GetType", ["geojson", "", "name"]);
    return node;
  },
};

export default GetType;