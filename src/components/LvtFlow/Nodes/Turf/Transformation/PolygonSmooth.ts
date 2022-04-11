import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const PolygonSmooth: LvtNodeDef = {
  _id: "PolygonSmooth",
  ui: {
    title: "PolygonSmooth",
    description: "Smooths a Polygon or MultiPolygon. Based on Chaikin's algorithm . Warning: may create degenerate polygons.",
  },
  portsIn: [
    {
      name: "inputPolys",
      dataType: "Turf.(FeatureCollection|Feature <(Polygon|MultiPolygon)>)",
    },{
      name: "options",
      dataType: "Turf.Object",
    },
  ],
  portsOut: [
    {
      name: "PolygonSmooth",
      dataType: "Turf.FeatureCollection <Polygon>",
    },
  ],
  rule: (_inputPolys: any, _options: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.polygonSmooth, [_inputPolys, _options]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "PolygonSmooth", ["inputPolys", "options"]);
    return node;
  },
};

export default PolygonSmooth;