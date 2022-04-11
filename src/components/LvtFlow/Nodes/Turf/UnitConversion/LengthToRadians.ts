import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const LengthToRadians: LvtNodeDef = {
  _id: "LengthToRadians",
  ui: {
    title: "LengthToRadians",
    description: "Convert a distance measurement (assuming a spherical Earth) from a real-world unit into radians Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet",
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
      name: "LengthToRadians",
      dataType: "Turf.number",
    },
  ],
  rule: (_distance: any, _units: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.lengthToRadians, [_distance, _units]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "LengthToRadians", ["distance", "units"]);
    return node;
  },
};

export default LengthToRadians;