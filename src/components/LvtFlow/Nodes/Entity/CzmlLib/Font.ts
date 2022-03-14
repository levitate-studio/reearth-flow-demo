import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Font: LvtNodeDef = {
  _id: "Font",
  ui: {
    title: "Font",
    description: "A font used to draw text. Fonts are specified using the same syntax as the CSS 'font' property.",
  },
  portsIn: [
    {
      name: "font",
      dataType: "FontValue",
      ui:{
        description: "The font, specified using the same syntax as the CSS 'font' property."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The font specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "Font",
      dataType: "Font",
    },
  ],
  rule: (_font: any, _reference: any) => {
    return packageSpreadValue(
      { _font, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Font", ["font", "reference"]);
    return node;
  },
};

export default Font;