import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const ConvertArea: LvtNodeDef = {
  _id: "ConvertArea",
  ui: {
    title: "ConvertArea",
    description: "Converts a area to the requested unit. Valid units: kilometers, kilometres, meters, metres, centimetres, millimeters, acres, miles, yards, feet, inches, hectares",
  },
  portsIn: [
    {
      name: "area",
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
      name: "ConvertArea",
      dataType: "Turf.number",
    },
  ],
  rule: (_area: any, _originalUnit: any, _finalUnit: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.convertArea, [_area, _originalUnit, _finalUnit]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "ConvertArea", ["area", "originalUnit", "finalUnit"]);
    return node;
  },
};

export default ConvertArea;