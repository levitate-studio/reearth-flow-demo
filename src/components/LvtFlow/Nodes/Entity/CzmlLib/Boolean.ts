import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Boolean: LvtNodeDef = {
  _id: "Boolean",
  ui: {
    title: "Boolean",
    description: "A boolean value.",
  },
  portsIn: [
    {
      name: "boolean",
      dataType: "BooleanValue",
      ui:{
        description: "The boolean value."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The boolean specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "Boolean",
      dataType: "Boolean",
    },
  ],
  rule: (_boolean: any, _reference: any) => {
    return packageSpreadValue(
      { _boolean, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Boolean", ["boolean", "reference"]);
    return node;
  },
};

export default Boolean;