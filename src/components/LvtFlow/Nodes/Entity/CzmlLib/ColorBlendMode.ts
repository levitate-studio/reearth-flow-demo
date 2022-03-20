import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const ColorBlendMode: LvtNodeDef = {
  _id: "ColorBlendMode",
  ui: {
    title: "ColorBlendMode",
    description: "The mode of blending between a target color and an entity's source color.",
  },
  portsIn: [
    {
      name: "colorBlendMode",
      dataType: "ColorBlendModeValue",
      ui:{
        description: "The color blend mode."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The color blend mode specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "ColorBlendMode",
      dataType: "ColorBlendMode",
    },
  ],
  rule: (_colorBlendMode: any, _reference: any) => {
    return packageSpreadValue(
      { _colorBlendMode, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "ColorBlendMode", ["colorBlendMode", "reference"]);
    return node;
  },
};

export default ColorBlendMode;