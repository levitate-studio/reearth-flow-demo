import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const LengthToDegrees: LvtNodeDef = {
  _id: "LengthToDegrees",
  ui: {
    title: "LengthToDegrees",
    description: "Convert a distance measurement (assuming a spherical Earth) from a real-world unit into degrees Valid units: miles, nauticalmiles, inches, yards, meters, metres, centimeters, kilometres, feet",
  },
  portsIn: [
    {
      name: "distance",
      dataType: "Turf.number",
    },{
      name: "units",
      dataType: "Turf.string",
    },
  ],
  portsOut: [
    {
      name: "LengthToDegrees",
      dataType: "Turf.number",
    },
  ],
  rule: (_distance: any, _units: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.lengthToDegrees, [_distance, _units]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "LengthToDegrees", ["distance", "units"]);
    return node;
  },
};

export default LengthToDegrees;