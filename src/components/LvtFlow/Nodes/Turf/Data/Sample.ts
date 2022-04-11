import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Sample: LvtNodeDef = {
  _id: "Sample",
  ui: {
    title: "Sample",
    description: "Takes a FeatureCollection and returns a FeatureCollection with given number of features at random.",
  },
  portsIn: [
    {
      name: "featurecollection",
      dataType: "Turf.FeatureCollection",
    },{
      name: "num",
      dataType: "Turf.number",
    },
  ],
  portsOut: [
    {
      name: "Sample",
      dataType: "Turf.FeatureCollection",
    },
  ],
  rule: (_featurecollection: any, _num: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.sample, [_featurecollection, _num]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Sample", ["featurecollection", "num"]);
    return node;
  },
};

export default Sample;