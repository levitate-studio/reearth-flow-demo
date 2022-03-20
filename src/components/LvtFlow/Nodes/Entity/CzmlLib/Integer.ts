import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Integer: LvtNodeDef = {
  _id: "Integer",
  ui: {
    title: "Integer",
    description: "An integer number.",
  },
  portsIn: [
    {
      name: "number",
      dataType: "IntegerValue",
      ui:{
        description: "The integer."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The integer specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "Integer",
      dataType: "Integer",
    },
  ],
  rule: (_number: any, _reference: any) => {
    return packageSpreadValue(
      { _number, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Integer", ["number", "reference"]);
    return node;
  },
};

export default Integer;