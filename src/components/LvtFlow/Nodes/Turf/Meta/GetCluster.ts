import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const GetCluster: LvtNodeDef = {
  _id: "GetCluster",
  ui: {
    title: "GetCluster",
    description: "Get Cluster",
  },
  portsIn: [
    {
      name: "geojson",
      dataType: "Turf.FeatureCollection",
    },{
      name: "filter",
      dataType: "Turf.*",
    },
  ],
  portsOut: [
    {
      name: "GetCluster",
      dataType: "Turf.FeatureCollection",
    },
  ],
  rule: (_geojson: any, _filter: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.getCluster, [_geojson, _filter]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "GetCluster", ["geojson", "filter"]);
    return node;
  },
};

export default GetCluster;