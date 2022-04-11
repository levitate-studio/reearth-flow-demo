import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Dissolve: LvtNodeDef = {
  _id: "Dissolve",
  ui: {
    title: "Dissolve",
    description: "Dissolves a FeatureCollection of polygon features, filtered by an optional property name:value. Note that mulitpolygon features within the collection are not supported",
  },
  portsIn: [
    {
      name: "featureCollection",
      dataType: "Turf.FeatureCollection <Polygon>",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "Dissolve",
      dataType: "Turf.FeatureCollection <Polygon>",
    },
  ],
  rule: (_featureCollection: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.dissolve, [_featureCollection, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "Dissolve", ["featureCollection", "options"]);
    return node;
  },
};

export default Dissolve;