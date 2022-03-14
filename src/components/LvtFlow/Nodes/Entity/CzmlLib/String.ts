import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const String: LvtNodeDef = {
  _id: "String",
  ui: {
    title: "String",
    description: "A string value. The string can optionally vary with time.",
  },
  portsIn: [
    {
      name: "string",
      dataType: "StringValue",
      ui:{
        description: "The string value."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The string specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "String",
      dataType: "String",
    },
  ],
  rule: (_string: any, _reference: any) => {
    return packageSpreadValue(
      { _string, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "String", ["string", "reference"]);
    return node;
  },
};

export default String;