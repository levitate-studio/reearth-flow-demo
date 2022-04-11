import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const ConvertLength: LvtNodeDef = {
  _id: "ConvertLength",
  ui: {
    title: "ConvertLength",
    description: "Converts a length to the requested unit. Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet",
  },
  portsIn: [
    {
      name: "length",
      dataType: "Turf.number",
    },{
      name: "originalUnit",
      dataType: "Turf.Units",
    },{
      name: "finalUnit",
      dataType: "Turf.Units",
    },
  ],
  portsOut: [
    {
      name: "ConvertLength",
      dataType: "Turf.number",
    },
  ],
  rule: (_length: any, _originalUnit: any, _finalUnit: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.convertLength, [_length, _originalUnit, _finalUnit]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "ConvertLength", ["length", "originalUnit", "finalUnit"]);
    return node;
  },
};

export default ConvertLength;