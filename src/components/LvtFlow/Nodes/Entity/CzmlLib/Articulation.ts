import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Articulation: LvtNodeDef = {
  _id: "Articulation",
  ui: {
    title: "Articulation",
    description: "An articulation value.",
  },
  portsIn: [
    {
      name: "number",
      dataType: "DoubleValue",
      ui:{
        description: "The articulation value."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The articulation value specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "Articulation",
      dataType: "Articulation",
    },
  ],
  rule: (_number: any, _reference: any) => {
    return packageSpreadValue(
      { _number, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Articulation", ["number", "reference"]);
    return node;
  },
};

export default Articulation;