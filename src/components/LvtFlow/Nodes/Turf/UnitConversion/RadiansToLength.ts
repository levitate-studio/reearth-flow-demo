import * as turf from "@turf/turf";

import { updateNode, packageFuctionCall } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const RadiansToLength: LvtNodeDef = {
  _id: "RadiansToLength",
  ui: {
    title: "RadiansToLength",
    description: "Convert a distance measurement (assuming a spherical Earth) from radians to a more friendly unit. Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet",
  },
  portsIn: [
    {
      name: "radians",
      dataType: "Turf.number",
    },{
      name: "units",
      dataType: "Turf.string",
    },
  ],
  portsOut: [
    {
      name: "RadiansToLength",
      dataType: "Turf.number",
    },
  ],
  rule: (_radians: any, _units: any) => {
    let result = [];
    try {
      result = packageFuctionCall(turf.radiansToLength, [_radians, _units]);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "RadiansToLength", ["radians", "units"]);
    return node;
  },
};

export default RadiansToLength;