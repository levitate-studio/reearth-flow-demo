import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const PolylineDashMaterial: LvtNodeDef = {
  _id: "PolylineDashMaterial",
  ui: {
    title: "PolylineDashMaterial",
    description: "A material that fills the surface of a line with a pattern of dashes.",
  },
  portsIn: [
    {
      name: "color",
      dataType: "Color",
      ui:{
        description: "The color of the dashes on the line."
      },
      defaultValue: "white",
    },{
      name: "gapColor",
      dataType: "Color",
      ui:{
        description: "The color of the gaps between dashes on the line."
      },
    },{
      name: "dashLength",
      dataType: "Double",
      ui:{
        description: "The length in screen-space pixels of a single dash and gap pattern."
      },
      defaultValue: 16.0,
    },{
      name: "dashPattern",
      dataType: "Integer",
      ui:{
        description: "A 16-bit bitfield representing which portions along a single dashLength are the dash (1) and which are the gap (0). The default value, 255 (0000000011111111), indicates 50% gap followed by 50% dash."
      },
    },
  ],
  portsOut: [
    {
      name: "PolylineDashMaterial",
      dataType: "PolylineDashMaterial",
    },
  ],
  rule: (_color: any, _gapColor: any, _dashLength: any, _dashPattern: any) => {
    return packageSpreadValue(
      { _color, _gapColor, _dashLength, _dashPattern }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "PolylineDashMaterial", ["color", "gapColor", "dashLength", "dashPattern"]);
    return node;
  },
};

export default PolylineDashMaterial;