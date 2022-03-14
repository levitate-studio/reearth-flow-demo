import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const SolidColorMaterial: LvtNodeDef = {
  _id: "SolidColorMaterial",
  ui: {
    title: "SolidColorMaterial",
    description: "A material that fills the surface with a solid color.",
  },
  portsIn: [
    {
      name: "color",
      dataType: "Color",
      ui:{
        description: "The color of the surface."
      },
      defaultValue: "white",
    },
  ],
  portsOut: [
    {
      name: "SolidColorMaterial",
      dataType: "SolidColorMaterial",
    },
  ],
  rule: (_color: any) => {
    return packageSpreadValue(
      { _color }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "SolidColorMaterial", ["color"]);
    return node;
  },
};

export default SolidColorMaterial;