import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Double: LvtNodeDef = {
  _id: "Double",
  ui: {
    title: "Double",
    description: "A floating-point number.",
  },
  portsIn: [
    {
      name: "number",
      dataType: "DoubleValue",
      ui:{
        description: "The number."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The number specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "Double",
      dataType: "Double",
    },
  ],
  rule: (_number: any, _reference: any) => {
    return packageSpreadValue(
      { _number, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Double", ["number", "reference"]);
    return node;
  },
};

export default Double;