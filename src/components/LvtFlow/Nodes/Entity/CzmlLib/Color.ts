import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Color: LvtNodeDef = {
  _id: "Color",
  ui: {
    title: "Color",
    description: "A color. The color can optionally vary over time.",
  },
  portsIn: [
    {
      name: "rgba",
      dataType: "RgbaValue",
      ui:{
        description: "The color specified as an array of color components `[Red, Green, Blue, Alpha]` where each component is an integer in the range 0-255."
      },
    },{
      name: "rgbaf",
      dataType: "RgbafValue",
      ui:{
        description: "The color specified as an array of color components `[Red, Green, Blue, Alpha]` where each component is a double in the range 0.0-1.0."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The color specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "Color",
      dataType: "Color",
    },
  ],
  rule: (_rgba: any, _rgbaf: any, _reference: any) => {
    return packageSpreadValue(
      { _rgba, _rgbaf, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Color", ["rgba", "rgbaf", "reference"]);
    return node;
  },
};

export default Color;