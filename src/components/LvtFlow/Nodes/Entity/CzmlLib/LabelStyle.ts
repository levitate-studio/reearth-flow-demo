import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const LabelStyle: LvtNodeDef = {
  _id: "LabelStyle",
  ui: {
    title: "LabelStyle",
    description: "The style of a label.",
  },
  portsIn: [
    {
      name: "labelStyle",
      dataType: "LabelStyleValue",
      ui:{
        description: "The label style."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The label style specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "LabelStyle",
      dataType: "LabelStyle",
    },
  ],
  rule: (_labelStyle: any, _reference: any) => {
    return packageSpreadValue(
      { _labelStyle, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "LabelStyle", ["labelStyle", "reference"]);
    return node;
  },
};

export default LabelStyle;