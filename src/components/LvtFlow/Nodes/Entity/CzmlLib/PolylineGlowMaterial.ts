import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const PolylineGlowMaterial: LvtNodeDef = {
  _id: "PolylineGlowMaterial",
  ui: {
    title: "PolylineGlowMaterial",
    description: "A material that fills the surface of a line with a glowing color.",
  },
  portsIn: [
    {
      name: "color",
      dataType: "Color",
      ui:{
        description: "The color of the surface."
      },
      defaultValue: "white",
    },{
      name: "glowPower",
      dataType: "Double",
      ui:{
        description: "The strength of the glow."
      },
    },{
      name: "taperPower",
      dataType: "Double",
      ui:{
        description: "The strength of the tapering effect.  1.0 and higher means no tapering."
      },
      defaultValue: 1.0,
    },
  ],
  portsOut: [
    {
      name: "PolylineGlowMaterial",
      dataType: "PolylineGlowMaterial",
    },
  ],
  rule: (_color: any, _glowPower: any, _taperPower: any) => {
    return packageSpreadValue(
      { _color, _glowPower, _taperPower }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "PolylineGlowMaterial", ["color", "glowPower", "taperPower"]);
    return node;
  },
};

export default PolylineGlowMaterial;